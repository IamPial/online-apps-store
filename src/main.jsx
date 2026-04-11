import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./routes/Routes";
import { RouterProvider } from "react-router/dom";
import { ToastContainer } from "react-toastify";
import AppContext from "./context/AppContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppContext>
      <RouterProvider router={router} />
      <ToastContainer autoClose={3000} />
    </AppContext>
  </StrictMode>,
);
