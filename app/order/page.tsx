import PageHeader from '@/components/PageHeader';
import OrderForm from '@/components/OrderForm';
import { getServers } from '@/lib/api';
import { notFound } from 'next/navigation';

export const metadata = {
    title: 'Configure Server | BlackRock Servers',
    description: 'Customize and deploy your dedicated server.',
};

export default async function OrderPage({
    searchParams,
}: {
    searchParams: { server?: string; billing?: string };
}) {
    const servers = await getServers();
    const serverId = searchParams.server;
    const server = servers.find((s) => s.id === serverId);

    if (!server) {
        // If no server selected, maybe redirect or show selection (omitted for now)
        return notFound();
    }

    const billing = searchParams.billing === 'yearly' ? 'yearly' : 'monthly';

    return (
        <main className="min-h-screen bg-black">
            <PageHeader
                title="Review & Deploy"
                subtitle="Finalize your server configuration and get online in minutes."
            />

            <div className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Server Summary Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sticky top-24">
                            <h3 className="text-lg font-bold text-white mb-4">Server Summary</h3>
                            <div className="space-y-4 mb-6">
                                <div>
                                    <div className="text-gray-500 text-xs uppercase tracking-wider font-bold mb-1">Processor</div>
                                    <div className="text-white font-medium">{server.title}</div>
                                </div>
                                <div>
                                    <div className="text-gray-500 text-xs uppercase tracking-wider font-bold mb-1">Memory</div>
                                    <div className="text-white font-medium">{server.specs.ram}</div>
                                </div>
                                <div>
                                    <div className="text-gray-500 text-xs uppercase tracking-wider font-bold mb-1">Storage</div>
                                    <div className="text-white font-medium">{server.specs.storage}</div>
                                </div>
                                <div>
                                    <div className="text-gray-500 text-xs uppercase tracking-wider font-bold mb-1">Bandwidth</div>
                                    <div className="text-white font-medium">{server.specs.bandwidth}</div>
                                </div>
                            </div>
                            <div className="border-t border-gray-800 pt-4">
                                <div className="text-gray-500 text-xs mb-1">Base Price</div>
                                <div className="text-xl font-bold text-white">${server.price}/mo</div>
                            </div>
                            <div className="mt-6 text-xs text-center text-gray-500">
                                {server.location ? `Located in ${server.location}` : 'Multiple locations available'}
                            </div>
                        </div>
                    </div>

                    {/* Configuration Form */}
                    <div className="lg:col-span-2">
                        <OrderForm server={server} initialBilling={billing} />
                    </div>
                </div>
            </div>
        </main>
    );
}
