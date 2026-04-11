import React, { Suspense } from "react";

import Counter from "../../components/pages/counterPage/Counter";
import TrendingPage from "../../components/pages/trendingPage/trendingPage";
import Banner from "../../components/homepage/Banner";

const fetchData = fetch("/home.json").then((res) => res.json());

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Counter />
      <Suspense
        fallback={
          <div className="py-20 flex justify-center items-center">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        }
      >
        <TrendingPage fetchData={fetchData}></TrendingPage>
      </Suspense>
    </div>
  );
};

export default HomePage;
