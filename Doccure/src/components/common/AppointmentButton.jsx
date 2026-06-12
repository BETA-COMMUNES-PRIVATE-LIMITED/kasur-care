import React from "react";
import { FaStar } from "react-icons/fa";

import rating1 from "../../assets/rating1.webp";
import rating2 from "../../assets/rating2.webp";
import rating3 from "../../assets/rating3.webp";

const AppointmentButton = () => {
  return (
    <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/90 backdrop-blur-md rounded-full px-3 sm:px-5 py-2 sm:py-3 shadow-md w-fit">
      
      {/* AVATARS */}
      <div className="flex -space-x-3 sm:-space-x-4">
        <img
          src={rating1}
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white"
          alt="user1"
        />
        <img
          src={rating2}
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white"
          alt="user2"
        />
        <img
          src={rating3}
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white"
          alt="user3"
        />
      </div>

      {/* TEXT */}
      <div className="leading-tight">
        <p className="text-xs sm:text-sm md:text-md font-semibold text-gray-800">
          5K+ Appointments
        </p>

        <div className="flex items-center gap-1 text-yellow-400 text-xs sm:text-sm md:text-md">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />

          <span className="text-gray-600 ml-1">
            5.0 Ratings
          </span>
        </div>
      </div>
    </div>
  );
};

export default AppointmentButton;