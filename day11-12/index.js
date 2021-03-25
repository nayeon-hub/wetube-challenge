import express from "express";
import "./db";
import movieRouter from "./movieRouter";

const app = express();
const PORT = 4000;

app.set("view engine", "pug");
app.use("/", movieRouter);

app.listen(PORT, () => console.log(`Listening!`));
