import React, { useState } from "react";
import { Plus, Minus, Smile } from "lucide-react";
import { motion } from "motion/react";

const faqData = [
  {
    question: "How do I book an appointment?",
    answer:
      "Visit our website, search doctor, and book appointment easily in few clicks.",
  },
  {
    question: "Can I make an Appointment Online?",
    answer:
      "Yes, you can easily make appointments online through our platform.",
  },
  {
    question: "Is my personal information secure?",
    answer:
      "Your data is protected with advanced encryption and security systems.",
  },
  {
    question: "Can I cancel or reschedule my appointment?",
    answer:
      "Yes, you can cancel or reschedule anytime from your dashboard.",
  },
  {
    question: "How do I find a specific doctor?",
    answer:
      "Use search filters like specialty, location, or availability.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-14 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-blue-600 font-semibold mb-2">
            Get Your Answer
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0b1c39]">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative w-full"
          >
            {/* Image */}
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://img.freepik.com/free-photo/female-doctor-with-patient-clinic_23-2148827779.jpg"
                alt="faq"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-105 object-cover"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute left-1/2 -bottom-4 -translate-x-1/2 bg-white shadow-xl rounded-2xl px-5 sm:px-8 py-3 sm:py-4 flex items-center gap-3 sm:gap-4 w-[90%] sm:w-auto">

              <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-yellow-100 flex items-center justify-center">
                <Smile size={26} className="text-yellow-500" />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0b1c39]">
                  95k+
                </h3>
                <p className="text-gray-500 text-sm sm:text-base">
                  Happy Patients
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-5"
          >
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden shadow-sm"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-4 sm:px-6 py-4 sm:py-5 text-left"
                >
                  <span className="font-semibold text-[#0b1c39] text-sm sm:text-lg pr-3">
                    {faq.question}
                  </span>

                  <div className="w-8 sm:w-9 h-8 sm:h-9 bg-blue-600 text-white flex items-center justify-center rounded-md shrink-0">
                    {openIndex === index ? (
                      <Minus size={18} />
                    ) : (
                      <Plus size={18} />
                    )}
                  </div>
                </button>

                {/* Answer */}
                {openIndex === index && (
                  <div className="px-4 sm:px-6 pb-5 text-gray-600 text-sm sm:text-base leading-6 sm:leading-7">
                    <div className="border-t pt-4 border-gray-200">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </div>
  );
}