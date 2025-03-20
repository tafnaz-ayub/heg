import mongoose from "mongoose";

const pdfSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, default: 0 },
  pdfFileUrl: { type: String, required: true },
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  date: { type: Date, required: true, default: Date.now },
});

const productModel = mongoose.models.pdf || mongoose.model("pdf", pdfSchema);

export default productModel;
