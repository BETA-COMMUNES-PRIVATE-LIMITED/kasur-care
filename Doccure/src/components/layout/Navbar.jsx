import React, { useState } from 'react'
import { Link } from "react-router-dom";
import logo from '../../assets/logo.svg';
import { IoChevronDown } from "react-icons/io5";
import { FaEllipsisV } from "react-icons/fa";
import MobileNav from './MobileNav';
import SideBar from './SideBar';

const Navbar = () => {
  const Menu = [
    { name: "Home", path: '/' },

    {
      name: "Doctors",
      path: '/doctors',
      subMenu: [
        { name: "Doctor Details", path: "/doctor-details" },
        { name: "Doctor Dashboard", path: "/doctordashboard" },
        { name: "Appointments", path: "/appointments" },

      ],
    },

    {
      name: "Patients",
      path: '/patients',
      subMenu: [
        { name: "Patient Dashboard", path: "/patientdashboard" },
        { name: "Patient Profile", path: "/patient-profile" },
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
    { name: "Admin", path: '/admin' },
  ];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=' sticky top-0 z-50'>
      <div className='  py-2 px-6 lg:px-30  gap-8 w-full   bg-white border-b-2 border-gray-200  left-0 right-0'>

        <div className="flex items-center justify-between h-15">
          {/* logo */}
          <img src={logo} alt="Company Logo" className="h-10 w-auto" />
          {/* 🔹 Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-6">
            {Menu.map((item, index) => (
              <li
                key={index}
                className="relative group flex items-center gap-1 text-gray-700 text-md font-medium cursor-pointer hover:text-blue-500 transition"
              >
                {/* Main Menu Link */}
                <Link to={item.path} className="flex items-center gap-1">
                  {item.name}

                  {/* Dropdown Icon */}
                  {item.subMenu && <IoChevronDown size={16} />}
                </Link>

                {/* Dropdown */}
                {item.subMenu && (
                  <div className="absolute top-full left-0 pt-2 hidden group-hover:block z-50">
                    <ul className="bg-white shadow-lg rounded-lg w-52 py-2">
                      {item.subMenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            to={subItem.path}
                            className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-500"
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
          {/* 🔹 Right Side */}
          <div className=" items-center gap-4 hidden lg:flex">
            <Link to="/signup">
              <button className="bg-linear-to-l from-blue-600 to-cyan-500  text-white px-8 py-2 font-medium text-lg tracking-wider rounded-full cursor-pointer">
                Sign Up
              </button>
            </Link>
            <Link to="/PatientRegister">
              <button className="bg-black  text-white px-8 py-2 font-medium text-lg tracking-wider rounded-full cursor-pointer">
                Register
              </button>
            </Link>

            {/* Three Dots */}
            <button onClick={() => setIsOpen(true)}>
              <FaEllipsisV size={20} className="cursor-pointer hidden lg:flex text-gray-500" />
            </button>
            <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>

          <MobileNav />
        </div>

      </div>

    </nav>
  )
}

export default Navbar