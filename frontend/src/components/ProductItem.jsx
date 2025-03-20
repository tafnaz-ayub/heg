import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, pdfFileUrl, name, price, thumbnail }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      onClick={() => scrollTo(0, 0)}
      className="text-gray-700 cursor-pointer"
      to={`/pdf/${id}`}
    >
      <div className="overflow-hidden">
        <img
          className="w-16 h-16 object-contain bg-white border rounded-md"
          src={thumbnail || "pdf.png"}
          alt="PDF Preview"
          onError={(e) => (e.target.src = "pdf.png")} // Fallback if image is missing
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">
        {price ? `${currency}${price}` : "Free"}
      </p>
    </Link>
  );
};

export default ProductItem;
