import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="flex items-center space-x-2">
        <span className="text-2xl font-bold text-blue-600">Accredian</span>
        <span className="text-xs bg-blue-100 text-blue-700 font-semibold px-2 py-0.5 rounded">Enterprise</span>
      </div>
      <div className="hidden md:flex space-x-6 text-gray-600 font-medium text-sm">
        <Link href="#hero" className="hover:text-blue-600 transition">Home</Link>
        <Link href="#features" className="hover:text-blue-600 transition">Programs</Link>
        <Link href="#contact" className="hover:text-blue-600 transition">Contact Us</Link>
      </div>
      <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition">
        Get Started
      </a>
    </nav>
  );
}