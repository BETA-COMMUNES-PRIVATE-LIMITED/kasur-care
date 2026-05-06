import React from 'react'
import { MdOutlineSpatialTracking } from "react-icons/md";
import { FaCalendarAlt, FaUsers } from "react-icons/fa";

export const AppointmentItems = () => {
    return (
        <div className='space-y-12'>
            <div className='flex  space-y-4 gap-8 justify-between items-center p-12 bg-white/50 rounded-2xl shadow-2xl'>
                <h2 className='text-lg font-medium '>Total Patients  <span className='font-medium text-xl'><br /> <br />978</span></h2>
                <span className='text-5xl text-gray-700'><FaUsers /></span>

            </div>
            <div className='flex  space-y-4 gap-8 justify-between items-center p-12 bg-white/50 rounded-2xl shadow-2xl'>
                <h2 className='text-lg font-medium '>Patients Today  <span className='font-medium text-xl'><br /> <br />978</span></h2>
                <span className='text-5xl text-gray-700'><FaCalendarAlt /></span>
            </div>
            <div className='flex  space-y-4 gap-8 justify-between items-center p-12 bg-white/50 rounded-2xl shadow-2xl'>
                <h2 className='text-lg font-medium '>Appointment Today  <span className='font-medium text-xl'><br /> <br />978</span></h2>
                <span className='text-5xl text-gray-700'><MdOutlineSpatialTracking /></span>

            </div>
        </div>
    )
}
