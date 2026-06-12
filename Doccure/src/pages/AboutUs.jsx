import React from "react";
import { FaPhoneAlt, FaHome } from "react-icons/fa";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

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

      {/* HERO */}
      <div className="bg-blue-100 py-8 sm:py-10 px-4">
        <div className="flex flex-wrap gap-2 justify-center items-center text-center">

          <Link to="/">
            <FaHome className="text-blue-500 text-xl sm:text-2xl" />
          </Link>

          <RiArrowRightDoubleLine className="text-gray-500 text-lg sm:text-2xl" />

          <h2 className="text-gray-600 font-medium text-sm sm:text-base">
            About Us
          </h2>
        </div>

        <h1 className="text-center mt-3 text-2xl sm:text-3xl font-semibold">
          About Us
        </h1>
      </div>

      {/* MAIN SECTION */}
      <div className="py-10 sm:py-14 px-4 sm:px-6 lg:px-10 xl:px-20 2xl:px-32">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* LEFT IMAGES */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-3 sm:gap-5"
          >

            {/* LEFT COLUMN */}
            <div className="flex flex-col gap-3 sm:gap-5">

              <img
                src={doc01}
                className="rounded-xl sm:rounded-2xl w-full h-40 sm:h-64 lg:h-80 object-cover"
                alt=""
              />

              <img
                src={doc02}
                className="rounded-xl sm:rounded-2xl w-full h-28 sm:h-40 lg:h-48 object-cover"
                alt=""
              />

            </div>

            {/* RIGHT COLUMN */}
            <div className="flex flex-col gap-3 sm:gap-5 pt-4 sm:pt-8">

              <div className="bg-blue-600 rounded-xl sm:rounded-2xl h-24 sm:h-36 flex items-center justify-center text-center p-3 sm:p-6">

                <h2 className="text-white text-sm sm:text-xl lg:text-2xl font-bold leading-snug">
                  Over 25+ Years <br /> Experience
                </h2>

              </div>

              <img
                src={doc03}
                className="rounded-xl sm:rounded-2xl w-full h-40 sm:h-60 lg:h-72 object-cover"
                alt=""
              />

            </div>

          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <p className="text-blue-500 font-medium text-sm sm:text-base">
              About Our Company
            </p>

            <h2 className="text-xl sm:text-3xl lg:text-4xl font-semibold leading-snug text-gray-900 mt-2 mb-5">
              We Are Always Ensure Best Medical Treatment For Your Health
            </h2>

            <p className="text-gray-500 text-sm sm:text-base leading-6 sm:leading-8 mb-4">
              At Doccure, we simplify healthcare by connecting you with qualified doctors easily and quickly.
            </p>

            <p className="text-gray-500 text-sm sm:text-base leading-6 sm:leading-8 mb-6">
              We aim to make healthcare accessible for everyone — from checkups to emergency care.
            </p>

            {/* CONTACT */}
            <div className="flex items-center gap-3 sm:gap-4">

              <div className="bg-blue-600 text-white p-3 sm:p-4 rounded-full">
                <FaPhoneAlt size={16} />
              </div>

              <div>
                <p className="text-gray-500 text-xs sm:text-sm">
                  Need Emergency?
                </p>

                <h3 className="text-lg sm:text-2xl font-bold text-gray-900">
                  +1 315 369 5943
                </h3>
              </div>

            </div>

          </motion.div>

        </div>

      </div>

      {/* SECTIONS */}
      <div className="space-y-10 sm:space-y-14">

        <ChooseUs />
        <BestDoctors />
        <Testimon />
        <FAQSection />

      </div>

    </div>
  );
};

export default AboutUs;