"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar({ orbitron }: { orbitron: string }) {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md text-white px-6 py-3 flex justify-between items-center z-50 shadow-lg border-b border-cyan-500/30">
      <div className="flex items-center space-x-3">
        <Image src="/logo.png" alt="CyberWebStack" width={40} height={40} />
        <h1 className={`${orbitron} text-2xl font-bold text-cyan-400`}>CyberWebStack</h1>
      </div>
      <div className="space-x-6">
        <Link href="/" className="hover:text-cyan-400 transition">Home</Link>
        <Link href="/about" className="hover:text-cyan-400 transition">About</Link>
        <Link href="/services" className="hover:text-cyan-400 transition">Services</Link>
        <Link href="/blog" className="hover:text-cyan-400 transition">Blog</Link>
        <Link href="/contact" className="hover:text-cyan-400 transition">Contact</Link>
      </div>
    </nav>
  );
}
