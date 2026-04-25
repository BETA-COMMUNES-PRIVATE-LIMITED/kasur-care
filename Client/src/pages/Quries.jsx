import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Wrapper from "../components/shared/Wrapper";
import Button from "../components/shared/Button";
import app from '../assets/app.png'
import app2 from '../assets/app2.svg'
import app3 from '../assets/app3.svg'

const accordionData = [
  {
    title: "How do I book an appointment with a doctor?",
    content: "Yes, simply visit our website and log in or create an account. Search for a doctor based on specialization, location, or availability & confirm your booking."
  },
  {
    title: "Can I request a specific doctor when booking my appointment?",
    content: "Yes, you can usually request a specific doctor when booking your appointment, though availability may vary based on their schedule."
  },
  {
    title: "What should I do if I need to cancel or reschedule my appointment?",
    content: "If you need to cancel or reschedule your appointment, contact the doctor as soon as possible to inform them and to reschedule for another available time slot."
  },
  {
    title: "What if I'm running late for my appointment?",
    content: "If you know you will be late, it's courteous to call the doctor's office and inform them. Depending on their policy and schedule, they may be able to accommodate you or reschedule your appointment."
  },
  {
    title: "Can I book appointments for family members or dependents?",
    content: "Yes, in many cases, you can book appointments for family members or dependents. However, you may need to provide their personal information and consent to do so."
  }
];

const Quries = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <Wrapper>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}

        >
          <div className="text-center space-y-6">
            <div className="mt-10">
              <Button> • FAQ'S • </Button>
            </div>

            <div className="text-4xl font-semibold ">
              <h1>
                Your Questions are <span className="text-blue-400">Answered</span>
              </h1>
            </div>
          </div>
          <div className="max-w-2xl mx-auto space-y-4 mt-8">
            {accordionData.map((item, index) => (
              <div key={index} className="shadow-lg border border-gray-200  rounded-xl overflow-hidden">

                {/* Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center  font-semibold p-4 cursor-pointer "
                >
                  <span>{item.title}</span>
                  <span className="font-semibold text-lg">{activeIndex === index ? "-" : "+"}</span>
                </button>

                {/* Content */}
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden bg-gray-100"
                    >
                      <div className="p-4 text-gray-700">
                        {item.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            ))}
          </div>

        </motion.div>
        {/* block */}
        <div className="p-6 md:p-8 rounded-2xl mt-12 bg-blue-400">
  <div className="flex flex-col md:flex-row items-center gap-8">

    {/* LEFT SIDE */}
    <div className="flex-1 text-center md:text-left">
      
      <div className="text-white">
        <p className="text-sm md:text-base">
          Working For Your Better Health.
        </p>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-2">
          Download the Doccure App Today!
        </h1>
      </div>

      {/* Store Buttons */}
      <div className="flex justify-center md:justify-start gap-4 mt-6 flex-wrap">
        <img src={app2} alt="app store" className="h-10 sm:h-12 object-contain" />
        <img src={app3} alt="play store" className="h-10 sm:h-12 object-contain" />
      </div>

    </div>

    {/* RIGHT SIDE */}
    <div className="flex-1 flex justify-center">
      <img
        src={app}
        alt="app preview"
        className="w-60 sm:w-72 md:w-80 lg:w-[400px] object-contain"
      />
    </div>

  </div>
</div>
      </Wrapper>
    </div>
  );
};

export default Quries;