import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear,
} from "./db";

export const home = (req, res) => {
  res.render("movies", { movieList: getMovies(), header: "Movies!" });
};

export const movieDetail = (req, res) => {
  const {
    params: { id },
  } = req;
  res.render("detail", {
    theMovie: getMovieById(id),
    movieName: getMovieById(id).title,
  });
};

export const filterMovie = (req, res) => {
  const {
    query: { rating, year },
  } = req;

  if (year) {
    res.render("movies", {
      movieList: getMovieByMinimumYear(year),
      header: `Searching by year: ${year}`,
    });
  } else if (rating) {
    res.render("movies", {
      movieList: getMovieByMinimumRating(rating),
      header: `Searching by rating: ${rating}`,
    });
  }
};
