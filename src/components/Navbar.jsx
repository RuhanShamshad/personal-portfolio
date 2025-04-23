import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/portfolio-logo-removebg-preview.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Loading..." className="logo" />
      </div>
      <ul className="navbar-list">
        <li>
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/blog" className="navbar-link">
            Blog
          </Link>
        </li>
        <li>
          <Link to="/contact-us" className="navbar-link">
            ContactUs
          </Link>
        </li>
        <li>
          <Link to="/my-projects" className="navbar-link">
            My Projects
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
