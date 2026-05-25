import React from "react";
import { Link, useNavigate } from "react-router-dom";
import baner from "../../assets/baner.webp";
import { motion } from "motion/react";

const DoctorRegister = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Doctor Registered");
    navigate("/doctors");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 sm:px-6 lg:px-10 py-10">
      
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* LEFT IMAGE (hidden on mobile) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          className="hidden lg:flex justify-center"
        >
          <img
            src={baner}
            alt="doctor register"
            className="w-full max-w-md object-contain"
          />
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          className="w-full max-w-md mx-auto bg-white shadow-xl rounded-2xl p-6 sm:p-8"
        >
          
          {/* Header */}
          <div className ="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Doctor Register
            </h2>

            <Link
              to="/PatientRegister"
              className="text-blue-500 text-sm font-semibold hover:underline"
            >
              Are you a Patient?
            </Link>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="tel"
              placeholder="Phone"
              className="w-full p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="password"
              placeholder="Create Password"
              className="w-full p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button
              type="submit"
              className="w-full bg-linear-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-full font-medium hover:opacity-90 transition"
            >
              Sign Up
            </button>
          </form>

          {/* DIVIDER */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-3 text-gray-400 text-sm">or</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* SOCIAL BUTTONS */}
          <div className="space-y-3">
            <button className="w-full border border-gray-300 py-2 rounded-full hover:bg-gray-100 transition">
              Sign in With Google
            </button>

            <button className="w-full border border-gray-300 py-2 rounded-full hover:bg-gray-100 transition">
              Sign in With Facebook
            </button>
          </div>

          {/* FOOTER */}
          <p className="text-sm text-center text-gray-500 mt-6">
            Already have an account?{" "}
            <Link to="/signup" className="text-blue-500 font-semibold">
              Sign In
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default DoctorRegister;