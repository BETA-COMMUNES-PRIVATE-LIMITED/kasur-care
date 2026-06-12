import React from "react";
import { motion } from "motion/react";
import { BsSignRailroadFill } from "react-icons/bs";
import { RiSearch2Line } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";
import hero from "../../assets/hero.svg";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import AppointmentButton from "./AppointmentButton";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="bg-linear-to-b from-blue-600 to-cyan-500">
      <div className="px-4 sm:px-6 md:px-12 lg:px-24 py-10">
        
        <div className="flex flex-col lg:flex-row items-center gap-10">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 text-center lg:text-left w-full"
          >
            <AppointmentButton />

            {/* Heading */}
            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mt-6 leading-snug">
              Discover Health: Find <br className="hidden sm:block" />
              Your Trusted Doctors Today
            </h1>

            {/* SEARCH BOX */}
            <div className="w-full max-w-2xl mx-auto lg:mx-0 mt-6 bg-white rounded-2xl shadow-lg flex flex-col sm:flex-row overflow-hidden">

              {/* Dropdown */}
              <div className="flex items-center justify-between gap-2 px-4 py-3 border-b sm:border-b-0 sm:border-r border-gray-200 text-gray-600 cursor-pointer">
                <BsSignRailroadFill />
                <span className="text-sm">Specialty</span>
                <FaChevronDown className="text-xs" />
              </div>

              {/* Input */}
              <div className="flex items-center flex-1 px-3">
                <RiSearch2Line className="text-gray-500 mr-2" size={18} />
                <input
                  type="text"
                  placeholder="Search doctors, hospitals..."
                  className="w-full py-4 outline-none text-sm"
                />
              </div>

              {/* Button */}
              <div className="p-2 mt-1.5 sm:p-0">
                <Button variant="search">Search</Button>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative w-full flex justify-center"
          >
            <img
              src={hero}
              alt="hero"
              className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl"
            />

            {/* FLOATING CONTROLS */}
            <div className="absolute bottom-4 sm:bottom-10 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-lg flex items-center gap-2 sm:gap-4 px-3 sm:px-6 py-2 sm:py-3">

              <button className="w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center rounded-full border hover:bg-gray-100">
                <HiOutlineVideoCamera size={18} />
              </button>

              <button className="w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600">
                <FaPhoneAlt size={14} />
              </button>

              <button className="w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center rounded-full border hover:bg-gray-100">
                <MdOutlineKeyboardVoice size={18} />
              </button>

            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Hero;