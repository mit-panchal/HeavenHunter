import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FormBG from "../assets/FormBG.jpg";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/signup", {
        email,
        password,
        fullName,
      });

      if (response.data === "exist") {
        alert("User already exists");
      } else if (response.data === "success") {
        // Use the login function to set authentication status to true

        // Navigate to the home page
        navigate("/home", { state: { id: email } });
      }
    } catch (error) {
      console.log(error);
      alert("An error occurred while signing up.");
    }
  }

  return (
    <div
      className="relative flex items-center justify-center h-screen overflow-hidden bg-gray-100 bg-no-repeat bg-cover "
      style={{
        backgroundPosition: "50%",
        backgroundImage: `url(${FormBG})`,
      }}
    >
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <div className="flex justify-end">
          <button
            className="text-gray-900 hover:text-gray-800"
            onClick={() => navigate("/")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

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
          <div className="mb-6 transition duration-300 bg-blue-500 rounded-md hover:bg-black">
            <button
              type="submit"
              className="w-full px-4 py-2 text-white "
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
