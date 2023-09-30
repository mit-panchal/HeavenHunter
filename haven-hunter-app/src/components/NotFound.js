import React from "react";

export default function NotFound() {
  return (
    <div className="text-center bg-indigo-100 p-60">
      <h1 className="mb-4 text-6xl font-semibold text-purple-600">404</h1>
      <p className="mb-4 text-lg text-gray-600">
        Oops! Looks like you're lost.
      </p>
      <div className="animate-bounce">
        <svg
          className="w-16 h-16 mx-auto text-yellow-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>
      </div>
      <p className="mt-4 text-gray-600">
        Let's get you back{" "}
        <a href="/HeavenHunter" className="text-blue-500">
          home
        </a>
        .
      </p>
    </div>
  );
}
