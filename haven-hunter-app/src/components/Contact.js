import React from "react";

function Contact() {
  return (
    <section
      id="Contact"
      className="px-4 py-16 overflow-hidden bg-white dark:bg-indigo-100 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="relative max-w-xl mx-auto">
        <svg
          className="absolute transform translate-x-1/2 left-full"
          width="404"
          height="404"
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                className="text-gray-500 dark:text-slate-600" // Updated color
                fill="currentColor"
              ></rect>
            </pattern>
          </defs>
          <rect
            width="404"
            height="404"
            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
          ></rect>
        </svg>
        <svg
          className="absolute bottom-0 transform -translate-x-1/2 right-full"
          width="404"
          height="404"
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                className="text-gray-200 dark:text-slate-800" // Updated color
                fill="currentColor"
              ></rect>
            </pattern>
          </defs>
          <rect
            width="404"
            height="404"
            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
          ></rect>
        </svg>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-slate-800 sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-600 dark:text-slate-400">
            {" "}
            {/* Updated color */}
            Please use the form below to contact us. Thank you!
          </p>
        </div>
        <div className="mt-12">
          <form className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-800 dark:text-slate-400"
              >
                Name
              </label>
              <div className="mt-1">
                <input
                  name="name"
                  type="text"
                  id="name"
                  autoComplete="organization"
                  required
                  className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:border-sky-500 focus:ring-sky-500 dark:border-white dark:bg-slate-700/50 dark:text-white"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-slate-400"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  name="email"
                  id="email"
                  required
                  type="email"
                  autoComplete="email"
                  className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:border-sky-500 focus:ring-sky-500 dark:border-white/5 dark:bg-slate-700/50 dark:text-white"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-slate-400"
              >
                Message
              </label>
              <div className="mt-1">
                <textarea
                  required
                  name="message"
                  id="message"
                  rows="4"
                  className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:border-sky-500 focus:ring-sky-500 dark:border-white/5 dark:bg-slate-700/50 dark:text-white"
                ></textarea>
              </div>
            </div>
            <div className="flex justify-end sm:col-span-2">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 font-medium transition-colors duration-75 border rounded-md shadow-sm focus:outline-none focus-visible:ring focus-visible:ring-sky-500 sm:text-sm text-sky-500 border-sky-500 hover:bg-sky-50 active:bg-sky-100 disabled:bg-sky-100 dark:hover:bg-gray-900 dark:active:bg-gray-800 dark:disabled:bg-gray-800 disabled:cursor-not-allowed"
              >
                <span>Send Message</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
