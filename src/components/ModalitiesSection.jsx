"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import data from "@/data/modalities.json";

export default function ModalitiesSection() {
  const { modalities } = data;
  const [activeId, setActiveId] = useState(modalities[0].id);

  const activeItem = modalities.find((m) => m.id === activeId);

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 md:flex md:gap-12">
        {/* LEFT */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-extrabold text-slate-900">
            OUR MODALITIES
          </h2>
          <p className="mt-3 text-slate-600">
            A suite of learning experiences designed to meet people where they
            are.
          </p>

          <div className="mt-8 space-y-4">
            {modalities.map((item) => (
              <div key={item.id}>
                <button
                  onClick={() => setActiveId(item.id)}
                  className={`w-full rounded-xl p-4 text-left transition ${
                    activeId === item.id
                      ? "bg-gradient-to-r from-orange-100 to-pink-100 ring-2 ring-orange-300"
                      : "bg-white ring-1 ring-slate-200 hover:bg-slate-50"
                  }`}
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    {item.shortDescription}
                  </p>
                </button>

                {/* EXPANDED CONTENT */}
                <AnimatePresence>
                  {activeId === item.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden px-4 pt-3 text-sm text-slate-700"
                    >
                      {item.fullDescription}

                      {/* MOBILE IMAGE (below button) */}
                      <div className="relative mt-4 h-56 w-full overflow-hidden rounded-2xl shadow-lg md:hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="100vw"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        <div className="absolute bottom-3 left-3 text-white">
                          <h3 className="text-sm font-semibold">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT – DESKTOP ONLY (UNCHANGED) */}
        <div className="hidden md:block md:w-1/2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="relative h-100 w-full overflow-hidden rounded-3xl shadow-xl mt-40 ml-10"
            >
              <Image
                src={activeItem.image}
                alt={activeItem.title}
                fill
                sizes="50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold">
                  {activeItem.title}
                </h3>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
