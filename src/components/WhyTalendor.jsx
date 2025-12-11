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

     {/* RIGHT-SIDE CONCENTRIC CIRCLES + CENTER TEXT + FLOATING CARDS */}
<div className="absolute right-25 top-1/2 -translate-y-1/2 w-[500px] h-[500px] flex items-center justify-center mt-15">

  {/* OUTER CIRCLE */}
  <motion.div
    className="w-[450px] h-[450px] rounded-full border border-[#2039b8]/90 flex items-center justify-center relative"
    initial={{ scale: 0.7, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}
    viewport={{ once: true }}
  >

    {/* CARD: TOP FLOATING */}
    <motion.div
      className="absolute top-[-20px] left-1/2 -translate-x-1/2 
        px-4 py-2 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 
        text-white text-[15px] shadow-[0_4px_20px_rgba(255,255,255,0.15)]
        transition-all duration-300"
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 2.6, repeat: Infinity, repeatType: "mirror" }}
      whileHover={{ backgroundColor: "rgba(255,255,255,0.18)" }}
    >
      Culture
    </motion.div>

    {/* MIDDLE CIRCLE */}
    <motion.div
      className="w-[360px] h-[360px] rounded-full border border-[#5454AB] flex items-center justify-center relative"
      initial={{ scale: 0.7, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
      viewport={{ once: true }}
    >

      {/* CARD: LEFT FLOATING */}
      <motion.div
        className="absolute left-[-50px] top-1/2 -translate-y-1/2 
          px-4 py-2 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 
          text-white text-sm shadow-[0_4px_20px_rgba(255,255,255,0.15)]
          transition-all duration-300"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2.6, repeat: Infinity, repeatType: "mirror" }}
        whileHover={{ backgroundColor: "rgba(255,255,255,0.18)" }}
      >
        HR Strategy
      </motion.div>

      {/* CARD: RIGHT FLOATING */}
      <motion.div
        className="absolute right-[-50px] top-1/2 -translate-y-1/2 
          px-4 py-2 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 
          text-white text-sm shadow-[0_4px_20px_rgba(255,255,255,0.15)]
          transition-all duration-300"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.6, repeat: Infinity, repeatType: "mirror" }}
        whileHover={{ backgroundColor: "rgba(255,255,255,0.18)" }}
      >
        Talent Dev
      </motion.div>

      {/* INNER CIRCLE */}
      <motion.div
        className="w-[280px] h-[280px] rounded-full border border-[#FF7A00] flex items-center justify-center relative"
        initial={{ scale: 0.7, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
      >
        {/* CENTER TEXT */}
        <div className="flex flex-col items-center justify-center text-white">
          <h1 className="text-6xl font-bold">20+</h1>
          <p className="text-medium text-gray-400 opacity-80 -mt-1">
            Years of Global Experience
          </p>
        </div>
      </motion.div>

    </motion.div>

    {/* CARD: BOTTOM FLOATING */}
    <motion.div
      className="absolute bottom-[-25px] left-1/2 -translate-x-1/2 
        px-4 py-2 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 
        text-white text-sm shadow-[0_4px_20px_rgba(255,255,255,0.15)]
        transition-all duration-300"
      animate={{ y: [0, 15, 0] }}
      transition={{ duration: 2.6, repeat: Infinity, repeatType: "mirror" }}
      whileHover={{ backgroundColor: "rgba(255,255,255,0.18)" }}
    >
      Global Experience
    </motion.div>

  </motion.div>
</div>

  {/* Tailwind Blob Animation */}
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
