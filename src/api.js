import axios from "axios";

const apiKey = "7e4775904b33e406f85d6b4656cfc644";
const baseUrl = "https://api.themoviedb.org/3/";

export const getMovieList = async () => {
  const movie = await axios.get(`${baseUrl}movie/popular?api_key=${apiKey}`);
  return movie.data.results;
};

export const searchMovie = async (q) => {
  const search = await axios.get(
    `${baseUrl}search/movie?api_key=${apiKey}&query=${q}`
  );
  return search.data;
};
