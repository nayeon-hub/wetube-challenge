import express from "express";
import {
  home,
  movieDetail,
  getMovieAdd,
  postMovieAdd,
} from "./movieController";

const movieRouter = express.Router();

movieRouter.get("/", home);
movieRouter.get("/add", getMovieAdd);
movieRouter.post("/add", postMovieAdd);
movieRouter.get("/:id", movieDetail);

export default movieRouter;
