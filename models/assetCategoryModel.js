import mongoose from "mongoose";

const assetCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const AssetCategory = mongoose.model("AssetCategory", assetCategorySchema);
export default AssetCategory;
