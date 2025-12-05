import PageHeader from '@/components/PageHeader';
import PricingClient from '@/components/PricingClient';
import { getServers } from '@/lib/api';

export const metadata = {
    title: 'Pricing | BlackRock Servers',
    description: 'Flexible server pricing plans starting from budget-friendly options to high-performance enterprise solutions.',
};

export default async function PricingPage() {
    const servers = await getServers();

    // Calculate yearly price (pay for 10 months, get 12)
    const serversWithYearly = servers.map(server => ({
        ...server,
        yearlyPrice: Math.floor(server.price * 10)
    }));

    return (
        <main className="min-h-screen bg-black">
            <PageHeader
                title="Transparent Pricing"
                subtitle="No hidden fees. Choose the plan that fits your needs perfectly, with simple monthly or yearly billing."
            />
            <PricingClient servers={serversWithYearly} />
        </main>
    );
}
