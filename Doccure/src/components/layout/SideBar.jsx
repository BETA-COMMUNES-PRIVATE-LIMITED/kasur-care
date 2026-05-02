import React from 'react'
import logo from '../../assets/logo.svg'
import side1 from '../../assets/side1.jpg';
import side2 from '../../assets/side2.jpg';
import side3 from '../../assets/side3.jpg';
import { LiaEnvelopeOpenTextSolid } from "react-icons/lia";
import { PiPhoneCall } from "react-icons/pi";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const SideBar = ({ isOpen, setIsOpen }) => {
    return (
        <div
            className={`fixed top-3 bottom-3 right-0 w-100 bg-white overflow-y-auto rounded-2xl shadow-lg transform transition-transform duration-300 z-50 ${isOpen ? "translate-x-0" : "translate-x-full"
                }`}
        >
            {/* Close Button */}
            <div className="flex justify-end p-4">
                <button
                    className="cursor-pointer"
                    onClick={() => setIsOpen(false)}
                >
                    ✕
                </button>
            </div>

            {/* Logo */}
            <img src={logo} alt="logo" className="w-30 ml-8" />
            <div className="ml-8">
                <h1 className="text-lg font-semibold">About Doccure</h1>
                <p className="text-sm mt-2.5 text-gray-500">Modern healthcare platform designed to simplify the way patients connect with doctors, clinics & medical services.</p>
                <div className="flex gap-1.5  border-b-2 border-gray-300 pb-8 mt-4 ">
                    <img src={side1} className="w-25 h-25 rounded-2xl object-cover" />
                    <img src={side2} className="w-25 h-25 rounded-2xl object-cover" />
                    <img src={side3} className="w-25 h-25 rounded-2xl object-cover" />
                </div>
                <div className="mt-4 ">
                    <h1 className="text-lg font-semibold">Our Locations</h1>
                    <h2 className=" font-semibold mt-2">California</h2>
                    <p className="text-gray-500 border-b-2 border-gray-300  text-sm mt-2">1250 Sunset, Los Angeles, CA</p>
                    <h2 className="font-semibold mt-2">Los Angeles</h2>
                    <p className="text-gray-500 border-b-2 border-gray-300  text-sm mt-2">669 Boulevard, Los Angeles</p>
                </div>
                <div className="mt-4 border-b-2 border-gray-300 pb-6">
                    <h1 className="text-lg font-semibold">Contact Information</h1>
                    <div className="flex gap-2.5">
                        <LiaEnvelopeOpenTextSolid size={25} className="mt-2.5" />
                        <p className="text-sm text-gray-500 ">General Inquiries <br /><span className="text-gray-800 font-semibold">info@example.com</span></p>

                    </div>
                    <div className="flex gap-2.5 mt-4">
                        <PiPhoneCall size={25} className="mt-2.5" />
                        <p className="text-sm text-gray-500 ">Emergency Cases <br /><span className="text-gray-800 font-semibold">+1 24565 89856</span></p>

                    </div>

                </div>
                <div>
                    <h1 className="text-lg font-semibold mt-4">Follow Us</h1>
                    <div className="flex gap-x-3 mt-2 cursor-pointer">
                        <FaFacebookF size={20} />
                        <FaTwitter size={20} />
                        <FaInstagram size={20} />
                        <FaLinkedinIn size={20} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SideBar