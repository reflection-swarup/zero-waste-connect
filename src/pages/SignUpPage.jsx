import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../components/InputField";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
    role: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
  
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    if (!formData.role) {
      setError("Please select a role.");
      return;
    }
  
    const { confirmPassword, ...userData } = formData;
  
    try {
      const response = await fetch(
        "https://foodwastagebackend.onrender.com/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );
  
      const res = await response.json();
      console.log(res);
  
      if (response.ok) {
        alert("Signup successful! Please log in.");
        navigate("/login"); // ✅ Redirecting to the login page
      } else {
        setError(res.message || "Signup failed");
      }
    } catch (err) {
      console.error("Error signing up:", err);
      setError("Something went wrong. Please try again.");
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">Sign Up</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form className="mt-6 space-y-4" onSubmit={handleSignup}>
          <div className="grid grid-cols-2 gap-4">
            <InputField type="text" label="Full Name" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} />
            <InputField type="email" label="Email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <InputField type="password" label="Password" name="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} />
            <InputField type="password" label="Confirm Password" name="confirmPassword" placeholder="Re-enter your password" value={formData.confirmPassword} onChange={handleChange} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <InputField type="text" label="Phone" name="phone" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} />
            <InputField type="text" label="Address" name="address" placeholder="Enter your address" value={formData.address} onChange={handleChange} />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Select Role</label>
            <select name="role" value={formData.role} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-green-300">
              <option value="" disabled>Select your role</option>
              <option value="customer">Customer</option>
              <option value="farmer">Farmer</option>
              <option value="ngo">NGO</option>
              <option value="event_host">Event Host</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg font-semibold transition">Sign Up</button>
        </form>
        <p className="text-center mt-4 text-gray-600">
          Already have an account? <Link to="/login" className="text-green-500 font-semibold">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;