import React, { useState } from "react";

const ReportsSection = () => {
  const [activeTab, setActiveTab] = useState("appointments");

  const tabs = [
    { id: "appointments", label: "Appointments" },
    { id: "records", label: "Medical Records" },
    { id: "prescriptions", label: "Prescriptions" },
    { id: "invoices", label: "Invoices" },
  ];

  const data = [
    {
      id: "#AP1236",
      doctor: "Dr. Robert Womack",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      date: "21 Mar 2024, 10:30 AM",
      type: "Video call",
      status: "Upcoming",
    },
    {
      id: "#AP3656",
      doctor: "Dr. Patricia Cassidy",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      date: "28 Mar 2024, 11:40 AM",
      type: "Clinic Visit",
      status: "Completed",
    },
    {
      id: "#AP1246",
      doctor: "Dr. Kevin Evans",
      img: "https://randomuser.me/api/portraits/men/46.jpg",
      date: "02 Apr 2024, 09:20 AM",
      type: "Audio Call",
      status: "Completed",
    },
    {
      id: "#AP6985",
      doctor: "Dr. Lisa Keating",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
      date: "15 Apr 2024, 04:10 PM",
      type: "Clinic Visit",
      status: "Cancelled",
    },
  ];

  const statusColor = (status) => {
    if (status === "Upcoming") return "bg-purple-100 text-purple-600";
    if (status === "Completed") return "bg-green-100 text-green-600";
    if (status === "Cancelled") return "bg-red-100 text-red-600";
  };

  return (
    <div className="bg-white rounded-xl border border-gray-300 shadow p-6 w-full">

      {/*  Title */}
      <h2 className="text-xl font-semibold mb-4">Reports</h2>

      {/*  Tabs */}
      <div className="flex flex-wrap gap-3  mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition ${
              activeTab === tab.id
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 📊 Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left min-w-150">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Doctor</th>
              <th className="p-3">Date</th>
              <th className="p-3">Type</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border-b border-gray-300 hover:bg-gray-50 transition">

                {/* ID */}
                <td className="p-3 text-blue-600 font-medium">
                  {item.id}
                </td>

                {/* Doctor with Image */}
                <td className="p-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.img}
                      alt={item.doctor}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <span className="font-medium text-gray-800">
                      {item.doctor}
                    </span>
                  </div>
                </td>

                {/* Date */}
                <td className="p-3">{item.date}</td>

                {/* Type */}
                <td className="p-3">{item.type}</td>

                {/* Status */}
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportsSection;