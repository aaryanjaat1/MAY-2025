
import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { SLIDES as INITIAL_SLIDES } from './constants/slidesData';
import { SlideData, TableRow, SlideType, SlideLayout, GlobalSettings, BackgroundType, Highlight } from './types';
import { ProgressBar } from './components/ProgressBar';
import { 
  ChevronLeft, ChevronRight, Maximize2, Minimize2, 
  Settings, Save, Plus, Trash2, Play, Download, 
  Upload, X, RotateCcw, Type, List, HelpCircle, 
  Layout, Copy, FileText, Loader2, Lock, Mail, 
  LogOut, ArrowRight, Columns, Rows, Square, 
  Globe, MoveHorizontal, Maximize, CloudCheck, 
  CloudOff, UploadCloud, Trash, ShieldCheck, Palette,
  Highlighter, Type as TypeIcon, Image as ImageIcon,
  Presentation
} from 'lucide-react';
import { createClient } from '@supabase/supabase-js';
import html2canvas from 'html2canvas';
import pptxgen from 'pptxgenjs';

// Supabase Configuration
const SUPABASE_URL = 'https://tvcwdfgvyhkjcfjljcna.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2Y3dkZmd2eWhramNmamxqY25hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY1ODY1MzMsImV4cCI6MjA4MjE2MjUzM30.8DxeIeYWCW6EfQ7kPWD041mqjNNDlEx9ax8l2MN0pC4';
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const GRADIENT_PRESETS = [
  { name: 'Crystal Blue', value: 'radial-gradient(circle at center, #ffffff 0%, #1e40af 40%, #001f3f 100%)' },
  { name: 'Ocean Aura', value: 'radial-gradient(circle at center, #1e40af 0%, #000000 100%)' },
  { name: 'Soft Focus', value: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.2) 0%, rgba(30, 58, 138, 0.5) 100%)' },
  { name: 'Midnight Blue', value: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)' },
  { name: 'Deep Space', value: 'radial-gradient(circle at center, #111827 0%, #000000 100%)' },
  { name: 'Royal Linear', value: 'linear-gradient(to right, #000000, #1e3a8a, #000000)' },
];

const App: React.FC = () => {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('is_auth_may_2025') === 'true';
  });
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Global Settings State
  const [globalSettings, setGlobalSettings] = useState<GlobalSettings>({
    brandText: 'PRACHI MAM',
    boxWidth: 90,
    boxHeight: 85,
    boxPadding: 40,
    bgBlur: 3,
    bgType: 'gradient',
    bgGradient: GRADIENT_PRESETS[0].value,
    bodyFontScale: 1.0,
    bgImage: ''
  });

  // Presentation & Admin State
  const [slides, setSlides] = useState<SlideData[]>(INITIAL_SLIDES);
  const [isSyncing, setIsSyncing] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [exportProgress, setExportProgress] = useState(0);
  const [syncError, setSyncError] = useState<string | null>(null);

  const [currentIdx, setCurrentIdx] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [editingIdx, setEditingIdx] = useState(0);

  const slideRef = useRef<HTMLDivElement>(null);

  const getErrorMessage = (err: any): string => {
    if (typeof err === 'string') return err;
    return err?.message || err?.error_description || "An unknown error occurred";
  };

  useEffect(() => {
    if (isAuthenticated) {
      const fetchData = async () => {
        setIsSyncing(true);
        try {
          const { data: slidesData } = await supabase.from('slides_data').select('data').order('id', { ascending: true });
          if (slidesData && slidesData.length > 0) setSlides(slidesData.map(item => item.data as SlideData));
          
          const { data: settingsData } = await supabase.from('app_settings').select('data').single();
          if (settingsData) setGlobalSettings(prev => ({ ...prev, ...(settingsData.data as GlobalSettings) }));
        } catch (err) {
          console.error("Supabase fetch error:", err);
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
      await supabase.from('slides_data').delete().gte('id', 0);
      await supabase.from('slides_data').insert(updatedSlides.map((s, idx) => ({ id: idx, data: s })));
      await supabase.from('app_settings').upsert({ id: 1, data: updatedSettings });
    } catch (err: any) {
      setSyncError(`Sync error: ${getErrorMessage(err)}`);
    } finally {
      setIsSyncing(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginError('');
    setTimeout(() => {
      if (loginEmail === 'admin@currentaffairs.com' && loginPassword === 'password2025') {
        setIsAuthenticated(true);
        localStorage.setItem('is_auth_may_2025', 'true');
      } else {
        setLoginError('Invalid credentials.');
      }
      setIsLoggingIn(false);
    }, 800);
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

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleDownloadPPTX = async () => {
    if (!slideRef.current || slides.length === 0) return;
    
    setIsExporting(true);
    setExportProgress(0);
    const pres = new pptxgen();
    const originalIdx = currentIdx;

    try {
      // Small delay to ensure the UI is ready for capture mode
      await new Promise(resolve => setTimeout(resolve, 500));

      for (let i = 0; i < slides.length; i++) {
        setCurrentIdx(i);
        setExportProgress(Math.round(((i + 1) / slides.length) * 100));
        
        // Wait for re-render and entry animation to settle
        await new Promise(resolve => setTimeout(resolve, 800)); 
        
        const canvas = await html2canvas(slideRef.current, {
          useCORS: true,
          scale: 2, // High resolution
          backgroundColor: null,
          logging: false,
        });
        
        const imgData = canvas.toDataURL('image/png');
        const slideObj = pres.addSlide();
        slideObj.addImage({ 
          data: imgData, 
          x: 0, 
          y: 0, 
          w: '100%', 
          h: '100%' 
        });
      }
      
      pres.writeFile({ fileName: `May_2025_Current_Affairs_${new Date().getTime()}.pptx` });
    } catch (err) {
      console.error("Export failed:", err);
      alert("PPTX Export failed. Check console for details.");
    } finally {
      setCurrentIdx(originalIdx);
      setIsExporting(false);
      setExportProgress(0);
    }
  };

  const updateSlideField = (field: keyof SlideData, value: any) => {
    const newSlides = [...slides];
    newSlides[editingIdx] = { ...newSlides[editingIdx], [field]: value };
    setSlides(newSlides);
  };

  const updateGlobalField = (field: keyof GlobalSettings, value: any) => {
    const updatedSettings = { ...globalSettings, [field]: value };
    setGlobalSettings(updatedSettings);
  };

  const handleAddSlide = () => {
    const newSlide: SlideData = { id: Date.now(), type: 'fact', layout: 'default', title: 'New Slide', content: ['Content...'], highlights: [] };
    const newSlides = [...slides];
    newSlides.splice(editingIdx + 1, 0, newSlide);
    setSlides(newSlides);
    setEditingIdx(editingIdx + 1);
  };

  const handleDeleteSlide = (idx: number) => {
    if (slides.length <= 1) return;
    const newSlides = slides.filter((_, i) => i !== idx);
    setSlides(newSlides);
    setEditingIdx(Math.max(0, idx - 1));
  };

  const handleAddHighlight = () => {
    const activeSlide = slides[editingIdx];
    const newH: Highlight = {
      id: crypto.randomUUID(),
      target: 'body',
      lineIndex: 0,
      startWord: 1,
      endWord: 5,
      bgColor: '#ffff00',
      textColor: '#000000'
    };
    const updated = [...(activeSlide.highlights || []), newH];
    updateSlideField('highlights', updated);
  };

  const handleUpdateHighlight = (id: string, updates: Partial<Highlight>) => {
    const activeSlide = slides[editingIdx];
    const updated = (activeSlide.highlights || []).map(h => h.id === id ? { ...h, ...updates } : h);
    updateSlideField('highlights', updated);
  };

  const handleRemoveHighlight = (id: string) => {
    const activeSlide = slides[editingIdx];
    const updated = (activeSlide.highlights || []).filter(h => h.id !== id);
    updateSlideField('highlights', updated);
  };

  const slide = useMemo(() => slides[currentIdx] || INITIAL_SLIDES[0], [slides, currentIdx]);

  const theme = useMemo(() => {
    if (!slide) return { box: '', color: '' };
    switch (slide.type) {
      case 'title': return { box: 'border-blue-500/50 shadow-2xl bg-gray-900/70', color: '#3b82f6' };
      case 'section': return { box: 'border-emerald-500/50 shadow-2xl bg-gray-900/70', color: '#10b981' };
      case 'question': return { box: 'border-amber-500/50 shadow-2xl bg-gray-900/70', color: '#f59e0b' };
      default: return { box: 'border-gray-800 shadow-2xl bg-gray-900/80', color: '#ffffff' };
    }
  }, [slide]);

  const renderTextWithHighlights = (text: string, target: 'title' | 'body', lineIndex: number, slideHighlights?: Highlight[], baseClass: string = "", customStyles: React.CSSProperties = {}) => {
    if (!text) return null;
    const words = text.split(/\s+/);
    const applicableHighlights = (slideHighlights || []).filter(h => h.target === target && (target === 'title' || h.lineIndex === lineIndex));

    return (
      <span className={baseClass} style={customStyles}>
        {words.map((word, idx) => {
          const wNum = idx + 1;
          const h = applicableHighlights.find(hl => wNum >= hl.startWord && wNum <= hl.endWord);
          if (h) {
            return (
              <span key={idx} className="inline relative px-0" style={{ backgroundColor: h.bgColor, color: h.textColor }}>
                {word}{idx < words.length - 1 ? ' ' : ''}
              </span>
            );
          }
          return <React.Fragment key={idx}>{word}{idx < words.length - 1 ? ' ' : ''}</React.Fragment>;
        })}
      </span>
    );
  };

  const renderContent = (content: any, type: SlideType, hls?: Highlight[]) => {
    if (!content) return null;
    const fontScale = globalSettings.bodyFontScale || 1.0;

    if (Array.isArray(content)) {
      if (typeof content[0] === 'string' || content.length === 0) {
        const isQuestion = type === 'question';
        return (
          <ul className={`space-y-4 md:space-y-6 ${isQuestion ? 'list-none' : ''}`}>
            {content.map((item: string, i: number) => {
              const isLead = isQuestion && (i === 0 || i === 1);
              const fSize = isLead ? `calc(2.2rem * ${fontScale})` : `calc(1.4rem * ${fontScale})`;
              return (
                <li key={i} className="flex items-start gap-3 leading-relaxed">
                  {!isQuestion && <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />}
                  {renderTextWithHighlights(item, 'body', i, hls, `${isLead ? 'font-bold text-white' : 'text-gray-300'}`, { fontSize: fSize })}
                </li>
              );
            })}
          </ul>
        );
      } else {
        return (
          <div className="overflow-x-auto border border-gray-800 rounded-xl bg-gray-900/20 backdrop-blur-sm mt-4">
            <table className="w-full text-left">
              <thead className="bg-gray-800/80 text-gray-100 uppercase tracking-wider text-xs font-bold">
                <tr>
                  <th className="p-4 md:p-6 border-b border-gray-700">Topic</th>
                  <th className="p-4 md:p-6 border-b border-gray-700">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {(content as TableRow[]).slice(1).map((row, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="p-4 md:p-6 font-bold text-blue-400 align-top" style={{ fontSize: `calc(1rem * ${fontScale})` }}>{row.col1}</td>
                    <td className="p-4 md:p-6 text-gray-300 leading-relaxed" style={{ fontSize: `calc(1rem * ${fontScale})` }}>{row.col2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
    }
    return (
      <div className="text-center font-bold text-white">
        {renderTextWithHighlights(String(content), 'body', 0, hls, "", { fontSize: `calc(2.5rem * ${fontScale})` })}
      </div>
    );
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center font-sans">
        <div className="max-w-md w-full p-12 bg-[#0f0f12] border border-white/5 rounded-[2.5rem] shadow-2xl">
          <h1 className="text-2xl font-black text-center mb-10 tracking-widest uppercase">Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-6">
            <input type="email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} className="w-full bg-black/40 border border-white/5 rounded-2xl p-4" placeholder="Email" required />
            <input type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} className="w-full bg-black/40 border border-white/5 rounded-2xl p-4" placeholder="Password" required />
            {loginError && <p className="text-red-500 text-xs font-bold">{loginError}</p>}
            <button type="submit" className="w-full bg-blue-600 py-4 rounded-2xl font-black hover:bg-blue-500 transition-all">SIGN IN</button>
          </form>
        </div>
      </div>
    );
  }

  if (isAdmin) {
    const activeSlide = slides[editingIdx] || slides[0];
    return (
      <div className="fixed inset-0 bg-[#0a0a0c] text-white flex flex-col z-[100] font-sans">
        <div className="h-16 border-b border-white/5 flex items-center justify-between px-6 bg-[#0f0f12]">
          <h1 className="font-black tracking-widest text-lg flex items-center gap-3"><Settings className="text-blue-500" /> PRESENTATION EDITOR</h1>
          <div className="flex items-center gap-4">
             <button onClick={handleDownloadPPTX} className="flex items-center gap-2 px-5 py-2 bg-purple-600 rounded-xl text-sm font-black active:scale-95 transition-all"><Presentation size={16} /> DOWNLOAD PPTX</button>
             <button onClick={() => syncToCloud(slides, globalSettings)} className="flex items-center gap-2 px-5 py-2 bg-blue-600 rounded-xl text-sm font-black active:scale-95 transition-all"><Save size={16} /> SYNC TO CLOUD</button>
             <button onClick={() => setIsAdmin(false)} className="px-5 py-2 bg-gray-800 rounded-xl text-sm font-black">PREVIEW MODE</button>
             <button onClick={handleLogout} className="p-2 text-gray-500 hover:text-red-500"><LogOut size={22} /></button>
          </div>
        </div>

        <div className="flex-1 flex overflow-hidden">
          <div className="w-72 border-r border-white/5 flex flex-col bg-[#0f0f12] overflow-y-auto no-scrollbar">
            <div className="p-4 border-b border-white/5">
              <button onClick={handleAddSlide} className="w-full py-2 bg-blue-600/10 text-blue-400 border border-blue-500/20 rounded-lg text-xs font-bold transition-all hover:bg-blue-600/20">+ Add Slide</button>
            </div>
            {slides.map((s, i) => (
              <button key={s.id} onClick={() => setEditingIdx(i)} className={`w-full text-left p-4 border-b border-white/5 transition-all relative group ${editingIdx === i ? 'bg-blue-600/10 border-r-4 border-r-blue-500' : 'hover:bg-white/5'}`}>
                <p className="text-xs font-bold truncate pr-8">{s.title || 'Untitled Slide'}</p>
                <button onClick={(e) => { e.stopPropagation(); handleDeleteSlide(i); }} className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 p-1 text-red-500 hover:bg-red-500/20 rounded transition-all"><Trash2 size={12} /></button>
              </button>
            ))}
          </div>

          <div className="flex-1 overflow-y-auto bg-[#0a0a0c] p-12 custom-scrollbar">
            <div className="max-w-5xl mx-auto space-y-12 pb-24">
              
              <section className="space-y-4">
                <div className="text-indigo-400 font-black uppercase text-[10px] tracking-widest flex items-center gap-2"><Globe size={14} /> Global Customization</div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 bg-[#0f0f12] rounded-[2rem] border border-white/5">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-gray-500 uppercase">Body Font Scale ({globalSettings.bodyFontScale?.toFixed(1)}x)</label>
                    <div className="flex items-center gap-4">
                      <TypeIcon size={16} className="text-gray-600" />
                      <input type="range" min="0.5" max="3.0" step="0.1" value={globalSettings.bodyFontScale || 1.0} onChange={(e) => updateGlobalField('bodyFontScale', parseFloat(e.target.value))} className="w-full accent-blue-500" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-gray-500 uppercase">Box Width ({globalSettings.boxWidth}%)</label>
                    <input type="range" min="40" max="100" value={globalSettings.boxWidth} onChange={(e) => updateGlobalField('boxWidth', parseInt(e.target.value))} className="w-full accent-emerald-500" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-gray-500 uppercase">Box Height ({globalSettings.boxHeight}%)</label>
                    <input type="range" min="40" max="100" value={globalSettings.boxHeight} onChange={(e) => updateGlobalField('boxHeight', parseInt(e.target.value))} className="w-full accent-amber-500" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-gray-500 uppercase">Internal Padding ({globalSettings.boxPadding}px)</label>
                    <input type="range" min="10" max="120" value={globalSettings.boxPadding} onChange={(e) => updateGlobalField('boxPadding', parseInt(e.target.value))} className="w-full accent-purple-500" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-gray-500 uppercase">Background Blur ({globalSettings.bgBlur}px)</label>
                    <input type="range" min="0" max="10" value={globalSettings.bgBlur} onChange={(e) => updateGlobalField('bgBlur', parseInt(e.target.value))} className="w-full accent-red-500" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-gray-500 uppercase">Brand Text</label>
                    <input type="text" value={globalSettings.brandText || ''} onChange={(e) => updateGlobalField('brandText', e.target.value)} className="w-full bg-black border border-white/5 rounded-xl px-4 py-2 text-xs" />
                  </div>
                </div>

                <div className="p-8 bg-[#0f0f12] rounded-[2rem] border border-white/5 space-y-6">
                  <div className="flex items-center justify-between">
                    <label className="text-[10px] font-black text-gray-500 uppercase">Background Presets</label>
                    <div className="flex bg-black p-1 rounded-lg border border-white/5">
                      <button onClick={() => updateGlobalField('bgType', 'gradient')} className={`px-4 py-1 text-[10px] font-black rounded-md ${globalSettings.bgType === 'gradient' ? 'bg-blue-600 text-white' : 'text-gray-500'}`}>Gradient</button>
                      <button onClick={() => updateGlobalField('bgType', 'image')} className={`px-4 py-1 text-[10px] font-black rounded-md ${globalSettings.bgType === 'image' ? 'bg-blue-600 text-white' : 'text-gray-500'}`}>Image</button>
                    </div>
                  </div>
                  {globalSettings.bgType === 'gradient' ? (
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
                      {GRADIENT_PRESETS.map((grad, i) => (
                        <button key={i} onClick={() => updateGlobalField('bgGradient', grad.value)} className={`h-16 rounded-xl border-2 transition-all ${globalSettings.bgGradient === grad.value ? 'border-blue-500 scale-105' : 'border-transparent hover:border-white/10'}`} style={{ background: grad.value }} />
                      ))}
                    </div>
                  ) : (
                    <div className="flex items-center gap-4">
                       <ImageIcon size={18} className="text-gray-500" />
                       <input type="text" value={globalSettings.bgImage || ''} onChange={(e) => updateGlobalField('bgImage', e.target.value)} className="flex-1 bg-black border border-white/5 rounded-xl px-4 py-3 text-xs font-mono" placeholder="Paste image URL for global background..." />
                    </div>
                  )}
                </div>
              </section>

              <section className="space-y-4">
                <div className="text-blue-400 font-black uppercase text-[10px] tracking-widest flex items-center gap-2"><Layout size={14} /> Slide Content</div>
                <div className="p-8 bg-[#0f0f12] rounded-[2rem] border border-white/5 space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-500 uppercase">Slide Layout</label>
                      <select value={activeSlide.layout || 'default'} onChange={(e) => updateSlideField('layout', e.target.value)} className="w-full bg-black border border-white/5 rounded-xl px-4 py-3 text-sm">
                        <option value="default">Standard Box</option>
                        <option value="split-horizontal">Horizontal Split (Left/Right)</option>
                        <option value="split-vertical">Vertical Split (Top/Bottom)</option>
                      </select>
                    </div>
                    {(activeSlide.layout === 'split-horizontal' || activeSlide.layout === 'split-vertical') && (
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-gray-500 uppercase">Split Ratio ({activeSlide.imageSize || 50}%)</label>
                        <input type="range" min="20" max="80" value={activeSlide.imageSize || 50} onChange={(e) => updateSlideField('imageSize', parseInt(e.target.value))} className="w-full accent-blue-500" />
                      </div>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase">Slide Heading</label>
                    <input type="text" value={activeSlide.title || ''} onChange={(e) => updateSlideField('title', e.target.value)} className="w-full bg-black border border-white/5 rounded-xl px-4 py-3 font-bold" placeholder="Slide Title" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase">Slide Body (One point per line)</label>
                    <textarea value={Array.isArray(activeSlide.content) ? activeSlide.content.join('\n') : activeSlide.content} onChange={(e) => updateSlideField('content', e.target.value.split('\n'))} className="w-full h-48 bg-black border border-white/5 rounded-xl px-4 py-3 text-sm leading-relaxed" placeholder="Content (One per line)" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase">Slide Local Image (Split or Background)</label>
                    <input type="text" value={activeSlide.imageUrl || ''} onChange={(e) => updateSlideField('imageUrl', e.target.value)} className="w-full bg-black border border-white/5 rounded-xl px-4 py-3 text-xs font-mono" placeholder="Image URL..." />
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-yellow-400 font-black uppercase text-[10px] tracking-widest flex items-center gap-2"><Highlighter size={14} /> Highlight Manager (Marker Strips)</div>
                  <button onClick={handleAddHighlight} className="px-3 py-1 bg-yellow-600/10 text-yellow-500 border border-yellow-500/20 rounded-lg text-[9px] font-black uppercase">+ Add Highlight</button>
                </div>
                <div className="space-y-4">
                  {(activeSlide.highlights || []).map(h => (
                    <div key={h.id} className="p-6 bg-[#0f0f12] border border-white/5 rounded-2xl flex flex-wrap gap-6 items-end">
                      <div className="flex flex-col gap-2">
                        <label className="text-[9px] font-bold text-gray-500 uppercase">Target</label>
                        <select value={h.target} onChange={(e) => handleUpdateHighlight(h.id, { target: e.target.value as any })} className="bg-black border border-white/5 rounded-lg px-2 py-1 text-xs">
                          <option value="title">Title</option>
                          <option value="body">Body</option>
                        </select>
                      </div>
                      {h.target === 'body' && (
                        <div className="flex flex-col gap-2">
                          <label className="text-[9px] font-bold text-gray-500 uppercase">Line Index</label>
                          <input type="number" value={h.lineIndex} onChange={(e) => handleUpdateHighlight(h.id, { lineIndex: parseInt(e.target.value) })} className="w-16 bg-black border border-white/5 rounded-lg px-2 py-1 text-xs" />
                        </div>
                      )}
                      <div className="flex flex-col gap-2">
                        <label className="text-[9px] font-bold text-gray-500 uppercase">Words: From</label>
                        <input type="number" min="1" value={h.startWord} onChange={(e) => handleUpdateHighlight(h.id, { startWord: parseInt(e.target.value) })} className="w-16 bg-black border border-white/5 rounded-lg px-2 py-1 text-xs" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[9px] font-bold text-gray-500 uppercase">Words: To</label>
                        <input type="number" min="1" value={h.endWord} onChange={(e) => handleUpdateHighlight(h.id, { endWord: parseInt(e.target.value) })} className="w-16 bg-black border border-white/5 rounded-lg px-2 py-1 text-xs" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[9px] font-bold text-gray-500 uppercase">Strip Color</label>
                        <input type="color" value={h.bgColor} onChange={(e) => handleUpdateHighlight(h.id, { bgColor: e.target.value })} className="h-8 w-12 bg-black border border-white/5 rounded p-0.5 cursor-pointer" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[9px] font-bold text-gray-500 uppercase">Text Color</label>
                        <input type="color" value={h.textColor} onChange={(e) => handleUpdateHighlight(h.id, { textColor: e.target.value })} className="h-8 w-12 bg-black border border-white/5 rounded p-0.5 cursor-pointer" />
                      </div>
                      <button onClick={() => handleRemoveHighlight(h.id)} className="p-2 text-red-500 hover:bg-red-500/10 rounded-lg ml-auto"><Trash2 size={16} /></button>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const bgGradient = globalSettings.bgGradient || GRADIENT_PRESETS[0].value;
  const currentBlur = globalSettings.bgBlur ?? 3;
  const globalBgImage = globalSettings.bgType === 'image' ? globalSettings.bgImage : null;
  const activeBgImage = slide.imageUrl || globalBgImage;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden select-none relative" onClick={() => nextSlide()}>
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: bgGradient }} />
      {activeBgImage && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img src={activeBgImage} className="w-full h-full object-cover opacity-30" style={{ filter: `blur(${currentBlur}px)` }} />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )}

      <ProgressBar current={currentIdx + 1} total={slides.length} />
      
      <div className="fixed top-8 right-10 z-[100] flex items-center gap-3">
        <button onClick={(e) => { e.stopPropagation(); setIsAdmin(true); }} className="p-2.5 bg-gray-900/90 backdrop-blur border border-white/5 rounded-xl text-gray-400 hover:text-blue-400 transition-all"><Settings size={18} /></button>
        <button onClick={(e) => { e.stopPropagation(); toggleFullscreen(); }} className="p-2.5 bg-gray-900/90 backdrop-blur border border-white/5 rounded-xl text-gray-400 hover:text-white transition-all"><Maximize2 size={18} /></button>
      </div>

      <div ref={slideRef} className="relative z-10 w-full max-w-[95vw] h-[88vh] md:max-w-7xl md:aspect-[16/9] flex items-center justify-center">
        <div key={currentIdx} className="w-full h-full flex items-center justify-center slide-entry-animation relative">
            
            {slide.layout === 'split-horizontal' ? (
              <div className="flex h-full w-full gap-4 p-4">
                <div className={`rounded-[2.5rem] border-2 flex flex-col transition-all duration-700 ${theme.box}`} style={{ width: `${slide.imageSize || 50}%`, padding: `${globalSettings.boxPadding}px` }}>
                   {slide.title && (
                    <div className="mb-6 flex items-center gap-4">
                      <div className="w-1.5 h-8 rounded-full bg-blue-500" />
                      <h2 className="text-2xl font-black" style={{ color: theme.color }}>{renderTextWithHighlights(slide.title, 'title', 0, slide.highlights)}</h2>
                    </div>
                  )}
                  <div className="flex-1 overflow-y-auto no-scrollbar">{renderContent(slide.content, slide.type, slide.highlights)}</div>
                </div>
                <div className={`rounded-[2.5rem] border-2 overflow-hidden ${theme.box}`} style={{ width: `${100 - (slide.imageSize || 50)}%` }}>
                  {slide.imageUrl ? <img src={slide.imageUrl} className="w-full h-full object-cover" /> : <div className="w-full h-full bg-gray-900/40 flex items-center justify-center font-black uppercase text-gray-700 text-3xl">Asset</div>}
                </div>
              </div>
            ) : slide.layout === 'split-vertical' ? (
               <div className="flex flex-col h-full w-full gap-4 p-4">
                 <div className={`rounded-[2.5rem] border-2 overflow-hidden ${theme.box}`} style={{ height: `${slide.imageSize || 50}%` }}>
                  {slide.imageUrl ? <img src={slide.imageUrl} className="w-full h-full object-cover" /> : <div className="w-full h-full bg-gray-900/40 flex items-center justify-center font-black uppercase text-gray-700 text-3xl">Asset</div>}
                </div>
                <div className={`rounded-[2.5rem] border-2 flex flex-col transition-all duration-700 ${theme.box}`} style={{ height: `${100 - (slide.imageSize || 50)}%`, padding: `${globalSettings.boxPadding}px` }}>
                   {slide.title && (
                    <div className="mb-4 flex items-center gap-4">
                      <div className="w-1.5 h-6 rounded-full bg-blue-500" />
                      <h2 className="text-xl font-black" style={{ color: theme.color }}>{renderTextWithHighlights(slide.title, 'title', 0, slide.highlights)}</h2>
                    </div>
                  )}
                  <div className="flex-1 overflow-y-auto no-scrollbar">{renderContent(slide.content, slide.type, slide.highlights)}</div>
                </div>
              </div>
            ) : (
              <div className={`flex flex-col rounded-[3rem] border-2 transition-all duration-700 relative ${theme.box}`} 
                  style={{ padding: `${globalSettings.boxPadding}px`, width: `${globalSettings.boxWidth}%`, height: `${globalSettings.boxHeight}%` }}>
                {slide.title && (
                  <div className="mb-10 flex items-center gap-5">
                    <div className={`w-2 h-10 rounded-full ${slide.type === 'section' ? 'bg-emerald-500' : slide.type === 'question' ? 'bg-amber-500' : 'bg-blue-500'}`} />
                    <h2 className="text-3xl md:text-4xl font-black tracking-tight" style={{ color: theme.color }}>
                      {renderTextWithHighlights(slide.title, 'title', 0, slide.highlights)}
                    </h2>
                  </div>
                )}
                <div className="flex-1 flex flex-col justify-center overflow-y-auto no-scrollbar">
                  {renderContent(slide.content, slide.type, slide.highlights)}
                </div>
                <div className="absolute bottom-8 right-10">
                  <span className="text-xs md:text-sm font-black tracking-[0.4em] uppercase opacity-40" style={{ color: theme.color }}>{globalSettings.brandText}</span>
                </div>
              </div>
            )}
        </div>
      </div>

      <div className="fixed bottom-10 left-10 right-10 flex justify-between items-center z-50" onClick={(e) => e.stopPropagation()}>
        <div className="flex gap-4">
          <button onClick={(e) => prevSlide(e)} disabled={currentIdx === 0} className="px-8 py-4 bg-gray-900/90 border border-white/5 rounded-full disabled:opacity-10 font-bold uppercase tracking-widest text-sm flex items-center gap-3 shadow-2xl active:scale-95"><ChevronLeft size={20} /> Prev</button>
          <button onClick={(e) => nextSlide(e)} disabled={currentIdx === slides.length - 1} className="px-8 py-4 bg-gray-900/90 border border-white/5 rounded-full disabled:opacity-10 font-bold uppercase tracking-widest text-sm flex items-center gap-3 shadow-2xl active:scale-95">Next <ChevronRight size={20} /></button>
        </div>
        <div className="text-[10px] font-mono text-gray-600 tracking-widest uppercase bg-gray-900/40 px-4 py-2 rounded-full border border-white/5">SLIDE {currentIdx + 1} OF {slides.length}</div>
      </div>

      {isExporting && (
        <div className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-xl flex flex-col items-center justify-center gap-8">
          <div className="relative">
            <Loader2 className="animate-spin text-purple-500" size={64} />
            <div className="absolute inset-0 flex items-center justify-center font-black text-xs text-white">
              {exportProgress}%
            </div>
          </div>
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-black uppercase tracking-[0.2em]">Generating PPTX</h3>
            <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">Capturing slide {currentIdx + 1} of {slides.length}</p>
          </div>
          <div className="w-64 h-1.5 bg-white/10 rounded-full overflow-hidden">
             <div className="h-full bg-purple-500 transition-all duration-300" style={{ width: `${exportProgress}%` }} />
          </div>
        </div>
      )}

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
