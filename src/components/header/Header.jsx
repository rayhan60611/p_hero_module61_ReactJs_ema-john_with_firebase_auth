// import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <nav>
      <Link to="/home">
        <img src={logo} alt="" />
      </Link>
      <div>
        <Link to="/home">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/order-review">Order Review</Link>
        <Link to="/inventory">Manage Inventory</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Header;
