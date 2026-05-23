import React from "react";
import { motion } from "framer-motion";
import {
  FaUserNurse,
  FaAmbulance,
  FaProcedures,
  FaHeartbeat,
} from "react-icons/fa";

const HomeCare = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6 md:px-12 lg:px-20">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            Home & Health{" "}
            <span className="text-blue-400">Care</span>
          </h1>

        <p className="text-gray-600 mt-3">
          Professional healthcare at your home for comfort and safety
        </p>
      </motion.div>

      {/* SERVICES GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition">
          <FaUserNurse className="text-4xl text-blue-500 mx-auto" />
          <h2 className="text-xl font-semibold mt-4">
            Nursing Care
          </h2>
          <p className="text-gray-600 mt-2">
            Skilled nurses for daily medical support at home.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition">
          <FaHeartbeat className="text-4xl text-red-500 mx-auto" />
          <h2 className="text-xl font-semibold mt-4">
            Health Monitoring
          </h2>
          <p className="text-gray-600 mt-2">
            Regular checkups for blood pressure, sugar, and vitals.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition">
          <FaAmbulance className="text-4xl text-green-500 mx-auto" />
          <h2 className="text-xl font-semibold mt-4">
            Emergency Care
          </h2>
          <p className="text-gray-600 mt-2">
            Quick response medical help at your doorstep.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition">
          <FaProcedures className="text-4xl text-purple-500 mx-auto" />
          <h2 className="text-xl font-semibold mt-4">
            Patient Care
          </h2>
          <p className="text-gray-600 mt-2">
            Full assistance for bedridden and elderly patients.
          </p>
        </div>

      </div>

      {/* EXTRA SECTION */}
      <div className="mt-16 bg-white p-10 rounded-2xl shadow-lg">

        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Why Choose Our Home Care?
        </h2>

        <ul className="space-y-3 text-gray-600 list-disc pl-5">
          <li>Qualified and experienced medical staff</li>
          <li>24/7 emergency support available</li>
          <li>Affordable healthcare packages</li>
          <li>Comfort of treatment at your home</li>
        </ul>

      </div>

    </div>
  );
};

export default HomeCare;