// src/components/Preloader.js
import React from "react";
import "./Preloader.css"; // You'll style it here
import logo from "../images/portfolio-logo-removebg-preview.png";
const Preloader = () => {
  return (
    <div className="preloader">
      <img src={logo} alt="Loading..." className="preloader-logo" />
    </div>
  );
};

export default Preloader;
