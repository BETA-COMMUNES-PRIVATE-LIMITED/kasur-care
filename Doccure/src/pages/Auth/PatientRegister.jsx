import React from "react";
import { Link, useNavigate } from "react-router-dom";
import baner from "../../assets/baner.webp";
import { motion } from "motion/react";

const PatientRegister = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Patient Registered");
    navigate("/patients");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 sm:px-6 lg:px-10 py-10">
      
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          className="hidden lg:flex justify-center"
        >
          <img
            src={baner}
            alt="patient register"
            className="w-full max-w-md object-contain"
          />
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
         initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
        className="w-full max-w-md mx-auto bg-white shadow-xl rounded-2xl p-6 sm:p-8">
          
          {/* HEADER */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Patient Register
            </h2>

            <Link
              to="/DoctorRegister"
              className="text-blue-500 text-sm font-semibold hover:underline"
            >
              Are you a Doctor?
            </Link>
          </div>

          {/* FORM */}
          {/* <form onSubmit={handleSubmit} className="space-y-4">
            
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
          </form> */}
          <form onSubmit={handleSubmit} className="space-y-5">

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

    {/* Full Name */}
    <input
      type="text"
      placeholder="Full Name"
      required
      className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />

    {/* Mobile Number */}
    <input
      type="tel"
      placeholder="Mobile Number"
      required
      className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />

    {/* Email */}
    <input
      type="email"
      placeholder="Email Address (Optional)"
      className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />

    {/* Gender */}
    <select
      required
      className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      <option value="">Select Gender</option>
      <option>Male</option>
      <option>Female</option>
      <option>Other</option>
    </select>

    {/* Date of Birth */}
    <input
      type="date"
      required
      className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />

    {/* CNIC */}
    <input
      type="text"
      placeholder="CNIC (xxxxx-xxxxxxx-x)"
      className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />

    {/* Blood Group */}
    <select
      className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      <option value="">Blood Group</option>
      <option>A+</option>
      <option>A-</option>
      <option>B+</option>
      <option>B-</option>
      <option>AB+</option>
      <option>AB-</option>
      <option>O+</option>
      <option>O-</option>
    </select>

    {/* Emergency Contact */}
    <input
      type="tel"
      placeholder="Emergency Contact"
      required
      className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>

  {/* Address */}
  <textarea
    rows="3"
    placeholder="Address"
    required
    className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
  ></textarea>

  {/* Mobile Verification */}
  <div className="flex gap-2">
    <input
      type="text"
      placeholder="Enter OTP"
      className="flex-1 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />

    <button
      type="button"
      className="px-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
    >
      Send OTP
    </button>
  </div>

  {/* Password */}
  <input
    type="password"
    placeholder="Create Password"
    required
    className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
  />

  {/* Confirm Password */}
  <input
    type="password"
    placeholder="Confirm Password"
    required
    className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
  />

  <button
    type="submit"
    className="w-full bg-linear-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-xl font-medium hover:opacity-90 transition"
  >
    Register Patient
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

export default PatientRegister;