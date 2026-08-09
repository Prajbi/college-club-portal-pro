import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

const events = [
  { id: 1, title: "Hackathon 2025", date: "10 July 2026" },
  { id: 2, title: "Robotics Workshop", date: "15 July 2026" },
  { id: 3, title: "Photography Contest", date: "20 Aug 2026" }
];

export default function EventsPage() {
  const { currentUser } = useAuth();
  const [registeredEvents, setRegisteredEvents] = useState([]);

  const storageKey = `registeredEvents_${currentUser?.email}`;

  useEffect(() => {
    if (!currentUser) return;

    const savedEvents =
      JSON.parse(localStorage.getItem(storageKey)) || [];

    setRegisteredEvents(savedEvents);
  }, [currentUser, storageKey]);

  function registerEvent(event) {
    if (registeredEvents.includes(event.id)) {
      alert("You already registered for this event");
      return;
    }

    const updatedEvents = [...registeredEvents, event.id];

    setRegisteredEvents(updatedEvents);

    localStorage.setItem(
      storageKey,
      JSON.stringify(updatedEvents)
    );

    alert(`Registered for ${event.title}`);
  }

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-purple-700 mb-8">
        Upcoming Events
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.map((event) => (
          <div key={event.id} className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-bold mb-2">{event.title}</h2>

            <p className="text-gray-600 mb-4">Date: {event.date}</p>

            <button
              onClick={() => registerEvent(event)}
              className={`px-4 py-2 rounded text-white ${
                registeredEvents.includes(event.id)
                  ? "bg-green-600"
                  : "bg-purple-600"
              }`}
            >
              {registeredEvents.includes(event.id)
                ? "Registered"
                : "Register"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}