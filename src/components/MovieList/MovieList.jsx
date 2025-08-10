import React from "react";
import "./MovieList.css";
import { FaChartLine, FaClapperboard, FaStar } from "react-icons/fa6";
import MovieCard from "./MovieCard";

const MovieList = () => {
  return (
    <section className="movie-list">
      <header className="align_center movie-list-header">
        <h2 className="align_center movie-list-heading">
          Popular <FaChartLine className="navbar-emoji" />
        </h2>

        <div className="align_center movie-list-fs">
          <ul className="align_center movie-filter">
            <li className="movie-filter-item active">
              8+ <FaStar />
            </li>
            <li className="movie-filter-item">
              7+ <FaStar />
            </li>
            <li className="movie-filter-item">
              6+ <FaStar />
            </li>
          </ul>

          <select name="" id="" className="movie-sorting">
            <option value="">SortBy</option>
            <option value="">Date</option>
            <option value="">Rating</option>
          </select>
          <select name="" id="" className="movie-sorting">
            <option value="">Asceding</option>
            <option value="">Descending</option>
          </select>
        </div>
      </header>

      <div className="movie-cards">
        <MovieCard />
      </div>
    </section>
  );
};

export default MovieList;
