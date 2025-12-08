"use client";

import { motion } from "framer-motion";

export default function WhyTalendor() {
  return (
    <section
      className="
        relative w-full h-[700px] py-24 px-6 bg-[#111122] overflow-hidden
      "
    >
      {/* VISIBLE GRADIENT */}
      <div
        className="
          absolute bottom-0 right-0 w-[550px] h-[550px] rounded-full
          opacity-70 bg-gradient-to-br 
          from-[#6A6AFF]/50 via-[#867AE6]/40 to-[#B0A7FF]/35
          blur-[130px]
        "
      ></div>

      {/* CONTENT LEFT */}
      <div className="relative z-10 max-w-4xl text-white ml-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-6"
        >
          Why Talendor?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-300 text-lg leading-relaxed max-w-2xl mb-12"
        >
          Talendor stands for meaningful leadership, organizational excellence,
          and people-first transformation. We bring customized strategies, global
          expertise, and years of experience to help organizations thrive.
        </motion.p>

        {/* GLASSY CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          viewport={{ once: true }}
          className="
            w-full max-w-2xl h-[330px] p-6 rounded-2xl 
            backdrop-blur-2xl bg-white/10 border border-white/20 
            shadow-[0_8px_32px_rgba(255,255,255,0.15)]
            relative text-white
          "
        >
          <h3 className="text-lg font-semibold mb-3 opacity-90">
            Client Impact Analysis
          </h3>

          {/* GRAPH */}
<div className="w-full h-[260px]">
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 500 260"
    preserveAspectRatio="none"
  >
    {/* GRID LINES */}
    {[40, 75, 110, 145, 180, 215, 250].map((y, i) => (
      <line
        key={i}
        x1="40"
        y1={y}
        x2="500"
        y2={y}
        stroke="rgba(255,255,255,0.10)"
        strokeWidth="1"
      />
    ))}

    {/* Y LABELS */}
    <text x="4" y="45" fill="#BBBBBB" fontSize="10">65</text>
    <text x="4" y="80" fill="#BBBBBB" fontSize="10">70</text>
    <text x="4" y="115" fill="#BBBBBB" fontSize="10">75</text>
    <text x="4" y="150" fill="#BBBBBB" fontSize="10">80</text>
    <text x="4" y="185" fill="#BBBBBB" fontSize="10">85</text>
    <text x="4" y="220" fill="#BBBBBB" fontSize="10">90</text>
    <text x="4" y="255" fill="#BBBBBB" fontSize="10">95</text>

    {/* X LABELS */}
    <text x="70" y="270" fill="#BBBBBB" fontSize="10">Q1</text>
    <text x="160" y="270" fill="#BBBBBB" fontSize="10">Q2</text>
    <text x="260" y="270" fill="#BBBBBB" fontSize="10">Q3</text>
    <text x="360" y="270" fill="#BBBBBB" fontSize="10">Q4</text>
    <text x="450" y="270" fill="#BBBBBB" fontSize="10">Q5</text>

    {/* SOFTER ORANGE GRADIENT */}
    <defs>
      <linearGradient id="softOrange" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FF7A00" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#FF7A00" stopOpacity="0.08" />
      </linearGradient>
    </defs>

    {/* ANIMATED SHADED AREA */}
    <motion.path
      d="
        M40 250
        L40 200
        L140 160
        L240 120
        L330 80
        L420 55
        L500 40
        L500 250 Z
      "
      fill="url(#softOrange)"
      initial={{ opacity: 0, scaleY: 0, originY: 1 }}
      whileInView={{ opacity: 1, scaleY: 1 }}
      transition={{ duration: 1.8, ease: "easeInOut" }}
    />

    {/* ANIMATED LINE */}
    <motion.path
      d="
        M40 200 
        L140 160 
        L240 120 
        L330 80 
        L420 55 
        L500 40
      "
      stroke="#FF7A00"
      strokeWidth="4"
      fill="none"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    />

    {/* DOTS */}
    <circle cx="40" cy="200" r="5" fill="#FF7A00" />
    <circle cx="140" cy="160" r="5" fill="#FF7A00" />
    <circle cx="240" cy="120" r="5" fill="#FF7A00" />
    <circle cx="330" cy="80" r="5" fill="#FF7A00" />
    <circle cx="420" cy="55" r="5" fill="#FF7A00" />
    <circle cx="500" cy="40" r="6" fill="#FF7A00" />
  </svg>
</div>

        </motion.div>
      </div>
    </section>
  );
}
