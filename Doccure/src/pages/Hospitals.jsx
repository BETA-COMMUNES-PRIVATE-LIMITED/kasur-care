import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { RiArrowRightDoubleLine } from "react-icons/ri";

const Hospitals = () => {
  const [activeTab, setActiveTab] = useState("hospitals");
  const [search, setSearch] = useState("");

  const data = {
    hospitals: [
      { name: "City Hospital", doctors: 25 },
      { name: "Al Shifa Hospital", doctors: 40 },
      { name: "National Hospital", doctors: 32 },
      { name: "Medicare Hospital", doctors: 20 },
      { name: "City Hospital", doctors: 25 },
      { name: "Al Shifa Hospital", doctors: 40 },
      { name: "National Hospital", doctors: 32 },
      { name: "Medicare Hospital", doctors: 20 },
      { name: "City Hospital", doctors: 25 },
      { name: "Al Shifa Hospital", doctors: 40 },
      { name: "National Hospital", doctors: 32 },
      { name: "Medicare Hospital", doctors: 20 },
    ],
    clinics: [
      { name: "Family Clinic", doctors: 5 },
      { name: "Care Clinic", doctors: 8 },
      { name: "Medicare Clinic", doctors: 6 },
      { name: "Family Clinic", doctors: 5 },
      { name: "Care Clinic", doctors: 8 },
      { name: "Medicare Clinic", doctors: 6 },
      { name: "Family Clinic", doctors: 5 },
      { name: "Care Clinic", doctors: 8 },
      { name: "Medicare Clinic", doctors: 6 },
    ],
    specialities: [
      { name: "Cardiology" },
      { name: "Neurology" },
      { name: "Orthopedic" },
      { name: "Dermatology" },
      { name: "Cardiology" },
      { name: "Neurology" },
      { name: "Orthopedic" },
      { name: "Dermatology" },
      { name: "Cardiology" },
      { name: "Neurology" },
      { name: "Orthopedic" },
      { name: "Dermatology" },
    ],
  };

  // 🔍 Filter hospitals only
  const filteredHospitals = data.hospitals.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const renderContent = () => {
    if (activeTab === "hospitals") {
      return filteredHospitals.map((item, i) => (
        <div
          key={i}
          className="p-4 border border-gray-300 rounded-lg shadow-sm bg-white hover:shadow-md transition"
        >
          🏥 <span className="font-medium">{item.name}</span>
          <p className="text-sm text-gray-600">{item.doctors} Doctors</p>
        </div>
      ));
    }

    if (activeTab === "clinics") {
      return data.clinics.map((item, i) => (
        <div
          key={i}
          className="p-4 border border-gray-300 rounded-lg shadow-sm bg-white hover:shadow-md transition"
        >
          🏥 <span className="font-medium">{item.name}</span>
          <p className="text-sm text-gray-600">{item.doctors} Doctors</p>
        </div>
      ));
    }

    if (activeTab === "specialities") {
      return data.specialities.map((item, i) => (
        <div
          key={i}
          className="p-4 border border-gray-300 rounded-lg shadow-sm bg-white hover:shadow-md transition"
        >
          🧬 <span className="font-medium">{item.name}</span>
        </div>
      ));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* 🔹 Hero */}
      <div className="bg-blue-100 py-10 px-4">
        <div className="flex gap-2 justify-center items-center flex-wrap">
          <Link to="/">
            <span className="text-blue-500 text-2xl">
              <FaHome />
            </span>
          </Link>

          <RiArrowRightDoubleLine className="text-2xl text-gray-600" />
          <h2 className="text-gray-600 font-medium">Hospitals</h2>
        </div>

        <div className="text-center mt-4">
          <h1 className="text-3xl font-semibold">Hospitals</h1>
        </div>
      </div>

      {/* 🔹 Tabs + Content */}
      <div className="max-w-6xl mx-auto p-4 sm:p-6">

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 justify-center sm:justify-start mb-6">

          <button
            onClick={() => setActiveTab("hospitals")}
            className={`px-3 sm:px-4 py-2 rounded cursor-pointer ${
              activeTab === "hospitals"
                ? "bg-blue-600 text-white cursor-pointer"
                : "bg-gray-200"
            }`}
          >
            Hospitals
          </button>

          <button
            onClick={() => setActiveTab("clinics")}
            className={`px-3 sm:px-4 py-2 rounded cursor-pointer ${
              activeTab === "clinics"
                ? "bg-blue-600 text-white cursor-pointer"
                : "bg-gray-200"
            }`}
          >
            Clinics
          </button>

          <button
            onClick={() => setActiveTab("specialities")}
            className={`px-3 sm:px-4 py-2 rounded ${
              activeTab === "specialities"
                ? "bg-blue-600 text-white cursor-pointer"
                : "bg-gray-200"
            }`}
          >
            Specialities
          </button>
        </div>

        {/* 🔥 SEARCH BAR (ONLY FOR HOSPITALS) */}
        {activeTab === "hospitals" && (
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search hospitals..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}
         {/* 🔥 SEARCH BAR (ONLY FOR SPECIALITIES) */}
        {activeTab === "specialities" && (
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search specialities..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}
         {/* 🔥 SEARCH BAR (ONLY FOR CLINICS) */}
        {activeTab === "clinics" && (
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search clinics..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {renderContent()}
        </div>

      </div>
    </div>
  );
};

export default Hospitals;