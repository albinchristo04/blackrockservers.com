import Hero from '@/components/Hero';
import ServerList from '@/components/ServerList';
import Features from '@/components/Features';
import LocationsMap from '@/components/LocationsMap';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <main className="min-h-screen bg-black selection:bg-blue-500/30">
      <Hero />
      <Features />
      <ServerList />
      <LocationsMap />
      <Testimonials />

      {/* Footer */}
      <footer className="border-t border-gray-900 bg-black py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">BlackRock Servers</h3>
              <p className="text-gray-500 text-sm">Premium dedicated hosting infrastructure for your mission-critical applications.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li><a href="/dedicated-servers" className="hover:text-blue-400">Dedicated Servers</a></li>
                <li><a href="/vps" className="hover:text-blue-400">VPS Hosting</a></li>
                <li><a href="/storage" className="hover:text-blue-400">Storage Servers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li><a href="/contact" className="hover:text-blue-400">Contact Us</a></li>
                <li><a href="/knowledge-base" className="hover:text-blue-400">Knowledge Base</a></li>
                <li><a href="/status" className="hover:text-blue-400">Network Status</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li><a href="/terms" className="hover:text-blue-400">Terms of Service</a></li>
                <li><a href="/privacy" className="hover:text-blue-400">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-gray-600 text-sm pt-8 border-t border-gray-900">
            <p>&copy; {new Date().getFullYear()} BlackRock Servers. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
