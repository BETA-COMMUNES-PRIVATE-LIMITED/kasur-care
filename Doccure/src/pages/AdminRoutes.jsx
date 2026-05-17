import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Sidebar from './admin/layouts/Sidebar'
import Topbar from './admin/layouts/Topbar'
import AdminLayout from './admin/layouts/AdminLayout'
import Dashboard from './admin/dashboard/Dashboard'
import Patients from './admin/patients/Patients'

const AdminRoutes = () => {
  return (
   <Routes>
    <Route path= 'sidebar' element={<Sidebar/>}/>
    <Route path='topbar' element={<Topbar/>}/>
    <Route path='adminlayout' element={<AdminLayout/>}/>
    <Route path='dashboard' element={<Dashboard/>}/>  
    <Route path='patients' element={<Patients/>}/>  
   </Routes>
  )
}

export default AdminRoutes