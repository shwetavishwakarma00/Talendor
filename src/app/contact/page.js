

"use client";

import { FiInstagram } from "react-icons/fi";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import  axios  from "axios";
import { useState , useEffect } from "react";

export default function ContactUs() {
  const [form , setForm ] =useState({
    name:"",
    email:"",
    message:""
  })

  const handleChange = (e) =>{
      setForm({...form , [e.target.name]:e.target.value})
     
  }

  const handleSubmit = async (e) => {
  e.preventDefault();
   try {
    const res = await axios.post("/api/send-mail", form);
    if(res.data.success) alert("Mail sent!");
    else alert("Failed to send");
  } catch (err) {
    console.error(err);
    alert("Something went wrong");
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-8 md:py-12 lg:py-16">
      <div className="w-full max-w-6xl bg-[#fcfcfc] rounded-3xl text-black flex flex-col md:flex-row md:items-stretch gap-8 md:gap-0">

        {/* Left side content */}
        <div className="w-full md:w-1/2 px-4 sm:px-8 py-15 md:py-12 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
              Let’s talk
              <br />
              on something{" "}
              <span className="bg-gradient-to-r from-purple-800 to-orange-400 bg-clip-text text-transparent">
                great
              </span>
              <br />
              together
            </h1>

            {/* Contact info */}
            <div className="mt-8 space-y-4 text-sm sm:text-base">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-[#5454AB]">
                  ✉️
                </span>
                <span className="break-all">info@talendor.in</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-[#5454AB]">
                  📞
                </span>
                <span>+91 9818711851</span>
              </div>
            </div>
          </div>

          {/* Social icons */}
          <div className="mt-8 sm:mt-10 flex items-center gap-4">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-md text-[#5454AB] border border-[#5454AB] flex items-center justify-center hover:bg-[#5454AB] hover:text-white transition">
              <FiInstagram />
            </div>
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-md text-[#5454AB] border border-[#5454AB] flex items-center justify-center hover:bg-[#5454AB] hover:text-white transition">
              <FaTwitter />
            </div>
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-md text-[#5454AB] border border-[#5454AB] flex items-center justify-center hover:bg-[#5454AB] hover:text-white transition">
              <FaLinkedin />
            </div>
          </div>
        </div>

        {/* Right side form */}
        <div className="w-full md:w-1/2 bg-white text-gray-900 rounded-3xl md:rounded-l-none p-6 sm:p-8 lg:p-10 shadow-xl">
          <form  onSubmit={handleSubmit} className="space-y-4">

            <div>
              <label className="block mb-1 text-xs sm:text-sm font-medium text-gray-600">
                Your name
              </label>
              <input
                onChange={handleChange}
                name="name"
                type="text"
                placeholder="Name"
                className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-[#5454AB] text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="block mb-1 text-xs sm:text-sm font-medium text-gray-600">
                Your email
              </label>
              <input
                name="email"
                onChange={handleChange}
                type="email"
                placeholder="email@gmail.com"
                className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-[#5454AB] text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="block mb-1 text-xs sm:text-sm font-medium text-gray-600">
                Your message
              </label>
              <textarea
                name="message"
                onChange={handleChange}
                rows={4}
                placeholder="Write your message"
                className="w-full border border-gray-200 rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-[#5454AB] text-sm sm:text-base"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#5454AB] text-white py-3 rounded-2xl font-semibold
              border border-[#5454AB]
              hover:bg-purple-50 hover:text-black
              transition text-sm sm:text-base"
            >
              Send message
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}
