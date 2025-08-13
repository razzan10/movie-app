import React, { useEffect, useState } from "react";
import _ from "lodash";

import "./MovieList.css";
import { motion } from "framer-motion";
import MovieCard from "./MovieCard";
import FilterGroup from "./FilterGroup";

const MovieList = ({ type, title }) => {
  const [movies, setMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [sort, setSort] = useState({
    by: "default",
    order: "asc",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchMovies();
  }, [type]);

  useEffect(() => {
    if (sort.by !== "default") {
      const sortedMovies = _.orderBy(filterMovies, [sort.by], [sort.order]);
      setFilterMovies(sortedMovies);
    }
  }, [sort]);

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${type}?api_key=c8eab4325e55663f3a389fcc74e98994`
      );
      const data = await response.json();
      setMovies(data.results);
      setFilterMovies(data.results);
    } catch (err) {
      console.error("Failed to fetch movies:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleFilter = (rate) => {
    if (rate === minRating) {
      setMinRating(0);
      setFilterMovies(movies);
    } else {
      setMinRating(rate);
      const filtered = movies.filter((movie) => movie.vote_average >= rate);
      setFilterMovies(filtered);
    }
  };

  const handleSort = (e) => {
    const { name, value } = e.target;
    setSort((prev) => ({ ...prev, [name]: value }));
  };

  // Variants untuk container & child
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="movie-list" id={type}>
      <header className="align_center movie-list-header">
        <h2 className="align_center movie-list-heading">{title}</h2>

        <div className="align_center movie-list-fs">
          <FilterGroup
            minRating={minRating}
            onRatingClick={handleFilter}
            ratings={[8, 7, 6, 5]}
          />

          <select
            name="by"
            onChange={handleSort}
            value={sort.by}
            className="movie-sorting"
          >
            <option value="default">SortBy</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>

          <select
            name="order"
            onChange={handleSort}
            value={sort.order}
            className="movie-sorting"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </header>

      {loading ? (
        <p className="loading-text">Loading...</p>
      ) : (
        <motion.div
          className="movie-cards"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {filterMovies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </motion.div>
      )}
    </section>
  );
};

export default MovieList;
