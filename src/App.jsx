import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MovieList from "./components/MovieList/MovieList";
import ErrorBoundary from "./erorrBoundary";
import Footer from "./components/Footer/Footer";

const categories = {
  popular: "Popular",
  top_rated: "Top Rated",
  upcoming: "Coming Soon",
  now_playing: "Now Playing",
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
        <MovieList type={activeCategory} title={categories[activeCategory]} />
        <Footer />
      </ErrorBoundary>
    </div>
  );
};

export default App;
