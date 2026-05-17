import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  UserRound,
  CalendarCheck,
  Pill,
  FlaskConical,
  X,
} from "lucide-react";

export default function Sidebar({ open, setOpen }) {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/admin", icon: LayoutDashboard },
    { name: "Patients", path: "/admin/patients", icon: Users },
    { name: "Doctors", path: "/admin/doctors", icon: UserRound },
    { name: "Appointments", path: "/admin/appointments", icon: CalendarCheck },
    { name: "Pharmacy", path: "/admin/pharmacy", icon: Pill },
    { name: "Lab Tests", path: "/admin/labs", icon: FlaskConical },
  ];

  return (
    <div
      className={`fixed md:static top-0 left-0 h-full bg-white shadow-lg z-50 transition-all
      ${open ? "w-64" : "w-0 md:w-64 overflow-hidden"}`}
    >
      <div className="flex justify-between p-4 border-b">
        <h1 className="text-xl font-bold text-blue-600">Doccure Admin</h1>
        <button className="md:hidden" onClick={() => setOpen(false)}>
          <X />
        </button>
      </div>

      <nav className="mt-4">
        {menu.map((item, i) => {
          const Icon = item.icon;
          const active = location.pathname === item.path;

          return (
            <Link
              key={i}
              to={item.path}
              className={`flex items-center gap-3 px-5 py-3 transition
              ${active ? "bg-blue-100 text-blue-600 font-semibold" : "text-gray-700 hover:bg-gray-100"}`}
            >
              <Icon size={18} />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}