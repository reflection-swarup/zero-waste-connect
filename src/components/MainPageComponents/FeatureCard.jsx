import React from "react";
import { motion } from "framer-motion";

const FeatureCard = ({ image, text }) => {
  return (
    <motion.div 
      className="text-center p-4 bg-white rounded-lg shadow-md"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <img src={image} alt={text} className="rounded-lg w-full h-40 object-cover" />
      <p className="mt-3 text-gray-700 font-semibold">{text}</p>
    </motion.div>
  );
};

export default FeatureCard;
