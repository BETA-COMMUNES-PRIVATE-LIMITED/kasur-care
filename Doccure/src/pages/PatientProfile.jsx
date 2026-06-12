import React from "react";
import { useParams, Link } from "react-router-dom";
import { patients } from  '../pages/data/patients';
import { motion } from "framer-motion";

const PatientProfile = () => {
  const { id } = useParams();

  const patient = patients.find(
    (p) => p.id === parseInt(id)
  );

  if (!patient) {
    return (
      <div className="text-center py-20 text-3xl font-bold">
        Patient Not Found
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen p-10">

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden"
      >

        {/* HEADER */}
        <div className="bg-blue-500 text-white p-6 text-center">
          <h1 className="text-3xl font-bold">
            Patient Profile
          </h1>
        </div>

        <div className="p-8 grid md:grid-cols-2 gap-10">

          {/* IMAGE SIDE */}
          <div className="text-center space-y-4">

            <img
              src={patient.image}
              alt={patient.name}
              className="w-48 h-48 mx-auto rounded-full object-cover border-4 border-blue-200"
            />

            <h2 className="text-2xl font-bold">
              {patient.name}
            </h2>

            <p className="text-gray-600">
              {patient.age} Years • {patient.gender}
            </p>

            <p className="text-blue-600 font-medium">
              Blood Group: {patient.bloodGroup}
            </p>

            <p className="text-red-500 font-medium">
              Disease: {patient.disease}
            </p>

          </div>

          {/* DETAILS SIDE */}
          <div className="space-y-4 text-gray-700">

            <p><b>Phone:</b> {patient.phone}</p>
            <p><b>Email:</b> {patient.email}</p>
            <p><b>Address:</b> {patient.address}</p>
            <p><b>Last Visit:</b> {patient.lastVisit}</p>

            <div>
              <h3 className="text-lg font-bold mt-4">
                Medical Notes
              </h3>

              <p className="text-gray-600">
                {patient.notes}
              </p>
            </div>

            <Link
              to="/patients"
              className="inline-block mt-6 bg-blue-500 text-white px-5 py-2 rounded-lg"
            >
              ← Back to Patients
            </Link>

          </div>

        </div>
      </motion.div>

    </div>
  );
};

export default PatientProfile;