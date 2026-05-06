import { Heart } from "lucide-react";
const doctors = [
  {
    id: 1,
    name: "Dr. Edalin",
    speciality: "Endodontists",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 2,
    name: "Dr. Maloney",
    speciality: "Cardiologist",
    img: "https://randomuser.me/api/portraits/women/50.jpg",
  },
  {
    id: 3,
    name: "Dr. Wayne",
    speciality: "Dental Specialist",
    img: "https://randomuser.me/api/portraits/men/60.jpg",
  },
  {
    id: 4,
    name: "Dr. Marla",
    speciality: "Endodontists",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const BookAppointments = () => {
  return (
    <div>
    <div className="bg-linear-to-r from-indigo-600 to-blue-600 text-white rounded-xl p-5 flex justify-between items-center">
      
      <div>
        <p className="text-sm opacity-80">Book a new</p>
        <h2 className="text-xl font-semibold">Appointment</h2>
      </div>

      <button className="bg-white text-blue-600 px-4 py-2 rounded-full font-medium hover:bg-gray-100">
        +
      </button>
    </div>
     <div className="bg-white rounded-xl shadow-sm p-4">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-lg">Favourites</h2>
        <button className="text-blue-500 text-sm hover:underline">
          View All
        </button>
      </div>

      {/* Doctor List */}
      <div className="space-y-3">
        {doctors.map((doc) => (
          <div
            key={doc.id}
            className="flex items-center justify-between bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition"
          >
            
            {/* Left */}
            <div className="flex items-center gap-3">
              <img
                src={doc.img}
                alt={doc.name}
                className="w-10 h-10 rounded-lg object-cover"
              />

              <div>
                <h3 className="text-sm font-medium">{doc.name}</h3>
                <p className="text-xs text-gray-500">
                  {doc.speciality}
                </p>
              </div>
            </div>

            {/* Right Icon */}
            <button className="p-2 rounded-full bg-white shadow hover:bg-red-50">
              <Heart size={16} className="text-red-500" />
            </button>

          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default BookAppointments;