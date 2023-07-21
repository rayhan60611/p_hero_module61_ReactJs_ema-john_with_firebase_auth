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
import customLoader from "./loader/CustomLoader.js";
import SignUp from "./components/signUp/SignUp.jsx";
import AuthProviders from "./components/authProvider/AuthProviders.jsx";
import PrivateRoute from "./components/privateRoute/Privateroute.jsx";
import LoginSignupPrivate from "./components/privateRoute/LoginSignupPrivate.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "order-review",
        element: (
          <PrivateRoute>
            <OrderReview />
          </PrivateRoute>
        ),
        loader: customLoader,
      },
      {
        path: "inventory",
        element: (
          <PrivateRoute>
            <Invenroty />
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: (
          <LoginSignupPrivate>
            <Login />
          </LoginSignupPrivate>
        ),
      },
      {
        path: "signup",
        element: (
          <LoginSignupPrivate>
            <SignUp />
          </LoginSignupPrivate>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);
