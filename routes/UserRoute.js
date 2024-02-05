import express from "express";
import { createUser, getUsers, getUsersById } from "../controller/Users.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/user", verifyUser, getUsers);
router.get("/user/:id", verifyUser, getUsersById);
router.post("/user", verifyUser, createUser);

export default router;
