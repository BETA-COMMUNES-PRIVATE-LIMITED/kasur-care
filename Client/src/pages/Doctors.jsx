import React from 'react'
import Wrapper from '../components/shared/Wrapper'
import Button from '../components/shared/Button'
import { motion } from "motion/react"
import doc5 from '../assets/doc5.jpg';
import doc6 from '../assets/doc6.jpg';
import doc7 from '../assets/doc7.jpg';
import doc8 from '../assets/doc8.jpg'
import doc9 from '../assets/doc9.jpg';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaHeart,FaStar ,FaMapMarkerAlt,FaRegClock,FaCalendarAlt  } from "react-icons/fa";

const Doctors = () => {
  const DoctorData = [
    {
      img: doc9, specialty: 'Psycologist', name: 'Dr Nicholas Tello', location: "Winona, MS",
      time: "30 Min", fee: '$300', rating: 4.8,
    },
    {
      img: doc5, specialty: 'Pediatration', name: 'Dr.Micheal Brown', location: "Beckley, WV",
      time: "30 Min", fee: '$500', rating: 4.8,
    },
    {
      img: doc6, specialty: 'Cardiology', name: 'Dr.Harold Baryalnt', location: "Hamshire, TX",
      time: "30 Min",
      fee: "$600",
      rating: 4.2,
    },
    {
      img: doc7, specialty: 'Neurologist', name: 'Dr.Shandra Jones', location: "Minneapolis, MN",
      time: "30 Min",
      fee: "$650",
      rating: 5.0,
    },
    {
      img: doc8, specialty: 'Psycologist', name: 'Dr.Charles Scott', location: "Minneapolis, MN",
      time: "30 Min",
      fee: "$650",
      rating: 5.0,
    }
  ]
  return (
    <div className='bg-gray-100'>
      <Wrapper>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}

          className="text-center items-center space-y-6">
          {/* button */}
          <div className=" mt-10">
            <Button> • Featured Doctors • </Button>
          </div>
          {/* heading */}
          <div className="text-4xl font-semibold ">
            <h1>Our <span className="text-blue-500"> Highlighted</span> Doctor</h1>
          </div>

        </motion.div>
        {/* slider of doctors */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}

          className="mt-10">
          <Swiper
            spaceBetween={25}
            navigation={false}
            loop={true}
            speed={3000}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay]}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
          >
         {DoctorData.map((doc, index) => (
          <SwiperSlide key={index}>
            
            {/* CARD */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden relative group  cursor-pointer">

              {/* Image */}
              <div className="relative">
                <img
                  src={doc.img}
                  className="w-full h-60 object-cover"
                  alt=""
                />

                {/* Rating */}
                <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                  <FaStar /> {doc.rating}
                </div>

                {/* Heart */}
                <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow">
                  <FaHeart className="text-gray-400 hover:text-red-500 cursor-pointer" />
                </div>
              </div>

              {/* Content */}
              <div className="p-4">

                {/* Specialty + Availability */}
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-blue-600 font-medium border-l-2 border-blue-600 pl-2">
                    {doc.specialty}
                  </span>

                  <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                    ● Available
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-lg font-semibold">{doc.name}</h3>

                {/* Location + Time */}
                <p className="text-sm text-gray-500 flex items-center gap-2 mt-1">
                  <FaMapMarkerAlt /> {doc.location} • <FaRegClock /> {doc.time}
                </p>

                {/* Fee */}
                <div className="flex justify-between items-center mt-4">
                  <div>
                    <p className="text-sm text-gray-500">Consultation Fees</p>
                    <p className="text-lg font-bold text-orange-500">{doc.fee}</p>
                  </div>

                  {/* Button */}
                  <button className="bg-black text-white p-3 rounded-full hover:bg-blue-600 transition">
                    <FaCalendarAlt />
                  </button>
                </div>

              </div>
            </div>

          </SwiperSlide>
        ))}

          </Swiper>
        </motion.div>
      </Wrapper>
      
    </div>
  )
}

export default Doctors