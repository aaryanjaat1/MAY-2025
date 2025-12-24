
import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { SLIDES as INITIAL_SLIDES } from './constants/slidesData';
import { SlideData, TableRow, SlideType, SlideLayout, GlobalSettings } from './types';
import { ProgressBar } from './components/ProgressBar';
import { 
  ChevronLeft, ChevronRight, Maximize2, Minimize2, 
  Info, Image as ImageIcon, Settings, Save, Plus, 
  Trash2, Play, Download, Upload, X, RotateCcw,
  Type, List, HelpCircle, Layout, Copy, FileText, Loader2,
  Lock, Mail, LogOut, ArrowRight, Columns, Rows, Square,
  Globe, MoveHorizontal, Maximize
} from 'lucide-react';
import html2canvas from 'html2canvas';
import pptxgen from 'pptxgenjs';

const App: React.FC = () => {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('is_auth_may_2025') === 'true';
  });
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Global Settings State
  const [globalSettings, setGlobalSettings] = useState<GlobalSettings>(() => {
    const saved = localStorage.getItem('global_settings_may_2025');
    return saved ? JSON.parse(saved) : {
      brandText: 'PRACHI MAM',
      gap: 20,
      boxPadding: 40
    };
  });

  // Presentation & Admin State
  const [slides, setSlides] = useState<SlideData[]>(() => {
    try {
      const saved = localStorage.getItem('current_affairs_slides');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.error("Failed to load slides from localStorage", e);
    }
    return INITIAL_SLIDES;
  });

  const [currentIdx, setCurrentIdx] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [editingIdx, setEditingIdx] = useState(0);
  const [isExporting, setIsExporting] = useState(false);
  const [exportProgress, setExportProgress] = useState(0);

  const slideRef = useRef<HTMLDivElement>(null);

  // Sync slides with localStorage
  useEffect(() => {
    if (isAuthenticated) {
      localStorage.setItem('current_affairs_slides', JSON.stringify(slides));
      localStorage.setItem('global_settings_may_2025', JSON.stringify(globalSettings));
    }
  }, [slides, isAuthenticated, globalSettings]);

  // Auth Handler
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const ADMIN_EMAIL = 'admin@currentaffairs.com';
    const ADMIN_PASSWORD = 'password2025';

    if (loginEmail === ADMIN_EMAIL && loginPassword === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem('is_auth_may_2025', 'true');
      setLoginError('');
    } else {
      setLoginError('Invalid email or password. Access restricted.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('is_auth_may_2025');
    setIsAdmin(false);
  };

  const nextSlide = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIdx((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
  }, [slides.length]);

  const prevSlide = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIdx((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isAuthenticated || isAdmin || isExporting) return; 
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, isAdmin, isExporting, isAuthenticated]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // --- Export as PPTX ---
  const downloadAsPptx = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isExporting) return;
    
    const confirmDownload = confirm("Preparing PPTX. Stay on this tab while it processes. Continue?");
    if (!confirmDownload) return;

    setIsExporting(true);
    setExportProgress(0);
    
    const pptx = new pptxgen();
    pptx.layout = 'LAYOUT_16x9';
    const originalIdx = currentIdx;

    try {
      for (let i = 0; i < slides.length; i++) {
        setExportProgress(Math.round(((i + 1) / slides.length) * 100));
        setCurrentIdx(i);
        await new Promise((resolve) => setTimeout(resolve, 800));

        if (slideRef.current) {
          const canvas = await html2canvas(slideRef.current, {
            useCORS: true,
            scale: 2,
            backgroundColor: '#000000',
            logging: false
          });
          const imgData = canvas.toDataURL('image/jpeg', 0.85);
          const slideObj = pptx.addSlide();
          slideObj.addImage({ data: imgData, x: 0, y: 0, w: '100%', h: '100%' });
        }
      }
      await pptx.writeFile({ fileName: `May_2025_Current_Affairs.pptx` });
    } catch (error) {
      console.error("Export failed", error);
    } finally {
      setIsExporting(false);
      setCurrentIdx(originalIdx);
    }
  };

  // --- Admin Logic ---
  const handleAddSlide = () => {
    const newSlide: SlideData = {
      id: Date.now(),
      type: 'fact',
      layout: 'default',
      title: 'New Slide',
      content: ['Add your content here...']
    };
    const newSlides = [...slides];
    newSlides.splice(editingIdx + 1, 0, newSlide);
    setSlides(newSlides);
    setEditingIdx(editingIdx + 1);
  };

  const handleDuplicateSlide = (idx: number) => {
    const slideToCopy = slides[idx];
    if (!slideToCopy) return;
    const newSlide: SlideData = {
      ...JSON.parse(JSON.stringify(slideToCopy)),
      id: Date.now() + Math.random(),
      title: `${slideToCopy.title || 'Slide'} (Copy)`
    };
    const newSlides = [...slides];
    newSlides.splice(idx + 1, 0, newSlide);
    setSlides(newSlides);
    setEditingIdx(idx + 1);
  };

  const handleDeleteSlide = (idx: number) => {
    if (slides.length <= 1) return;
    const newSlides = slides.filter((_, i) => i !== idx);
    setSlides(newSlides);
    setEditingIdx(Math.max(0, idx - 1));
    if (currentIdx >= newSlides.length) setCurrentIdx(newSlides.length - 1);
  };

  const updateSlideField = (field: keyof SlideData, value: any) => {
    const newSlides = [...slides];
    newSlides[editingIdx] = { ...newSlides[editingIdx], [field]: value };
    setSlides(newSlides);
  };

  const updateGlobalField = (field: keyof GlobalSettings, value: any) => {
    setGlobalSettings(prev => ({ ...prev, [field]: value }));
  };

  const handleReset = () => {
    if (confirm("Reset all slides to default? This will erase custom changes.")) {
      setSlides(INITIAL_SLIDES);
      setEditingIdx(0);
      setCurrentIdx(0);
    }
  };

  // Safe slide access
  const slide = useMemo(() => {
    if (!slides || slides.length === 0) return INITIAL_SLIDES[0];
    return slides[currentIdx] || slides[0];
  }, [slides, currentIdx]);

  const theme = useMemo(() => {
    if (!slide) return { box: '', color: '', glow: '' };
    switch (slide.type) {
      case 'title': return { box: 'border-blue-500/50 shadow-[0_0_60px_-15px_rgba(59,130,246,0.4)] bg-gray-900/70', color: '#3b82f6', glow: 'rgba(59, 130, 246, 0.3)' };
      case 'section': return { box: 'border-emerald-500/50 shadow-[0_0_60px_-15px_rgba(16,185,129,0.4)] bg-gray-900/70', color: '#10b981', glow: 'rgba(16, 185, 129, 0.3)' };
      case 'question': return { box: 'border-amber-500/50 shadow-[0_0_60px_-15px_rgba(245,158,11,0.4)] bg-gray-900/70', color: '#f59e0b', glow: 'rgba(245, 158, 11, 0.3)' };
      case 'fact': return { box: 'border-gray-700 shadow-2xl bg-gray-900/80', color: '#94a3b8', glow: 'rgba(148, 163, 184, 0.2)' };
      default: return { box: 'border-gray-800 shadow-2xl bg-gray-900/60', color: '#ffffff', glow: 'rgba(255, 255, 255, 0.1)' };
    }
  }, [slide]);

  const renderContent = (content: any, type: SlideType) => {
    if (!content) return null;
    if (Array.isArray(content)) {
      if (typeof content[0] === 'string' || content.length === 0) {
        const isQuestion = type === 'question';
        return (
          <ul className={`space-y-4 md:space-y-6 ${isQuestion ? 'list-none' : ''}`}>
            {content.map((item: string, i: number) => (
              <li key={i} className={`${isQuestion && (i === 0 || i === 1) ? 'text-2xl md:text-3xl font-bold text-white' : 'text-lg md:text-2xl text-gray-300 ml-0 md:ml-4'} leading-relaxed flex items-start gap-3`}>
                {!isQuestion && <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />}
                <span>{item}</span>
              </li>
            ))}
          </ul>
        );
      } else {
        return (
          <div className="overflow-x-auto border border-gray-800 rounded-xl bg-gray-900/20 backdrop-blur-sm mt-4">
            <table className="w-full text-left text-sm md:text-lg">
              <thead className="bg-gray-800/80 text-gray-100 uppercase tracking-wider text-xs font-bold">
                <tr>
                  {content[0]?.col1 && <th className="p-4 md:p-6 border-b border-gray-700">Topic</th>}
                  {content[0]?.col2 && <th className="p-4 md:p-6 border-b border-gray-700">Details</th>}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {content.slice(1).map((row: TableRow, i: number) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="p-4 md:p-6 font-bold text-blue-400 align-top">{row.col1}</td>
                    <td className="p-4 md:p-6 text-gray-300 leading-relaxed">{row.col2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
    }
    return <p className="text-2xl md:text-4xl text-center leading-snug font-medium text-gray-100">{String(content)}</p>;
  };

  // --- LOGIN VIEW ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute top-0 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 -right-40 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="max-w-md w-full relative z-10">
          <div className="bg-gray-900/60 border border-gray-800 backdrop-blur-2xl rounded-[2.5rem] p-10 shadow-2xl space-y-8 slide-entry-animation">
            <div className="text-center space-y-2">
              <div className="inline-flex p-4 rounded-2xl bg-blue-600/10 text-blue-500 mb-2">
                <Lock size={32} />
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight">System Login</h1>
              <p className="text-gray-500 text-sm font-medium">May 2025 Current Affairs Platform</p>
            </div>
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-gray-500 ml-1">Admin Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
                  <input type="email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} className="w-full bg-gray-900 border border-gray-800 rounded-2xl pl-12 pr-4 py-4 focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 outline-none transition-all text-sm" placeholder="Enter email..." required />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-gray-500 ml-1">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
                  <input type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} className="w-full bg-gray-900 border border-gray-800 rounded-2xl pl-12 pr-4 py-4 focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 outline-none transition-all text-sm" placeholder="••••••••" required />
                </div>
              </div>
              {loginError && <div className="p-4 bg-red-950/20 border border-red-900/30 rounded-xl text-red-500 text-xs font-bold flex items-center gap-3 animate-shake"><Info size={14} /> {loginError}</div>}
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 active:scale-[0.98] py-4 rounded-2xl font-bold transition-all shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2">Sign In <ArrowRight size={18} /></button>
            </form>
            <div className="pt-6 border-t border-gray-800/50 text-center"><p className="text-[10px] text-gray-600 uppercase tracking-widest font-bold">Authorized Personnel Only</p></div>
          </div>
          <p className="mt-10 text-center text-gray-700 text-[10px] font-bold tracking-[0.3em] uppercase">Developed for Prachi Mam</p>
        </div>
      </div>
    );
  }

  // --- ADMIN VIEW ---
  if (isAdmin) {
    const activeSlide = slides[editingIdx] || slides[0];
    return (
      <div className="fixed inset-0 bg-[#0a0a0c] text-white flex flex-col z-[100] font-sans">
        <div className="h-16 border-b border-gray-800 flex items-center justify-between px-6 bg-[#0f0f12]">
          <div className="flex items-center gap-3"><Settings className="text-blue-500" /><h1 className="font-bold tracking-tight text-lg">Admin Dashboard</h1></div>
          <div className="flex items-center gap-3">
             <button onClick={handleReset} className="flex items-center gap-2 px-3 py-1.5 bg-red-900/20 border border-red-500/20 text-red-400 hover:bg-red-900/30 rounded-lg text-sm font-medium transition-all"><RotateCcw size={16} /> Reset</button>
             <button onClick={(e) => downloadAsPptx(e)} className="flex items-center gap-2 px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 rounded-lg text-sm font-bold transition-all"><FileText size={16} /> Download PPTX</button>
             <button onClick={() => { setIsAdmin(false); setCurrentIdx(editingIdx); }} className="flex items-center gap-2 px-4 py-1.5 bg-blue-600 hover:bg-blue-500 rounded-lg text-sm font-bold transition-all"><Play size={16} /> Preview</button>
             <div className="w-px h-6 bg-gray-800 mx-2" />
             <button onClick={handleLogout} className="p-2 text-gray-500 hover:text-red-500 transition-colors"><LogOut size={20} /></button>
          </div>
        </div>

        <div className="flex-1 flex overflow-hidden">
          <div className="w-72 border-r border-gray-800 flex flex-col bg-[#0f0f12]">
            <div className="p-4 border-b border-gray-800">
              <button onClick={handleAddSlide} className="w-full flex items-center justify-center gap-2 py-2 bg-blue-600/10 text-blue-400 border border-blue-500/20 hover:bg-blue-600/20 rounded-lg transition-all font-bold text-sm"><Plus size={16} /> Add New Slide</button>
            </div>
            <div className="flex-1 overflow-y-auto p-2 space-y-1 custom-scrollbar">
              {slides.map((s, i) => (
                <button key={s.id} onClick={() => setEditingIdx(i)} className={`w-full text-left p-3 rounded-xl transition-all flex items-center gap-3 group ${editingIdx === i ? 'bg-blue-600/20 border border-blue-500/30' : 'hover:bg-white/5 border border-transparent'}`}>
                  <span className="text-[10px] font-mono text-gray-500">#{i + 1}</span>
                  <div className="flex-1 min-w-0"><p className="text-xs font-bold truncate opacity-80">{s.title || 'Untitled'}</p><p className="text-[10px] uppercase tracking-widest text-gray-500">{s.type}</p></div>
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all">
                    <button onClick={(e) => { e.stopPropagation(); handleDuplicateSlide(i); }} className="p-1.5 hover:bg-blue-500/20 text-blue-400 rounded-md"><Copy size={14} /></button>
                    <button onClick={(e) => { e.stopPropagation(); handleDeleteSlide(i); }} className="p-1.5 hover:bg-red-500/20 text-red-500 rounded-md"><Trash2 size={14} /></button>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto bg-[#0a0a0c] p-10 custom-scrollbar">
            <div className="max-w-4xl mx-auto space-y-10 pb-20">
              
              <section className="space-y-4">
                <div className="flex items-center justify-between text-indigo-400">
                  <div className="flex items-center gap-2"><Globe size={18} /><h3 className="text-sm font-bold uppercase tracking-wider">Global Defaults</h3></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 bg-indigo-500/5 rounded-2xl border border-indigo-500/20">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Global BG Image</label>
                    <input type="text" value={globalSettings.bgImage || ''} onChange={(e) => updateGlobalField('bgImage', e.target.value)} className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 focus:border-indigo-500 outline-none text-sm" placeholder="Default background..." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Global Box Gap</label>
                    <input type="number" value={globalSettings.gap} onChange={(e) => updateGlobalField('gap', parseInt(e.target.value))} className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 focus:border-indigo-500 outline-none text-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Global Box Padding</label>
                    <input type="number" value={globalSettings.boxPadding} onChange={(e) => updateGlobalField('boxPadding', parseInt(e.target.value))} className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 focus:border-indigo-500 outline-none text-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Footer Brand Text</label>
                    <input type="text" value={globalSettings.brandText || ''} onChange={(e) => updateGlobalField('brandText', e.target.value)} className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 focus:border-indigo-500 outline-none text-sm" />
                  </div>
                </div>
              </section>

              <div className="h-px bg-gray-800" />

              <section className="space-y-4">
                <div className="flex items-center gap-2 text-blue-400"><Layout size={18} /><h3 className="text-sm font-bold uppercase tracking-wider">Current Slide Configuration</h3></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-[#0f0f12] rounded-2xl border border-gray-800/50">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Slide Type</label>
                    <select value={activeSlide.type} onChange={(e) => updateSlideField('type', e.target.value)} className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 focus:border-blue-500 outline-none text-sm">
                      <option value="title">Title Slide</option>
                      <option value="section">Section Divider</option>
                      <option value="question">Question</option>
                      <option value="fact">Fact/Answer</option>
                      <option value="table">Table</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Layout Style</label>
                    <div className="flex gap-2">
                      {[
                        { id: 'default', icon: Square, label: 'Standard' },
                        { id: 'split-horizontal', icon: Columns, label: 'Left/Right' },
                        { id: 'split-vertical', icon: Rows, label: 'Top/Bottom' }
                      ].map((l) => (
                        <button key={l.id} onClick={() => updateSlideField('layout', l.id)} className={`flex-1 flex flex-col items-center justify-center p-2 rounded-lg border transition-all ${activeSlide.layout === l.id ? 'bg-blue-600/20 border-blue-500 text-blue-400' : 'bg-gray-900 border-gray-800 text-gray-600 hover:border-gray-700'}`}>
                          <l.icon size={16} />
                          <span className="text-[9px] mt-1 font-bold uppercase">{l.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Slide Title</label>
                    <input type="text" value={activeSlide.title || ''} onChange={(e) => updateSlideField('title', e.target.value)} className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 focus:border-blue-500 outline-none text-sm" placeholder="Enter title..." />
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <div className="flex items-center gap-2 text-emerald-400"><MoveHorizontal size={18} /><h3 className="text-sm font-bold uppercase tracking-wider">Dimensions & Spacing</h3></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 bg-[#0f0f12] rounded-2xl border border-gray-800/50">
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Box Split Ratio ({activeSlide.imageSize || 50}%)</label>
                    <input type="range" min="10" max="90" value={activeSlide.imageSize || 50} onChange={(e) => updateSlideField('imageSize', parseInt(e.target.value))} className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-blue-500" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Box Gap ({activeSlide.gap ?? globalSettings.gap}px)</label>
                    <input type="range" min="0" max="100" value={activeSlide.gap ?? globalSettings.gap} onChange={(e) => updateSlideField('gap', parseInt(e.target.value))} className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-emerald-500" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Box Internal Padding ({activeSlide.boxPadding ?? globalSettings.boxPadding}px)</label>
                    <input type="range" min="0" max="100" value={activeSlide.boxPadding ?? globalSettings.boxPadding} onChange={(e) => updateSlideField('boxPadding', parseInt(e.target.value))} className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-indigo-500" />
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <div className="flex items-center gap-2 text-emerald-400"><ImageIcon size={18} /><h3 className="text-sm font-bold uppercase tracking-wider">Visual Assets</h3></div>
                <div className="p-6 bg-[#0f0f12] rounded-2xl border border-gray-800/50 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Slide Image URL</label>
                      <input type="text" value={activeSlide.imageUrl || ''} onChange={(e) => updateSlideField('imageUrl', e.target.value)} className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 focus:border-blue-500 outline-none text-sm" placeholder="Paste Unsplash link or direct image URL..." />
                    </div>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <div className="flex items-center gap-2 text-amber-400"><Type size={18} /><h3 className="text-sm font-bold uppercase tracking-wider">Slide Content</h3></div>
                <div className="p-6 bg-[#0f0f12] rounded-2xl border border-gray-800/50">
                  <textarea value={Array.isArray(activeSlide.content) ? activeSlide.content.join('\n') : activeSlide.content} onChange={(e) => { const lines = e.target.value.split('\n'); updateSlideField('content', lines.length > 1 ? lines : e.target.value); }} className="w-full h-80 bg-gray-900 border border-gray-800 rounded-xl px-4 py-4 focus:border-blue-500 outline-none font-mono text-sm leading-relaxed custom-scrollbar" placeholder="Enter points here..." />
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- PRESENTATION VIEW ---
  const slideLayout = slide?.layout || 'default';
  const splitVal = slide?.imageSize || 50;
  const currentGap = slide?.gap ?? globalSettings.gap;
  const currentPadding = slide?.boxPadding ?? globalSettings.boxPadding;
  const currentBg = slide?.imageUrl || globalSettings.bgImage;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden transition-colors duration-700 select-none relative" onClick={() => nextSlide()}>
      
      {currentBg && (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img src={currentBg} alt="" className="w-full h-full object-cover opacity-30 transition-all duration-1000" style={{ filter: 'blur(3px)' }} />
          <div className="absolute inset-0 bg-black/60" />
        </div>
      )}

      <ProgressBar current={currentIdx + 1} total={slides.length} />
      
      <div className="fixed top-8 left-10 flex flex-col z-30"><span className="text-white font-bold text-lg tracking-wider">MAY 2025</span></div>
      <div className="fixed top-8 right-10 z-30 flex items-center gap-4">
        <button onClick={(e) => { e.stopPropagation(); setIsAdmin(true); setEditingIdx(currentIdx); }} className="p-2.5 bg-gray-900/80 border border-gray-800 hover:border-blue-500/50 hover:text-blue-400 rounded-lg transition-all"><Settings size={18} /></button>
        <div className="px-3 py-1 bg-gray-900/80 border border-gray-800 rounded text-xs font-mono text-gray-400">{currentIdx + 1} / {slides.length}</div>
        <button onClick={(e) => { e.stopPropagation(); toggleFullscreen(); }} className="p-2.5 bg-gray-900/80 border border-gray-800 hover:border-white/20 rounded-lg transition-all">{isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}</button>
      </div>

      <div ref={slideRef} className="relative z-10 w-full max-w-[95vw] h-[90vh] md:max-w-7xl md:aspect-[16/9] flex flex-col overflow-hidden transition-all duration-700">
        
        <div key={currentIdx} className="flex-1 flex flex-col slide-entry-animation h-full relative">
          
          {slideLayout === 'split-horizontal' ? (
            <div className="flex h-full w-full" style={{ gap: `${currentGap}px`, padding: `${currentGap}px` }}>
              <div className={`flex flex-col rounded-[2.5rem] border-2 transition-all duration-700 ${theme.box}`} style={{ width: `${splitVal}%`, padding: `${currentPadding}px` }}>
                {slide.title && (
                  <div className="mb-8 flex items-center gap-4">
                    <div className={`w-1 h-8 rounded-full ${slide.type === 'section' ? 'bg-emerald-500' : slide.type === 'question' ? 'bg-amber-500' : 'bg-blue-500'}`} />
                    <h2 className={`text-xl md:text-2xl font-extrabold tracking-tight ${slide.type === 'section' ? 'text-emerald-400' : slide.type === 'question' ? 'text-amber-400' : 'text-blue-400'}`}>{slide.title}</h2>
                  </div>
                )}
                <div className="flex-1 overflow-y-auto no-scrollbar">{renderContent(slide.content, slide.type)}</div>
              </div>
              <div className={`rounded-[2.5rem] border-2 overflow-hidden transition-all duration-700 ${theme.box}`} style={{ width: `${100 - splitVal}%` }}>
                {slide.imageUrl ? <img src={slide.imageUrl} className="w-full h-full object-cover opacity-90" /> : <div className="w-full h-full bg-white/5 flex items-center justify-center text-gray-700 font-bold uppercase tracking-[0.2em]">No Image</div>}
              </div>
            </div>
          ) : slideLayout === 'split-vertical' ? (
            <div className="flex flex-col h-full w-full" style={{ gap: `${currentGap}px`, padding: `${currentGap}px` }}>
              <div className={`rounded-[2.5rem] border-2 overflow-hidden transition-all duration-700 ${theme.box}`} style={{ height: `${splitVal}%`, width: '100%' }}>
                {slide.imageUrl ? <img src={slide.imageUrl} className="w-full h-full object-cover" /> : <div className="w-full h-full bg-white/5 flex items-center justify-center text-gray-700 font-bold uppercase tracking-[0.2em]">No Image</div>}
              </div>
              <div className={`flex flex-col rounded-[2.5rem] border-2 transition-all duration-700 ${theme.box}`} style={{ height: `${100 - splitVal}%`, width: '100%', padding: `${currentPadding}px` }}>
                {slide.title && (
                  <div className="mb-4 flex items-center gap-4">
                    <div className={`w-1 h-6 rounded-full ${slide.type === 'section' ? 'bg-emerald-500' : slide.type === 'question' ? 'bg-amber-500' : 'bg-blue-500'}`} />
                    <h2 className={`text-lg md:text-xl font-extrabold tracking-tight ${slide.type === 'section' ? 'text-emerald-400' : slide.type === 'question' ? 'text-amber-400' : 'text-blue-400'}`}>{slide.title}</h2>
                  </div>
                )}
                <div className="flex-1 overflow-y-auto no-scrollbar">{renderContent(slide.content, slide.type)}</div>
              </div>
            </div>
          ) : (
            <div className="p-8 md:p-14 h-full flex flex-col justify-center items-center">
                <div 
                  className={`flex flex-col rounded-[3rem] border-2 transition-all duration-700 w-full h-full relative ${theme.box}`} 
                  style={{ padding: `${currentPadding}px` }}
                >
                  {slide.title && (
                    <div className="mb-10 flex items-center gap-4">
                      <div className={`w-1 h-10 rounded-full transition-colors duration-500 ${slide.type === 'section' ? 'bg-emerald-500' : slide.type === 'question' ? 'bg-amber-500' : 'bg-blue-500'}`} />
                      <h2 className={`text-2xl md:text-3xl font-extrabold tracking-tight ${slide.type === 'section' ? 'text-emerald-400' : slide.type === 'question' ? 'text-amber-400' : 'text-blue-400'}`}>{slide.title}</h2>
                    </div>
                  )}
                  <div className="flex-1 flex flex-col justify-center overflow-y-auto no-scrollbar">{renderContent(slide.content, slide.type)}</div>
                  
                  {/* Internal Branding - Default Layout Only */}
                  <div className="absolute bottom-6 right-8 flex items-center gap-2 pointer-events-none z-20">
                    <span 
                      className="text-xs md:text-sm font-black tracking-[0.3em] uppercase opacity-80" 
                      style={{ color: theme.color, textShadow: `0 0 12px ${theme.glow}` }}
                    >
                      {globalSettings.brandText}
                    </span>
                  </div>
                </div>
            </div>
          )}
        </div>
      </div>

      <div className="fixed bottom-10 left-10 right-10 flex justify-between items-center z-30" onClick={(e) => e.stopPropagation()}>
        <div className="flex gap-4">
          <button onClick={(e) => prevSlide(e)} disabled={currentIdx === 0 || isExporting} className="group flex items-center gap-3 px-8 py-4 bg-gray-900/90 border border-gray-800 hover:border-blue-500/50 rounded-3xl disabled:opacity-20 transition-all shadow-xl active:scale-95">
            <ChevronLeft size={22} className="group-hover:-translate-x-1 transition-transform" /> <span className="text-sm font-bold uppercase tracking-[0.2em]">Prev</span>
          </button>
          <button onClick={(e) => nextSlide(e)} disabled={currentIdx === slides.length - 1 || isExporting} className="group flex items-center gap-3 px-8 py-4 bg-gray-900/90 border border-gray-800 hover:border-blue-500/50 rounded-3xl disabled:opacity-20 transition-all shadow-xl active:scale-95">
            <span className="text-sm font-bold uppercase tracking-[0.2em]">Next</span> <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #2a2a30; border-radius: 10px; }
        @keyframes slideInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .slide-entry-animation { animation: slideInUp 0.65s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        @keyframes shake { 0%, 100% { transform: translateX(0); } 20%, 60% { transform: translateX(-4px); } 40%, 80% { transform: translateX(4px); } }
        .animate-shake { animation: shake 0.4s ease-in-out; }
      `}</style>
    </div>
  );
};

export default App;
