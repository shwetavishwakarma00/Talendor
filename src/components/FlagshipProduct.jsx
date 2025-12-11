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
  {/* === SEGMENT DATA WITH TEXT === */}
  {[
    {
      color: "#EC008C",
      start: -90,
      end: 0,
      label1: "Energetic",
      label2: "Bold Actions",
      tx: 330,
      ty: 130,
    },
    {
      color: "#0072BC",
      start: 0,
      end: 90,
      label1: "Clarity",
      label2: "Clear Thinking",
      tx: 380,
      ty: 330,
    },
    {
      color: "#F7941E",
      start: 90,
      end: 180,
      label1: "Inspiration",
      label2: "Creative Drive",
      tx: 260,
      ty: 395,
    },
    {
      color: "#8DC63F",
      start: 180,
      end: 270,
      label1: "Harmony",
      label2: "Supportive Focus",
      tx: 130,
      ty: 260,
    },
  ].map((seg, i) => {
    const R = 205;
    const start = (seg.start * Math.PI) / 180;
    const end = (seg.end * Math.PI) / 180;

    const x1 = 260 + R * Math.cos(start);
    const y1 = 260 + R * Math.sin(start);

    const x2 = 260 + R * Math.cos(end);
    const y2 = 260 + R * Math.sin(end);

    return (
      <g key={i}>
        {/* STATIC QUADRANTS (NO CLICKING) */}
        <motion.path
          d={`
            M260 260
            L${x1} ${y1}
            A205 205 0 0 1 ${x2} ${y2}
            Z
          `}
          fill={seg.color}
          whileHover={{
            scale: 1.03,
            filter: "drop-shadow(0 0 20px rgba(255,255,255,0.6))",
          }}
          transition={{ duration: 0.25 }}
        />

        {/* SHOW TEXT ONLY WHEN BUTTON IS CLICKED */}
        {showMessage && (
          <>
            <text
              x={seg.tx}
              y={seg.ty}
              textAnchor="middle"
              fill="white"
              fontSize="18"
              fontWeight="bold"
            >
              {seg.label1}
            </text>
            <text
              x={seg.tx}
              y={seg.ty + 18}
              textAnchor="middle"
              fill="white"
              fontSize="14"
              opacity="0.9"
            >
              {seg.label2}
            </text>
          </>
        )}
      </g>
    );
  })}

  {/* GRAY RING BORDER */}
  <circle
    cx="260"
    cy="260"
    r="205"
    fill="none"
    stroke="#D1D1D1"
    strokeWidth="22"
  />

  {/* CENTER CIRCLE (AS BEFORE) */}
  <motion.circle
    cx="260"
    cy="260"
    r="95"
    fill="#29ABE2"
    stroke="#FFFFFF"
    strokeWidth="6"
    animate={{
      scale: showMessage ? 1.08 : 1,
    }}
    transition={{ duration: 0.4 }}
  />

  {/* CENTER TEXT — SAME LOGIC AS BEFORE */}
  <text
    x="260"
    y="250"
    textAnchor="middle"
    fill="white"
    fontSize="22"
    fontWeight="bold"
  >
    {showMessage ? "Your Journey" : "Insight"}
  </text>

  <text
    x="260"
    y="275"
    textAnchor="middle"
    fill="white"
    fontSize="22"
    fontWeight="bold"
  >
    {showMessage ? "Begins Here" : "Discovery"}
  </text>

  <text
    x="260"
    y="300"
    textAnchor="middle"
    fill="white"
    fontSize="14"
    opacity="0.9"
  >
    {showMessage ? "Create your own path" : "Understanding"}
  </text>

  <text
    x="260"
    y="318"
    textAnchor="middle"
    fill="white"
    fontSize="14"
    opacity="0.9"
  >
    {showMessage ? "with Insights tools" : "yourself and others"}
  </text>
</svg>


</div>



    </section>
  );
}
