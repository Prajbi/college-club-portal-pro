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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadJoinedClubs() {
      if (!currentUser) {
        setLoading(false);
        return;
      }

      try {
        const userDocId = currentUser.uid;
        const docRef = doc(db, "joinedClubs", userDocId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setJoinedClubs(docSnap.data().clubs || []);
        } else {
          setJoinedClubs([]);
        }
      } catch (error) {
        console.error("Error loading clubs:", error);
      } finally {
        setLoading(false);
      }
    }

    loadJoinedClubs();
  }, [currentUser]);

  async function joinClub(club) {
    if (!currentUser) {
      alert("Please login first");
      return;
    }

    if (joinedClubs.includes(club.id)) {
      alert("You already joined this club");
      return;
    }

    const updatedClubs = [...joinedClubs, club.id];

    // Update UI immediately
    setJoinedClubs(updatedClubs);

    try {
      await setDoc(
        doc(db, "joinedClubs", currentUser.uid),
        {
          clubs: updatedClubs
        }
      );

      alert(`Successfully joined ${club.name}!`);
    } catch (error) {
      console.error("Firestore Error:", error);

      // Restore old state if Firebase fails
      setJoinedClubs(joinedClubs);

      alert("Could not join the club. Please try again.");
    }
  }

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-700 mb-8">
        College Clubs
      </h1>

      {loading ? (
        <p className="text-gray-600">Loading clubs...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {clubs.map((club) => {
            const isJoined = joinedClubs.includes(club.id);

            return (
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
                  disabled={isJoined}
                  className={`px-4 py-2 rounded text-white ${
                    isJoined
                      ? "bg-green-600 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700"
                  }`}
                >
                  {isJoined ? "Joined ✓" : "Join Club"}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}