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
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <section className="px-10 py-20 bg-gradient-to-b from-gray-300 to-white overflow-hidden">
      {/* IMPORTANT: overflow-hidden added here */}
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
              <div className="md:w-1/3">
                <img
                  src={founders.founders[index].image}
                  alt={founders.founders[index].name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="md:w-2/3 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-[#111122]">
                    {founders.founders[index].name}
                  </h3>
                  <p className="text-[#FB7704] text-lg mb-4">
                    {founders.founders[index].title}
                  </p>
                  <p className="text-[#4F4F4A]">
                    {founders.founders[index].description}
                  </p>
                </div>

                <div className="mt-4 flex gap-4 text-[#4F4F4A]">
                  <Link href="/founders" className="text-blue-500">
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
