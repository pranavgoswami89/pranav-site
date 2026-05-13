export default function ExplorePage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      
      {/* Heading */}
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black mb-4">
          PRANAV <span className="text-purple-500">EDITX</span>
        </h1>

        <p className="text-gray-400 text-lg mb-12">
          YouTube Channel Analytics & Creator Journey
        </p>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          
          <div className="bg-white/5 border border-purple-500/20 rounded-3xl p-6 backdrop-blur-xl">
            <h2 className="text-gray-400 mb-2">Subscribers</h2>
            <p className="text-4xl font-bold text-purple-400">605+</p>
          </div>

          <div className="bg-white/5 border border-pink-500/20 rounded-3xl p-6 backdrop-blur-xl">
            <h2 className="text-gray-400 mb-2">Total Views</h2>
            <p className="text-4xl font-bold text-pink-400">233K+</p>
          </div>

          <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-6 backdrop-blur-xl">
            <h2 className="text-gray-400 mb-2">Monthly Shorts Views</h2>
            <p className="text-4xl font-bold text-cyan-400">35K+</p>
          </div>

          <div className="bg-white/5 border border-orange-500/20 rounded-3xl p-6 backdrop-blur-xl">
            <h2 className="text-gray-400 mb-2">Uploads</h2>
            <p className="text-4xl font-bold text-orange-400">187</p>
          </div>

        </div>

        {/* Latest Video */}
        <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/20 rounded-3xl p-8 mb-10">
          <h2 className="text-3xl font-bold mb-4">
            Latest Upload 🚀
          </h2>

          <p className="text-2xl text-purple-300 mb-4">
            Jarvis Activate ☠
          </p>

          <a
            href="https://youtu.be/U1Ja54Q5t4k?si=_NWwIPmNG_ZXzV-E"
            target="_blank"
            className="inline-block px-6 py-3 rounded-2xl bg-purple-600 hover:bg-purple-500 transition"
          >
            Watch Video
          </a>
        </div>

        {/* Most Viewed */}
        <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-500/20 rounded-3xl p-8 mb-10">
          <h2 className="text-3xl font-bold mb-4">
            Most Viewed Short 🔥
          </h2>

          <p className="text-2xl text-cyan-300 mb-4">
            Letter 'P' Aura
          </p>

          <a
            href="https://youtube.com/shorts/uVIBEema6zk?si=RboU5dtqaLso-ANa"
            target="_blank"
            className="inline-block px-6 py-3 rounded-2xl bg-cyan-600 hover:bg-cyan-500 transition"
          >
            Watch Short
          </a>
        </div>

        {/* Channel Link */}
        <div className="text-center mt-16">
          <a
            href="https://youtube.com/@pranav_goswam_i?si=ALRwKsYuBJKzf_I_"
            target="_blank"
            className="px-10 py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-lg hover:scale-105 transition inline-block"
          >
            Visit YouTube Channel
          </a>
        </div>

      </div>
    </main>
  );
}