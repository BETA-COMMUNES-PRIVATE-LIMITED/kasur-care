import React from "react";
import { MapPin, Star } from "lucide-react";
import { motion } from "motion/react"

const doctors = [
  {
    id: 1,
    name: "Dr. Ruby Perrin",
    specialty: "Cardiology",
    price: "$200",
    rating: "4.5",
    reviews: "35",
    location: "Newyork, USA",
    status: "Available",
    image:
      "https://img.freepik.com/free-photo/female-doctor-hospital_23-2148827776.jpg",
  },
  {
    id: 2,
    name: "Dr. Darren Elder",
    specialty: "Neurology",
    price: "$360",
    rating: "4.0",
    reviews: "20",
    location: "Florida, USA",
    status: "Available",
    image:
      "https://img.freepik.com/free-photo/doctor-with-folder-stethoscope_23-2147822717.jpg",
  },
  {
    id: 3,
    name: "Dr. Sofia Brient",
    specialty: "Urology",
    price: "$450",
    rating: "4.5",
    reviews: "30",
    location: "Georgia, USA",
    status: "Unavailable",
    image:
      "https://img.freepik.com/free-photo/portrait-doctor_144627-39390.jpg",
  },
  {
    id: 4,
    name: "Dr. Paul Richard",
    specialty: "Orthopedic",
    price: "$570",
    rating: "4.3",
    reviews: "45",
    location: "Michigan, USA",
    status: "Available",
    image:
      "https://img.freepik.com/free-photo/young-doctor-supporting-his-patient_1098-2237.jpg",
  },
];

export default function BestDoctors() {
  return (
    <div className="bg-white min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-5xl md:text-4xl font-semibold">
            Best Doctors
          </h2>
        </div>

        {/* Doctors Grid */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}


          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition duration-300"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-65 object-cover"
                />

                {/* Price */}
                <div className="absolute top-4 right-4 bg-white text-[#0b1c39] font-semibold text-sm px-4 py-2 rounded-xl shadow">
                  {doctor.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">

                {/* Name + Rating */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-[22px] font-bold text-[#0b1c39]">
                      {doctor.name}
                    </h3>

                    <p className="text-gray-500 text-sm mt-1">
                      {doctor.specialty}
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="bg-yellow-400 flex items-center gap-1 px-2 py-1 rounded-md text-xs font-semibold">
                    <Star size={12} fill="white" color="white" />
                    {doctor.rating}
                    <span className="text-[10px] text-gray-700">
                      ({doctor.reviews})
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 my-5"></div>

                {/* Bottom */}
                <div className="flex items-center justify-between">

                  {/* Location */}
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <MapPin size={15} />
                    {doctor.location}
                  </div>

                  {/* Status */}
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-medium ${doctor.status === "Available"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-500"
                      }`}
                  >
                    {doctor.status}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}