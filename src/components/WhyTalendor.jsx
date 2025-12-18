"use client";

import { motion } from "framer-motion";

export default function WhyTalendor() {
  return (
    <section
      className="relative w-full min-h-[700px] md:h-[700px] py-20 px-4 md:px-6 bg-[#111122] overflow-hidden">
     
      <div
        className="absolute bottom-0 right-0 w-[350px] h-[350px] md:w-[550px] md:h-[550px] rounded-full opacity-70 bg-gradient-to-br from-[#6A6AFF]/50 via-[#867AE6]/40 to-[#B0A7FF]/35 blur-[100px] md:blur-[130px]" />

      
      <div className="flex flex-col md:block">

        
        <div className="relative mt-15 md:mt-0 z-10 max-w-4xl text-white md:ml-6 text-center md:text-left px-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold mb-6 md:mt-2"

          >
            Why Talendor?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-12 mx-auto md:mx-0">
            Your people are your greates asset.At Talendor, we blend innovation with human-centric
            solution to create workplace thrive.Partners with us
            to unlock your organization's full potential.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="w-full max-w-xl sm:max-w-2xl  h-[300px] sm:h-[330px]  p-4 sm:p-6 rounded-2xl  backdrop-blur-2xl bg-white/10 border border-white/20 mx-auto md:mx-0">
            <h3 className="text-lg font-semibold mb-3">Client Impact Analysis</h3>

            {/* GRAPH */}
            <div className=" w-full h-[220px] sm:h-[260px] overflow-hidden">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 500 260"
                preserveAspectRatio="none"
              >
                {/* Grid */}
                {[40, 75, 110, 145, 180, 215, 250].map((y) => (
                  <line key={y} x1="40" y1={y} x2="500" y2={y}
                    stroke="rgba(255,255,255,0.10)" strokeWidth="1" />
                ))}

                {/* Y labels */}
                <text x="4" y="45" fill="#BBBBBB" fontSize="10">65</text>
                <text x="4" y="80" fill="#BBBBBB" fontSize="10">70</text>
                <text x="4" y="115" fill="#BBBBBB" fontSize="10">75</text>
                <text x="4" y="150" fill="#BBBBBB" fontSize="10">80</text>
                <text x="4" y="185" fill="#BBBBBB" fontSize="10">85</text>
                <text x="4" y="220" fill="#BBBBBB" fontSize="10">90</text>
                <text x="4" y="255" fill="#BBBBBB" fontSize="10">95</text>

                {/* X labels */}
                <text x="70" y="270" fill="#BBBBBB" fontSize="10">Q1</text>
                <text x="160" y="270" fill="#BBBBBB" fontSize="10">Q2</text>
                <text x="260" y="270" fill="#BBBBBB" fontSize="10">Q3</text>
                <text x="360" y="270" fill="#BBBBBB" fontSize="10">Q4</text>
                <text x="450" y="270" fill="#BBBBBB" fontSize="10">Q5</text>

                {/* Gradient */}
                <defs>
                  <linearGradient id="softOrange" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FF7A00" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#FF7A00" stopOpacity="0.08" />
                  </linearGradient>
                </defs>

                {/* Area */}
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
                  transition={{ duration: 1.8 }}
                />

                {/* Line */}
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
                  transition={{ duration: 1.5 }}
                />

                {/* Dots */}
                {[[40, 200], [140, 160], [240, 120], [330, 80], [420, 55], [500, 40]].map(([x, y], i) => (
                  <circle key={i} cx={x} cy={y} r="5" fill="#FF7A00" />
                ))}
              </svg>
            </div>
          </motion.div>
        </div>


        
        <div
          className="order-2 md:order-none relative z-0 mt-16 md:mt-0 md:absolute md:right-25 md:top-1/2 md:-translate-y-1/2 flex items-center justify-center">
       
          <motion.div
            className=" w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[450px] md:h-[450px] rounded-full border border-[#2039b8]/90 flex items-center justify-center relativ "
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            
            <motion.div
              className=" absolute top-[-18px] sm:top-[-25px] left-1/2 -translate-x-1/2 px-3 py-1 md:px-3 md:py-3 rounded-full backdrop-blur-xl bg-white/10 border border-white/20  text-white text-x "
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2.6, repeat: Infinity }}
            >
              Global Expertise
            </motion.div>

           
            <motion.div
              className=" w-[170px] h-[170px] sm:w-[240px] sm:h-[240px] md:w-[360px] md:h-[360px] rounded-full border border-[#5454AB] flex items-center justify-center relativ ">
              
              <motion.div
                className=" absolute left-[-65px] sm:left-[-50px] top-1/2 -translate-y-1/2 px-2 py-2 md:px-2 md:py-3 sm:px-3 sm:py-2 max-w-[110px] sm:max-w-none rounded-full text-center backdrop-blur-xl bg-white/10 border border-white/20 text-[10px] sm:text-xs  text-white scale-90 sm:scale-100 leading-tigh  "
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2.6, repeat: Infinity }}
              >
                Future Ready Thinking
              </motion.div>


              
              <motion.div
                className=" absolute right-[-45px] sm:right-[-50px] top-1/2 -translate-y-1/2 px-3 py-3 md:px-4 md:py-3 sm:px-3 sm:py-2 max-w-[110px] sm:max-w-none rounded-full text-center backdrop-blur-xl bg-white/10 border border-white/20 text-[10px] sm:text-xs  text-white scale-90 sm:scale-100 leading-tigh "
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2.6, repeat: Infinity }}
              >
                People First
              </motion.div>


             
              <motion.div
                className=" w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] md:w-[280px] md:h-[280px] rounded-full border border-[#FF7A00] flex items-center justify-cente ">
                <div className="flex flex-col items-center text-white">
                  <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                    20+
                  </h1>
                  <p className="text-xs sm:text-sm text-gray-400 text-center">
                    Years of Global Experience
                  </p>
                </div>
              </motion.div>
            </motion.div>

            
            <motion.div
              className=" absolute bottom-[-18px] sm:bottom-[-30px] left-1/2 -translate-x-1/2 px-10 py-1 md:px-10 md:py-3 rounded-full backdrop-blur-xl bg-white/10 border border-white/20  text-white text-x "
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2.6, repeat: Infinity }}
            >
              Bespoke Approach
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
