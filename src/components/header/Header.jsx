import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.svg";
import "./Header.css";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { authContext } from "../authProvider/AuthProviders";
import { toast } from "react-toastify";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { user, logOut } = useContext(authContext);

  const handleLogOut = () => {
    logOut();
    toast.success("Logout Successfull", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <div className="">
      <div
        onClick={() => setOpen(!open)}
        className="md:hidden bg-[#1c2b35] flex justify-between items-center p-3 duration-500"
      >
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        {!open ? (
          <Bars3Icon className="w-7 h-7 font-bold text-white hover:text-orange-300 duration-500" />
        ) : (
          <XMarkIcon className="w-7 h-7 font-bold text-white  hover:text-orange-300 duration-500" />
        )}
      </div>

      <div className={`md:block ${!open ? "hidden" : ""}`}>
        <div className="bg-[#161515]">
          {user ? (
            <div className="flex flex-col md:flex-row items-center justify-between py-2 px-2 gap-5">
              <p className="text-green-500 font-semibold">
                Welcome,
                <small className="text-white"> {user.email}</small>
              </p>
              <button
                onClick={handleLogOut}
                className="text-white bg-red-500 px-3 rounded hover:bg-red-800"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div className="flex  justify-between px-5 md:px-0 md:justify-center items-center py-1 gap-5">
              <Link
                className="text-white font-bold hover:text-orange-500 duration-500"
                to="/signup"
              >
                Sign Up
              </Link>
              <Link
                className="text-white font-bold hover:text-orange-500 duration-500"
                to="/login"
              >
                Login
              </Link>
            </div>
          )}
        </div>
        <hr />
        <nav>
          <Link to="/" className="hidden md:block">
            <img src={logo} alt="" />
          </Link>
          <div className="">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/order-review">Order Review</Link>
            <Link to="/inventory">Manage Inventory</Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
