import React from 'react'
import baner from '../../assets/baner.webp'
import { Link } from "react-router-dom";

const Signup = () => {
  return (
         <div className="min-h-screen flex items-center justify-center bg-white px-4">
      
      <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl w-full">
        
        {/* LEFT SIDE (Image) */}
        <div className="hidden md:block">
          <img
            src={baner}
            alt="doctor"
            className="w-full"
          />
        </div>

        {/* RIGHT SIDE (FORM) */}
 {/* 🔹 Right Form */}
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Login Doccure</h2>

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 p-3 rounded-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300  p-3 rounded-full  mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Confirm Password */}
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full border border-gray-300  p-3 rounded-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Checkbox */}
          <div className="flex items-center justify-between mb-4 text-sm">
            <label className="flex items-center gap-2 text-taupe-500  font-medium  ">
              <input type="checkbox"  className='cursor-pointer'/>
              Remember Me
            </label>
          </div>

          {/* Button */}
          <button className="w-full bg-linear-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-full font-medium">
            Sign Up
          </button>

          {/* Divider */}
          <div className="flex items-center my-5">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-3 text-gray-400 text-sm">or</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Social Buttons */}
          <button className="w-full border text-taupe-500  font-medium cursor-pointer border-gray-300 p py-2 rounded-full mb-3 hover:bg-gray-100">
            Sign up with Google
          </button>

          <button className="w-full  border text text-taupe-500  font-medium cursor-pointer  border-gray-300 p py-2 rounded-full hover:bg-gray-100">
            Sign up with Facebook
          </button>

          {/* Footer */}
          <p className="text-sm text-center mt-5 text-taupe-500  font-medium ">
            Already have an account?{" "}
            <Link to="/PatientRegister" className="text-blue-500  font-bold">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
      
    

  )
}

export default Signup