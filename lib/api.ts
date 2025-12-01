import { cache } from 'react';

export interface ServerProduct {
  id: string;
  title: string;
  price: number;
  originalPrice: number;
  specs: {
    cpu: string;
    ram: string;
    storage: string;
    bandwidth: string;
  };
  inStock: boolean;
  location?: string;
}

const API_USER = process.env.NOCIX_API_USER || '50307_api';
const API_TOKEN = process.env.NOCIX_API_TOKEN || '6af0f8rzbzk7ldbr1s6mrpdql5wdylbn';
const BASE_URL = 'https://my.nocix.net/api';

const parsePrice = (priceStr: string | number): number => {
  if (typeof priceStr === 'number') return priceStr;
  return parseFloat(priceStr.replace(/[^0-9.]/g, ''));
};

const extractSpecs = (name: string, description: string = '') => {
  const cpuMatch = name.match(/^(.*?)(?=\s\d+GB)/) || [name, name];
  const ramMatch = name.match(/(\d+GB\sRAM)/) || description.match(/(\d+GB\sRAM)/);
  const storageMatch = name.match(/(\d+x\d+[GT]B\s(?:SSD|HDD|NVMe))/) || description.match(/(\d+x\d+[GT]B\s(?:SSD|HDD|NVMe))/);
  const bandwidthMatch = name.match(/(Unmetered|100TB|30TB)/) || ['Unmetered'];

  return {
    cpu: cpuMatch[0].trim(),
    ram: ramMatch ? ramMatch[0] : 'Unknown RAM',
    storage: storageMatch ? storageMatch[0] : 'Unknown Storage',
    bandwidth: bandwidthMatch ? bandwidthMatch[0] : 'Unmetered',
  };
};

export const getServers = cache(async (): Promise<ServerProduct[]> => {
  // Try multiple endpoints
  const endpoints = [
    '/list-services/',
    '/list-products/',
    '/preconfigured-servers/',
  ];

  for (const endpoint of endpoints) {
    try {
      const response = await fetch(`${BASE_URL}${endpoint}`, {
        headers: {
          'Authorization': 'Basic ' + Buffer.from(`${API_USER}:${API_TOKEN}`).toString('base64'),
          'Accept': 'application/json',
        },
        next: { revalidate: 3600 },
        cache: 'no-store', // Disable caching for debugging
      });

      console.log(`[API] Trying ${endpoint}: Status ${response.status}`);

      if (!response.ok) {
        console.error(`[API] Error on ${endpoint}:`, response.status, response.statusText);
        continue;
      }

      const contentType = response.headers.get('content-type');
      console.log(`[API] Content-Type:`, contentType);

      const text = await response.text();
      console.log(`[API] Response length:`, text.length, 'bytes');
      console.log(`[API] Response preview:`, text.substring(0, 200));

      if (!text || text.length === 0) {
        console.warn(`[API] Empty response from ${endpoint}`);
        continue;
      }

      // Try to parse as JSON
      let data;
      try {
        data = JSON.parse(text);
      } catch (e) {
        console.error(`[API] Failed to parse JSON from ${endpoint}:`, e);
        console.log(`[API] Raw text:`, text.substring(0, 500));
        continue;
      }

      if (!Array.isArray(data)) {
        console.warn(`[API] Non-array response from ${endpoint}:`, typeof data);

        // Check if it's an object with a data property
        if (data && typeof data === 'object' && Array.isArray(data.data)) {
          data = data.data;
        } else if (data && typeof data === 'object' && Array.isArray(data.servers)) {
          data = data.servers;
        } else if (data && typeof data === 'object' && Array.isArray(data.products)) {
          data = data.products;
        } else {
          console.log(`[API] Data structure:`, JSON.stringify(data).substring(0, 300));
          continue;
        }
      }

      if (data.length === 0) {
        console.warn(`[API] Empty array from ${endpoint}`);
        continue;
      }

      console.log(`[API] SUCCESS! Found ${data.length} items from ${endpoint}`);
      console.log(`[API] First item:`, JSON.stringify(data[0]));

      // Transform and return data
      return data.map((item: any) => {
        const originalPrice = parsePrice(item.price || item.monthly_fee || item.monthly_price || '0');
        const markupPrice = originalPrice * 1.10;

        return {
          id: item.id || item.server_id || `server-${Math.random()}`,
          title: item.name || item.title || item.description || 'Dedicated Server',
          price: parseFloat(markupPrice.toFixed(2)),
          originalPrice: originalPrice,
          specs: extractSpecs(item.name || item.title || '', item.description || ''),
          inStock: item.in_stock !== false,
          location: item.location || item.datacenter || undefined,
        };
      });

    } catch (error) {
      console.error(`[API] Exception on ${endpoint}:`, error);
      continue;
    }
  }

  // If all endpoints fail, log and return empty
  console.error('[API] All endpoints failed or returned empty data');
  console.error('[API] This likely means:');
  console.error('[API] 1. The API credentials do not have access to inventory');
  console.error('[API] 2. You need to configure/purchase servers in the Nocix panel first');
  console.error('[API] 3. The API endpoints have changed');

  return [];
});
