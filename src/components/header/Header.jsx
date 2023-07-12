// import React from "react";
import logo from "../../assets/images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <nav>
      <a href="#">
        <img src={logo} alt="" />
      </a>
      <div>
        <a href="#">Order</a>
        <a href="#">Order Review</a>
        <a href="#">Manage Inventory</a>
        <a href="#">Login</a>
      </div>
    </nav>
  );
};

export default Header;
