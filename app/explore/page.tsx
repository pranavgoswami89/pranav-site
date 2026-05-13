"use client";

import { motion } from "framer-motion";

export default function ExplorePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="min-h-screen bg-black text-white flex items-center justify-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.5,
        }}
        className="text-6xl font-bold"
      >
        PRANAV <span className="text-purple-500">EDITX</span>
      </motion.h1>
    </motion.div>
  );
}