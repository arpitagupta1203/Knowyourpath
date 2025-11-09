interface StreamSelectionProps {
  onSelectStream: (stream: string) => void;
}

export default function StreamSelection({ onSelectStream }: StreamSelectionProps) {
  const streams = [
    {
      id: 'PCM',
      icon: '🔬',
      title: 'Science (PCM)',
      subtitle: 'Physics, Chemistry, Mathematics',
      highlights: [
        '⚙️ Engineering',
        '🏗️ Architecture',
        '💻 Data Science',
        '🚀 Technology & Innovation'
      ]
    },
    {
      id: 'PCB',
      icon: '🧬',
      title: 'Science (PCB)',
      subtitle: 'Physics, Chemistry, Biology',
      highlights: [
        '⚕️ Medicine (MBBS)',
        '💊 Pharmacy',
        '🧪 Biotechnology',
        '🩺 Healthcare Professions'
      ]
    },
    {
      id: 'Commerce',
      icon: '💼',
      title: 'Commerce',
      subtitle: 'Business, Accounting, Economics',
      highlights: [
        '📊 Business Management',
        '💰 Chartered Accountancy',
        '📈 Finance & Banking',
        '🎯 Entrepreneurship'
      ]
    },
    {
      id: 'Arts',
      icon: '🎨',
      title: 'Arts / Humanities',
      subtitle: 'Literature, Social Sciences, Creative Arts',
      highlights: [
        '🎬 Design & Media',
        '⚖️ Law',
        '🏛️ Civil Services',
        '✍️ Creative Industries'
      ]
    }
  ];

  return (
    <main className="min-h-[calc(100vh-80px)] px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-5xl md:text-6xl mb-4 bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent animate-fadeInUp">
          Choose Your Stream
        </h1>
        <p className="text-center text-xl text-slate-700 mb-12 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
          Select your preferred academic stream to explore detailed career paths and opportunities
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {streams.map((stream, index) => (
            <div
              key={stream.id}
              onClick={() => onSelectStream(stream.id)}
              className="group bg-white/95 p-10 rounded-3xl shadow-lg cursor-pointer transition-all hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] relative overflow-hidden animate-fadeInUp"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              
              <div className="text-7xl mb-4">{stream.icon}</div>
              <h2 className="text-slate-800 mb-2">{stream.title}</h2>
              <p className="text-slate-500 mb-6">{stream.subtitle}</p>
              
              <ul className="space-y-3 mb-6">
                {stream.highlights.map((highlight, i) => (
                  <li key={i} className="text-slate-600 pb-3 border-b border-slate-100 last:border-0">
                    {highlight}
                  </li>
                ))}
              </ul>
              
              <div className="text-right text-4xl text-[#667eea] group-hover:translate-x-2 transition-transform">
                →
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
