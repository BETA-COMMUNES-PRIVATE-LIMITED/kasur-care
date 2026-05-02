import React from "react";
import { Link } from "react-router-dom";
import baner from "../../assets/baner.webp"; 

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-10 items-center">
        
        {/* 🔹 Left Image */}
        <div className="hidden lg:block">
          <img src={baner} alt="signup" className="w-full" />
        </div>

        {/* 🔹 Right Form */}
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Create Account</h2>

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Confirm Password */}
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full border p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Checkbox */}
          <div className="flex items-center justify-between mb-4 text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
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
          <button className="w-full border py-2 rounded mb-3 hover:bg-gray-100">
            Sign up with Google
          </button>

          <button className="w-full border py-2 rounded hover:bg-gray-100">
            Sign up with Facebook
          </button>

          {/* Footer */}
          <p className="text-sm text-center mt-5">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;