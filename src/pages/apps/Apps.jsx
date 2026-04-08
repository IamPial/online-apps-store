import React from "react";
import { useLoaderData } from "react-router";
import { FaStar } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
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
          <h2 className="text-2xl font-semibold">({data.length}) Apps Found</h2>
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

        <div className="grid grid-cols-4 gap-4">
          {data.map((cardData, index) => {
            return (
              <div
                key={index}
                className="card bg-base-100 p-4 shadow-none hover:shadow-2xl transition-all duration-300 scale-95 hover:scale-100"
              >
                <figure className="mb-4">
                  <img
                    className="h-60 rounded-lg"
                    src={cardData.icon}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body p-0 space-y-4">
                  <h2 className="card-title">{cardData.name}</h2>
                  <div className="flex justify-between items-center gap-30">
                    <p className="bg-[#f1f5e8] flex justify-evenly items-center p-2 rounded-lg ">
                      <HiOutlineDownload className="text-[16px] text-[#00D390] " />
                      <span className="text-[16px] font-medium  text-[#00D390]">
                        {cardData.stats.downloads}
                      </span>
                    </p>
                    <p className="bg-[#fff0e1] flex justify-evenly items-center p-2  rounded-lg">
                      <FaStar className="text-[#FF8811] " />
                      <span className="text-[16px] font-medium  text-[#FF8811]">
                        {cardData.rating}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Apps;
