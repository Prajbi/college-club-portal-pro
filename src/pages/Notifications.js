import { useEffect, useState } from "react";

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const joinedClubs =
      JSON.parse(localStorage.getItem("joinedClubs")) || [];

    const registeredEvents =
      JSON.parse(localStorage.getItem("registeredEvents")) || [];

    const attendedEvents =
      JSON.parse(localStorage.getItem("attendedEvents")) || [];

    const messages = [
      {
        id: 1,
        title: "Welcome",
        message: "Welcome to College Club Portal!"
      }
    ];

    if (joinedClubs.length > 0) {
      messages.push({
        id: 2,
        title: "Club Joined",
        message: `You have joined ${joinedClubs.length} club(s).`
      });
    }

    if (registeredEvents.length > 0) {
      messages.push({
        id: 3,
        title: "Event Registration",
        message: `You registered for ${registeredEvents.length} event(s).`
      });
    }

    if (attendedEvents.length > 0) {
      messages.push({
        id: 4,
        title: "Certificate Available",
        message: `${attendedEvents.length} certificate(s) are ready to download.`
      });
    }

    setNotifications(messages);
  }, []);

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-indigo-700 mb-8">
        Notifications
      </h1>

      <div className="space-y-4">
        {notifications.map((note) => (
          <div
            key={note.id}
            className="bg-white p-5 rounded-xl shadow border-l-4 border-indigo-600"
          >
            <h2 className="text-xl font-bold">{note.title}</h2>
            <p className="text-gray-600 mt-2">{note.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}