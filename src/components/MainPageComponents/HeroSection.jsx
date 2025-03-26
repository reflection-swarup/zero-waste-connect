import React, { useState, useEffect } from "react";
import mainImage from "../../assets/main.jpg";
import { motion } from "framer-motion";

const HeroSection = () => {
  const fullText = "Reduce food waste, feed the nation.";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const typingSpeed = 100; // Speed of typing in ms
  const delayBeforeRestart = 1500; // Delay before restarting (in ms)

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[index]);
        setIndex(index + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else {
      // Reset after delayBeforeRestart ms
      setTimeout(() => {
        setDisplayText("");
        setIndex(0);
      }, delayBeforeRestart);
    }
  }, [index, fullText]);

  return (
    <section className="hero-section">
      <header className="relative w-full h-[70vh] flex items-center justify-center text-center">
        <img src={mainImage} alt="Market Scene" className="absolute w-full h-full object-cover brightness-75" />
        <motion.div 
          className="relative z-10 text-white px-6"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Typing Effect with Infinite Loop */}
          <h1 className="text-4xl font-bold">{displayText}</h1>

          <p className="mt-2 text-lg max-w-xl mx-auto">Connecting food producers, communities, and NGOs to minimize food wastage.</p>

          <motion.button 
            className="mt-6 bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-green-600 transition"
            whileHover={{ scale: 1.1 }}
          >
            Find an Event
          </motion.button>
        </motion.div>
      </header>
    </section>
  );
};

export default HeroSection;
