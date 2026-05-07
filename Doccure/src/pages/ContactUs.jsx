import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import ContactMap from "../components/common/ContactMap";

const ContactUs = () => {
  return (
    <div className="bg-[#f9fbff] min-h-screen">

      {/* 🔹 Hero Section */}
       <div className='bg-blue-100 py-10'>
        <div className='flex gap-2 justify-center items-center'>
          <Link to={'/'}>
            <span className='text-blue-400 text-2xl'><FaHome /></span>
          </Link>
          <span className='text-2xl text-gray-600'><RiArrowRightDoubleLine /></span>
          <h2 className='text-gray-600 font-medium'>Contact Us</h2>
        
        </div>

        <div className='text-center mt-4'>
          <h1 className='text-3xl font-semibold'>Contact Us</h1>
        </div>
      </div>

      {/* 🔹 Main Contact Section */}
      <div className="py-12 px-4 md:px-8 xl:px-20 2xl:px-32">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* LEFT SIDE */}
          <div>

            <p className="text-blue-500 font-medium mb-2">
              Get in touch
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Have Any Question?
            </h2>

            {/* Address Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-5 flex gap-4 items-start shadow-sm mb-5">

              <div className="bg-blue-50 p-4 rounded-xl">
                <FaMapMarkerAlt className="text-blue-500 text-lg cursor-pointer" />
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  Address
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  8432 Mante Highway, Aminaport, USA
                </p>
              </div>

            </div>

            {/* Phone Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-5 flex gap-4 items-start shadow-sm mb-5">

              <div className="bg-blue-50 p-4 rounded-xl">
                <FaPhoneAlt className=" cursor-pointer text-blue-500 text-lg" />
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  Phone Number
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  +1 315 369 5943
                </p>
              </div>

            </div>

            {/* Email Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-5 flex gap-4 items-start shadow-sm">

              <div className="bg-blue-50 p-4 rounded-xl">
                <FaEnvelope className="text-blue-500 text-lg cursor-pointer" />
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  Email Address
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  doccure@example.com
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">

            <form className="space-y-5">

              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full mt-2 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full mt-2 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                  />
                </div>

              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Phone Number
                  </label>

                  <input
                    type="text"
                    placeholder="Phone number"
                    className="w-full mt-2 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Services
                  </label>

                  <input
                    type="text"
                    placeholder="Service name"
                    className="w-full mt-2 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                  />
                </div>

              </div>

              {/* Message */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Message
                </label>

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  className="w-full mt-2 border border-gray-300 rounded-lg px-4 py-3 outline-none resize-none focus:border-blue-500"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="bg-linear-to-r from-blue-600 to-cyan-500 text-white px-7 py-3 rounded-full font-medium hover:opacity-90 transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
      <div>
        <ContactMap/>
      </div>

    </div>
  );
};

export default ContactUs;