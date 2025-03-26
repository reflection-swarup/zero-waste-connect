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
    <div className="max-w-lg mx-auto bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Complete Your Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="foodTitle" placeholder="Food Title" required className="w-full p-2 border rounded" value={formData.foodTitle} onChange={handleChange} />
        <textarea name="foodDescription" placeholder="Food Description" required className="w-full p-2 border rounded" value={formData.foodDescription} onChange={handleChange} />
        <input type="text" name="foodType" placeholder="Food Type" required className="w-full p-2 border rounded" value={formData.foodType} onChange={handleChange} />
        <input type="number" name="foodQuantity" placeholder="Food Quantity" required className="w-full p-2 border rounded" value={formData.foodQuantity} onChange={handleChange} />
        <input type="file" multiple accept="image/*" onChange={handleImageChange} className="w-full p-2 border rounded" />
        <input type="text" name="address" placeholder="Pickup Address" required className="w-full p-2 border rounded" value={formData.address} onChange={handleChange} />
        <input type="date" name="expiryDate" required className="w-full p-2 border rounded" value={formData.expiryDate} onChange={handleChange} />
        <input type="tel" name="contactPhoneNumber" placeholder="Phone Number" required className="w-full p-2 border rounded" value={formData.contactPhoneNumber} onChange={handleChange} />
        <input type="email" name="contactEmail" placeholder="Email" required className="w-full p-2 border rounded" value={formData.contactEmail} onChange={handleChange} />
        <button type="submit" className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">Submit</button>
      </form>
    </div>
  );
};

export default FoodDonationForm;
