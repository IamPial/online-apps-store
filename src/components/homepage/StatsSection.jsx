import React from "react";
import Stats from "../shared/Stats";

const StatsSection = () => {
  const statusItems = [
    {
      title: "Total Downloads",
      count: "29.6M",
      desc: "21% more than last month",
    },
    {
      title: "Total Reviews",
      count: "906K",
      desc: "46% more than last month",
    },
    {
      title: "Active Apps",
      count: "132+",
      desc: "31 more will Launch",
    },
  ];

  return (
    <div className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] py-20">
      <div className="container mx-auto space-y-10">
        <h2 className=" text-4xl md:text-5xl text-white font-bold text-center">
          Trusted by Millions, Built for You
        </h2>
        <div className="grid grid-col-1 lg:grid-cols-3 gap-20 lg:gap-6 mx-auto">
          {statusItems.map((item, index) => (
            <Stats
              key={index}
              title={item.title}
              count={item.count}
              desc={item.desc}
            ></Stats>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
