import React from "react";

export default function HowItWorks() {
  return (
    <section
      id="HowItWorks"
      className="pt-10 dark:text-gray-800 dark:bg-indigo-100"
    >
      <div className="container max-w-5xl px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-purple-600">
              <h3 className="text-3xl font-semibold">How It Works</h3>
            </div>
          </div>
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-purple-600">
                <h3 className="text-xl font-semibold tracki">Step 1 </h3>

                <p className="mt-1">
                  Begin your journey by signing up or logging into your account
                  on our platform. This personalized account will be your
                  gateway to discovering your dream property.
                </p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-purple-600">
                <h3 className="text-xl font-semibold tracki">Step 2</h3>

                <p className="mt-1">
                  Search for your desired city, where you envision your new home
                  or property. Our platform covers a wide range of locations, so
                  you can choose the perfect setting for your future.
                </p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-purple-600">
                <h3 className="text-xl font-semibold tracki">Step 3</h3>

                <p className="mt-1">
                  Refine your search by applying filters tailored to your
                  preferences. Filter by property type, price range, amenities,
                  and more. This ensures that you find listings that match your
                  unique criteria.
                </p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-purple-600">
                <h3 className="text-xl font-semibold tracki">Step 4 </h3>

                <p className="mt-1">
                  Explore the listings that match your criteria, and discover
                  the properties that pique your interest. Our detailed listings
                  provide comprehensive information and high-quality images to
                  help you make an informed decision.
                </p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-purple-600">
                <h3 className="text-xl font-semibold tracki">Step 5</h3>

                <p className="mt-1 ">
                  Once you've found your potential "HEAVEN", connect with
                  property owners or sellers directly through our platform. You
                  can inquire about the property, schedule visits, and take the
                  next steps toward making it your own.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
