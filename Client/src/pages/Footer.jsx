import React from "react";
import Wrapper from "../components/shared/Wrapper";
import { MdHeadphones } from "react-icons/md";
import { BsFillChatRightTextFill } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGlobe } from "react-icons/fa";

const FooterSection = () => {
  return (
    <div className="bg-gray-50 pt-20">
      <Wrapper>

        {/* CTA BLUE BOX */}
        {/* <div className="bg-linear-to-r from-blue-600 to-blue-500 text-white rounded-2xl px-6 py-8 md:px-10 md:py-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-lg"> */}
        <div className="bg-linear-to-r from-blue-600 to-blue-500 text-white rounded-2xl px-6 py-8 md:px-10 md:py-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-lg hover:shadow-xl transition-all duration-300">
          {/* LEFT TEXT */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold max-w-xl leading-snug">
            Working for Your Better Health.
          </h1>

          {/* RIGHT CONTACT */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">

            {/* SUPPORT */}
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

            {/* EMAIL */}
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

        {/* FOOTER */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-sm text-gray-700">

          {/* COLUMN 1 */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li className="cursor-pointer hover:text-blue-500 transition-colors duration-200">
                About
              </li>
              <li className="cursor-pointer hover:text-blue-500 transition-colors duration-200">
                Features
              </li>
              <li className="cursor-pointer hover:text-blue-500 transition-colors duration-200">
                Works
              </li>
              <li className="cursor-pointer hover:text-blue-500 transition-colors duration-200">
                Careers
              </li>
              <li className="cursor-pointer hover:text-blue-500 transition-colors duration-200">
                Locations
              </li>

              {/* <li>Features</li>
              <li>Works</li>
              <li>Careers</li>
              <li>Locations</li> */}
            </ul>
          </div>

          {/* COLUMN 2 */}
          <div>
            <h3 className="font-semibold mb-4">Treatments</h3>
            <ul className="space-y-2">
              <li className="cursor-pointer hover:text-blue-500 transition-colors duration-200">
                Dental
              </li>
              <li className="cursor-pointer hover:text-blue-500 transition-colors duration-200">
                Cardiac
              </li>
              <li className="cursor-pointer hover:text-blue-500 transition-colors duration-200">
                Spinal Cord
              </li>
              <li className="cursor-pointer hover:text-blue-500 transition-colors duration-200">
                Hair Growth
              </li>
              <li className="cursor-pointer hover:text-blue-500 transition-colors duration-200">
                Anemia & Disorder
              </li>
              {/* <li>Dental</li>
              <li>Cardiac</li>
              <li>Spinal Cord</li>
              <li>Hair Growth</li>
              <li>Anemia & Disorder</li> */}
            </ul>
          </div>

          {/* COLUMN 3 */}
          <div>
            <h3 className="font-semibold mb-4">Specialities</h3>
            <ul className="space-y-2">
              <li className="cursor-pointer hover:text-blue-500 transition-colors duration-200">
                Transplant
              </li>
              <li className="cursor-pointer hover:text-blue-500 transition-colors duration-200">
                Gynacology
              </li>
              <li className="cursor-pointer hover:text-blue-500 transition-colors duration-200">
                Pediatrics
              </li>
              <li className="cursor-pointer hover:text-blue-500 transition-colors duration-200">
                Oncology
              </li>
              <li className="cursor-pointer hover:text-blue-500 transition-colors duration-200">
                Cardiologist
              </li>
              {/* <li>Transplant</li>
              <li>Cardiologist</li>
              <li>Oncology</li>
              <li>Pediatrics</li>
              <li>Gynacology</li> */}
            </ul>
          </div>

          {/* COLUMN 4 */}
          <div>
            <h3 className="font-semibold mb-4">Utilities</h3>
            <ul className="space-y-2">
              <li className="cursor-pointer hover:text-blue-500 transition-colors duration-200">
                Pricing
              </li>
              <li className="cursor-pointer hover:text-blue-500 transition-colors duration-200">
                Contact
              </li>
              <li className="cursor-pointer hover:text-blue-500 transition-colors duration-200">
                Request A Quote
              </li>
              <li className="cursor-pointer hover:text-blue-500 transition-colors duration-200">
                Premium Membership
              </li>
              <li className="cursor-pointer hover:text-blue-500 transition-colors duration-200">
                Integrations
              </li>


              {/* <li>Pricing</li>
              <li>Contact</li>
              <li>Request A Quote</li>
              <li>Premium Membership</li>
              <li>Integrations</li> */}
            </ul>
          </div>

          {/* COLUMN 5 - NEWSLETTER */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <h3 className="font-semibold mb-4">Newsletter</h3>

            <p className="text-sm mb-4">
              Subscribe & Stay Updated from the Doccure
            </p>

            <div className="flex items-center bg-white rounded-full overflow-hidden shadow focus-within:ring-2 focus-within:ring-blue-500 transition">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="px-4 py-2 w-full outline-none text-sm"
              />
              <button className="bg-blue-500 text-white px-4 py-2 text-sm hover:bg-blue-600 transition">
                Send
              </button>
            </div>

            {/* SOCIAL */}
            {/* <div className="flex gap-3 mt-4 text-gray-500 text-lg">
              <span>🌐</span>
              <span>📘</span>
              <span>📸</span>
              <span>💼</span>
            </div> */}
            <div className="flex gap-3 mt-4">
              {[FaGlobe, FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                <div
                  key={i}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-blue-500 hover:text-white transition cursor-pointer"
                >
                  <Icon size={14} />
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-10 border-t pt-4 text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center gap-2">
          <p>Copyright © 2026 Doccure. All Rights Reserved</p>

          {/* <div className="flex gap-4">
            <span>Legal Notice</span>
            <span>Privacy Policy</span>
            <span>Refund Policy</span>
          </div> */}
          <div className="flex gap-4 text-gray-500">
            {["Legal Notice", "Privacy Policy", "Refund Policy"].map((item, i) => (
              <span key={i} className="cursor-pointer hover:text-blue-500 transition">
                {item}
              </span>
            ))}
          </div>
        </div>

      </Wrapper>
    </div>
  );
};

export default FooterSection;