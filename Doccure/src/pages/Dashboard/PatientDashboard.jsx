import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import PatientSidebar from '../../components/dashboard/PatientSidebar';
import HealthRecords from '../../components/dashboard/HealthRecords';
import BookAppointments from '../../components/dashboard/BookAppointments';
import Appoints from '../../components/dashboard/Appoints';
import Analytics from '../../components/dashboard/Analytics';
import Notification from '../../components/dashboard/Notification';
import Upcoming from '../../components/dashboard/Upcoming';
import Reports from '../../components/dashboard/Reports';

const PatientDashboard = () => {
  return (
    <div>
        {/* 🔵 Top Header */}
      <div className='bg-blue-100 py-10'>
        <div className='flex gap-2 justify-center items-center'>
          <Link to={'/'}>
            <span className='text-blue-400 text-2xl'><FaHome /></span>
          </Link>
          <span className='text-2xl text-gray-600'><RiArrowRightDoubleLine /></span>
          <h2 className='text-gray-600 font-medium'>Patients</h2>
          <span className='text-2xl text-gray-600'><RiArrowRightDoubleLine /></span>
          <h2 className='text-gray-600 font-medium'>Dashboard</h2>
        </div>

        <div className='text-center mt-4'>
          <h1 className='text-3xl font-semibold'>Dashboard</h1>
        </div>
      </div>
      {/* patientssidebar */}

<div className='py-10 px-4 md:px-8 xl:px-20 2xl:px-32'>

  <div className="flex flex-col xl:flex-row gap-6">

    {/* 🧑‍⚕️ Sidebar */}
    <div className="w-full xl:w-70 shrink-0">
      <PatientSidebar />
    </div>

    {/* 👉 Right Side */}
    <div className="flex-1 flex flex-col gap-6">

      {/* 🔝 Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* ✅ Health Records Bigger */}
        <div className="lg:col-span-2">
          <HealthRecords />
        </div>

        {/* ✅ Book Appointment Smaller */}
        <div className="lg:col-span-1">
          <BookAppointments />
        </div>

      </div>

      {/* 🔽 Middle Section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <Appoints />
        <Analytics />
      </div>

      {/* 🔻 Bottom Section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <Notification />
        <Upcoming />
      </div>

      {/* 📄 Reports */}
      <div className="w-full">
        <Reports />
      </div>

    </div>

  </div>

</div>
    </div>
  )
}

export default PatientDashboard;