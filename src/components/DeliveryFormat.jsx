"use client";

import { motion } from "framer-motion";
import { FiBookOpen } from "react-icons/fi";
import { AiOutlineMessage, AiOutlineTeam } from "react-icons/ai";
import { HiLightBulb } from "react-icons/hi";
import { RiTeamLine } from "react-icons/ri";

export default function DeliveryFormatSection() {
  return (
    <section
      className="
        py-20 
        w-full 
        bg-gradient-to-b 
        from-[#5454AB]/10 
        to-[#5454AB]/5
        mb-10
        relative
      "
    >
      {/* Heading */}
      <motion.div
        className="text-center max-w-2xl mx-auto px-4 sm:px-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-[45px] font-semibold text-[#111122]">
          DELIVERY FORMAT
        </h2>
        <p className="text-gray-600 text-base sm:text-lg md:text-[20px] mt-2">
          Flexible approach tailored to your needs
        </p>
      </motion.div>

      {/* CONNECTING LINES */}
      <div className="relative container mx-auto px-4 sm:px-6 mt-14">
        {/* Desktop horizontal line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "80%" }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="
            hidden sm:block
            absolute 
            left-1/2 
            -translate-x-1/2
            h-[3px] 
            bg-[#5454AB]/80 
            rounded-full
            top-[52px]
            z-0
          "
        />

        
        

      </div>

      {/* Cards */}
      <div className="container mx-auto px-4 sm:px-6 mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 relative z-10">
        {/* Mobile vertical line (center of circles) */}
        {/* Mobile vertical line (centered, shortened, no text overlap) */}
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="
    sm:hidden
    absolute
    left-1/2
    -translate-x-1/2
    top-[40px]        /* center of first circle */
    bottom-[96px]    /* center of last circle */
    w-[3px]
    bg-[#5454AB]/70
    rounded-full
    -z-10
    pointer-events-none
  "
/>



        <DeliveryCard
          icon={<FiBookOpen className="text-[#5454AB] text-3xl sm:text-4xl" />}
          title="Training"
          delay={0.1}
        />
        <DeliveryCard
          icon={<AiOutlineMessage className="text-[#5454AB] text-3xl sm:text-4xl" />}
          title="Coaching"
          delay={0.3}
        />
        <DeliveryCard
          icon={<AiOutlineTeam className="text-[#5454AB] text-3xl sm:text-4xl" />}
          title="Mentoring"
          delay={0.5}
        />
        <DeliveryCard
          icon={<HiLightBulb className="text-[#5454AB] text-3xl sm:text-4xl" />}
          title="Consulting"
          delay={0.7}
        />
        <DeliveryCard
          icon={<RiTeamLine className="text-[#5454AB] text-3xl sm:text-4xl" />}
          title="Facilitation"
          delay={0.9}
        />
      </div>
    </section>
  );
}

// ---------- CARD COMPONENT ----------
function DeliveryCard({ icon, title, delay }) {
  return (
    <motion.div
      className="flex flex-col items-center gap-3"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.08 }}
    >
      <div
        className="
          w-20 h-20 sm:w-24 sm:h-24
          bg-white 
          flex items-center justify-center 
          rounded-full 
          shadow-lg 
          border-4 border-[#5454AB]
          transition-all 
          duration-300 
          hover:bg-gray-100 
          hover:shadow-2xl
        "
      >
        {icon}
      </div>

      <p className="text-[16px] sm:text-[18px] text-center text-black font-semibold">
        {title}
      </p>
    </motion.div>
  );
}
