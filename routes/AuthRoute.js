import express from "express";
import { Login, Logout } from "../controller/Auth.js";
import { createUser } from "../controller/Users.js";
const router = express.Router();

router.post("/login", Login);
router.post("/register", createUser);
router.delete("/logout", Logout);

export default router;
