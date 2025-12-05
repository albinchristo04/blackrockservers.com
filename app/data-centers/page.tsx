import PageHeader from '@/components/PageHeader';
import LocationsMap from '@/components/LocationsMap';

export const metadata = {
    title: 'Data Centers | BlackRock Servers',
    description: 'Our global network of Tier-III data centers ensures your content is always close to your users.',
};

export default function DataCentersPage() {
    const locations = [
        { city: 'New York, USA', code: 'NYC', region: 'North America', latency: '< 20ms' },
        { city: 'London, UK', code: 'LDN', region: 'Europe', latency: '< 30ms' },
        { city: 'Frankfurt, DE', code: 'FRA', region: 'Europe', latency: '< 30ms' },
        { city: 'Singapore, SG', code: 'SIN', region: 'Asia Pacific', latency: '< 80ms' },
        { city: 'Tokyo, JP', code: 'TYO', region: 'Asia Pacific', latency: '< 100ms' },
        { city: 'Amsterdam, NL', code: 'AMS', region: 'Europe', latency: '< 25ms' },
    ];

    return (
        <main className="min-h-screen bg-black">
            <PageHeader
                title="Global Infrastructure"
                subtitle="Strategically located data centers connecting you to the world's major internet hubs."
            />

            <div className="container mx-auto px-4 py-12">
                <div className="-mt-32 relative z-10 mb-20 bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden shadow-2xl">
                    <LocationsMap />
                </div>

                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-white mb-10 text-center">Available Locations</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {locations.map((loc) => (
                            <div key={loc.code} className="p-6 bg-gray-900 border border-gray-800 rounded-xl hover:border-blue-500/40 transition-all group">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{loc.city}</h3>
                                        <span className="text-sm text-gray-500">{loc.region}</span>
                                    </div>
                                    <div className="px-3 py-1 rounded bg-blue-500/10 text-blue-400 text-xs font-bold font-mono">
                                        {loc.code}
                                    </div>
                                </div>
                                <div className="flex items-center justify-between text-sm mt-4 pt-4 border-t border-gray-800">
                                    <span className="text-gray-400">Network Latency</span>
                                    <span className="text-green-400 font-mono">{loc.latency}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="max-w-4xl mx-auto bg-gray-900/50 p-8 rounded-2xl border border-gray-800 text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">Can't find your location?</h3>
                    <p className="text-gray-400 mb-6">
                        We are constantly expanding our global footprint. Contact our sales team to inquire about upcoming locations or custom deployments.
                    </p>
                    <a href="/contact" className="inline-flex items-center gap-2 text-blue-400 hover:text-white transition-colors">
                        Contact Sales
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </main>
    );
}
