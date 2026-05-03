import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import { FiPlus, FiMinus } from "react-icons/fi";

import app1 from  '../../assets/app1.svg';
import app2 from  '../../assets/app2.svg';
import app3 from  '../../assets/app3.webp';

const accordionData = [
  {
    title: "How do I book an appointment with a doctor?",
    content:
      "Simply visit our website and log in or create an account. Search for a doctor based on specialization, location, or availability and confirm your booking.",
  },
  {
    title: "Can I request a specific doctor when booking my appointment?",
    content:
      "Yes, you can request a specific doctor when booking your appointment, though availability may vary based on their schedule.",
  },
  {
    title: "What should I do if I need to cancel or reschedule?",
    content:
      "Contact the doctor as soon as possible to inform them and reschedule for another available time slot.",
  },
  {
    title: "What if I'm running late for my appointment?",
    content:
      "Call the doctor's office to inform them. Depending on their schedule, they may accommodate or reschedule your appointment.",
  },
  {
    title: "Can I book appointments for family members?",
    content:
      "Yes, you can book for family members, but you may need to provide their details and consent.",
  },
];

const Quries = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <div className="py-10 px-6  md:px-12 lg:px-40">
        {/* 🔹 Heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <div className="mt-10">
            <Button>• FAQs •</Button>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            Your Questions are{" "}
            <span className="text-blue-400">Answered</span>
          </h1>
        </motion.div>

        {/* 🔹 Accordion */}
        <div className="max-w-2xl mx-auto space-y-6 mt-10">
          {accordionData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
            >
              {/* Header */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center px-8 py-4 text-gray-700 text-md font-medium text-left hover:bg-gray-50 transition"
              >
                <span>{item.title}</span>
                <span className="text-lg font-medium cursor-pointer">
                  {activeIndex === index ? <FiMinus /> : <FiPlus />}
                </span>
              </button>

              {/* Content */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gray-100"
                  >
                    <div className="p-4 text-gray-700 text-sm sm:text-base">
                      {item.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* 🔹 App Download Section */}
        <div className="p-6 md:p-8 rounded-2xl mt-16 bg-blue-500">
          <div className="flex flex-col md:flex-row items-center gap-8">
            
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="flex-1 text-center md:text-left text-white"
            >
              <p className="text-sm sm:text-base font-medium">
                Working For Your Better Health
              </p>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-2">
                Download the Doccure App <br/> Today!
              </h1>

              {/* Store Buttons */}
              <div className="flex justify-center md:justify-start gap-4 mt-8 flex-wrap">
                <img
                  src={app1}
                  alt="App Store"
                  className="h-10 sm:h-12 object-contain cursor-pointer hover:scale-105 transition"
                />
                <img
                  src={app2}
                  alt="Play Store"
                  className="h-10 sm:h-12 object-contain cursor-pointer hover:scale-105 transition"
                />
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="flex-1 flex justify-center"
            >
              <img
                src={app3}
                alt="App Preview"
                className="w-60 sm:w-72 md:w-80 lg:w-150 object-contain"
              />
            </motion.div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Quries;