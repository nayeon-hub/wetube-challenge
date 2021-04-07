/*
You DONT have to import the Movie with your username.
Because it's a default export we can nickname it whatever we want.
So import Movie from "./models"; will work!
You can do Movie.find() or whatever you need like normal!
*/
import Movie from "./models/Movie";

export const home = async (req, res) => {
  try {
    const movies = await Movie.find({}).sort({ title: 1 });
    res.render("home", { pageTitle: "Home", movies });
  } catch (error) {
    res.render("home", { pageTitle: "Home", movies: [] });
    console.log("ERORR!!!!!!!");
  }
};

export const movieDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const movie = await Movie.findById(id);
    res.render("movieDetail", { pageTitle: movie.title, movie });
  } catch (error) {
    res.redirect("/");
  }
};

export const getCreate = (req, res) => {
  res.render("create", { pageTitle: "Create" });
};

export const postCreate = async (req, res) => {
  const {
    body: { title, year, rating, synopsis, genres },
  } = req;
  const g = genres.split(",");
  const movie = await Movie.create({
    title,
    year,
    rating,
    synopsis,
    genres: g,
  });

  res.render("movieDetail", { pageTitle: movie.title, movie });
};

export const getEdit = async (req, res) => {
  const {
    params: { id },
  } = req;
  const movie = await Movie.findById(id);
  res.render("movieEdit", { pageTitle: movie.title, movie });
};

export const postEdit = async (req, res) => {
  const {
    params: { id },
    body: { title, synopsis, year, genres, rating },
  } = req;

  const g = genres.split(",");
  try {
    await Movie.findOneAndUpdate(
      { _id: id },
      {
        title,
        year,
        synopsis,
        genres: g,
        rating,
      }
    );
    res.redirect(`/${id}`);
  } catch (error) {
    console.log(error);
  }
};

export const movieDelete = async (req, res) => {
  const {
    params: { id },
  } = req;

  try {
    await Movie.findOneAndDelete({ _id: id });
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

export const movieSearch = async (req, res) => {
  const {
    query: { option, search },
  } = req;
  let movies = [];
  try {
    if (String(option) == "title") {
      movies = await Movie.find({
        title: search,
      });
    } else if (option == "year") {
      movies = await Movie.find({
        year: search,
      });
    } else if (option == "rating") {
      movies = await Movie.find({
        rating: search,
      });
    } else if (option == "genres") {
      movies = await Movie.find({
        genres: search,
      });
    }
    res.render("movieSearch", { pageTitle: "Search", search, movies });
    console.log(movies);
  } catch (error) {
    console.log(error);
  }
};
