import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full p-6 bg-gray-100 text-center text-gray-700">
      <div className="flex justify-center space-x-6">
        <Link to="/about" className="hover:text-green-500">About Us</Link>
        <Link to="/contact" className="hover:text-green-500">Contact Us</Link>
        <Link to="/farmers" className="hover:text-green-500">Our Farmers</Link>
        <Link to="/partners" className="hover:text-green-500">Our Partners</Link>
      </div>
      <p className="mt-3">&copy; 2025 Farm to Table. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
