import React, { useState, useEffect } from "react";
import heroimg from "./heroimg.jpg";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay for demonstration purposes
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <div className="max-w-full h-auto relative bg-red-500">
        <img src={heroimg} alt="Hero" className="mx-auto mb-4" />
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-black">
          <h1
            className={`text-opacity text-4xl font-bold ${
              isLoading
                ? "opacity-0"
                : "opacity-1 transition-opacity duration-500"
            }`}
            style={{
              maxWidth: "100%", // Limit the text width
              wordWrap: "break-word", // Wrap long words
              textAlign: "center", // Center-align the text
            }}
          >
            Discover Your Perfect Haven
          </h1>
          <div
            className={`text-opacity ${
              isLoading
                ? "opacity-0"
                : "opacity-1 transition-opacity duration-700"
            }`}
          >
            <p className="text-lg">
              with HavenHunter - Where Dreams Find a Home
            </p>
          </div>
        </div>
      </div>
      <div className="py-32 text-center  bg-red-400">
        <h2 className="font-extrabold text-6xl">about in Tailwind</h2>
      </div>
      <div className="py-32 text-center  bg-red-300">
        <h2 className="font-extrabold text-6xl">footer in Tailwind</h2>
      </div>
    </>
  );
};

export default Hero;
