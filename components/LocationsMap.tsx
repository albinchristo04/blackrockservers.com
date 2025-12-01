export default function LocationsMap() {
    const locations = [
        { name: "New York, USA", x: "28%", y: "35%" },
        { name: "Frankfurt, DE", x: "52%", y: "32%" },
        { name: "Singapore, SG", x: "78%", y: "55%" },
        { name: "Mumbai, IN", x: "70%", y: "45%" },
    ];

    return (
        <section className="py-24 bg-black text-center">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">
                    Global <span className="text-blue-500">Infrastructure</span>
                </h2>

                <div className="relative w-full max-w-4xl mx-auto aspect-[16/9] bg-gray-900/50 rounded-3xl border border-gray-800 overflow-hidden">
                    {/* Abstract Map Background */}
                    <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-cover bg-center grayscale invert" />

                    {locations.map((loc, i) => (
                        <div
                            key={i}
                            className="absolute group"
                            style={{ left: loc.x, top: loc.y }}
                        >
                            <div className="relative flex items-center justify-center">
                                <div className="w-4 h-4 bg-blue-500 rounded-full animate-ping absolute opacity-75" />
                                <div className="w-3 h-3 bg-blue-500 rounded-full relative z-10 border-2 border-black" />

                                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-900 text-white text-xs px-3 py-1 rounded-full border border-gray-700 opacity-0 group-hover:opacity-100 transition-opacity">
                                    {loc.name}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
