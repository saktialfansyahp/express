import express from "express";
import {
    createColor,
    deleteColor,
    getColor,
    getColorById,
    updateColor,
} from "../controller/Color.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/color", verifyUser, getColor);
router.get("/color/:id", verifyUser, getColorById);
router.post("/color", verifyUser, createColor);
router.put("/color/:id", verifyUser, updateColor);
router.delete("/color/:id", verifyUser, deleteColor);

export default router;
