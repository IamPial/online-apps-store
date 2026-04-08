import React from "react";
import errorImg from "../../assets/images/error-404.png";
import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div className="container mx-auto py-4">
      <div className="">
        <img src={errorImg} alt="ErrorMessage" className=" mx-auto py-4" />
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-semibold text-slate-900">
            Oops, page not found!
          </h2>
          <p className="text-xl text-gray-400">
            The page you are looking for is not available.
          </p>
          <Link
            to="/"
            className="btn btn-lg text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2]"
          >
            Go Back!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
