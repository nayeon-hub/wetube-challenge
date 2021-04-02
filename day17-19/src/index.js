import express from "express";
import "./db";
import "./models/Movie";
import path from "path";
import movieRouter from "./movieRouter";
import { localsMiddleware } from "./middlewares";

const app = express();
const PORT = 4000;

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(localsMiddleware);
app.use("/", movieRouter);

app.listen(PORT, () => console.log(`Listening!`));
