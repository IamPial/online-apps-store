import React from "react";

import playStore from "../../assets/images/play.png";
import appStore from "../../assets/images/app.png";
import bannerImg from "../../assets/images/hero.png";
import Counter from "./Counter";

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
    </div>
  );
};

export default HomePage;
