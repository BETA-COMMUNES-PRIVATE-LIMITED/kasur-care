import React from "react";
import { FaUserMd, FaCalendarAlt, FaClock, FaUsers, FaStar } from "react-icons/fa";
import doc03 from '../../assets/doc03.webp'
import { MdOutlineDashboard } from "react-icons/md";
import { RiAccountCircle2Line } from "react-icons/ri";
import { TbFileInvoice } from "react-icons/tb";
import { TbCreditCardPay } from "react-icons/tb";
import { TiMessages } from "react-icons/ti";
import { RiBloggerFill } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { TiMediaEject } from "react-icons/ti";
import { PiKeyLight } from "react-icons/pi";

import { IoIosLogOut } from "react-icons/io";
const PatientSidebar = () => {
    return (
        <div className="w-full max-w-sm bg-white shadow-2xl rounded-2xl p-16">

            {/* Profile */}
            <div className="flex flex-col items-center text-center">
                <img
                    src={doc03}
                    alt="doctor"
                    className="w-30 h-30 rounded-full border-4 border-blue-500"
                />
                <h2 className="mt-4 text-xl font-semibold">Hendrita Hayes</h2>
                <p className="text-gray-500 text-sm">
                    Patient ID : PT254654

                </p>

                <span className="mt-2 px-3 py-1  text-sm bg-blue-100 text-blue-600 rounded-full">
                    Female 
                </span>
            </div>

            {/* Availability */}
            <div className="mt-6">
                <label className="block text-gray-600 text-sm mb-2">
                    Availability
                </label>
                <select className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>I am Available Now</option>
                    <option>Not Available</option>
                </select>
            </div>

            {/* Menu */}
            <div className="mt-6 space-y-4">
                <div className="bg-blue-500 rounded-lg ">
                    <SidebarItem icon={<MdOutlineDashboard className="text-white" />} label="Dashboard"/>
                </div>
                <SidebarItem icon={<FaUserMd />} label="Requests" />
                <SidebarItem icon={<FaCalendarAlt />} label="Appointments" />
                <SidebarItem icon={<FaClock />} label="Available Timings" />
                <SidebarItem icon={<FaUsers />} label="My Patients" />
                <SidebarItem icon={<FaStar />} label="Reviews" />
                <SidebarItem icon={<RiAccountCircle2Line />} label="Account" />
                <SidebarItem icon={<TbFileInvoice />} label="Invoices" />
                <SidebarItem icon={<TbCreditCardPay />} label="Payout Settings" />
                <SidebarItem icon={<TiMessages />} label="Messages" />
                <SidebarItem icon={<RiBloggerFill />} label="Blogs" />
                 <SidebarItem icon={<TbCreditCardPay />} label="Payout Settings" />
                <SidebarItem icon={<TiMessages />} label="Messages" />
                <SidebarItem icon={<RiBloggerFill />} label="Blogs" />
                <SidebarItem icon={<IoSettingsOutline />} label="Profile Setting" />
                <SidebarItem icon={<TiMediaEject />} label="Social Media" />
                <SidebarItem icon={<PiKeyLight />} label="Change Password" />
                <SidebarItem icon={<IoIosLogOut />} label="Logout" />
                
            </div>
        </div>
    );
};

const SidebarItem = ({ icon, label }) => {
    return (
        <div className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-blue-50 transition">
            <div className="text-blue-500 text-lg">{icon}</div>
            <span className="text-gray-700">{label}</span>
        </div>
    );
};

export default PatientSidebar;