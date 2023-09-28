import React from "react";
import CountUp from "react-countup";

export default function WhyUs() {
  return (
    <div id="WhyUs" className="py-10 text-purple-800 bg-indigo-100 sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:max-w-none">
          <div className="space-y-4 text-center">
            <h2 className="text-5xl font-bold tracking-tight sm:text-5xl">
              Trusted by Users worldwide
            </h2>
            <p className="text-lg leading-8 text-indigo-800">
              Unlock Your Perfect Space: Find, Connect, and Secure Your Ideal
              Real Estate Heaven
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col ">
              <dt className="text-xl font-semibold leading-6 text-indigo-800">
                Number of Users
              </dt>
              <dd className="order-first text-5xl font-semibold tracking-tight">
                <CountUp
                  end={12}
                  duration={5}
                  formattingFn={(value) => `${value}k`}
                />{" "}
                {/* Set your final value (in thousands) and duration */}
              </dd>
            </div>
            <div className="flex flex-col bg-white/5">
              <dt className="text-xl font-semibold leading-6 text-indigo-800">
                Number of Properties
              </dt>
              <dd className="order-first text-5xl font-semibold tracking-tight">
                <CountUp
                  end={10}
                  duration={5}
                  formattingFn={(value) => `${value}k`}
                />{" "}
                {/* Set your final value (in thousands) and duration */}
              </dd>
            </div>
            <div className="flex flex-col bg-white/5">
              <dt className="text-xl font-semibold leading-6 text-indigo-800">
                Number of Dealers
              </dt>
              <dd className="order-first text-5xl font-semibold tracking-tight">
                <CountUp
                  end={6.6}
                  duration={5}
                  formattingFn={(value) => `${value}k`}
                />{" "}
                {/* Set your final value (in thousands) and duration */}
              </dd>
            </div>
            <div className="flex flex-col bg-white/5">
              <dt className="text-sm font-semibold leading-6 text-indigo-800">
                Total Deals
              </dt>
              <dd className="order-first text-5xl font-semibold tracking-tight">
                <CountUp
                  end={2.1}
                  duration={5}
                  formattingFn={(value) => `${value}k`}
                />{" "}
                {/* Set your final value (in thousands) and duration */}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
