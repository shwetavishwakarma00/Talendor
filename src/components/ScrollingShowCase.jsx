"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import scrollSections from "@/data/scrollsection.json";
import Link from "next/link";


export default function ScrollingShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showPinned, setShowPinned] = useState(false);
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);

          if (entry.isIntersecting) {
            setActiveIndex(index);
            setShowPinned(true);
          }

          if (
            index === scrollSections.length - 1 &&
            entry.boundingClientRect.top < 0 &&
            !entry.isIntersecting
          ) {
            setShowPinned(false);
          }

          if (
            index === 0 &&
            entry.boundingClientRect.top > 0 &&
            !entry.isIntersecting
          ) {
            setShowPinned(false);
          }
        });
      },
      { threshold: 0.6 }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section 
    id="services"
    className="relative bg-white">

      {/* ================= PHONE ONLY (CARDS) ================= */}
      <div className="md:hidden px-5 py-16 space-y-10">

        <h1 className="text-2xl font-extrabold text-black font-heading bg-clip-text  text-center">
          Services
        </h1>

        {scrollSections.map((item) => (
          <div
            key={item.slug}
            className="bg-white rounded-2xl shadow-md p-6 space-y-5"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-36 h-36 mx-auto object-contain"
            />

            <h2 className="text-xl  font-heading text-[#5c5cda] text-center">
              {item.title}
            </h2>

            <p className="text-gray-600 text-sm text-center">
              {item.description}
            </p>

            <ul className="space-y-2 text-sm">
              {item.bullets.map((b, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-sky-500">•</span>
                  {b}
                </li>
              ))}
            </ul>

            <div className="text-center">
              <Link href={`/services/${item.slug}`}>
                <button className="bg-[#5454AB] text-white px-6 py-2 rounded-full text-sm">
                  Learn more
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* ================= TABLET + DESKTOP (SAME DESIGN) ================= */}
      <div
        className="
          hidden md:grid
          grid-cols-[1fr_1fr_2fr]
          gap-10 lg:gap-16
          px-10 lg:px-24
          py-24 lg:py-32
        "
      >
        {/* LEFT — TEXT */}
        <motion.div
          className="sticky top-1/2 -translate-y-1/2 h-fit"
          initial={{ opacity: 0, x: -50 }}
          animate={showPinned ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-2xl lg:text-5xl font-heading  bg-clip-text ">
            Services
          </h1>
          <p className="mt-3 text-base lg:text-lg text-gray-500">
            Comprehensive for your organization
          </p>
        </motion.div>

        {/* CENTER — IMAGE */}
        <motion.div
          className="sticky top-1/2 -translate-y-1/2 h-fit flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            showPinned
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 0.4 }}
        >
          <motion.img
            src={scrollSections[activeIndex].image}
            alt=""
            className="w-56 h-56 lg:w-72 lg:h-72 object-contain"
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* RIGHT — CONTENT */}
        <div className="flex flex-col">
          {scrollSections.map((item, i) => (
            <div
              key={item.slug}
              ref={(el) => (refs.current[i] = el)}
              data-index={i}
              className="min-h-screen flex flex-col justify-center"
            >
              <h2 className="text-2xl lg:text-3xl font-semibold text-[#5c5cda] mb-4">
                {item.title}
              </h2>

              <p className="text-gray-600 mb-4">
                {item.description}
              </p>

              <ul className="space-y-2">
                {item.bullets.map((b, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-sky-500">•</span>
                    {b}
                  </li>
                ))}
              </ul>

              <Link href={`/services/${item.slug}`}>
                <button className="mt-6 w-fit bg-[#5454AB] text-white px-6 py-2 rounded-full">
                  Learn more
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}