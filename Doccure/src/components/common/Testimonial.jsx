import React from "react";
import { motion } from "motion/react"
import { FaStar } from "react-icons/fa";
import p1 from '../../assets/p1.webp';
import p2 from '../../assets/p2.webp';
import p3 from '../../assets/p3.webp'
import Button from "./Button";



const testimonials = [
  {
    title: "Nice Treatment",
    text: "I had a wonderful experience. The staff was friendly and attentive, and the doctor explained everything clearly.",
    name: "Deny Hendrawan",
    location: "United States",
    img:p1 ,
  },
  {
    title: "Nice Support",
    text: "My experience was excellent. The staff was polite and attentive, and explained every step clearly.",
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
  { num: "97+", label: "Hospitals & Clinic" },
  { num: "317+", label: "Lab Tests Available" },
];

const Testimonial = () => {
  return (
    <div className="bg-linear-to-r from-blue-50 to-gray-100 py-16 px-4">
      <div className="py-10 px-6  md:px-12 lg:px-30 ">

      {/* Header */}
      <div className="text-center mb-12 space-y-10">
        {/* button */}
          <div className=" ">
            <Button> • Featured Doctors • </Button>
          </div>

        <h2 className=" text-4xl font-semibold">
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
            className="bg-white rounded-xl p-6 shadow-md space-y-6 group hover:bg-blue-800 group"
          >
            {/* Stars */}
            <div className="flex text-yellow-400">
              {Array(5).fill().map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-gray-500 text-md font-semibold">{item.text}</p>

            {/* User */}
            <div className="flex items-center gap-3 pt-3">
              <img
                src={item.img}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-sm">{item.name}</p>
                <p className="text-sm font-medium text-gray-400">{item.location}</p>
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
            <h1 className="text-3xl md:text-5xl font-bold text-black">
              {item.num}
            </h1>
            <p className="text-sm text-gray-500 font-medium  ">{item.label}</p>
          </motion.div>
        ))}
      </div>
      
</div>
    </div>
  );
};

export default Testimonial;