import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear,
} from "./db";

export const home = (req, res) => {
  res.render("movies", { movies: getMovies() });
};
export const movieDetail = (req, res) => {
  const {
    params: { id },
  } = req;
  res.render("detail", { theMovie: getMovieById(id) });
};
export const filterMovie = (req, res) => {
  const {
    query: { rating, year },
  } = req;

  console.log(rating);
  console.log(year);

  if (year) {
    res.render("404", { value: year });
  } else if (rating) {
    res.render("404", { value: rating });
  }
};
