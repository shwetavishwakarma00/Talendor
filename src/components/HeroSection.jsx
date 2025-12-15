// Updated HeroSection with fully responsive big mobile circle (no desktop change)

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaUsers, FaLightbulb, FaChartLine } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen relative overflow-hidden mt-10 pb-10 bg-gradient-to-b from-purple-50 to-white md:from-white md:to-gray-50">

      {/* Floating background blobs (hidden on mobile) */}
      <motion.div 
        className="hidden md:block absolute -top-2 -right-22 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply opacity-30 filter blur-3xl animate-blob"
      />
      <motion.div 
        className="hidden md:block absolute -bottom-32 -right-32 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply opacity-30 filter blur-3xl animate-blob animation-delay-2000"
      />
      <motion.div 
        className="hidden md:block absolute top-10 -left-32 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply opacity-30 filter blur-3xl animate-blob"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-6 md:px-20 flex flex-col lg:flex-row items-center justify-between gap-10">

        {/* TEXT SECTION */}
        <motion.div 
          className="flex-1 mt-[100px] md:mt-[120px] text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.p 
            className="text-sm text-gray-500 mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            HR EXCELLENCE REDEFINED
          </motion.p>

          <motion.div 
            className="text-4xl md:text-5xl font-bold mb-4 text-black leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            WELCOME TO
            <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-800 to-orange-400 bg-clip-text text-transparent">
              TALENDOR
            </h1>
          </motion.div>

          <motion.div 
            className="text-base md:text-lg text-gray-600 mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
          >
            Door to all your Talent Needs
          </motion.div>

          <motion.p 
            className="text-gray-500 mb-6 md:mb-8 text-sm md:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
          >
            At Talendor, we don’t just connect businesses with talent; we create lasting partnerships 
            that drive growth, innovation, and excellence.
          </motion.p>

          {/* BUTTONS */}
          <motion.div 
            className="flex gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <button className="px-7 py-3 bg-[#5454AB] text-white rounded-full font-medium hover:bg-[#43438f] hover:scale-105 transition">
              Explore Now
            </button>
            <button className="px-6 py-3 border border-[#5454AB] text-[#5454AB] rounded-full hover:bg-purple-50 transition">
              Contact Us
            </button>
          </motion.div>
        </motion.div>

        {/* RESPONSIVE IMAGE SECTION – large on mobile */}
        <div className="flex flex-1 relative justify-center mt-[120px] md:justify-end">
          <motion.div 
            className="relative 
              w-[90vw] h-[90vw] max-w-[420px] max-h-[420px]     /* Mobile */
              md:w-[380px] md:h-[380px]                       /* Desktop */
              mx-auto rounded-full border-dotted border-[3px] border-[#96b4d5] 
              flex items-center justify-center z-10"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.9 }}
          >
            <div className="
              w-[70vw] h-[70vw] max-w-[320px] max-h-[320px]   /* Mobile inner circle */
              md:w-[330px] md:h-[330px]                        /* Desktop inner circle */
              rounded-full overflow-hidden relative
            ">
              <Image 
                src="/images/herosectionimg.jpg"
                alt="Team Collaboration"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* FLOATING ICONS – HIDDEN ON MOBILE */}
      <motion.div 
        className="hidden md:block absolute top-40 left-205 p-3.5 bg-white rounded-full shadow-lg"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
      >
        <FaUsers className="text-purple-500 w-6 h-6" />
      </motion.div>

      <motion.div 
        className="hidden md:block absolute top-20 right-35 p-3.5 bg-white rounded-full shadow-lg"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, repeatType: "mirror" }}
      >
        <FaLightbulb className="text-yellow-400 w-6 h-6" />
      </motion.div>

      <motion.div 
        className="hidden md:block absolute bottom-42 right-50 p-3.5 bg-white rounded-full shadow-lg"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
      >
        <FaChartLine className="text-orange-500 w-6 h-6" />
      </motion.div>

      <style jsx>{`
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
      `}</style>
    </section>
  );
}
