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
        <form className="mt-6 grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="registrationNumber" className="block text-gray-700 font-medium mb-1">
              Registration Number
            </label>
            <input
              type="text"
              id="registrationNumber"
              name="registrationNumber"
              placeholder="Registration Number"
              value={formData.registrationNumber}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="registrationProof" className="block text-gray-700 font-medium mb-1">
              Registration Proof
            </label>
            <input
              type="file"
              id="registrationProof"
              name="registrationProof"
              onChange={handleFileChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
              NGO Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="NGO Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="cause" className="block text-gray-700 font-medium mb-1">
              Cause
            </label>
            <input
              type="text"
              id="cause"
              name="cause"
              placeholder="Cause"
              value={formData.cause}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-gray-700 font-medium mb-1">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="description" className="block text-gray-700 font-medium mb-1">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg font-semibold col-span-2"
          >
            Complete Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default NgoProfileForm;