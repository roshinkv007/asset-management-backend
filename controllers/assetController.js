import Asset from "../models/assetModel.js";

// GET /api/assets
export const getAssets = async (req, res) => {
  try {
    const assets = await Asset.find({ isDeleted: false })
      .populate("assignedTo", "name email");
    res.json(assets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST /api/assets
export const createAsset = async (req, res) => {
  try {
    const asset = await Asset.create(req.body);
    res.status(201).json(asset);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// PUT /api/assets/:id
export const updateAsset = async (req, res) => {
  try {
    const asset = await Asset.findById(req.params.id);
    if (!asset || asset.isDeleted) {
      return res.status(404).json({ message: "Asset not found" });
    }

    Object.assign(asset, req.body);
    await asset.save();

    res.json({ message: "Asset updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE /api/assets/:id (soft delete)
export const deleteAsset = async (req, res) => {
  try {
    const asset = await Asset.findById(req.params.id);
    if (!asset) {
      return res.status(404).json({ message: "Asset not found" });
    }

    asset.isDeleted = true;
    await asset.save();

    res.json({ message: "Asset deleted (soft delete)" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
