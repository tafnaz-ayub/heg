import express from "express";
import {
  listProducts,
  addProduct,
  removeProduct,
  singleProduct,
} from "../controllers/productController.js";
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";

const productRouter = express.Router();
productRouter.post("/add", adminAuth, upload.single("pdfFile"), addProduct);
// Remove PDF product
productRouter.post("/remove", adminAuth, removeProduct);

// Get single PDF product details
productRouter.post("/single", singleProduct);

// List all PDF products
productRouter.get("/list", listProducts);

export default productRouter;
