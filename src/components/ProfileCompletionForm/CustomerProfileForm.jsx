import React, { useState } from "react";

const FoodDonationForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    foodTitle: "",
    foodDescription: "",
    foodType: "",
    foodQuantity: "",
    foodImage: [],
    address: "",
    expiryDate: "",
    contactPhoneNumber: "",
    contactEmail: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, foodImage: files });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">Food Donation Form</h2>
        <form className="mt-6 grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="foodTitle" className="block text-gray-700 font-medium mb-1">
              Food Title
            </label>
            <input
              type="text"
              id="foodTitle"
              name="foodTitle"
              placeholder="Food Title"
              required
              className="w-full p-2 border rounded"
              value={formData.foodTitle}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="foodType" className="block text-gray-700 font-medium mb-1">
              Food Type
            </label>
            <input
              type="text"
              id="foodType"
              name="foodType"
              placeholder="Food Type"
              required
              className="w-full p-2 border rounded"
              value={formData.foodType}
              onChange={handleChange}
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="foodDescription" className="block text-gray-700 font-medium mb-1">
              Food Description
            </label>
            <textarea
              id="foodDescription"
              name="foodDescription"
              placeholder="Food Description"
              required
              className="w-full p-2 border rounded"
              value={formData.foodDescription}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="foodQuantity" className="block text-gray-700 font-medium mb-1">
              Food Quantity
            </label>
            <input
              type="number"
              id="foodQuantity"
              name="foodQuantity"
              placeholder="Food Quantity"
              required
              className="w-full p-2 border rounded"
              value={formData.foodQuantity}
              onChange={handleChange}
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="foodImage" className="block text-gray-700 font-medium mb-1">
              Food Images
            </label>
            <input
              type="file"
              id="foodImage"
              name="foodImage"
              multiple
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-gray-700 font-medium mb-1">
              Pickup Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Pickup Address"
              required
              className="w-full p-2 border rounded"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="expiryDate" className="block text-gray-700 font-medium mb-1">
              Expiry Date
            </label>
            <input
              type="date"
              id="expiryDate"
              name="expiryDate"
              required
              className="w-full p-2 border rounded"
              value={formData.expiryDate}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="contactPhoneNumber" className="block text-gray-700 font-medium mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="contactPhoneNumber"
              name="contactPhoneNumber"
              placeholder="Phone Number"
              required
              className="w-full p-2 border rounded"
              value={formData.contactPhoneNumber}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="contactEmail" className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="contactEmail"
              name="contactEmail"
              placeholder="Email"
              required
              className="w-full p-2 border rounded"
              value={formData.contactEmail}
              onChange={handleChange}
            />
          </div>
          <div className="col-span-2">
            <button
              type="submit"
              className="w-full bg-green-500 text-white p-3 rounded-lg font-semibold hover:bg-green-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FoodDonationForm;