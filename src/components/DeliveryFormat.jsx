"use client";

import { motion } from "framer-motion";
import { FiBookOpen } from "react-icons/fi";
import { AiOutlineMessage } from "react-icons/ai";
import { AiOutlineTeam } from "react-icons/ai";
import { HiLightBulb } from "react-icons/hi";
import { RiTeamLine } from "react-icons/ri";

export default function DeliveryFormatSection() {
  return (
    <section
      className="
        py-20 
        w-full 
        h-[450px]
        bg-gradient-to-b 
        from-[#5454AB]/10 
        to-[#5454AB]/5
        mb-10
        relative
      "
    >
      {/* Heading */}
      <motion.div
        className="text-center max-w-2xl mx-auto px-3"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-[45px] font-semibold text-[#111122]">
          DELIVERY FORMAT
        </h2>
        <p className="text-gray-600 text-[20px]">
          Flexible approach tailored to your needs
        </p>
      </motion.div>

      {/* ANIMATED CONNECTING LINE */}
      <div className="relative container mx-auto px-6 mt-20">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "80%" }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="
            absolute 
            left-1/2 
            -translate-x-1/2
            h-[3px] 
            bg-[#5454AB]/80 
            rounded-full
            top-[52px]
            z-0
          "
        ></motion.div>
      </div>

      {/* Cards */}
      <div className="container mx-auto px-6 mt-10 grid grid-cols-2 md:grid-cols-5 gap-10 relative z-10">
        <DeliveryCard
          icon={<FiBookOpen className="text-[#5454AB] text-4xl" />}
          title="Training"
          delay={1.1}
        />

        <DeliveryCard
          icon={<AiOutlineMessage className="text-[#5454AB] text-4xl" />}
          title="Coaching"
          delay={1.3}
        />

        <DeliveryCard
          icon={<AiOutlineTeam className="text-[#5454AB] text-4xl" />}
          title="Mentoring"
          delay={1.5}
        />

        <DeliveryCard
          icon={<HiLightBulb className="text-[#5454AB] text-4xl" />}
          title="Consulting"
          delay={1.7}
        />

        <DeliveryCard
          icon={<RiTeamLine className="text-[#5454AB] text-4xl" />}
          title="Facilitation"
          delay={1.9}
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
      transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.08 }}
    >
      <div
        className="
          w-24 h-24 
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

      <p className="text-[18px] text-center text-black font-semibold">
        {title}
      </p>
    </motion.div>
  );
}
