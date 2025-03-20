import orderModel from "../models/pdfOrderModel.js";
import productModel from "../models/productModel.js";
import userModel from "../models/userModel.js";

// Add PDF to user cart
const addToCart = async (req, res) => {
  try {
    const { userId, pdfId } = req.body;

    const userData = await userModel.findById(userId);
    let cartData = userData.cartData || {};

    if (cartData[pdfId]) {
      cartData[pdfId] += 1;
    } else {
      cartData[pdfId] = 1;
    }

    await userModel.findByIdAndUpdate(userId, { cartData });

    res.json({ success: true, message: "PDF added to cart." });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

// Update PDF quantity in user cart
const updateCart = async (req, res) => {
  try {
    const { userId, pdfId, quantity } = req.body;

    const userData = await userModel.findById(userId);
    let cartData = userData.cartData || {};

    if (quantity > 0) {
      cartData[pdfId] = quantity;
    } else {
      delete cartData[pdfId];
    }

    await userModel.findByIdAndUpdate(userId, { cartData });

    res.json({ success: true, message: "Cart updated successfully." });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

// Get user cart data with PDF details
const getUserCart = async (req, res) => {
  try {
    const { userId } = req.body;

    const userData = await userModel.findById(userId);
    const cartData = userData.cartData || {};

    const pdfIds = Object.keys(cartData);
    const pdfs = await productModel.find({ _id: { $in: pdfIds } });

    const detailedCart = pdfs.map((pdf) => ({
      pdfId: pdf._id,
      name: pdf.name,
      price: pdf.price,
      quantity: cartData[pdf._id],
    }));

    res.json({ success: true, cartData: detailedCart });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

export { addToCart, updateCart, getUserCart };
