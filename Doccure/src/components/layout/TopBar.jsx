import React, { useState } from 'react'
import { FaEnvelope, FaPhoneAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { RiPhoneFill } from "react-icons/ri";
import usa from '../../assets/usa.png';
import { MdOutgoingMail } from "react-icons/md";
import ara from '../../assets/ara.png'
import fra from '../../assets/fra.png'
import pak from '../../assets/pak.jpg'


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
    const flagDropdown = [
        { img: ara, alt: 'ara', title: 'ARA' },
        { img: fra, alt: 'fra', title: 'FRA' },
        { img: pak, alt: 'pak', title: 'PAK' },
        { img: usa, alt: 'usd', title: 'USD' },

    ]
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='hidden lg:flex items-center py-2 px-6 lg:px-30 text-base gap-8 w-full justify-between bg-white border-b-2 border-gray-200  top-0 left-0 right-0'>
            {/* contact info */}
            <div className=' flex gap-x-6  items-center '>
                {contactInfo.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <div key={index} className='flex gap-x-1 text-gray-500 text-md font-md'>
                            <Icon className='w-5 h-5 mt-1 text-gray-700' />
                            <span>{item.text}</span>
                        </div>
                    );
                })}
            </div>
            {/* language dropdown and social media icons */}
            <div className="flex gap-x-4 text-xl font-sm ml-auto items-center  ">
                <div className=' cursor-pointer text-gray-600 relative inline-block  border-r pr-1.5 border-gray-300'
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className='flex gap-1.5'>
                        <img src={usa} alt="USD" className='w-5 h-5  mt-1 rounded-full ' />
                        <h1 className='text-gray-500' >USD</h1>
                    </div>
                </div>
                {/* Dropdown */}
                {isOpen && (
                    <div className="absolute  mt-55 w-40 bg-white shadow-lg rounded">
                        {flagDropdown.map((lan, i) => (
                            <div key={i} className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer">
                                <img src={lan.img} alt={lan.alt} className="w-5 h-5 rounded-full" />
                                <h1 className='text-gray-500'>{lan.title}</h1>
                            </div>
                        ))}
                    </div>
                )}
                {/* social media icons */}
                <div className='flex gap-x-3 text-xl font-sm ml-auto'>
                    {socialIcons.map((Icon, index) => (
                        <div
                            key={index}
                            className='w-8 h-8 rounded-full border border-gray-300 text-gray-500 hover:bg-blue-500 hover:text-white transition-colors duration-300 cursor-pointer flex items-center justify-center'
                        >
                            <Icon size={15} />
                        </div>
                    ))}

                </div>
            </div>

        </div>
    )
}

export default TopBar