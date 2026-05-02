import { FaEnvelope, FaPhoneAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import React from 'react'
import flag from '../../assets/flag.png';
import { RiPhoneFill } from "react-icons/ri";
import { MdOutgoingMail } from "react-icons/md";

const TopBar = () => {
  const contactInfo = [
    { icon: MdOutgoingMail, text: 'info@example.com' },
    { icon: RiPhoneFill, text: '+1 66589 14556' }
  ];

  const socialIcons = [
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn
  ];

  return (
    <div className=' items-center py-2 px-6 md:px-12 lg:px-16 text-base gap-8 w-full flex justify-between bg-white border-b-2 border-gray-200 md:bg-transparent top-0 left-0 right-0'>
      {/* contact info */}
      <div className=' flex gap-x-6  items-center '>
        {contactInfo.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className='flex gap-x-2 text-gray-700 text-lg font-medium'>
              <Icon className='w-6 h-6 mt-1' />
              <span>{item.text}</span>
            </div>
          );
        })}
      </div>
      {/* language dropdown and social media icons */}
      <div className="flex gap-x-4 text-xl font-sm ml-auto items-center ">
        <div className='flex gap-2 cursor-pointer text-gray-600'>
          <img src={flag} alt="Flag" className='w-6 h-6  mt-1 ' />
          <h1>ENG</h1>
        </div>
        {/* social media icons */}
        <div className='flex gap-x-3 text-xl font-sm ml-auto'>
          {socialIcons.map((Icon, index) => (
            <div
              key={index}
              className='w-10 h-10 rounded-full border border-gray-300 text-gray-500 hover:bg-blue-500 hover:text-white transition-colors duration-300 cursor-pointer flex items-center justify-center'
            >
              <Icon size={20} />
            </div>
          ))}

        </div>
      </div>

    </div>

  )
}

export default TopBar