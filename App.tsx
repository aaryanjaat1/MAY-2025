
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
  Globe, MoveHorizontal, Maximize, CloudCheck, CloudOff
} from 'lucide-react';
import html2canvas from 'html2canvas';
import pptxgen from 'pptxgenjs';
import { createClient } from '@supabase/supabase-js';

// Supabase Configuration
const SUPABASE_URL = 'https://tvcwdfgvyhkjcfjljcna.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2Y3dkZmd2eWhramNmamxqY25hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY1ODY1MzMsImV4cCI6MjA4MjE2MjUzM30.8DxeIeYWCW6EfQ7kPWD041mqjNNDlEx9ax8l2MN0pC4';
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const App: React.FC = () => {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('is_auth_may_2025') === 'true';
  });
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Global Settings State
  const [globalSettings, setGlobalSettings] = useState<GlobalSettings>({
    brandText: 'PRACHI MAM',
    boxWidth: 90,
    boxHeight: 85,
    boxPadding: 40
  });

  // Presentation & Admin State
  const [slides, setSlides] = useState<SlideData[]>(INITIAL_SLIDES);
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncError, setSyncError] = useState<string | null>(null);

  const [currentIdx, setCurrentIdx] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [editingIdx, setEditingIdx] = useState(0);
  const [isExporting, setIsExporting] = useState(false);
  const [exportProgress, setExportProgress] = useState(0);

  const slideRef = useRef<HTMLDivElement>(null);

  // --- Supabase Data Sync ---
  useEffect(() => {
    if (isAuthenticated) {
      const fetchData = async () => {
        setIsSyncing(true);
        try {
          // Fetch Slides
          const { data: slidesData, error: slidesError } = await supabase
            .from('slides_data')
            .select('data')
            .order('id', { ascending: true });

          if (slidesError) throw slidesError;
          if (slidesData && slidesData.length > 0) {
            setSlides(slidesData.map(item => item.data as SlideData));
          }

          // Fetch Settings
          const { data: settingsData, error: settingsError } = await supabase
            .from('app_settings')
            .select('data')
            .single();

          if (settingsError && settingsError.code !== 'PGRST116') throw settingsError;
          if (settingsData) {
            setGlobalSettings(settingsData.data as GlobalSettings);
          }
        } catch (err: any) {
          console.error("Supabase fetch error:", err);
          setSyncError(err.message || "Failed to connect to database");
        } finally {
          setIsSyncing(false);
        }
      };
      fetchData();
    }
  }, [isAuthenticated]);

  const syncToCloud = async (updatedSlides: SlideData[], updatedSettings: GlobalSettings) => {
    if (!isAuthenticated) return;
    setIsSyncing(true);
    setSyncError(null);
    try {
      // Clear existing records before insert to maintain perfect sync
      const { error: deleteError } = await supabase.from('slides_data').delete().gte('id', 0);
      if (deleteError) throw deleteError;

      // Insert new slide state
      const { error: insertError } = await supabase.from('slides_data').insert(
        updatedSlides.map((s, idx) => ({ id: idx, data: s }))
      );
      if (insertError) throw insertError;

      // Upsert global settings
      const { error: settingsError } = await supabase
        .from('app_settings')
        .upsert({ id: 1, data: updatedSettings });
      if (settingsError) throw settingsError;

    } catch (err: any) {
      console.error("Supabase sync error:", err);
      // Ensure we display a string, not an object
      setSyncError(err.message || JSON.stringify(err) || "Unknown sync error");
    } finally {
      setIsSyncing(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginEmail === 'admin@currentaffairs.com' && loginPassword === 'password2025') {
      setIsAuthenticated(true);
      localStorage.setItem('is_auth_may_2025', 'true');
      setLoginError('');
    } else {
      setLoginError('Invalid email or password.');
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

  const downloadAsPptx = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isExporting) return;
    setIsExporting(true);
    const pptx = new pptxgen();
    pptx.layout = 'LAYOUT_16x9';
    const originalIdx = currentIdx;
    try {
      for (let i = 0; i < slides.length; i++) {
        setExportProgress(Math.round(((i + 1) / slides.length) * 100));
        setCurrentIdx(i);
        await new Promise((resolve) => setTimeout(resolve, 800));
        if (slideRef.current) {
          const canvas = await html2canvas(slideRef.current, { useCORS: true, scale: 2, backgroundColor: '#000000', logging: false });
          const imgData = canvas.toDataURL('image/jpeg', 0.85);
          const slideObj = pptx.addSlide();
          slideObj.addImage({ data: imgData, x: 0, y: 0, w: '100%', h: '100%' });
        }
      }
      await pptx.writeFile({ fileName: `May_2025_Current_Affairs.pptx` });
    } catch (error) {
      console.error(error);
    } finally {
      setIsExporting(false);
      setCurrentIdx(originalIdx);
    }
  };

  const handleAddSlide = () => {
    const newSlide: SlideData = { id: Date.now(), type: 'fact', layout: 'default', title: 'New Slide', content: ['Content...'] };
    const newSlides = [...slides];
    newSlides.splice(editingIdx + 1, 0, newSlide);
    setSlides(newSlides);
    setEditingIdx(editingIdx + 1);
    syncToCloud(newSlides, globalSettings);
  };

  const handleDuplicateSlide = (idx: number) => {
    const newSlide: SlideData = { ...JSON.parse(JSON.stringify(slides[idx])), id: Date.now() + Math.random(), title: `${slides[idx].title || 'Slide'} (Copy)` };
    const newSlides = [...slides];
    newSlides.splice(idx + 1, 0, newSlide);
    setSlides(newSlides);
    setEditingIdx(idx + 1);
    syncToCloud(newSlides, globalSettings);
  };

  const handleDeleteSlide = (idx: number) => {
    if (slides.length <= 1) return;
    const newSlides = slides.filter((_, i) => i !== idx);
    setSlides(newSlides);
    setEditingIdx(Math.max(0, idx - 1));
    syncToCloud(newSlides, globalSettings);
  };

  const updateSlideField = (field: keyof SlideData, value: any) => {
    const newSlides = [...slides];
    newSlides[editingIdx] = { ...newSlides[editingIdx], [field]: value };
    setSlides(newSlides);
  };

  const saveAllToCloud = () => syncToCloud(slides, globalSettings);

  const updateGlobalField = (field: keyof GlobalSettings, value: any) => {
    const updatedSettings = { ...globalSettings, [field]: value };
    setGlobalSettings(updatedSettings);
    syncToCloud(slides, updatedSettings);
  };

  const handleReset = () => {
    if (confirm("Reset to default template? This will clear cloud data too.")) {
      setSlides(INITIAL_SLIDES);
      syncToCloud(INITIAL_SLIDES, globalSettings);
    }
  };

  const slide = useMemo(() => slides[currentIdx] || slides[0], [slides, currentIdx]);

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

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute top-0 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="max-w-md w-full relative z-10 bg-gray-900/60 border border-gray-800 rounded-[2.5rem] p-10 shadow-2xl space-y-8">
            <h1 className="text-3xl font-extrabold text-center">System Login</h1>
            <form onSubmit={handleLogin} className="space-y-6">
              <input type="email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} className="w-full bg-gray-900 border border-gray-800 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 transition-all font-bold" placeholder="Email" />
              <input type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} className="w-full bg-gray-900 border border-gray-800 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 transition-all font-bold" placeholder="Password" />
              {loginError && <p className="text-red-500 text-xs font-bold">{loginError}</p>}
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 py-4 rounded-2xl font-bold transition-all shadow-lg flex items-center justify-center gap-2">Sign In <ArrowRight size={18} /></button>
            </form>
        </div>
      </div>
    );
  }

  if (isAdmin) {
    const activeSlide = slides[editingIdx] || slides[0];
    return (
      <div className="fixed inset-0 bg-[#0a0a0c] text-white flex flex-col z-[100] font-sans">
        <div className="h-16 border-b border-gray-800 flex items-center justify-between px-6 bg-[#0f0f12]">
          <div className="flex items-center gap-3"><Settings className="text-blue-500" /><h1 className="font-bold tracking-tight text-lg">Admin Dashboard</h1></div>
          <div className="flex items-center gap-3">
             <div className="text-xs font-bold uppercase tracking-widest mr-4">
                {isSyncing ? (
                  <span className="text-blue-500 animate-pulse flex items-center gap-2"><Loader2 size={14} className="animate-spin" /> Syncing...</span>
                ) : syncError ? (
                  <span className="text-red-500 flex items-center gap-2" title={syncError}><CloudOff size={14} /> Sync Failed</span>
                ) : (
                  <span className="text-emerald-500 flex items-center gap-2"><CloudCheck size={14} /> Cloud Active</span>
                )}
             </div>
             <button onClick={saveAllToCloud} className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 rounded-lg text-sm font-bold transition-all"><Save size={16} /> Save Changes</button>
             <button onClick={() => setIsAdmin(false)} className="px-4 py-1.5 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm font-bold">Preview Mode</button>
             <button onClick={handleLogout} className="p-2 text-gray-500 hover:text-red-500"><LogOut size={20} /></button>
          </div>
        </div>

        <div className="flex-1 flex overflow-hidden">
          <div className="w-72 border-r border-gray-800 flex flex-col bg-[#0f0f12] overflow-y-auto no-scrollbar">
            <div className="p-4 border-b border-gray-800">
              <button onClick={handleAddSlide} className="w-full py-2 bg-blue-600/10 text-blue-400 border border-blue-500/20 rounded-lg text-sm font-bold hover:bg-blue-600/20 transition-all">+ Add Slide</button>
            </div>
            {slides.map((s, i) => (
              <button key={s.id} onClick={() => setEditingIdx(i)} className={`w-full text-left p-4 border-b border-gray-800 transition-all group relative ${editingIdx === i ? 'bg-blue-600/10' : 'hover:bg-white/5'}`}>
                <p className="text-xs font-bold truncate pr-6">{s.title || 'Untitled Slide'}</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-tighter">{s.type}</p>
                <div className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all">
                  <button onClick={(e) => { e.stopPropagation(); handleDeleteSlide(i); }} className="p-1 text-red-500 hover:bg-red-500/20 rounded"><Trash2 size={12} /></button>
                </div>
              </button>
            ))}
          </div>

          <div className="flex-1 overflow-y-auto bg-[#0a0a0c] p-10 custom-scrollbar">
            <div className="max-w-4xl mx-auto space-y-12 pb-20">
              
              {/* GLOBAL DIMENSIONS - The main request */}
              <section className="space-y-4">
                <div className="flex items-center gap-2 text-indigo-400 font-bold uppercase text-xs tracking-widest"><Globe size={16} /> Global Card Dimensions</div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-[#0f0f12] rounded-2xl border border-gray-800">
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase font-bold text-gray-500">Content Width ({globalSettings.boxWidth}%)</label>
                    <input type="range" min="40" max="100" value={globalSettings.boxWidth} onChange={(e) => updateGlobalField('boxWidth', parseInt(e.target.value))} className="w-full accent-blue-500" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase font-bold text-gray-500">Content Height ({globalSettings.boxHeight}%)</label>
                    <input type="range" min="40" max="100" value={globalSettings.boxHeight} onChange={(e) => updateGlobalField('boxHeight', parseInt(e.target.value))} className="w-full accent-emerald-500" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase font-bold text-gray-500">Internal Padding ({globalSettings.boxPadding}px)</label>
                    <input type="range" min="0" max="120" value={globalSettings.boxPadding} onChange={(e) => updateGlobalField('boxPadding', parseInt(e.target.value))} className="w-full accent-indigo-500" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-[#0f0f12] rounded-2xl border border-gray-800">
                   <div className="space-y-2">
                      <label className="text-[10px] uppercase font-bold text-gray-500">Branding Text</label>
                      <input type="text" value={globalSettings.brandText || ''} onChange={(e) => updateGlobalField('brandText', e.target.value)} className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 outline-none focus:border-blue-500" placeholder="e.g. PRACHI MAM" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] uppercase font-bold text-gray-500">Default Global BG</label>
                      <input type="text" value={globalSettings.bgImage || ''} onChange={(e) => updateGlobalField('bgImage', e.target.value)} className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 outline-none focus:border-blue-500" placeholder="Image URL..." />
                   </div>
                </div>
              </section>

              <div className="h-px bg-gray-800" />

              {/* SLIDE EDITOR */}
              <section className="space-y-4">
                <div className="flex items-center gap-2 text-blue-400 font-bold uppercase text-xs tracking-widest"><Layout size={16} /> Current Slide Editor</div>
                <div className="p-8 bg-[#0f0f12] rounded-2xl border border-gray-800 space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-bold text-gray-500">Slide Category</label>
                      <select value={activeSlide.type} onChange={(e) => updateSlideField('type', e.target.value)} className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 outline-none appearance-none">
                        <option value="title">Title Slide</option>
                        <option value="section">Section/Topic</option>
                        <option value="question">Question</option>
                        <option value="fact">Fact/Answer</option>
                        <option value="table">Table/Data</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-bold text-gray-500">Box Layout</label>
                      <select value={activeSlide.layout} onChange={(e) => updateSlideField('layout', e.target.value)} className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 outline-none appearance-none">
                        <option value="default">Standard (Card)</option>
                        <option value="split-horizontal">Horizontal Split (Left/Right)</option>
                        <option value="split-vertical">Vertical Split (Top/Bottom)</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-gray-500">Asset URL (Background or Side Image)</label>
                    <input type="text" value={activeSlide.imageUrl || ''} onChange={(e) => updateSlideField('imageUrl', e.target.value)} className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 outline-none font-mono text-xs" placeholder="https://..." />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-gray-500">Heading Title</label>
                    <input type="text" value={activeSlide.title || ''} onChange={(e) => updateSlideField('title', e.target.value)} className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 outline-none text-lg font-bold" placeholder="Enter title..." />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-gray-500">Slide Body (One point per line)</label>
                    <textarea value={Array.isArray(activeSlide.content) ? activeSlide.content.join('\n') : activeSlide.content} onChange={(e) => updateSlideField('content', e.target.value.split('\n'))} className="w-full h-64 bg-gray-900 border border-gray-800 rounded-xl px-4 py-4 outline-none font-sans text-sm leading-relaxed" placeholder="Type content here..." />
                  </div>
                </div>
              </section>

              <div className="flex justify-center py-6">
                <button onClick={handleReset} className="text-[10px] font-bold uppercase tracking-widest text-red-500/50 hover:text-red-500 transition-colors flex items-center gap-2"><RotateCcw size={12} /> Factory Reset Database</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- PRESENTATION RENDERING ---
  const slideLayout = slide?.layout || 'default';
  const splitVal = slide?.imageSize || 50;
  const currentPadding = slide?.boxPadding ?? globalSettings.boxPadding;
  const currentBg = slide?.imageUrl || globalSettings.bgImage;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden select-none relative" onClick={() => nextSlide()}>
      
      {/* BACKGROUND LAYER */}
      {currentBg && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img src={currentBg} alt="" className="w-full h-full object-cover opacity-25" style={{ filter: 'blur(3px)' }} />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      )}

      <ProgressBar current={currentIdx + 1} total={slides.length} />
      
      {/* NAVIGATION CONTROLS */}
      <div className="fixed top-8 right-10 z-[100] flex items-center gap-3">
        <button onClick={(e) => { e.stopPropagation(); setIsAdmin(true); setEditingIdx(currentIdx); }} className="p-2.5 bg-gray-900/90 backdrop-blur border border-gray-800 rounded-xl hover:border-blue-500 transition-all text-gray-400 hover:text-blue-400"><Settings size={18} /></button>
        <button onClick={(e) => { e.stopPropagation(); toggleFullscreen(); }} className="p-2.5 bg-gray-900/90 backdrop-blur border border-gray-800 rounded-xl hover:border-white transition-all text-gray-400 hover:text-white"><Maximize2 size={18} /></button>
      </div>

      <div ref={slideRef} className="relative z-10 w-full max-w-[95vw] h-[88vh] md:max-w-7xl md:aspect-[16/9] flex flex-col overflow-hidden items-center justify-center">
        <div key={currentIdx} className="w-full h-full flex flex-col items-center justify-center slide-entry-animation relative">
          
          {slideLayout === 'split-horizontal' ? (
            <div className="flex h-full w-full p-4 gap-4">
              <div className={`flex flex-col rounded-[2.5rem] border-2 transition-all duration-500 ${theme.box}`} style={{ width: `${splitVal}%`, padding: `${currentPadding}px` }}>
                {slide.title && <h2 className="text-2xl md:text-3xl font-extrabold mb-8" style={{ color: theme.color }}>{slide.title}</h2>}
                <div className="flex-1 overflow-y-auto no-scrollbar">{renderContent(slide.content, slide.type)}</div>
              </div>
              <div className={`rounded-[2.5rem] border-2 overflow-hidden transition-all duration-500 ${theme.box}`} style={{ width: `${100 - splitVal}%` }}>
                {slide.imageUrl ? <img src={slide.imageUrl} className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center text-gray-800 font-bold tracking-widest text-3xl">ASSET</div>}
              </div>
            </div>
          ) : slideLayout === 'split-vertical' ? (
            <div className="flex flex-col h-full w-full p-4 gap-4">
              <div className={`rounded-[2.5rem] border-2 overflow-hidden transition-all duration-500 ${theme.box}`} style={{ height: `${splitVal}%` }}>
                {slide.imageUrl ? <img src={slide.imageUrl} className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center text-gray-800 font-bold text-3xl">ASSET</div>}
              </div>
              <div className={`flex flex-col rounded-[2.5rem] border-2 transition-all duration-500 ${theme.box}`} style={{ height: `${100 - splitVal}%`, padding: `${currentPadding}px` }}>
                {slide.title && <h2 className="text-xl md:text-2xl font-bold mb-6" style={{ color: theme.color }}>{slide.title}</h2>}
                <div className="flex-1 overflow-y-auto no-scrollbar">{renderContent(slide.content, slide.type)}</div>
              </div>
            </div>
          ) : (
            /* STANDARD LAYOUT - Respects Global Width/Height */
            <div 
              className={`flex flex-col rounded-[3rem] border-2 transition-all duration-700 relative ${theme.box}`} 
              style={{ 
                padding: `${currentPadding}px`,
                width: `${globalSettings.boxWidth}%`,
                height: `${globalSettings.boxHeight}%`
              }}
            >
              {slide.title && (
                <div className="mb-10 flex items-center gap-5">
                  <div className={`w-2 h-10 rounded-full ${slide.type === 'section' ? 'bg-emerald-500' : slide.type === 'question' ? 'bg-amber-500' : 'bg-blue-500'}`} />
                  <h2 className="text-3xl md:text-4xl font-black tracking-tight" style={{ color: theme.color }}>{slide.title}</h2>
                </div>
              )}
              <div className="flex-1 flex flex-col justify-center overflow-y-auto no-scrollbar">{renderContent(slide.content, slide.type)}</div>
              
              {/* BRANDING */}
              <div className="absolute bottom-8 right-10">
                <span className="text-xs md:text-sm font-black tracking-[0.4em] uppercase opacity-40 select-none" style={{ color: theme.color }}>{globalSettings.brandText}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* BOTTOM NAV BAR */}
      <div className="fixed bottom-10 left-10 right-10 flex justify-between items-center z-50" onClick={(e) => e.stopPropagation()}>
        <div className="flex gap-4">
          <button onClick={(e) => prevSlide(e)} disabled={currentIdx === 0} className="px-8 py-4 bg-gray-900/90 backdrop-blur border border-gray-800 rounded-full disabled:opacity-10 hover:border-blue-500/50 transition-all font-bold uppercase tracking-widest text-sm flex items-center gap-3 shadow-2xl active:scale-95"><ChevronLeft size={20} /> Prev</button>
          <button onClick={(e) => nextSlide(e)} disabled={currentIdx === slides.length - 1} className="px-8 py-4 bg-gray-900/90 backdrop-blur border border-gray-800 rounded-full disabled:opacity-10 hover:border-blue-500/50 transition-all font-bold uppercase tracking-widest text-sm flex items-center gap-3 shadow-2xl active:scale-95">Next <ChevronRight size={20} /></button>
        </div>
        <div className="text-[10px] font-mono text-gray-600 tracking-widest uppercase bg-gray-900/40 px-4 py-2 rounded-full border border-gray-800/50">SLIDE {currentIdx + 1} OF {slides.length}</div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #2a2a30; border-radius: 10px; }
        @keyframes slideInUp { from { opacity: 0; transform: translateY(30px) scale(0.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
        .slide-entry-animation { animation: slideInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </div>
  );
};

export default App;
