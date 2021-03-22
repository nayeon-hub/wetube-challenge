import express from "express";
import vTwoRouter from "./vTwoRouter";
import vOneRouter from "./vOneRouter";
import { documentation } from "../controllers/postController";

const apiRouter = express.Router();

apiRouter.get("/documentation", documentation);
apiRouter.use("/v1", vOneRouter);
apiRouter.use("/v2", vTwoRouter);

export default apiRouter;
