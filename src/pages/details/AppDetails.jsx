import React, { useContext, useState } from "react";
import { HiOutlineDownload } from "react-icons/hi";
import { FaStar } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import AppDetailsCharts from "../../components/pages/barCharts/AppDetailsCharts";
import { Link, useParams } from "react-router";
import { toast } from "react-toastify";
import useApps from "../../hooks/useApps";
import { RingLoader } from "react-spinners";
import { CreateAppContext } from "../../context/AppContext";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();
  const { installedApps, setInstalledApps } = useContext(CreateAppContext);
  const [btnIsSelect, setBtnIsSelect] = useState(false);

  //for handling undefined data with loading spinners
  if (loading) {
    return (
      <div className="py-20 flex justify-center items-center">
        <RingLoader color="#000" />
      </div>
    );
  }

  //generating bar chartData
  const expectedApp = apps.find((item) => item.id === parseInt(id));
  const barChartData = Object.entries(expectedApp.ratings_breakdown).map(
    ([key, value]) => ({
      star: key.replace("_star", " star"),
      count: value,
    }),
  );

  const handleInstallButton = () => {
    const isExistingApps = installedApps.find(
      (item) => item.id === expectedApp.id,
    );
    if (isExistingApps) {
      toast.error(`${expectedApp.name} Already Installed`);
      return;
    }
    setInstalledApps([...installedApps, expectedApp]);
    toast.success(`${expectedApp.name} Installed Successfully`);
    setBtnIsSelect(true);
  };

  console.log("installed apps", installedApps);

  return (
    <div>
      <div className="container mx-auto px-2 md:px-0">
        <div className="pt-20 pb-10 flex flex-col justify-center items-center lg:justify-normal lg:items-start lg:flex-row lg:px-0 px-4 gap-10">
          <img
            src={expectedApp.icon}
            alt="demo"
            className="w-100 rounded-xl h-80"
          />
          <div className="flex-1">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-slate-900">
                {expectedApp.name}
              </h2>
              <p className="text-xl text-gray-600">
                Developed by{" "}
                <span className="font-semibold text-[#632EE3]">
                  {expectedApp.developer}
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
                    {expectedApp.stats.downloads}
                  </span>
                </div>
                <div className="flex flex-col space-y-2">
                  <FaStar className=" text-3xl text-[#FF8811] " />
                  <span className="text-[16px] text-gray-500">
                    Average Ratings
                  </span>
                  <span className="font-extrabold text-[40px] text-slate-900">
                    {expectedApp.rating}
                  </span>
                </div>
                <div className="flex flex-col space-y-2">
                  <BiSolidLike className="text-3xl  text-[#632EE3]" />
                  <span className="text-[16px] text-gray-500">
                    Total Reviews
                  </span>
                  <span className="font-extrabold text-[40px] text-slate-900">
                    {expectedApp.stats.total_reviews}
                  </span>
                </div>
              </div>
              <button
                onClick={handleInstallButton}
                className={`btn btn-lg ${btnIsSelect === true ? "bg-gray-300 " : "bg-[#00D390]"} text-white`}
                disabled={btnIsSelect}
              >
                {btnIsSelect
                  ? "Installed"
                  : `${expectedApp.install_label} (${expectedApp.size_mb}) MB`}
              </button>
            </div>
          </div>
        </div>
        <div className="divider h-0.5 bg-gray-300"></div>

        <AppDetailsCharts barChartData={barChartData} />
        <div className="divider h-0.5 bg-gray-300"></div>
        <div className="pt-10 pb-20 space-y-6">
          <h2 className="text-2xl font-semibold text-slate-950">Description</h2>
          <p className="text-lg text-gray-600 leading-8 ">
            {expectedApp.description}
          </p>
        </div>

        <div className="flex justify-center items-center py-2">
          <Link
            to="/apps"
            className="btn btn-lg btn-primary mx-auto text-center"
          >
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
