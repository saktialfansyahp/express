import express from "express";
import { createProduct, getProduct } from "../controller/Product.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/product", verifyUser, getProduct);
router.post("/product", verifyUser, createProduct);

export default router;
