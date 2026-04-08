import React from "react";
import { useLoaderData } from "react-router";

const Apps = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div>
      <div className="container mx-auto py-20">
        <div className="space-y-4 flex justify-center flex-col items-center">
          <h2 className="text-5xl font-bold ">Our All Applications</h2>
          <p className="text-xl text-gray-600">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        <div className="flex justify-between items-center py-10">
          <h2 className="text-2xl font-semibold">(132) Apps Found</h2>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" placeholder="Search" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Apps;
