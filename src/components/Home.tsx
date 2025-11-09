interface HomeProps {
  onNavigateToStreams: () => void;
}

export default function Home({ onNavigateToStreams }: HomeProps) {
  return (
    <main className="min-h-[calc(100vh-80px)] flex items-center justify-center px-6 py-12">
      <div className="max-w-5xl w-full text-center">
        {/* Hero Title */}
        <h1 className="text-6xl md:text-7xl mb-6 bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent animate-fadeInUp">
          Know Your Path
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-slate-700 mb-10 leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          Discover your stream, explore your future, and plan your academic journey with confidence.
        </p>
        
        {/* CTA Button */}
        <button
          onClick={onNavigateToStreams}
          className="inline-block px-12 py-4 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all animate-fadeInUp"
          style={{ animationDelay: '0.4s' }}
        >
          Start Exploring ✨
        </button>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white/90 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-slate-800 mb-2">4 Major Streams</h3>
            <p className="text-slate-600">Explore PCM, PCB, Commerce & Arts</p>
          </div>

          <div className="bg-white/90 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all animate-fadeInUp" style={{ animationDelay: '0.7s' }}>
            <div className="text-6xl mb-4">🎯</div>
            <h3 className="text-slate-800 mb-2">Career Guidance</h3>
            <p className="text-slate-600">Detailed career paths & opportunities</p>
          </div>

          <div className="bg-white/90 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
            <div className="text-6xl mb-4">🏆</div>
            <h3 className="text-slate-800 mb-2">Top Colleges</h3>
            <p className="text-slate-600">Admission info & cutoff scores</p>
          </div>
        </div>
      </div>
    </main>
  );
}
