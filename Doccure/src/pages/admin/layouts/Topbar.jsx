import { Menu } from "lucide-react";

export default function Topbar({ setOpen }) {
  return (
    <div className="flex items-center justify-between bg-white shadow px-4 py-3">
      <button className="md:hidden" onClick={() => setOpen(true)}>
        <Menu />
      </button>

      <h2 className="text-lg font-semibold">Admin Dashboard</h2>

      <div className="text-sm text-gray-600">Admin</div>
    </div>
  );
}