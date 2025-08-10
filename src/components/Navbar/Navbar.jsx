import React from "react";
import "./Navbar.css";
import { FaChartLine, FaClapperboard, FaStar } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Movie App</h1>

      <div className="navbar-links">
        <a href="">
          Popular
          <FaChartLine className="navbar-emoji" />
        </a>
        <a href="">
          Top Rated
          <FaStar className="navbar-emoji" />
        </a>
        <a href="">
          Coming Soon
          <FaClapperboard className="navbar-emoji" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
