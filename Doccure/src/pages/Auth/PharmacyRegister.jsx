import React, { useState } from "react";
import { Link } from "react-router-dom";

const PharmacyRegister = () => {
  const [formData, setFormData] = useState({
    pharmacyName: "",
    pharmacistDetails: "",
    drugLicense: null,
    registrationCertificate: null,
    businessDocs: null,
    deliveryInfo: "",
    operatingInfo: "",
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
    console.log("Pharmacy Data:", formData);
    alert("Pharmacy Registered Successfully");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-3xl p-8 rounded-xl shadow-lg space-y-6"
      >
        <h2 className="text-2xl font-bold text-center">
          Pharmacy Registration Form
        </h2>

        {/* Pharmacy Name */}
        <input
          type="text"
          name="pharmacyName"
          placeholder="Pharmacy Name"
          onChange={handleChange}
          className="input"
        />

        {/* Pharmacist Details */}
        <textarea
          name="pharmacistDetails"
          placeholder="Pharmacist Details (Name, Qualification, Experience)"
          onChange={handleChange}
          className="input h-24"
        />

        {/* Documents */}
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="file"
            name="drugLicense"
            onChange={handleChange}
            className="input"
          />
          <input
            type="file"
            name="registrationCertificate"
            onChange={handleChange}
            className="input"
          />
        </div>

        <input
          type="file"
          name="businessDocs"
          onChange={handleChange}
          className="input"
        />

        {/* Delivery Info */}
        <textarea
          name="deliveryInfo"
          placeholder="Delivery Information (Home delivery, timing, coverage area)"
          onChange={handleChange}
          className="input h-24"
        />

        {/* Operating Info */}
        <textarea
          name="operatingInfo"
          placeholder="Operating Information (Opening hours, pharmacy schedule)"
          onChange={handleChange}
          className="input h-24"
        />

        {/* Submit Button */}
        <Link to="/pharmacy">
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        >
          Register Pharmacy
        </button>
        </Link>

        {/* Input Style */}
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

export default PharmacyRegister;