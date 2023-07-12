import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./components/notFoundPage/NotFoundPage.jsx";
import Shop from "./components/shop/Shop.jsx";
import OrderReview from "./components/orderReview/OrderReview.jsx";
import Login from "./components/login/Login.jsx";
import Invenroty from "./components/intentory/Invenroty.jsx";
import Home from "./components/home/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "order-review",
        element: <OrderReview />,
      },
      {
        path: "inventory",
        element: <Invenroty />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
