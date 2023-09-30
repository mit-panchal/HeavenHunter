import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FormBG from "../assets/FormBG.jpg";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(email, password) {
    try {
      const response = await axios.post("http://localhost:8000/login", {
        email,
        password,
      });
      if (response.data === "exist") {
        // Use the navigate function to redirect the user
        navigate("/home");
      } else if (response.data === "notexist") {
        alert("User has not signed up");
      }
    } catch (error) {
      alert("Login failed. Please check your details and try again.");
      console.error(error);
    }
  }

  const handleSignupClick = () => {
    navigate("/signup");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    loginUser(email, password);
  };

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
            className="text-gray-600 hover:text-gray-800"
            onClick={() => navigate("/HeavenHunter")}
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
        <h2 className="mb-4 text-2xl font-bold">Log In</h2>
        <form onSubmit={handleSubmit}>
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
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-6 bg-blue-500">
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full px-4 py-2 text-white transition duration-300 rounded-md hover:bg-black"
            >
              Log In
            </button>
          </div>
          <p className="text-sm text-center text-gray-600">
            Don't have an account?{" "}
            <button
              onClick={handleSignupClick}
              className="text-blue-500 hover:underline focus:outline-none"
            >
              Sign up
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
