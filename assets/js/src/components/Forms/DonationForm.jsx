import React, { useState } from "react";
import { Upload, Tag, FileText, Image as ImageIcon, Package } from "lucide-react";
import TextInput from "../ui/TextInput";


function DonationForm() {
  const [formData, setFormData] = useState({
    itemName: "",
    category: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    // TODO: Send to backend
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-md space-y-6"
    >
      {/* Item Name */}
      <div className="space-y-2">
        <label className="font-semibold flex items-center gap-2">
          <Package size={18} />
          Item Name
        </label>
        <input
          type="text"
          name="itemName"
          placeholder="Enter item name"
          value={formData.itemName}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-slate-100 dark:bg-slate-800 outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>

      {/* Category */}
      <div className="space-y-2">
        <label className="font-semibold flex items-center gap-2">
          <Tag size={18} />
          Category
        </label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-slate-100 dark:bg-slate-800 outline-none focus:ring-2 focus:ring-indigo-500"
          required
        >
          <option value="">Select category</option>
          <option value="Food">Food</option>
          <option value="Clothes">Clothes</option>
          <option value="Household Items">Household Items</option>
          <option value="Medical Supplies">Medical Supplies</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Description */}
      <div className="space-y-2">
        <label className="font-semibold flex items-center gap-2">
          <FileText size={18} />
          Description
        </label>
        <TextInput
          name="description"
          placeholder="Describe the item"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          className="w-full p-3 rounded-lg bg-slate-100 dark:bg-slate-800 outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>

      {/* Image Upload */}
      <div className="space-y-2">
        <label className="font-semibold flex items-center gap-2">
          <ImageIcon size={18} />
          Image
        </label>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          className="w-full cursor-pointer p-3 rounded-lg bg-slate-100 dark:bg-slate-800"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold p-3 rounded-xl transition"
      >
        Create Donation Item
      </button>
    </form>
  );
}

export default DonationForm;
