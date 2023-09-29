import React, { useState, useEffect } from "react";
import logoSvg from "../assets/logo.svg";
import House from "../assets/House.svg";
import Contact from "./Contact";
import Testimonials from "./Testimonials";
import Feature from "./Feature";
import HowItsWorks from "./HowItWorks";
import { Link } from "react-router-dom";
import WhyUs from "./WhyUs";
import Footer from "./Footer";

export default function Home() {
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
    <div className="bg-indigo-100 min-h-fit">
      {/* Navbar */}
      <nav className=" bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500">
        <div className="max-w-7xl md:px-0 sm:mx-auto md:py-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link to="/">
                <div>
                  <button className="flex items-center px-2 py-2 text-white bg-transparent hover:text-gray-900">
                    <img
                      src={logoSvg}
                      alt="Logo"
                      className="mr-2 text-blue-400 h-7 w-7"
                    />
                    <span className="text-2xl font-bold">HeavenHunter</span>
                  </button>
                </div>
              </Link>
            </div>
            <div className="items-center hidden space-x-9 md:flex">
              <button className="px-3 py-5 text-white hover:text-gray-900">
                Features
              </button>
              <button className="px-3 py-5 text-white hover:text-gray-900">
                Pricing
              </button>
              <button className="px-3 py-5 text-white hover:text-gray-900">
                About Us
              </button>
              <button className="px-3 py-5 text-white hover:text-gray-900">
                Contact
              </button>
              <button className="px-3 py-5 text-white hover:text-gray-900">
                FAQ
              </button>
            </div>

            <div className="flex items-center mr-5 md:hidden">
              <button className="mobile-menu-button" onClick={toggleMobileMenu}>
                <svg
                  className="w-6 h-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        <div
          className={`mobile-menu md:hidden ${
            mobileMenuVisible ? "" : "hidden"
          }`}
        >
          <div className="">
            <button className="block w-full px-4 py-2 text-sm text-left text-white hover:bg-gray-200">
              Features
            </button>
            <button className="block w-full px-4 py-2 text-sm text-left text-white hover:bg-gray-200">
              Pricing
            </button>
            <button className="block w-full px-4 py-2 text-sm text-left text-white hover:bg-gray-200">
              About Us
            </button>
            <button className="block w-full px-4 py-2 text-sm text-left text-white hover:bg-gray-200">
              Contact
            </button>
            <button className="block w-full px-4 py-2 text-sm text-left text-white hover:bg-gray-200">
              FAQ
            </button>
            <button className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-200">
              <Link to="/login" className="text-white">
                Login
              </Link>
            </button>
            <button className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-200">
              <Link to="/signup" className="text-white">
                Signup
              </Link>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="py-10 pb-20 md:grid md:grid-cols-2">
        <div className="md:grid md:grid-cols-1">
          {/* Left Column */}
          <div className="mx-8 text-center text-indigo-900 md:text-left md:pt-20">
            <h2 className="text-4xl font-bold text-opacity sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl">
              Discover Your
            </h2>
            <h1 className="text-5xl font-bold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              Perfect Haven
            </h1>
            <div>
              <p className="pt-5 text-lg text-indigo-700 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                with HavenHunter
              </p>
              <p className="pt-2 text-lg text-indigo-700 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                <q>Where Dreams Find a Home</q>
              </p>
              <div className="flex pt-5 sm:justify-center md:justify-start md:py-10">
                {/* searchbar */}
                <div className="p-4 ">
                  <form className="flex bg-white rounded-full shadow-lg">
                    <input
                      type="text"
                      placeholder="Enter your city here"
                      className="flex-1 px-20 py-4 text-left text-gray-700 rounded-l-full focus:outline-none"
                    />

                    <button className="px-10 py-1 font-semibold text-white bg-indigo-500 rounded-r-full hover:bg-indigo-400 focus:bg-indigo-600 focus:outline-none">
                      Search
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-20 ">
          <img
            src={House}
            alt="House"
            className="h-auto max-w-full mx-auto md:max-h-96 lg:scale-125"
          />
        </div>
      </div>
      <HowItsWorks />
      <Feature />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
