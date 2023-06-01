import React from "react";
import { getMovieList, searchMovie } from "../api";
import { useEffect, useState } from "react";
import MovieSearch from "./MovieSearch";

const MovieList = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const handleSearch = async (query) => {
    if (query.length > 3) {
      const searchResult = await searchMovie(query);
      setPopularMovies(searchResult.results);
    } else if (query === "") {
      getMovieList().then((result) => {
        setPopularMovies(result);
      });
    }
  };

  const PopularMovieList = () => {
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          {popularMovies.map((movie, i) => (
            <div
              className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center"
              key={i}
            >
              <div className="card movie_card">
                <img
                  src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
                  className="card-img-top"
                  alt={movie.title}
                />
                <div className="card-body">
                  <i
                    className="fas fa-play play_button"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Play Trailer"
                  ></i>
                  <h5 className="card-title">{movie.title}</h5>
                  <div className="d-flex justify-content-between">
                    <span className="movie_info date">
                      <i className="fas fa-calendar"></i> {movie.release_date}
                    </span>
                    <span className="movie_info rate">
                      <i className="fas fa-star"></i> {movie.vote_average}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      <MovieSearch onSearch={handleSearch} />

      <PopularMovieList />
    </div>
  );
};

export default MovieList;
