import PageHeader from '@/components/PageHeader';
import Features from '@/components/Features';

export const metadata = {
    title: 'Features | BlackRock Servers',
    description: 'Discover the technical capabilities of BlackRock Servers: DDoS protection, 99.99% uptime, Tier-III data centers, and more.',
};

export default function FeaturesPage() {
    return (
        <main className="min-h-screen bg-black">
            <PageHeader
                title="Platform Features"
                subtitle="Built for performance, security, and reliability. Explore what makes our infrastructure world-class."
            />

            {/* Detailed Feature Sections */}
            <div className="container mx-auto px-4 py-20">

                {/* Network */}
                <div className="flex flex-col md:flex-row items-center gap-12 mb-32">
                    <div className="flex-1">
                        <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-4">40Gbps Global Network</h2>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Our premium network is designed for low latency and high availability. Connected to major internet exchange points (IXPs) and Tier-1 transit providers, we ensure your data travels the fastest path to your users.
                        </p>
                        <ul className="space-y-3 text-gray-300">
                            <FeatureItem text="Tbps+ Network Capacity" />
                            <FeatureItem text="Optimized Routing Engine" />
                            <FeatureItem text="Global Anycast DNS" />
                            <FeatureItem text="100% Network Uptime SLA" />
                        </ul>
                    </div>
                    <div className="flex-1 bg-gray-900 border border-gray-800 rounded-2xl p-8 h-80 flex items-center justify-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-blue-600/10 transition-colors" />
                        {/* Placeholder for Network Graphic */}
                        <div className="text-center">
                            <div className="text-5xl font-bold text-white mb-2">10ms</div>
                            <div className="text-blue-400 font-medium">Global Average Latency</div>
                        </div>
                    </div>
                </div>

                {/* Security */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-32">
                    <div className="flex-1">
                        <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-4">Enterprise-Grade Security</h2>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Security is built into our DNA. From automated DDoS mitigation to strict physical access controls, we protect your infrastructure against all modern threats.
                        </p>
                        <ul className="space-y-3 text-gray-300">
                            <FeatureItem text="Always-On DDoS Protection" />
                            <FeatureItem text="Hardware Firewalls Available" />
                            <FeatureItem text="ISO 27001 Certified Locations" />
                            <FeatureItem text="24/7 Security Monitoring" />
                        </ul>
                    </div>
                    <div className="flex-1 bg-gray-900 border border-gray-800 rounded-2xl p-8 h-80 flex items-center justify-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-purple-600/5 group-hover:bg-purple-600/10 transition-colors" />
                        {/* Placeholder for Security Graphic */}
                        <div className="text-center">
                            <div className="text-5xl font-bold text-white mb-2">24/7</div>
                            <div className="text-purple-400 font-medium">Threat Monitoring</div>
                        </div>
                    </div>
                </div>

                {/* Hardware */}
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1">
                        <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-4">Latest Generation Hardware</h2>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            We only deploy enterprise-grade hardware from industry leaders like Intel, AMD, Samsung, and Micron. No desktop components, ever.
                        </p>
                        <ul className="space-y-3 text-gray-300">
                            <FeatureItem text="Intel Xeon & AMD EPYC CPUs" />
                            <FeatureItem text="DDR4 & DDR5 ECC Memory" />
                            <FeatureItem text="NVMe SSD Storage Arrays" />
                            <FeatureItem text="Redundant Power Supplies" />
                        </ul>
                    </div>
                    <div className="flex-1 bg-gray-900 border border-gray-800 rounded-2xl p-8 h-80 flex items-center justify-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-green-600/5 group-hover:bg-green-600/10 transition-colors" />
                        {/* Placeholder for Hardware Graphic */}
                        <div className="text-center">
                            <div className="text-5xl font-bold text-white mb-2">100%</div>
                            <div className="text-green-400 font-medium">Enterprise Components</div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Reusing the summary features component */}
            <div className="bg-gray-900/30">
                <Features />
            </div>
        </main>
    );
}

function FeatureItem({ text }: { text: string }) {
    return (
        <li className="flex items-center gap-3">
            <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>{text}</span>
        </li>
    );
}
