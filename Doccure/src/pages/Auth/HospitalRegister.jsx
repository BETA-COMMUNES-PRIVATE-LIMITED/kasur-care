import React, { useState } from "react";
import { Link } from "react-router-dom";

const HospitalRegister = () => {
  const [formData, setFormData] = useState({
    hospitalName: "",
    type: "",
    ownerName: "",
    contact: "",
    email: "",
    address: "",
    gps: "",
    ntn: "",
    beds: "",
    facilities: "",
    license: null,
    certificate: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Hospital Data:", formData);
    alert("Hospital Registered Successfully");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-4xl p-8 rounded-xl shadow-lg space-y-6"
      >
        <h2 className="text-2xl font-bold text-center">
          Hospital Registration Form
        </h2>

        {/* Hospital Info */}
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="hospitalName"
            placeholder="Hospital Name"
            onChange={handleChange}
            className="input"
          />
          <input
            type="text"
            name="type"
            placeholder="Hospital Type (Private/Public)"
            onChange={handleChange}
            className="input"
          />
        </div>

        {/* Owner Info */}
        <input
          type="text"
          name="ownerName"
          placeholder="Owner Information"
          onChange={handleChange}
          className="input w-full"
        />

        {/* Contact */}
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="contact"
            placeholder="Contact Number"
            onChange={handleChange}
            className="input"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            className="input"
          />
        </div>

        {/* Address & GPS */}
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="address"
            placeholder="Complete Address"
            onChange={handleChange}
            className="input"
          />
          <input
            type="text"
            name="gps"
            placeholder="GPS Location (Lat, Long)"
            onChange={handleChange}
            className="input"
          />
        </div>

        {/* Documents */}
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="file"
            name="certificate"
            onChange={handleChange}
            className="input"
          />
          <input
            type="file"
            name="license"
            onChange={handleChange}
            className="input"
          />
        </div>

        {/* Optional Tax */}
        <input
          type="text"
          name="ntn"
          placeholder="NTN / Tax Registration (Optional)"
          onChange={handleChange}
          className="input w-full"
        />

        {/* Beds & Facilities */}
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="number"
            name="beds"
            placeholder="Bed Capacity"
            onChange={handleChange}
            className="input"
          />
          <input
            type="text"
            name="facilities"
            placeholder="Facilities (ICU, Emergency, etc.)"
            onChange={handleChange}
            className="input"
          />
        </div>

        {/* Submit */}
       
        <Link to="/hospitals">
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        >
          Register Hospital
        </button>
         </Link>
      </form>

      {/* Tailwind input style helper */}
      <style>
        {`
          .input {
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 8px;
            width: 100%;
            outline: none;
          }
        `}
      </style>
    </div>
  );
};

export default HospitalRegister;