import React, { useState } from "react";
import {
  Search,
  Upload,
  MapPin,
  Star,
  Clock3,
  ShoppingCart,
  Repeat,
  CheckCircle,
  XCircle,
} from "lucide-react";

const pharmacies = [
  {
    id: 1,
    name: "Health Plus Pharmacy",
    rating: 4.8,
    distance: "1.2 KM",
    delivery: "Delivery in 25 mins",
    medicineAvailable: true,
    repeatOrder: true,
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "CareWell Medical Store",
    rating: 4.6,
    distance: "2.5 KM",
    delivery: "Delivery in 35 mins",
    medicineAvailable: false,
    repeatOrder: true,
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "City Pharmacy",
    rating: 4.9,
    distance: "3.1 KM",
    delivery: "Delivery in 20 mins",
    medicineAvailable: true,
    repeatOrder: false,
    image:
      "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?q=80&w=1200&auto=format&fit=crop",
  },
];

const Pharmacy = () => {
  const [search, setSearch] = useState("");

  // 🔍 Search Filter
  const filteredPharmacies = pharmacies.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  // 🔄 Repeat Order
  const handleRepeatOrder = (name) => {
    alert(`Repeat Order placed from ${name}`);
  };

  // 🛒 Order Medicine
  const handleOrder = (name) => {
    alert(`Medicine Ordered from ${name}`);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/*  Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-14 px-4 md:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

          {/* Left */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Upload Prescription & Order Medicines
            </h1>

            <p className="mt-5 text-lg text-blue-100">
              Find nearby pharmacies, upload your prescription PDF,
              and get medicines delivered quickly to your doorstep.
            </p>

            {/* Search */}
            <div className="mt-8 bg-white rounded-2xl flex items-center p-2 shadow-xl">
              <Search className="text-gray-400 ml-2" size={20} />

              <input
                type="text"
                placeholder="Search medicines or pharmacy..."
                className="w-full outline-none px-3 py-2 text-gray-700"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition">
                Search
              </button>
            </div>
          </div>

          {/* Upload Card */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <div className="border-2 border-dashed border-blue-300 rounded-2xl p-10 text-center">

              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <Upload className="text-blue-600" size={35} />
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mt-5">
                Upload Prescription
              </h3>

              <p className="text-gray-500 mt-2">
                Upload PDF, JPG, or PNG file
              </p>

              <input
                type="file"
                className="hidden"
                id="prescription"
              />

              <label
                htmlFor="prescription"
                className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl cursor-pointer transition"
              >
                Choose File
              </label>
            </div>
          </div>
        </div>
      </div>

      {/*  Filters */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-10">
        <div className="flex flex-wrap gap-4">

          <button className="bg-blue-600 text-white px-5 py-2 rounded-full">
            Nearby
          </button>

          <button className="bg-white shadow px-5 py-2 rounded-full">
            Open Now
          </button>

          <button className="bg-white shadow px-5 py-2 rounded-full">
            Fast Delivery
          </button>

          <button className="bg-white shadow px-5 py-2 rounded-full">
            Top Rated
          </button>

        </div>
      </div>

      {/*  Pharmacy Cards */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 pb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredPharmacies.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden shadow hover:shadow-2xl transition duration-300"
            >

              {/* Image */}
              <div className="h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">

                {/* Top */}
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-800">
                    {item.name}
                  </h2>

                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star size={18} fill="currentColor" />

                    <span className="font-semibold text-gray-700">
                      {item.rating}
                    </span>
                  </div>
                </div>

                {/* Distance */}
                <div className="mt-4 flex items-center gap-2 text-gray-500">
                  <MapPin size={18} />
                  <span>{item.distance} Away</span>
                </div>

                {/* Delivery */}
                <div className="mt-2 flex items-center gap-2 text-gray-500">
                  <Clock3 size={18} />
                  <span>{item.delivery}</span>
                </div>

                {/* Medicine Availability */}
                <div className="mt-4">
                  {item.medicineAvailable ? (
                    <div className="flex items-center gap-2 text-green-600 font-semibold">
                      <CheckCircle size={18} />
                      Medicine Available
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-red-500 font-semibold">
                      <XCircle size={18} />
                      Out of Stock
                    </div>
                  )}
                </div>

                {/* Repeat Order */}
                {item.repeatOrder && (
                  <button
                    onClick={() => handleRepeatOrder(item.name)}
                    className="mt-4 w-full border border-blue-600 text-blue-600 hover:bg-blue-50 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
                  >
                    <Repeat size={18} />
                    Repeat Order
                  </button>
                )}

                {/* Main Buttons */}
                <div className="mt-6 flex gap-3">

                  <button className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-50 py-3 rounded-xl font-semibold transition">
                    View Details
                  </button>

                  <button
                    onClick={() => handleOrder(item.name)}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
                  >
                    <ShoppingCart size={18} />
                    Order
                  </button>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔵 Bottom CTA */}
      <div className="bg-blue-600 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold">
            Need Medicines Urgently?
          </h2>

          <p className="mt-4 text-blue-100 text-lg">
            Upload your prescription and receive medicines from nearby
            pharmacies quickly and safely.
          </p>

          <button className="mt-8 bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-2xl font-bold transition">
            Upload Prescription
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pharmacy;