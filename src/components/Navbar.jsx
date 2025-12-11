"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/aboutus" },
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" }
  ];

  // Detect scroll to add background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full h-20 fixed top-0 left-0 z-50 transition-all duration-300 bg-white ${
        scrolled
          ? "bg-white shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-40 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2 pl-1 cursor-pointer">
            <Image 
              src="/images/logo.png"
              alt="Logo"
              width={130}
              height={50}
              priority
            />
          </div>
        </Link>

        {/* Menu Links */}
        <div className="hidden md:flex items-center gap-10 font-medium">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setActive(link.name)}
              className={`relative px-1 transition ${
                active === link.name ? "text-black" : scrolled ? "text-gray-700" : "text-black"
              } after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-0 after:bg-[#43438f] hover:after:w-full hover:after:transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Contact Button */}
        <Link href="/contact">
          <button className="px-5 py-2 rounded-full transition font-medium bg-[#43438f] text-white ">
            Contact Us
          </button>
        </Link>
      </div>
    </nav>
  );
}
