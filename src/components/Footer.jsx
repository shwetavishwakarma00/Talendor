"use client";

import Link from "next/link";
import { FiInstagram } from "react-icons/fi";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TiPhone } from "react-icons/ti";
import productsData from "@/data/products.json";
import scrollSections from "@/data/scrollsection.json";


export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
 const product = productsData.products[0];
 
  
  return (
    <footer className="w-full bg-black text-gray-300 px-6 md:px-16 lg:px-24 xl:px-32 pt-10">
      
      {/* TOP SECTION */}
      <div className="flex flex-col md:flex-row justify-between gap-12 border-b border-gray-700 pb-8">
        
        {/* LEFT: BRAND + DESCRIPTION */}
        <div className="max-w-md">
          <h2 className="text-2xl font-semibold text-white tracking-wide">
            TALENDOR
          </h2>

          <p className="mt-3 text-sm text-gray-400">
            Door to all your Talent Needs
          </p>

          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Transforming HR solutions into strategic business advantages
            through innovation, expertise, and partnership.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4 mt-6 text-lg">
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-orange-400 transition"
            >
              <FiInstagram />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-orange-400 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-orange-400 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* RIGHT: LINKS + CONTACT */}
        <div className="flex flex-1 flex-col sm:flex-row md:justify-end gap-20">
          
          {/* QUICK LINKS */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">
              Quick Links
            </h3>
             <ul className="space-y-2 text-sm">
    <li>
       <Link
    href={`/products/${product.slug}`}
    className="hover:text-orange-400 transition"
  >
        Products
      </Link>
    </li>

    <li>
        <Link
                  href="/#services"
                  className="hover:text-orange-400 transition"
                >
        Services
      </Link>
    </li>

    <li>
      <Link
        href="/why-choose-us"
        className="hover:text-orange-400 transition"
      >
        Why Choose Us?
      </Link>
    </li>
  </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">
              Contact Us
            </h3>
            <div className="space-y-3 text-sm text-gray-400">
              <p className="flex items-center gap-2">
                <MdEmail className="text-orange-400" />
                info@talendor.com
              </p>
              <p className="flex items-center gap-2">
                <TiPhone className="text-orange-400" />
                +1 (555) 123-4567
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 py-5">
        <p>
          © 2025 TALENDOR. All rights reserved.
        </p>

        {/* BACK TO TOP */}
        <button
          onClick={scrollToTop}
          className="mt-3 md:mt-0 border border-gray-600 px-4 py-2 rounded-md uppercase tracking-wide hover:border-orange-400 hover:text-orange-400 transition"
        >
          ↑ Back to top
        </button>
      </div>
    </footer>
  );
}
