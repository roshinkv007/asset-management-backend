import AssetCategory from "../models/assetCategoryModel.js";

/* ===== ADDED: create category ===== */
export const createCategory = async (req, res) => {
  const category = await AssetCategory.create({ name: req.body.name });
  res.status(201).json(category);
};

/* ===== ADDED: list categories ===== */
export const getCategories = async (req, res) => {
  const categories = await AssetCategory.find({ isActive: true }).sort({
    name: 1,
  });
  res.json(categories);
};

/* ===== ADDED: disable category ===== */
export const disableCategory = async (req, res) => {
  await AssetCategory.findByIdAndUpdate(req.params.id, { isActive: false });
  res.json({ message: "Category disabled" });
};
