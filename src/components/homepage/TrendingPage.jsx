import React, { useEffect, useState } from "react";
import { Link } from "react-router";

import Card from "./../../ui/Card";

const TrendingPage = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/home.json");
      const data = await res.json();
      setApps(data);
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto py-20">
      <div className="space-y-4 flex justify-center flex-col items-center pb-10">
        <h2 className="text-5xl font-bold ">Trending Apps</h2>
        <p className="text-center text-md md:text-xl text-gray-600">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4 md:px-0">
        {apps.map((homeCard, index) => {
          return <Card cardData={homeCard} key={index} />;
        })}
      </div>
      <div className="flex justify-center items-center pt-20">
        <Link to="/apps" className="btn btn-lg btn-primary mx-auto text-center">
          Show More
        </Link>
      </div>
    </div>
  );
};

export default TrendingPage;
