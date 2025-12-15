"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaUsers, FaLightbulb, FaChartLine } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen relative overflow-hidden mt-10 pb-10 bg-gradient-to-b from-purple-50 to-white">

      {/* BACKGROUND BLOBS (desktop only) */}
      <motion.div className="hidden md:block absolute -top-20 -right-20 w-72 h-72 bg-purple-300 rounded-full opacity-30 blur-3xl animate-blob" />
      <motion.div className="hidden md:block absolute bottom-[-120px] right-[-120px] w-72 h-72 bg-orange-300 rounded-full opacity-30 blur-3xl animate-blob animation-delay-2000" />
      <motion.div
        className="hidden md:block absolute top-10 -left-32 w-96 h-96 bg-purple-300 rounded-full opacity-30 blur-3xl animate-blob"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-20 flex flex-col lg:flex-row items-center justify-between">

        {/* LEFT TEXT */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <p className="text-sm text-gray-500 mb-2">HR EXCELLENCE REDEFINED</p>

          <h1 className="text-5xl font-extrabold mb-4">
            WELCOME TO{" "}
            <span className="bg-gradient-to-r from-purple-800 to-orange-400 bg-clip-text text-transparent">
              TALENDOR
            </span>
          </h1>

          <p className="text-lg text-gray-600 mb-6">
            Door to all your Talent Needs
          </p>

          <p className="text-gray-500 mb-8">
            At Talendor, we don’t just connect businesses with talent; we create lasting partnerships that drive growth and excellence.
          </p>

          <div className="flex gap-4">
            <button className="px-7 py-3 bg-[#5454AB] text-white rounded-full hover:scale-105 transition">
              Explore Now
            </button>
            <Link href="/contact">
              <button className="px-6 py-3 border border-[#5454AB] text-[#5454AB] rounded-full">
                Contact Us
              </button>
            </Link>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 relative flex justify-center">

          {/* WAVES */}
          <motion.svg
            className="absolute top-24 left-10 w-[500px]"
            viewBox="0 0 400 120"
            fill="none"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <path
              d="M0 60 C100 120 300 0 400 60"
              stroke="#E19D36"
              strokeWidth="3"
              opacity="0.4"
            />
          </motion.svg>

          {/* DOTTED CIRCLE */}
          <motion.div
            className="relative w-[420px] h-[420px] rounded-full border-dotted border-[4px] border-[#96b4d5] flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.9 }}
          >
            <div className="w-[340px] h-[340px] rounded-full overflow-hidden relative">
              <Image
                src="/images/herosectionimg.jpg"
                alt="Hero"
                fill
                className="object-cover"
              />
            </div>

            {/* FLOATING ICONS */}
            <motion.div
              className="absolute top-10 left-[-10px] p-3 bg-white rounded-full shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FaUsers className="text-purple-500 w-5 h-5" />
            </motion.div>

            <motion.div
              className="absolute top-6 right-0 p-3 bg-white rounded-full shadow-lg"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <FaLightbulb className="text-yellow-400 w-5 h-5" />
            </motion.div>

            <motion.div
              className="absolute bottom-10 right-10 p-3 bg-white rounded-full shadow-lg"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <FaChartLine className="text-orange-500 w-5 h-5" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        @keyframes blob {
          0% { transform: translate(0,0) scale(1); }
          33% { transform: translate(30px,-40px) scale(1.1); }
          66% { transform: translate(-20px,20px) scale(0.9); }
          100% { transform: translate(0,0) scale(1); }
        }
      `}</style>
    </section>
  );
}
