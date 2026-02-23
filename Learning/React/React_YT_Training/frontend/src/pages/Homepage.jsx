import React from "react";
import MovieCard from "../components/Moviecard";

function Homepage() {
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
  return (
    <div className="home">
      home is working
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Homepage;
