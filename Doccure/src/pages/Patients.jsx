import React from "react";
import { Link } from "react-router-dom";
import { patients } from  '../pages/data/patients';
import { motion } from "framer-motion";

const Patients = () => {
  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-8">
        All Patients
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        {patients.map((p) => (
          <div
            key={p.id}
            className="bg-white shadow-lg rounded-xl p-4 flex gap-4 items-center"
          >

            <img
              src={p.image}
              alt={p.name}
              className="w-20 h-20 rounded-full object-cover"
            />

            <div className="flex-1">

              <h2 className="text-xl font-bold">
                {p.name}
              </h2>

              <p className="text-gray-600">
                {p.disease}
              </p>

              <p className="text-sm text-gray-500">
                {p.age} Years • {p.gender}
              </p>

              {/* 🔥 VIEW PROFILE BUTTON */}
              <Link
                to={`/patients/${p.id}`}
                className="inline-block mt-2 text-blue-500 font-medium"
              >
                View Profile →
              </Link>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Patients;