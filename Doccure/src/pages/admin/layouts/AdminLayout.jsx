import React from 'react'
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
   const [open, setOpen] = useState(false);
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar open={open} setOpen={setOpen} />
      <div className="flex-1 md:ml-64">
        <Topbar setOpen={setOpen}/>
         <div className="p-4">
          <Outlet />
        </div>

      </div>

    </div>
  )
}

export default AdminLayout