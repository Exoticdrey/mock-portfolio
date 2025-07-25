'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-purple-600">Drey</div>
        <div className="space-x-6">
          <Link href="/" className="text-gray-700 hover:text-purple-600">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-purple-600">
            About
          </Link>
          <Link href="/projects" className="text-gray-700 hover:text-purple-600">
            Projects
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-purple-600">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
