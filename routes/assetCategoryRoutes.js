import express from "express";
import {
  createCategory,
  getCategories,
  disableCategory,
} from "../controllers/assetCategoryController.js";
import protect from "../middleware/authMiddleware.js";
import { isAdmin } from "../middleware/roleMiddleware.js";

const router = express.Router();

/* ===== ADDED ROUTES ===== */
router.get("/", protect, isAdmin, getCategories);
router.post("/", protect, isAdmin, createCategory);
router.put("/:id/disable", protect, isAdmin, disableCategory);

export default router;