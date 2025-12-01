import { getServers, ServerProduct } from '@/lib/api';
import Link from 'next/link';

interface ServerCardProps {
    server: ServerProduct;
}

function ServerCard({ server }: ServerCardProps) {
    return (
        <div className="group relative bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10">
                <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 text-xs font-semibold mb-4">
                    ENTERPRISE
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {server.title}
                </h3>

                <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-3xl font-bold text-white">${server.price}</span>
                    <span className="text-gray-500 text-sm">/mo</span>
                </div>

                <div className="space-y-4 mb-8">
                    <SpecRow label="CPU" value={server.specs.cpu} icon="cpu" />
                    <SpecRow label="RAM" value={server.specs.ram} icon="memory" />
                    <SpecRow label="Storage" value={server.specs.storage} icon="storage" />
                    <SpecRow label="Bandwidth" value={server.specs.bandwidth} icon="network" />
                </div>

                <Link
                    href={`/order?server=${server.id}`}
                    className="block w-full py-3 px-6 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300 transform group-hover:translate-y-[-2px] text-center"
                >
                    Deploy Now
                </Link>
            </div>
        </div>
    );
}

function SpecRow({ label, value, icon }: { label: string; value: string; icon: string }) {
    return (
        <div className="flex items-center gap-3 text-gray-400">
            <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center text-purple-400">
                {icon === 'cpu' && (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                )}
                {icon === 'memory' && (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                )}
                {icon === 'storage' && (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                )}
                {icon === 'network' && (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                )}
            </div>
            <span className="text-sm font-medium">{value}</span>
        </div>
    );
}

export default async function EnterpriseServersPage() {
    const allServers = await getServers();
    const enterpriseServers = allServers.filter(s => s.category === 'enterprise');

    return (
        <main className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 text-sm font-semibold mb-6">
                            Maximum Performance
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-6">
                            Enterprise Servers
                        </h1>
                        <p className="text-xl text-gray-400 mb-8">
                            Flagship-grade infrastructure for mission-critical applications. Featuring the latest AMD Ryzen and Threadripper processors with massive RAM and NVMe storage.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/products/dedicated-servers" className="px-6 py-3 rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors">
                                View All Servers
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-12 border-t border-gray-900">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="text-center p-6">
                            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                </svg>
                            </div>
                            <h3 className="text-white font-bold mb-2">Latest CPUs</h3>
                            <p className="text-gray-400 text-sm">Ryzen 7 & Threadripper</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                                </svg>
                            </div>
                            <h3 className="text-white font-bold mb-2">Massive RAM</h3>
                            <p className="text-gray-400 text-sm">32GB+ DDR4 ECC</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                </svg>
                            </div>
                            <h3 className="text-white font-bold mb-2">NVMe Storage</h3>
                            <p className="text-gray-400 text-sm">Ultra-fast SSD arrays</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-white font-bold mb-2">Premium Support</h3>
                            <p className="text-gray-400 text-sm">24/7 priority assistance</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="py-20 bg-gray-900/50">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Why Choose Enterprise Servers?</h2>
                        <p className="text-gray-400">
                            The ultimate solution for mission-critical applications requiring maximum performance, reliability, and scalability.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-black border border-gray-800 p-6 rounded-xl">
                            <h3 className="text-xl font-bold text-white mb-3">Big Data & Analytics</h3>
                            <p className="text-gray-400 text-sm">
                                Process massive datasets in real-time with high core count processors and large memory capacity.
                            </p>
                        </div>
                        <div className="bg-black border border-gray-800 p-6 rounded-xl">
                            <h3 className="text-xl font-bold text-white mb-3">High-Frequency Trading</h3>
                            <p className="text-gray-400 text-sm">
                                Ultra-low latency infrastructure designed for financial institutions and trading platforms where every millisecond counts.
                            </p>
                        </div>
                        <div className="bg-black border border-gray-800 p-6 rounded-xl">
                            <h3 className="text-xl font-bold text-white mb-3">AI & Machine Learning</h3>
                            <p className="text-gray-400 text-sm">
                                Accelerate your AI training and inference workloads with powerful multi-core processors and high-speed storage.
                            </p>
                        </div>
                        <div className="bg-black border border-gray-800 p-6 rounded-xl">
                            <h3 className="text-xl font-bold text-white mb-3">SaaS Platforms</h3>
                            <p className="text-gray-400 text-sm">
                                Scale your Software-as-a-Service platform with confidence on infrastructure built for multi-tenancy and high availability.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Server List */}
            <section className="py-20 border-t border-gray-900">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-white mb-4">Available Enterprise Servers</h2>
                        <p className="text-gray-400 text-lg">{enterpriseServers.length} flagship servers available</p>
                    </div>
                    {enterpriseServers.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {enterpriseServers.map(server => (
                                <ServerCard key={server.id} server={server} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-gray-400">No enterprise servers available at the moment. Check back soon!</p>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
