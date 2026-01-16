import express from "express";
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  restoreUser,
  searchUsers,
  updateUserRole,
  toggleUserStatus,
  getEmployeeAssetHistory
} from "../controllers/userController.js";
import protect from "../middleware/authMiddleware.js";
import { isAdmin } from "../middleware/roleMiddleware.js";
import { adminOnly } from "../middleware/adminOnly.js";

const router = express.Router();

// Admin only
router.get("/", protect, isAdmin, getUsers);
router.get("/search", protect, isAdmin, searchUsers);
router.get("/:id", protect, isAdmin, getUserById);
router.post("/", protect, isAdmin, createUser);
router.put("/:id", protect, isAdmin, updateUser);
router.delete("/:id", protect, isAdmin, deleteUser);
router.put("/:id/restore", protect, isAdmin, restoreUser);
// routes/userRoutes.js
router.get("/", protect, adminOnly, getUsers);
router.put("/:id/role", protect, adminOnly, updateUserRole);
router.put("/:id/status", protect, adminOnly, toggleUserStatus);
router.get("/:id/asset-history",protect,isAdmin,getEmployeeAssetHistory);



export default router;
