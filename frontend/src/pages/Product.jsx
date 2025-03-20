import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const product = products.find((item) => item._id === productId);
    if (product) {
      setProductData(product);
    }
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/*----------- Product Data -------------- */}
      <div className="flex flex-col sm:flex-row gap-12">
        {/*---------- PDF Thumbnail ------------- */}
        <div className="flex-1 flex flex-col items-center">
          <img
            className="w-40 h-40 object-contain bg-white border rounded-md"
            src={productData.thumbnail || "pdf.png"}
            alt="PDF Preview"
            onError={(e) => (e.target.src = "pdf.png")}
          />
        </div>

        {/* -------- Product Info ---------- */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <p className="mt-5 text-3xl font-medium">
            {productData.price > 0 ? `${currency}${productData.price}` : "Free"}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>

          {/* Purchase / Download Button */}
          <div className="flex gap-4 mt-8">
            {productData.price > 0 ? (
              <button
                onClick={() => addToCart(productData._id)}
                className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
              >
                ADD TO CART
              </button>
            ) : (
              <a
                href={productData.pdfFileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-3 text-sm active:bg-green-700"
              >
                DOWNLOAD PDF
              </a>
            )}
          </div>

          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Digital Product.</p>
            <p>Instant access upon purchase.</p>
            <p>Secure checkout process.</p>
          </div>
        </div>
      </div>

      {/* ---------- Description Section ------------- */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>{productData.description}</p>
        </div>
      </div>

      {/* --------- Display related PDFs ---------- */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
