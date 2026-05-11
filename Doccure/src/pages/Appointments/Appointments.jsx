import React from "react";
import {
  Search,
  CalendarDays,
  Filter,
  MoreVertical,
  Plus,
} from "lucide-react";
import CalenderPicker from "../../components/common/CalendarPicker";
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
    patientImg:
      "https://randomuser.me/api/portraits/men/32.jpg",
    doctorImg:
      "https://randomuser.me/api/portraits/men/45.jpg",
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
    patientImg:
      "https://randomuser.me/api/portraits/women/44.jpg",
    doctorImg:
      "https://randomuser.me/api/portraits/women/50.jpg",
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
    patientImg:
      "https://randomuser.me/api/portraits/women/68.jpg",
    doctorImg:
      "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 4,
    date: "27 Mar 2025 - 02:00 PM",
    patient: "Marsha Noland",
    phone: "+1 56586 54558",
    doctor: "Dr. David Lee",
    specialty: "Gynecologist",
    mode: "Online",
    status: "Schedule",
    patientImg:
      "https://randomuser.me/api/portraits/women/33.jpg",
    doctorImg:
      "https://randomuser.me/api/portraits/men/40.jpg",
  },

  {
    id: 5,
    date: "15 Apr 2025 - 11:20 AM",
    patient: "Susan Bain",
    phone: "+1 56556 96554",
    doctor: "Dr. Sarah Johnson",
    specialty: "Orthopedic Surgeon",
    mode: "Online",
    status: "Checked In",
    patientImg:
      "https://randomuser.me/api/portraits/women/44.jpg",
    doctorImg:
      "https://randomuser.me/api/portraits/women/50.jpg",
  },
  {
    id: 6,
    date: "15 Apr 2025 - 11:20 AM",
    patient: "Susan Bain",
    phone: "+1 56556 96554",
    doctor: "Dr. Sarah Johnson",
    specialty: "Orthopedic Surgeon",
    mode: "Online",
    status: "Checked In",
    patientImg:
      "https://randomuser.me/api/portraits/women/44.jpg",
    doctorImg:
      "https://randomuser.me/api/portraits/women/50.jpg",
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
    case "Confirmed":
      return "bg-green-100 text-green-600";
    case "Schedule":
      return "bg-blue-100 text-blue-600";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

const Appointments = () => {
  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Appointment
        </h1>
        <Link to="/book-appointment">
          <button className="bg-blue-600 hover:bg-blue-700 transition cursor-pointer text-white px-5 py-3 rounded-xl flex items-center gap-2 w-fit">
            <Plus size={18} />
            New Appointment
          </button>
        </Link>
      </div>

      {/* Top Filters */}
      <div className="bg-white rounded-2xl shadow-sm p-4 mb-6">
        <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
          {/* Search */}
          <div className="relative w-full lg:w-75">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search"
              className="w-full border border-gray-200 rounded-xl py-3 pl-10 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Right Filters */}
          <div className="flex flex-wrap gap-3 cursor-pointer">
            {/* <button className="border border-gray-200 rounded-xl px-4 py-3 flex items-center gap-2 text-gray-600"> */}
            <CalenderPicker />
            {/* </button> */}

            <button className="border border-gray-200 rounded-xl px-4 py-3 flex items-center gap-2 text-gray-600">
              <Filter size={18} />
              Filters
            </button>

            <button className="border border-gray-200 rounded-xl px-4 py-3 text-gray-600">
              Sort By : Recent
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm overflow-x-auto">
        <table className="w-full min-w-250">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr className="text-left text-sm text-gray-500">
              <th className="px-6 py-4 font-semibold">Date & Time</th>
              <th className="px-6 py-4 font-semibold">Patient</th>
              <th className="px-6 py-4 font-semibold">Doctor</th>
              <th className="px-6 py-4 font-semibold">Mode</th>
              <th className="px-6 py-4 font-semibold">Status</th>
              <th className="px-6 py-4 font-semibold"></th>
            </tr>
          </thead>

          <tbody>
            {appointments.map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray-200 cursor-pointer last:border-none hover:bg-gray-50 transition"
              >
                {/* Date */}
                <td className="px-6 py-5 text-sm text-gray-700">
                  {item.date}
                </td>

                {/* Patient */}
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.patientImg}
                      alt=""
                      className="w-11 h-11 rounded-full object-cover"
                    />

                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm">
                        {item.patient}
                      </h3>

                      <p className="text-xs text-gray-500">
                        {item.phone}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Doctor */}
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.doctorImg}
                      alt=""
                      className="w-11 h-11 rounded-full object-cover"
                    />

                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm">
                        {item.doctor}
                      </h3>

                      <p className="text-xs text-gray-500">
                        {item.specialty}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Mode */}
                <td className="px-6 py-5 text-sm text-gray-600">
                  {item.mode}
                </td>

                {/* Status */}
                <td className="px-6 py-5">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusStyle(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>
                </td>

                {/* Action */}
                <td className="px-6 py-5">
                  <button className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center">
                    <MoreVertical size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Appointments;