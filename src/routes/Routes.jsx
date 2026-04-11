import { createBrowserRouter } from "react-router";

import RootLayout from "./../layout/RootLayout";
import HomePage from "../pages/homepage/HomePage";
import Apps from "./../pages/apps/Apps";
import Installation from "./../pages/installation/Installation";
import AppDetails from "./../pages/details/AppDetails";
import ErrorPage from "../pages/error/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/apps",
        element: <Apps />,
      },
      {
        path: "/apps/:id",
        element: <AppDetails />,
        loader: () => fetch("/apps.json"),
      },
      {
        path: "/install",
        element: <Installation />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
