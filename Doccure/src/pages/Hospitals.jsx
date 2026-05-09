import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { RiArrowRightDoubleLine } from "react-icons/ri";

const Hospitals = () => {
  return (
    <div>

       {/* 🔹 Hero Section */}
       <div className='bg-blue-100 py-10'>
        <div className='flex gap-2 justify-center items-center'>
          <Link to={'/'}>
            <span className='text-blue-400 text-2xl'><FaHome /></span>
          </Link>
          <span className='text-2xl text-gray-600'><RiArrowRightDoubleLine /></span>
          <h2 className='text-gray-600 font-medium'>Hospitals</h2>
        
        </div>

        <div className='text-center mt-4'>
          <h1 className='text-3xl font-semibold'><H></H></h1>
        </div>
      </div>
    </div>
  )
}

export default Hospitals