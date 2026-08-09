import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { db } from "../services/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

const clubs = [
  { id: 1, name: "Coding Club", description: "Programming and hackathons" },
  { id: 2, name: "Robotics Club", description: "Build innovative robots" },
  { id: 3, name: "Photography Club", description: "Capture amazing moments" }
];

export default function ClubListing() {
  const { currentUser } = useAuth();
  const [joinedClubs, setJoinedClubs] = useState([]);

  useEffect(() => {
    async function loadJoinedClubs() {
      if (!currentUser) return;

      try {
        const docRef = doc(db, "joinedClubs", currentUser.email);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setJoinedClubs(docSnap.data().clubs || []);
        } else {
          setJoinedClubs([]);
        }
      } catch (error) {
        console.error(error);
      }
    }

    loadJoinedClubs();
  }, [currentUser]);

  async function joinClub(club) {
    if (!currentUser) return;

    if (joinedClubs.includes(club.id)) {
      alert("You already joined this club");
      return;
    }

    const updatedClubs = [...joinedClubs, club.id];
    setJoinedClubs(updatedClubs);

    try {
      await setDoc(
        doc(db, "joinedClubs", currentUser.email),
        {
          clubs: updatedClubs,
        }
      );

      alert(`Joined ${club.name}`);
    } catch (error) {
      console.error(error);
      alert("Failed to join club.");
    }
  }

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-700 mb-8">
        College Clubs
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {clubs.map((club) => (
          <div
            key={club.id}
            className="bg-white p-6 rounded-xl shadow"
          >
            <h2 className="text-2xl font-bold mb-2">
              {club.name}
            </h2>

            <p className="text-gray-600 mb-4">
              {club.description}
            </p>

            <button
              onClick={() => joinClub(club)}
              className={`px-4 py-2 rounded text-white ${
                joinedClubs.includes(club.id)
                  ? "bg-green-600"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {joinedClubs.includes(club.id)
                ? "Joined"
                : "Join Club"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}