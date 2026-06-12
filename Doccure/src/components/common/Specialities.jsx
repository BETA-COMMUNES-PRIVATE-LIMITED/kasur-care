import { FaBone, FaBrain, FaChild, FaUserMd, FaHeart } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Button from "./Button";
import { motion } from "motion/react";

import "swiper/css";
import "swiper/css/navigation";

import speciality01 from "../../assets/speciality01.webp";
import speciality02 from "../../assets/speciality02.webp";
import speciality03 from "../../assets/speciality03.jpg";
import speciality04 from "../../assets/speciality04.webp";
import speciality05 from "../../assets/speciality05.webp";
import speciality06 from "../../assets/speciality06.webp";
import speciality07 from "../../assets/speciality07.webp";

const specialties = [
  { img: speciality01, title: "Orthopedics", title2: "121 Doctors", icon: FaBone },
  { img: speciality02, title: "Neurology", title2: "151 Doctors", icon: FaBrain },
  { img: speciality03, title: "Pediatrics", title2: "130 Doctors", icon: FaChild },
  { img: speciality04, title: "Psychiatry", title2: "80 Doctors", icon: FaUserMd },
  { img: speciality05, title: "Cardiology", title2: "100 Doctors", icon: FaHeart },
  { img: speciality06, title: "Pulmonology", title2: "122 Doctors", icon: FaUserMd },
  { img: speciality07, title: "Urology", title2: "100 Doctors", icon: FaBrain },
];

const Specialties = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-24">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center space-y-5"
      >
        <Button>Top Specialities</Button>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          Highlighting the{" "}
          <span className="text-blue-500">Care & Support</span>
        </h1>
      </motion.div>

      {/* SWIPER */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="mt-10"
      >
        <Swiper
          spaceBetween={20}
          navigation
          loop
          speed={1000}
          modules={[Navigation]}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            480: { slidesPerView: 2 },
            640: { slidesPerView: 2.5 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
        >
          {specialties.map((item, index) => {
            const Icon = item.icon;

            return (
              <SwiperSlide key={index}>
                <div className="px-2">

                  {/* IMAGE CARD */}
                  <div className="relative group overflow-hidden rounded-3xl cursor-pointer">

                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-52 sm:h-56 md:h-60 object-cover rounded-3xl transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* ICON OVERLAY */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="w-12 sm:w-14 h-12 sm:h-14 bg-white rounded-full flex items-center justify-center shadow-md group-hover:bg-blue-500 transition">
                        <Icon className="text-blue-500 group-hover:text-white text-xl" />
                      </div>
                    </motion.div>

                  </div>

                  {/* TEXT */}
                  <div className="mt-3 text-center">
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500">
                      {item.title2}
                    </p>
                  </div>

                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
    </div>
  );
};

export default Specialties;