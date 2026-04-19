// import React from 'react'
// import Wrapper from '../components/shared/Wrapper'
// import { FaStar } from "react-icons/fa";
// import doc1 from '../assets/doc1.jpg'
// import doc2 from '../assets/doc2.jpg'
// import doc3 from '../assets/doc3.jpg'
// import doc4 from '../assets/doc4.svg'
// import { FaSearch, FaChevronDown } from "react-icons/fa";
// const Home = () => {
//   return (
//     <Wrapper>
//     <div>
//       <div>
//       {/* left side */}
//       <div className='inline-flex items-center bg-white/90 backdrop-blur-md rounded-full px-4 py-2 shadow-md gap-3'>
//          {/* Images */}
//       <div className="flex -space-x-2">
//         <img src={doc1} className="w-8 h-8 rounded-full border-2 border-white" />
//         <img src={doc2} className="w-8 h-8 rounded-full border-2 border-white" />
//         <img src={doc3} className="w-8 h-8 rounded-full border-2 border-white" />
//       </div>
//        {/* Text */}
//       <div>
//         <p className="text-sm font-semibold text-gray-800">
//           5K+ Appointments
//         </p>

//         <div className="flex items-center gap-1 text-yellow-400 text-xs">
//           <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
//           <span className="text-gray-600 ml-1">5.0 Ratings</span>
//         </div>
//       </div>
      
//       </div>
      
//         {/* text */}
//         <div>
//           <h1>Discover Health: Find Your Trusted img Doctors Today</h1>
//         </div>
//         {/* search */}
//          <div className="mt-8 w-full max-w-3xl bg-white rounded-full shadow-lg flex items-center overflow-hidden">

//       {/* Dropdown */}
//       <div className="flex items-center gap-2 px-4 text-gray-600 border-r cursor-pointer">
//         <span>Select Specialty</span>
//         <FaChevronDown className="text-xs" />
//       </div>

//       {/* Input */}
//       <input
//         type="text"
//         placeholder="Search for Medical Procedures, hospitals"
//         className="flex-1 px-4 py-3 outline-none text-gray-700"
//       />

//       {/* Button */}
//       <button className="bg-blue-500 text-white px-6 py-3 flex items-center gap-2 hover:bg-blue-600 transition">
//         <FaSearch />
//         Search
//       </button>

//     </div>
//         {/* right side */}
//         <div>
//             <img src={doc4} className="w-full max-w-sm rounded-lg shadow-lg" />
//         </div>
//       </div>
//     </div>
//     </Wrapper>
//   )
// }

// export default Home
import React from 'react'
import Wrapper from '../components/shared/Wrapper'
import { FaStar } from "react-icons/fa";
import doc1 from '../assets/doc1.jpg'
import doc2 from '../assets/doc2.jpg'
import doc3 from '../assets/doc3.jpg'
import doc4 from '../assets/doc4.svg'
import { FaSearch, FaChevronDown } from "react-icons/fa";
import { FaPhoneAlt, FaVideo } from "react-icons/fa";

const Home = () => {
  return (
   <div className='bg-linear-to-r from-blue-600 to-cyan-500 '>
    <Wrapper>
<div className='flex  md:space-y-0 md:flex-row items-center justify-between '>
  {/* left side */}
  <div className='flex-1'>
    {/* appointment button */}
    <div className="inline-flex items-center bg-white/90 backdrop-blur-md rounded-full px-4 py-2 shadow-md gap-3">
{/* Images */}
      <div className="flex -space-x-2">
        <img src={doc1} className="w-8 h-8 rounded-full border-2 border-white" />
        <img src={doc2} className="w-8 h-8 rounded-full border-2 border-white" />
        <img src={doc3} className="w-8 h-8 rounded-full border-2 border-white" />
      </div>

      {/* Text */}
      <div>
        <p className="text-sm font-semibold text-gray-800">
          5K+ Appointments
        </p>

        <div className="flex items-center gap-1 text-yellow-400 text-xs">
          <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          <span className="text-gray-600 ml-1">5.0 Ratings</span>
        </div>
      </div>
    </div>
    {/* heading */}
    <div>
       <h1 className="text-5xl font-bold mt-6 text-white  leading-tight">
        Discover Health: Find<br/> Your Trusted  <br/>Doctors Today
      </h1>
    </div>
    {/* search */}
    <div className="mt-8 w-full max-w-3xl bg-white rounded-full shadow-lg flex items-center overflow-hidden">
      {/* Dropdown */}
      <div className="flex items-center gap-2 px-4 text-gray-600 border-r cursor-pointer">
        <span>Select Specialty</span>
        <FaChevronDown className="text-xs" />
      </div>

      {/* Input */}
      <input
        type="text"
        placeholder="Search for Medical Procedures, hospitals"
        className="flex-1 px-4 py-3 outline-none text-gray-700"
      />

      {/* Button */}
      <button className="bg-blue-500 text-white px-6 py-3 flex items-center gap-2 hover:bg-blue-600 transition">
        <FaSearch />
        Search
      </button>


    </div>
  </div>
  {/* right side */}
   <div className="relative">

      {/* Doctor Image */}
      <img src={doc4} alt="doctor" className="w-100" />

      {/* Floating Buttons */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-lg flex items-center gap-4 px-6 py-3">

        {/* Video Button */}
        <button className="w-10 h-10 flex items-center justify-center rounded-full border text-gray-700 hover:bg-gray-100">
          <FaVideo />
        </button>

        {/* Call Button (center red) */}
        <button className="w-12 h-12 flex items-center justify-center rounded-full bg-red-500 text-white shadow-md hover:bg-red-600">
          <FaPhoneAlt />
        </button>

        {/* Message Button */}
        <button className="w-10 h-10 flex items-center justify-center rounded-full border text-gray-700 hover:bg-gray-100">
          💬
        </button>

      </div>

    </div>
</div>
    </Wrapper>
   </div>
  )
}

export default Home