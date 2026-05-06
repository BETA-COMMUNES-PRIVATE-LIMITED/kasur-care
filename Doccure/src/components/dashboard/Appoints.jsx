// components/Appointment.jsx

const appointments = [
  {
    id: 1,
    doctor: "Dr. Edalin Hendry",
    speciality: "Dentist",
    date: "21 Mar 2024 - 10:30 PM",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 2,
    doctor: "Dr. Juliet Gabriel",
    speciality: "Cardiologist",
    date: "22 Mar 2024 - 10:30 PM",
    img: "https://randomuser.me/api/portraits/women/50.jpg",
  },
];

const Appoints = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-300">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-lg">Appointment</h2>
        <div className="flex gap-3 text-xl cursor-pointer">
          <span>‹</span>
          <span>›</span>
        </div>
      </div>

      {/* Date Tabs */}
      <div className="flex gap-2 mb-4">
        {["22 Wed", "23 Thu", "24 Fri", "25 Sat"].map((day, i) => (
          <button
            key={i}
            className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-blue-50"
          >
            {day}
          </button>
        ))}
      </div>

      {/* Appointment List */}
      <div className="space-y-4">
        {appointments.map((app) => (
          <div
            key={app.id}
            className="border border-gray-300 rounded-xl p-4"
          >
            <div className="flex justify-between items-start">
              <div className="flex gap-3">
                <img
                  src={app.img}
                  alt={app.doctor}
                  className="w-12 h-12 rounded-lg"
                />
                <div>
                  <h3 className="font-medium">{app.doctor}</h3>
                  <p className="text-sm text-gray-500">
                    {app.speciality}
                  </p>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-500 mt-3">
              {app.date}
            </p>

            <div className="flex gap-3 mt-4">
              <button className="flex-1 py-2 cursor-pointer bg-gray-100 rounded-full">
                Chat
              </button>
              <button className="flex-1 py-2 cursor-pointer bg-cyan-500 text-white rounded-full">
                Attend
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appoints;