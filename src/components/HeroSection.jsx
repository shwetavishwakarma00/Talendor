"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import productsData from "@/data/products.json";

import { FaUsers, FaLightbulb, FaChartLine } from "react-icons/fa";

export default function HeroSection() {
  const product = productsData.products[0];
  const slug = product.slug;

  return (
    <section className="w-full relative overflow-hidden pt-20 pb-20 bg-gradient-to-b from-white to-gray-50">
      {/* Background Blobs (ALL DEVICES) */}
      <motion.div className="absolute -top-10 -right-32 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply opacity-30 blur-3xl animate-blob" />
      <motion.div className="absolute -bottom-32 -right-32 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply opacity-30 blur-3xl animate-blob animation-delay-2000" />
      <motion.div className="absolute top-10 -left-32 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply opacity-30 blur-3xl animate-blob" />

      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10 min-h-[600px]">
        {/* TEXT SECTION */}
        <motion.div
          className="flex-1 flex flex-col justify-start lg:justify-center items-center lg:items-start text-center lg:text-left min-h-[420px] pt-6 lg:pt-0"
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
            className="text-4xl lg:text-5xl font-bold text-black font-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            WELCOME TO
            <span className="block font-heading text-5xl  bg-gradient-to-r from-purple-800 to-orange-400 bg-clip-text text-transparent">
              TALENDOR
            </span>
          </motion.h1>

          <motion.p
            className="text-lg  text-gray-600 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Door to all your Talent Needs
          </motion.p>

          <motion.p
            className="text-gray-500 font-para mt-6 max-w-xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            At Talendor, we don’t just connect businesses with talent; we create
            lasting partnerships that drive growth, innovation, and excellence.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="mt-10 flex justify-center lg:justify-start"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <Link href={`/products/${slug}`}>
              <button className="px-7 py-3 bg-[#5454AB] text-white rounded-full font-medium hover:bg-[#43438f] hover:scale-105 transition">
                Explore Now
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* IMAGE SECTION  */}
        <div className="flex-1 relative flex justify-center -mt-10 sm:mt-6 lg:mt-0">
          {/* Mustard Wave 1 */}
          <motion.svg
            className="absolute top-[40%] md:top-30 left-1/2 w-[95%] -translate-x-1/2 z-20"
            viewBox="0 0 400 120"
            fill="none"
            initial={{ opacity: 0 }}
            animate={{ y: [0, -10, 0], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
          >
            <defs>
              <linearGradient id="waveGrad1" x1="0%" x2="100%">
                <stop offset="0%" stopColor="#E19D36" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#E19D36" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#E19D36" stopOpacity="0.1" />
              </linearGradient>
            </defs>

            <motion.path
              d="M0 60 C100 120 300 0 400 60"
              stroke="url(#waveGrad1)"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 1.2,
                delay: 1, // ⬅ starts after the image
                ease: "easeInOut",
              }}
            />
          </motion.svg>

          {/* Mustard Wave 2 */}
          <motion.svg
            className="absolute top-[50%] md:top-50 left-1/2 w-[105%] -translate-x-1/2 z-20"
            viewBox="0 0 450 120"
            fill="none"
            initial={{ opacity: 0 }}
            animate={{ y: [0, 8, 0], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
          >
            <defs>
              <linearGradient id="waveGrad2" x1="0%" x2="100%">
                <stop offset="0%" stopColor="#E19D36" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#E19D36" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#E19D36" stopOpacity="0.1" />
              </linearGradient>
            </defs>

            <motion.path
              d="M0 50 C150 110 300 -10 450 50"
              stroke="url(#waveGrad2)"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 1.2,
                delay: 1.2,
                ease: "easeInOut",
              }}
            />
          </motion.svg>
          {/* Outer Dotted Border Circle */}
          <motion.div
            className="relative w-[82vw] sm:w-[70vw] max-w-[480px] aspect-square mx-auto rounded-full border-dotted border-[4px] border-[#96b4d5] flex items-center justify-center z-10"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Inner Circle to create GAP */}
            <div className="w-[85%] aspect-square rounded-full overflow-hidden relative">
              <Image
                src="/images/herosectionimg.webp"
                alt="Team Collaboration"
                fill
                priority
                sizes="(max-width: 640px) 82vw,
         (max-width: 1024px) 70vw,
         480px"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* FLOATING ICONS (HIDDEN ON MOBILE) */}
        <motion.div
          className="absolute top-40 left-230 p-3 bg-white rounded-full shadow-lg hidden md:block"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FaUsers className="text-purple-500 w-6 h-6" />
        </motion.div>

        <motion.div
          className="absolute top-24 right-40 p-3 bg-white rounded-full shadow-lg hidden md:block"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <FaLightbulb className="text-yellow-400 w-6 h-6" />
        </motion.div>

        <motion.div
          className="absolute bottom-44 right-56 p-3 bg-white rounded-full shadow-lg hidden md:block"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
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
          0% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }
      `}</style>
    </section>
  );
}
