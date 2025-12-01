export default function Hero() {
    return (
        <div className="relative min-h-[80vh] flex items-center justify-center bg-black overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 container mx-auto px-4 text-center">
                <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium animate-fade-in-up">
                    🚀 Next-Gen Hosting Infrastructure
                </div>

                <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
                    Power Your Vision with <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                        BlackRock Servers
                    </span>
                </h1>

                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                    Enterprise-grade dedicated servers with unmetered bandwidth.
                    Deployed in minutes, managed with ease.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                        href="#servers"
                        className="px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
                    >
                        View Servers
                    </a>
                    <button className="px-8 py-4 rounded-full border border-gray-700 text-white font-medium hover:bg-gray-900 transition-all">
                        Contact Sales
                    </button>
                </div>
            </div>
        </div>
    );
}
