import {
  FaUsers,
  FaCalendarAlt,
  FaChartBar,
  FaCertificate,
  FaBell,
  FaClipboardCheck
} from "react-icons/fa";

export default function AdminDashboard() {
  const cards = [
    {
      title: "Manage Clubs",
      description: "Create, update and organize student clubs.",
      icon: <FaUsers className="text-4xl text-blue-600" />
    },
    {
      title: "Manage Events",
      description: "Schedule workshops, hackathons and competitions.",
      icon: <FaCalendarAlt className="text-4xl text-green-600" />
    },
    {
      title: "Attendance",
      description: "Track student participation using QR attendance.",
      icon: <FaClipboardCheck className="text-4xl text-orange-500" />
    },
    {
      title: "Certificates",
      description: "Issue and manage digital participation certificates.",
      icon: <FaCertificate className="text-4xl text-purple-600" />
    },
    {
      title: "Notifications",
      description: "Send announcements to all club members.",
      icon: <FaBell className="text-4xl text-red-500" />
    },
    {
      title: "Reports & Analytics",
      description: "View club growth, attendance and event statistics.",
      icon: <FaChartBar className="text-4xl text-indigo-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mb-10">
        <h1 className="text-5xl font-bold text-gray-900">
          Admin Dashboard
        </h1>

        <p className="text-gray-600 mt-3 text-lg">
          Manage clubs, events, attendance and student engagement from one place.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-8"
          >
            <div className="mb-6">
              {card.icon}
            </div>

            <h2 className="text-2xl font-bold mb-3">
              {card.title}
            </h2>

            <p className="text-gray-600">
              {card.description}
            </p>

            <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition">
              Open
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}