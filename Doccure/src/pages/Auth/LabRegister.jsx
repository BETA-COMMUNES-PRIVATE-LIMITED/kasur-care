import React, { useState } from "react";
import { Link } from "react-router-dom";

const LabRegister = () => {
  const [formData, setFormData] = useState({
    labName: "",
    ownerDetails: "",
    license: null,
    cnic: null,
    availableTests: "",
    homeSample: false,
    reportDelivery: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Lab Data:", formData);
    alert("Laboratory Registered Successfully");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-3xl p-8 rounded-xl shadow-lg space-y-6"
      >
        <h2 className="text-2xl font-bold text-center">
          Laboratory Registration Form
        </h2>

        {/* Lab Name */}
        <input
          type="text"
          name="labName"
          placeholder="Laboratory Name"
          onChange={handleChange}
          className="input"
        />

        {/* Owner Details */}
        <textarea
          name="ownerDetails"
          placeholder="Owner Details"
          onChange={handleChange}
          className="input h-24"
        />

        {/* License + CNIC */}
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="file"
            name="license"
            onChange={handleChange}
            className="input"
          />
          <input
            type="file"
            name="cnic"
            onChange={handleChange}
            className="input"
          />
        </div>

        {/* Available Tests */}
        <input
          type="text"
          name="availableTests"
          placeholder="Available Tests (e.g. Blood, X-Ray, MRI)"
          onChange={handleChange}
          className="input"
        />

        {/* Home Sample Collection */}
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="homeSample"
            onChange={handleChange}
          />
          Home Sample Collection Available
        </label>

        {/* Report Delivery */}
        <select
          name="reportDelivery"
          onChange={handleChange}
          className="input"
        >
          <option value="">Select Report Delivery Method</option>
          <option value="online">Online</option>
          <option value="email">Email</option>
          <option value="physical">Physical Copy</option>
          <option value="all">All Methods</option>
        </select>

        {/* Submit */}
        <Link to="/labtest">
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        >
          Register Laboratory
        </button>
        </Link>

        {/* Input style */}
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
      </form>
    </div>
  );
};

export default LabRegister;