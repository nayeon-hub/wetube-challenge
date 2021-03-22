import express from "express";
import { home } from "../controllers/coursesController";
import { join, login } from "../controllers/usersController";
import { confirmAccount } from "../controllers/accountController";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/confirm-account", confirmAccount);

export default globalRouter;
