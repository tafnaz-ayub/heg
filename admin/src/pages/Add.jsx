import React, { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Add = ({ token }) => {
  const [pdfFile, setPdfFile] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Educational");
  const [subCategory, setSubCategory] = useState("Ebook");

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);

      pdfFile && formData.append("pdfFile", pdfFile);

      const response = await axios.post(backendUrl + "/api/pdf/add", formData, {
        headers: { token },
      });

      if (response.data.success) {
        toast.success(response.data.message);
        setName("");
        setDescription("");
        setPdfFile(null);
        setPrice("");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col w-full items-start gap-4"
    >
      <div>
        <p className="mb-2">Upload PDF File</p>
        <label htmlFor="pdfFile">
          <img
            className="w-20 cursor-pointer"
            src={!pdfFile ? assets.upload_area : assets.pdf_icon}
            alt="Upload PDF"
          />
          <input
            onChange={(e) => setPdfFile(e.target.files[0])}
            type="file"
            accept="application/pdf"
            id="pdfFile"
            hidden
            required
          />
        </label>
      </div>

      <div className="w-full">
        <p className="mb-2">PDF Name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Enter PDF name"
          required
        />
      </div>

      <div className="w-full">
        <p className="mb-2">PDF Description</p>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="w-full max-w-[500px] px-3 py-2"
          placeholder="Describe the PDF"
          required
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div>
          <p className="mb-2">Category</p>
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2"
          >
            <option value="Educational">Educational</option>
            <option value="Business">Business</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Technology">Technology</option>
          </select>
        </div>

        <div>
          <p className="mb-2">Subcategory</p>
          <select
            onChange={(e) => setSubCategory(e.target.value)}
            className="w-full px-3 py-2"
          >
            <option value="Ebook">Ebook</option>
            <option value="Guide">Guide</option>
            <option value="Whitepaper">Whitepaper</option>
            <option value="Report">Report</option>
          </select>
        </div>

        <div>
          <p className="mb-2">Price (Optional)</p>
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            className="w-full px-3 py-2 sm:w-[120px]"
            type="number"
            placeholder="e.g. 25"
          />
        </div>
      </div>

      <button type="submit" className="w-28 py-3 mt-4 bg-black text-white">
        Add PDF
      </button>
    </form>
  );
};

export default Add;
