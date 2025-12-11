"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/aboutus" },
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="w-full h-20 fixed top-0 left-0 z-50 transition-all duration-300 bg-white shadow-sm"
    >
      <div className="container mx-auto px-6 md:px-40 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={130}
              height={50}
              priority
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 font-medium">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setActive(link.name)}
              className={`relative px-1 transition ${
                active === link.name
                  ? "text-black"
                  : scrolled
                  ? "text-black"
                  : "text-black"
              } after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-1 
              after:w-0 after:bg-[#43438f] hover:after:w-full hover:after:transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Contact Button */}
        <Link href="/contact" className="hidden md:block">
          <button className="px-5 py-2 rounded-full transition font-medium bg-[#43438f] text-white">
            Contact Us
          </button>
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-3xl text-gray-700"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-lg w-full py-6 px-6 animate-slideDown">
          <div className="flex flex-col gap-6 text-lg font-medium">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActive(link.name);
                  setMobileOpen(false);
                }}
                className="text-gray-700"
              >
                {link.name}
              </Link>
            ))}

            <Link href="/contact" onClick={() => setMobileOpen(false)}>
              <button className="w-full px-5 py-2 rounded-full bg-[#43438f] text-white font-medium">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
