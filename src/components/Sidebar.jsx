import {
  LayoutDashboard,
  Users,
  UserPlus,
  CheckSquare,
  BarChart3,
  Menu,
  X,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useState } from "react";

function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Navbar */}
      <div className="md:hidden flex items-center justify-between bg-blue-900 text-white p-4">
        <h1 className="text-2xl font-bold">
          CRM
        </h1>

        <button
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`bg-blue-900 text-white fixed md:static top-0 left-0 h-full z-50 transform transition-transform duration-300
        ${
          open
            ? "translate-x-0"
            : "-translate-x-full"
        }
        md:translate-x-0 w-56 md:w-64`}
      >
        <div className="p-5">

          <h1 className="text-3xl font-bold mb-10 hidden md:block">
            CRM
          </h1>

          <ul className="space-y-6">

            <Link to="/dashboard"
                  onClick={() => setOpen(false)}
            >
              <li className="flex items-center gap-3 cursor-pointer hover:text-yellow-300">
                <LayoutDashboard size={22} />
                Dashboard
              </li>
            </Link>

            <Link to="/customers"
                  onClick={() => setOpen(false)}
            >
              <li className="flex items-center gap-3 cursor-pointer hover:text-yellow-300">
                <Users size={22} />
                Customers
              </li>
            </Link>

            <Link to="/leads"
                  onClick={() => setOpen(false)}
            >
              <li className="flex items-center gap-3 cursor-pointer hover:text-yellow-300">
                <UserPlus size={22} />
                Leads
              </li>
            </Link>

            <Link to="/tasks"
                  onClick={() => setOpen(false)}
            >
              <li className="flex items-center gap-3 cursor-pointer hover:text-yellow-300">
                <CheckSquare size={22} />
                Tasks
              </li>
            </Link>

            <Link to="/analytics"
                  onClick={() => setOpen(false)}
            >
              <li className="flex items-center gap-3 cursor-pointer hover:text-yellow-300">
                <BarChart3 size={22} />
                Analytics
              </li>
            </Link>

          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;