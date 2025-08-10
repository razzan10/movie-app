import React from "react";
import "./MovieCard.css";
import { FaStar } from "react-icons/fa6";

const MovieCard = () => {
  return (
    <a href="" className="movie-card">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReWoXR4SQXbCwXRNc-oLsU66ArBMOG9jPUpw&s"
        alt="movie poster"
        className="movie-poster"
      />

      <div className="movie-details">
        <h3 className="movie-details-heading">Movie Name</h3>
        <div className="align_center movie-date-rate">
          <p>10-10-20</p>
          <p>
            8.0 <FaStar className="card-emoji" />
          </p>
        </div>
        <p className="movie-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, officia
          hic. Illum dolorem reiciendis asperiores.
        </p>
      </div>
    </a>
  );
};

export default MovieCard;
