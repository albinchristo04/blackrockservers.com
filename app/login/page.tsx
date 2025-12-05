import Link from 'next/link';

export const metadata = {
    title: 'Login | BlackRock Servers',
    description: 'Login to your client area.',
};

export default function LoginPage() {
    return (
        <main className="min-h-screen bg-black flex items-center justify-center px-4 relative">
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-br from-blue-900/10 to-transparent animate-pulse" />
            </div>

            <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl p-8 relative z-10 shadow-2xl">
                <div className="text-center mb-8">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </div>
                    <h1 className="text-2xl font-bold text-white mb-2">Welcome Back</h1>
                    <p className="text-gray-400">Sign in to manage your servers</p>
                </div>

                <form className="space-y-6">
                    <div>
                        <label className="block text-gray-400 text-sm font-bold mb-2">Email Address</label>
                        <input type="email" className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="you@example.com" />
                    </div>
                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <label className="block text-gray-400 text-sm font-bold">Password</label>
                            <a href="#" className="text-blue-500 text-sm hover:underline">Forgot password?</a>
                        </div>
                        <input type="password" className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="••••••••" />
                    </div>

                    <button className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all">
                        Sign In
                    </button>
                </form>

                <div className="mt-8 text-center border-t border-gray-800 pt-6">
                    <p className="text-gray-400">
                        Don't have an account? <Link href="/pricing" className="text-blue-500 hover:underline font-medium">Order a Server</Link>
                    </p>
                </div>
            </div>
        </main>
    );
}
