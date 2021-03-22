import express from "express";
import globalRouter from "./router";
import { localsMiddlewares } from "./middlewares";
const app = express();
const PORT = 4000;

app.set("view engine", "pug");
app.use(localsMiddlewares);
app.use("/", globalRouter);

app.listen(PORT, () => console.log(`Listening!`));
