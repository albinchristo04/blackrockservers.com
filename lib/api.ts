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
  category: 'budget' | 'performance' | 'enterprise';
}

const JSON_SOURCE_URL = 'https://raw.githubusercontent.com/albinchristo04/nocix.net/refs/heads/main/nocix_servers.json';

const parsePrice = (priceStr: string | number): number => {
  if (typeof priceStr === 'number') return priceStr;
  return parseFloat(priceStr.replace(/[^0-9.]/g, ''));
};

export const getServers = cache(async (): Promise<ServerProduct[]> => {
  try {
    console.log(`[API] Fetching servers from GitHub JSON source...`);

    const response = await fetch(JSON_SOURCE_URL, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!response.ok) {
      console.error(`[API] Failed to fetch: ${response.status} ${response.statusText}`);
      return [];
    }

    const data = await response.json();

    if (!data.servers || !Array.isArray(data.servers)) {
      console.error('[API] Invalid data structure - missing servers array');
      return [];
    }

    console.log(`[API] Successfully fetched ${data.servers.length} servers`);

    // Transform the data to match our ServerProduct interface
    return data.servers.map((server: any, index: number) => {
      // Build CPU string from processor details
      let cpuName = server.processor?.name || 'Unknown CPU';
      if (server.processor?.cores && server.processor?.threads) {
        cpuName += ` (${server.processor.cores}C/${server.processor.threads}T)`;
      } else if (server.processor?.cores) {
        cpuName += ` (${server.processor.cores} cores)`;
      }
      if (server.processor?.speed) {
        cpuName += ` @ ${server.processor.speed}`;
      }

      const originalPrice = parsePrice(server.price || '0');
      const markupPrice = originalPrice * 1.10; // 10% markup
      const finalPrice = Math.ceil(markupPrice);

      // Categorize based on price
      let category: 'budget' | 'performance' | 'enterprise';
      if (finalPrice < 30) {
        category = 'budget';
      } else if (finalPrice < 80) {
        category = 'performance';
      } else {
        category = 'enterprise';
      }

      return {
        id: `server-${index + 1}`,
        title: cpuName,
        price: finalPrice, // Round up to nearest whole number
        originalPrice: Math.ceil(originalPrice), // Round original price too
        specs: {
          cpu: server.processor?.name || 'Unknown CPU',
          ram: server.ram || 'Unknown RAM',
          storage: server.storage || 'Unknown Storage',
          bandwidth: server.bandwidth || 'Unmetered',
        },
        inStock: server.instant_deployment === true,
        location: server.location || undefined,
        category,
      };
    }).sort((a: ServerProduct, b: ServerProduct) => a.price - b.price);

  } catch (error) {
    console.error('[API] Error fetching servers:', error);
    return [];
  }
});
