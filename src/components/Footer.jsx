"use client";
import { FiInstagram } from "react-icons/fi";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TiPhone } from "react-icons/ti";

export default function Footer() {
  return (
    <footer className="w-full h-auto bg-[#222244] text-white py-12">
      
      {/* TOP GRID */}
      <div className="max-w-7xl mx-auto 
        grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
        gap-10 md:gap-50 
        px-6 md:px-12 ml-2 text-center md:text-left"
      >
        
        {/* LEFT */}
        <div>
          <h2 className="text-3xl font-bold mb-3">Talendor</h2>
          <p className="text-sm leading-relaxed text-gray-300">
            Door to all your Talend needs.
          </p>

          <p className="text-sm leading-relaxed text-gray-300 mt-2">
            Transforming HR solutions into strategic business advantages through
            innovation, expertise, and partnership.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a className="hover:text-white transition">Our Expertise</a></li>
            <li><a className="hover:text-white transition">Services & Products</a></li>
            <li><a className="hover:text-white transition">Why Choose Us</a></li>
            <li><a className="hover:text-white transition">Our Founders</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="flex justify-center md:justify-start items-center gap-2">
              <MdEmail /> info@talendor.com
            </li>
            <li className="flex justify-center md:justify-start items-center gap-2">
              <TiPhone /> +1 (555) 123-4567
            </li>
          </ul>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-[#FC9236]/60 mt-12 pt-6 
        flex flex-col md:flex-row justify-between items-center 
        text-gray-300 text-sm px-4 md:px-8 gap-4 md:gap-0"
      >
        <p className="text-center md:text-left">
          @ 2025 TALENDOR. ALL RIGHTS RESERVED
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex space-x-5 text-xl">
          <a className="hover:text-white transition bg-gray-400/20 backdrop-blur-md p-3 rounded-full">
            <FiInstagram />
          </a>
          <a className="hover:text-white transition bg-gray-400/20 backdrop-blur-md p-3 rounded-full">
            <FaTwitter />
          </a>
          <a className="hover:text-white transition bg-gray-400/20 backdrop-blur-md p-3 rounded-full">
            <FaLinkedin />
          </a>
        </div>
      </div>

    </footer>
  );
}
