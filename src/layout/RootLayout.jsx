import React from "react";
import HomePage from "../pages/homepage/HomePage";

import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div>
      <HomePage />
      <Outlet />
    </div>
  );
};

export default RootLayout;
