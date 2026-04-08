import React from "react";
import HomePage from "../pages/homepage/HomePage";

import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
