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
    { name: "Doctors", path: '/doctors' },
    { name: "Patients", path: '/patients' },
    { name: "Pharmacy", path: '/pharmacy' },
    { name: "Pages", path: '/pages' },
    { name: "Blog", path: '/blogs' },
    { name: "Admin", path: '/admin' },
  ];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className=' py-2 px-6 lg:px-30  gap-8 w-full  bg-white border-b-2 border-gray-200  top-0 left-0 right-0'>

        <div className="flex items-center justify-between h-15">
          {/* logo */}
          <img src={logo} alt="Company Logo" className="h-10 w-auto" />
          {/* 🔹 Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-6">
            {Menu.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-1 text-gray-700  text-md font-medium cursor-pointer hover:text-blue-500 transition"
              >
                <Link to={item.path}>{item.name}</Link>
                <IoChevronDown size={16} />
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