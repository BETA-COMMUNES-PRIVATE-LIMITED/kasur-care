import React from 'react'
import Wrapper from '../components/shared/Wrapper'
import { FaSearch, FaChevronDown } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { motion } from "motion/react"
import doc4 from '../assets/doc4.svg'
import { BsSignRailroadFill } from "react-icons/bs";
import { RiSearch2Line } from "react-icons/ri";
import AppointmentButton from '../components/shared/AppointmentButton'
import Button from '../components/shared/Button';

const Home = () => {
  return (
    <div className='bg-linear-to-b from-blue-600 to-cyan-500   '>
      <Wrapper>
        <div className='flex flex-col lg:flex-row items-center  text-center gap-10'>
          {/* left side */}


          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='flex-1 text-center items-center lg:text-left'>
            <AppointmentButton />
            {/* heading */}
            <div>
              <h1 className=" text-3xl sm:text-4xl lg:text-5xl font-bold mt-6 text-white  leading-tight">
                Discover Health: Find<br /> Your Trusted  <br />Doctors Today
              </h1>
            </div>
            {/* search */}
            <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl -ml-2 shadow-lg flex flex-col sm:flex-row items-stretch sm:items-center overflow-hidden mt-4">

              {/*  Dropdown */}
              <div className="flex items-center justify-between sm:justify-start gap-2 px-4 py-3 text-gray-600 border-b sm:border-b-0 sm:border-r cursor-pointer">
                <BsSignRailroadFill />
                <span className="text-sm sm:text-base">Select Specialty</span>
                <FaChevronDown className="text-xs" />
              </div>

              {/*  Input + Icon */}
              <div className="flex items-center flex-1 px-3">
                <RiSearch2Line className="text-gray-500 mr-2" size={18} />
                <input
                  type="text"
                  placeholder="Search for Medical Procedures, hospitals"
                  className="w-full py-3 sm:py-4 outline-none text-sm sm:text-base text-gray-700"
                />
              </div>

              {/*  Button */}
              <div className="p-2 sm:p-2">
                <Button>Search</Button>
              </div>

            </div>

          </motion.div>
          {/* right side */}

          <div className='relative'>
            <motion.img
              src={doc4}
              alt="img"
              className="w-100  rounded-lg"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
              }}
            />

            <div className="absolute bottom-30 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-lg flex items-center gap-4 px-6 py-3">
              <button className="w-10 h-10 flex cursor-pointer  items-center justify-center rounded-full border text-gray-700 hover:bg-gray-100">
                <HiOutlineVideoCamera size={20} />
              </button>
              <button className="w-12 h-12 flex items-center cursor-pointer justify-center rounded-full bg-red-500 text-white shadow-md hover:bg-red-600">
                <FaPhoneAlt size={15} />
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full border text-gray-700 hover:bg-gray-100">
                <MdOutlineKeyboardVoice size={20} />
              </button>
            </div>

          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default Home