import React, { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { PiDotsThreeLight } from "react-icons/pi";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import Button from "../shared/Button";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const Menu = [
    { name: "Home" },
    { name: "Doctors" },
    { name: "Patients" },
    { name: "Pharmacy" },
    { name: "Pages" },
    { name: "Blog" },
    { name: "Admin" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-sm">
      
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
          <div className="hidden lg:flex items-center gap-3 mt-4">
            <Button className=''>Register</Button>
            <Button type="secondary" className=''>Sign Up</Button>

            <PiDotsThreeLight className="w-10 h-10 flex items-center justify-center mb-3 rounded-full border text-gray-500 hover:bg-blue-500 hover:text-white cursor-pointer transition" />
          </div>

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

      {/* 🔹 Mobile Menu */}
      <div
        className={`lg:hidden fixed top-20 left-0 w-full bg-white shadow-md transition-all duration-300 ${
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-6">
          {Menu.map((item, index) => (
            <li 
              key={index}
              onClick={() => setIsMenuOpen(false)}
              className="w-full  py-3 text-gray-700 text-start hover:bg-blue-500 hover:text-white transition cursor-pointer"
            >
              {item.name} 
            </li>
          ))}

          <div className="flex flex-col gap-3 mt-4 w-full px-6">
            <Button>Register</Button>
            <Button type="secondary">Sign Up</Button>
          </div>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;