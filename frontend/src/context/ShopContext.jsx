import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const navigate = useNavigate();

  // Add PDF to Cart
  const addToCart = async (pdfId) => {
    let cartData = { ...cartItems };

    cartData[pdfId] = (cartData[pdfId] || 0) + 1;
    setCartItems(cartData);

    if (token) {
      try {
        await axios.post(
          `${backendUrl}/api/pdf/cart/add`,
          { pdfId },
          { headers: { token } }
        );
      } catch (error) {
        console.error(error);
        toast.error(error.message);
      }
    }
  };

  // Get Cart Item Count
  const getCartCount = () => {
    return Object.values(cartItems).reduce((total, qty) => total + qty, 0);
  };

  // Update PDF Quantity in Cart
  const updateQuantity = async (pdfId, quantity) => {
    let cartData = { ...cartItems };
    if (quantity > 0) {
      cartData[pdfId] = quantity;
    } else {
      delete cartData[pdfId];
    }
    setCartItems(cartData);

    if (token) {
      try {
        await axios.post(
          `${backendUrl}/api/pdf/cart/update`,
          { pdfId, quantity },
          { headers: { token } }
        );
      } catch (error) {
        console.error(error);
        toast.error(error.message);
      }
    }
  };

  // Get Total Cart Price
  const getCartAmount = () => {
    return Object.entries(cartItems).reduce((total, [pdfId, qty]) => {
      const pdf = products.find((p) => p._id === pdfId);
      return pdf ? total + pdf.price * qty : total;
    }, 0);
  };

  // Fetch All PDFs
  const getProductsData = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/pdf/list`);
      if (response.data.success && Array.isArray(response.data.products)) {
        setProducts(response.data.products.reverse());
      } else {
        toast.error(response.data.message || "Failed to load PDFs");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  // Fetch User Cart Data
  const getUserCart = async (token) => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/pdf/cart/get`,
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setCartItems(response.data.cartData || {});
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      getUserCart(token);
    }
    getProductsData();
  }, [token]);

  const value = {
    products,
    currency,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    setCartItems,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
    backendUrl,
    setToken,
    token,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
