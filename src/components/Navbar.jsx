"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import navigation from "@/data/navbar.json";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMega, setActiveMega] = useState(null);
  const [openmega, setOpenMega] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 shadow-sm"  onMouseLeave={()=> setActiveMega(null)}>
      <div className="container mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo.webp"
            alt="Logo"
            width={130}
            height={50}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 font-medium cursor-pointer ">
          {navigation.navItems.map((item) => (
            <div
              key={item.key}
              className="relative"
              onMouseEnter={() => setActiveMega(item.key)}
             
            >
              {item.slug ? (
                <Link
                  href={item.slug}
                  className=" cursor-pointer hover:text-[#43438f]"
                >
                  {item.name}
                </Link>
              ) : (
                <button className="flex items-center gap-1 hover:text-[#43438f]">
                  {item.name}
                  <FiChevronDown size={14} />
                </button>
              )}

              {/* MEGA DROPDOWN */}
              {item.columns && activeMega === item.key && (
                <div className="fixed left-5 right-5 top-20 bg-white shadow-gray-300 shadow-md border-t border-gray-300">
                  <div className="container mx-auto px-6 md:px-40 py-10">
                    <div
                      className="grid gap-8"
                      style={{
                        gridTemplateColumns: `repeat(${item.columns.length}, minmax(0, 1fr))`,
                      }}
                    >
                      {item.columns.map((column, idx) => (
                        <div key={idx}>
                          <h3 className="font-semibold text-lg mb-4 text-gray-900">
                            {column.title}
                          </h3>
                          <ul className="space-y-3">
                            {column.items.map((link, i) => (
                              <li key={i}>
                                <Link
                                  href={link.slug}
                                  className="text-gray-600 hover:text-[#43438f] transition"
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link href="/contact" className="hidden md:block">
          <button className="px-6 font-para py-3 border border-[#5454AB] text-[#5454AB] rounded-full hover:bg-purple-50 transition">
            Contact Us
          </button>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-6">
          {navigation.navItems.map((item) => (
            <div key={item.key} className="mb-4">
              {/* Items WITH submenu */}
              {item.columns ? (
                <>
                  <button
                    onClick={() =>
                      setActiveMega(activeMega === item.key ? null : item.key)
                    }
                    className="flex justify-between items-center w-full text-left font-medium"
                  >
                    {item.name}
                    <FiChevronDown
                      className={`transition-transform ${
                        activeMega === item.key ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Submenu */}
                  {activeMega === item.key && (
                    <div className="mt-3 ml-4 space-y-3">
                      {item.columns.map((column) =>
                        column.items.map((link, i) => (
                          <Link
                            key={i}
                            href={link.slug}
                            onClick={() => setMobileOpen(false)}
                            className="block text-gray-600"
                          >
                            {link.label}
                          </Link>
                        ))
                      )}
                    </div>
                  )}
                </>
              ) : (
                /* Items WITHOUT submenu */
                <Link
                  href={item.slug}
                  onClick={() => setMobileOpen(false)}
                  className="block font-medium"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}

          {/* Mobile CTA */}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="flex justify-center mt-6"
          >
            <button className="px-20 py-4 border border-[#5454AB] text-[#5454AB] rounded-full">
              Contact Us
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}
