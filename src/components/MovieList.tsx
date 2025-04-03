import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/MovieList.css";
import { API_KEY, BASE_URL } from "../services/tmdb"; 


interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function fetchMovies() {
      const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
      setMovies(response.data.results);
    }
    fetchMovies();
  }, []);

  return (
    <div className="movie-list">
      <h2>Trending Now</h2>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
