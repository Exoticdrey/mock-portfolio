'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-24 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-purple-700">
          Hi, I’m Drey 👋🏾
        </h1>
        <p className="text-lg md:text-xl mb-8 leading-relaxed">
          I’m a front-end developer who builds modern, clean, responsive websites.
          I love turning ideas into reality with code and design.
        </p>
        <div className="flex justify-center gap-6">
          <Link href="/about">
            <span className="px-6 py-3 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition">
              About Me
            </span>
          </Link>
          <Link href="/projects">
            <span className="px-6 py-3 border border-purple-700 text-purple-700 rounded-lg hover:bg-purple-100 transition">
              View Projects
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
