"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ServiceCard({ title, desc, x, y, isRight, visible }) {
  if (!visible) return null;

  return (
    <motion.foreignObject
      x={x - 40}         // extra breathing room
  y={y - 100}
  width={420}        // bigger container
  height={260}       // more height so scaling won’t clip
  style={{ overflow: "visible" }}   // crucial fix!
  initial={{ opacity: 0, x: isRight ? 30 : -30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.55 }}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="
          relative
          p-5
          rounded-2xl
          backdrop-blur-xl
          bg-white/20
          shadow-[0_8px_32px_rgba(0,0,0,0.15)]
          border border-white/30
          overflow-hidden
        "
      >
        {/* Soft Orange Tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FC9236]/25 to-transparent opacity-70 rounded-2xl"></div>

        <div className="relative z-10 font-poppins text-base font-semibold text-black mb-2">
          {title}
        </div>

        <div className="relative z-10 text-sm text-gray-800 leading-relaxed">
          {desc}
        </div>

        {/* Learn More Button */}
        <div className="relative z-10 mt-4">
          <button className="bg-[#654be7] hover:bg-[#040d94] text-white text-xs font-semibold px-4 py-2 rounded-lg transition duration-200">
            Learn More
          </button>
        </div>
      </motion.div>
    </motion.foreignObject>
  );
}
