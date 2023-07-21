import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.svg";
import "./Header.css";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [open, setOpen] = useState(false);
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
        <nav>
          <Link to="/" className="hidden md:block">
            <img src={logo} alt="" />
          </Link>
          <div className="">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/order-review">Order Review</Link>
            <Link to="/inventory">Manage Inventory</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
