// "use client";

// import { useState } from "react";
// import { useInView } from "framer-motion"
// import { motion } from "framer-motion";
// import scrollSections from "@/data/scrollsection.json";

// export default function ScrollingShowcase() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const handleInView = (index) => {
//     setActiveIndex(index);
//   };

//   return (
//     <div className="w-full min-h-screen flex gap-10 px-20 py-40">

//       {/* LEFT FIXED SECTION */}
//       <div className="w-1/3 sticky top-50 h-fit">
//         <h1 className="text-5xl font-semibold text-[#02285B] leading-tight">
//           Services  <br /> <p className="text-xl font-light">Comprehensive for your organization</p>
//         </h1>
//       </div>

//       {/* MIDDLE IMAGE */}
//       <div className="w-1/3 flex justify-center items-start">
//         <motion.img
//           key={activeIndex}
//           src={scrollSections[activeIndex].image}
//           alt="scroll visual"
//           className="w-72 h-72 object-contain"
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6 }}
//         />
//       </div>

//       {/* RIGHT CONTENT */}
//       <div className="w-1/2 gap-10">

//         {scrollSections.map((section, index) => {
//           const { ref } = useInView({
//             threshold: 0.4,
//             onChange: (inView) => inView && handleInView(index),
//           });

//           return (
//             <div
//               key={section.id}
//               ref={ref}
//               className="min-h-screen flex flex-col justify-center"
//             >
//               <motion.h2
//                 className="text-4xl text-sky-500 font-semibold mb-4"
//                 initial={{ opacity: 0, x: 50 }}
//                 animate={{
//                   opacity: activeIndex === index ? 1 : 0.3,
//                   x: activeIndex === index ? 0 : 10,
//                 }}
//                 transition={{ duration: 0.4 }}
//               >
//                 {section.title}
//               </motion.h2>

//               <p className="text-gray-600 mb-4">
//                 {section.description}
//               </p>

//               <ul className="text-gray-700 space-y-2">
//                 {section.bullets.map((b, i) => (
//                   <li key={i} className="flex items-start gap-2">
//                     <span className="text-sky-500">•</span> {b}
//                   </li>
//                 ))}
//               </ul>

//               <button className="mt-6 bg-sky-500 text-white px-5 py-2 rounded-full hover:bg-sky-600">
//                 Explore More
//               </button>
//             </div>
//           );
//         })}

//       </div>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import scrollSections from "@/data/scrollsection.json";

export default function ScrollingShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleInView = (index) => setActiveIndex(index);
  const handleHover = (index) => setActiveIndex(index);

  return (
    <div className="w-full min-h-screen flex gap-16 px-20 py-24">

      {/* LEFT FIXED TITLE */}
      <div className="w-1/3 sticky top-40 h-fit">
        <h1 className="text-5xl font-semibold text-[#02285B] leading-tight">
          Services
        </h1>
        <p className="text-xl mt-3 text-gray-500">
          Comprehensive for your organization
        </p>
      </div>

      {/* FIXED IMAGE COLUMN (THIS WILL NOT SCROLL) */}
      <div className="w-1/3 sticky top-15 h-fit flex justify-center items-center">
        <motion.img
          key={activeIndex}
          src={scrollSections[activeIndex]?.image}
          alt=""
          className="w-80 h-80 object-contain drop-shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* SCROLLING RIGHT CONTENT */}
      <div className="w-1/3 flex flex-col gap-40">

        {scrollSections.map((section, index) => {
          const { ref } = useInView({
            threshold: 0.4,
            onChange: (inView) => inView && handleInView(index),
          });

          return (
            <div
              key={section.id}
              ref={ref}
              className="min-h-[65vh] flex flex-col justify-start"
            >
              <motion.h2
                onMouseEnter={() => handleHover(index)}
                className="text-3xl text-sky-600 font-semibold mb-4 cursor-pointer"
                initial={{ opacity: 0, x: 30 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0.4,
                  x: activeIndex === index ? 0 : 5,
                }}
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

              <button className="mt-6 bg-sky-500 text-white px-5 py-2 rounded-full hover:bg-sky-600">
                Explore More
              </button>
            </div>
          );
        })}

      </div>
    </div>
  );
}
