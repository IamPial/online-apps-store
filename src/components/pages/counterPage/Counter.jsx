import React from "react";

const Counter = () => {
  return (
    <div className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] py-20">
      <div className="container mx-auto space-y-10">
        <h2 className=" text-4xl md:text-5xl text-white font-bold text-center">
          Trusted by Millions, Built for You
        </h2>
        <div className="grid grid-col-1 lg:grid-cols-3 gap-20 lg:gap-6 mx-auto">
          <div className="text-center space-y-4">
            <p className="text-[16px] text-white">Total Downloads</p>
            <h2 className="text-6xl font-extrabold text-white">29.6M</h2>
            <p className="text-[16px] text-white">21% more than last month</p>
          </div>
          <div className="text-center space-y-4">
            <p className="text-[16px] text-white">Total Reviews</p>
            <h2 className="text-6xl font-extrabold text-white">906K</h2>
            <p className="text-[16px] text-white">46% more than last month</p>
          </div>
          <div className="text-center space-y-4">
            <p className="text-[16px] text-white">Active Apps</p>
            <h2 className="text-6xl font-extrabold text-white">132+</h2>
            <p className="text-[16px] text-white">31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
