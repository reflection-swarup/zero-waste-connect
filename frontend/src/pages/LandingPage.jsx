import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion for animation
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import mainImage from "../assets/main.jpg";
import eventImage from "../assets/event.jpg";
import volunteerImage from "../assets/volunteer.jpg";
import partnerImage from "../assets/partner.jpg";
import donateImage from "../assets/donate.jpg";

const LandingPage = () => {
  return (
    <div className="bg-green-100 min-h-screen flex flex-col items-center">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center p-4 bg-white shadow-md">
        <div className="text-xl font-bold">Farm to Table</div>
        <div className="flex space-x-4">
          <Link to="/" className="text-gray-700">About</Link>
          <Link to="/events" className="text-gray-700">Find an Event</Link>
          <Link to="/farmers" className="text-gray-700">Our Farmers</Link>
          <Link to="/partners" className="text-gray-700">Our Partners</Link>
        </div>
        <div className="space-x-2">
          <Link to="/login">
            <button className="bg-green-500 text-white px-4 py-2 rounded">Log in</button>
          </Link>
          <Link to="/signup">
            <button className="bg-white border px-4 py-2 rounded">Sign up</button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative w-full max-w-4xl">
        <img src={mainImage} alt="Market Scene" className="w-full rounded-lg shadow-md" />
        <motion.div 
          className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50 rounded-lg p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl font-bold text-white">Reduce food waste, feed the nation.</h1>
          <p className="text-gray-200 mt-2 max-w-lg">
            Our mission is to connect food producers, local communities, and NGOs in India to minimize food wastage.
          </p>
          <motion.button 
            className="mt-4 bg-green-500 text-white px-6 py-2 rounded"
            whileHover={{ scale: 1.1 }}
          >
            Find an Event
          </motion.button>
        </motion.div>
      </header>

      {/* Features Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 max-w-4xl">
        <div className="text-center">
          <img src={eventImage} alt="Join an event" className="rounded-lg w-full h-32 object-cover" />
          <p className="mt-2 text-gray-700">Join us at an event</p>
        </div>
        <div className="text-center">
          <img src={volunteerImage} alt="Volunteer" className="rounded-lg w-full h-32 object-cover" />
          <p className="mt-2 text-gray-700">Volunteer with us</p>
        </div>
        <div className="text-center">
          <img src={partnerImage} alt="Become a partner" className="rounded-lg w-full h-32 object-cover" />
          <p className="mt-2 text-gray-700">Become a partner</p>
        </div>
        <div className="text-center">
          <img src={donateImage} alt="Donate" className="rounded-lg w-full h-32 object-cover" />
          <p className="mt-2 text-gray-700">Donate now</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full p-4 text-center text-gray-600">
        <div className="flex justify-center space-x-6">
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/farmers">Our Farmers</Link>
          <Link to="/partners">Our Partners</Link>
        </div>
        <p className="mt-2">&copy; 2025 Farm to Table. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
