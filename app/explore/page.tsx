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
        PRANAV<span className="text-purple-500">_EDITX</span>
      </motion.h1>

      <div className="flex gap-16 p-10 w-full max-w-5xl justify-center">

        <div className="bg-zinc-900 p-10 w-[420px] rounded-2xl border border-purple-500">
          <h2 className="text-2xl font-bold mb-2">Subscribers</h2>
          <p className="text-4xl text-purple-400">600+</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl border border-purple-500">
          <h2 className="text-2xl font-bold mb-2">Total Views</h2>
          <p className="text-4xl text-pink-400">2lakh+</p>
        </div>

        

      </div>

    </div>
  );
}