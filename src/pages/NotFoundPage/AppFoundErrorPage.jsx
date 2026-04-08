import React from "react";
import { Link } from "react-router";
import errorImg from "../../assets/images/App-Error.png";

const AppFoundErrorPage = () => {
  return (
    <div className="container mx-auto py-20 px-4 lg:px-0">
      <img src={errorImg} alt="Error" className="mx-auto mb-7" />
      <div className="flex justify-center items-center flex-col space-y-5 text-center">
        <h2 className="font-semibold text-3xl md:text-5xl">
          OPPS!! APP NOT FOUND
        </h2>
        <p className="text-md md:text-xl text-gray-600">
          The App you are requesting is not found on our system. please try
          another apps
        </p>
        <Link
          to="/"
          className="btn btn-lg text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2]"
        >
          Go Back!
        </Link>
      </div>
    </div>
  );
};

export default AppFoundErrorPage;
