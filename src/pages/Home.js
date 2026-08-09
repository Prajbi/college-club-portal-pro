import { Link } from "react-router-dom";
import { FaUsers, FaCalendarAlt, FaAward, FaLaptopCode } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900">
          College Club Portal Pro
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          Discover clubs, register for exciting events, track attendance,
          earn certificates, and stay connected with your college community.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            to="/clubs"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition"
          >
            Explore Clubs
          </Link>

          <Link
            to="/register"
            className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-xl font-semibold transition"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6">

        <div className="bg-white rounded-2xl shadow p-6 text-center">
          <FaUsers className="mx-auto text-3xl text-blue-600 mb-3" />
          <h2 className="text-3xl font-bold">500+</h2>
          <p className="text-gray-500">Students</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 text-center">
          <FaLaptopCode className="mx-auto text-3xl text-green-600 mb-3" />
          <h2 className="text-3xl font-bold">20+</h2>
          <p className="text-gray-500">Clubs</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 text-center">
          <FaCalendarAlt className="mx-auto text-3xl text-orange-500 mb-3" />
          <h2 className="text-3xl font-bold">100+</h2>
          <p className="text-gray-500">Events</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 text-center">
          <FaAward className="mx-auto text-3xl text-purple-600 mb-3" />
          <h2 className="text-3xl font-bold">500+</h2>
          <p className="text-gray-500">Certificates</p>
        </div>

      </section>

      {/* Featured Clubs */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold text-center mb-10">
          Featured Clubs
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white shadow rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-2">AI Club</h3>
            <p className="text-gray-600">
              Learn Artificial Intelligence through projects, workshops and hackathons.
            </p>
          </div>

          <div className="bg-white shadow rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-2">Coding Club</h3>
            <p className="text-gray-600">
              Practice DSA, competitive programming and real-world development.
            </p>
          </div>

          <div className="bg-white shadow rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-2">Robotics Club</h3>
            <p className="text-gray-600">
              Build robots, IoT systems and embedded electronics.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}