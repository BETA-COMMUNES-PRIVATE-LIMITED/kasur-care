import React from "react";
import {
  CalendarDays,
  Clock3,
  User,
  Building2,
  Stethoscope,
} from "lucide-react";
import { Link } from "react-router-dom";

const BookAppointment = () => {
  return (
    <div className="bg-[#f5f6fa] min-h-screen p-4 md:p-8">
      {/* Main Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">

        {/* Heading */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Book Appointment
          </h2>
        </div>

        {/* Appointment ID */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Appointment ID *
          </label>

          <input
            type="text"
            value="AP234354"
            readOnly
            className="w-full border border-gray-200 rounded-lg px-4 py-3 bg-gray-50 outline-none"
          />
        </div>

        {/* Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Patient */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Patient *
            </label>

            <div className="relative">
              <User
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <select className="w-full border border-gray-200 rounded-lg py-3 pl-10 pr-4 outline-none">
                <option>Select</option>
                <option>Ali Ahmed</option>
                <option>Sara Khan</option>
              </select>
            </div>
          </div>

          {/* Department */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Department *
            </label>

            <div className="relative">
              <Building2
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <select className="w-full border border-gray-200 rounded-lg py-3 pl-10 pr-4 outline-none">
                <option>Select</option>
                <option>Cardiology</option>
                <option>Neurology</option>
              </select>
            </div>
          </div>

          {/* Doctor */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Doctor *
            </label>

            <div className="relative">
              <Stethoscope
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <select className="w-full border border-gray-200 rounded-lg py-3 pl-10 pr-4 outline-none">
                <option>Select</option>
                <option>Dr. John</option>
                <option>Dr. Smith</option>
              </select>
            </div>
          </div>

          {/* Appointment Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Appointment Type *
            </label>

            <select className="w-full border border-gray-200 rounded-lg py-3 px-4 outline-none">
              <option>Select</option>
              <option>Online</option>
              <option>Physical</option>
            </select>
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date of Appointment *
            </label>

            <div className="relative">
              <CalendarDays
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="date"
                className="w-full border border-gray-200 rounded-lg py-3 pl-10 pr-4 outline-none"
              />
            </div>
          </div>

          {/* Time */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Time *
            </label>

            <div className="relative">
              <Clock3
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="time"
                className="w-full border border-gray-200 rounded-lg py-3 pl-10 pr-4 outline-none"
              />
            </div>
          </div>
        </div>

        {/* Reason */}
        <div className="mt-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Appointment Reason *
          </label>

          <textarea
            rows="4"
            placeholder="Write here..."
            className="w-full border border-gray-200 rounded-lg p-4 outline-none resize-none"
          ></textarea>
        </div>

        {/* Status */}
        <div className="mt-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Status *
          </label>

          <select className="w-full border border-gray-200 rounded-lg py-3 px-4 outline-none">
            <option>Select</option>
            <option>Pending</option>
            <option>Confirmed</option>
            <option>Cancelled</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-8">
          <button className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition">
            Cancel
          </button>
          <Link
            to="/appointments"
          >



            <button className="px-6 py-3 rounded-lg bg-blue-600 cursor-pointer text-white hover:bg-blue-700 transition">
              Create Appointment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;