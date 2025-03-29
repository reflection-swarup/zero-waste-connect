import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EventHostProfileForm = () => {
  const [formData, setFormData] = useState({
    organization: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });
  const [idProof, setIdProof] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle text inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file change for ID Proof
  const handleFileChange = (e) => {
    setIdProof(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Prepare FormData to send text + file
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    if (idProof) {
      data.append("idProof", idProof); // Attach file
    } else {
      setError("Please upload an ID proof.");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/user/apply-event-host", // Update this with your backend URL
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Only auth header, no content-type here
          },
          body: data, // Sending FormData
        }
      );

      const res = await response.json();
      console.log(res);
      if (response.ok) {
        alert("Profile completed successfully!");
        localStorage.setItem("token", res.token);
        navigate("/dashboard/event-host");
      } else {
        setError(res.error || "Profile completion failed");
      }
    } catch (err) {
      console.error("Error submitting profile:", err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-center">Complete Your Profile</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form
          className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <div>
            <label
              htmlFor="organization"
              className="block text-gray-700 font-medium mb-1"
            >
              Organization
            </label>
            <input
              type="text"
              id="organization"
              name="organization"
              placeholder="Organization"
              value={formData.organization}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-gray-700 font-medium mb-1"
            >
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label
              htmlFor="address"
              className="block text-gray-700 font-medium mb-1"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label
              htmlFor="city"
              className="block text-gray-700 font-medium mb-1"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label
              htmlFor="state"
              className="block text-gray-700 font-medium mb-1"
            >
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label
              htmlFor="zip"
              className="block text-gray-700 font-medium mb-1"
            >
              ZIP Code
            </label>
            <input
              type="text"
              id="zip"
              name="zip"
              placeholder="ZIP Code"
              value={formData.zip}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label
              htmlFor="idProof"
              className="block text-gray-700 font-medium mb-1"
            >
              ID Proof
            </label>
            <input
              type="file"
              id="idProof"
              name="idProof"
              onChange={handleFileChange}
              accept="image/*"
              required
              className="w-full p-2 border rounded"
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

export default EventHostProfileForm;
