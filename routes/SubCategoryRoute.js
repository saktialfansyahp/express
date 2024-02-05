import express from "express";
import {
    createsubCategory,
    deletesubCategory,
    getsubCategory,
    updatesubCategory,
} from "../controller/subCategory.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/subcategory", verifyUser, getsubCategory);
router.post("/subcategory", verifyUser, createsubCategory);
router.patch("/subcategory/:id", verifyUser, updatesubCategory);
router.delete("/subcategory/:id", verifyUser, deletesubCategory);

export default router;
