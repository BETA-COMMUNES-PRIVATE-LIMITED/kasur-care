import React, { useState } from "react";
import { Plus, Minus, Smile } from "lucide-react";

const faqData = [
  {
    question: "How do I book an appointment?",
    answer:
      "Yes, simply visit our website and log in or create an account. Search for a doctor based on specialization, location, or availability & confirm your booking.",
  },
  {
    question:
      "Can i make an Appointment Online with White Plains Hospital Kendi?",
    answer:
      "Yes, you can easily make appointments online through our platform.",
  },
  {
    question: "Is my personal information secure?",
    answer:
      "Your personal information is protected with advanced security measures.",
  },
  {
    question: "Can I cancel or reschedule my appointment?",
    answer:
      "Yes, appointments can be cancelled or rescheduled anytime.",
  },
  {
    question: "How do I find a specific doctor or specialist?",
    answer:
      "Use our doctor search feature to find specialists easily.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold mb-2">
            Get Your Answer
          </p>

          <h2 className=" text-[#0b1c39] text-3xl md:text-4xl font-semibold">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Image Section */}
          <div className="relative">
            
            {/* Border Boxes */}
            <div className="absolute -top-6.25 left-8 w-full h-full border border-gray-200"></div>
            <div className="absolute -top-3 left-4 w-full h-full border border-gray-200"></div>

            {/* Image */}
            <div className="relative z-10 overflow-hidden">
              <img
                src="https://img.freepik.com/free-photo/female-doctor-with-patient-clinic_23-2148827779.jpg"
                alt="faq"
                className="w-full h-130 object-cover"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-7.5 left-1/2 -translate-x-1/2 bg-white shadow-xl rounded-2xl px-8 py-4 flex items-center gap-4 z-20">
              
              <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center">
                <Smile size={32} className="text-yellow-500" />
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#0b1c39]">
                  95k+
                </h3>

                <p className="text-gray-500 font-medium">
                  Happy Patients
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="space-y-5">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white shadow-lg border border-gray-200 rounded-xl overflow-hidden"
              >
                
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-semibold text-[#0b1c39] text-lg">
                    {faq.question}
                  </span>

                  <div className="w-9 h-9 rounded-md bg-blue-600 text-white flex items-center justify-center">
                    {openIndex === index ? (
                      <Minus size={18} className="cursor-pointer" />
                    ) : (
                      <Plus size={18} className="cursor-pointer" />
                    )}
                  </div>
                </button>

                {/* Answer */}
                {openIndex === index && (
                  <div className="px-6 pb-6 text-gray-600 leading-8">
                    <div className="border-t border-gray-300 pt-5">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}