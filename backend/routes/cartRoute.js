import express from "express";
import {
  addToCart,
  getUserCart,
  updateCart,
} from "../controllers/cartController.js";
import authUser from "../middleware/auth.js";

const cartRouter = express.Router();

// PDF Cart Routes
cartRouter.post("/cart/add", authUser, addToCart);
cartRouter.post("/cart/get", authUser, getUserCart);
cartRouter.post("/cart/update", authUser, updateCart);

export default cartRouter;
