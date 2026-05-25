// import React from 'react'

// import Button from './Button';
// import { motion } from "motion/react";
// import doc01 from '../../assets/doc01.webp'
// import doc02 from '../../assets/doc02.jpg';
// import doc03 from '../../assets/doc03.webp';
// import doc04 from '../../assets/doc04.jpg'
// import doc05 from '../../assets/doc05.jpg'
// import { Link } from 'react-router-dom';
// import { DoctorData } from '../../pages/data/doctors';
// import Text from './Text';
// import Reason from './Reason';
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import { FaHeart, FaStar, FaMapMarkerAlt, FaRegClock, FaCalendarAlt } from "react-icons/fa";

// const HomeDoctors = () => {
//   const DoctorData = [
//     {
//       img: doc01, specialty: 'Psycologist', name: 'Dr Nicholas Tello', location: "Winona, MS",
//       time: "30 Min", fee: '$300', rating: 4.8,
//     },
//     {
//       img: doc02, specialty: 'Pediatration', name: 'Dr.Micheal Brown', location: "Beckley, WV",
//       time: "30 Min", fee: '$500', rating: 4.8,
//     },
//     {
//       img: doc03, specialty: 'Cardiology', name: 'Dr.Harold Baryalnt', location: "Hamshire, TX",
//       time: "30 Min",
//       fee: "$600",
//       rating: 4.2,
//     },
//     {
//       img: doc04, specialty: 'Neurologist', name: 'Dr.Shandra Jones', location: "Minneapolis, MN",
//       time: "30 Min",
//       fee: "$650",
//       rating: 5.0,
//     },
//     {
//       img: doc05, specialty: 'Psycologist', name: 'Dr.Charles Scott', location: "Minneapolis, MN",
//       time: "30 Min",
//       fee: "$650",
//       rating: 5.0,
//     }
//   ]
//   return (
//     <div className='bg-gray-100'>
//       <div className='py-10 px-6  md:px-12 lg:px-30 mt-8'>
//         <motion.div
//           initial={{ opacity: 0, y: 100 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9 }}
//           viewport={{ once: true }}

//           className="text-center items-center space-y-6">
//           {/* button */}
//           <div className=" mt-10">
//             <Button> • Featured Doctors • </Button>
//           </div>
//           {/* heading */}
//           <div className="text-4xl font-semibold ">
//             <h1>Our <span className="text-blue-500"> Highlighted</span> Doctor</h1>
//           </div>

//         </motion.div>
//         {/* slider of doctors */}
//         <motion.div
//           initial={{ opacity: 0, y: 100 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9 }}
//           viewport={{ once: true }}

//           className="mt-10">
//           <Swiper
//             spaceBetween={20}
//             loop={true}
//             speed={800}
//             autoplay={{
//               delay: 2500,
//               disableOnInteraction: false,
//             }}
//             modules={[Autoplay]}
//             breakpoints={{
//               320: {
//                 slidesPerView: 1,
//               },
//               640: {
//                 slidesPerView: 2,
//               },
//               768: {
//                 slidesPerView: 2,
//               },
//               1024: {
//                 slidesPerView: 3,
//               },
//               1280: {
//                 slidesPerView: 4,
//               },
//             }}
//           >
//             {DoctorData.map((doc) => (
//               <SwiperSlide key={doc.id}>
//                 <motion.div
//                   initial={{ opacity: 0, y: 40 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                 >

//                   {/* CARD */}
//                   <div className="bg-white rounded-2xl shadow-md overflow-hidden relative group  cursor-pointer">

//                     {/* Image */}
//                     <div className="relative">
//                       <img
//                         src={doc.img}
//                         className="w-full h-60 object-cover"
//                         alt=""
//                       />

//                       {/* Rating */}
//                       <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
//                         <FaStar /> {doc.rating}
//                       </div>

//                       {/* Heart */}
//                       <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow">
//                         <FaHeart className="text-gray-400 hover:text-red-500 cursor-pointer" />
//                       </div>
//                     </div>

//                     {/* Content */}
//                     <div className="p-4">

//                       {/* Specialty + Availability */}
//                       <div className="flex justify-between items-center mb-2">
//                         <span className="text-sm text-blue-600 font-medium border-l-2 border-blue-600 pl-2">
//                           {doc.specialty}
//                         </span>

//                         <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
//                           ● Available
//                         </span>
//                       </div>

//                       {/* Name */}
//                       <h3 className="text-lg font-semibold">{doc.name}</h3>

//                       {/* Location + Time */}
//                       <p className="text-sm text-gray-500 flex items-center gap-2 mt-1">
//                         <FaMapMarkerAlt /> {doc.location} • <FaRegClock /> {doc.time}
//                       </p>

//                       {/* Fee */}
//                       <div className="flex justify-between items-center mt-4">
//                         <div>
//                           <p className="text-sm text-gray-500">Consultation Fees</p>
//                           <p className="text-lg font-bold text-orange-500">{doc.fee}</p>
//                         </div>

//                         {/* Button */}
//                         {/* BUTTON */}
//                     <Link to={`/doctors/${doc.id}`}>
//                       <button className="bg-black text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-blue-600">
//                         View Profile <FaCalendarAlt />
//                       </button>
//                     </Link>
//                       </div>

//                     </div>
//                   </div>
//                 </motion.div>
//               </SwiperSlide>
//             ))}

//           </Swiper>
//         </motion.div>
//       </div>
//       {/* text */}
//       <div className='mt-8'>
//         <Text/>
//       </div>
//       {/* reason */}
//       <div className='bg-white'>
//         <Reason/>
//       </div>

//     </div>
//   )
// }

// export default HomeDoctors
import React from 'react'
import Button from './Button';
import { motion } from "motion/react";
import { Link } from 'react-router-dom';
import { DoctorData, doctors } from '../../pages/data/doctors';

import Text from './Text';
import Reason from './Reason';

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import { FaHeart, FaStar, FaMapMarkerAlt, FaRegClock, FaCalendarAlt } from "react-icons/fa";

const HomeDoctors = () => {
  return (
   <div className='bg-gray-100'>
       <div className='py-10 px-6  md:px-12 lg:px-30 mt-8'>

        {/* Heading */}
      
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

        {/* Slider */}
        <motion.div
           initial={{ opacity: 0, y: 100 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.9 }}
           viewport={{ once: true }}

          className="mt-10">
        
          <Swiper
           spaceBetween={20}
             loop={true}
             speed={800}
             autoplay={{
               delay: 2500,
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
            {DoctorData.map((docs) => (
              <SwiperSlide key={docs.id}>
                
                <div className="bg-white rounded-2xl shadow-md overflow-hidden">

                  <img
                    src={docs.img}
                    className="w-full h-60 object-cover"
                  />

                  <div className="p-4 space-y-2">

                    <div className="flex justify-between">
                      <span className="text-blue-600 font-medium">
                        {docs.specialty}
                      </span>

                      <span className="text-orange-500 flex items-center gap-1">
                        <FaStar /> {docs.rating}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold">
                      {docs.name}
                    </h3>

                    <p className="text-gray-500 flex items-center gap-2">
                      <FaMapMarkerAlt /> {docs.location} • <FaRegClock /> {docs.time}
                    </p>

                    <p className="font-bold text-orange-500">
                      {docs.fee}
                    </p>

                    {/* BUTTON */}
                    <Link to={`/doctors/${docs.id}`}>
                      <button className="bg-black text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-blue-600">
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

      <Text />
      <Reason />
    </div>
  )
}

export default HomeDoctors;