import React from "react";
import { FaStar } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { Link } from "react-router";
const Card = ({ cardData, setSelectId }) => {
  return (
    <Link
      to={`/apps/${cardData.id}`}
      onClick={() => setSelectId(cardData.id)}
      className="card bg-base-100 p-4 shadow-none hover:shadow-2xl transition-all duration-300 scale-95 hover:scale-100"
    >
      <figure className="mb-4">
        <img className="h-60 rounded-lg" src={cardData.icon} alt="Shoes" />
      </figure>
      <div className="card-body p-0 space-y-4">
        <h2 className="card-title">{cardData.name}</h2>
        <div className="flex justify-between items-center gap-30">
          <p className="bg-[#f1f5e8] flex justify-evenly items-center p-2 rounded-lg ">
            <HiOutlineDownload className="text-[16px] text-[#00D390] " />
            <span className="text-[16px] font-medium  text-[#00D390]">
              {cardData.stats.downloads}
            </span>
          </p>
          <p className="bg-[#fff0e1] flex justify-evenly items-center p-2  rounded-lg">
            <FaStar className="text-[#FF8811] " />
            <span className="text-[16px] font-medium  text-[#FF8811]">
              {cardData.rating}
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
