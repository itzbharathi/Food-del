import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative bg-gray-50 min-h-screen flex flex-col items-center justify-center px-6">
      {/* Floating Image */}
      <motion.img
        src="/assets/food-hero.jpg"  // Replace with your actual image
        alt="Delicious Food"
        className="w-full max-w-2xl rounded-lg shadow-lg"
        initial={{ y: -10 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.05, rotate: 2 }}
      />

      {/* Hero Content */}
      <motion.div
        className="absolute top-1/2 transform -translate-y-1/2 text-center text-white px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold">Order Your Favourite Food</h1>
        <p className="mt-4 text-lg">
          Choose from a diverse menu with the finest ingredients and elevate your dining experience.
        </p>
        <button className="mt-6 bg-red-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-red-600 transition">
          View Menu
        </button>
      </motion.div>
    </div>
  );
};

export default HeroSection;
