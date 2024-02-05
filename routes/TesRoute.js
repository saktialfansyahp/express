import express from "express";
import { getProduk } from "../controller/Tes.js";
var router = express.Router();

router.get("/tes", getProduk);

export default router;
