import express from "express";
import globalRouter from "./routes/globalRouter";
import coursesRouter from "./routes/coursesRouter";
import apiRouter from "./routes/apiRouter";

const app = express();
const PORT = 4000;

app.use("/", globalRouter);
app.use("/courses", coursesRouter);
app.use("/api", apiRouter);

app.listen(PORT, () => console.log(`Listening!`));
