import React, { Suspense } from "react";

import Banner from "../../components/homepage/Banner";
import StatsSection from "../../components/homepage/StatsSection";
import TrendingPage from "../../components/homepage/TrendingPage";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <StatsSection />
      {/* <Suspense
        fallback={
          <div className="py-20 flex justify-center items-center">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        }
      >
      </Suspense> */}
      <TrendingPage></TrendingPage>
    </div>
  );
};

export default HomePage;
