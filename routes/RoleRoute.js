import express from "express";
import {
  createRole,
  deleteRole,
  getRole,
  updateRole,
} from "../controller/Roles.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.post("/role", verifyUser, createRole);
router.get("/role", verifyUser, getRole);
router.patch("/role/:id", verifyUser, updateRole);
router.delete("/role/:id", verifyUser, deleteRole);

export default router;
