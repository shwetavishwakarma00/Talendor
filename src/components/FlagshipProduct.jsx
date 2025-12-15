"use client";

import { motion } from "framer-motion";

export default function FlagshipProduct() {
  return (
    <section
      className="
        w-full flex flex-col md:flex-row
        min-h-[600px] md:h-[600px]
      "
    >
      {/* LEFT SIDE */}
      <div
        className="
          w-full md:w-1/2
          px-6 sm:px-10 md:px-20
          py-12 md:py-20
          flex flex-col justify-center
        "
        style={{ backgroundColor: "#111122" }}
      >
        {/* ORANGE RECTANGLE */}
        <div
          className="
            border px-6 py-2 rounded-xl mb-8
            w-full max-w-[528px]
          "
          style={{
            borderColor: "#FB7704",
            color: "#FB7704",
            fontSize: "18px",
          }}
        >
          FLAGSHIP PRODUCT
        </div>

        {/* HEADING */}
        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          Insight Discovery
        </motion.h1>

        {/* PARAGRAPH */}
        <motion.p
          className="
            text-gray-300 text-base sm:text-lg
            leading-relaxed mb-6
            w-full max-w-[520px]
          "
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Insight Discovery is our foundational flagship offering designed to
          help individuals understand their core strengths, behavioural style,
          and unique growth opportunities.
        </motion.p>

        {/* ORANGE TEXT */}
        <p className="text-[#FB7704] text-base sm:text-lg mb-4">
          Where can Insights Discovery take you?
        </p>

        {/* BUTTON */}
        <button className="w-fit px-6 py-2 border border-[#FB7704] text-[#FB7704] rounded-lg hover:bg-[#FB7704] hover:text-white transition">
          Click here
        </button>
      </div>

      {/* RIGHT SIDE */}
      <div
        className="
          w-full md:w-1/2
          flex items-center justify-center
          py-12 md:py-0
        "
        style={{ backgroundColor: "#222244" }}
      >
        {/* SVG WRAPPER */}
        <div className="w-full max-w-[520px] aspect-square">
          <svg
            viewBox="0 0 520 520"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid meet"
          >
            {[
              {
                color: "#EC008C",
                label1: "Energetic",
                label2: "Bold Actions",
                tx: 360,
                ty: 150,
              },
              {
                color: "#0072BC",
                label1: "Clarity",
                label2: "Clear Thinking",
                tx: 380,
                ty: 330,
              },
              {
                color: "#F7941E",
                label1: "Inspiration",
                label2: "Creative Drive",
                tx: 135,
                ty: 330,
              },
              {
                color: "#8DC63F",
                label1: "Harmony",
                label2: "Supportive Focus",
                tx: 160,
                ty: 150,
              },
            ].map((seg, i) => {
              const angles = [-90, 0, 90, 180, 270];
              const R = 205;
              const start = (angles[i] * Math.PI) / 180;
              const end = (angles[i + 1] * Math.PI) / 180;

              const x1 = 260 + R * Math.cos(start);
              const y1 = 260 + R * Math.sin(start);
              const x2 = 260 + R * Math.cos(end);
              const y2 = 260 + R * Math.sin(end);

              return (
                <g key={i}>
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
                  />

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
                </g>
              );
            })}

            {/* RING */}
            <circle
              cx="260"
              cy="260"
              r="205"
              fill="none"
              stroke="#D1D1D1"
              strokeWidth="12"
            />

            {/* CENTER CIRCLE */}
            <circle
              cx="260"
              cy="260"
              r="95"
              fill="#2A9FD6"
              stroke="#FFFFFF"
              strokeWidth="3"
            />

            {/* CENTER TEXT */}
            <text x="260" y="240" textAnchor="middle" fill="white" fontSize="22" fontWeight="bold">
              Your Journey
            </text>
            <text x="260" y="265" textAnchor="middle" fill="white" fontSize="22" fontWeight="bold">
              Begins Here
            </text>
            <text x="260" y="285" textAnchor="middle" fill="white" fontSize="14" opacity="0.9">
              Create your own path
            </text>
            <text x="260" y="300" textAnchor="middle" fill="white" fontSize="14" opacity="0.9">
              with Insights tools
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}
