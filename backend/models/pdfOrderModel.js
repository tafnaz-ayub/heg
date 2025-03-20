import mongoose from "mongoose";

const pdfOrderSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  items: [
    {
      name: { type: String, required: true },
      quantity: { type: Number, required: true },
    },
  ],
  amount: { type: Number, default: 0 },
  customer: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
  },
  status: { type: String, required: true, default: "Order Placed" },
  paymentMethod: { type: String, required: true },
  payment: { type: Boolean, required: true, default: false },
  date: { type: Date, required: true, default: Date.now },
});

const orderModel =
  mongoose.models.pdfOrder || mongoose.model("pdfOrder", pdfOrderSchema);

export default orderModel;
