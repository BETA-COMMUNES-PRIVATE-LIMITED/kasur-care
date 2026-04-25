import React from 'react'
import Wrapper from '../components/shared/Wrapper'
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
        icon: IoMdMedical , title: 'Medicure',
      },
     {
        icon: BiPlusMedical , title: 'ApexHealth',
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
        icon: TbHexagonPlusFilled , title: 'NovaCare',
      },
    ]
  return (
    <div className='bg-black rounded-b-3xl'>
      <Wrapper>
        <div className='text-center item-center mt-6'>
          <div className='text-white  text-sm font-semibold'>
            <p>Trusted Partners with Doccure</p>
          </div>
        </div>
 <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}

          className="mt-10">
          <Swiper
            spaceBetween={5}
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
         {Partner.map((items, index) => (
          <SwiperSlide key={index}>
            
            {/* CARD */}
            <div className='text-center item-center'>
              <div className='flex gap-2 '>
                <items.icon size={30} className='text-blue-600'/>
                <h1 className='text-white text-lg font-semibold'>{items.title}</h1>
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

export default TrustPartner