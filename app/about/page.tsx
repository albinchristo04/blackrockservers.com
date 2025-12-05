import PageHeader from '@/components/PageHeader';
import Image from 'next/image';

export const metadata = {
    title: 'About Us | BlackRock Servers',
    description: 'Learn about our mission to provide the world\'s most reliable server infrastructure.',
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-black">
            <PageHeader
                title="Powering the Future"
                subtitle="We are a team of engineers, developers, and problem solvers dedicated to building the infrastructure for the next generation of the internet."
            />

            <div className="container mx-auto px-4 py-20">
                {/* Mission */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                        <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
                            <p>
                                At BlackRock Servers, we believe that high-performance infrastructure should be accessible, reliable, and transparent. We started in 2024 with a simple goal: to eliminate the complexity and hidden costs often associated with bare metal hosting.
                            </p>
                            <p>
                                Today, we serve thousands of clients across the globe, from individual developers to Fortune 500 companies, providing them with the raw compute power they need to innovate.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl text-center">
                            <div className="text-4xl font-bold text-blue-500 mb-2">5+</div>
                            <div className="text-gray-400">Global Locations</div>
                        </div>
                        <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl text-center">
                            <div className="text-4xl font-bold text-purple-500 mb-2">10k+</div>
                            <div className="text-gray-400">Servers Deployed</div>
                        </div>
                        <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl text-center">
                            <div className="text-4xl font-bold text-green-500 mb-2">99.99%</div>
                            <div className="text-gray-400">Uptime SLA</div>
                        </div>
                        <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl text-center">
                            <div className="text-4xl font-bold text-white mb-2">24/7</div>
                            <div className="text-gray-400">Expert Support</div>
                        </div>
                    </div>
                </div>

                {/* Values */}
                <div className="mb-32">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ValueCard
                            title="Transparency"
                            description="No hidden fees, no confusing contracts. What you see is what you get, always."
                        />
                        <ValueCard
                            title="Performance"
                            description="We never compromise on hardware. We only use enterprise-grade components to ensure maximum speed."
                        />
                        <ValueCard
                            title="Reliability"
                            description="Your up-time is our reputation. We build redundancy into every layer of our network."
                        />
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-3xl p-12 text-center border border-blue-500/20">
                    <h2 className="text-3xl font-bold text-white mb-6">Ready to get started?</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                        Join the thousands of happy developers who trust BlackRock Servers with their infrastructure.
                    </p>
                    <a href="/pricing" className="inline-block px-8 py-4 rounded-xl bg-white text-black font-bold hover:bg-gray-100 transition-colors">
                        View Pricing
                    </a>
                </div>
            </div>
        </main>
    );
}

function ValueCard({ title, description }: { title: string, description: string }) {
    return (
        <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
            <p className="text-gray-400 leading-relaxed">{description}</p>
        </div>
    );
}
