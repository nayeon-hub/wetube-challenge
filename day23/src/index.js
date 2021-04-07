import express from "express";
import path from "path";
import { homeRouter } from "./router.js";

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use("/", homeRouter);

// Codesanbox does not need PORT :)
app.listen(4000, () => console.log(`Listening!`));
