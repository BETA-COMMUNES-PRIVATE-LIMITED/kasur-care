import React, { useState } from "react";
import {
  Search,
  Upload,
  MapPin,
  Star,
  Clock3,
  CheckCircle,
  XCircle,
} from "lucide-react";

const pharmacies = [
  {
    id: 1,
    name: "Health Plus Pharmacy",
    rating: 4.8,
    distance: "1.2 KM",
    delivery: 25,
    medicineAvailable: true,
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1200",
  },
   {
    id: 2,
    name: "Health Plus Pharmacy",
    rating: 4.8,
    distance: "1.2 KM",
    delivery: 25,
    medicineAvailable: true,
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1200",
  },
  {
    id: 3,
    name: "CareWell Medical Store",
    rating: 4.6,
    distance: "2.5 KM",
    delivery: 35,
    medicineAvailable: false,
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200",
  },
  {
    id: 4,
    name: "City Pharmacy",
    rating: 4.9,
    distance: "3.1 KM",
    delivery: 20,
    medicineAvailable: true,
    image:
      "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?q=80&w=1200",
  },
   {
    id: 5,
    name: "CareWell Medical Store",
    rating: 4.6,
    distance: "2.5 KM",
    delivery: 35,
    medicineAvailable: false,
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200",
  },
];

const Pharmacy = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("nearby");

  const searchFilter = pharmacies.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const filteredPharmacies = searchFilter.filter((item) => {
    if (filter === "nearby") return parseFloat(item.distance) <= 3;
    if (filter === "open") return item.medicineAvailable;
    if (filter === "fast") return item.delivery <= 25;
    if (filter === "top") return item.rating >= 4.7;
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-50">

      {/* HERO */}
      <div className="bg-linear-to-r from-blue-600 to-cyan-500 text-white py-10 sm:py-14 px-4 sm:px-6 lg:px-10">

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              Upload Prescription & Order Medicines
            </h1>

            <p className="mt-4 text-sm sm:text-base text-blue-100">
              Find nearby pharmacies and get fast medicine delivery.
            </p>

            {/* SEARCH */}
            <div className="mt-6 bg-white rounded-xl flex items-center p-2 shadow-md">

              <Search className="text-gray-400 ml-2" size={18} />

              <input
                type="text"
                placeholder="Search pharmacy..."
                className="w-full px-3 py-2 outline-none text-sm sm:text-base"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          {/* UPLOAD CARD */}
          <div className="bg-white rounded-2xl p-5 sm:p-8 shadow-lg">

            <div className="border-2 border-dashed border-blue-300 rounded-xl p-6 sm:p-10 text-center">

              <div className="bg-blue-100 w-16 sm:w-20 h-16 sm:h-20 rounded-full flex items-center justify-center mx-auto">
                <Upload className="text-blue-600" size={30} />
              </div>

              <h3 className="text-lg sm:text-2xl font-bold mt-4 text-gray-800">
                Upload Prescription
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                PDF, JPG or PNG supported
              </p>

              <label className="inline-block mt-5 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg cursor-pointer text-sm sm:text-base transition">
                Choose File
                <input type="file" className="hidden" />
              </label>

            </div>
          </div>
        </div>
      </div>

      {/* FILTERS */}
      <div className="max-w-7xl mx-auto px-4 py-6 sm:py-10">

        <div className="flex flex-wrap gap-3 sm:gap-4">

          {["nearby", "open", "fast", "top"].map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`px-4 sm:px-5 py-2 rounded-full text-sm sm:text-base transition ${
                filter === item
                  ? "bg-blue-600 text-white"
                  : "bg-white shadow"
              }`}
            >
              {item === "nearby" && "Nearby"}
              {item === "open" && "Open Now"}
              {item === "fast" && "Fast Delivery"}
              {item === "top" && "Top Rated"}
            </button>
          ))}

        </div>
      </div>

      {/* CARDS */}
      <div className="max-w-7xl mx-auto px-4 pb-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredPharmacies.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
            >

              <img
                src={item.image}
                className="w-full h-40 sm:h-48 object-cover"
              />

              <div className="p-4 sm:p-5">

                <h2 className="text-lg sm:text-xl font-bold">
                  {item.name}
                </h2>

                <p className="text-gray-500 flex items-center gap-2 mt-2 text-sm sm:text-base">
                  <MapPin size={16} /> {item.distance}
                </p>

                <p className="text-gray-500 flex items-center gap-2 text-sm sm:text-base">
                  <Clock3 size={16} /> {item.delivery} min delivery
                </p>

                <p className="flex items-center gap-2 mt-2 text-sm sm:text-base">
                  <Star className="text-yellow-500" size={16} />
                  {item.rating}
                </p>

                {item.medicineAvailable ? (
                  <p className="text-green-600 flex items-center gap-2 mt-2 text-sm">
                    <CheckCircle size={16} /> Available
                  </p>
                ) : (
                  <p className="text-red-500 flex items-center gap-2 mt-2 text-sm">
                    <XCircle size={16} /> Out of Stock
                  </p>
                )}

                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl text-sm sm:text-base hover:bg-blue-700 transition">
                  Order Now
                </button>

              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Pharmacy;