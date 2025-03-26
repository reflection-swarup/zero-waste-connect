import React from "react";
import { Link } from "react-router-dom";
import { FaSeedling } from "react-icons/fa"; // Icon for "Farm to Table"
//import { MdOutlineShoppingCart } from "react-icons/md"; // Example icon if needed

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center p-4 bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      {/* Logo Section */}
      <div className="flex items-center text-2xl font-bold text-green-600">
        <FaSeedling className="text-green-500 mr-2" size={30} /> 
        <span>Farm to Table</span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6">
        <Link to="/" className="text-gray-700 hover:text-green-500 font-medium transition">About</Link>
        <Link to="/events" className="text-gray-700 hover:text-green-500 font-medium transition">Find an Event</Link>
        <Link to="/farmers" className="text-gray-700 hover:text-green-500 font-medium transition">Our Farmers</Link>
        <Link to="/partners" className="text-gray-700 hover:text-green-500 font-medium transition">Our Partners</Link>
      </div>

      {/* Buttons Section */}
      <div className="space-x-3 flex items-center">
        <Link to="/login">
          <button className="px-5 py-2 text-lg font-semibold rounded-lg bg-gradient-to-r from-green-500 to-green-700 text-white shadow-md hover:scale-105 transition-all duration-300">
            Log in
          </button>
        </Link>
        <Link to="/signup">
          <button className="px-5 py-2 text-lg font-semibold rounded-lg border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white shadow-md transition-all duration-300">
            Sign up
          </button>
        </Link>
      </div>
    </nav>
  );  
};

export default Navbar;
