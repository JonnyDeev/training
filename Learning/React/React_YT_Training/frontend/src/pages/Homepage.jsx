import React, { useState } from "react";
import MovieCard from "../components/Moviecard";

function Homepage() {
  const [search, setSearch] = useState("");
  const movies = [
    {
      id: 1,
      title: "john Week",
      url: "x.com",
      release_date: "1998",
      description: "This is a good movie",
    },
    {
      id: 2,
      title: "Barman",
      url: "x.com",
      release_date: "2024",
      description: "This is a bad movie",
    },
    {
      id: 3,
      title: "Max Mad",
      url: "x.com",
      release_date: "2006",
      description: "This is an ok movie",
    },
    {
      id: 4,
      title: "Eye Robot",
      release_date: "2019",
      url: "x.com",
      description: "This is a great movie",
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(search);
  };
  const handleSearchInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies"
          className="search-input"
          value={search}
          onChange={handleSearchInput}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Homepage;
