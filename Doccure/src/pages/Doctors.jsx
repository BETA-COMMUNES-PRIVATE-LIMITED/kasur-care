import React from "react";
import { Link } from "react-router-dom";
import { doctors } from  '../pages/data/doctors';

const Doctors = () => {
  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-8">
        All Doctors
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        {doctors.map((doc) => (
          <div
            key={doc.id}
            className="bg-white shadow-lg rounded-xl p-4 flex gap-4 items-center"
          >

            <img
              src={doc.image}
              alt={doc.name}
              className="w-20 h-20 rounded-full object-cover"
            />

            <div className="flex-1">

              <h2 className="text-xl font-bold">
                {doc.name}
              </h2>

              <p className="text-blue-500">
                {doc.specialization}
              </p>

              <p className="text-sm text-gray-500">
                {doc.experience}
              </p>

              {/* 🔥 LINK TO DETAIL PAGE */}
              <Link
                to={`/doctors/${doc.id}`}
                className="inline-block mt-2 text-blue-600 font-medium"
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

export default Doctors;