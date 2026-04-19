import { FaEnvelope, FaPhoneAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import React from 'react'
import flag from '../../assets/flag.png';
import { RiPhoneFill } from "react-icons/ri";
import { MdOutgoingMail } from "react-icons/md";

const TopBar = () => {
  const contactInfo = [
    { icon: <MdOutgoingMail className='w-6 h-6 mt-1' />, text: 'info@example.com' },
    { icon: <RiPhoneFill className='w-6 h-6 mt-1' />, text: '+1 66589 14556' }
  ];

  const socialIcons = [
    { icon: <FaFacebookF size={20} /> },
    { icon: <FaTwitter size={20} /> },
    { icon: <FaInstagram size={20} /> },
    { icon: <FaLinkedinIn size={20} /> },
  ];

  return (
    <div className=' items-center py-2 px-6 md:px-12 lg:px-16 text-base gap-8 w-full flex justify-between bg-white border-b-2 border-gray-200 md:bg-transparent top-0 left-0 right-0'>
      {/* contact info */}
      <div className=' flex gap-x-6  bg-white items-center '>
        {contactInfo.map((item, index) => (
          <div key={index} className='flex gap-x-2 text-gray-700 text-lg font-medium'>
            {item.icon}
            <span>{item.text}</span>
          </div>
        ))}
      </div>
      {/* language dropdown and social media icons */}
      <div className="flex gap-x-4 text-xl font-sm ml-auto items-center ">
        <div className='flex gap-2 cursor-pointer text-gray-600'>
          <img src={flag} alt="Flag" className='w-6 h-6  mt-1 ' />
          <h1>ENG</h1>
        </div>
        {/* social media icons */}
        <div className='flex gap-x-3 text-xl font-sm ml-auto'>
          {socialIcons.map((item, index) => (
            <div key={index} className='w-10 h-10 rounded-full border border-gray-300 text-gray-500 hover:bg-blue-500 hover:text-white transition-colors duration-300 cursor-pointer flex items-center justify-center'>
              {item.icon}
            </div>
          ))}

        </div>
      </div>

    </div>

  )
}

export default TopBar