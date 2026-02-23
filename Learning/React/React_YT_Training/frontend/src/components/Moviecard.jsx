import React from "react";

function MovieCard({ movie }) {
  function onFavoriteClick() {
    alert("click");
  }
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.url || null} alt={movie.title} />
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={onFavoriteClick}>
            ⭐
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
        <p>{movie.description}</p>
      </div>
    </div>
  );
}

export default MovieCard;
