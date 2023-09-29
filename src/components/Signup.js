import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:8000/signup", {
          email,
          password,
          fullName,
        })
        .then((res) => {
          if (res.data === "exist") {
            alert("User already exists");
          } else if (res.data === "success") {
            navigate("/home", { state: { id: email } });
          }
        })
        .catch((e) => {
          alert("An error occurred while signing up.");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="mb-4 text-2xl font-bold">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block font-semibold text-gray-700"
            >
              Full Name
            </label>

            <input
              type="text"
              id="fullName"
              name="fullName"
              onChange={(e) => setFullName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block font-semibold text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block font-semibold text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="w-full px-4 py-2 text-white transition duration-300 bg-blue-500 rounded-md hover:bg-black"
              onClick={submit}
            >
              Sign Up
            </button>
          </div>
          <p className="text-sm text-center text-gray-600">
            Already have an account?{" "}
            <button
              className="text-blue-500 hover:underline focus:outline-none"
              onClick={() => navigate("/login")}
            >
              Log in
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
