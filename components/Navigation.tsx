'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-gray-800">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                            </svg>
                        </div>
                        <span className="text-xl font-bold text-white">BlackRock Servers</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                            Home
                        </Link>

                        {/* Products Dropdown */}
                        <div className="relative group">
                            <button className="text-gray-300 hover:text-white transition-colors flex items-center gap-1">
                                Products
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div className="absolute top-full left-0 mt-2 w-56 bg-gray-900 border border-gray-800 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                                <Link href="/products/dedicated-servers" className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 first:rounded-t-xl">
                                    All Dedicated Servers
                                </Link>
                                <Link href="/products/budget-servers" className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800">
                                    Budget Servers
                                </Link>
                                <Link href="/products/performance-servers" className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800">
                                    Performance Servers
                                </Link>
                                <Link href="/products/enterprise-servers" className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 last:rounded-b-xl">
                                    Enterprise Servers
                                </Link>
                            </div>
                        </div>

                        <Link href="/configurator" className="text-gray-300 hover:text-white transition-colors">
                            Configure
                        </Link>
                        <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">
                            Pricing
                        </Link>
                        <Link href="/features" className="text-gray-300 hover:text-white transition-colors">
                            Features
                        </Link>
                        <Link href="/data-centers" className="text-gray-300 hover:text-white transition-colors">
                            Data Centers
                        </Link>
                        <Link href="/support" className="text-gray-300 hover:text-white transition-colors">
                            Support
                        </Link>
                        <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                            About
                        </Link>
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden lg:flex items-center gap-4">
                        <Link href="/login" className="text-gray-300 hover:text-white transition-colors">
                            Login
                        </Link>
                        <Link href="/contact" className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all">
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden text-white p-2"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden py-4 border-t border-gray-800">
                        <div className="flex flex-col gap-4">
                            <Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
                            <Link href="/products/dedicated-servers" className="text-gray-300 hover:text-white transition-colors">Dedicated Servers</Link>
                            <Link href="/products/budget-servers" className="text-gray-300 hover:text-white transition-colors pl-4">Budget Servers</Link>
                            <Link href="/products/performance-servers" className="text-gray-300 hover:text-white transition-colors pl-4">Performance Servers</Link>
                            <Link href="/products/enterprise-servers" className="text-gray-300 hover:text-white transition-colors pl-4">Enterprise Servers</Link>
                            <Link href="/configurator" className="text-gray-300 hover:text-white transition-colors">Configure</Link>
                            <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link>
                            <Link href="/features" className="text-gray-300 hover:text-white transition-colors">Features</Link>
                            <Link href="/data-centers" className="text-gray-300 hover:text-white transition-colors">Data Centers</Link>
                            <Link href="/support" className="text-gray-300 hover:text-white transition-colors">Support</Link>
                            <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
                            <Link href="/login" className="text-gray-300 hover:text-white transition-colors">Login</Link>
                            <Link href="/contact" className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-center">
                                Get Started
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
