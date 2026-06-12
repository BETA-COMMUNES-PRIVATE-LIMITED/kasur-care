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
    distance: 1.5,
    timing: "Open till 11 PM",
    open: true,
    homeSample: true,
    reports: true,
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Health Care Lab",
    rating: 4.7,
    distance: 2.8,
    timing: "Open till 10 PM",
    open: false,
    homeSample: false,
    reports: true,
    image:
      "https://images.unsplash.com/photo-1581595219315-a187dd40c322?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Advanced Medical Lab",
    rating: 4.8,
    distance: 3.2,
    timing: "24 Hours Service",
    open: true,
    homeSample: true,
    reports: true,
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
  },
];

const LabTest = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("nearby");

  // SEARCH FILTER
  const searchData = labs.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  // MAIN FILTER LOGIC
  const filteredLabs = searchData.filter((item) => {
    if (filter === "nearby") return item.distance <= 3;

    if (filter === "open") return item.open === true;

    if (filter === "fast") return item.homeSample === true;

    if (filter === "top") return item.rating >= 4.8;

    return true;
  });

  const handleBooking = (name) => {
    alert(`Appointment booked at ${name}`);
  };

  return (
    <div className="min-h-screen bg-slate-50">

      {/* HERO SECTION */}
      <div className="bg-linear-to-r from-blue-600 to-cyan-500 text-white py-10 sm:py-14 px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* LEFT */}
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Book Lab Tests & Upload Prescription
            </h1>

            <p className="mt-4 sm:mt-5 text-sm sm:text-base text-cyan-100">
              Find nearby labs, upload prescription and book tests easily.
            </p>

            {/* SEARCH */}
            <div className="mt-6 sm:mt-8 bg-white rounded-2xl flex items-center p-2 shadow-xl">
              <Search className="text-gray-400 ml-2" size={20} />

              <input
                type="text"
                placeholder="Search labs..."
                className="w-full outline-none px-3 py-2 text-gray-700"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <button className="bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-xl">
                Search
              </button>
            </div>
          </div>

          {/* UPLOAD */}
          <div className="bg-white rounded-3xl p-5 sm:p-8 shadow-2xl">
            <div className="border-2 border-dashed border-cyan-300 rounded-2xl p-6 sm:p-10 text-center">

              <Upload className="text-blue-500 mx-auto" size={40} />

              <h3 className="text-lg sm:text-2xl font-bold mt-4">
                Upload Prescription
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                PDF, JPG, PNG supported
              </p>

              <input type="file" id="lab" className="hidden" />

              <label
                htmlFor="lab"
                className="mt-5 inline-block bg-blue-600 text-white px-6 py-3 rounded-xl cursor-pointer"
              >
                Choose File
              </label>
            </div>
          </div>

        </div>
      </div>

      {/* FILTER BUTTONS */}
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-wrap gap-3">

        <button
          onClick={() => setFilter("nearby")}
          className={`px-5 py-2 rounded-full ${
            filter === "nearby" ? "bg-blue-600 text-white" : "bg-white shadow"
          }`}
        >
          Nearby Labs
        </button>

        <button
          onClick={() => setFilter("fast")}
          className={`px-5 py-2 rounded-full ${
            filter === "fast" ? "bg-blue-600 text-white" : "bg-white shadow"
          }`}
        >
          Home Sampling
        </button>

        <button
          onClick={() => setFilter("open")}
          className={`px-5 py-2 rounded-full ${
            filter === "open" ? "bg-blue-600 text-white" : "bg-white shadow"
          }`}
        >
          Open Now
        </button>

        <button
          onClick={() => setFilter("top")}
          className={`px-5 py-2 rounded-full ${
            filter === "top" ? "bg-blue-600 text-white" : "bg-white shadow"
          }`}
        >
          Top Rated
        </button>

      </div>

      {/* CARDS */}
      <div className="max-w-7xl mx-auto px-4 pb-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {filteredLabs.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow hover:shadow-xl transition"
          >

            <img
              src={item.image}
              className="w-full h-48 object-cover rounded-t-2xl"
            />

            <div className="p-5">

              <h2 className="text-lg font-bold">{item.name}</h2>

              <p className="flex items-center gap-2 text-gray-500 mt-2">
                <MapPin size={16} /> {item.distance} KM
              </p>

              <p className="flex items-center gap-2 text-gray-500 mt-1">
                <Clock3 size={16} /> {item.timing}
              </p>

              <p className="flex items-center gap-2 mt-2">
                <Star size={16} className="text-yellow-500" />
                {item.rating}
              </p>

              {item.homeSample && (
                <p className="text-green-600 flex items-center gap-2 mt-2">
                  <Home size={16} /> Home Sample
                </p>
              )}

              {item.reports && (
                <p className="text-blue-600 flex items-center gap-2 mt-1">
                  <CheckCircle size={16} /> Reports Available
                </p>
              )}

              <button
                onClick={() => handleBooking(item.name)}
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl"
              >
                Book Test
              </button>

            </div>
          </div>
        ))}

      </div>

    </div>
  );
};

export default LabTest;