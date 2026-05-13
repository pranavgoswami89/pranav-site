"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
export default function PranavUniverse() {const audioRef = useRef<HTMLAudioElement>(null);

const toggleMusic = () => {
  if (!audioRef.current) return;

  if (audioRef.current.paused) {
    audioRef.current.play();
  } else {
    audioRef.current.pause();
  }
};
  return (
    <>
    <audio
  ref={audioRef}
  src="/theme.mp3"
  loop
/>
    <main className="relative overflow-hidden bg-black text-white overflow-x-hidden">
      {/* Background Glow */}
      <div className="fixed inset-0 -z-10 overflow-hidden">

  <div className="absolute top-[-100px] left-[-100px] w-[700px] h-[700px] bg-purple-700/30 blur-[160px] rounded-full"></div>

  <div className="absolute bottom-[-100px] right-[-100px] w-[700px] h-[700px] bg-pink-600/20 blur-[160px] rounded-full"></div>

  <div className="absolute top-[30%] left-[40%] w-[400px] h-[400px] bg-orange-500/10 blur-[140px] rounded-full"></div>

</div>
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img
             src="/images/1c4dc40f-f321-451d-85b9-0c54ed9dc813.png"
              alt="logo"
              className="w-12 h-12 rounded-full border border-purple-500 shadow-lg shadow-purple-500/40"
            />

            <div>
              <h1 className="font-black text-2xl tracking-widest">
                PRANAV GOSWAMI
              </h1>
              <p className="text-zinc-400 text-sm">
                Creator • Gaming • Entertainment
              </p>
            </div>
          </div>

          <div className="hidden md:flex gap-8 text-zinc-300">
            <a href="#about" className="hover:text-purple-400 transition">
              About
            </a>

            <a href="#videos" className="hover:text-purple-400 transition">
              Videos
            </a>

            <a href="#socials" className="hover:text-purple-400 transition">
              Socials
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 mb-6">
              🚀 Welcome To My Universe
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-none">
              PRANAV
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 animate-pulse">
                GOSWAMI
              </span>
            </h1>

            <p className="text-zinc-400 text-lg mt-8 leading-relaxed max-w-xl">
              Gaming. Editing. Entertainment. Pure digital energy.
              Creating cinematic content, insane edits, and vibes
              that people remember.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              <a
                href="https://www.youtube.com/@Pranav_Goswam_i"
                target="_blank"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 font-bold hover:scale-105 transition duration-300 shadow-2xl shadow-purple-600/40"
              >
                Subscribe Now
              </a>

              <button className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition">
                Explore
              </button>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
    className="relative flex justify-center"
>
  <div className="absolute inset-0 -z-10"></div>
  <div className="absolute top-12 right-16 w-72 h-72 bg-purple-500/20 blur-3xl"></div>
  <div className="absolute bottom-8 right-0 w-56 h-56 bg-orange-500/10 blur-3xl"></div>S       
<img
  src="/images/267bf8c7-7e01-4d5f-bd67-9554a8b35d20.jpg"
  alt="Pranav hero image"
/>

         </motion.div>
    </div>
  </section>   
      {/* About */}
      <section
        id="about"
        className="py-32 px-6 border-t border-white/10"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-10">
              ABOUT THE
              <span className="text-purple-400"> CHANNEL</span>
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">
  Welcome to the official universe of Pranav Goswami. This channel is built for
  people who love cinematic edits, entertainment, creative visuals and digital
  storytelling.

  <br /><br />

  I create smooth transitions, cinematic color grading, sharp cuts and engaging
  edits that make every video feel powerful and memorable. My goal is simple —
  every frame should feel clean, energetic and impactful.

  <br /><br />

  If you want professional editing for your content, projects or channel, feel
  free to connect with me.

  <br /><br />

  <span className="text-purple-400 font-semibold">
    Gmail: pranavgoswami587@gmail.com
  </span>
  <br />

<a
  href="https://www.instagram.com/its_pranav_editx_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
  target="_blank"
  className="text-pink-500 font-semibold"
>
  Instagram: @its_pranav_editx_
</a>
</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-white/10 text-center text-zinc-500">
        © 2026 PRANAV GOSWAMI • Built Different 🚀
      </footer>
    </main>
    </>
  );
}