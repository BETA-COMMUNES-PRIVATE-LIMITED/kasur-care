import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { AiTwotoneSchedule } from "react-icons/ai";
import { RiSearchEyeFill } from "react-icons/ri";
import { FaMarsDouble } from "react-icons/fa6";
import Button from "./Button";
import about01 from '../../assets/about01.webp'
import about02 from '../../assets/about02.webp'
import about03 from '../../assets/about03.webp'
import { AnimatePresence } from "framer-motion";
import { motion } from "motion/react";

const accordionData = [
  {
    title: "Our Vision",
    content: "We envision a community where everyone has access to high-quality healthcare and the resources they need to lead healthy lives."
  },
  {
    title: "Our Mission",
    content: "We aim to provide accessible and affordable healthcare services with compassion and excellence."
  },
  {
    title: "Our Plan",
    content: "We continuously improve our healthcare system through innovation, technology, and patient-centered care."
  }
];

const Cards = [
  { icon: RiSearchEyeFill, heading: 'Search Doctors', para: 'Find doctors by specialization or availability.', num: '01' },
  { icon: CgProfile, heading: 'Check Profile', para: 'View doctor experience and reviews easily.', num: '02' },
  { icon: AiTwotoneSchedule, heading: 'Book Appointment', para: 'Schedule your visit in just a few clicks.', num: '03' },
  { icon: FaMarsDouble, heading: 'Get Solution', para: 'Receive personalized medical advice.', num: '04' },
];

const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-black w-full overflow-hidden">

      <div className="py-10 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-30">

        {/* GRID SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* LEFT IMAGES */}
          <div className="space-y-4">

            <img
              src={about01}
              className="w-full h-60 sm:h-72 md:h-80 lg:h-auto rounded-2xl object-cover"
              alt=""
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <img
                src={about02}
                className="w-full h-52 sm:h-60 rounded-2xl object-cover"
                alt=""
              />
              <img
                src={about03}
                className="w-full h-52 sm:h-60 rounded-2xl object-cover"
                alt=""
              />
            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-6">

            <Button> • About Us • </Button>

            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug">
              We are committed to understanding your{" "}
              <span className="text-blue-500">unique needs</span> and delivering care.
            </h1>

            <p className="text-gray-300 text-sm sm:text-base md:text-lg">
              We are a trusted healthcare provider committed to improving health and wellness in our community.
            </p>

            {/* ACCORDION */}
            <div className="space-y-4">

              {accordionData.map((item, index) => (
                <div key={index} className="rounded-xl overflow-hidden border border-gray-700">

                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex justify-between items-center p-4 bg-blue-600 text-white text-sm sm:text-base"
                  >
                    {item.title}
                    <span className="text-xl">
                      {activeIndex === index ? "-" : "+"}
                    </span>
                  </button>

                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white"
                      >
                        <div className="p-4 text-gray-700 text-sm sm:text-base">
                          {item.content}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              ))}

            </div>

          </div>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

          {Cards.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="text-center space-y-3 p-6 rounded-xl text-white hover:scale-105 transition"
              >

                <div className="h-12 w-12 mx-auto flex items-center justify-center rounded-full bg-blue-100 text-blue-500">
                  <Icon size={22} />
                </div>

                <h2 className="text-lg sm:text-xl font-semibold">
                  {item.heading}
                </h2>

                <p className="text-sm sm:text-base text-gray-300">
                  {item.para}
                </p>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-600 opacity-40">
                  {item.num}
                </h1>

              </div>
            );
          })}

        </div>

      </div>
    </div>
  );
};

export default About;