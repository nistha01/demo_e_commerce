import { useState } from "react";
import  './About.css' ;

const About = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    fetch('https://swapi.dev/api/films/')
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  };

  return (
    <>
      <div className="header">
        <h1>Star Wars Movies</h1>
        <button onClick={fetchMovies} className="fetch-button">Fetch Data</button>
      </div>
      <div className="movie-list">
        {movies.length > 0 ? (
          movies.map((movie, index) => (
            <div className="movie-card" key={index}>
              <h2>{movie.title}</h2>
              <p><strong>Episode:</strong> {movie.episode_id}</p>
              <p><strong>Release Date:</strong> {movie.release_date}</p>
              <p><strong>Director:</strong> {movie.director}</p>
              <p><strong>Producer:</strong> {movie.producer}</p>
              <div className="opening-crawl">
                <strong>Opening Crawl:</strong>
                <p>{movie.opening_crawl}</p>
              </div>
            </div>
          ))
        ) : (
          <p></p>
        )}
      </div>
    </>
  );
};

export default About;
