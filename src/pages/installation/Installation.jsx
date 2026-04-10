import React, { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { RiDownload2Line } from "react-icons/ri";
import { FaStar } from "react-icons/fa6";

const Installation = () => {
  const [apps, setApps] = useState(
    JSON.parse(localStorage.getItem("selectItem")) || [],
  );

  const handleDelete = (id) => {
    const deleteApps = apps.filter((item) => item.id !== id);
    console.log(deleteApps);
    setApps(deleteApps);
    localStorage.setItem("selectItem", JSON.stringify(deleteApps));
  };

  return (
    <div className="container mx-auto py-20">
      <div className="space-y-4 flex justify-center flex-col items-center">
        <h2 className="text-5xl font-bold ">Your Installed Apps</h2>
        <p className="text-center text-md md:text-xl text-gray-600">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex flex-col-reverse md:flex-row gap-5 md:gap-0 justify-between items-center py-10">
        <h2 className="text-2xl font-semibold">1 Apps Found</h2>
        <div className="dropdown dropdown-center">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort By Size <TiArrowSortedDown />
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-36 p-2 shadow-sm"
          >
            <li>
              <a>Name</a>
            </li>
            <li>
              <a>Rating</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="space-y-4">
        {apps.map((app) => (
          <div
            key={app.id}
            className="flex justify-between items-center  rounded-lg p-2 shadow-sm "
          >
            <div className="flex gap-4 items-center ">
              <div className="w-25">
                <img
                  src={app.icon}
                  alt={app.name}
                  className="rounded-lg  h-20 "
                />
              </div>
              <div className="flex gap-4 flex-col">
                <h2 className="font-medium text-xl text-slate-900">
                  {app.name}
                </h2>
                <div className="flex gap-4 ">
                  <span className=" flex gap-1 items-center text-[#00D390]">
                    <RiDownload2Line className="text-[#00D390]" />{" "}
                    {app.downloads}
                  </span>
                  <span className=" flex gap-1 items-center text-[#FF8811]">
                    <FaStar className="text-[#FF8811]" /> {app.rating}
                  </span>
                  <span className="text-gray-600">{app.size_mb}MB</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => handleDelete(app.id)}
              className="btn btn-lg bg-[#00D390] text-white  rounded-lg"
            >
              Uninstall
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
