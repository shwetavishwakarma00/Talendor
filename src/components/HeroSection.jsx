

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import productsData from "@/data/products.json"
import { FaUsers, FaLightbulb, FaChartLine } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="w-full min-h-[700px] relative overflow-hidden mt-20 pt-16 pb-20 bg-gradient-to-b from-white to-gray-50">

      {/* Background Blobs (ALL DEVICES) */}
      <motion.div className="absolute -top-10 -right-32 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply opacity-30 blur-3xl animate-blob" />
      <motion.div className="absolute -bottom-32 -right-32 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply opacity-30 blur-3xl animate-blob animation-delay-2000" />
      <motion.div className="absolute top-10 -left-32 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply opacity-30 blur-3xl animate-blob" />

      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-10">

        {/* TEXT SECTION */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.p
            className="text-sm text-gray-500 mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            HR EXCELLENCE REDEFINED
          </motion.p>

          <motion.h1
            className="text-4xl lg:text-5xl font-bold text-black"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            WELCOME TO
            <span className="block text-5xl font-extrabold bg-gradient-to-r from-purple-800 to-orange-400 bg-clip-text text-transparent">
              TALENDOR
            </span>
          </motion.h1>

          <motion.p
            className="text-lg text-gray-600 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Door to all your Talent Needs
          </motion.p>

          <motion.p
            className="text-gray-500 mt-6 max-w-xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            At Talendor, we don’t just connect businesses with talent; we create lasting
            partnerships that drive growth, innovation, and excellence.
          </motion.p>

          <motion.div
            className="flex justify-center lg:justify-start gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >

            <div>
              {productsData.products.map((item) => (
                <Link key={item.slug} href={`/products/${item.slug}`}>
                  <button className="px-7 py-3 bg-[#5454AB] text-white rounded-full">
                    Explore Now
                  </button>
                </Link>
              ))}
            </div>

            <Link href="/contact">
              <button className="px-6 py-3 border border-[#5454AB] text-[#5454AB] rounded-full hover:bg-purple-50 transition">
                Contact Us
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* IMAGE SECTION (HIDDEN ON MOBILE) */}
        <div className="flex-1 relative hidden md:block">

          

          {/* Circle Image */}
          <motion.div
            className="relative w-[480px] h-[480px] mx-auto rounded-full border-dotted border-4 border-[#96b4d5] flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="w-[400px] h-[400px] rounded-full overflow-hidden relative">
              <Image
                src="/images/herosectionimg.jpg"
                alt="Hero"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* FLOATING ICONS (HIDDEN ON MOBILE) */}
        <motion.div className="absolute top-40 left-230 p-3 bg-white rounded-full shadow-lg hidden md:block"
          animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <FaUsers className="text-purple-500 w-6 h-6" />
        </motion.div>

        <motion.div className="absolute top-24 right-40 p-3 bg-white rounded-full shadow-lg hidden md:block"
          animate={{ y: [0, 10, 0] }} transition={{ duration: 2.5, repeat: Infinity }}>
          <FaLightbulb className="text-yellow-400 w-6 h-6" />
        </motion.div>

        <motion.div className="absolute bottom-44 right-56 p-3 bg-white rounded-full shadow-lg hidden md:block"
          animate={{ y: [0, -15, 0] }} transition={{ duration: 3, repeat: Infinity }}>
          <FaChartLine className="text-orange-500 w-6 h-6" />
        </motion.div>
      </div>

      {/* Blob Animation */}
      <style jsx>{`
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        @keyframes blob {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0, 0) scale(1); }
        }
      `}</style>
    </section>
  );
}
