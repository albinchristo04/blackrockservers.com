'use client';

import { useState } from 'react';
import { ServerProduct } from '@/lib/api';
import Link from 'next/link';

interface PricingClientProps {
    servers: (ServerProduct & { yearlyPrice: number })[];
}

export default function PricingClient({ servers }: PricingClientProps) {
    const [billingInterval, setBillingInterval] = useState<'monthly' | 'yearly'>('monthly');
    const [selectedCategory, setSelectedCategory] = useState<'all' | 'budget' | 'performance' | 'enterprise'>('all');

    const filteredServers = servers.filter(
        (s) => selectedCategory === 'all' || s.category === selectedCategory
    );

    return (
        <div className="container mx-auto px-4 -mt-10 relative z-20 pb-20">
            {/* Filters & Toggle */}
            <div className="bg-gray-900/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-4 mb-12 flex flex-col md:flex-row items-center justify-between gap-4">

                {/* Category Tabs */}
                <div className="flex p-1 bg-gray-800 rounded-xl overflow-x-auto w-full md:w-auto">
                    {(['all', 'budget', 'performance', 'enterprise'] as const).map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-6 py-2 rounded-lg text-sm font-medium transition-all capitalize whitespace-nowrap ${selectedCategory === cat
                                    ? 'bg-blue-600 text-white shadow-lg'
                                    : 'text-gray-400 hover:text-white hover:bg-gray-700'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Billing Toggle */}
                <div className="flex items-center gap-4 bg-gray-800 p-1 rounded-xl">
                    <button
                        onClick={() => setBillingInterval('monthly')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${billingInterval === 'monthly'
                                ? 'bg-gray-700 text-white shadow'
                                : 'text-gray-400 hover:text-white'
                            }`}
                    >
                        Monthly
                    </button>
                    <button
                        onClick={() => setBillingInterval('yearly')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${billingInterval === 'yearly'
                                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                                : 'text-gray-400 hover:text-white'
                            }`}
                    >
                        Yearly <span className="text-xs opacity-80 ml-1">(-17%)</span>
                    </button>
                </div>
            </div>

            {/* Pricing Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredServers.map((server) => (
                    <div
                        key={server.id}
                        className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] flex flex-col"
                    >
                        <div className="mb-6">
                            <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 capitalize 
                                ${server.category === 'budget' ? 'bg-green-500/10 text-green-400' :
                                    server.category === 'performance' ? 'bg-blue-500/10 text-blue-400' :
                                        'bg-purple-500/10 text-purple-400'}`}
                            >
                                {server.category}
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2 line-clamp-1" title={server.title}>
                                {server.title}
                            </h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-3xl font-bold text-white">
                                    ${billingInterval === 'monthly' ? server.price : Math.floor(server.yearlyPrice / 12)}
                                </span>
                                <span className="text-gray-500 text-sm">/mo</span>
                            </div>
                            {billingInterval === 'yearly' && (
                                <div className="text-sm text-green-400 mt-1">
                                    Billed ${server.yearlyPrice} yearly
                                </div>
                            )}
                        </div>

                        <div className="space-y-4 mb-8 flex-grow">
                            <PricingFeature label="CPU" value={server.specs.cpu} />
                            <PricingFeature label="RAM" value={server.specs.ram} />
                            <PricingFeature label="Storage" value={server.specs.storage} />
                            <PricingFeature label="Bandwidth" value={server.specs.bandwidth} />
                        </div>

                        <Link
                            href={`/order?server=${server.id}&billing=${billingInterval}`}
                            className="block w-full py-3 px-6 rounded-xl bg-white text-black font-bold hover:bg-blue-500 hover:text-white transition-all text-center"
                        >
                            Deploy Now
                        </Link>
                    </div>
                ))}
            </div>

            {filteredServers.length === 0 && (
                <div className="text-center py-20 text-gray-500">
                    No servers found in this category.
                </div>
            )}
        </div>
    );
}

function PricingFeature({ label, value }: { label: string, value: string }) {
    return (
        <div className="flex items-start justify-between text-sm py-2 border-b border-gray-800 last:border-0">
            <span className="text-gray-500">{label}</span>
            <span className="text-gray-300 font-medium text-right max-w-[60%]">{value}</span>
        </div>
    );
}
