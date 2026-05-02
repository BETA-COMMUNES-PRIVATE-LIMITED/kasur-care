import React from 'react'
import logo from '../../assets/logo.svg';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LiaEnvelopeOpenTextSolid } from "react-icons/lia";
import { IoChevronDown } from "react-icons/io5";
import { PiPhoneCall } from "react-icons/pi";
import { BsChevronRight } from "react-icons/bs";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const MobileNav = () => {
    const Menu = [
        { name: "Home", path: '/' },
        { name: "Doctors", path: '/doctors' },
        { name: "Patients", path: '/patients' },
        { name: "Pharmacy", path: '/pharmacy' },
        { name: "Pages", path: '/pages' },
        { name: "Blog", path: '/blogs' },
        { name: "Admin", path: '/admin' },
    ];
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div
            className={`fixed top-0 left-0 h-screen w-72 bg-white shadow-lg z-50 transform transition-transform duration-300
  ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >



            {/* Scrollable Content */}
            <div className="overflow-y-auto h-[calc(100%-60px)] p-4">
                <div className="flex justify-between items-center p-3 border-b">
                    <img src={logo} alt="logo" className="w-30" />

                    <button onClick={() => setIsMenuOpen(false)}>
                        <RxCross2 size={24} />
                    </button>
                </div>
                {/* Menu Items */}
                <ul className="flex flex-col gap-2">
                    {Menu.map((item, index) => (
                        <li key={index}>
                            <Link
                                to={item.path}
                                onClick={() => setIsMenuOpen(false)}
                                className="block text-gray-700 font-medium hover:text-blue-500"
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Contact */}
                <div className="mt-6 border-b border-gray-300 pb-4">
                    <h1 className="font-semibold">Contact Information</h1>

                    <div className="flex gap-2 mt-3">
                        <LiaEnvelopeOpenTextSolid size={20} />
                        <p className="text-sm text-gray-500">
                            info@example.com
                        </p>
                    </div>

                    <div className="flex gap-2 mt-3">
                        <PiPhoneCall size={20} />
                        <p className="text-sm text-gray-500">
                            +1 24565 89856
                        </p>
                    </div>
                </div>

                {/* Social */}
                <div className="mt-4">
                    <h1 className="font-semibold">Follow Us</h1>
                    <div className="flex gap-3 mt-2">
                        <FaFacebookF />
                        <FaTwitter />
                        <FaInstagram />
                        <FaLinkedinIn />
                    </div>
                </div>

                {/* Buttons */}
                <div className="mt-6 space-y-3">
                    <button className="w-full bg-blue-500 text-white py-2 rounded-full">
                        Sign Up
                    </button>
                    <button className="w-full bg-black text-white py-2 rounded-full">
                        Register
                    </button>
                </div>

            </div>
        </div>
    )
}

export default MobileNav;