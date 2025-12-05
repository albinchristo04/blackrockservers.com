import PageHeader from '@/components/PageHeader';

export const metadata = {
    title: 'Contact Us | BlackRock Servers',
    description: 'Get in touch with our sales or support team.',
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-black">
            <PageHeader
                title="Get in Touch"
                subtitle="Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
            />

            <div className="container mx-auto px-4 py-20">
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-1">Email Us</h3>
                                    <p className="text-gray-400 mb-1">Sales: sales@blackrockservers.com</p>
                                    <p className="text-gray-400">Support: support@blackrockservers.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-1">Headquarters</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        123 Server Street, Tech District<br />
                                        New York, NY 10001, USA
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-1">Business Hours</h3>
                                    <p className="text-gray-400">Monday - Friday: 9am - 6pm EST</p>
                                    <p className="text-gray-400">24/7 Technical Support</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
                        <form className="space-y-6">
                            <div>
                                <label className="block text-gray-400 text-sm font-bold mb-2">Name</label>
                                <input type="text" className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Your Name" />
                            </div>
                            <div>
                                <label className="block text-gray-400 text-sm font-bold mb-2">Email</label>
                                <input type="email" className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="you@example.com" />
                            </div>
                            <div>
                                <label className="block text-gray-400 text-sm font-bold mb-2">Subject</label>
                                <select className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none">
                                    <option>Sales Inquiry</option>
                                    <option>Technical Support</option>
                                    <option>Billing Question</option>
                                    <option>Partnership</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-gray-400 text-sm font-bold mb-2">Message</label>
                                <textarea className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none h-32" placeholder="How can we help you?"></textarea>
                            </div>
                            <button className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-blue-50 transition-colors">
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </main>
    );
}
