import React from "react";

const Stats = ({ title, desc, count }) => {
  return (
    <div className="text-center space-y-4">
      <p className="text-[16px] text-white">{title}</p>
      <h2 className="text-6xl font-extrabold text-white">{count}</h2>
      <p className="text-[16px] text-white">{desc}</p>
    </div>
  );
};

export default Stats;
