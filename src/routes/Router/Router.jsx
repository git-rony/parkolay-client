import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../../layouts/MainLayOut/MainLayOut";
import Home from "../../pages/Home/Home";
import Products from "../../pages/Products/Products";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    errorElement: <p className="text-center text-4xl">Error page Not Found</p>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
    ],
  },
]);
