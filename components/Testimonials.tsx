export default function Testimonials() {
    const reviews = [
        {
            name: "Alex Thompson",
            role: "CTO, TechFlow",
            content: "BlackRock Servers has been a game-changer for our infrastructure. The uptime is flawless and support is incredibly responsive.",
            rating: 5,
        },
        {
            name: "Sarah Jenkins",
            role: "DevOps Lead",
            content: "Best price-to-performance ratio in the market. We migrated 50+ servers and haven't looked back.",
            rating: 5,
        },
        {
            name: "Michael Chen",
            role: "Founder, GameHost",
            content: "The DDoS protection is top-notch. Our game servers run smoothly even during heavy attack attempts.",
            rating: 5,
        },
    ];

    return (
        <section className="py-24 bg-gray-900/30 border-y border-gray-800">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Trusted by <span className="text-purple-500">2,000+</span> Clients
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div key={index} className="p-8 rounded-2xl bg-black border border-gray-800 relative">
                            <div className="flex gap-1 mb-4 text-yellow-500">
                                {[...Array(review.rating)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-300 mb-6 italic">"{review.content}"</p>
                            <div>
                                <div className="font-bold text-white">{review.name}</div>
                                <div className="text-sm text-gray-500">{review.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
