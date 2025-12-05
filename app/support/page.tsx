'use client';
import PageHeader from '@/components/PageHeader';
import { useState } from 'react';

export default function SupportPage() {
    const [searchQuery, setSearchQuery] = useState('');

    const kbArticles = [
        { id: 1, title: 'Getting Started with Dedicated Servers', category: 'Guides' },
        { id: 2, title: 'Configuring RAID arrays', category: 'Technical' },
        { id: 3, title: 'Understanding Bandwidth Usage', category: 'Billing' },
        { id: 4, title: 'How to access IPMI/KVM', category: 'Technical' },
        { id: 5, title: 'Migrating from another provider', category: 'Guides' },
        { id: 6, title: 'Setting up custom ISOs', category: 'Technical' },
    ];

    const filteredArticles = kbArticles.filter(title =>
        title.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <main className="min-h-screen bg-black">
            <PageHeader
                title="Support Center"
                subtitle="We're here to help. access our knowledge base or get in touch with our expert team."
            />

            <div className="container mx-auto px-4 -mt-20 relative z-10 pb-20">
                {/* Search Box */}
                <div className="max-w-2xl mx-auto mb-16">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search for answers..."
                            className="w-full bg-gray-900 border border-gray-700 text-white pl-12 pr-4 py-4 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none shadow-xl"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <svg className="w-6 h-6 text-gray-500 absolute left-4 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Knowledge Base */}
                    <div className="lg:col-span-2">
                        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 h-full">
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                                Knowledge Base
                            </h2>

                            <div className="grid gap-4">
                                {filteredArticles.map((article) => (
                                    <a key={article.id} href="#" className="flex items-center justify-between p-4 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-colors group">
                                        <span className="text-gray-300 group-hover:text-white">{article.title}</span>
                                        <span className="text-xs px-2 py-1 rounded bg-gray-700 text-gray-400">{article.category}</span>
                                    </a>
                                ))}
                                {filteredArticles.length === 0 && (
                                    <div className="text-center text-gray-500 py-8">No articles found matching "{searchQuery}"</div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Contact Channels */}
                    <div className="space-y-6">
                        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                            <h3 className="text-xl font-bold text-white mb-4">Submit a Ticket</h3>
                            <p className="text-gray-400 text-sm mb-6">Complex technical issue? Our engineering team is ready to assist.</p>
                            <a href="/login" className="block w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl text-center hover:opacity-90 transition-opacity">
                                Open Ticket
                            </a>
                        </div>
                        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                            <h3 className="text-xl font-bold text-white mb-4">Live Chat</h3>
                            <p className="text-gray-400 text-sm mb-6">Need quick answers? Chat with our sales or billing team.</p>
                            <button className="block w-full py-3 px-4 bg-gray-800 text-white font-bold rounded-xl text-center hover:bg-gray-700 transition-colors">
                                Start Chat
                            </button>
                        </div>
                        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                            <h3 className="text-xl font-bold text-white mb-4">Status Page</h3>
                            <div className="flex items-center gap-2 mb-6">
                                <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
                                <span className="text-green-400 font-medium">All Systems Operational</span>
                            </div>
                            <a href="/status" className="text-blue-400 text-sm hover:underline">View full status history &rarr;</a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
