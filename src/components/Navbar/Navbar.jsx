import React from "react";
import "./Navbar.css";
import { FaChartLine, FaClapperboard, FaStar } from "react-icons/fa6";
import { AiFillCaretRight } from "react-icons/ai";

const Navbar = ({ onCategoryChange, activeCategory }) => {
  const handleClick = (e, category) => {
    e.preventDefault();
    onCategoryChange(category);
  };

  return (
    <nav className="navbar">
      <h1>Movie App</h1>

      <div className="navbar-links">
        <a
          href="#popular"
          onClick={(e) => handleClick(e, "popular")}
          className={activeCategory === "popular" ? "active" : ""}
        >
          Popular
          <FaChartLine className="navbar-emoji" />
        </a>
        <a
          href="#top_rated"
          onClick={(e) => handleClick(e, "top_rated")}
          className={activeCategory === "top_rated" ? "active" : ""}
        >
          Top Rated
          <FaStar className="navbar-emoji" />
        </a>
        <a
          href="#upcoming"
          onClick={(e) => handleClick(e, "upcoming")}
          className={activeCategory === "upcoming" ? "active" : ""}
        >
          Coming Soon
          <FaClapperboard className="navbar-emoji" />
        </a>
        <a
          href="#now_playing"
          onClick={(e) => handleClick(e, "now_playing")}
          className={activeCategory === "now_playing" ? "active" : ""}
        >
          Now Playing
          <AiFillCaretRight className="navbar-emoji" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
