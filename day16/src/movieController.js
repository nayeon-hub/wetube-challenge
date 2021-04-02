import { getMovieById, getMovies, addMovie } from "./db";

export const home = (req, res) =>
  res.render("movies", { movies: getMovies(), pageTitle: "Movies!" });

export const movieDetail = (req, res) => {
  const {
    params: { id },
  } = req;
  const movie = getMovieById(id);
  if (!movie) {
    res.render("404", { pageTitle: "Movie not found" });
  }
  return res.render("detail", { movie, pageTitle: movie.title });
};

export const getMovieAdd = (req, res) => {
  res.render("add", { pageTitle: "Add Movie" });
};

export const postMovieAdd = (req, res) => {
  const { body } = req;
  const {
    body: { genres },
  } = req;
  const genreList = genres.split(",");
  const genreObj = { genres: genreList };
  const bodyObj = Object.assign(body, genreObj);
  addMovie(bodyObj);
  res.redirect("/");
};
