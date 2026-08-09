import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import QRAttendance from "./pages/QRAttendance";
import ClubListing from "./pages/ClubListing";
import EventsPage from "./pages/EventsPage";
import Navbar from "./components/Navbar";
import Certificates from "./pages/Certificates";
import Notifications from "./pages/Notifications";
import ProtectedRoute
from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import StudentDashboard
from "./pages/StudentDashboard";

import AdminDashboard
from "./pages/AdminDashboard";

export default function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <StudentDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/certificates" element={<Certificates />} />
<Route path="/notifications" element={<Notifications />} />
<Route path="/clubs" element={<ClubListing />} />
<Route
  path="/attendance"
  element={<QRAttendance />}
/>
<Route path="/events" element={<EventsPage />} />
      </Routes>

    </BrowserRouter>

  );
}