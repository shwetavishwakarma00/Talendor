"use client";

import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image 
              src={logo}
              alt="Logo"
              width={120}
              height={50}
              priority
            />
          </div>
        </Link>

        {/* Menu Links */}
        <div className="hidden md:flex items-center gap-10 text-gray-700 font-medium">
          <Link href="/" className="hover:text-blue-600 transition">Home</Link>
          <Link href="/about" className="hover:text-blue-600 transition">About Us</Link>
          <Link href="/services" className="hover:text-blue-600 transition">Products</Link>
          <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
        </div>

        {/* Contact Button */}
        <Link href="/contact">
          <button className="px-5 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition font-medium">
            Contact Us
          </button>
        </Link>
      </div>
    </nav>
  );
}
