'use client';

import { useState } from 'react';
import { ServerProduct } from '@/lib/api';

interface OrderFormProps {
    server: ServerProduct;
    initialBilling: 'monthly' | 'yearly';
}

export default function OrderForm({ server, initialBilling }: OrderFormProps) {
    const [billing, setBilling] = useState(initialBilling);
    const [os, setOs] = useState('ubuntu-22.04');
    const [hostname, setHostname] = useState('');

    const yearlyPrice = Math.floor(server.price * 10);
    const currentPrice = billing === 'monthly' ? server.price : Math.floor(yearlyPrice / 12);
    const billingText = billing === 'monthly' ? 'Monthly' : 'Yearly';

    const osOptions = [
        { id: 'ubuntu-22.04', name: 'Ubuntu 22.04 LTS', type: 'linux' },
        { id: 'ubuntu-20.04', name: 'Ubuntu 20.04 LTS', type: 'linux' },
        { id: 'debian-11', name: 'Debian 11 (Bullseye)', type: 'linux' },
        { id: 'debian-12', name: 'Debian 12 (Bookworm)', type: 'linux' },
        { id: 'centos-7', name: 'CentOS 7', type: 'linux' },
        { id: 'almalinux-9', name: 'AlmaLinux 9', type: 'linux' },
        { id: 'rocky-9', name: 'Rocky Linux 9', type: 'linux' },
        { id: 'windows-2022', name: 'Windows Server 2022 (Trial)', type: 'windows' },
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('This is a demo! In production, this would proceed to checkout.');
    };

    return (
        <form onSubmit={handleSubmit} className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-8">Configure Server</h2>

            {/* Operating System */}
            <div className="mb-8">
                <label className="block text-gray-400 text-sm font-bold mb-4">
                    Operating System <span className="text-blue-500">*</span>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {osOptions.map((option) => (
                        <label
                            key={option.id}
                            className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all ${os === option.id
                                    ? 'bg-blue-500/10 border-blue-500 text-white'
                                    : 'bg-gray-800 border-gray-700 text-gray-400 hover:border-gray-600'
                                }`}
                        >
                            <input
                                type="radio"
                                name="os"
                                value={option.id}
                                checked={os === option.id}
                                onChange={(e) => setOs(e.target.value)}
                                className="hidden"
                            />
                            <div className="flex items-center gap-3">
                                {option.type === 'linux' ? (
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                                ) : (
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                                )}
                                <span>{option.name}</span>
                            </div>
                        </label>
                    ))}
                </div>
            </div>

            {/* Hostname */}
            <div className="mb-8">
                <label className="block text-gray-400 text-sm font-bold mb-4">
                    Hostname <span className="text-gray-600 font-normal">(Optional)</span>
                </label>
                <input
                    type="text"
                    value={hostname}
                    onChange={(e) => setHostname(e.target.value)}
                    placeholder="server1.example.com"
                    className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                    pattern="^[a-zA-Z0-9.-]+$"
                />
                <p className="text-gray-500 text-xs mt-2">Only letters, numbers, hyphens, and dots allowed.</p>
            </div>

            {/* Billing Cycle */}
            <div className="mb-8 p-4 bg-gray-800 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300 font-medium">Billing Cycle</span>
                    <div className="flex items-center gap-2 bg-gray-900 rounded-lg p-1">
                        <button
                            type="button"
                            onClick={() => setBilling('monthly')}
                            className={`px-3 py-1 rounded-md text-sm transition-all ${billing === 'monthly' ? 'bg-gray-700 text-white' : 'text-gray-500'}`}
                        >
                            Monthly
                        </button>
                        <button
                            type="button"
                            onClick={() => setBilling('yearly')}
                            className={`px-3 py-1 rounded-md text-sm transition-all ${billing === 'yearly' ? 'bg-blue-600 text-white' : 'text-gray-500'}`}
                        >
                            Yearly
                        </button>
                    </div>
                </div>
                {billing === 'yearly' && (
                    <div className="text-xs text-green-400 text-right">
                        You save ${(server.price * 12) - yearlyPrice} per year!
                    </div>
                )}
            </div>

            {/* Customization Notice */}
            <div className="mb-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-sm text-gray-300">
                    <span className="text-white font-bold block mb-1">Need specific hardware config?</span>
                    We offer custom CPU, RAM, and Storage options. <a href="/contact" className="text-blue-400 underline hover:text-blue-300">Contact our sales team</a> for a custom quote.
                </div>
            </div>

            {/* Summary & Submit */}
            <div className="border-t border-gray-800 pt-8">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <div className="text-gray-400 text-sm">Total Due Today</div>
                        <div className="text-3xl font-bold text-white">${currentPrice}</div>
                        <div className="text-gray-500 text-sm">Recurs {billingText}</div>
                    </div>
                    <button
                        type="submit"
                        className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all transform hover:-translate-y-1"
                    >
                        Checkout & Deploy
                    </button>
                </div>
            </div>
        </form>
    );
}
