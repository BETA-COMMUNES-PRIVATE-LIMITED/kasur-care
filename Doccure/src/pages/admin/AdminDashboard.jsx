import React from "react";

const AdminDashboard = () => {
  return (
    <div>

      <h1 className="text-2xl md:text-3xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-bold">Doctors</h2>
          <p className="text-2xl text-blue-600">12</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-bold">Patients</h2>
          <p className="text-2xl text-green-600">45</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-bold">Appointments</h2>
          <p className="text-2xl text-purple-600">18</p>
        </div>

      </div>

    </div>
  );
};

export default AdminDashboard;