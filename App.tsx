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
  Presentation, Upload as UploadIcon, ExternalLink,
  CheckCircle2, AlertCircle, FileDown
} from 'lucide-react';
import { createClient } from '@supabase/supabase-js';
import html2canvas from 'html2canvas';
import pptxgen from 'pptxgenjs';
import { jsPDF } from 'jspdf';

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
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('is_auth_may_2025') === 'true';
  });
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const [globalSettings, setGlobalSettings] = useState<GlobalSettings>({
    brandText: '',
    boxWidth: 90,
    boxHeight: 85,
    boxPadding: 40,
    bgBlur: 3,
    bgType: 'gradient',
    bgGradient: GRADIENT_PRESETS[0].value,
    bodyFontScale: 1.0,
    titleFontScale: 1.0,
    factFontScale: 1.0,
    bgImage: ''
  });

  const [slides, setSlides] = useState<SlideData[]>(INITIAL_SLIDES);
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncSuccess, setSyncSuccess] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [exportType, setExportType] = useState<'PPTX' | 'PDF' | null>(null);
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
    setSyncSuccess(false);
    try {
      await supabase.from('slides_data').delete().gte('id', 0);
      await supabase.from('slides_data').insert(updatedSlides.map((s, idx) => ({ id: idx, data: s })));
      await supabase.from('app_settings').upsert({ id: 1, data: updatedSettings });
      
      setSyncSuccess(true);
      setTimeout(() => setSyncSuccess(false), 3000);
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

  /**
   * Captures the current slide as a high-resolution PNG Data URL.
   * Ensures CORS and scaling are handled for high quality.
   */
  const captureSlide = async () => {
    if (!slideRef.current) return null;
    try {
      const canvas = await html2canvas(slideRef.current, {
        useCORS: true,
        allowTaint: false, // Must be false for toDataURL to work with CORS images
        scale: 2, // 2x scale for 4K-like sharpness in exports
        backgroundColor: '#000000',
        logging: false,
        removeContainer: true,
        scrollX: 0,
        scrollY: 0,
        width: slideRef.current.offsetWidth,
        height: slideRef.current.offsetHeight,
      });
      return canvas.toDataURL('image/png');
    } catch (err) {
      console.error("Capture failed for slide:", err);
      return null;
    }
  };

  const handleDownloadPPTX = async () => {
    if (slides.length === 0) return;
    
    setIsExporting(true);
    setExportType('PPTX');
    setExportProgress(0);
    const pres = new pptxgen();
    pres.layout = 'LAYOUT_16x9';
    const originalIdx = currentIdx;
    
    try {
      for (let i = 0; i < slides.length; i++) {
        setCurrentIdx(i);
        setExportProgress(Math.round(((i + 1) / slides.length) * 100));
        
        // Wait for animations and layout shifts to settle
        await new Promise(resolve => setTimeout(resolve, 1500)); 
        
        const fullDataUrl = await captureSlide();
        if (fullDataUrl) {
          /**
           * PPTXGenJS Fix:
           * The library expects the 'data' property to be the base64 string WITH header
           * but often chokes on the 'data:' prefix. We strip 'data:' to leave 'image/png;base64,...'
           */
          const cleanData = fullDataUrl.replace(/^data:/, '');
          const pptSlide = pres.addSlide();
          pptSlide.addImage({ 
            data: cleanData, 
            x: 0, y: 0, w: '100%', h: '100%'
          });
        }
      }
      await pres.writeFile({ fileName: `Current_Affairs_May_2025.pptx` });
    } catch (err) {
      console.error("PPTX Export failed:", err);
      alert("PPTX Export failed. Check console for details.");
    } finally {
      setCurrentIdx(originalIdx);
      setIsExporting(false);
      setExportType(null);
      setExportProgress(0);
    }
  };

  const handleDownloadPDF = async () => {
    if (slides.length === 0) return;

    setIsExporting(true);
    setExportType('PDF');
    setExportProgress(0);
    const originalIdx = currentIdx;
    
    // jsPDF uses internal pixels, standard 16:9 1080p mapping
    const pdf = new jsPDF('landscape', 'px', [1920, 1080]);

    try {
      for (let i = 0; i < slides.length; i++) {
        setCurrentIdx(i);
        setExportProgress(Math.round(((i + 1) / slides.length) * 100));
        
        await new Promise(resolve => setTimeout(resolve, 1500));

        const imgData = await captureSlide();
        if (imgData) {
          if (i > 0) pdf.addPage([1920, 1080], 'landscape');
          pdf.addImage(imgData, 'PNG', 0, 0, 1920, 1080);
        }
      }
      pdf.save(`Current_Affairs_May_2025.pdf`);
    } catch (err) {
      console.error("PDF Export failed:", err);
      alert("PDF Export failed. Check console for details.");
    } finally {
      setCurrentIdx(originalIdx);
      setIsExporting(false);
      setExportType(null);
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

  const handleLocalImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const base64String = event.target?.result as string;
      updateGlobalField('bgImage', base64String);
      updateGlobalField('bgType', 'image');
    };
    reader.readAsDataURL(file);
  };

  const handleSlideLocalImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const base64String = event.target?.result as string;
      updateSlideField('imageUrl', base64String);
    };
    reader.readAsDataURL(file);
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
    const newH: Highlight = { id: crypto.randomUUID(), target: 'body', lineIndex: 0, startWord: 1, endWord: 5, bgColor: '#ffff00', textColor: '#000000' };
    const updated = [...(activeSlide.highlights || []), newH];
    updateSlideField('highlights', updated);
  };

  const handleUpdateHighlight = (id: string, updates: Partial<Highlight>) => {
    const activeSlide = slides[editingIdx];
    const updated = (activeSlide.highlights || []).map(h => h.id === id ? { ...h, ...updates } : h);
    updateSlideField('highlights', updated);
  };

  // Fixed handleRemoveHighlight callback to correctly reference the highlight object and its id
  const handleRemoveHighlight = (id: string) => {
    const activeSlide = slides[editingIdx];
    const updated = (activeSlide.highlights || []).filter(h => h.id !== id);
    updateSlideField('highlights', updated);
  };

  const slide = useMemo(() => slides[currentIdx] || INITIAL_SLIDES[0], [slides, currentIdx]);

  const theme = useMemo(() => {
    if (!slide) return { box: '', color: '', glow: '' };
    switch (slide.type) {
      case 'title': return { 
        box: 'border-blue-500/50 bg-gray-900/70', 
        color: '#3b82f6',
        glow: '0 20px 60px -15px rgba(59, 130, 246, 0.3)' 
      };
      case 'section': return { 
        box: 'border-emerald-500/50 bg-gray-900/70', 
        color: '#10b981',
        glow: '0 20px 60px -15px rgba(16, 185, 129, 0.3)' 
      };
      case 'question': return { 
        box: 'border-amber-500/50 bg-gray-900/70', 
        color: '#f59e0b',
        glow: '0 20px 60px -15px rgba(245, 158, 11, 0.3)' 
      };
      default: return { 
        box: 'border-gray-800 bg-gray-900/80', 
        color: '#ffffff',
        glow: '0 20px 60px -15px rgba(255, 255, 255, 0.05)' 
      };
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
              <span key={idx} className="inline relative px-1 rounded-sm leading-normal whitespace-pre-wrap" style={{ backgroundColor: h.bgColor, color: h.textColor }}>
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
    const fontScale = type === 'fact' ? (globalSettings.factFontScale || 1.0) : (globalSettings.bodyFontScale || 1.0);

    if (Array.isArray(content)) {
      if (typeof content[0] === 'string' || content.length === 0) {
        const isQuestion = type === 'question';
        return (
          <ul className={`space-y-4 md:space-y-6 lg:space-y-8 ${isQuestion ? 'list-none' : ''} w-full`}>
            {content.map((item: string, i: number) => {
              const isLead = isQuestion && (i === 0 || i === 1);
              const baseSize = isLead ? 'clamp(1.3rem, 3.5vw, 2.2rem)' : 'clamp(0.9rem, 2.2vw, 1.35rem)';
              return (
                <li key={i} className="flex items-start gap-4 leading-relaxed w-full">
                  {!isQuestion && <span className="mt-2.5 w-2 h-2 rounded-full bg-blue-500 shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />}
                  <div className="flex-1">
                    {renderTextWithHighlights(item, 'body', i, hls, `${isLead ? 'font-black text-white' : 'text-gray-300 font-medium'}`, { fontSize: `calc(${baseSize} * ${fontScale})` })}
                  </div>
                </li>
              );
            })}
          </ul>
        );
      } else {
        return (
          <div className="overflow-x-auto border border-gray-800 rounded-2xl bg-gray-900/30 backdrop-blur-sm mt-4 custom-scrollbar shadow-inner w-full">
            <table className="w-full text-left">
              <thead className="bg-gray-800/90 text-gray-100 uppercase tracking-widest text-[10px] md:text-xs font-black sticky top-0 z-10 border-b border-gray-700">
                <tr><th className="p-4 md:p-6">Topic</th><th className="p-4 md:p-6">Details</th></tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {(content as TableRow[]).slice(1).map((row, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="p-4 md:p-6 font-bold text-blue-400 align-top whitespace-nowrap" style={{ fontSize: `calc(1rem * ${fontScale})` }}>{row.col1}</td>
                    <td className="p-4 md:p-6 text-gray-300 leading-relaxed" style={{ fontSize: `calc(1.1rem * ${fontScale})` }}>{row.col2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
    }
    return (
      <div className="text-center font-black text-white px-4 leading-tight w-full">
        {renderTextWithHighlights(String(content), 'body', 0, hls, "", { fontSize: `calc(clamp(1.8rem, 5vw, 3.5rem) * ${fontScale})` })}
      </div>
    );
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center font-sans">
        <div className="max-w-md w-full p-8 md:p-12 bg-[#0f0f12] border border-white/5 rounded-[2.5rem] shadow-2xl">
          <h1 className="text-xl md:text-2xl font-black text-center mb-8 md:mb-10 tracking-widest uppercase">Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-6">
            <input type="email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} className="w-full bg-black/40 border border-white/5 rounded-2xl p-4 text-sm focus:border-blue-500/50 outline-none transition-all" placeholder="Email" required />
            <input type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} className="w-full bg-black/40 border border-white/5 rounded-2xl p-4 text-sm focus:border-blue-500/50 outline-none transition-all" placeholder="Password" required />
            {loginError && <p className="text-red-500 text-xs font-bold">{loginError}</p>}
            <button type="submit" className="w-full bg-blue-600 py-4 rounded-2xl font-black hover:bg-blue-500 transition-all text-sm uppercase tracking-widest shadow-xl shadow-blue-600/20">SIGN IN</button>
          </form>
        </div>
      </div>
    );
  }

  if (isAdmin) {
    const activeSlide = slides[editingIdx] || slides[0];
    return (
      <div className="fixed inset-0 bg-[#0a0a0c] text-white flex flex-col z-[100] font-sans">
        <div className="h-16 border-b border-white/5 flex items-center justify-between px-4 md:px-6 bg-[#0f0f12] shrink-0">
          <h1 className="font-black tracking-widest text-sm md:text-lg flex items-center gap-2 md:gap-3"><Settings className="text-blue-500" size={18} /> EDITOR</h1>
          <div className="flex items-center gap-2 md:gap-4">
             <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 rounded-xl">
               {isSyncing ? <Loader2 size={14} className="animate-spin text-blue-500" /> : syncSuccess ? <CheckCircle2 size={14} className="text-emerald-500" /> : <CloudOff size={14} className="text-gray-500" />}
               <span className="text-[10px] font-black uppercase text-gray-400">{isSyncing ? 'Syncing...' : syncSuccess ? 'Cloud Saved' : 'Not Synced'}</span>
             </div>
             <button onClick={handleDownloadPDF} className="flex items-center gap-2 px-4 py-2 bg-rose-600 hover:bg-rose-500 rounded-xl text-[10px] md:text-sm font-black active:scale-95 transition-all shadow-lg"><FileDown size={14} /> PDF</button>
             <button onClick={handleDownloadPPTX} className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-xl text-[10px] md:text-sm font-black active:scale-95 transition-all shadow-lg"><Presentation size={14} /> PPTX</button>
             <button onClick={() => syncToCloud(slides, globalSettings)} className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-xl text-[10px] md:text-sm font-black active:scale-95 transition-all shadow-lg"><Save size={14} /> SAVE ALL</button>
             <button onClick={() => setIsAdmin(false)} className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-xl text-[10px] md:text-sm font-black transition-all">PREVIEW</button>
             <button onClick={handleLogout} className="p-1 md:p-2 text-gray-500 hover:text-red-500 transition-colors"><LogOut size={20} /></button>
          </div>
        </div>

        <div className="flex-1 flex overflow-hidden">
          <div className="w-20 md:w-72 border-r border-white/5 flex flex-col bg-[#0f0f12] overflow-y-auto no-scrollbar shrink-0">
            <div className="p-2 md:p-4 border-b border-white/5">
              <button onClick={handleAddSlide} className="w-full py-2 bg-blue-600/10 text-blue-400 border border-blue-500/20 rounded-lg text-[10px] md:text-xs font-bold transition-all hover:bg-blue-600/20 flex items-center justify-center gap-1"><Plus size={14} /><span className="hidden md:inline">Add Slide</span></button>
            </div>
            {slides.map((s, i) => (
              <button key={s.id} onClick={() => setEditingIdx(i)} className={`w-full text-left p-2 md:p-4 border-b border-white/5 transition-all relative group ${editingIdx === i ? 'bg-blue-600/10 border-r-4 border-r-blue-500' : 'hover:bg-white/5'}`}>
                <p className="text-[10px] md:text-xs font-bold truncate pr-6">{i+1}. {s.title || 'Untitled'}</p>
                <button onClick={(e) => { e.stopPropagation(); handleDeleteSlide(i); }} title="Delete Slide" className="absolute right-1 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 p-1 text-red-500 hover:bg-red-500/20 rounded transition-all"><Trash2 size={12} /></button>
              </button>
            ))}
          </div>

          <div className="flex-1 overflow-y-auto bg-[#0a0a0c] p-4 md:p-12 custom-scrollbar">
            <div className="max-w-5xl mx-auto space-y-8 md:space-y-12 pb-24">
              <section className="space-y-4">
                <div className="text-indigo-400 font-black uppercase text-[10px] tracking-widest flex items-center gap-2"><Globe size={14} /> GLOBAL SETTINGS</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                  <div className="p-4 md:p-8 bg-[#0f0f12] rounded-[1.5rem] border border-white/5 space-y-6">
                    <h3 className="text-[10px] font-black text-blue-400 uppercase tracking-widest flex items-center gap-2"><Type size={14} /> Global Font Sizes</h3>
                    <div className="space-y-5">
                      <div className="space-y-2">
                        <label className="text-[9px] font-black text-gray-500 uppercase flex justify-between">Title Size <span>{globalSettings.titleFontScale?.toFixed(1)}x</span></label>
                        <input type="range" min="0.5" max="3.0" step="0.1" value={globalSettings.titleFontScale || 1.0} onChange={(e) => updateGlobalField('titleFontScale', parseFloat(e.target.value))} className="w-full accent-blue-500" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-black text-gray-500 uppercase flex justify-between">Fact Text Size <span>{globalSettings.factFontScale?.toFixed(1)}x</span></label>
                        <input type="range" min="0.5" max="3.0" step="0.1" value={globalSettings.factFontScale || 1.0} onChange={(e) => updateGlobalField('factFontScale', parseFloat(e.target.value))} className="w-full accent-emerald-500" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-black text-gray-500 uppercase flex justify-between">Body & Question Size <span>{globalSettings.bodyFontScale?.toFixed(1)}x</span></label>
                        <input type="range" min="0.5" max="3.0" step="0.1" value={globalSettings.bodyFontScale || 1.0} onChange={(e) => updateGlobalField('bodyFontScale', parseFloat(e.target.value))} className="w-full accent-amber-500" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4 md:p-8 bg-[#0f0f12] rounded-[1.5rem] border border-white/5 space-y-6">
                    <h3 className="text-[10px] font-black text-emerald-400 uppercase tracking-widest flex items-center gap-2"><Maximize size={14} /> Box Dimensions</h3>
                    <div className="space-y-5">
                      <div className="space-y-2">
                        <label className="text-[9px] font-black text-gray-500 uppercase flex justify-between">Box Width <span>{globalSettings.boxWidth}%</span></label>
                        <input type="range" min="40" max="100" value={globalSettings.boxWidth} onChange={(e) => updateGlobalField('boxWidth', parseInt(e.target.value))} className="w-full accent-emerald-500" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-black text-gray-500 uppercase flex justify-between">Box Height <span>{globalSettings.boxHeight}%</span></label>
                        <input type="range" min="40" max="100" value={globalSettings.boxHeight} onChange={(e) => updateGlobalField('boxHeight', parseInt(e.target.value))} className="w-full accent-emerald-500" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-black text-gray-500 uppercase flex justify-between">Inner Padding <span>{globalSettings.boxPadding}px</span></label>
                        <input type="range" min="10" max="120" value={globalSettings.boxPadding} onChange={(e) => updateGlobalField('boxPadding', parseInt(e.target.value))} className="w-full accent-emerald-500" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 md:p-8 bg-[#0f0f12] rounded-[1.5rem] border border-white/5 space-y-6">
                   <div className="flex items-center justify-between">
                     <label className="text-[10px] font-black text-gray-500 uppercase flex items-center gap-2"><ImageIcon size={14} /> Background Sources (Global)</label>
                     <div className="flex gap-2">
                        <button onClick={() => updateGlobalField('bgType', 'gradient')} className={`px-4 py-1.5 text-[9px] font-black rounded uppercase transition-all ${globalSettings.bgType === 'gradient' ? 'bg-blue-600 shadow-lg' : 'bg-white/5 hover:bg-white/10'}`}>Gradient</button>
                        <button onClick={() => updateGlobalField('bgType', 'image')} className={`px-4 py-1.5 text-[9px] font-black rounded uppercase transition-all ${globalSettings.bgType === 'image' ? 'bg-blue-600 shadow-lg' : 'bg-white/5 hover:bg-white/10'}`}>Image</button>
                     </div>
                   </div>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="space-y-3">
                        <p className="text-[9px] text-gray-400 font-bold uppercase flex items-center gap-1"><ExternalLink size={10} /> Global A: External URL</p>
                        <input type="text" value={globalSettings.bgImage || ''} onChange={(e) => updateGlobalField('bgImage', e.target.value)} className="w-full bg-black border border-white/5 rounded-xl px-4 py-3 text-[10px] font-mono focus:border-blue-500/30 outline-none" placeholder="https://link-to-your-image.com" />
                     </div>
                     <div className="space-y-3">
                        <p className="text-[9px] text-gray-400 font-bold uppercase flex items-center gap-1"><UploadIcon size={10} /> Global B: Local System Upload</p>
                        <label className="flex items-center justify-center gap-3 w-full bg-indigo-600/10 hover:bg-indigo-600/20 border border-indigo-500/20 rounded-xl px-4 py-3 text-[10px] font-black cursor-pointer transition-all uppercase tracking-widest group">
                          <UploadIcon size={16} className="group-hover:scale-110 transition-transform" /> Browse Global BG
                          <input type="file" accept="image/*" onChange={handleLocalImageUpload} className="hidden" />
                        </label>
                     </div>
                   </div>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/5">
                     <div className="space-y-2">
                       <label className="text-[10px] font-black text-gray-500 uppercase flex justify-between">Background Blur <span>{globalSettings.bgBlur}px</span></label>
                       <input type="range" min="0" max="20" value={globalSettings.bgBlur} onChange={(e) => updateGlobalField('bgBlur', parseInt(e.target.value))} className="w-full accent-red-500" />
                     </div>
                   </div>
                </div>
              </section>

              <section className="space-y-4">
                <div className="text-blue-400 font-black uppercase text-[10px] tracking-widest flex items-center gap-2"><Layout size={14} /> SLIDE CONTENT</div>
                <div className="p-4 md:p-8 bg-[#0f0f12] rounded-[1.5rem] border border-white/5 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-500 uppercase">Category</label>
                      <select value={activeSlide.type} onChange={(e) => updateSlideField('type', e.target.value)} className="w-full bg-black border border-white/5 rounded-xl px-4 py-2 text-xs outline-none">
                        <option value="fact">Fact Slide</option>
                        <option value="question">Question Slide</option>
                        <option value="title">Title Page</option>
                        <option value="section">Section Break</option>
                        <option value="table">Data Table</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-500 uppercase">Layout Choice</label>
                      <select value={activeSlide.layout || 'default'} onChange={(e) => updateSlideField('layout', e.target.value)} className="w-full bg-black border border-white/5 rounded-xl px-4 py-2 text-xs outline-none">
                        <option value="default">Standard Box</option>
                        <option value="cover-page">Cover Page (Sharp Full-Screen)</option>
                        <option value="split-horizontal">Horizontal Split</option>
                        <option value="split-vertical">Vertical Split</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase">Heading</label>
                    <input type="text" value={activeSlide.title || ''} onChange={(e) => updateSlideField('title', e.target.value)} className="w-full bg-black border border-white/5 rounded-xl px-4 py-2 text-sm font-bold focus:border-blue-500/30 outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase">Body Content</label>
                    <textarea value={Array.isArray(activeSlide.content) ? activeSlide.content.join('\n') : activeSlide.content} onChange={(e) => updateSlideField('content', e.target.value.split('\n'))} className="w-full h-48 bg-black border border-white/5 rounded-xl px-4 py-3 text-xs md:text-sm leading-relaxed custom-scrollbar focus:border-blue-500/30 outline-none" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-500 uppercase">Slide Image (URL)</label>
                      <input type="text" value={activeSlide.imageUrl || ''} onChange={(e) => updateSlideField('imageUrl', e.target.value)} className="w-full bg-black border border-white/5 rounded-xl px-4 py-2 text-[10px] font-mono focus:border-blue-500/30 outline-none" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-500 uppercase">Slide Image (Local)</label>
                      <label className="flex items-center justify-center gap-2 w-full bg-emerald-600/10 hover:bg-emerald-600/20 border border-emerald-500/20 rounded-xl px-4 py-2 text-[10px] font-black cursor-pointer transition-all uppercase group">
                        <UploadIcon size={14} /> Upload Image
                        <input type="file" accept="image/*" onChange={handleSlideLocalImageUpload} className="hidden" />
                      </label>
                    </div>
                  </div>
                </div>
              </section>

              <section className="space-y-4 pb-20">
                <div className="flex items-center justify-between">
                  <div className="text-yellow-400 font-black uppercase text-[10px] tracking-widest flex items-center gap-2"><Highlighter size={14} /> TEXT HIGHLIGHTS</div>
                  <button onClick={handleAddHighlight} className="px-4 py-1.5 bg-yellow-600/10 text-yellow-500 border border-yellow-500/20 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-yellow-600/20 transition-all">+ NEW STRIP</button>
                </div>
                <div className="space-y-4">
                  {(activeSlide.highlights || []).map(h => (
                    <div key={h.id} className="p-4 md:p-6 bg-[#0f0f12] border border-white/5 rounded-2xl flex flex-wrap gap-4 items-end shadow-sm">
                      <div className="flex flex-col gap-1"><label className="text-[9px] font-bold text-gray-500 uppercase">Target</label><select value={h.target} onChange={(e) => handleUpdateHighlight(h.id, { target: e.target.value as any })} className="bg-black border border-white/5 rounded-lg px-2 py-1.5 text-[10px] outline-none"><option value="title">Heading</option><option value="body">Body Line</option></select></div>
                      {h.target === 'body' && (<div className="flex flex-col gap-1"><label className="text-[9px] font-bold text-gray-500 uppercase">Line</label><input type="number" value={h.lineIndex} onChange={(e) => handleUpdateHighlight(h.id, { lineIndex: parseInt(e.target.value) })} className="w-12 bg-black border border-white/5 rounded-lg px-2 py-1.5 text-[10px] outline-none" /></div>)}
                      <div className="flex flex-col gap-1"><label className="text-[9px] font-bold text-gray-500 uppercase">Start Word</label><input type="number" min="1" value={h.startWord} onChange={(e) => handleUpdateHighlight(h.id, { startWord: parseInt(e.target.value) })} className="w-14 bg-black border border-white/5 rounded-lg px-2 py-1.5 text-[10px] outline-none" /></div>
                      <div className="flex flex-col gap-1"><label className="text-[9px] font-bold text-gray-500 uppercase">End Word</label><input type="number" min="1" value={h.endWord} onChange={(e) => handleUpdateHighlight(h.id, { endWord: parseInt(e.target.value) })} className="w-14 bg-black border border-white/5 rounded-lg px-2 py-1.5 text-[10px] outline-none" /></div>
                      <div className="flex flex-col gap-1"><label className="text-[9px] font-bold text-gray-500 uppercase">Strip</label><input type="color" value={h.bgColor} onChange={(e) => handleUpdateHighlight(h.id, { bgColor: e.target.value })} className="h-8 w-12 bg-black border border-white/5 rounded p-1 cursor-pointer" /></div>
                      <div className="flex flex-col gap-1"><label className="text-[9px] font-bold text-gray-500 uppercase">Text</label><input type="color" value={h.textColor} onChange={(e) => handleUpdateHighlight(h.id, { textColor: e.target.value })} className="h-8 w-12 bg-black border border-white/5 rounded p-1 cursor-pointer" /></div>
                      <button onClick={() => handleRemoveHighlight(h.id)} className="p-2.5 text-red-500 hover:bg-red-500/10 rounded-xl ml-auto transition-all"><Trash2 size={16} /></button>
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
  const activeBgImage = globalSettings.bgType === 'image' ? globalSettings.bgImage : null;
  const titleFontScale = globalSettings.titleFontScale || 1.0;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-2 md:p-8 overflow-hidden select-none relative font-sans" onClick={() => nextSlide()}>
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: bgGradient }} />
      {activeBgImage && slide.layout !== 'cover-page' && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img src={activeBgImage} crossOrigin="anonymous" className="w-full h-full object-cover opacity-35 transition-all duration-1000" style={{ filter: `blur(${currentBlur}px)` }} />
          <div className="absolute inset-0 bg-black/65" />
        </div>
      )}
      <ProgressBar current={currentIdx + 1} total={slides.length} />
      <div className="fixed top-4 right-4 md:top-8 md:right-10 z-[100] flex items-center gap-2 md:gap-4">
        <button onClick={(e) => { e.stopPropagation(); setIsAdmin(true); }} title="Open Editor" className="p-2 md:p-3 bg-gray-900/90 backdrop-blur-xl border border-white/10 rounded-2xl text-gray-400 hover:text-blue-400 hover:border-blue-500/50 transition-all shadow-2xl active:scale-95"><Settings size={20} /></button>
        <button onClick={(e) => { e.stopPropagation(); toggleFullscreen(); }} title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"} className="p-2 md:p-3 bg-gray-900/90 backdrop-blur-xl border border-white/10 rounded-2xl text-gray-400 hover:text-white transition-all shadow-2xl active:scale-95">{isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}</button>
      </div>
      <div ref={slideRef} className="relative z-10 w-full max-w-[100vw] h-[95vh] md:max-w-[1600px] md:aspect-[16/9] flex items-center justify-center pointer-events-none overflow-hidden">
        <div key={currentIdx} className="w-full h-full flex items-center justify-center slide-entry-animation relative pointer-events-auto">
            {slide.layout === 'cover-page' ? (
              <div className="w-full h-full flex flex-col items-center justify-center p-8 md:p-16 text-center relative overflow-hidden">
                  {slide.imageUrl && (
                    <div className="absolute inset-0 -z-20 scale-up-animation">
                      <img src={slide.imageUrl} crossOrigin="anonymous" className="w-full h-full object-cover opacity-100" style={{ filter: 'blur(0px)' }} />
                    </div>
                  )}
                 {slide.title && (
                    <div className="mb-10 md:mb-16 shrink-0 scale-up-animation relative z-10">
                      <h2 className="font-black tracking-tighter leading-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]" style={{ color: theme.color, fontSize: `calc(clamp(3rem, 10vw, 8rem) * ${titleFontScale})` }}>{renderTextWithHighlights(slide.title, 'title', 0, slide.highlights)}</h2>
                    </div>
                  )}
                  <div className="max-w-4xl relative z-10 drop-shadow-[0_5px_15px_rgba(0,0,0,0.9)]">{renderContent(slide.content, slide.type, slide.highlights)}</div>
              </div>
            ) : slide.layout === 'split-horizontal' ? (
              <div className="flex h-full w-full gap-2 md:gap-6 lg:gap-8 p-3 md:p-8">
                <div className={`rounded-[2.5rem] md:rounded-[3.5rem] border-2 flex flex-col transition-all duration-700 ${theme.box} overflow-hidden`} 
                     style={{ width: `${slide.imageSize || 50}%`, padding: `${globalSettings.boxPadding}px`, boxShadow: theme.glow }}>
                   {slide.title && (
                    <div className="mb-6 md:mb-8 flex items-center gap-4 shrink-0">
                      <div className="w-2.5 h-10 md:h-12 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                      <h2 className="text-xl md:text-3xl lg:text-4xl font-black leading-tight" style={{ color: theme.color, fontSize: `calc(clamp(1.5rem, 4vw, 3rem) * ${titleFontScale})` }}>{renderTextWithHighlights(slide.title, 'title', 0, slide.highlights)}</h2>
                    </div>
                  )}
                  <div className="flex-1 overflow-y-auto custom-scrollbar pr-3 md:pr-6">{renderContent(slide.content, slide.type, slide.highlights)}</div>
                </div>
                <div className={`rounded-[2.5rem] md:rounded-[3.5rem] border-2 overflow-hidden ${theme.box} shadow-2xl`} 
                     style={{ width: `${100 - (slide.imageSize || 50)}%`, boxShadow: theme.glow }}>
                  {slide.imageUrl ? <img src={slide.imageUrl} crossOrigin="anonymous" className="w-full h-full object-cover" /> : <div className="w-full h-full bg-gray-900/40 flex items-center justify-center font-black uppercase text-gray-700 text-xl md:text-4xl tracking-widest">ASSET</div>}
                </div>
              </div>
            ) : slide.layout === 'split-vertical' ? (
               <div className="flex flex-col h-full w-full gap-2 md:gap-6 p-3 md:p-8">
                 <div className={`rounded-[2.5rem] md:rounded-[3.5rem] border-2 overflow-hidden ${theme.box} shadow-2xl`} 
                      style={{ height: `${slide.imageSize || 45}%`, boxShadow: theme.glow }}>
                  {slide.imageUrl ? <img src={slide.imageUrl} crossOrigin="anonymous" className="w-full h-full object-cover" /> : <div className="w-full h-full bg-gray-900/40 flex items-center justify-center font-black uppercase text-gray-700 text-xl md:text-4xl tracking-widest">ASSET</div>}
                 </div>
                <div className={`rounded-[2.5rem] md:rounded-[3.5rem] border-2 flex flex-col transition-all duration-700 ${theme.box} overflow-hidden`} 
                     style={{ height: `${100 - (slide.imageSize || 45)}%`, padding: `${globalSettings.boxPadding}px`, boxShadow: theme.glow }}>
                   {slide.title && (
                    <div className="mb-4 md:mb-6 flex items-center gap-4 shrink-0">
                      <div className="w-2.5 h-8 md:h-10 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.4)]" />
                      <h2 className="text-lg md:text-2xl lg:text-3xl font-black leading-tight" style={{ color: theme.color, fontSize: `calc(clamp(1.2rem, 3vw, 2.5rem) * ${titleFontScale})` }}>{renderTextWithHighlights(slide.title, 'title', 0, slide.highlights)}</h2>
                    </div>
                  )}
                  <div className="flex-1 overflow-y-auto custom-scrollbar pr-3 md:pr-6">{renderContent(slide.content, slide.type, slide.highlights)}</div>
                </div>
              </div>
            ) : (
              <div className={`flex flex-col rounded-[2.5rem] md:rounded-[4.5rem] border-2 transition-all duration-700 relative ${theme.box}`} 
                  style={{ 
                    padding: `${globalSettings.boxPadding}px`, 
                    width: `${globalSettings.boxWidth}%`, 
                    height: `${globalSettings.boxHeight}%`, 
                    maxWidth: '96%', 
                    maxHeight: '94%', 
                    overflow: 'hidden',
                    boxShadow: theme.glow 
                  }}>
                {slide.title && (
                  <div className="mb-6 md:mb-10 flex items-center gap-5 md:gap-7 shrink-0">
                    <div className={`w-2.5 md:w-3 h-10 md:h-16 rounded-full shadow-lg ${slide.type === 'section' ? 'bg-emerald-500 shadow-emerald-500/30' : slide.type === 'question' ? 'bg-amber-500 shadow-amber-500/30' : 'bg-blue-500 shadow-blue-500/30'}`} />
                    <h2 className="font-black tracking-tighter leading-tight" style={{ color: theme.color, fontSize: `calc(clamp(1.8rem, 5vw, 4.5rem) * ${titleFontScale})` }}>{renderTextWithHighlights(slide.title, 'title', 0, slide.highlights)}</h2>
                  </div>
                )}
                <div className="flex-1 flex flex-col justify-start overflow-y-auto custom-scrollbar pr-2 md:pr-8 pb-20 mt-2">{renderContent(slide.content, slide.type, slide.highlights)}</div>
              </div>
            )}
        </div>
      </div>
      <div className="fixed bottom-4 left-4 right-4 md:bottom-10 md:left-10 md:right-10 flex flex-col sm:flex-row justify-between items-center gap-4 z-50 pointer-events-none" onClick={(e) => e.stopPropagation()}>
        <div className="flex gap-3 md:gap-4 pointer-events-auto">
          <button 
            onClick={(e) => prevSlide(e)} 
            disabled={currentIdx === 0} 
            title="Go to Previous Slide"
            className="px-5 py-3 md:px-8 md:py-4 bg-gray-900/90 backdrop-blur-2xl border border-white/10 rounded-full disabled:opacity-20 font-black uppercase tracking-[0.2em] text-[10px] md:text-xs flex items-center gap-2 md:gap-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all active:scale-90 hover:border-blue-500/50 hover:bg-blue-600/10"
          >
            <ChevronLeft size={18} /> PREVIOUS
          </button>
          <button 
            onClick={(e) => nextSlide(e)} 
            disabled={currentIdx === slides.length - 1} 
            title="Go to Next Slide"
            className="px-5 py-3 md:px-8 md:py-4 bg-gray-900/90 backdrop-blur-2xl border border-white/10 rounded-full disabled:opacity-20 font-black uppercase tracking-[0.2em] text-[10px] md:text-xs flex items-center gap-2 md:gap-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all active:scale-90 hover:border-blue-500/50 hover:bg-blue-600/10"
          >
            NEXT <ChevronRight size={18} />
          </button>
        </div>
        <div className="text-[10px] md:text-xs font-mono text-gray-500 font-black tracking-[0.3em] uppercase bg-gray-900/80 backdrop-blur-xl px-6 py-3 rounded-full border border-white/10 shadow-2xl pointer-events-none">SLIDE {currentIdx + 1} / {slides.length}</div>
      </div>
      {isExporting && (
        <div className="fixed inset-0 z-[200] bg-black/98 backdrop-blur-3xl flex flex-col items-center justify-center gap-10 p-8 text-center">
          <div className="relative"><div className="absolute inset-0 rounded-full blur-3xl bg-blue-600/20 animate-pulse" /><Loader2 className="animate-spin text-blue-500 relative z-10" size={120} /><div className="absolute inset-0 flex items-center justify-center font-black text-xl text-white relative z-20">{exportProgress}%</div></div>
          <div className="space-y-4 max-w-xl"><h3 className="text-3xl md:text-5xl font-black uppercase tracking-[0.4em] text-white">Exporting {exportType}</h3><p className="text-gray-400 text-sm md:text-lg font-bold uppercase tracking-widest leading-relaxed opacity-80">Generating high-resolution slide frames.<br/> Please do not close your browser.</p></div>
          <div className="w-full max-w-2xl h-3 bg-white/5 rounded-full overflow-hidden shadow-2xl border border-white/10"><div className="h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 transition-all duration-500 ease-out shadow-[0_0_20px_rgba(59,130,246,0.6)]" style={{ width: `${exportProgress}%` }} /></div>
          <p className="text-xs text-gray-700 font-mono tracking-widest uppercase">Processing Page {currentIdx + 1} of {slides.length}</p>
        </div>
      )}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 10px; height: 10px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.03); border-radius: 20px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.15); border-radius: 20px; border: 3px solid transparent; background-clip: content-box; box-shadow: inset 0 0 10px rgba(0,0,0,0.5); }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.25); border: 3px solid transparent; background-clip: content-box; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        @keyframes slideInUp { from { opacity: 0; transform: translateY(80px) scale(0.94); filter: blur(20px); } to { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); } }
        @keyframes scaleUp { from { transform: scale(0.8); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .slide-entry-animation { animation: slideInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        .scale-up-animation { animation: scaleUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        input[type="range"] { -webkit-appearance: none; background: transparent; }
        input[type="range"]::-webkit-slider-runnable-track { width: 100%; height: 8px; cursor: pointer; background: rgba(255,255,255,0.05); border-radius: 10px; }
        input[type="range"]::-webkit-slider-thumb { height: 24px; width: 24px; border-radius: 50%; background: #3b82f6; cursor: pointer; -webkit-appearance: none; margin-top: -8px; box-shadow: 0 0 20px rgba(59, 130, 246, 0.6); border: 3px solid white; transition: all 0.2s; }
        input[type="range"]::-webkit-slider-thumb:active { transform: scale(1.2); box-shadow: 0 0 30px rgba(59, 130, 246, 0.8); }
      `}</style>
    </div>
  );
};

export default App;