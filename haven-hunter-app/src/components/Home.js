import React, { useState, useEffect } from "react";
import logoSvg from "../assets/logo.svg";
import FAQ from "./FAQ";
import Contact from "./Contact";
import Testimonials from "./Testimonials";
import Feature from "./Feature";
import HowItsWorks from "./HowItWorks";
import WhyUs from "./WhyUs";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();

    // Use navigate to redirect to the /search page with the city parameter
    navigate(`/search`);
  };
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible((prevVisible) => !prevVisible);
  };
  function logout() {
    navigate("/");
  }
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
  }, []); // Empty dependency array to ensure useEffect runs only once

  return (
    <div className="bg-indigo-100 min-h-fit">
      {/* Navbar */}
      <nav className="fixed z-10 w-full bg-purple-600">
        <div className="max-w-7xl md:px-0 sm:mx-auto md:py-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <a href="#hero" className="text-blue-900 ">
                <div>
                  <button className="flex items-center px-2 py-2 text-white bg-transparent">
                    <img
                      src={logoSvg}
                      alt="Logo"
                      className="mr-2 text-blue-400 h-7 w-7"
                    />
                    <span className="text-2xl font-bold">HeavenHunter</span>
                  </button>
                </div>
              </a>
            </div>
            <div className="items-center hidden space-x-4 md:flex">
              <a
                href="#HowItWorks"
                className="px-3 py-5 text-white hover:text-gray-900"
              >
                How It Works
              </a>
              <a
                href="#Features"
                className="px-3 py-5 text-white hover:text-gray-900"
              >
                Features
              </a>
              <a
                href="#WhyUs"
                className="px-3 py-5 text-white hover:text-gray-900"
              >
                Why Us
              </a>
              <a
                href="#Testimonials"
                className="px-3 py-5 text-white hover:text-gray-900"
              >
                Testimonials
              </a>
              <a
                href="#Contact"
                className="px-3 py-5 text-white hover:text-gray-900"
              >
                Contact
              </a>
              <a
                href="#FAQ"
                className="px-3 py-5 text-white hover:text-gray-900"
              >
                FAQ
              </a>
              <button
                onClick={logout}
                className="px-3 py-5 text-white hover:text-gray-900"
              >
                LogOut
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
          <div className="bg-gray-900">
            <a
              href="#HowItWorks"
              className="block w-full px-4 py-2 text-sm text-left text-purple-100 hover:text-gray-500"
            >
              How It Works
            </a>
            <a
              href="#Features"
              className="block w-full px-4 py-2 text-sm text-left text-purple-100 hover:text-gray-500"
            >
              Features
            </a>
            <a
              href="#WhyUs"
              className="block w-full px-4 py-2 text-sm text-left text-purple-100 hover:text-gray-500"
            >
              Why Us
            </a>

            <a
              href="#Testimonials"
              className="block w-full px-4 py-2 text-sm text-left text-purple-100 hover:text-gray-500"
            >
              Testimonials
            </a>

            <a
              href="#Contact"
              className="block w-full px-4 py-2 text-sm text-left text-purple-100 hover:text-gray-500"
            >
              Contact
            </a>
            <a
              href="#FAQ"
              className="block w-full px-4 py-2 text-sm text-left text-purple-100 hover:text-gray-500"
            >
              FAQ
            </a>
            <button
              onClick={logout}
              className="block w-full px-4 py-2 text-sm text-left text-purple-100 hover:text-gray-500"
            >
              LogOut
            </button>
          </div>
        </div>
      </nav>
      {/* Hero */}

      <section id="hero" className="mb-5">
        {/* Jumbotron */}
        <div
          className="relative h-screen overflow-hidden bg-no-repeat bg-cover"
          style={{
            backgroundPosition: "50%",
            backgroundImage:
              "url('https://mdbcdn.b-cdn.net/img/new/slides/146.webp')",
            height: "790px",
          }}
        >
          <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
            <div className="flex items-center justify-center h-full">
              <div className="px-6 text-center text-white md:px-12">
                <h1 className="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                  Discover Your{" "}
                  <span className="text-yellow-400">Perfect </span>
                  Heaven
                  <br />
                </h1>
                <div className="flex mx-auto sm:justify-center md:justify-start ">
                  {/* searchbar */}
                  <div className="w-full p-4 mx-auto sm:w-auto">
                    <button
                      onClick={handleSearch}
                      className="inline-block rounded-full border-2 border-primary-100 py-3 px-10 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:border-primary-accent-100 hover:bg-neutral-500 hover:bg-opacity-10 focus:border-primary-accent-100 focus:outline-none focus:ring-0 active:border-primary-accent-200 dark:text-primary-100 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Jumbotron */}
      </section>

      <HowItsWorks />
      <Feature />
      <WhyUs />
      <Testimonials />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  );
}
