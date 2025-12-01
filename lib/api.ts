import { sql } from '@vercel/postgres';
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
  // Try to fetch from database first
  try {
    const { rows } = await sql`SELECT * FROM servers WHERE in_stock = true ORDER BY price ASC`;
    if (rows && rows.length > 0) {
      return rows.map((row: any) => ({
        id: row.id,
        title: row.title,
        price: parseFloat(row.price),
        originalPrice: parseFloat(row.original_price),
        specs: {
          cpu: row.cpu,
          ram: row.ram,
          storage: row.storage,
          bandwidth: row.bandwidth,
        },
        inStock: row.in_stock,
      }));
    }
  } catch (dbError) {
    console.log('Database not available, falling back to API:', dbError);
  }

  // Fallback to Nocix API
  const endpoint = `${BASE_URL}/preconfigured-servers/`;

  try {
    const response = await fetch(endpoint, {
      headers: {
        'Authorization': 'Basic ' + btoa(`${API_USER}:${API_TOKEN}`),
      },
      next: { revalidate: 3600 }
    });

    if (!response.ok) {
      console.error('API Error:', response.status, response.statusText);
      return [];
    }

    const data = await response.json();

    if (!Array.isArray(data)) {
      console.warn('API returned non-array:', data);
      return [];
    }

    return data.map((item: any) => {
      const originalPrice = parsePrice(item.price || item.monthly_fee || '0');
      const markupPrice = originalPrice * 1.10;

      return {
        id: item.id || `server-${Math.random()}`,
        title: item.name || item.description || 'Dedicated Server',
        price: parseFloat(markupPrice.toFixed(2)),
        originalPrice: originalPrice,
        specs: extractSpecs(item.name || '', item.description || ''),
        inStock: true,
      };
    });

  } catch (error) {
    console.error('Failed to fetch servers:', error);
    return [];
  }
});
