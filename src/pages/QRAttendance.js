import { useEffect, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { useAuth } from "../context/AuthContext";

const events = [
  { id: 1, title: "Hackathon 2025" },
  { id: 2, title: "Robotics Workshop" },
  { id: 3, title: "Photography Contest" }
];

export default function QRAttendance() {
  const { currentUser } = useAuth();

  const [registeredEvents, setRegisteredEvents] = useState([]);
  const [attendedEvents, setAttendedEvents] = useState([]);

  useEffect(() => {
    if (!currentUser) return;

    const savedRegistered =
      JSON.parse(
        localStorage.getItem(`registeredEvents_${currentUser.email}`)
      ) || [];

    const savedAttendance =
      JSON.parse(
        localStorage.getItem(`attendedEvents_${currentUser.email}`)
      ) || [];

    setRegisteredEvents(savedRegistered);
    setAttendedEvents(savedAttendance);
  }, [currentUser]);

  function markAttendance(eventId) {
    if (attendedEvents.includes(eventId)) {
      alert("Attendance already marked");
      return;
    }

    const updatedAttendance = [...attendedEvents, eventId];

    setAttendedEvents(updatedAttendance);

    localStorage.setItem(
      `attendedEvents_${currentUser.email}`,
      JSON.stringify(updatedAttendance)
    );

    alert("Attendance Marked");
  }

  const userRegisteredEvents = events.filter((event) =>
    registeredEvents.includes(event.id)
  );

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-green-700 mb-8">
        QR Attendance
      </h1>

      {userRegisteredEvents.length === 0 ? (
        <p className="text-gray-600">
          No registered events found. Register for an event first.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {userRegisteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white p-6 rounded-xl shadow flex flex-col items-center"
            >
              <h2 className="text-2xl font-bold mb-4">{event.title}</h2>

              <QRCodeCanvas value={event.title} size={180} />

              <button
                onClick={() => markAttendance(event.id)}
                className={`mt-6 px-4 py-2 rounded text-white ${
                  attendedEvents.includes(event.id)
                    ? "bg-green-600"
                    : "bg-blue-600"
                }`}
              >
                {attendedEvents.includes(event.id)
                  ? "Attendance Marked"
                  : "Mark Attendance"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}