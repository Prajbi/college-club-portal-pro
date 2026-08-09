import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { auth } from "../services/firebase";
import Sidebar from "../components/Sidebar";
import { useAuth } from "../context/AuthContext";

export default function StudentDashboard() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const [joinedClubs, setJoinedClubs] = useState([]);
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const [attendedEvents, setAttendedEvents] = useState([]);

  useEffect(() => {
    if (!currentUser) return;

    const savedClubs =
      JSON.parse(
        localStorage.getItem(`joinedClubs_${currentUser.email}`)
      ) || [];

    const savedEvents =
      JSON.parse(
        localStorage.getItem(`registeredEvents_${currentUser.email}`)
      ) || [];

    const savedAttendance =
      JSON.parse(
        localStorage.getItem(`attendedEvents_${currentUser.email}`)
      ) || [];

    setJoinedClubs(savedClubs);
    setRegisteredEvents(savedEvents);
    setAttendedEvents(savedAttendance);
  }, [currentUser]);

  async function handleLogout() {
    await signOut(auth);
    navigate("/login");
  }

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-blue-700">
              Student Dashboard
            </h1>

            <p className="text-gray-600 mt-2">
              Welcome, {currentUser?.email}
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded"
          >
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-bold">Joined Clubs</h2>
            <p className="text-gray-600 mt-2">
              {joinedClubs.length} active clubs
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-bold">Registered Events</h2>
            <p className="text-gray-600 mt-2">
              {registeredEvents.length} event participations
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-bold">Certificates</h2>
            <p className="text-gray-600 mt-2">
              {attendedEvents.length} certificates available
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}