// "use client";

// import Image from "next/image";
// import heroimg from "../assets/Team Collaboration.png";
// import { motion } from "framer-motion";
// import { FaUsers, FaStar } from "react-icons/fa6";

// export default function HeroSection() {
//   const raysCount = 12; // Number of floating rays
//   const rays = [...Array(raysCount)];

//   return (
//     <section className="w-full bg-white pt-28 pb-32 relative overflow-hidden">

//       {/* Background shapes */}
//       <div className="absolute -right-10 -top-10 w-[600px] h-[600px] bg-purple-300/20 rounded-full blur-3xl"></div>
//       <div className="absolute right-20 top-40 w-[400px] h-[400px] bg-orange-300/20 rounded-full blur-2xl"></div>

//       <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-10">

//         {/* Left Text */}
//         <div className="max-w-xl space-y-4">
//           <p className="uppercase tracking-wider text-sm font-semibold text-blue-600">
//             We’re your talent partner
//           </p>

//           <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
//             WELCOME TO <span className="text-orange-500">TALENDOR</span>
//           </h1>

//           <p className="text-lg text-gray-700 mt-2">
//             Door to all your Talent Needs
//           </p>

//           <p className="mt-4 text-gray-600 leading-relaxed">
//             At Talendor, we don’t just connect businesses with talent; we create lasting partnerships
//             that drive growth, innovation, and excellence. With a passion for people and performance,
//             we transform HR solutions into strategic business advantages.
//           </p>

//           <div className="flex gap-4 mt-6">
//             <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition transform hover:scale-105">
//               Explore Our Expertise
//             </button>

//             <button className="px-6 py-3 border border-gray-400 rounded-full font-medium hover:bg-gray-100 transition transform hover:scale-105">
//               Contact Us
//             </button>
//           </div>
//         </div>

//         {/* Image Section */}
//         <div className="relative w-full md:w-auto flex justify-center items-center">

//           {/* Particle-like floating rays */}
//           {rays.map((_, i) => {
//             const angle = i * (360 / raysCount);
//             const distance = 250 + Math.random() * 100; // distance from center
//             const floatX = Math.random() * 20 - 10; // random X float
//             const floatY = Math.random() * 20 - 10; // random Y float

//             return (
//               <motion.div
//                 key={i}
//                 className="absolute bg-white w-[2px] h-[60px] rounded"
//                 style={{
//                   top: '50%',
//                   left: '50%',
//                   transformOrigin: 'center bottom',
//                   rotate: `${angle}deg`,
//                   translateX: `${distance}px`,
//                   opacity: 0.3,
//                 }}
//                 animate={{
//                   translateX: [distance + floatX, distance - floatX],
//                   translateY: [floatY, -floatY],
//                   opacity: [0.2, 0.5, 0.2],
//                 }}
//                 transition={{
//                   duration: 4 + Math.random() * 3,
//                   repeat: Infinity,
//                   repeatType: 'mirror',
//                   delay: i * 0.2,
//                 }}
//               />
//             );
//           })}

//           {/* Hero Image */}
//           <motion.div
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="relative rounded-3xl overflow-hidden shadow-2xl w-[450px] h-[450px] md:w-[550px] md:h-[550px] lg:w-[650px] lg:h-[650px]"
//           >
//             <Image
//               src={heroimg}
//               alt="heroimage"
//               width={800}
//               height={800}
//               className="object-cover"
//             />
//           </motion.div>

//           {/* Floating icons */}
//           <motion.div
//             initial={{ y: -20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
//             className="absolute top-6 right-8 bg-white p-3 rounded-full shadow-lg hover:scale-110 transition"
//           >
//             <FaUsers className="text-blue-600 text-2xl" />
//           </motion.div>

//           <motion.div
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
//             className="absolute bottom-8 left-3 bg-white p-3 rounded-full shadow-lg hover:scale-110 transition"
//           >
//             <FaStar className="text-orange-500 text-2xl" />
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import heroImg from "../assets/Team Collaboration.png"; // replace with your image path
import { FaUsers, FaLightbulb, FaChartLine } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="w-full h-[750px] relative overflow-hidden mt-15 pt-10 pb-20 bg-gradient-to-b from-white to-gray-50">
      
      {/* Floating background blobs */}
      <motion.div 
        className="absolute -top-2 -right-22 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply opacity-30 filter blur-3xl animate-blob"
      />
      <motion.div 
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply opacity-30 filter blur-3xl animate-blob animation-delay-2000"
      />

      <div className="container mx-auto px-20 pt-0 flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* Text Section */}
        <div className="flex-1 mt-[-50px]">
          <p className="text-sm text-gray-500 mb-2">HR EXCELLENCE REDEFINED</p>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            WELCOME TO <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-800 to-orange-400 bg-clip-text text-transparent">
            TALENDOR
            </h1>
 
          </h1>
          <h2 className="text-lg text-gray-600 mb-6">Door to all your Talent Needs</h2>
          <p className="text-gray-500 mb-8">
            At Talendor, we don’t just connect businesses with talent; we create lasting partnerships 
            that drive growth, innovation, and excellence. With a passion for people and performance, 
            we transform HR solutions into strategic business advantages.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-purple-900 text-white rounded-lg hover:bg-purple-800 transition">
              Explore Our Expertise
            </button>
            <button className="px-6 py-3 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition">
              Contact Us
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 relative">
          <motion.div 
            className="relative w-[700px] h-[700px] mx-auto overflow-hidden"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Image 
              src={heroImg}
              alt="Team Collaboration"
              fill
              className="object-cover"
              
            />
          </motion.div>

          {/* Floating Icons */}
          <motion.div 
            className="absolute top-30 left-30 p-3 bg-white rounded-full shadow-lg"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
          >
            <FaUsers className="text-purple-500 w-6 h-6" />
          </motion.div>

          <motion.div 
            className="absolute top-20 right-20 p-3 bg-white rounded-full shadow-lg"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, repeatType: "mirror" }}
          >
            <FaLightbulb className="text-yellow-400 w-6 h-6" />
          </motion.div>

          <motion.div 
            className="absolute bottom-40 right-50 p-3 bg-white rounded-full shadow-lg"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
          >
            <FaChartLine className="text-orange-500 w-6 h-6" />
          </motion.div>
        </div>
      </div>

      {/* Tailwind Blob Animation */}
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
