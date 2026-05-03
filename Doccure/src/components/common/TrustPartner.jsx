import React from 'react'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from "motion/react"
import { BsFillHeartPulseFill } from "react-icons/bs";
import { GiBrokenHeartZone } from "react-icons/gi";
import { IoMdMedical } from "react-icons/io";
import { BiPlusMedical } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import { GiCrossedBones } from "react-icons/gi";
import { TbHexagonPlusFilled } from "react-icons/tb";


const TrustPartner = () => {
    const Partner = [
        {
            icon: GiBrokenHeartZone, title: 'Airway',
        },
        {
            icon: IoMdMedical, title: 'Medicure',
        },
        {
            icon: BiPlusMedical, title: 'ApexHealth',
        },
        {
            icon: FaPlus, title: 'CurePlus',
        },
        {
            icon: BsFillHeartPulseFill, title: 'PrimeLife',
        },
        {
            icon: GiCrossedBones, title: 'ClearSound',
        },
        {
            icon: TbHexagonPlusFilled, title: 'NovaCare',
        },
    ]
    return (
        <div className='bg-black rounded-b-3xl'>
            <div className='py-10 px-6  md:px-12 lg:px-30'>
                <div className='text-center item-center'>
                    <div className='text-white  tracking-wider text-lg font-semibold'>
                        <p>Trusted Partners with Doccure</p>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}

                    className="mt-10">
                    <Swiper
                        spaceBetween={20}
                        loop={true}
                        speed={800}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
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
                        {Partner.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <SwiperSlide key={index}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-center justify-center"
                                    >
                                        <div className="flex items-center gap-2 px-6 py-6 rounded-xl  transition-all duration-200 cursor-pointer group">

                                            <Icon className="text-blue-500 group-hover:text-blue-600 text-4xl transition" />

                                            <h1 className="text-white  text-lg font-semibold transition">
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
    )
}

export default TrustPartner