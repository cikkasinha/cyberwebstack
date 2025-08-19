"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-black to-slate-900 text-white">
      {/* Overlay for dim effect */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 text-center px-6">
        {/* Hero Section */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
          Welcome to CyberWebStack
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          We provide cutting-edge solutions in Cloud & DevOps, AI Automation,
          Cybersecurity, and IT Infrastructure.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-6">
          <Link
            href="/services"
            className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-semibold shadow-lg"
          >
            Explore Services
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-lg bg-transparent border border-gray-400 hover:border-white transition font-semibold"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
