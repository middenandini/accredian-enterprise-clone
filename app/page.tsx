import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import LeadForm from '@/components/LeadForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <LeadForm />
      <footer className="py-6 text-center text-xs text-gray-500 border-t border-gray-200">
        © {new Date().getFullYear()} Accredian Enterprise Clone. Built for Internship Assignment.
      </footer>
    </main>
  );
}