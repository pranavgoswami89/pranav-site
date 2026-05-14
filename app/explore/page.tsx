"use client";

import { motion } from "framer-motion";

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-8">

      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="text-6xl font-bold"
      >
        PRANAV <span className="text-purple-500">EDITX</span>
      </motion.h1>

      <div className="grid md:grid-cols-3 gap-6 p-6 w-full max-w-6xl">

        <div className="bg-zinc-900 p-6 rounded-2xl border border-purple-500">
          <h2 className="text-2xl font-bold mb-2">Subscribers</h2>
          <p className="text-4xl text-purple-400">10K+</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl border border-purple-500">
          <h2 className="text-2xl font-bold mb-2">Total Views</h2>
          <p className="text-4xl text-pink-400">1M+</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl border border-purple-500">
          <h2 className="text-2xl font-bold mb-2">Latest Video</h2>
          <p className="text-lg text-gray-300">
            New cinematic edit uploaded 🔥
          </p>
        </div>

      </div>

    </div>
  );
}