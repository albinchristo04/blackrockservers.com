import { cache } from 'react';

// Types for the Nocix API response (inferred)
export interface NocixService {
  id: string;
  name: string;
  price: string; // Likely a string like "$50.00" or number
  description?: string;
  // Add other fields as we discover them
}

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

const API_USER = process.env.NOCIX_API_USER || '50307_api'; // Fallback for local dev if env not set
const API_TOKEN = process.env.NOCIX_API_TOKEN || '6af0f8rzbzk7ldbr1s6mrpdql5wdylbn';
const BASE_URL = 'https://my.nocix.net/api';

// Helper to parse price string to number
const parsePrice = (priceStr: string | number): number => {
  if (typeof priceStr === 'number') return priceStr;
  return parseFloat(priceStr.replace(/[^0-9.]/g, ''));
};

// Helper to extract specs from description (Regex based on typical server names)
const extractSpecs = (name: string, description: string = '') => {
  // Example: "Dual Xeon E5-2660 64GB RAM 2x480GB SSD Unmetered"
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
  // Using 'preconfigured-servers' as it likely lists available stock
  // If this fails, we might need 'list-products' or 'list-services' (though list-services is usually for owned items)
  const endpoint = `${BASE_URL}/preconfigured-servers/`;

  try {
    const response = await fetch(endpoint, {
      headers: {
        'Authorization': 'Basic ' + btoa(`${API_USER}:${API_TOKEN}`),
      },
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!response.ok) {
      console.error('API Error:', response.status, response.statusText);
      return []; // Return empty array on error, NO MOCK DATA
    }

    const data = await response.json();

    // Transform data
    // Note: We need to see the actual structure to map correctly. 
    // Assuming array of objects.
    if (!Array.isArray(data)) {
      console.warn('API returned non-array:', data);
      return []; // Return empty array, NO MOCK DATA
    }

    return data.map((item: any) => {
      const originalPrice = parsePrice(item.price || item.monthly_fee || '0');
      const markupPrice = originalPrice * 1.10; // 10% markup

      return {
        id: item.id || `server-${Math.random()}`,
        title: item.name || item.description || 'Dedicated Server',
        price: parseFloat(markupPrice.toFixed(2)),
        originalPrice: originalPrice,
        specs: extractSpecs(item.name || '', item.description || ''),
        inStock: true, // API usually lists available ones
      };
    });

  } catch (error) {
    console.error('Failed to fetch servers:', error);
    return []; // Return empty array on error, NO MOCK DATA
  }
});
