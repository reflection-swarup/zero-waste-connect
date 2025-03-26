import React, { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../components/InputField";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("https://foodwastagebackend.onrender.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setLoading(false);

      if (!response.ok || !data.token) {
        setError(data.message || "Invalid email or password");
        return;
      }

      localStorage.setItem("token", data.token);
      alert("Login successful! Redirecting...");
      navigate("/dashboard", { replace: true });
    } catch (err) {
      console.error("Login Error:", err);
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        
        <form className="mt-6 space-y-4" onSubmit={handleLogin}>
          <InputField
            type="email"
            label="Email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
          <InputField
            type="password"
            label="Password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
          
          <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg font-semibold transition" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center mt-4 text-gray-600">
          Don't have an account? <Link to="/signup" className="text-green-500 font-semibold">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
