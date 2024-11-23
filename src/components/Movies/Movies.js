import React, { useContext, useState } from "react";
import { ModalContext } from "./ModalContext";
import "./Movies.css";
import AddMovies from "./AddMovies";

const Movies = () => {
  const { toggleModal,addMovieHandler,movies,setMovies} = useContext(ModalContext);
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchMovies = () => {
    setLoading(true);
    setError("");
    fetch("https://swapi.dev/api/films/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch movies. Please check the URL.");
        }
        return response.json();
      })
      .then((data) => {
        if (!data.results) {
          throw new Error("Unexpected response format.");
        }
        setMovies((prev) => [...prev,...data.results]);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
        setError(error.message);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="about-page">
      <div className="header">
        <h1>Star Wars Movies</h1>
        <button onClick={fetchMovies} className="fetch-button">
          Fetch Data
        </button>
        <button onClick={toggleModal} className="fetch-button">
          Add Movie
        </button>
      </div>
      <AddMovies/>
      <div className="movie-list">
        {loading && <div className="loading">Loading...</div>}
        {error && <div className="error-message">{error}</div>}
        {movies.length > 0 ? (
          movies.map((movie, index) => (
            <div className="movie-card" key={index}>
              <h2>{movie.title}</h2>
              <p>
                <strong>Episode:</strong> {movie.episode_id}
              </p>
              <p>
                <strong>Release Date:</strong> {movie.release_date}
              </p>
              <p>
                <strong>Director:</strong> {movie.director}
              </p>
              <p>
                <strong>Producer:</strong> {movie.producer}
              </p>
              <div className="opening-crawl">
                <strong>Opening Crawl:</strong>
                <p>{movie.opening_crawl}</p>
              </div>
            </div>
          ))
        ) : (
          !loading && !error && <p className="center-text">No movies to display.</p>
        )}
      </div>
    </div>
  );
};

export default Movies;
