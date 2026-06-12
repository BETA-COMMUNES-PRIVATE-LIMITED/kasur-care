import React from "react";
import { useParams, Link } from "react-router-dom";
import { doctors } from '../pages/data/doctors';

const DoctorProfile = () => {
  const { id } = useParams();

  const doctor = doctors.find(
    (d) => d.id === Number(id)
  );

  if (!doctor) {
    return (
      <div className="text-center py-20 text-3xl font-bold">
        Doctor Not Found
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen p-10">

      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8">

        {/* IMAGE + NAME */}
        <div className="text-center">

          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-blue-200"
          />

          <h1 className="text-3xl font-bold mt-4">
            {doctor.name}
          </h1>

          <p className="text-blue-500 font-semibold">
            {doctor.specialization}
          </p>

          <p className="text-gray-600 mt-1">
            {doctor.experience}
          </p>

        </div>

        {/* DETAILS */}
        <div className="mt-8 space-y-3 text-gray-700">

          <p><b>Phone:</b> {doctor.phone}</p>
          <p><b>Email:</b> {doctor.email}</p>
          <p><b>Hospital:</b> {doctor.hospital}</p>
          <p><b>Location:</b> {doctor.location}</p>

          <div className="mt-4">
            <h3 className="font-bold text-lg">
              About Doctor
            </h3>
            <p className="text-gray-600">
              {doctor.about}
            </p>
          </div>

        </div>

        {/* BACK BUTTON */}
        <div className="mt-8 gap-4 flex justify-center">

          <Link
            to="/doctors"
            className="bg-blue-500 text-white px-5 py-2 rounded-lg"
          >
            ← Back to Doctors
          </Link>
          <Link
            to="/Appointments"
            className="bg-blue-500 text-white px-5 py-2 rounded-lg"
          >
            ← Book Appointments
          </Link>

        </div>

      </div>

    </div>
  );
};

export default DoctorProfile;