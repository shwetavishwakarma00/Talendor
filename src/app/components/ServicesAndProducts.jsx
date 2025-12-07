"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

const SERVICES = [
  { title: "Foundational Leadership Program", desc: "Build core leadership fundamentals for emerging leaders." },
  { title: "Advanced Leadership Development", desc: "Deep leadership strengthening for mid–senior professionals." },
  { title: "Executive and C-Suite Development", desc: "Strategic leadership coaching for top executives." },
  { title: "Global, Inclusive & Cross-Cultural Leadership", desc: "Develop leadership skills for diverse, global environments." },
  { title: "Discovering Self & Executive Presence", desc: "Improve authentic presence, clarity, and personal impact." },
  { title: "Leading Teams & Building Thriving Cultures", desc: "Learn powerful techniques to lead high-performance teams." },
  { title: "Thriving in Business Leadership", desc: "Enhance influence, adaptability, innovation, and resilience." },
];

const RANDOM_LENGTHS = [140, 260, 180, 240, 170, 200, 220];
const STROKE_COLOR = "#A3A3D1"; // lighter shade for lines
const LINE_THICKNESS = 3;

export default function ServicesAndProducts() {
  const [visibleCards, setVisibleCards] = useState(Array(SERVICES.length).fill(false));

  useEffect(() => {
    SERVICES.forEach((_, i) => {
      setTimeout(() => {
        setVisibleCards(prev => {
          const updated = [...prev];
          updated[i] = true;
          return updated;
        });
      }, 800 + i * 500);
    });
  }, []);

  const width = 1500;
  const height = 650;
  const verticalX = width * 0.5; // slightly more right
  const paddingTop = 60;
  const paddingBottom = 60;
  const usableHeight = height - paddingTop - paddingBottom;
  const gap = usableHeight / (SERVICES.length - 1);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-white relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute w-[900px] h-[900px] rounded-full bg-[radial-gradient(circle,rgba(163,163,209,0.15),rgba(163,163,209,0))] opacity-70 blur-[80px] translate-y-[-80px]"></div>

      <svg width={width} height={height} className="relative z-10">

        {/* Vertical line */}
        <motion.path
          d={`M ${verticalX} ${paddingTop} V ${height - paddingBottom}`}
          stroke={STROKE_COLOR}
          strokeWidth={LINE_THICKNESS + 1}
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />

        {SERVICES.map((item, i) => {
          const y = paddingTop + i * gap;
          const isRight = i % 2 === 0;
          const branchLength = RANDOM_LENGTHS[i];
          const branchEndX = isRight ? verticalX + branchLength : verticalX - branchLength;
          const cardX = isRight ? branchEndX + 20 : branchEndX - 320;

          return (
            <g key={i}>
              {/* Branch line */}
              <motion.path
                d={`M ${verticalX} ${y} H ${branchEndX}`}
                stroke={STROKE_COLOR}
                strokeWidth={LINE_THICKNESS}
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.9, ease: "easeInOut", delay: 0.6 + i * 0.45 }}
              />

              {/* Dot at branch end */}
              <motion.circle
                cx={branchEndX}
                cy={y}
                r={7}
                fill={STROKE_COLOR}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7 + i * 0.45 }}
              />

              {/* Service Card */}
              <ServiceCard
                title={item.title}
                desc={item.desc}
                x={cardX}
                y={y}
                isRight={isRight}
                visible={visibleCards[i]}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
