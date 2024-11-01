import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import MainLayOut from "./layouts/MainLayOut/MainLayOut.jsx";
import { router } from "./routes/Router/Router.jsx";
createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router}>
      <MainLayOut />
    </RouterProvider>
  </>
);
