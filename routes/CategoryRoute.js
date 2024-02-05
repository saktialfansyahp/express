import express from "express";
import {
    createCategory,
    deleteCategory,
    getCategory,
    getCategoryById,
    updateCategory,
} from "../controller/Category.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/category", verifyUser, getCategory);
router.get("/category/:id", verifyUser, getCategoryById);
router.post("/category", verifyUser, createCategory);
router.put("/category/:id", verifyUser, updateCategory);
router.delete("/category/:id", verifyUser, deleteCategory);

export default router;
