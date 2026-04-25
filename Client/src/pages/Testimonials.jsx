import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import doc7 from '../assets/doc7.jpg';
import doc8 from '../assets/doc8.jpg';
import doc4 from '../assets/doc4.svg'
import Wrapper from "../components/shared/Wrapper";


const testimonials = [
  {
    title: "Nice Treatment",
    text: "I had a wonderful experience. The staff was friendly and attentive, and the doctor explained everything clearly.",
    name: "Deny Hendrawan",
    location: "United States",
    img: doc7,
  },
  {
    title: "Nice Support",
    text: "My experience was excellent. The staff was polite and attentive, and explained every step clearly.",
    name: "Brooks Steave",
    location: "Dallas, CA",
    img: doc8,
  },
  {
    title: "Excellent Service",
    text: "I had a wonderful experience. The staff was friendly and attentive and explained everything clearly.",
    name: "Sofia Doe",
    location: "Los Boston, USA",
    img: doc4,
  },
];

const stats = [
  { num: "500+", label: "Doctors Available" },
  { num: "18+", label: "Specialities" },
  { num: "30K", label: "Bookings Done" },
  { num: "97+", label: "Hospitals & Clinic" },
  { num: "317+", label: "Lab Tests Available" },
];

const TestimonialSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-gray-100 py-16 px-4">
      <Wrapper>

      {/* Header */}
      <div className="text-center mb-12">
        <button className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm mb-4">
          Testimonials
        </button>

        <h2 className="text-2xl md:text-4xl font-bold">
          15k Users <span className="text-blue-600">Trust Doccure</span> Worldwide
        </h2>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer ">
        {testimonials.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-white rounded-xl p-6 shadow-md space-y-4 group hover:bg-blue-800 group"
          >
            {/* Stars */}
            <div className="flex text-yellow-400">
              {Array(5).fill().map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-gray-500 text-sm font-semibold">{item.text}</p>

            {/* User */}
            <div className="flex items-center gap-3 pt-3">
              <img
                src={item.img}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-sm font-semibold">{item.name}</p>
                <p className="text-xs text-gray-400">{item.location}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-16 text-center">
        {stats.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="space-y-2"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-black">
              {item.num}
            </h1>
            <p className="text-sm text-gray-500  ">{item.label}</p>
          </motion.div>
        ))}
      </div>
      
</Wrapper>
    </div>
  );
};

export default TestimonialSection;