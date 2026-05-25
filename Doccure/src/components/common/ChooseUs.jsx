import React from "react";
import { motion } from "motion/react";
import {
  UserRound,
  Clock3,
  Microscope,
  MessageCircle,
} from "lucide-react";
import two from "../../assets/two.png";

const services = [
  {
    icon: <UserRound size={30} />,
    title: "Qualified Staff of Doctors",
    desc: "Our platform exclusively partners with highly qualified doctors who bring expertise & commitment to delivering top-notch healthcare.",
  },
  {
    icon: <Clock3 size={30} />,
    title: "24 Hours Service",
    desc: "Experience healthcare access anytime. Book appointments 24/7 easily.",
  },
  {
    icon: <Microscope size={30} />,
    title: "Quality Lab Services",
    desc: "Accredited labs ensure accurate and reliable medical testing services.",
  },
  {
    icon: <MessageCircle size={30} />,
    title: "Free Consultations",
    desc: "Start with free consultation and connect with trusted doctors easily.",
  },
];

const ChooseUs = () => {
  return (
    <div className="bg-[#f5f7fb] py-14 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center pb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            Why Choose Us
          </h1>
        </div>

        {/* Cards */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition"
            >
              <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white mb-5">
                {item.icon}
              </div>

              <h3 className="text-lg sm:text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm leading-6">
                {item.desc}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Bottom Banner */}
        <div className="mt-14 bg-blue-600 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">

            {/* Text */}
            <div className="p-6 sm:p-10 lg:p-16 text-white">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug mb-5">
                Be on Your Way to Feeling Better with Doccure
              </h2>

              <p className="text-blue-100 text-sm sm:text-base leading-7 mb-6">
                We prioritize your health journey with personalized and accessible services
                so you can feel better faster.
              </p>

              <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
                Contact With Us
              </button>
            </div>

            {/* Image */}
            <div className="relative flex justify-center items-center p-6">

              {/* Background Circle */}
              <div className="absolute w-60 sm:w-80 lg:w-96 h-60 sm:h-80 lg:h-96 bg-blue-400 rounded-full opacity-30"></div>

              {/* Dots */}
              <div className="absolute top-6 left-6 grid grid-cols-5 gap-2 opacity-70">
                {[...Array(20)].map((_, i) => (
                  <span key={i} className="w-2 h-2 bg-white rounded-full"></span>
                ))}
              </div>

              {/* Image */}
              <img
                src={two}
                alt="doctor"
                className="relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-md object-contain"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ChooseUs;