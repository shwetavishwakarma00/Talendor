

"use client";

import { motion } from "framer-motion";
import { FaHorseHead, FaRocket } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { GiTeamIdea } from "react-icons/gi";

export default function ExpertiseSection() {
  return (
    <section
      className="
        w-full
        py-14 sm:py-16 md:py-20
        min-h-[420px] md:h-[480px]
        bg-gradient-to-b
        from-[#5454AB]/10
        to-[#5454AB]/5
      "
    >
      {/* Heading */}
      <motion.div
        className="text-center max-w-2xl mx-auto px-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-heading sm:text-2xl font-bold text-black">
          OUR EXPERTISE
        </h2>

        <p className="text-sm font-para sm:text-base text-gray-600 mt-2 sm:mt-3">
          Customized to your business needs
        </p>
      </motion.div>

      {/* Cards */}
      <div className="container mx-auto px-4 sm:px-6 mt-10 sm:mt-12 md:mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
        <ExpertiseCard
          icon={<FaHorseHead />}
          title="Strategic HR Consulting"
        />

        <ExpertiseCard
          icon={<IoIosSearch />}
          title="Executive Search"
        />

        <ExpertiseCard
          icon={<FaRocket />}
          title="Leadership Development"
        />

        <ExpertiseCard
          icon={<GiTeamIdea />}
          title="Team Development"
        />
      </div>
    </section>
  );
}

function ExpertiseCard({ icon, title }) {
  return (
    <motion.div
      className="flex flex-col items-center gap-2 sm:gap-3"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
    >
      <div
        className="
          w-16 h-16
          sm:w-20 sm:h-20
          md:w-24 md:h-24
          bg-white
          flex items-center justify-center
          rounded-full
          shadow-lg
          border border-[#8c8cdc]
          transition-all
          duration-300
          hover:bg-gray-100
          hover:shadow-xl
        "
      >
        <div className="text-[#5454AB] text-2xl sm:text-3xl md:text-4xl">
          {icon}
        </div>
      </div>

      <p className="text-sm font-para sm:text-base md:text-[20px] text-center font-semibold text-black leading-tight">
        {title}
      </p>
    </motion.div>
  );
}
