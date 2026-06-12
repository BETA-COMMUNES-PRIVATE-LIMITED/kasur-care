import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const AdminLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* 🔥 MOBILE TOP BAR */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-blue-600 text-white flex items-center justify-between p-4 z-50">
        <h1 className="font-bold">Admin</h1>

        <button onClick={() => setOpen(!open)}>
          {open ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* 🔥 SIDEBAR */}
      <div
        className={`fixed md:static top-0 left-0 h-full w-64 bg-blue-600 text-white p-6 space-y-6 transform transition-transform duration-300 z-40
        ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >

        <h1 className="text-2xl font-bold mb-10">
          Admin Panel
        </h1>

        <nav className="flex flex-col gap-4">

          <Link
            to="/admin"
            onClick={() => setOpen(false)}
            className="hover:bg-blue-700 p-2 rounded"
          >
            Dashboard
          </Link>

          <Link
            to="/admin/doctors"
            onClick={() => setOpen(false)}
            className="hover:bg-blue-700 p-2 rounded"
          >
            Doctors
          </Link>

          <Link
            to="/admin/patients"
            onClick={() => setOpen(false)}
            className="hover:bg-blue-700 p-2 rounded"
          >
            Patients
          </Link>

          <Link
            to="/admin/appointments"
            onClick={() => setOpen(false)}
            className="hover:bg-blue-700 p-2 rounded"
          >
            Appointments
          </Link>

        </nav>
      </div>

      {/* 🔥 OVERLAY (mobile only) */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 md:hidden z-30"
        />
      )}

      {/* 🔥 MAIN CONTENT */}
      <div className="flex-1 md:ml-64 p-6 pt-20 md:pt-6">

        <Outlet />

      </div>

    </div>
  );
};

export default AdminLayout;