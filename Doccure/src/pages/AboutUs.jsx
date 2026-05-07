import React from "react";
import {
  FaPhoneAlt,
} from "react-icons/fa";
import { Link } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { motion } from "motion/react"

import doc01 from "../assets/doc01.webp";
import doc02 from "../assets/doc02.jpg";
import doc03 from "../assets/doc03.webp";
import ChooseUs from "../components/common/ChooseUs";
import BestDoctors from "../components/common/BestDoctors";
import FAQSection from "../components/common/FAQSection";
import Testimon from "../components/common/Testimon";

const AboutUs = () => {
  return (
    <div className="bg-[#f9fbff] min-h-screen">

      {/* 🔹 Hero Section */}
      <div className='bg-blue-100 py-10'>
        <div className='flex gap-2 justify-center items-center'>
          <Link to={'/'}>
            <span className='text-blue-400 text-2xl'><FaHome /></span>
          </Link>
          <span className='text-2xl text-gray-600'><RiArrowRightDoubleLine /></span>
          <h2 className='text-gray-600 font-medium'>About Us</h2>

        </div>

        <div className='text-center mt-4'>
          <h1 className='text-3xl font-semibold'>About Us</h1>
        </div>
      </div>

      {/* 🔹 About Section */}
      <div className="py-14 px-4 md:px-8 xl:px-20 2xl:px-32">

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE IMAGES */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-5"
          >

            {/* Left Column */}
            <div className="flex flex-col gap-5">

              <img
                src={doc01}
                alt="doctor"
                className="rounded-2xl object-cover h-80 w-full"
              />

              <img
                src={doc02}
                alt="doctor"
                className="rounded-2xl object-cover h-42.5 w-full"
              />

            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-5 pt-8">

              {/* Experience Card */}
              <div className="bg-blue-600 rounded-2xl h-35 flex items-center justify-center text-center p-6">

                <h2 className="text-white text-2xl font-bold leading-relaxed">
                  Over 25+ Years <br />
                  Experience
                </h2>

              </div>

              <img
                src={doc03}
                alt="doctor"
                className="rounded-2xl object-cover h-70 w-full"
              />

            </div>

          </motion.div>

          {/* RIGHT SIDE CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}

          >

            <p className="text-blue-500 font-medium mb-2">
              About Our Company
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold  leading-tight text-gray-900 mb-6">

              We Are Always Ensure Best Medical Treatment For Your Health

            </h2>

            <p className="text-gray-500 text-md leading-8 mb-5">

              At Doccure, we understand the importance of accessible and
              convenient healthcare. Our mission is to simplify the process
              of finding and booking appointments with qualified healthcare
              professionals, ensuring that you receive the care you need
              when you need it.

            </p>

            <p className="text-gray-500 leading-8 mb-8">

              We envision a world where healthcare is easily accessible
              to everyone. Whether you're seeking routine check-ups,
              specialized consultations, or emergency care, we strive to
              connect you with the right medical professionals effortlessly.

            </p>

            {/* Emergency */}
            <div className="flex items-center gap-4">

              <div className="bg-blue-600 text-white p-4 rounded-full">
                <FaPhoneAlt />
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Need Emergency?
                </p>

                <h3 className="text-2xl font-bold text-gray-900">
                  +1 315 369 5943
                </h3>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
      <div>
        <ChooseUs />
      </div>
      <div>
        <BestDoctors />
      </div>
      <div>
        <Testimon />
      </div>
      <div>
        <FAQSection />
      </div>
    </div>
  );
};

export default AboutUs;