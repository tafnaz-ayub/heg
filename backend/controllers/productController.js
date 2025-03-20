import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

// Function to add PDF product
const addProduct = async (req, res) => {
  try {
    const { name, description, price, category, subCategory } = req.body;

    const pdfFile = req.file;

    if (!pdfFile) {
      return res.json({ success: false, message: "PDF file is required." });
    }

    const result = await cloudinary.uploader.upload(pdfFile.path, {
      resource_type: "raw",
    });

    const productData = {
      name,
      description,
      category,
      subCategory,
      price: Number(price) || 0,
      pdfFileUrl: result.secure_url,
      date: Date.now(),
    };

    const product = new productModel(productData);
    await product.save();

    res.json({ success: true, message: "PDF Product Added" });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

// Function to list PDF products
const listProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

// Function to remove PDF product
const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "PDF Product Removed" });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

// Function to get single PDF product details
const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await productModel.findById(productId);
    res.json({ success: true, product });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

export { listProducts, addProduct, removeProduct, singleProduct };
