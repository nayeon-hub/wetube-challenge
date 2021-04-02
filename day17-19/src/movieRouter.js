import express from "express";
import {
  home,
  getCreate,
  postCreate,
  movieDetail,
  getEdit,
  postEdit,
  movieDelete,
  movieSearch,
} from "./movieController";

const movieRouter = express.Router();
const editMovie = (id) => {
  if (id) {
    return `/${id}/edit`;
  } else {
    return "/:id/edit";
  }
};
const detailMovie = (id) => {
  if (id) {
    return `/${id}`;
  } else {
    return "/:id";
  }
};
const searchMovie = (id) => {
  if (id) {
    return `/${id}/search`;
  } else {
    return "/:id/search";
  }
};
const deleteMovie = (id) => {
  if (id) {
    return `/${id}/delete`;
  } else {
    return "/:id/delete";
  }
};

movieRouter.get("/", home);
movieRouter.get("/create", getCreate);
movieRouter.post("/create", postCreate);

movieRouter.get(detailMovie(), movieDetail);
movieRouter.get(editMovie(), getEdit);
movieRouter.post(editMovie(), postEdit);
movieRouter.get(deleteMovie(), movieDelete);
// movieRouter.get(searchMovie(), movieSearch);

export default movieRouter;
