import React, { Suspense } from "react";

import playStore from "../../assets/images/play.png";
import appStore from "../../assets/images/app.png";
import bannerImg from "../../assets/images/hero.png";
import Counter from "../../components/pages/counterPage/Counter";
import TrendingPage from "../../components/pages/trendingPage/trendingPage";

const fetchData = fetch("/home.json").then((res) => res.json());

const HomePage = () => {
  return (
    <div>
      <div className="container mx-auto pt-20">
        <div className="space-y-6">
          <h2 className="text-7xl font-semibold text-center leading-20">
            We Build <br />{" "}
            <span className="font-bold text-purple-500">Productive</span> Apps
          </h2>
          <p className="text-center text-lg text-gray-500">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. <br /> Our goal is to turn your
            ideas into digital experiences that truly make an impact.
          </p>
          <div className="flex gap-2 space-y-8 justify-center">
            <button className="btn btn-lg ">
              <img src={playStore} alt="play store" className="w-4" />
              Google Play
            </button>
            <button className="btn btn-lg">
              <img src={appStore} alt="app store" className="w-4" />
              App Store
            </button>
          </div>
        </div>
        <div>
          <img className="mx-auto" src={bannerImg} alt="Banner" />
        </div>
      </div>
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
