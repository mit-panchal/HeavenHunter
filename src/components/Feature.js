import React from "react";

export default function Feature() {
  return (
    <section
      id="Features"
      className="p-4 pt-20 lg:p-8 dark:bg-indigo-100 dark:text-gray-100"
    >
      <div className="container mx-auto space-y-12">
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <img
            src="https://source.unsplash.com/640x480/?house"
            alt=""
            className="h-80 dark:bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
            <h3 className="text-3xl font-bold">
              Effortless Account Management
            </h3>
            <p className="my-6 dark:text-gray-400">
              Create your account or log in seamlessly to unlock the full
              potential of our platform. Our user-friendly interface makes it
              easy to manage your profile and preferences, ensuring a
              personalized experience every time you visit.
            </p>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
          <img
            src="https://source.unsplash.com/640x480/?home"
            alt=""
            className="h-80 dark:bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
            <h3 className="text-3xl font-bold">Tailored Property Search</h3>
            <p className="my-6 dark:text-gray-400">
              Take control of your property search by selecting your desired
              city and applying customized filters. Find properties that match
              your exact criteria, from budget and location to specific
              amenities, making it easier than ever to discover your dream home.
            </p>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <img
            src="https://source.unsplash.com/640x480/?bulding"
            alt=""
            className="h-80 dark:bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
            <h3 className="text-3xl font-bold">Direct Owner Connections</h3>
            <p className="my-6 dark:text-gray-400">
              Connect directly with property owners and sellers through our
              platform. No middlemen, no delays. Take the initiative to inquire,
              schedule visits, and negotiate terms with confidence. Your path to
              homeownership or real estate investment is direct and hassle-free.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
