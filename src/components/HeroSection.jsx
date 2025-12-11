
// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";


// import { FaUsers, FaLightbulb, FaChartLine } from "react-icons/fa";

// export default function HeroSection() {
//   return (
//     <section className="w-full h-[700px] relative overflow-hidden mt-20 pt-15 pb-20 bg-gradient-to-b from-white to-gray-50">
      
//       {/* Floating background blobs */}
//       <motion.div 
//         className="absolute -top-2 -right-22 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply opacity-30 filter blur-3xl animate-blob"
//       />
//       <motion.div 
//         className="absolute -bottom-32 -right-32 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply opacity-30 filter blur-3xl animate-blob animation-delay-2000"
//       />

//       <motion.div 
//   className="absolute top-10 -left-32 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply opacity-30 filter blur-3xl animate-blob"
//   style={{ animationDelay: "1s" }}
// />


//       <div className="container mx-auto px-20 pt-0 flex flex-col lg:flex-row items-center justify-between gap-10">
        
//        {/* Text Section */}
// <motion.div 
//   className="flex-1 mt-[-50px]"
//   initial={{ opacity: 0, y: 40 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.9, ease: "easeOut" }}
// >
//   <motion.p 
//     className="text-sm text-gray-500 mb-2"
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ delay: 0.2, duration: 0.6 }}
//   >
//     HR EXCELLENCE REDEFINED
//   </motion.p>

//   <motion.div 
//     className="text-5xl lg:text-5xl font-bold mb-4 text-black"
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ delay: 0.35, duration: 0.6 }}
//   >
//     WELCOME TO 
//     <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-800 to-orange-400 bg-clip-text text-transparent">
//       TALENDOR
//     </h1>
//   </motion.div>

//   <motion.div 
//     className="text-lg text-gray-600 mb-6"
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ delay: 0.45, duration: 0.6 }}
//   >
//     Door to all your Talent Needs
//   </motion.div>

//   <motion.p 
//     className="text-gray-500 mb-8"
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ delay: 0.55, duration: 0.6 }}
//   >
//     At Talendor, we don’t just connect businesses with talent; we create lasting partnerships 
//     that drive growth, innovation, and excellence. With a passion for people and performance, 
//     we transform HR solutions into strategic business advantages.
//   </motion.p>

//   {/* Buttons */}
//   <motion.div 
//     className="flex gap-4"
//     initial={{ opacity: 0, y: 15 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ delay: 0.7, duration: 0.6 }}
//   >
//     <button className="px-7 py-3 bg-[#5454AB] text-white rounded-full font-medium hover:bg-[#43438f] hover:scale-105 transition">
//       Explore Now
//     </button>
//     <button className="px-6 py-3 border border-[#5454AB] text-[#5454AB] rounded-full hover:bg-purple-50 transition">
//       Contact Us
//     </button>
//   </motion.div>
// </motion.div>

//          {/* Image Section */}
// <div className="flex-1 relative">

//  {/* Mustard Wave 1 */}
// <motion.svg 
//   className="absolute top-30 left-20 w-[500px] z-20"
//   viewBox="0 0 400 120" 
//   fill="none"
//   initial={{ opacity: 0 }}
//   animate={{ y: [0, -10, 0], opacity: [0.8, 1, 0.8] }}
//   transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
// >
//   <defs>
//     <linearGradient id="waveGrad1" x1="0%" x2="100%">
//       <stop offset="0%" stopColor="#E19D36" stopOpacity="0.1" />
//       <stop offset="50%" stopColor="#E19D36" stopOpacity="0.4" />
//       <stop offset="100%" stopColor="#E19D36" stopOpacity="0.1" />
//     </linearGradient>
//   </defs>

//   <motion.path 
//     d="M0 60 C100 120 300 0 400 60"
//     stroke="url(#waveGrad1)" 
//     strokeWidth="3"
//     strokeLinecap="round"
//     initial={{ pathLength: 0 }}
//     animate={{ pathLength: 1 }}
//     transition={{
//       duration: 1.2,
//       delay: 1,   // ⬅ starts after the image
//       ease: "easeInOut"
      
//   }}
//   />
// </motion.svg>


// {/* Mustard Wave 2 */}
// <motion.svg 
//   className="absolute top-50 left-15 w-[550px] z-20"
//   viewBox="0 0 450 120" 
//   fill="none"
//    initial={{ opacity: 0 }}
//   animate={{ y: [0, 8, 0], opacity: [0.7, 1, 0.7] }}
//   transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
// >
//   <defs>
//     <linearGradient id="waveGrad2" x1="0%" x2="100%">
//       <stop offset="0%" stopColor="#E19D36" stopOpacity="0.1" />
//       <stop offset="50%" stopColor="#E19D36" stopOpacity="0.5" />
//       <stop offset="100%" stopColor="#E19D36" stopOpacity="0.1" />
//     </linearGradient>
//   </defs>

//   <motion.path 
//     d="M0 50 C150 110 300 -10 450 50"
//     stroke="url(#waveGrad2)" 
//     strokeWidth="2.5"
//     strokeLinecap="round"
//     initial={{ pathLength: 0 }}
//     animate={{ pathLength: 1 }}
//     transition={{
//       duration: 1.2,
//       delay: 1.2,  
//       ease: "easeInOut"
      
//   }}
//   />
// </motion.svg>




//   {/* Outer Dotted Border Circle */}
//   <motion.div 
//     className="relative w-[480px] h-[480px] mx-auto rounded-full border-dotted border-[4px] border-[#96b4d5] flex items-center justify-center z-10"
//     initial={{ scale: 0 }}
//     animate={{ scale: 1 }}
//     transition={{ duration: 1 }}
//   >

//     {/* Inner Circle to create GAP */}
//     <div className="w-[400px] h-[400px] rounded-full overflow-hidden relative">

//       <Image 
//         src="/images/herosectionimg.jpg"
//         alt="Team Collaboration"
//         fill
//         className="object-cover"
//       />
//     </div>

//   </motion.div>

// </div>


//           {/* Floating Icons */}
//           <motion.div 
//             className="absolute top-40 left-205 p-3.5 bg-white rounded-full shadow-lg"
//             animate={{ y: [0, -10, 0] }}
//             transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
//           >
//             <FaUsers className="text-purple-500 w-6 h-6" />
//           </motion.div>

//           <motion.div 
//             className="absolute top-20 right-35 p-3.5 bg-white rounded-full shadow-lg"
//             animate={{ y: [0, 10, 0] }}
//             transition={{ duration: 2.5, repeat: Infinity, repeatType: "mirror" }}
//           >
//             <FaLightbulb className="text-yellow-400 w-6 h-6" />
//           </motion.div>

//           <motion.div 
//             className="absolute bottom-42 right-50 p-3.5 bg-white rounded-full shadow-lg"
//             animate={{ y: [0, -15, 0] }}
//             transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
//           >
//             <FaChartLine className="text-orange-500 w-6 h-6" />
//           </motion.div>
//         </div>
    

//       {/* Tailwind Blob Animation */}
//       <style jsx>{`
//         .animate-blob {
//           animation: blob 7s infinite;
//         }
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//         @keyframes blob {
//           0% { transform: translate(0px, 0px) scale(1); }
//           33% { transform: translate(30px, -50px) scale(1.1); }
//           66% { transform: translate(-20px, 20px) scale(0.9); }
//           100% { transform: translate(0px, 0px) scale(1); }
//         }
//       `}</style>
//     </section>
//   );
// }


"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaUsers, FaLightbulb, FaChartLine } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="w-full min-h-[650px] relative overflow-hidden mt-20 pb-20 bg-gradient-to-b from-white to-gray-50">

      {/* Floating blobs (hidden on mobile) */}
      <motion.div 
        className="hidden sm:block absolute -top-2 -right-22 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply opacity-30 blur-3xl animate-blob"
      />
      <motion.div 
        className="hidden sm:block absolute -bottom-32 -right-32 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply opacity-30 blur-3xl animate-blob animation-delay-2000"
      />
      <motion.div 
        className="hidden sm:block absolute top-10 -left-32 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply opacity-30 blur-3xl animate-blob"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-6 sm:px-12 lg:px-20 pt-0 flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* Text Section */}
        <motion.div 
          className="flex-1 -mt-8 sm:mt-[-50px]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.p 
            className="text-sm text-gray-500 mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            HR EXCELLENCE REDEFINED
          </motion.p>

          <motion.div 
            className="text-4xl sm:text-5xl font-bold mb-4 text-black leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            WELCOME TO 
            <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-purple-800 to-orange-400 bg-clip-text text-transparent mt-2">
              TALENDOR
            </h1>
          </motion.div>

          <motion.div 
            className="text-lg text-gray-600 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
          >
            Door to all your Talent Needs
          </motion.div>

          <motion.p 
            className="text-gray-500 mb-8 max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
          >
            At Talendor, we don’t just connect businesses with talent; we create lasting 
            partnerships that drive growth, innovation, and excellence.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            className="flex gap-4"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <button className="px-6 py-3 bg-[#5454AB] text-white rounded-full font-medium hover:bg-[#43438f] hover:scale-105 transition text-sm sm:text-base">
              Explore Now
            </button>
            <button className="px-6 py-3 border border-[#5454AB] text-[#5454AB] rounded-full hover:bg-purple-50 transition text-sm sm:text-base">
              Contact Us
            </button>
          </motion.div>
        </motion.div>

        {/* IMAGE + SVG Waves (Hidden on Mobile) */}
        <div className="hidden lg:flex flex-1 relative">

          {/* WAVE 1 */}
          <motion.svg 
            className="absolute top-30 left-20 w-[500px] z-20"
            viewBox="0 0 400 120" 
            fill="none"
          >
            <defs>
              <linearGradient id="waveGrad1" x1="0%" x2="100%">
                <stop offset="0%" stopColor="#E19D36" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#E19D36" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#E19D36" stopOpacity="0.1" />
              </linearGradient>
            </defs>

            <motion.path 
              d="M0 60 C100 120 300 0 400 60"
              stroke="url(#waveGrad1)" 
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, delay: 1 }}
            />
          </motion.svg>

          {/* WAVE 2 */}
          <motion.svg 
            className="absolute top-50 left-15 w-[550px] z-20"
            viewBox="0 0 450 120" 
            fill="none"
          >
            <defs>
              <linearGradient id="waveGrad2" x1="0%" x2="100%">
                <stop offset="0%" stopColor="#E19D36" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#E19D36" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#E19D36" stopOpacity="0.1" />
              </linearGradient>
            </defs>

            <motion.path 
              d="M0 50 C150 110 300 -10 450 50"
              stroke="url(#waveGrad2)" 
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, delay: 1.2 }}
            />
          </motion.svg>

          {/* Outer border circle */}
          <motion.div 
            className="relative w-[480px] h-[480px] mx-auto rounded-full border-dotted border-[4px] border-[#96b4d5] flex items-center justify-center z-10"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Inner Circle */}
            <div className="w-[400px] h-[400px] rounded-full overflow-hidden relative">
              <Image 
                src="/images/herosectionimg.jpg"
                alt="Team Collaboration"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

        </div>

        {/* Floating Icons (Hidden on small devices) */}
        <motion.div 
          className="hidden lg:block absolute top-40 left-205 p-3.5 bg-white rounded-full shadow-lg"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FaUsers className="text-purple-500 w-6 h-6" />
        </motion.div>

        <motion.div 
          className="hidden lg:block absolute top-20 right-35 p-3.5 bg-white rounded-full shadow-lg"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <FaLightbulb className="text-yellow-400 w-6 h-6" />
        </motion.div>

        <motion.div 
          className="hidden lg:block absolute bottom-42 right-50 p-3.5 bg-white rounded-full shadow-lg"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <FaChartLine className="text-orange-500 w-6 h-6" />
        </motion.div>

      </div>

      {/* Blob Animation */}
      <style jsx>{`
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
      `}</style>
    </section>
  );
}
