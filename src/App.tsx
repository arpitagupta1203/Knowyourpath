import { useState } from 'react';
import Home from './components/Home';
import StreamSelection from './components/StreamSelection';
import CareerFlowchart from './components/CareerFlowchart';

type Page = 'home' | 'streams' | 'career';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedStream, setSelectedStream] = useState<string>('');

  const navigateToStreams = () => {
    setCurrentPage('streams');
  };

  const navigateToCareer = (stream: string) => {
    setSelectedStream(stream);
    setCurrentPage('career');
  };

  const navigateToHome = () => {
    setCurrentPage('home');
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Background Image */}
      <div 
        className="fixed inset-0 z-[-2] opacity-15 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1667655861998-46fe4c29a4cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc2MjYwMTgxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)'
        }}
      />
      
      {/* Background Overlay */}
      <div className="fixed inset-0 z-[-1] bg-gradient-to-br from-[#a8edea]/80 via-[#fed6e3]/80 to-[#a8edea]/80" />

      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg animate-slideDown">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <button 
            onClick={navigateToHome}
            className="text-2xl text-slate-800 hover:scale-105 transition-transform cursor-pointer"
          >
            Know Your Path 🎓
          </button>
          <ul className="flex gap-8">
            <li>
              <button
                onClick={navigateToHome}
                className={`relative pb-1 transition-colors ${
                  currentPage === 'home' ? 'text-[#667eea]' : 'text-slate-600 hover:text-slate-800'
                }`}
              >
                Home
                {currentPage === 'home' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#667eea] to-[#764ba2]" />
                )}
              </button>
            </li>
            <li>
              <button
                onClick={navigateToStreams}
                className={`relative pb-1 transition-colors ${
                  currentPage === 'streams' || currentPage === 'career' ? 'text-[#667eea]' : 'text-slate-600 hover:text-slate-800'
                }`}
              >
                Explore Streams
                {(currentPage === 'streams' || currentPage === 'career') && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#667eea] to-[#764ba2]" />
                )}
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Page Content */}
      {currentPage === 'home' && <Home onNavigateToStreams={navigateToStreams} />}
      {currentPage === 'streams' && <StreamSelection onSelectStream={navigateToCareer} />}
      {currentPage === 'career' && (
        <CareerFlowchart 
          stream={selectedStream} 
          onBackToStreams={navigateToStreams}
        />
      )}

      {/* Footer */}
      <footer className="bg-white/90 backdrop-blur-md shadow-lg mt-12 py-8 text-center">
        <p className="text-slate-600 mb-2">
          © 2025 Know Your Path - Empowering Indian Students to Choose the Right Career
        </p>
        <p className="text-slate-500">For Classes 11 & 12 Students</p>
      </footer>
    </div>
  );
}
