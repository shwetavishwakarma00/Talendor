'use client';

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import founders from "@/data/founders.json";
import Link from "next/link";

const Founders = () => {
  const [index, setIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % founders.founders.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

 const variants = {
  enter: {
    opacity: 0,
    x: typeof window !== "undefined" && window.innerWidth < 768 ? 40 : 100,
  },
  center: { opacity: 1, x: 0 },
  exit: {
    opacity: 0,
    x: typeof window !== "undefined" && window.innerWidth < 768 ? -40 : -100,
  },
};


  return (
    <section className="px-4 md:px-10 py-10 md:py-20 bg-gradient-to-b from-gray-300 to-white overflow-x-hidden">
  <div className="relative w-full flex justify-center overflow-hidden">

    <AnimatePresence mode="wait">
      <motion.div
        key={index}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="w-full flex justify-center"
      >
        {/* Card */}
        <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-4xl">

          {/* Image */}
          <div className="w-full md:w-1/3 h-80 md:h-auto ">
            <img
              src={founders.founders[index].image}
              alt={founders.founders[index].name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="md:w-2/3 p-4 md:p-6 flex flex-col justify-between gap-2">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-[#111122]">
                {founders.founders[index].name}
              </h3>

              <p className="text-[#FB7704] text-base md:text-lg mb-2 md:mb-4">
                {founders.founders[index].title}
              </p>

              <p className="text-[#4F4F4A] text-sm md:text-base leading-relaxed">
                {founders.founders[index].description}
              </p>
            </div>

            <div className="mt-3 md:mt-4 flex gap-4 text-[#4F4F4A]">
              <Link  href={`/founders/${founders.founders[index].slug}`} className="text-blue-500 text-sm md:text-base">
                Learn more
              </Link>
            </div>
          </div>

        </div>
      </motion.div>
    </AnimatePresence>

  </div>
</section>

  );
};

export default Founders;
