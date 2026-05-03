import React, { useState } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import logo from '../../assets/logo.svg'
import { Link } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
import { LiaEnvelopeOpenTextSolid } from "react-icons/lia";
import { PiPhoneCall } from "react-icons/pi";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const MobileNav = () => {
    const Menu = [
        { name: "Home" },
        { name: "Doctors" },
        { name: "Patients" },
        { name: "Pharmacy" },
        { name: "Pages" },
        { name: "Blog" },
        { name: "Admin" },
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            {/* 🔹 Toggle Button */}
            <div className="lg:hidden cursor-pointer">
                {isMenuOpen ? (
                    <RxCross2 size={28} onClick={() => setIsMenuOpen(false)} />
                ) : (
                    <RxHamburgerMenu size={28} onClick={() => setIsMenuOpen(true)} />
                )}
            </div>

            {/* 🔹 Mobile Sidebar */}
            <div
                className={`fixed top-0 left-0 h-screen w-72 bg-white shadow-lg z-50 transform transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >

                {/* Header */}
                <div className="flex justify-between items-center p-3 border-b border-gray-300">
                    <img src={logo} alt="logo" className="w-30" />

                </div>

                {/* Menu */}
                <div className="overflow-y-auto h-[calc(100%-60px)] p-4">
                    <ul className="flex flex-col gap-2">
                        {Menu.map((item, index) => (
                            <li
                                key={index}
                                className="flex justify-between items-center py-3 px-2 border-b border-gray-300 cursor-pointer hover:text-blue-500"
                            >
                                {item.name}
                                <BsChevronRight size={15} />
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
                        <div className="flex gap-3 mt-3 cursor-pointer">
                            <FaFacebookF />
                            <FaTwitter />
                            <FaInstagram />
                            <FaLinkedinIn />
                        </div>
                    </div>
                    {/* button */}
                    <div className="mt-10 space-y-6 ">
                        <Link to="/signup">
              <button className="bg-linear-to-l from-blue-600 to-cyan-500  text-white px-16 py-2 font-medium text-lg tracking-wider rounded-full cursor-pointer">
                Sign Up
              </button>
            </Link>
            <Link to="/PatientRegister">
              <button className="bg-black  mt-4 text-white px-16 py-2 font-medium text-lg tracking-wider rounded-full cursor-pointer">
                Register
              </button>
            </Link>

                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileNav;