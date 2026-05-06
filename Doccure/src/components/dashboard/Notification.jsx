

import {
  Bell,
  Star,
  Calendar,
  DollarSign,
} from "lucide-react";

const notifications = [
  {
    id: 1,
    text: "Booking Confirmed on 21 Mar 2024 10:30 AM",
    time: "Just Now",
    icon: <Bell className="text-purple-500" size={16} />,
  },
  {
    id: 2,
    text: "You have a New Review for your Appointment",
    time: "5 Days ago",
    icon: <Star className="text-blue-500" size={16} />,
  },
  {
    id: 3,
    text: "You have Appointment with Ahmed by 01:20 PM",
    time: "1:25 PM",
    icon: <Calendar className="text-red-500" size={16} />,
  },
  {
    id: 4,
    text: "Sent an amount of $200 for an Appointment",
    time: "2 Days ago",
    icon: <DollarSign className="text-yellow-500" size={16} />,
  },
];

const Notification = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-lg">Notifications</h2>
        <button className="text-blue-500 text-sm hover:underline">
          View All
        </button>
      </div>

      {/* List */}
      <div className="space-y-3">
        {notifications.map((n) => (
          <div
            key={n.id}
            className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition"
          >
            <div className="bg-white p-2 rounded-full shadow-sm">
              {n.icon}
            </div>

            <div>
              <p className="text-sm text-gray-700">{n.text}</p>
              <span className="text-xs text-gray-400">
                {n.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;