import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <ul className="navbar-list">
        <li><Link to="/" className="navbar-link">Home</Link></li>
        <li><Link to="/blog" className="navbar-link">Blog</Link></li>
        <li><Link to="/contact-us" className="navbar-link">ContactUs</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
