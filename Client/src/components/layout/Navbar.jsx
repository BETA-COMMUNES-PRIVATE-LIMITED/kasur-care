import React from 'react'
import { CgLayoutGridSmall } from "react-icons/cg";
import logo from '../../assets/logo.svg';
import Wrapper from '../shared/Wrapper';
const Navbar = () => {
    return (
        <header className='w-full bg-white md:bg-transparent top-0 left-0 right-0'>
            <nav className=' h-24 flex items-center justify-between  bg-white shadow-md'>

                <div className='flex justify-between items-center py-4 px-6 md:px-12 lg:px-16 text-base gap-8 w-full'>
                    {/* logo */}
                    <div>
                        <a href='' className='text-2xl font-semibold flex items-center space-x-3'>
                            <img src={logo} alt='' className='w-40 inline-block items-center' />
                        </a>
                    </div>
                    {/* items */}
                    <div>
                        <ul className='flex gap-x-7'>
                            <li className='text-gray-600 hover:text-gray-800 cursor-pointer transition-colors duration-300'>Home</li>
                            <li className='text-gray-600 hover:text-gray-800 cursor-pointer transition-colors duration-300'>About</li>
                            <li className='text-gray-600 hover:text-gray-800 cursor-pointer transition-colors duration-300'>Services</li>
                            <li className='text-gray-600 hover:text-gray-800 cursor-pointer transition-colors duration-300'>Contact</li>

                        </ul>
                    </div>
                    {/* button */}
                    <div>
                        <CgLayoutGridSmall size={20} className='w-12 h-12 rounded-full  text-xs border border-gray-300 text-gray-500 hover:bg-blue-500 hover:text-white transition-colors duration-300 cursor-pointer flex items-center justify-center' />

                    </div>
                </div>
           </nav>
        </header>
    )
}

export default Navbar