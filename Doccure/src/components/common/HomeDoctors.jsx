import React from 'react'
import Button from './Button';
import { motion } from "motion/react";
import { Link } from 'react-router-dom';
import { DoctorData } from '../../pages/data/doctors';

import Text from './Text';
import Reason from './Reason';

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import {
  FaHeart,
  FaStar,
  FaMapMarkerAlt,
  FaRegClock,
  FaCalendarAlt
} from "react-icons/fa";

const HomeDoctors = () => {
  return (
    <div className='bg-gray-100 w-full overflow-hidden'>

      {/* Container */}
      <div className='py-10 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-30 mt-6'>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <Button> • Featured Doctors • </Button>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug">
            Our <span className="text-blue-500">Highlighted</span> Doctors
          </h1>
        </motion.div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-8"
        >

          <Swiper
            spaceBetween={16}
            loop={true}
            speed={800}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              320: { slidesPerView: 1 },
              480: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >

            {DoctorData.map((docs) => (
              <SwiperSlide key={docs.id}>

                {/* Card */}
                <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition w-full">

                  {/* Image */}
                  <div className="relative">
                    <img
                      src={docs.img}
                      className="w-full h-48 sm:h-52 md:h-60 object-cover"
                      alt="doctor"
                    />

                    {/* Rating */}
                    <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                      <FaStar /> {docs.rating}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5 space-y-2">

                    {/* Specialty */}
                    <div className="flex justify-between items-center">
                      <span className="text-sm sm:text-base text-blue-600 font-medium">
                        {docs.specialty}
                      </span>
                    </div>

                    {/* Name */}
                    <h3 className="text-base sm:text-lg font-semibold">
                      {docs.name}
                    </h3>

                    {/* Location */}
                    <p className="text-xs sm:text-sm text-gray-500 flex flex-wrap items-center gap-2">
                      <FaMapMarkerAlt /> {docs.location}
                      <FaRegClock /> {docs.time}
                    </p>

                    {/* Fee */}
                    <p className="text-orange-500 font-bold text-sm sm:text-base">
                      {docs.fee}
                    </p>

                    {/* Button */}
                    <Link to={`/doctors/${docs.id}`}>
                      <button className="w-full sm:w-auto mt-2 bg-black text-white px-4 py-2 rounded-full flex items-center justify-center gap-2 hover:bg-blue-600 transition text-sm sm:text-base">
                        View Profile <FaCalendarAlt />
                      </button>
                    </Link>

                  </div>
                </div>

              </SwiperSlide>
            ))}

          </Swiper>
        </motion.div>

      </div>

      {/* Bottom Sections */}
      <div className="mt-8">
        <Text />
      </div>

      <div className="bg-white">
        <Reason />
      </div>

    </div>
  )
}

export default HomeDoctors;