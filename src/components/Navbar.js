import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import logoSvg from "./logo.svg";
import Signup from "./Signup";
import Login from "./Login";
import Hero from "./Hero";

const Navbar = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible((prevVisible) => !prevVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Router>
      <nav className="bg-gray-100 ">
        <div className="max-w-6xl mx-auto px-2">
          <div className="flex justify-between">
            <div className="flex items-center">
              <Link to="/">
                <div>
                  <button className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                    <img
                      src={logoSvg}
                      alt="Logo"
                      className="h-7 w-7 mr-2 text-blue-400"
                    />
                    <span className="font-bold text-2xl">HeavenHunter</span>
                  </button>
                </div>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-2 ">
              <button className="py-5 px-3 text-gray-700 hover:text-gray-900">
                Features
              </button>
              <button className="py-5 px-3 text-gray-700 hover:text-gray-900">
                Pricing
              </button>
              <button className="py-5 px-3 text-gray-700 hover:text-gray-900">
                About Us
              </button>
              <button className="py-5 px-3 text-gray-700 hover:text-gray-900">
                Contact
              </button>
              <button className="py-5 px-3 text-gray-700 hover:text-gray-900">
                FAQ
              </button>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Link to="/login" className="py-5 px-3">
                Login
              </Link>
              <Link
                to="/signup"
                className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
              >
                Signup
              </Link>
            </div>
            <div className="md:hidden flex items-center">
              <button className="mobile-menu-button" onClick={toggleMobileMenu}>
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={`mobile-menu ${mobileMenuVisible ? "" : "hidden"}`}>
          <div className="">
            <button className="block w-full text-left py-2 px-4 text-sm hover:bg-gray-200">
              Features
            </button>
            <button className="block w-full text-left py-2 px-4 text-sm hover:bg-gray-200">
              Pricing
            </button>
            <button className="block w-full text-left py-2 px-4 text-sm hover:bg-gray-200">
              About Us
            </button>
            <button className="block w-full text-left py-2 px-4 text-sm hover:bg-gray-200">
              Contact
            </button>
            <button className="block w-full text-left py-2 px-4 text-sm hover:bg-gray-200">
              FAQ
            </button>
            <button className="block w-full text-left py-2 px-4 text-sm hover:bg-gray-200">
              <Link to="/login">Login</Link>
            </button>
            <button className="block w-full text-left py-2 px-4 text-sm hover:bg-gray-200">
              <Link to="/signup">Signup</Link>
            </button>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default Navbar;
