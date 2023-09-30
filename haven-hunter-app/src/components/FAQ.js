import React, { useState } from "react";

function FAQ() {
  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (tab) => {
    if (activeTab === tab) {
      setActiveTab(null);
    } else {
      setActiveTab(tab);
    }
  };

  const isTabOpen = (tab) => activeTab === tab;

  return (
    <main id="FAQ" className="py-10 bg-light-blue">
      <div className="flex items-start justify-center my-2">
        <div className="w-full my-1 sm:w-10/12 md:w-1/2">
          <h2 className="mb-2 text-xl font-semibold text-vnet-blue">
            FAQ - Search, Contact, Account Etc.
          </h2>
          <ul className="flex flex-col">
            <li className="my-2 bg-white shadow-lg">
              <h2
                onClick={() => handleTabClick(1)}
                className="flex flex-row items-center justify-between p-3 font-semibold cursor-pointer"
              >
                <span>How do I create an account on HeavenHunter?</span>
                <svg
                  className={`fill-current text-purple-700 h-6 w-6 transform transition-transform duration-500 ${
                    isTabOpen(1) ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                >
                  <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10" />
                </svg>
              </h2>
              <div
                className={`border-l-2 border-purple-600 overflow-hidden duration-500 ${
                  isTabOpen(1) ? "max-h-52" : "max-h-0"
                }`}
              >
                <p className="p-3 text-gray-900">
                  To create an account on HeavenHunter, simply click on the
                  "Sign Up" button and follow the registration process. If you
                  already have an account, you can log in by clicking "Log In"
                  and entering your credentials. Your personalized account is
                  your gateway to discovering your dream property.
                </p>
              </div>
            </li>
            <li className="my-2 bg-white shadow-lg">
              <h2
                onClick={() => handleTabClick(2)}
                className="flex flex-row items-center justify-between p-3 font-semibold cursor-pointer"
              >
                <span>How can I search for properties in my desired city?</span>
                <svg
                  className={`fill-current text-purple-700 h-6 w-6 transform transition-transform duration-500 ${
                    isTabOpen(1) ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                >
                  <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10" />
                </svg>
              </h2>
              <div
                className={`border-l-2 border-purple-600 overflow-hidden duration-500 ${
                  isTabOpen(2) ? "max-h-52" : "max-h-0"
                }`}
              >
                <p className="p-3 text-gray-900">
                  To search for properties in your desired city, use the search
                  bar on our platform. Enter the name of the city, and our
                  platform will provide listings in that location. HeavenHunter
                  covers a wide range of cities, so you can choose the perfect
                  setting for your future.
                </p>
              </div>
            </li>
            <li className="my-2 bg-white shadow-lg">
              <h2
                onClick={() => handleTabClick(3)}
                className="flex flex-row items-center justify-between p-3 font-semibold cursor-pointer"
              >
                <span>
                  Can I filter property listings based on my preferences?
                </span>
                <svg
                  className={`fill-current text-purple-700 h-6 w-6 transform transition-transform duration-500 ${
                    isTabOpen(1) ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                >
                  <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10" />
                </svg>
              </h2>
              <div
                className={`border-l-2 border-purple-600 overflow-hidden duration-500 ${
                  isTabOpen(3) ? "max-h-52" : "max-h-0"
                }`}
              >
                <p className="p-3 text-gray-900">
                  Yes, you can refine your property search by applying filters.
                  Filter by property type, price range, amenities, and more.
                  This ensures that you find listings that match your unique
                  criteria, making it easier to discover the properties that
                  pique your interest.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default FAQ;
