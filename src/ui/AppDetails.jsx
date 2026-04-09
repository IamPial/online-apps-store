import React from "react";
import { HiOutlineDownload } from "react-icons/hi";
import { FaStar } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";

import spotify from "../assets/images/spotify.jpg";
import AppDetailsCharts from "../components/pages/AppDetailsCharts";
const AppDetails = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="pt-20 pb-10 flex flex-col justify-center items-center lg:justify-normal lg:items-start lg:flex-row lg:px-0 px-4 gap-10">
          <img src={spotify} alt="demo" className="w-100 rounded-xl h-80" />
          <div className="flex-1">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-slate-900">
                SmPlan:ToDo List with Reminder
              </h2>
              <p className="text-xl text-gray-600">
                Developed by{" "}
                <span className="font-semibold text-[#632EE3]">
                  productive.io
                </span>{" "}
              </p>
            </div>
            <div className="divider h-0.5 bg-gray-300"></div>
            <div className="mt-7">
              <div className="flex gap-6 mb-7">
                <div className="flex flex-col space-y-2">
                  <HiOutlineDownload className="text-3xl text-[#00D390] " />
                  <span className="text-[16px] text-gray-500">Downloads</span>
                  <span className="font-extrabold text-[40px] text-slate-900">
                    8M
                  </span>
                </div>
                <div className="flex flex-col space-y-2">
                  <FaStar className=" text-3xl text-[#FF8811] " />
                  <span className="text-[16px] text-gray-500">
                    Average Ratings
                  </span>
                  <span className="font-extrabold text-[40px] text-slate-900">
                    4.9
                  </span>
                </div>
                <div className="flex flex-col space-y-2">
                  <BiSolidLike className="text-3xl  text-[#632EE3]" />
                  <span className="text-[16px] text-gray-500">
                    Total Reviews
                  </span>
                  <span className="font-extrabold text-[40px] text-slate-900">
                    54K
                  </span>
                </div>
              </div>
              <button className="btn btn-lg bg-[#00D390] text-white">
                Install Now (291 MB)
              </button>
            </div>
          </div>
        </div>
        <div className="divider h-0.5 bg-gray-300"></div>
      </div>

      <AppDetailsCharts />
    </div>
  );
};

export default AppDetails;
