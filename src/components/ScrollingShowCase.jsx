

"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import scrollSections from "@/data/scrollsection.json";

export default function ScrollingShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  // hold DOM nodes for each section
  const sectionRefs = useRef([]);
  sectionRefs.current = []; 

  // callback ref to populate sectionRefs.current
  const setSectionRef = (el, idx) => {
    sectionRefs.current[idx] = el;
  };

  useEffect(() => {
    if (!sectionRefs.current.length) return;

    // IntersectionObserver callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = Number(entry.target.dataset.index);
          // update only when different to avoid extra renders
          setActiveIndex((prev) => (prev === idx ? prev : idx));
        }
      });
    };

    const obs = new IntersectionObserver(observerCallback, {
      threshold: 0.5, // change when 50% of the section is visible
    });

    // observe all existing section elements
    sectionRefs.current.forEach((el) => {
      if (el) obs.observe(el);
    });

    return () => {
      // cleanup
      sectionRefs.current.forEach((el) => {
        if (el) obs.unobserve(el);
      });
      obs.disconnect();
    };
  }, [/* no deps other than refs content, we intentionally run after mount */]);

  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row gap-16 
                px-6 md:px-12 lg:px-20 pt-32 md:pt-40 pb-24 mt-20">

  {/* LEFT — FIXED CENTERED */}
  <div className="lg:w-1/3 sticky top-1/3 -translate-y-1/2 h-fit flex flex-col justify-center">
    <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-800 to-orange-400 bg-clip-text text-transparent leading-tight text-center lg:text-left">
      Services
    </h1>
    <p className="text-lg md:text-xl mt-3 text-gray-500 text-center lg:text-left">
      Comprehensive for your organization
    </p>
  </div>

  {/* CENTER IMAGE — FIXED CENTERED */}
  <div className="lg:w-1/3 sticky top-1/3 -translate-y-1/2 h-fit 
                  flex flex-col justify-center items-center">
    <motion.img
      key={activeIndex}
      src={scrollSections[activeIndex]?.image}
      alt={scrollSections[activeIndex]?.title || "service image"}
      className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-contain drop-shadow-xl"
      initial={{ opacity: 0, scale: 0.45 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.1 }}
    />
  </div>

  {/* RIGHT SCROLL SECTION — UNCHANGED */}
  <div className="lg:w-1/2 flex flex-col gap-32 md:gap-40 mt ">
    {scrollSections.map((section, index) => (
      <div
        key={section.id}
        data-index={index}
        ref={(el) => setSectionRef(el, index)}
        className="min-h-[55vh] md:min-h-[65vh] flex flex-col justify-start"
      >
        <motion.h2
          className={`text-2xl text-[#5c5cda] md:text-3xl font-semibold mb-4 ${
            activeIndex === index ? "text-[#5c5cda]" : "text-slate-400"
          }`}
          initial={{ x: 30 }}
          animate={{ x: activeIndex === index ? 0 : 5 }}
          transition={{ duration: 0.3 }}
        >
          {section.title}
        </motion.h2>

        <p className="text-gray-600 mb-4">{section.description}</p>

        <ul className="text-gray-700 space-y-2">
          {section.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-sky-500 text-lg">•</span> {b}
            </li>
          ))}
        </ul>

        <button className="mt-6 w-fit bg-[#5454AB] text-white px-5 py-2 rounded-full hover:bg-[#43438f]">
          Learn more
        </button>
      </div>
    ))}
  </div>
</div>

  );
}


