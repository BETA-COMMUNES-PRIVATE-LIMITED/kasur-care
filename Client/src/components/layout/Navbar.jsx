import React, { useState } from 'react'
import { CgLayoutGridSmall } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import logo from '../../assets/logo.svg';
import Wrapper from '../shared/Wrapper';
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)



    const Menu = [
        { name: 'Home' },
        { name: 'Doctors' },
        { name: 'Patients' },
        { name: 'Pharmacy' },
        { name: 'Pages' },
        { name: 'Blog' },
        { name: 'Admin' }
    ]
    return (
        <header className='w-full bg-white md:bg-transparent top-0 left-0 right-0'>
            <nav className=' h-18 flex items-center justify-between  bg-white shadow-md'>

                <div className='flex justify-between items-center py-4 px-6 md:px-12 lg:px-16 text-base gap-8 w-full'>
                    {/* logo */}

                    <a href='' className='text-2xl font-semibold flex items-center space-x-3'>
                        <img src={logo} alt='' className='w-40 inline-block items-center' />
                    </a>

                    {/* items */}

                    <ul className=' gap-x-8 hidden xl:flex '>

                        {Menu.map((items, index) => (
                            <li key={index} className='  text-gray-700 flex text-lg font-medium  p-3 hover:animate-pulse cursor-pointer hover:bg-blue-400 hover:text-white rounded-md transition-all '>
                                {items.name}
                            </li>))}
                    </ul>

                    {/* button */}
                    <div>
                        <CgLayoutGridSmall size={20} className='w-12 h-12 hidden xl:flex rounded-full hover:animate-pulse  text-xs border border-gray-300 text-gray-500 hover:bg-blue-400 hover:text-white transition-colors duration-300 cursor-pointer  items-center justify-center' />
                    </div>
                    {/* for mobile menu */}
                    <div className='xl:hidden block cursor-pointer'>
                        {isMenuOpen ? (
                            <RxCross2
                                onClick={() => setIsMenuOpen(false)}
                                size={30}
                                className="transition-transform duration-300 rotate-180"
                            />
                        ) : (
                            <RxHamburgerMenu
                                onClick={() => setIsMenuOpen(true)}
                                size={30}
                                className="transition-transform duration-300"
                            />
                        )}
                        <div
                            className={`absolute xl:hidden top-24 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transition-all duration-300 ${isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
                                }`}
                        >
                            <ul className='flex flex-col items-center gap-6 w-full'>
                                {Menu.map((items, index) => (
                                    <li
                                        key={index}
                                        onClick={() => setIsMenuOpen(false)}
                                        className='text-gray-700 text-lg w-full list-none text-center p-4 font-medium  hover:bg-blue-400 hover:text-white rounded-md transition-all cursor-pointer'
                                    >
                                        {items.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>


            </nav>
        </header>
    )
}

export default Navbar