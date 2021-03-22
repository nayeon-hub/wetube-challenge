import express from "express";
import { remove, edit } from "../controllers/postController";

const vTwoRouter = express.Router();

vTwoRouter.get("/remove", remove);
vTwoRouter.get("/edit", edit);

export default vTwoRouter;
