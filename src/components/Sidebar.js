import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaCalendarAlt,
  FaCertificate,
  FaBell,
  FaQrcode
} from "react-icons/fa";

export default function Sidebar() {
  const location = useLocation();

  const menu = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FaHome />
    },
    {
      name: "Clubs",
      path: "/clubs",
      icon: <FaUsers />
    },
    {
      name: "Events",
      path: "/events",
      icon: <FaCalendarAlt />
    },
    {
      name: "Certificates",
      path: "/certificates",
      icon: <FaCertificate />
    },
    {
      name: "Notifications",
      path: "/notifications",
      icon: <FaBell />
    },
    {
      name: "QR Attendance",
      path: "/attendance",
      icon: <FaQrcode />
    }
  ];

  return (
    <aside className="w-72 min-h-screen bg-slate-900 text-white shadow-xl">
      <div className="p-8 border-b border-slate-700">
        <h2 className="text-3xl font-bold">
          Club Portal
        </h2>

        <p className="text-sm text-slate-400 mt-2">
          Student Dashboard
        </p>
      </div>

      <nav className="p-5 space-y-3">
        {menu.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${
              location.pathname === item.path
                ? "bg-blue-600 text-white"
                : "hover:bg-slate-800 text-slate-300"
            }`}
          >
            <span className="text-lg">
              {item.icon}
            </span>

            <span className="font-medium">
              {item.name}
            </span>
          </Link>
        ))}
      </nav>

      <div className="absolute bottom-6 left-6 text-xs text-slate-500">
        Version 2.0
      </div>
    </aside>
  );
}