import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../services/firebase";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);

      alert("Registration Successful!");

      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-blue-100 px-6">

      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md">

        <h1 className="text-4xl font-bold text-center text-gray-900">
          Create Account 🚀
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Join your college community today.
        </p>

        <form onSubmit={handleRegister}>

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-xl p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-xl p-3 mb-6 focus:outline-none focus:ring-2 focus:ring-green-500"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition">
            Create Account
          </button>

        </form>

        <p className="text-center mt-6 text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}