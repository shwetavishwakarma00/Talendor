"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function FlagshipProduct() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <section className="flex h-[600px] w-full">
      
      {/* LEFT SIDE */}
      <div
        className="w-1/2 h-full px-20 py-20"
        style={{ backgroundColor: "#111122" }}
      >
        {/* ORANGE RECTANGLE */}
        <div
          className="border px-6 py-2 rounded-xl mb-8"
          style={{
            width: "528px",
            borderColor: "#FB7704",
            color: "#FB7704",
            fontSize: "18px",
          }}
        >
          FLAGSHIP PRODUCT
        </div>

        {/* HEADING */}
        <motion.h1
          className="text-5xl font-extrabold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          Insight Discovery
        </motion.h1>

        {/* PARAGRAPH */}
        <motion.p
          className="text-gray-300 text-lg leading-relaxed w-[520px] mb-6"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Insight Discovery is our foundational flagship offering designed to
          help individuals understand their core strengths, behavioural style,
          and unique growth opportunities.
        </motion.p>

       
        {/* CLICKABLE ORANGE TEXT */}
        <button
          className="text-[#FB7704] underline cursor-pointer text-lg"
          onClick={() => setShowMessage(true)}
        >
          Where can Insights Discovery take you?
        </button>

        {/* REVEALED MESSAGE */}
        {showMessage && (
          <motion.p
            className="text-white text-lg mt-4 w-[520px]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            Create your own journey with Insights Discovery as the foundation.
          </motion.p>
        )}
      </div>

     {/* RIGHT SIDE */}
{/* RIGHT SIDE */}
<div
  className="w-1/2 h-full flex items-center justify-center"
  style={{ backgroundColor: "#222244" }}
>
  <svg width="520" height="520" viewBox="0 0 520 520">
    <defs>
      {/* OUTER TEXT PATH (precisely inside border) */}
      <path
        id="outerTextPath"
        d="
          M260,65
          A205,205 0 1,1 259.9,65
        "
      />

      {/* INNER TEXT PATH */}
      <path
        id="innerTextPath"
        d="
          M260,180
          A90,90 0 1,1 259.9,180
        "
      />
    </defs>

    {/* ===== OUTER 5 SEGMENTS (Glow Only, No Scale) ===== */}

    {[
      { color: "#EC008C", start: -90, end: -18 },
      { color: "#0072BC", start: -18, end: 54 },
      { color: "#7F7F7F", start: 54, end: 126 },
      { color: "#F7941E", start: 126, end: 198 },
      { color: "#8DC63F", start: 198, end: 270 }
    ].map((seg, i) => {
      const R = 205; // matches gray border R = 205
      const start = (seg.start * Math.PI) / 180;
      const end = (seg.end * Math.PI) / 180;

      const x1 = 260 + R * Math.cos(start);
      const y1 = 260 + R * Math.sin(start);

      const x2 = 260 + R * Math.cos(end);
      const y2 = 260 + R * Math.sin(end);

      const largeArc = seg.end - seg.start > 180 ? 1 : 0;

      return (
        <motion.path
          key={i}
          d={`
            M260 260
            L${x1} ${y1}
            A205 205 0 ${largeArc} 1 ${x2} ${y2}
            Z
          `}
          fill={seg.color}
          whileHover={{
            filter: "drop-shadow(0 0 20px rgba(255,255,255,0.7))",
          }}
          transition={{ duration: 0.25 }}
          style={{ cursor: "pointer" }}
        />
      );
    })}

    {/* ===== OUTER GRAY BORDER (hugging segments perfectly) ===== */}
    <circle
      cx="260"
      cy="260"
      r="205"
      fill="none"
      stroke="#D1D1D1"
      strokeWidth="22"
    />

    {/* OUTER CURVED TEXT */}
    <text fill="#FFFFFF" fontSize="18" fontWeight="600">
      <textPath href="#outerTextPath" startOffset="50%" textAnchor="middle">
        Become an Insights Practitioner!
      </textPath>
    </text>

    {/* ===== INNER CIRCLE (Smaller + Better Hover Scale) ===== */}
    <motion.circle
      cx="260"
      cy="260"
      r="95"
      fill="#29ABE2"
      stroke="#FFFFFF"
      strokeWidth="6"
        initial={{ opacity: 0, y: 20 }}
      whileHover={{
        scale: 1.09,
        filter: "drop-shadow(0 0 15px rgba(255,255,255,0.8))",
      }}
      transition={{ duration: 0.25 }}
      style={{ originX: "260px", originY: "260px", cursor: "pointer" }}
    />

    {/* INNER CURVED TEXT */}
    <text fill="white" fontSize="11" fontWeight="bold">
      <textPath href="#innerTextPath" startOffset="50%" textAnchor="middle">
        Discovery Full Circle  •  Deeper Discovery
      </textPath>
    </text>

    {/* CENTER TEXT */}
    <text
      x="260"
      y="250"
      textAnchor="middle"
      fill="white"
      fontSize="22"
      fontWeight="bold"
    >
      Insights
    </text>

    <text
      x="260"
      y="275"
      textAnchor="middle"
      fill="white"
      fontSize="22"
      fontWeight="bold"
    >
      Discovery
    </text>

    <text
      x="260"
      y="300"
      textAnchor="middle"
      fill="white"
      fontSize="14"
      opacity="0.9"
    >
      Understanding
    </text>

    <text
      x="260"
      y="318"
      textAnchor="middle"
      fill="white"
      fontSize="14"
      opacity="0.9"
    >
      yourself and others
    </text>
  </svg>
</div>



    </section>
  );
}
