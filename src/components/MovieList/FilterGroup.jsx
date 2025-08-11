import React from "react";
import { FaStar } from "react-icons/fa6";

const FilterGroup = ({ minRating, onRatingClick, ratings }) => {
  return (
    <ul className="align_center movie-filter">
      {ratings.map((rate) => (
        <li
          className={
            minRating === rate
              ? "movie-filter-item active"
              : "movie-filter-item"
          }
          key={rate}
          onClick={() => onRatingClick(rate)}
        >
          {rate}+ <FaStar />
        </li>
      ))}
    </ul>
  );
};

export default FilterGroup;
