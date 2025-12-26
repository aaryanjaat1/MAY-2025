
import React, { useState, useEffect, useRef } from 'react';
import { SlideData, Project, GlobalSettings } from './types';
import { 
  ChevronLeft, ChevronRight, Settings, Save, Trash2, 
  Loader2, CheckCircle2, PlusCircle, RefreshCw, Check, Layers, 
  Maximize, Minimize, Sliders, Highlighter, Plus, X, Menu, MoveUp, AlertTriangle
} from 'lucide-react';
import { createClient } from '@supabase/supabase-js';
import html2canvas from 'html2canvas';
import pptxgen from 'pptxgenjs';
import { jsPDF } from 'jspdf';
import { SLIDES as INITIAL_DATA } from './constants/slidesData';

const SUPABASE_URL = 'https://tvcwdfgvyhkjcfjljcna.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2Y3dkZmd2eWhramNmamxqY25hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY1ODY1MzMsImV4cCI6MjA4MjE2MjUzM30.8DxeIeYWCW6EfQ7kPWD041mqjNNDlEx9ax8l2MN0pC4';
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const App: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const [slides, setSlides] = useState<SlideData[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isAdmin, setIsAdmin] = useState(false);
  const [editingIdx, setEditingIdx] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [adminTab, setAdminTab] = useState<'slides' | 'settings'>('slides');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [focusedBoxIdx, setFocusedBoxIdx] = useState<number | null>(null);

  const [settings, setSettings] = useState<GlobalSettings>({
    titleFontScale: 1.1,
    bodyFontScale: 1.1,
    factFontScale: 1.1,
    boxPadding: 40,
    defaultContentScale: 1,
    defaultContentYOffset: 0,
  });

  const [isSyncing, setIsSyncing] = useState(false);
  const [syncSuccess, setSyncSuccess] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [exportType, setExportType] = useState<'PPTX' | 'PDF' | null>(null);
  const [exportProgress, setExportProgress] = useState(0);

  const slideRef = useRef<HTMLDivElement>(null);
  const boxRefs = useRef<(HTMLTextAreaElement | null)[]>([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    if (activeProjectId) {
      fetchProjectData(activeProjectId);
    } else {
      setSlides(INITIAL_DATA);
    }
  }, [activeProjectId]);

  const fetchProjects = async () => {
    try {
      const { data } = await supabase.from('projects').select('*').order('created_at', { ascending: false });
      if (data && data.length > 0) {
        setProjects(data);
        if (!activeProjectId) setActiveProjectId(data[0].id);
      } else {
        setSlides(INITIAL_DATA);
        setProjects([]);
      }
    } catch (e) {
      setSlides(INITIAL_DATA);
    }
  };

  const fetchProjectData = async (projectId: string) => {
    setIsSyncing(true);
    try {
      const { data: project } = await supabase.from('projects').select('settings').eq('id', projectId).single();
      if (project?.settings) {
        setSettings(prev => ({ ...prev, ...project.settings }));
      }

      const { data: slidesData } = await supabase.from('slides').select('data').eq('project_id', projectId).order('slide_index', { ascending: true });
      if (slidesData && slidesData.length > 0) {
        setSlides(slidesData.map(d => d.data as SlideData));
      } else {
        setSlides(INITIAL_DATA);
      }
      setCurrentIdx(0);
      setEditingIdx(0);
    } catch (err) {
      setSlides(INITIAL_DATA);
    } finally {
      setIsSyncing(false);
    }
  };

  const handleCreateMasterProject = async (customName?: string) => {
    const name = customName || prompt("Enter project name:");
    if (!name) return;
    setIsSyncing(true);
    try {
      const initialSettings = { titleFontScale: 1.1, bodyFontScale: 1.1, factFontScale: 1.1, boxPadding: 40, defaultContentScale: 1, defaultContentYOffset: 0 };
      const { data: newProject } = await supabase.from('projects').insert({ name, settings: initialSettings }).select().single();
      if (!newProject) throw new Error("Creation Failed");
      const rows = INITIAL_DATA.map((s, i) => ({ project_id: newProject.id, slide_index: i, data: s }));
      await supabase.from('slides').insert(rows);
      setProjects(prev => [newProject, ...prev]);
      setActiveProjectId(newProject.id);
    } catch (err) {
      alert("❌ Error creating project.");
    } finally {
      setIsSyncing(false);
    }
  };

  const syncToCloud = async () => {
    if (!activeProjectId) return;
    setIsSyncing(true);
    setSyncSuccess(false);
    try {
      await supabase.from('projects').update({ settings: settings }).eq('id', activeProjectId);
      await supabase.from('slides').delete().eq('project_id', activeProjectId);
      const rows = slides.map((s, i) => ({ project_id: activeProjectId, slide_index: i, data: s }));
      await supabase.from('slides').insert(rows);
      setSyncSuccess(true);
      setTimeout(() => setSyncSuccess(false), 3000);
      fetchProjects();
    } catch (err) { 
      alert("Failed to sync.");
    } finally { setIsSyncing(false); }
  };

  const toggleReveal = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const newSlides = [...slides];
    const current = newSlides[currentIdx];
    if (current && current.type === 'quiz') {
      current.isRevealed = !current.isRevealed;
      setSlides(newSlides);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const applyHighlightToBox = (idx: number) => {
    const textarea = boxRefs.current[idx];
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    if (start === end) return;
    const text = textarea.value;
    const newText = `${text.substring(0, start)}[h]${text.substring(start, end)}[/h]${text.substring(end)}`;
    const s = [...slides];
    const c = Array.isArray(s[editingIdx].content) ? [...s[editingIdx].content as string[]] : [s[editingIdx].content as string];
    c[idx] = newText;
    s[editingIdx].content = c;
    setSlides(s);
  };

  const renderHighlightedText = (text: string) => {
    if (!text) return text;
    const parts = text.split(/(\[h\].*?\[\/h\])/g);
    return parts.map((part, i) => {
      if (part.startsWith('[h]') && part.endsWith('[/h]')) {
        return <span key={i} className="bg-[#f0ff00] text-black px-1.5 py-0.5 rounded-sm mx-0.5 shadow-sm inline-block">{part.slice(3, -4)}</span>;
      }
      return part;
    });
  };

  const splitTranslation = (text: string) => {
    const lastOpenBrace = text.lastIndexOf('(');
    const lastCloseBrace = text.lastIndexOf(')');
    
    if (lastOpenBrace !== -1 && lastCloseBrace === text.length - 1) {
      const main = text.substring(0, lastOpenBrace).trim();
      const translation = text.substring(lastOpenBrace + 1, lastCloseBrace).trim();
      return { main, translation };
    }
    return { main: text, translation: null };
  };

  const getScaledSize = (base: number, scale: number = 1) => {
    const desktopSize = base * scale;
    const mobileSize = Math.max(desktopSize * 0.45, 12);
    const vwFactor = (desktopSize / 1920) * 100;
    return `clamp(${mobileSize}px, ${vwFactor}vw, ${desktopSize}px)`;
  };

  const slide = slides[currentIdx];
  const GLOW_SHADOW = "shadow-[0_0_40px_rgba(0,0,0,0.6)]";

  if (isAdmin) {
    const activeSlide = slides[editingIdx];
    const contentList = Array.isArray(activeSlide?.content) ? activeSlide.content : [activeSlide?.content as string];
    return (
      <div className="fixed inset-0 bg-black text-white flex flex-col md:flex-row z-[100] font-sans overflow-hidden">
        <div className={`${isSidebarOpen ? 'w-full md:w-80' : 'w-0'} border-b md:border-b-0 md:border-r border-white/5 flex flex-col bg-[#050505] transition-all duration-300 overflow-hidden relative`}>
          <div className="p-4 border-b border-white/5 bg-[#0a0a0d] flex items-center justify-between min-w-[320px]">
            <h2 className="text-[10px] font-black text-gray-500 uppercase tracking-widest flex items-center gap-2"><Layers size={14}/> CMS</h2>
            <div className="flex items-center gap-2">
              <button onClick={() => handleCreateMasterProject()} className="text-blue-500"><PlusCircle size={18}/></button>
              <button onClick={() => setIsSidebarOpen(false)} className="md:hidden text-gray-500"><X size={18}/></button>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto custom-scrollbar min-w-[320px]">
            <div className="flex border-b border-white/5">
              <button onClick={() => setAdminTab('slides')} className={`flex-1 p-3 text-[10px] font-black uppercase ${adminTab === 'slides' ? 'bg-blue-600/10 text-blue-400' : 'text-gray-500'}`}>Slides</button>
              <button onClick={() => setAdminTab('settings')} className={`flex-1 p-3 text-[10px] font-black uppercase ${adminTab === 'settings' ? 'bg-blue-600/10 text-blue-400' : 'text-gray-500'}`}>Settings</button>
            </div>
            {adminTab === 'slides' ? (
              <div className="p-2 space-y-1">
                {slides.map((s, i) => (
                  <div key={s.id} onClick={() => setEditingIdx(i)} className={`p-3 rounded-lg cursor-pointer transition-all ${editingIdx === i ? 'bg-blue-600/10 border-l-2 border-blue-500' : 'hover:bg-white/5'}`}>
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-mono text-gray-600">{(i+1).toString().padStart(2, '0')}</span>
                      <span className="flex-1 text-[11px] font-bold text-gray-300 truncate">{s.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-4 space-y-6">
                 <h3 className="text-[10px] font-black text-blue-500 uppercase flex items-center gap-2"><Sliders size={12}/> Scaling</h3>
                  {[
                    { label: 'Title', key: 'titleFontScale' },
                    { label: 'Body', key: 'bodyFontScale' },
                    { label: 'Fact', key: 'factFontScale' }
                  ].map(item => (
                    <div key={item.key} className="space-y-1">
                      <label className="text-[9px] font-bold text-gray-500 uppercase">{item.label}</label>
                      <input type="range" min="0.5" max="2.5" step="0.05" value={(settings as any)[item.key]} onChange={e => setSettings(prev => ({...prev, [item.key]: parseFloat(e.target.value)}))} className="w-full accent-blue-600 h-1.5" />
                    </div>
                  ))}
              </div>
            )}
          </div>
          <div className="p-4 border-t border-white/5 bg-[#0a0a0d] space-y-2 min-w-[320px]">
            <button onClick={syncToCloud} className="w-full py-3 bg-blue-600 rounded-lg text-[10px] font-black flex items-center justify-center gap-2">
              {isSyncing ? <RefreshCw className="animate-spin" size={12}/> : <Save size={12}/>}
              {syncSuccess ? 'CLOUD SYNCED' : 'SAVE TO CLOUD'}
            </button>
            <button onClick={() => setIsAdmin(false)} className="w-full py-3 bg-gray-800 rounded-lg text-[10px] font-black uppercase">Close Admin</button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-4 md:p-10 bg-black custom-scrollbar">
          <button onClick={() => setIsSidebarOpen(true)} className={`${isSidebarOpen ? 'hidden' : 'block'} mb-4 p-2 bg-gray-900 rounded-lg`}><Menu size={20}/></button>
          {activeSlide && (
            <div className="max-w-5xl mx-auto space-y-8 pb-32 animate-in fade-in duration-500">
               <div className="bg-[#0a0a0a] border border-blue-500/20 rounded-2xl p-6 grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[9px] font-bold text-gray-500 uppercase">Scale: {(activeSlide.contentScale || 1).toFixed(2)}x</label>
                    <input type="range" min="0.5" max="1.5" step="0.05" value={activeSlide.contentScale || 1} onChange={e => { const s = [...slides]; s[editingIdx].contentScale = parseFloat(e.target.value); setSlides(s); }} className="w-full accent-blue-600 h-1" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-bold text-gray-500 uppercase">Y Offset: {activeSlide.contentYOffset || 0}px</label>
                    <input type="range" min="-300" max="300" step="10" value={activeSlide.contentYOffset || 0} onChange={e => { const s = [...slides]; s[editingIdx].contentYOffset = parseInt(e.target.value); setSlides(s); }} className="w-full accent-blue-600 h-1" />
                  </div>
               </div>
               <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <input type="text" value={activeSlide.title || ''} placeholder="English Title" onChange={e => { const s = [...slides]; s[editingIdx].title = e.target.value; setSlides(s); }} className="w-full bg-[#0a0a0a] border border-white/10 p-4 rounded-xl text-sm font-bold" />
                    <input type="text" value={activeSlide.subtitle || ''} placeholder="Hindi Title" onChange={e => { const s = [...slides]; s[editingIdx].subtitle = e.target.value; setSlides(s); }} className="w-full bg-[#0a0a0a] border border-white/10 p-4 rounded-xl text-sm font-bold" />
                  </div>
                  <div className="space-y-4">
                    {contentList.map((box, bIdx) => (
                      <div key={bIdx} className="bg-[#0a0a0a] border border-white/10 p-4 rounded-xl relative group">
                        <textarea ref={el => boxRefs.current[bIdx] = el} value={box} onFocus={() => setFocusedBoxIdx(bIdx)} onChange={e => { const s = [...slides]; const c = Array.isArray(s[editingIdx].content) ? [...s[editingIdx].content as string[]] : [s[editingIdx].content as string]; c[bIdx] = e.target.value; s[editingIdx].content = c; setSlides(s); }} className="w-full h-24 bg-transparent border-none p-0 text-xs font-bold focus:ring-0 outline-none resize-none custom-scrollbar" />
                        <button onClick={() => applyHighlightToBox(bIdx)} className="absolute top-2 right-2 p-1.5 bg-blue-600/20 text-blue-400 rounded opacity-0 group-hover:opacity-100 transition-all"><Highlighter size={14}/></button>
                      </div>
                    ))}
                  </div>
               </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden font-sans relative select-none">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_#0b1a33_0%,_#000000_100%)] opacity-85" />
      <div className="fixed top-4 right-4 z-[100] flex gap-3">
        <button onClick={() => setIsAdmin(true)} className="p-3 bg-gray-900/40 backdrop-blur-xl rounded-xl border border-white/10 text-gray-400 hover:text-blue-400 transition-all"><Settings size={18} /></button>
        <button onClick={toggleFullscreen} className="p-3 bg-gray-900/40 backdrop-blur-xl rounded-xl border border-white/10 text-gray-400 hover:text-green-400 transition-all">{isFullscreen ? <Minimize size={18}/> : <Maximize size={18}/>}</button>
      </div>
      
      <div ref={slideRef} className="relative z-10 w-full h-full md:max-w-[1920px] md:aspect-[16/9] bg-[#00040d] overflow-hidden flex flex-col shadow-2xl">
        {slide ? (
          <div key={currentIdx} className="w-full h-full flex flex-col pt-32 md:pt-40 pb-96 md:pb-[400px] px-6 md:px-16 relative overflow-y-auto custom-scrollbar scroll-smooth">
            {/* Header */}
            <div className={`absolute top-4 md:top-8 left-4 md:left-8 right-4 md:right-8 min-h-[70px] md:h-28 bg-[#0d1c3a]/60 backdrop-blur-3xl flex items-center px-6 md:px-12 border border-white/10 z-20 rounded-2xl ${GLOW_SHADOW}`}>
              <div className="w-1.5 md:w-2.5 h-10 md:h-16 bg-[#ea580c] mr-4 md:mr-8 rounded-full shadow-[0_0_25px_rgba(234,88,12,0.8)] shrink-0" />
              <div className="animate-in slide-in-from-left duration-700 w-full overflow-hidden">
                <h1 className="font-black text-white uppercase truncate tracking-tight leading-none" style={{ fontSize: getScaledSize(28, settings.titleFontScale) }}>{slide.title}</h1>
                <p className="text-[14px] md:text-xl font-bold text-gray-300 opacity-90 truncate mt-1">{slide.subtitle}</p>
              </div>
            </div>

            {/* Scalable Content */}
            <div className="flex-1 flex flex-col items-center transition-all duration-700 w-full" style={{ transform: `scale(${slide.contentScale || 1}) translateY(${slide.contentYOffset || 0}px)`, transformOrigin: 'top center' }}>
              {slide.type === 'quiz' && (
                <div className="flex-1 flex flex-col items-center justify-start pt-8 space-y-8 md:space-y-12 animate-in slide-in-from-bottom duration-1000 w-full">
                  <div className={`w-full max-w-full border border-white/10 rounded-[2rem] md:rounded-[4rem] text-center shadow-2xl bg-[#0d1c3a]/40 backdrop-blur-2xl ${GLOW_SHADOW}`} style={{ padding: `${settings.boxPadding}px` }}>
                    <h3 className="font-black leading-tight text-white break-words" style={{ fontSize: getScaledSize(30, settings.bodyFontScale) }}>{Array.isArray(slide.content) ? renderHighlightedText(slide.content[0]) : renderHighlightedText(slide.content as string)}</h3>
                    {Array.isArray(slide.content) && slide.content[1] && <p className="text-gray-400 font-bold opacity-70 mt-8 break-words" style={{ fontSize: getScaledSize(20, settings.bodyFontScale) }}>{renderHighlightedText(slide.content[1])}</p>}
                  </div>
                  <div className="w-full max-w-full flex flex-col gap-4 md:gap-6">
                    {slide.options?.map((opt) => {
                      const isCorrect = slide.correctOptionId === opt.id && slide.isRevealed;
                      return (
                        <div key={opt.id} className={`p-5 md:p-7 rounded-2xl border transition-all duration-700 flex items-center gap-6 md:gap-12 shadow-xl ${isCorrect ? `bg-[#2563eb]/70 border-yellow-400/70 shadow-[0_0_60px_rgba(250,204,21,0.3)] scale-[1.01]` : 'bg-[#1e40af]/15 border-white/5 hover:bg-[#1e40af]/25'}`}>
                          <div className={`text-lg md:text-2xl font-black w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-xl shrink-0 ${isCorrect ? 'text-yellow-400 bg-black/50' : 'text-gray-500 bg-white/5'}`}>{opt.label}</div>
                          <span className={`font-black flex-1 break-words leading-tight ${isCorrect ? 'text-yellow-400' : 'text-gray-200'}`} style={{ fontSize: getScaledSize(24, settings.bodyFontScale) }}>{renderHighlightedText(opt.text)}</span>
                          {isCorrect && <Check size={28} className="text-yellow-400 animate-in zoom-in shrink-0"/>}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
              
              {slide.type === 'fact' && (
                <div className="flex-1 flex flex-col lg:flex-row gap-8 items-center justify-center animate-in slide-in-from-right duration-1000 w-full pt-12">
                  <div className="flex-1 w-full space-y-6">
                    {Array.isArray(slide.content) && (slide.content as string[]).map((line, lIdx) => {
                      const { main, translation } = splitTranslation(line);
                      return (
                        <div key={lIdx} className={`bg-[#1e40af]/20 border-l-[12px] border-[#ea580c] p-6 md:p-10 rounded-2xl border border-white/10 shadow-2xl transition-all hover:bg-[#1e40af]/30 flex flex-col ${GLOW_SHADOW}`}>
                          <div className="overflow-hidden">
                            <p className="font-black text-white leading-snug break-words" style={{ fontSize: getScaledSize(24, settings.factFontScale) }}>
                              {renderHighlightedText(main)}
                            </p>
                            {translation && (
                              <p className="font-bold text-gray-400 mt-5 opacity-80 leading-relaxed break-words" style={{ fontSize: getScaledSize(18, settings.factFontScale) }}>
                                {renderHighlightedText(translation)}
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  {slide.imageUrl && (
                    <div className="w-full lg:w-[45%] flex items-center justify-center p-4">
                      <img src={slide.imageUrl} className="max-w-full rounded-[2.5rem] shadow-2xl border border-white/10 object-cover aspect-video lg:aspect-auto" />
                    </div>
                  )}
                </div>
              )}
              
              {slide.type === 'title' && (
                <div className="flex-1 flex flex-col items-center justify-center text-center space-y-8 md:space-y-16 animate-in zoom-in duration-1000 w-full">
                  <div className={`bg-[#ea580c] px-10 py-4 rounded-full text-sm md:text-2xl font-black uppercase tracking-widest shadow-2xl border border-white/30 ${GLOW_SHADOW}`}>Current Affairs</div>
                  <h1 className="font-black text-white px-6 leading-tight break-words" style={{ fontSize: getScaledSize(72, settings.titleFontScale) }}>{renderHighlightedText(slide.title || '')}</h1>
                  <div className="space-y-6 px-6">
                    {Array.isArray(slide.content) && (slide.content as string[]).map((c, i) => (
                      <p key={i} className="font-black text-blue-500 uppercase tracking-[0.2em] shadow-sm break-words" style={{ fontSize: getScaledSize(34, settings.bodyFontScale) }}>{renderHighlightedText(c)}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full space-y-6">
            <Loader2 size={50} className="animate-spin text-blue-600"/>
            <p className="font-black uppercase tracking-widest text-gray-700 text-xs">Synchronizing Presentation...</p>
          </div>
        )}
      </div>

      {/* Persistent Nav Bar */}
      <div className="fixed bottom-6 md:bottom-12 left-0 right-0 z-50 pointer-events-none px-6 flex flex-col items-center">
        <div className="w-full max-w-[1920px] relative flex items-center justify-center">
          <div className="flex gap-4 md:gap-10 pointer-events-auto bg-black/70 backdrop-blur-3xl p-2 rounded-full border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.9)]">
            <button onClick={() => setCurrentIdx(p => Math.max(0, p - 1))} className="px-10 md:px-20 py-4 md:py-6 bg-gray-900/90 border border-white/10 rounded-full font-black text-xs md:text-lg hover:bg-blue-600 hover:text-white transition-all disabled:opacity-20 flex items-center gap-3 uppercase" disabled={currentIdx === 0}><ChevronLeft size={24}/> Prev</button>
            <button onClick={() => setCurrentIdx(p => Math.min(slides.length - 1, p + 1))} className="px-10 md:px-20 py-4 md:py-6 bg-gray-900/90 border border-white/10 rounded-full font-black text-xs md:text-lg hover:bg-blue-600 hover:text-white transition-all disabled:opacity-20 flex items-center gap-3 uppercase" disabled={currentIdx === slides.length - 1}>Next <ChevronRight size={24}/></button>
          </div>
          {slide?.type === 'quiz' && (
            <div className="absolute right-0 md:right-8 top-0 bottom-0 flex items-center pointer-events-auto">
              <button onClick={toggleReveal} className={`p-5 md:p-8 bg-yellow-400 text-black rounded-full shadow-[0_0_50px_rgba(250,204,21,0.6)] hover:scale-110 active:scale-95 transition-all animate-bounce-subtle`}><CheckCircle2 size={36}/></button>
            </div>
          )}
        </div>
      </div>

      {isExporting && (
        <div className="fixed inset-0 z-[300] bg-black/99 backdrop-blur-3xl flex flex-col items-center justify-center gap-10 p-12">
           <Loader2 className="animate-spin text-blue-500" size={70}/>
           <div className="text-center space-y-3"><h2 className="text-2xl md:text-5xl font-black uppercase text-white tracking-tighter">Exporting {exportType}</h2><p className="text-gray-500 font-bold text-lg animate-pulse">Processing Frame {currentIdx + 1} of {slides.length}</p></div>
           <div className="w-full max-w-xl h-3 bg-white/5 rounded-full overflow-hidden"><div className="h-full bg-blue-600 transition-all duration-300" style={{ width: `${exportProgress}%` }} /></div>
        </div>
      )}
      
      <style>{`
        @keyframes bounce-subtle { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        .animate-bounce-subtle { animation: bounce-subtle 2.5s infinite ease-in-out; }
        
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(234, 88, 12, 0.4) transparent;
        }
        
        .custom-scrollbar::-webkit-scrollbar { 
          width: 8px; 
        }
        
        .custom-scrollbar::-webkit-scrollbar-track { 
          background: transparent; 
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb { 
          background: rgba(234, 88, 12, 0.3); 
          border-radius: 10px;
          border: 2px solid transparent;
          background-clip: content-box;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(234, 88, 12, 0.5);
          background-clip: content-box;
        }

        .scroll-smooth {
          scroll-behavior: smooth;
        }

        * { overflow-wrap: anywhere; }
      `}</style>
    </div>
  );
};

export default App;
