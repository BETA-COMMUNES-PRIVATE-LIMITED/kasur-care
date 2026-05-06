import React from 'react'

const patients = [
  {
    id: 1,
    name: "Adrian Marshall",
    patientId: "#P0001",
    date: "15 Mar 2024",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Kelly Stevens",
    patientId: "#P0002",
    date: "13 Mar 2024",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
   {
    id: 3,
    name: "Kelly Stevens",
    patientId: "#P0002",
    date: "13 Mar 2024",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
   {
    id: 4,
    name: "Kelly Stevens",
    patientId: "#P0002",
    date: "13 Mar 2024",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
   {
    id: 5,
    name: "Kelly Stevens",
    patientId: "#P0002",
    date: "13 Mar 2024",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
   {
    id: 6,
    name: "Kelly Stevens",
    patientId: "#P0002",
    date: "13 Mar 2024",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 6,
    name: "Kelly Stevens",
    patientId: "#P0002",
    date: "13 Mar 2024",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

const RecentPatients = () => {
  return (
 <div className="bg-white rounded-xl shadow-sm p-4">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-lg">Recent Patients</h2>
        <button className="text-blue-500 text-sm hover:underline">
          View All
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 gap-4">
        {patients.map((p) => (
          <div
            key={p.id}
            className="bg-gray-50 rounded-xl p-3 flex items-center gap-3 hover:shadow-md transition"
          >
            <img
              src={p.img}
              alt={p.name}
              className="w-12 h-12 rounded-lg object-cover"
            />

            <div>
              <h3 className="font-medium text-sm">{p.name}</h3>
              <p className="text-xs text-blue-500">{p.patientId}</p>
              <p className="text-xs text-gray-400">
                Last Appointment {p.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentPatients