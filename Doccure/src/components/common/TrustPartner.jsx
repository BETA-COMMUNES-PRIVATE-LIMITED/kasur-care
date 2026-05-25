import React from "react";

// Swiper
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Motion
import { motion } from "motion/react";

// Icons
import {
  BsFillHeartPulseFill,
} from "react-icons/bs";
import { GiBrokenHeartZone, GiCrossedBones } from "react-icons/gi";
import { IoMdMedical } from "react-icons/io";
import { BiPlusMedical } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import { TbHexagonPlusFilled } from "react-icons/tb";

const TrustPartner = () => {
  const Partner = [
    { icon: GiBrokenHeartZone, title: "Airway" },
    { icon: IoMdMedical, title: "Medicure" },
    { icon: BiPlusMedical, title: "ApexHealth" },
    { icon: FaPlus, title: "CurePlus" },
    { icon: BsFillHeartPulseFill, title: "PrimeLife" },
    { icon: GiCrossedBones, title: "ClearSound" },
    { icon: TbHexagonPlusFilled, title: "NovaCare" },
  ];

  return (
    <div className="bg-black rounded-b-3xl">
      <div className="py-8 sm:py-10 md:py-14 px-4 sm:px-6 md:px-12 lg:px-30">

        {/* Heading */}
        <div className="text-center">
          <p className="text-white tracking-wider text-sm sm:text-base md:text-lg font-semibold">
            Trusted Partners with Doccure
          </p>
        </div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-10"
        >
          <Swiper
            spaceBetween={20}
            loop={true}
            speed={900}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              320: { slidesPerView: 1 },
              480: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
          >
            {Partner.map((item, index) => {
              const Icon = item.icon;

              return (
                <SwiperSlide key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex justify-center"
                  >
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 px-4 sm:px-6 py-4 sm:py-6 rounded-xl cursor-pointer group">

                      {/* Icon */}
                      <Icon className="text-blue-500 group-hover:text-blue-600 text-3xl sm:text-4xl transition" />

                      {/* Title */}
                      <h1 className="text-white text-sm sm:text-base md:text-lg font-semibold text-center sm:text-left">
                        {item.title}
                      </h1>

                    </div>
                  </motion.div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>
      </div>
    </div>
  );
};

export default TrustPartner;