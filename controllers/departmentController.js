import Department from "../models/departmentModel.js";

// ===== CREATE =====
export const createDepartment = async (req, res) => {
  const dept = await Department.create({ name: req.body.name });
  res.status(201).json(dept);
};

// ===== LIST =====
export const getDepartments = async (req, res) => {
  const depts = await Department.find({ isActive: true }).sort({ name: 1 });
  res.json(depts);
};

// ===== DISABLE =====
export const disableDepartment = async (req, res) => {
  await Department.findByIdAndUpdate(req.params.id, { isActive: false });
  res.json({ message: "Department disabled" });
};