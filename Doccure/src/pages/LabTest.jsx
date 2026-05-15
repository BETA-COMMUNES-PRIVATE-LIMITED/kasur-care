import React, { useState } from "react";
import {
  Search,
  Upload,
  MapPin,
  Star,
  Clock3,
  FlaskConical,
  CalendarDays,
  CheckCircle,
  Home,
} from "lucide-react";

const labs = [
  {
    id: 1,
    name: "City Diagnostic Lab",
    rating: 4.9,
    distance: "1.5 KM",
    timing: "Open till 11 PM",
    homeSample: true,
    reports: true,
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Health Care Lab",
    rating: 4.7,
    distance: "2.8 KM",
    timing: "Open till 10 PM",
    homeSample: false,
    reports: true,
    image:
      "https://images.unsplash.com/photo-1581595219315-a187dd40c322?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Advanced Medical Lab",
    rating: 4.8,
    distance: "3.2 KM",
    timing: "24 Hours Service",
    homeSample: true,
    reports: true,
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
  },
];

const LabTest = () => {
  const [search, setSearch] = useState("");

  //  Search Filter
  const filteredLabs = labs.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  //  Booking Function
  const handleBooking = (name) => {
    alert(`Appointment booked at ${name}`);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/*  Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-14 px-4 md:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

          {/* Left */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Book Lab Tests & Upload Prescription
            </h1>

            <p className="mt-5 text-lg text-cyan-100">
              Find nearby diagnostic labs, upload prescriptions,
              and book tests easily from your home.
            </p>

            {/* Search */}
            <div className="mt-8 bg-white rounded-2xl flex items-center p-2 shadow-xl">
              <Search className="text-gray-400 ml-2" size={20} />

              <input
                type="text"
                placeholder="Search labs or tests..."
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
            <div className="border-2 border-dashed border-cyan-300 rounded-2xl p-10 text-center">

              <div className="bg-cyan-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <Upload className="text-blue-400" size={35} />
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mt-5">
                Upload Test Prescription
              </h3>

              <p className="text-gray-500 mt-2">
                Upload PDF, JPG, or PNG file
              </p>

              <input
                type="file"
                className="hidden"
                id="labPrescription"
              />

              <label
                htmlFor="labPrescription"
                className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl cursor-pointer transition"
              >
                Choose File
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* 🔍 Filters */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-10">
        <div className="flex flex-wrap gap-4">

          <button className="bg-blue-600 text-white px-5 py-2 rounded-full">
            Nearby Labs
          </button>

          <button className="bg-white shadow px-5 py-2 rounded-full">
            Home Sampling
          </button>

          <button className="bg-white shadow px-5 py-2 rounded-full">
            Open Now
          </button>

          <button className="bg-white shadow px-5 py-2 rounded-full">
            Top Rated
          </button>

        </div>
      </div>

      {/*  Lab Cards */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 pb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredLabs.map((item) => (
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

                {/* Timing */}
                <div className="mt-2 flex items-center gap-2 text-gray-500">
                  <Clock3 size={18} />
                  <span>{item.timing}</span>
                </div>

                {/* Home Sampling */}
                {item.homeSample && (
                  <div className="mt-4 flex items-center gap-2 text-green-600 font-semibold">
                    <Home size={18} />
                    Home Sample Available
                  </div>
                )}

                {/* Reports */}
                {item.reports && (
                  <div className="mt-2 flex items-center gap-2 text-blue-600 font-semibold">
                    <CheckCircle size={18} />
                    Online Reports Available
                  </div>
                )}

                {/* Buttons */}
                <div className="mt-6 flex gap-3">

                  <button className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-50 py-3 rounded-xl font-semibold transition">
                    <FlaskConical size={18} className="inline mr-2" />
                    Tests
                  </button>

                  <button
                    onClick={() => handleBooking(item.name)}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
                  >
                    <CalendarDays size={18} />
                    Book
                  </button>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*  Bottom CTA */}
      <div className="bg-blue-600 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold">
            Book Your Lab Test Today
          </h2>

          <p className="mt-4 text-cyan-100 text-lg">
            Upload prescriptions and get fast diagnostic services
            from trusted labs near your location.
          </p>

          <button className="mt-8 bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-2xl font-bold transition">
            Upload Prescription
          </button>

        </div>
      </div>
    </div>
  );
};

export default LabTest;