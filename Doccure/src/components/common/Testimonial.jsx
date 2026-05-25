import React from "react";
import { motion } from "motion/react";
import { FaStar } from "react-icons/fa";
import p1 from '../../assets/p1.webp';
import p2 from '../../assets/p2.webp';
import p3 from '../../assets/p3.webp';
import Button from "./Button";

const testimonials = [
  {
    title: "Nice Treatment",
    text: "I had a wonderful experience. The staff was friendly and attentive, and the doctor explained everything clearly.",
    name: "Deny Hendrawan",
    location: "United States",
    img: p1,
  },
  {
    title: "Nice Support",
    text: "My experience was excellent. The staff was polite and attentive and explained every step clearly.",
    name: "Brooks Steave",
    location: "Dallas, CA",
    img: p2,
  },
  {
    title: "Excellent Service",
    text: "I had a wonderful experience. The staff was friendly and attentive and explained everything clearly.",
    name: "Sofia Doe",
    location: "Los Boston, USA",
    img: p3,
  },
];

const stats = [
  { num: "500+", label: "Doctors Available" },
  { num: "18+", label: "Specialities" },
  { num: "30K", label: "Bookings Done" },
  { num: "97+", label: "Hospitals & Clinics" },
  { num: "317+", label: "Lab Tests Available" },
];

const Testimonial = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-gray-100 w-full overflow-hidden py-14">

      <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-30">

        {/* Header */}
        <div className="text-center mb-10 space-y-4">

          <Button> • Featured Testimonials • </Button>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug">
            15k Users <span className="text-blue-600">Trust Doccure</span> Worldwide
          </h2>

        </div>

        {/* TESTIMONIAL CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-5 sm:p-6 shadow-md space-y-4 
                         hover:bg-blue-800 hover:text-white transition duration-300"
            >

              {/* Stars */}
              <div className="flex text-yellow-400">
                {Array(5).fill().map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg sm:text-xl">
                {item.title}
              </h3>

              {/* Text */}
              <p className="text-sm sm:text-base text-gray-500 group-hover:text-white">
                {item.text}
              </p>

              {/* User */}
              <div className="flex items-center gap-3 pt-3">

                <img
                  src={item.img}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                  alt="user"
                />

                <div>
                  <p className="font-semibold text-sm sm:text-base">
                    {item.name}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400">
                    {item.location}
                  </p>
                </div>

              </div>

            </motion.div>
          ))}

        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mt-14 text-center">

          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="space-y-2"
            >

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
                {item.num}
              </h1>

              <p className="text-xs sm:text-sm text-gray-500 font-medium">
                {item.label}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Testimonial;