import express from "express";
import { home, upload } from "./controller";
import { uploadText } from "./middlewares";

export const homeRouter = express.Router();

homeRouter.get("/", home);
homeRouter.post("/", uploadText, upload);
