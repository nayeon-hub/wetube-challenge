import express from "express";
import { home, movieDetail, filterMovie } from "./movieController";

const movieRouter = express.Router();

function getId(id) {
  if (id) {
    return `/${id}`;
  } else {
    return "/:id";
  }
}

movieRouter.get("/", home);
movieRouter.get("/filter", filterMovie);
movieRouter.get(getId(), movieDetail);

export default movieRouter;
