import React from "react";
import {
  Search,
  Filter,
  MoreVertical,
  Plus,
} from "lucide-react";
import { Link } from "react-router-dom";

const appointments = [
  {
    id: 1,
    date: "30 Apr 2025 - 09:30 AM",
    patient: "Alberto Ripley",
    phone: "+1 56556 54585",
    doctor: "Dr. Mick Thompson",
    specialty: "Cardiologist",
    mode: "In-person",
    status: "Checked Out",
    patientImg: "https://randomuser.me/api/portraits/men/32.jpg",
    doctorImg: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 2,
    date: "15 Apr 2025 - 11:20 AM",
    patient: "Susan Bain",
    phone: "+1 56556 96554",
    doctor: "Dr. Sarah Johnson",
    specialty: "Orthopedic Surgeon",
    mode: "Online",
    status: "Checked In",
    patientImg: "https://randomuser.me/api/portraits/women/44.jpg",
    doctorImg: "https://randomuser.me/api/portraits/women/50.jpg",
  },
  {
    id: 3,
    date: "02 Apr 2025 - 08:15 AM",
    patient: "Carol Lam",
    phone: "+1 56556 56647",
    doctor: "Dr. Emily Carter",
    specialty: "Pediatrician",
    mode: "In-Person",
    status: "Cancelled",
    patientImg: "https://randomuser.me/api/portraits/women/68.jpg",
    doctorImg: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const getStatusStyle = (status) => {
  switch (status) {
    case "Checked Out":
      return "bg-purple-100 text-purple-600";
    case "Checked In":
      return "bg-yellow-100 text-yellow-600";
    case "Cancelled":
      return "bg-red-100 text-red-600";
    case "Schedule":
      return "bg-blue-100 text-blue-600";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

const Appointments = () => {
  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 lg:p-8">

      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
          Appointment
        </h1>

        <Link to="/book-appointment">
          <button className="bg-blue-600 text-white px-4 py-3 rounded-xl flex items-center gap-2 w-full sm:w-auto justify-center">
            <Plus size={18} />
            New Appointment
          </button>
        </Link>
      </div>

      {/* FILTER BAR */}
      <div className="bg-white rounded-2xl shadow p-4 mb-6">
        <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">

          {/* SEARCH */}
          <div className="relative w-full lg:w-80">
            <Search className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search"
              className="w-full border rounded-xl py-3 pl-10 pr-4 outline-none"
            />
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-3">
            <button className="border px-4 py-3 rounded-xl flex items-center gap-2">
              <Filter size={18} />
              Filters
            </button>

            <button className="border px-4 py-3 rounded-xl">
              Sort By : Recent
            </button>
          </div>
        </div>
      </div>

      {/* ===================== DESKTOP TABLE ===================== */}
      <div className="hidden md:block bg-white rounded-2xl shadow overflow-x-auto">
        <table className="w-full min-w-225">
          <thead className="bg-gray-50">
            <tr className="text-left text-sm text-gray-500">
              <th className="p-4">Date</th>
              <th className="p-4">Patient</th>
              <th className="p-4">Doctor</th>
              <th className="p-4">Mode</th>
              <th className="p-4">Status</th>
              <th className="p-4"></th>
            </tr>
          </thead>

          <tbody>
            {appointments.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className="p-4 text-sm">{item.date}</td>

                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <img src={item.patientImg} className="w-10 h-10 rounded-full" />
                    <div>
                      <p className="font-semibold text-sm">{item.patient}</p>
                      <p className="text-xs text-gray-500">{item.phone}</p>
                    </div>
                  </div>
                </td>

                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <img src={item.doctorImg} className="w-10 h-10 rounded-full" />
                    <div>
                      <p className="font-semibold text-sm">{item.doctor}</p>
                      <p className="text-xs text-gray-500">{item.specialty}</p>
                    </div>
                  </div>
                </td>

                <td className="p-4 text-sm">{item.mode}</td>

                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-xs ${getStatusStyle(item.status)}`}>
                    {item.status}
                  </span>
                </td>

                <td className="p-4">
                  <MoreVertical size={18} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ===================== MOBILE CARDS ===================== */}
      <div className="md:hidden space-y-4">

        {appointments.map((item) => (
          <div key={item.id} className="bg-white shadow rounded-2xl p-4">

            <p className="text-sm text-gray-500">{item.date}</p>

            {/* PATIENT */}
            <div className="flex items-center gap-3 mt-3">
              <img src={item.patientImg} className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-semibold">{item.patient}</p>
                <p className="text-xs text-gray-500">{item.phone}</p>
              </div>
            </div>

            {/* DOCTOR */}
            <div className="flex items-center gap-3 mt-3">
              <img src={item.doctorImg} className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-semibold">{item.doctor}</p>
                <p className="text-xs text-gray-500">{item.specialty}</p>
              </div>
            </div>

            {/* MODE + STATUS */}
            <div className="flex justify-between items-center mt-4">
              <p className="text-sm">{item.mode}</p>

              <span className={`px-3 py-1 rounded-full text-xs ${getStatusStyle(item.status)}`}>
                {item.status}
              </span>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Appointments;