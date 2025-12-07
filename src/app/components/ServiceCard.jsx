"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ServiceCard({ title, desc, x, y, isRight, visible }) {
  if (!visible) return null;

  return (
    <motion.foreignObject
      x={x}
      y={y - 60}
      width={300}
      height={140}
      initial={{ opacity: 0, x: isRight ? 20 : -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative border border-[#4636fc33] rounded-xl shadow-md p-4 bg-[#FFF2E3] overflow-hidden">

        {/* FC9236 Light Gradient */}
        <div className="absolute inset-0 rounded-xl opacity-20 bg-gradient-to-b from-[#FC9236] to-transparent"></div>

        <div className="relative z-10 font-poppins text-sm font-semibold text-black mb-1">
          {title}
        </div>

        <div className="relative z-10 text-[11px] text-gray-700 leading-relaxed">
          {desc}
        </div>



         {/* Learn More Button */}
          <div className="mt-3">
            <button className="bg-[#654be7] hover:bg-[#040d94] text-white text-xs font-semibold px-3 py-1 rounded transition-colors duration-200">
              Learn More
            </button>
          </div>
        </div>
   
    </motion.foreignObject>
  );
}
