import React from "react";
import {
  MdHeadphones,
} from "react-icons/md";

import {
  BsFillChatRightTextFill,
} from "react-icons/bs";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGlobe,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-50">
      <div className="py-10 px-6 md:px-12 lg:px-30">

        {/* ================= CTA SECTION ================= */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-2xl px-6 py-8 md:px-10 md:py-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-lg">

          {/* LEFT */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold max-w-xl leading-snug">
            Working for Your Better Health.
          </h1>

          {/* RIGHT */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">

            {/* Support */}
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-3 rounded-full">
                <MdHeadphones className="text-xl sm:text-2xl" />
              </div>
              <div>
                <p className="text-sm opacity-80">Customer Support</p>
                <p className="font-medium text-sm sm:text-base">
                  +1 56589 54598
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-3 rounded-full">
                <BsFillChatRightTextFill className="text-xl sm:text-2xl" />
              </div>
              <div>
                <p className="text-sm opacity-80">Drop Us an Email</p>
                <p className="font-medium text-sm sm:text-base">
                  info1256@example.com
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* ================= FOOTER LINKS ================= */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-sm text-gray-700">

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {["About", "Features", "Works", "Careers", "Locations"].map((item, i) => (
                <li key={i} className="hover:text-blue-500 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h3 className="font-semibold mb-4">Treatments</h3>
            <ul className="space-y-2">
              {["Dental", "Cardiac", "Spinal Cord", "Hair Growth", "Anemia"].map((item, i) => (
                <li key={i} className="hover:text-blue-500 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Specialities */}
          <div>
            <h3 className="font-semibold mb-4">Specialities</h3>
            <ul className="space-y-2">
              {["Transplant", "Gynecology", "Pediatrics", "Oncology", "Cardiology"].map((item, i) => (
                <li key={i} className="hover:text-blue-500 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Utilities */}
          <div>
            <h3 className="font-semibold mb-4">Utilities</h3>
            <ul className="space-y-2">
              {["Pricing", "Contact", "Request Quote", "Membership", "Integrations"].map((item, i) => (
                <li key={i} className="hover:text-blue-500 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-semibold mb-4">Newsletter</h3>

            <p className="text-sm mb-4">
              Subscribe & stay updated from Doccure
            </p>

            <div className="flex items-center bg-white rounded-full overflow-hidden shadow">
              <input
                type="email"
                placeholder="Enter email"
                className="px-4 py-2 w-full outline-none text-sm"
              />
              <button className="bg-blue-500 text-white px-4 py-2 text-sm hover:bg-blue-600">
                Send
              </button>
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-4">
              {[FaGlobe, FaFacebookF, FaInstagram, FaLinkedinIn].map(
                (Icon, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 flex items-center justify-center rounded-full border hover:bg-blue-500 hover:text-white cursor-pointer"
                  >
                    <Icon size={14} />
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="mt-10 border-t pt-4 text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center gap-2">
          <p>Copyright © 2026 Doccure. All Rights Reserved</p>

          <div className="flex gap-4">
            {["Legal Notice", "Privacy Policy", "Refund Policy"].map(
              (item, i) => (
                <span
                  key={i}
                  className="hover:text-blue-500 cursor-pointer"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;