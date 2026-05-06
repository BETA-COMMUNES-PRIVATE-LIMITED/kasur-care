import React from "react";

const appointments = [
  {
    id: "#Apt0001",
    name: "Adrian Marshall",
    type: "General",
    date: "11 Nov 2024",
    time: "10:45 AM",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: "#Apt0002",
    name: "Kelly Stevens",
    type: "Clinic Consulting",
    date: "10 Nov 2024",
    time: "11:00 AM",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: "#Apt0003",
    name: "Samuel Anderson",
    type: "General",
    date: "03 Nov 2024",
    time: "02:00 PM",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
   {
    id: "#Apt0003",
    name: "Samuel Anderson",
    type: "General",
    date: "03 Nov 2024",
    time: "02:00 PM",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
   {
    id: "#Apt0003",
    name: "Samuel Anderson",
    type: "General",
    date: "03 Nov 2024",
    time: "02:00 PM",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },

];

const AppointmentCards = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-12 border border-gray-300 w-full max-w-full">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-12 ">
        <h2 className="text-xl font-semibold">Appointment</h2>
        <select className="text-sm border  border-gray-400  cursor-pointer rounded-lg px-2 py-1 outline-none">
          <option>Today</option>
          <option>This Month</option>
          <option>Last 7 Days</option>
        </select>
      </div>

      {/* List */}
      <div className="space-y-4">
        {appointments.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b border-gray-300 pb-3"
          >
            {/* Left */}
            <div className="flex items-center gap-3">
              <img
                src={item.image}
                alt={item.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="space-y-2">
                <p className="text-xs text-gray-400">{item.id}</p>
                <h3 className="text-sm font-medium">{item.name}</h3>
                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded">
                  {item.type}
                </span>
              </div>
            </div>

            {/* Right */}
            <div className="text-right">
              <p className="text-xs text-gray-500">
                {item.date} <br /> {item.time}
              </p>

              {/* Actions */}
              <div className="flex gap-2 justify-end mt-1">
                <button className="w-6 h-6 flex items-center justify-center rounded-full bg-green-100 text-green-600 text-xs">
                  ✓
                </button>
                <button className="w-6 h-6 flex items-center justify-center rounded-full bg-red-100 text-red-600 text-xs">
                  ✕
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentCards;