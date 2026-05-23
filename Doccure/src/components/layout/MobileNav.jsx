import React, { useState } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { IoChevronDown } from "react-icons/io5";
import logo from '../../assets/logo.svg';
import { Link } from "react-router-dom";
import { LiaEnvelopeOpenTextSolid } from "react-icons/lia";
import { PiPhoneCall } from "react-icons/pi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const MobileNav = () => {

  const Menu = [
    { name: "Home", path: '/' },

    {
      name: "Doctors",
      path: '',
      subMenu: [
        { name: "All Doctor ", path: "/doctors" },
        { name: "Doctor Dashboard", path: "/doctordashboard" },
        { name: "Appointments", path: "/appointments" },

      ],
    },

    {
      name: "Patients",
      path: '',
      subMenu: [
        { name: "Patient Dashboard", path: "/patientdashboard" },
        { name: " All Patient ", path: 'patients' },
        { name: "Book Appointment", path: "/book-appointment" },
      ],
    },

    { name: "Pharmacy", path: '/pharmacy' },

    {
      name: "Pages",
      path: '',
      subMenu: [
        { name: "About Us", path: "/about" },
        { name: "Hospitals", path: "/hospitals" },
        { name: "Contact Us", path: "/contact" },
        { name: "Pharmacy", path: "/pharmacy" },
        { name: "Lab Test", path: "/labtest" },
        { name: "Appointments", path: "/appointments" },
        { name: "Book Appointment", path: "/book-appointment" },
        { name: "Doctor Dashboard", path: "/doctordashboard" },
        { name: "Patient Dashboard", path: "/patientdashboard" },
        
         { name: "Signup", path: "/signup" },
          { name: "Doctor Register", path: "/doctorregister" },
          { name: "Patient Register", path: "/patientregister" },


      ],
    },

    { name: "Blog", path: '/blogs' },
    { name: "Contact Us", path: "/contact" },
    { name: "Admin", path: "/admin" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <>
      {/* 🔹 Toggle Button */}
      <div className="lg:hidden cursor-pointer">
        {isMenuOpen ? (
          <RxCross2
            size={28}
            onClick={() => setIsMenuOpen(false)}
          />
        ) : (
          <RxHamburgerMenu
            size={28}
            onClick={() => setIsMenuOpen(true)}
          />
        )}
      </div>

      {/* 🔹 Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-72 bg-white shadow-lg z-50 transform transition-transform duration-300 overflow-y-auto ${
          isMenuOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >

        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-300">
          <img src={logo} alt="logo" className="w-28" />

          <RxCross2
            size={26}
            className="cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          />
        </div>

        {/* Menu */}
        <div className="p-4">

          <ul className="flex flex-col gap-2">

            {Menu.map((item, index) => (

              <li
                key={index}
                className="border-b border-gray-200 pb-2"
              >

                {/* Main Menu */}
                <div className="flex items-center justify-between">

                  <Link
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="py-2 text-gray-700 font-medium hover:text-blue-500 transition"
                  >
                    {item.name}
                  </Link>

                  {/* Dropdown Button */}
                  {item.subMenu && (
                    <button
                      onClick={() => toggleDropdown(index)}
                    >
                      <IoChevronDown
                        size={18}
                        className={`transition-transform duration-300 cursor-pointer ${
                          openDropdown === index
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </button>
                  )}

                </div>

                {/* Submenu */}
                {item.subMenu && openDropdown === index && (
                  <ul className="ml-4 mt-2 flex flex-col gap-2">

                    {item.subMenu.map((subItem, subIndex) => (

                      <li key={subIndex}>
                        <Link
                          to={subItem.path}
                          onClick={() => setIsMenuOpen(false)}
                          className="block text-sm font-medium space-y-4 text-gray-500 hover:text-blue-500 transition"
                        >
                          {subItem.name}
                        </Link>
                      </li>

                    ))}

                  </ul>
                )}

              </li>

            ))}

          </ul>

          {/* Contact */}
          <div className="mt-6 border-b border-gray-300 pb-4">
            <h1 className="font-semibold">
              Contact Information
            </h1>

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

          {/* Buttons */}
          <div className="mt-8 space-y-4">

            <Link to="/signup">
              <button className="w-full bg-linear-to-l mt-2 cursor-pointer from-blue-600 to-cyan-500 text-white py-3 rounded-full font-medium">
                Sign Up
              </button>
            </Link>

            <Link to="/PatientRegister">
              <button className="w-full bg-black text-white mt-6 cursor-pointer py-3 rounded-full font-medium">
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