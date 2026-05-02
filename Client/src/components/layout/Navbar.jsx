import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";
import { PiDotsThreeLight } from "react-icons/pi";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import Button from "../shared/Button";
import logo from "../../assets/logo.svg";
import { FaEllipsisV } from "react-icons/fa";
import side1 from '../../assets/side1.jpg';
import side2 from '../../assets/side2.jpg';
import side3 from '../../assets/side3.jpg';
import { LiaEnvelopeOpenTextSolid } from "react-icons/lia";
import { PiPhoneCall } from "react-icons/pi";
import { BsChevronRight } from "react-icons/bs";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const Menu = [
    { name: "Home"},
    { name: "Doctors"},
    { name: "Patients"},
    { name: "Pharmacy"},
    { name: "Pages"},
    { name: "Blog"},
    { name: "Admin"},
  ];

  return (
    <header className="w-fulltop-[60px] bg-white shadow-sm">

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* 🔹 Logo */}
          <img src={logo} alt="logo" className="w-32" />

          {/* 🔹 Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-6">
            {Menu.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-1 text-gray-700 font-medium cursor-pointer hover:text-blue-500 transition"
              >
                {item.name} 
                <IoChevronDown size={16} />
              </li>
            ))}
          </ul>

          {/* 🔹 Right Side */}
          <div className=" items-center gap-4 hidden lg:flex">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full cursor-pointer">
              Sign Up
            </button>

            <button className="bg-black text-white px-4 py-2 rounded-full cursor-pointer">
              Register
            </button>

            {/* Three Dots */}
            <button onClick={() => setIsOpen(true)}>
              <FaEllipsisV size={20} className="cursor-pointer hidden lg:flex" />

            </button>
          </div>
          {/* sidebar */}
 

         
          <div
            className={`fixed top-3 bottom-3 right-0 w-100 bg-white overflow-y-auto rounded-2xl shadow-lg transform transition-transform duration-300 z-50 ${isOpen ? "translate-x-0" : "translate-x-full"
              }`}
          >
            {/* Close Button */}
            <div className="flex justify-end p-4 ">
              <button className="cursor-pointer" onClick={() => setIsOpen(false)}>✕</button>

            </div>
            <div>
              {/* 🔹 Logo */}
              <img src={logo} alt="logo" className="w-30 ml-8" />
            </div>

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


          {/* Overlay */}
          {isOpen && (
            <div
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 z-40"
            />
          )}
          {/* 🔹 Mobile Icon */}
          <div className="lg:hidden cursor-pointer">
            {isMenuOpen ? (
              <RxCross2 size={28} onClick={() => setIsMenuOpen(false)} />
            ) : (
              <RxHamburgerMenu size={28} onClick={() => setIsMenuOpen(true)} />
            )}
          </div>
        </div>
      </nav>

     {/* 🔹 Mobile Sidebar */}
<div
  className={`fixed top-0 left-0 h-screen w-72 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
    isMenuOpen ? "translate-x-0" : "-translate-x-full"
  }`}
>

  

  {/* Scrollable Content */}
  <div className="overflow-y-auto h-[calc(100%-60px)] p-4">
    <div className="flex justify-between items-center p-3 border-gray-300 border-b">
    
     <img src={logo} alt="logo" className="w-30 " />
  </div>
    
    {/* Menu Items */}
    <ul className="flex flex-col gap-2">
      {Menu.map((item, index) => (
        <li
          key={index}
          className="flex justify-between items-center py-3 px-2 border-b border-gray-300 cursor-pointer hover:text-blue-500"
        >
          {item.name} 
          <span><BsChevronRight size={15} /></span>
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
    </header>
  );
};

export default Navbar;