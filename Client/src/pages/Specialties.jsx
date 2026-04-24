import { FaBone, FaBrain, FaChild, FaUserMd } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import { motion } from "motion/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FaHeart } from "react-icons/fa";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.webp";
import img5 from "../assets/img5.webp";
import img6 from "../assets/img6.jpg";
import img7 from '../assets/img7.webp';
import Wrapper from '../components/shared/Wrapper'
import Button from '../components/shared/Button'



const specialties = [
  { img: img1, title: "Orthopedics", title2: '121 Doctors', icon: FaBone },
  { img: img2, title: "Neurology", title2: '151 Doctors', icon: FaBrain },
  { img: img3, title: "Pediatrics", title2: '130 Doctors', icon: FaChild },
  { img: img4, title: "Psychiatry", title2: '80 Doctors', icon: FaUserMd },
  { img: img5, title: "Cardiology", title2: '100 Doctors', icon: FaHeart },
  { img: img6, title: "Pulmonology", title2: '122 Doctors', icon: FaUserMd },
  { img: img7, title: "Urology", title2: '100 Doctors', icon: FaBrain },
];

const Specialties = () => {
  return (
    <div>
      <Wrapper>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}

          className="text-center items-center space-y-6">
          {/* button */}
          <div className=" mt-10">
            <Button> • Top Specialities • </Button>
          </div>
          {/* heading */}
          <div className="text-4xl font-semibold ">
            <h1>Highlighting the <span className="text-blue-500">Care & Support</span></h1>
          </div>

        </motion.div>                                                           
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}

          className="mt-10">
          <Swiper
            spaceBetween={25}
            navigation={true}
            loop={true}
            speed={2000}
            modules={[Navigation]}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1280: {
                slidesPerView: 6,
              },
            }}
          >
            {specialties.map((item, index) => (
              <SwiperSlide key={index}>


                {/* Image */}
                <div className="relative overflow-hidden group w-full cursor-pointer ">
                  <img
                    src={item.img}
                    alt="img"
                    className="w-full h-56 sm:h-60 md:h-64 object-cover rounded-3xl cursor-pointer"
                  />
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.4, ease: "linear" }}

                    className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md group-hover:bg-blue-500 transition">
                      <item.icon className="text-blue-500 group-hover:text-white text-xl sm:text-xl" />
                    </div>
                  </motion.div>

                </div>

                {/* Titles */}
                <div className="mt-3 text-center">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {item.title2}
                  </p>
                </div>

              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </Wrapper>
    </div>

  );
};

export default Specialties;