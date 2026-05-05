import React from "react";
import { Link, useNavigate } from "react-router-dom";
import baner from "../../assets/baner.webp"; // use same illustration

const DoctorRegister = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // 👉 here you will later connect backend
    console.log("Doctors Registered");

    // redirect after signup
    navigate("/doctors"); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-10 items-center">
        
        {/* 🔹 Left Image */}
        <div className="hidden lg:block">
          <img src={baner} alt="register" className="w-full" />
        </div>

        {/* 🔹 Right Form */}
        <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md mx-auto">
          
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Doctor Register</h2>

            <Link to="/PatientRegister" className="text-blue-500 text-sm font-semibold">
              Are you a Patient?
            </Link>
          </div>

          <form onSubmit={handleSubmit}>
            
            {/* Name */}
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-full border  border-gray-300  p-3  mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {/* Phone */}
            <input
              type="tel"
              placeholder="Phone"
              className="w-full rounded-full  border-gray-300  border p-3  mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {/* Password */}
            <input
              type="password"
              placeholder="Create Password"
              className="w-full  p-3 rounded-full border  border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {/* Submit */}
             <Link to="/doctors" className="text-blue-500 font-semibold">
            
            
            <button
              type="submit"
              className="w-full bg-linear-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-full font-medium"
            >
              Sign Up
            </button>
            </Link>
          </form>

          {/* Divider */}
          <div className="flex items-center my-5">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-3 text-gray-400 text-sm">or</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Social */}
          <button className="w-full  text-taupe-500 font-medium border  border-gray-300 py-2 rounded-full  cursor-pointer mb-3 hover:bg-gray-100">
            Sign in With Google
          </button>

          <button className="w-full text-taupe-500 font-medium border  border-gray-300 py-2 cursor-pointer rounded-full hover:bg-gray-100">
            Sign in With Facebook
          </button>

          {/* Footer */}
          <p className="text-sm text-center text-taupe-500  font-medium mt-5">
            Already have an account?{" "}
            <Link to="/signup" className="text-blue-500 font-semibold">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DoctorRegister;