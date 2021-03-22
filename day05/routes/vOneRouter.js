import express from "express";
import { buy, refund } from "../controllers/accountController";
const vOneRouter = express.Router();

vOneRouter.get("/buy", buy);
vOneRouter.get("/refund", refund);

export default vOneRouter;
