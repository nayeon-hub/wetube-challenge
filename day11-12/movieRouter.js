import express from "express";
import { home, movieDetail, filterMovie } from "./movieController";

const movieRouter = express.Router();

const getId = (id) => {
  if (id) {
    console.log(`/${id}`);
    return `/${id}`;
  } else {
    return "/:id";
  }
};

movieRouter.get("/", home);
movieRouter.get("/filter", filterMovie);
movieRouter.get(getId(), movieDetail);

export default movieRouter;
