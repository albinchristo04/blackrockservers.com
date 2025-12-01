import Hero from '@/components/Hero';
import ServerList from '@/components/ServerList';

export default function Home() {
  return (
    <main className="min-h-screen bg-black selection:bg-blue-500/30">
      <Hero />
      <ServerList />

      {/* Footer */}
      <footer className="border-t border-gray-900 bg-black py-12">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} BlackRock Servers. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
