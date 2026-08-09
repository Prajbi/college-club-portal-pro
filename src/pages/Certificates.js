import { useEffect, useState } from "react";
import jsPDF from "jspdf";

const events = [
  { id: 1, title: "Hackathon 2025" },
  { id: 2, title: "Robotics Workshop" },
  { id: 3, title: "Photography Contest" }
];

export default function Certificates() {
  const [attendedEvents, setAttendedEvents] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("attendedEvents")) || [];
    setAttendedEvents(saved);
  }, []);

  function downloadCertificate(eventTitle) {
    const doc = new jsPDF("landscape");

    doc.setFontSize(28);
    doc.text("Certificate of Participation", 75, 50);

    doc.setFontSize(18);
    doc.text("This is proudly presented to", 95, 80);

    doc.setFontSize(22);
    doc.text("Student", 130, 105);

    doc.setFontSize(16);
    doc.text(`For participating in ${eventTitle}`, 85, 130);

    doc.setFontSize(14);
    doc.text("College Club Portal", 120, 165);

    doc.save(`${eventTitle}-certificate.pdf`);
  }

  const certificates = events.filter((event) =>
    attendedEvents.includes(event.id)
  );

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-yellow-700 mb-8">
        Certificates
      </h1>

      {certificates.length === 0 ? (
        <p className="text-gray-600">
          No certificates available. Mark attendance first.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificates.map((event) => (
            <div key={event.id} className="bg-white p-6 rounded-xl shadow">
              <h2 className="text-2xl font-bold mb-4">{event.title}</h2>

              <button
                onClick={() => downloadCertificate(event.title)}
                className="bg-yellow-600 text-white px-4 py-2 rounded"
              >
                Download Certificate
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}