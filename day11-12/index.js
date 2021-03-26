import express from "express";
import "./db";
import movieRouter from "./movieRouter";
import { localsMiddleware } from "./middlewares";

const app = express();
const PORT = 4000;

app.set("view engine", "pug");

app.use(localsMiddleware);
app.use("/", movieRouter);
app.use(function (err, req, res, next) {
  //   console.error(err.stack);
  res.status(404);
  res.render("404");
});

app.listen(PORT, () => console.log(`Listening!`));
