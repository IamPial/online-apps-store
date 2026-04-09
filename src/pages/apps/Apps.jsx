import React, { useState } from "react";
import { useLoaderData } from "react-router";

import AppFoundErrorPage from "../NotFoundPage/AppFoundErrorPage";
import Card from "../../ui/Card";
import AppDetails from "../details/AppDetails";
const Apps = () => {
  const data = useLoaderData();

  //generating bar chartData
  const [selectId, setSelectId] = useState(null);

  const obj = data.find((item) => item.id === selectId);

  const barChartData = Object.entries(obj?.ratings_breakdown || {}).map(
    ([key, value]) => ({
      star: key.replace("_star", " star"),
      count: value,
    }),
  );

  // for search functionality
  const [searchItem, setSearchItem] = useState("");

  const search = data.filter((searchingData) =>
    searchingData.name.toLowerCase().includes(searchItem.toLowerCase()),
  );
  const allData = search.length > 0 ? search : data;
  const errorMessage = searchItem.length > 0 && search.length === 0;
  const dataLength = 0;

  return (
    <div>
      <div className="container mx-auto py-20">
        <div className="space-y-4 flex justify-center flex-col items-center">
          <h2 className="text-5xl font-bold ">Our All Applications</h2>
          <p className="text-center text-md md:text-xl text-gray-600">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-5 md:gap-0 justify-between items-center py-10">
          <h2 className="text-2xl font-semibold">
            ({errorMessage ? dataLength : allData.length}) Apps Found
          </h2>
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
            <input
              onChange={(e) => setSearchItem(e.target.value)}
              type="search"
              placeholder="Search"
            />
          </label>
        </div>

        <div>
          {errorMessage ? (
            <AppFoundErrorPage />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4 md:px-0">
              {allData.map((cardData) => {
                return (
                  <Card
                    key={cardData.id}
                    cardData={cardData}
                    setSelectId={setSelectId}
                  ></Card>
                );
              })}
            </div>
          )}
        </div>
        {obj && <AppDetails obj={obj} barChartData={barChartData} />}
      </div>
    </div>
  );
};

export default Apps;
