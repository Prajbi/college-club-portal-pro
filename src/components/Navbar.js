import { Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-blue-600"
        >
          <FaUsers className="text-3xl" />
          <span>ClubPortal Pro</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 font-medium text-gray-700">

          <Link className="hover:text-blue-600 transition" to="/">
            Home
          </Link>

          <Link className="hover:text-blue-600 transition" to="/clubs">
            Clubs
          </Link>

          <Link className="hover:text-blue-600 transition" to="/events">
            Events
          </Link>

          <Link className="hover:text-blue-600 transition" to="/login">
            Login
          </Link>

          <Link
            to="/register"
            className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Register
          </Link>

        </div>

      </div>
    </nav>
  );
}