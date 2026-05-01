import React from 'react'

const SignUp = () => {
  return (
     <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      
      <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl w-full">
        
        {/* LEFT SIDE (Image) */}
        <div className="hidden md:block">
          <img
            src="/doctor-illustration.png" // replace with your image
            alt="doctor"
            className="w-full"
          />
        </div>

        {/* RIGHT SIDE (FORM) */}
        <div className="bg-white rounded-2xl shadow p-8 w-full">
          
          {/* Heading */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Doctor Register</h2>
            <p className="text-sm text-blue-500 cursor-pointer">
              Not a Doctor?
            </p>
          </div>

          {/* Name */}
          <div className="mb-4">
            <label className="text-sm text-gray-600">Name</label>
            <input
              type="text"
              className="w-full mt-1 p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label className="text-sm text-gray-600">Phone</label>
            <input
              type="text"
              className="w-full mt-1 p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="0313 4489739"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="text-sm text-gray-600">Create Password</label>
            <input
              type="password"
              className="w-full mt-1 p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Button */}
          <button className="w-full bg-linear-to-r from-blue-500 to-cyan-400 text-white py-3 rounded-full mt-2">
            Sign Up
          </button>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-3 text-gray-500 text-sm">or</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Google */}
          <button className="w-full border py-3 rounded-full flex items-center justify-center gap-2 mb-3 hover:bg-gray-50">
            <img
              src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
              className="w-5"
            />
            Sign in With Google
          </button>

          {/* Facebook */}
          <button className="w-full border py-3 rounded-full flex items-center justify-center gap-2 hover:bg-gray-50">
            <img
              src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
              className="w-5"
            />
            Sign in With Facebook
          </button>

          {/* Footer */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Already have account?{" "}
            <span className="text-blue-500 cursor-pointer">Sign In</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignUp