import express from "express";
import { newCourse, course } from "../controllers/coursesController";
import { mine } from "../controllers/usersController";

const coursesRouter = express.Router();

coursesRouter.get("/", course);
coursesRouter.get("/new", newCourse);
coursesRouter.get("/mine", mine);

export default coursesRouter;
