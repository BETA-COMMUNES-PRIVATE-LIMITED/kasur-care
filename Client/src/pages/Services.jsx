import React from 'react'
import Wrapper from '../components/shared/Wrapper'
import { FcReadingEbook } from "react-icons/fc";

const Services = () => {
  const services = [
    { icon: <FcReadingEbook size={40} className='bg-blue-400' />, title: 'Book Appoinment' },
    { icon: <FcReadingEbook size={40}  className='bg-blue-700'/>, title: 'Talk to Doctor' },
    { icon: <FcReadingEbook size={40}  className='bg-pink-500'/>, title: 'Hospitals & Clinics'},
    { icon: <FcReadingEbook size={40}  className='bg-blue-500'/>, title: 'Health Care'},
    { icon: <FcReadingEbook size={40}  className='bg-purple-700'/>, title: 'Medicine Delivery'},
    { icon: <FcReadingEbook size={40}  className='bg-orange-500'/>, title: 'Lab Testing'},
    { icon: <FcReadingEbook size={40}  className='bg-green-500'/>, title: 'Home Care'},
  ];
  return (
    <div>
      <Wrapper>
        <div className='bg-white/20 flex text-center justify-between items-center px-12 py-12 shadow-2xl'>
          {services.map((service, index) => (
            <div key={index} className=' text-center flex flex-col items-center gap-y-4'>
             
              {service.icon}
              
              <h3 className='text-lg font-semibold mt-6'>{service.title}</h3>
             
              
            </div>
          ))}

        </div>



      </Wrapper>
    </div>
  )
}

export default Services