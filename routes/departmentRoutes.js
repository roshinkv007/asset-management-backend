import express from "express";
import {
  createDepartment,
  getDepartments,
  disableDepartment,
} from "../controllers/departmentController.js";
import protect from "../middleware/authMiddleware.js";
import { isAdmin } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.get("/", protect, isAdmin, getDepartments);
router.post("/", protect, isAdmin, createDepartment);
router.put("/:id/disable", protect, isAdmin, disableDepartment);

export default router;
