import React from 'react'
import { FaStar } from "react-icons/fa";
import rating1 from '../../assets/rating1.webp'
import rating2 from '../../assets/rating2.webp'
import rating3 from '../../assets/rating3.webp'

const AppointmentButton = () => {
  return (
     <div className="inline-flex items-center   bg-white/90 backdrop-blur-md rounded-full px-5 md:py-1 lg:py-4 mt-4 shadow-md gap-3">
   {/* Images */}
         <div className="flex -space-x-4 cursor-pointer">
           <img src={rating1} className="w-8 h-8 rounded-full border-2 border-white" />
           <img src={rating2} className="w-8 h-8 rounded-full border-2 border-white" />
           <img src={rating3} className="w-8 h-8 rounded-full border-2 border-white" />
         </div>
   
         {/* Text */}
         <div>
           <p className="text-md font-semibold text-gray-800">
             5K+ Appointments
           </p>
   
           <div className="flex items-center gap-1 text-yellow-400 text-md">
             <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
             <span className="text-gray-600 ml-1 text-md">5.0 Ratings</span>
           </div>
         </div>
       </div>
  )
}

export default AppointmentButton