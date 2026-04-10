import React from "react";
import { HiOutlineDownload } from "react-icons/hi";
import { FaStar } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import spotify from "../../assets/images/spotify.jpg";
import AppDetailsCharts from "../../components/pages/AppDetailsCharts";
import { useLoaderData, useParams } from "react-router";

// {
//     "id": 25,
//     "name": "AllTrails",
//     "developer": "AllTrails, LLC",
//     "icon": "https://i.ibb.co.com/ZzYVr45z/alltrails.webp",
//     "size_mb": 188,
//     "rating": 4.8,
//     "stats": {
//       "downloads": "50M",
//       "total_reviews": "610K"
//     },
//     "ratings_breakdown": {
//       "5_star": 380000,
//       "4_star": 155000,
//       "3_star": 48000,
//       "2_star": 18000,
//       "1_star": 10000
//     },
//     "description": "AllTrails is the go-to hiking and trail navigation app with 400,000+ trails worldwide. Offline maps, custom routes, community reviews, and Outdoor Lens AR help you explore nature safely.",
//     "category": "Travel & Outdoors",
//     "install_label": "Install Now"
//   }

const AppDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();

  //generating bar chartData

  const obj = data.find((item) => item.id === parseInt(id));

  const barChartData = obj
    ? Object.entries(obj.ratings_breakdown).map(([key, value]) => ({
        star: key.replace("_star", " star"),
        count: value,
      }))
    : [];

  if (!obj) return null;

  console.log(obj);
  return (
    <div>
      <div className="container mx-auto">
        <div className="pt-20 pb-10 flex flex-col justify-center items-center lg:justify-normal lg:items-start lg:flex-row lg:px-0 px-4 gap-10">
          <img src={obj.icon} alt="demo" className="w-100 rounded-xl h-80" />
          <div className="flex-1">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-slate-900">{obj.name}</h2>
              <p className="text-xl text-gray-600">
                Developed by{" "}
                <span className="font-semibold text-[#632EE3]">
                  {obj.developer}
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
                    {obj.stats.downloads}
                  </span>
                </div>
                <div className="flex flex-col space-y-2">
                  <FaStar className=" text-3xl text-[#FF8811] " />
                  <span className="text-[16px] text-gray-500">
                    Average Ratings
                  </span>
                  <span className="font-extrabold text-[40px] text-slate-900">
                    {obj.rating}
                  </span>
                </div>
                <div className="flex flex-col space-y-2">
                  <BiSolidLike className="text-3xl  text-[#632EE3]" />
                  <span className="text-[16px] text-gray-500">
                    Total Reviews
                  </span>
                  <span className="font-extrabold text-[40px] text-slate-900">
                    {obj.stats.total_reviews}
                  </span>
                </div>
              </div>
              <button className="btn btn-lg bg-[#00D390] text-white">
                {obj.install_label} ({obj.size_mb}) MB
              </button>
            </div>
          </div>
        </div>
        <div className="divider h-0.5 bg-gray-300"></div>

        <AppDetailsCharts barChartData={barChartData} />
        <div className="divider h-0.5 bg-gray-300"></div>
        <div className="pt-10 pb-20 space-y-6">
          <h2 className="text-2xl font-semibold text-slate-950">Description</h2>
          <p className="text-lg text-gray-600 leading-8 ">{obj.description}</p>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
