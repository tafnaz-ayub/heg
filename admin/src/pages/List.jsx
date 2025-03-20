import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const List = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/pdf/list`);

      if (response.data.success) {
        // ✅ Make sure we access the correct API field
        const pdfs = Array.isArray(response.data.products)
          ? response.data.products.reverse()
          : [];
        setList(pdfs);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  const removePdf = async (id) => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/pdf/remove`,
        { id },
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <p className="mb-4 font-semibold">Uploaded PDFs</p>
      <div className="flex flex-col gap-2">
        {/* List Table Header */}
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-2 px-3 border bg-gray-100 text-sm font-medium">
          <span>Preview</span>
          <span>Name</span>
          <span>Category</span>
          <span>Price</span>
          <span className="text-center">Action</span>
        </div>

        {/* PDF List Items */}
        {list.map((item) => (
          <div
            className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-2 px-3 border text-sm"
            key={item._id}
          >
            {/* ✅ Fallback Image if `thumbnail` is missing */}
            <div className="w-14 h-14 flex items-center justify-center overflow-hidden border rounded-md bg-gray-100">
              <img
                className="w-full h-full object-contain"
                src={item.thumbnail || "pdf.png"}
                alt="PDF Preview"
                onError={(e) => (e.target.src = "pdf.png")}
              />
            </div>
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>{item.price ? `${currency}${item.price}` : "Free"}</p>
            <button
              onClick={() => removePdf(item._id)}
              className="text-center cursor-pointer text-red-600 font-semibold"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
