import express from "express";
import {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateStatus,
  verifyStripe,
  verifyRazorpay,
} from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js";

const orderRouter = express.Router();

// Admin routes for PDF orders
orderRouter.post("", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

// User routes for placing PDF orders
orderRouter.post("/place", authUser, placeOrder);
orderRouter.post("/stripe", authUser, placeOrderStripe);
orderRouter.post("/razorpay", authUser, placeOrderRazorpay);

// User route for fetching own PDF orders
orderRouter.post("/user", authUser, userOrders);

// Payment verification routes
orderRouter.post("/verify/stripe", authUser, verifyStripe);
orderRouter.post("/verify/razorpay", authUser, verifyRazorpay);

export default orderRouter;
