import React from "react";
import HomePage from "../pages/homepage/HomePage";

import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { ToastContainer } from "react-toastify";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
      <ToastContainer autoClose={3000} />
    </div>
  );
};

export default RootLayout;
