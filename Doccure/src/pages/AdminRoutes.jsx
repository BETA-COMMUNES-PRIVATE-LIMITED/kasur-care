import React from "react";
import { Routes, Route } from "react-router-dom";

import AdminLayout from "./admin/AdminLayout";
import AdminDashboard from "./admin/AdminDashboard";
import AdminDoctors from "./admin/AdminDoctors";
import AdminPatients from "./admin/AdminPatients";
import AdminAppointments from "./admin/AdminAppointments";

const AdminRoutes = () => {
  return (
    <Routes>

      <Route element={<AdminLayout />}>

        <Route index element={<AdminDashboard />} />

        <Route path="doctors" element={<AdminDoctors />} />

        <Route path="patients" element={<AdminPatients />} />

        <Route path="appointments" element={<AdminAppointments />} />

      </Route>

    </Routes>
  );
};

export default AdminRoutes;