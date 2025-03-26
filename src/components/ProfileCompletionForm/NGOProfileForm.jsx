import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NgoProfileForm = () => {
  const [formData, setFormData] = useState({
    registrationNumber: "",
    registrationProof: null,
    name: "",
    cause: "",
    email: "",
    phone: "",
    address: "",
    description: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, registrationProof: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    try {
      const response = await fetch("https://foodwastagebackend.onrender.com/api/ngo/profile", {
        method: "POST",
        body: formDataToSend,
      });
      
      const res = await response.json();
      if (response.ok) {
        alert("Profile completed successfully!");
        navigate("/ngo/dashboard");
      } else {
        setError(res.message || "Profile submission failed");
      }
    } catch (err) {
      console.error("Error submitting profile:", err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">NGO Profile Completion</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <input type="text" name="registrationNumber" placeholder="Registration Number" value={formData.registrationNumber} onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="file" name="registrationProof" onChange={handleFileChange} className="w-full p-2 border rounded" required />
          <input type="text" name="name" placeholder="NGO Name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="text" name="cause" placeholder="Cause" value={formData.cause} onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="w-full p-2 border rounded" required />
          <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="w-full p-2 border rounded" required />
          <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg font-semibold">Complete Profile</button>
        </form>
      </div>
    </div>
  );
};

export default NgoProfileForm;
