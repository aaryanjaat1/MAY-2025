
import React, { useState, useEffect, useCallback } from 'react';
import { SLIDES } from './constants/slidesData';
import { SlideData, TableRow } from './types';
import { ProgressBar } from './components/ProgressBar';
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, Info } from 'lucide-react';

const App: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextSlide = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIdx((prev) => (prev < SLIDES.length - 1 ? prev + 1 : prev));
  }, []);

  const prevSlide = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIdx((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const slide = SLIDES[currentIdx];

  const renderContent = (content: any) => {
    if (Array.isArray(content)) {
      if (typeof content[0] === 'string') {
        const isQuestion = slide.type === 'question';
        return (
          <ul className={`space-y-4 md:space-y-6 ${isQuestion ? 'list-none' : ''}`}>
            {content.map((item, i) => {
              // Clean leading dots or bullets
              let cleanedItem = item;
              if (cleanedItem.startsWith('• ')) cleanedItem = cleanedItem.substring(2);
              else if (cleanedItem.startsWith('.')) cleanedItem = cleanedItem.substring(1).trim();

              if (isQuestion) {
                // Questions: First two lines (Hindi/English) are primary headers
                const isHeaderLine = i === 0 || i === 1;
                return (
                  <li key={i} className={`${isHeaderLine ? 'text-2xl md:text-3xl font-bold text-white' : 'text-xl md:text-2xl text-gray-300 ml-6 md:ml-10'} leading-relaxed`}>
                    {cleanedItem}
                  </li>
                );
              }

              return (
                <li key={i} className="text-lg md:text-2xl leading-relaxed text-gray-300 flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  <span>{cleanedItem}</span>
                </li>
              );
            })}
          </ul>
        );
      } else {
        // Table Data
        return (
          <div className="overflow-x-auto border border-gray-800 rounded-xl bg-gray-900/20 backdrop-blur-sm mt-4">
            <table className="w-full text-left text-sm md:text-lg">
              <thead className="bg-gray-800/80 text-gray-100 uppercase tracking-wider text-xs font-bold">
                <tr>
                  {(content[0] as TableRow).col1 && <th className="p-4 md:p-6 border-b border-gray-700">Topic</th>}
                  {(content[0] as TableRow).col2 && <th className="p-4 md:p-6 border-b border-gray-700">Details</th>}
                  {(content[0] as TableRow).col3 && <th className="p-4 md:p-6 border-b border-gray-700">Key Data</th>}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {content.slice(1).map((row: TableRow, i: number) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="p-4 md:p-6 font-bold text-blue-400 align-top whitespace-nowrap">{row.col1}</td>
                    <td className="p-4 md:p-6 text-gray-300 leading-relaxed">{row.col2}</td>
                    {row.col3 && <td className="p-4 md:p-6 text-emerald-400 font-mono text-sm align-top">{row.col3}</td>}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
    }
    return <p className="text-2xl md:text-4xl text-center leading-snug font-medium text-gray-100">{content}</p>;
  };

  const getSlideTheme = (type: string) => {
    switch (type) {
      case 'title':
        return {
          box: 'border-blue-500/50 shadow-[0_0_60px_-15px_rgba(59,130,246,0.4)] bg-gradient-to-b from-gray-900 via-gray-900 to-black',
          color: '#3b82f6',
          glow: 'rgba(59, 130, 246, 0.3)'
        };
      case 'section':
        return {
          box: 'border-emerald-500/50 shadow-[0_0_60px_-15px_rgba(16,185,129,0.4)] bg-gradient-to-b from-gray-900 via-gray-900 to-black',
          color: '#10b981',
          glow: 'rgba(16, 185, 129, 0.3)'
        };
      case 'question':
        return {
          box: 'border-amber-500/50 shadow-[0_0_60px_-15px_rgba(245,158,11,0.4)] bg-gradient-to-b from-gray-900 via-gray-900 to-black',
          color: '#f59e0b',
          glow: 'rgba(245, 158, 11, 0.3)'
        };
      case 'fact':
        return {
          box: 'border-gray-700 shadow-2xl bg-gray-900/60',
          color: '#94a3b8',
          glow: 'rgba(148, 163, 184, 0.2)'
        };
      default:
        return {
          box: 'border-gray-800 shadow-2xl bg-gray-900/40',
          color: '#ffffff',
          glow: 'rgba(255, 255, 255, 0.1)'
        };
    }
  };

  const theme = getSlideTheme(slide.type);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden transition-colors duration-700 select-none" onClick={() => nextSlide()}>
      <ProgressBar current={currentIdx + 1} total={SLIDES.length} />
      
      {/* Page Info Display */}
      <div className="fixed top-8 left-10 flex flex-col z-30">
         <span className="text-white font-bold text-lg tracking-wider">MAY 2025</span>
      </div>

      <div className="fixed top-8 right-10 z-30 flex items-center gap-4">
        <div className="px-3 py-1 bg-gray-900 border border-gray-800 rounded text-xs font-mono text-gray-400">
           {currentIdx + 1} / {SLIDES.length}
        </div>
        <button 
          onClick={(e) => { e.stopPropagation(); toggleFullscreen(); }}
          title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
          className="p-2.5 bg-gray-900 border border-gray-800 hover:border-white/20 rounded-lg transition-all"
        >
          {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
        </button>
      </div>

      {/* Main Professional Box Structure */}
      <div 
        className={`relative w-full max-w-6xl aspect-[16/9] flex flex-col p-8 md:p-14 rounded-3xl border-2 transition-all duration-700 transform ${theme.box}`}
      >
        {/* Animated Slide Content Wrapper */}
        <div 
          key={currentIdx} // This key triggers a re-mount and re-animation on every slide change
          className="flex-1 flex flex-col slide-entry-animation h-full"
        >
          {slide.title && (
            <div className="mb-10 flex items-center gap-4">
              <div className={`w-1 h-10 rounded-full transition-colors duration-500 ${slide.type === 'section' ? 'bg-emerald-500' : slide.type === 'question' ? 'bg-amber-500' : 'bg-blue-500'}`} />
              <h2 className={`text-2xl md:text-3xl font-extrabold tracking-tight ${slide.type === 'section' ? 'text-emerald-400' : slide.type === 'question' ? 'text-amber-400' : 'text-blue-400'}`}>
                {slide.title}
              </h2>
            </div>
          )}

          <div className="flex-1 overflow-y-auto no-scrollbar pr-2">
            <div className="flex flex-col justify-center min-h-full">
              {renderContent(slide.content)}
            </div>
          </div>
        </div>

        {slide.type === 'question' && (
          <div className="mt-8 flex items-center gap-3 py-4 border-t border-amber-500/20 text-amber-500/80 animate-pulse">
            <Info size={16} />
            <span className="text-xs font-bold uppercase tracking-widest">Click anywhere for next step</span>
          </div>
        )}

        {/* Branding - Professional Style */}
        <div className="absolute bottom-6 right-10 flex items-center gap-2">
          <span 
            className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase"
            style={{ 
              color: theme.color,
              fontFamily: "'Inter', sans-serif",
              textShadow: `0 0 10px ${theme.glow}`
            }}
          >
            PRACHI MAM
          </span>
        </div>
      </div>

      {/* Static Footer Navigation */}
      <div className="fixed bottom-10 left-10 right-10 flex justify-between items-center z-30" onClick={(e) => e.stopPropagation()}>
        <div className="flex gap-4">
          <button 
            onClick={(e) => prevSlide(e)}
            disabled={currentIdx === 0}
            title="Go to Previous Slide (Arrow Left)"
            className="group flex items-center gap-3 px-6 py-3 bg-gray-900/90 border border-gray-800 hover:border-blue-500/50 rounded-2xl disabled:opacity-20 transition-all shadow-lg active:scale-95"
          >
            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-bold uppercase tracking-widest">Prev</span>
          </button>
          
          <button 
            onClick={(e) => nextSlide(e)}
            disabled={currentIdx === SLIDES.length - 1}
            title="Go to Next Slide (Arrow Right / Space)"
            className="group flex items-center gap-3 px-6 py-3 bg-gray-900/90 border border-gray-800 hover:border-blue-500/50 rounded-2xl disabled:opacity-20 transition-all shadow-lg active:scale-95"
          >
            <span className="text-sm font-bold uppercase tracking-widest">Next</span>
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Quick jump navigation */}
        <div className="hidden lg:flex gap-2 px-5 py-2.5 bg-gray-900/60 rounded-full border border-gray-800/50 backdrop-blur-xl">
          {Array.from({ length: 12 }).map((_, i) => {
             const targetIdx = Math.floor(i * (SLIDES.length / 12));
             const isActive = Math.abs(currentIdx - targetIdx) < (SLIDES.length / 24);
             return (
               <button
                key={i}
                onClick={() => setCurrentIdx(targetIdx)}
                title={`Jump to Slide ${targetIdx + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${isActive ? 'bg-blue-500 w-8' : 'bg-gray-700 hover:bg-gray-500'}`}
               />
             )
          })}
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .slide-entry-animation {
          animation: slideInUp 0.65s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          will-change: transform, opacity;
        }
      `}</style>
    </div>
  );
};

export default App;
