import express from "express";
import { home, login, photo, profile } from "./controller";

const router = express.Router();

router.get("/", home);
router.get("/login", login);
router.get("/photo", photo);
router.get("/profile", profile);

export default router;
