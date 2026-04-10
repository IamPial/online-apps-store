import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import HomePage from "../pages/homepage/HomePage";
import Apps from "../pages/apps/Apps";
import Installation from "../pages/installation/Installation";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import AppDetails from "../pages/details/AppDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "/apps",
        Component: Apps,
        loader: () => fetch("/apps.json"),
      },
      {
        path: "/apps/:id",
        Component: AppDetails,
        loader: () => fetch("/apps.json"),
      },
      {
        path: "/install",
        Component: Installation,
      },
      {
        path: "*",
        Component: NotFoundPage,
      },
    ],
  },
]);
