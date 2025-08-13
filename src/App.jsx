import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MovieList from "./components/MovieList/MovieList";
import ErrorBoundary from "./erorrBoundary";

const categories = {
  popular: "Popular",
  top_rated: "Top Rated",
  upcoming: "Coming Soon",
};
const App = () => {
  const [activeCategory, setActiveCategory] = useState("popular");
  return (
    <div className="app">
      <ErrorBoundary>
        <Navbar
          onCategoryChange={setActiveCategory}
          activeCategory={activeCategory}
        />
      </ErrorBoundary>
      <MovieList type={activeCategory} title={categories[activeCategory]} />
    </div>
  );
};

export default App;
