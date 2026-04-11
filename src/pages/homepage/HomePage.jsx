import React from "react";

import Banner from "../../components/homepage/Banner";
import StatsSection from "../../components/homepage/StatsSection";
import TrendingPage from "../../components/homepage/TrendingPage";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <StatsSection />
      <TrendingPage />
    </div>
  );
};

export default HomePage;
