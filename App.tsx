
import React, { useState, useEffect, useRef } from 'react';
import { SlideData, Project, GlobalSettings } from './types';
import { 
  ChevronLeft, ChevronRight, Settings, Save, Trash2, 
  Loader2, FileDown, Presentation, Target, CheckCircle2,
  PlusCircle, RefreshCw, Check, Layers, FolderOpen, Upload,
  Maximize, Minimize, Sliders, Highlighter, Plus, X, Menu, MoveUp, Sparkles, AlertTriangle
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
  // Fix: Added missing state variable for focusedBoxIdx used in the admin panel
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
      if (!customName) alert("✅ Project created successfully!");
    } catch (err) {
      alert("❌ Error creating project.");
    } finally {
      setIsSyncing(false);
    }
  };

  const handleHardWipeReset = async () => {
    if (!activeProjectId) return;
    if (!confirm("🚨 Reset project to master content?")) return;
    
    setIsSyncing(true);
    try {
      await supabase.from('slides').delete().eq('project_id', activeProjectId);
      const rows = INITIAL_DATA.map((s, i) => ({ project_id: activeProjectId, slide_index: i, data: s }));
      await supabase.from('slides').insert(rows);
      
      setSlides(INITIAL_DATA);
      setCurrentIdx(0);
      setEditingIdx(0);
      setSyncSuccess(true);
      setTimeout(() => setSyncSuccess(false), 3000);
      alert("✅ Reset successful.");
    } catch (err) {
      alert("❌ Reset failed.");
    } finally {
      setIsSyncing(false);
    }
  };

  const handleDeleteProject = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!confirm("Are you sure?")) return;
    await supabase.from('projects').delete().eq('id', id);
    await supabase.from('slides').delete().eq('project_id', id);
    const updated = projects.filter(p => p.id !== id);
    setProjects(updated);
    if (activeProjectId === id) {
      const nextId = updated.length > 0 ? updated[0].id : null;
      setActiveProjectId(nextId);
      if (!nextId) setSlides(INITIAL_DATA);
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

  const slide = slides[currentIdx];
  const GLOW_SHADOW = "shadow-[0_0_30px_rgba(255,255,255,0.08)]";
  
  const getScaledSize = (base: number, scale: number = 1) => {
    const desktopSize = base * scale;
    const mobileSize = Math.max(desktopSize * 0.5, 12);
    const vwFactor = (desktopSize / 1920) * 100;
    return `clamp(${mobileSize}px, ${vwFactor}vw, ${desktopSize}px)`;
  };

  if (isAdmin) {
    const activeSlide = slides[editingIdx];
    const contentList = Array.isArray(activeSlide?.content) ? activeSlide.content : [activeSlide?.content as string];
    return (
      <div className="fixed inset-0 bg-black text-white flex flex-col md:flex-row z-[100] font-sans overflow-hidden">
        <div className={`${isSidebarOpen ? 'w-full md:w-80' : 'w-0'} border-b md:border-b-0 md:border-r border-white/5 flex flex-col bg-[#050505] transition-all duration-300 overflow-hidden relative`}>
          <div className="p-4 border-b border-white/5 bg-[#0a0a0d] flex items-center justify-between min-w-[320px]">
            <h2 className="text-[10px] font-black text-gray-500 uppercase tracking-widest flex items-center gap-2"><Layers size={14}/> Projects</h2>
            <div className="flex items-center gap-2">
              <button onClick={() => handleCreateMasterProject()} title="New Project" className="text-blue-500 hover:scale-110"><PlusCircle size={18}/></button>
              <button onClick={() => setIsSidebarOpen(false)} className="md:hidden text-gray-500"><X size={18}/></button>
            </div>
          </div>
          <div className="h-40 overflow-y-auto custom-scrollbar p-2 bg-black/30 border-b border-white/5 min-w-[320px]">
            {projects.length > 0 ? projects.map(p => (
              <div key={p.id} onClick={() => setActiveProjectId(p.id)} className={`group p-3 rounded-lg cursor-pointer transition-all flex items-center justify-between ${activeProjectId === p.id ? 'bg-blue-600/10 border-l-2 border-blue-500' : 'hover:bg-white/5'}`}>
                <span className="flex-1 text-[11px] font-bold text-gray-300 truncate">{p.name}</span>
                <button onClick={(e) => handleDeleteProject(p.id, e)} className="opacity-0 group-hover:opacity-100 p-1 text-red-500 hover:bg-red-500/10 rounded"><Trash2 size={12}/></button>
              </div>
            )) : (
              <div className="p-4 text-center text-gray-600 text-[9px] font-bold uppercase italic">No projects found</div>
            )}
          </div>
          <div className="flex border-b border-white/5 min-w-[320px]">
            <button onClick={() => setAdminTab('slides')} className={`flex-1 p-3 text-[10px] font-black uppercase ${adminTab === 'slides' ? 'bg-blue-600/10 text-blue-400 border-b-2 border-blue-500' : 'text-gray-500'}`}>Slides</button>
            <button onClick={() => setAdminTab('settings')} className={`flex-1 p-3 text-[10px] font-black uppercase ${adminTab === 'settings' ? 'bg-blue-600/10 text-blue-400 border-b-2 border-blue-500' : 'text-gray-500'}`}>Settings</button>
          </div>
          <div className="flex-1 overflow-y-auto custom-scrollbar min-w-[320px]">
            {adminTab === 'slides' ? (
              <div className="p-2 space-y-1">
                <button onClick={handleHardWipeReset} className="w-full mb-3 p-3 bg-red-600/10 border border-red-500/20 rounded-lg text-[10px] font-black text-red-400 flex flex-col items-center gap-1 hover:bg-red-600/20 transition-all">
                  <div className="flex items-center gap-2 uppercase tracking-tighter"><AlertTriangle size={14}/> Emergency Reset</div>
                </button>
                {slides.map((s, i) => (
                  <div key={s.id} onClick={() => setEditingIdx(i)} className={`p-3 rounded-lg cursor-pointer transition-all ${editingIdx === i ? 'bg-blue-600/10 border-l-2 border-blue-500' : 'hover:bg-white/5'}`}>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-gray-600">{(i+1).toString().padStart(2, '0')}</span>
                      <span className="flex-1 text-[11px] font-bold text-gray-300 truncate">{s.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-4 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-[10px] font-black text-blue-500 uppercase flex items-center gap-2"><Sliders size={12}/> Global Font Scaling</h3>
                  {[
                    { label: 'Title Font', key: 'titleFontScale' },
                    { label: 'Body/Quiz Font', key: 'bodyFontScale' },
                    { label: 'Fact Font', key: 'factFontScale' }
                  ].map(item => (
                    <div key={item.key} className="space-y-1">
                      <label className="text-[9px] font-bold text-gray-500 uppercase">{item.label}</label>
                      <input 
                        type="range" 
                        min="0.5" 
                        max="2.5" 
                        step="0.05" 
                        value={(settings as any)[item.key] || 1} 
                        onChange={e => setSettings(prev => ({...prev, [item.key]: parseFloat(e.target.value)}))} 
                        className="w-full accent-blue-600 h-1.5" 
                      />
                    </div>
                  ))}
                  <div className="space-y-1">
                    <label className="text-[9px] font-bold text-gray-500 uppercase">Box Padding</label>
                    <input 
                      type="range" 
                      min="16" 
                      max="160" 
                      step="4" 
                      value={settings.boxPadding || 40} 
                      onChange={e => setSettings(prev => ({...prev, boxPadding: parseInt(e.target.value)}))} 
                      className="w-full accent-blue-600 h-1.5" 
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="p-4 border-t border-white/5 bg-[#0a0a0d] space-y-2 min-w-[320px]">
            <button onClick={syncToCloud} className="w-full py-3 bg-blue-600 rounded-lg text-[10px] font-black flex items-center justify-center gap-2">
              {isSyncing ? <RefreshCw className="animate-spin" size={12}/> : <Save size={12}/>}
              {syncSuccess ? 'SAVED' : 'SAVE TO CLOUD'}
            </button>
            <button onClick={() => setIsAdmin(false)} className="w-full py-3 bg-gray-800 rounded-lg text-[10px] font-black">PREVIEW</button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-4 md:p-10 bg-black custom-scrollbar">
          <button onClick={() => setIsSidebarOpen(true)} className={`${isSidebarOpen ? 'hidden' : 'block'} mb-4 p-2 bg-gray-900 rounded-lg`}><Menu size={20}/></button>
          {activeSlide && adminTab === 'slides' && (
            <div className="max-w-5xl mx-auto space-y-8 pb-32">
              <div className="bg-[#0a0a0a] border border-blue-500/20 rounded-2xl p-6 space-y-4">
                 <h3 className="text-[10px] font-black text-blue-500 uppercase tracking-widest flex items-center gap-2"><MoveUp size={14}/> Layout Tuning</h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[9px] font-bold text-gray-500 uppercase">Scale: {(activeSlide.contentScale || 1).toFixed(2)}x</label>
                      <input type="range" min="0.5" max="1.5" step="0.05" value={activeSlide.contentScale || 1} onChange={e => { const s = [...slides]; s[editingIdx].contentScale = parseFloat(e.target.value); setSlides(s); }} className="w-full accent-blue-600 h-1" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] font-bold text-gray-500 uppercase">Y Offset: {activeSlide.contentYOffset || 0}px</label>
                      <input type="range" min="-300" max="300" step="10" value={activeSlide.contentYOffset || 0} onChange={e => { const s = [...slides]; s[editingIdx].contentYOffset = parseInt(e.target.value); setSlides(s); }} className="w-full accent-blue-600 h-1" />
                    </div>
                 </div>
              </div>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="space-y-1">
                    <label className="text-[9px] font-black uppercase text-gray-500">English Title</label>
                    <input type="text" value={activeSlide.title || ''} onChange={e => { const s = [...slides]; s[editingIdx].title = e.target.value; setSlides(s); }} className="w-full bg-[#0a0a0a] border border-white/10 p-3 rounded-xl text-xs" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] font-black uppercase text-gray-500">Hindi Title</label>
                    <input type="text" value={activeSlide.subtitle || ''} onChange={e => { const s = [...slides]; s[editingIdx].subtitle = e.target.value; setSlides(s); }} className="w-full bg-[#0a0a0a] border border-white/10 p-3 rounded-xl text-xs" />
                  </div>
                  {activeSlide.type === 'quiz' && (
                    <div className="space-y-3 pt-4 border-t border-white/5">
                      <h3 className="text-[9px] font-black text-blue-500 uppercase">Options</h3>
                      {activeSlide.options?.map((opt, oIdx) => (
                        <div key={opt.id} className="flex gap-2 items-center">
                          <span className="w-8 h-8 flex items-center justify-center font-black text-gray-600 text-[10px] border border-white/5 rounded-lg">{opt.label}</span>
                          <input type="text" value={opt.text} onChange={e => { const s = [...slides]; s[editingIdx].options![oIdx].text = e.target.value; setSlides(s); }} className="flex-1 bg-[#0a0a0a] border border-white/10 p-2 rounded-xl text-[11px]" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="space-y-6">
                  {activeSlide.type === 'fact' ? (
                    <div className="space-y-4">
                      <label className="text-[9px] font-black text-gray-500 uppercase">Content Boxes</label>
                      {contentList.map((box, bIdx) => (
                        <div key={bIdx} className="bg-[#0a0a0a] border border-white/5 p-4 rounded-xl relative">
                          <textarea ref={el => boxRefs.current[bIdx] = el} value={box} onFocus={() => setFocusedBoxIdx(bIdx)} onChange={e => { const s = [...slides]; const c = Array.isArray(s[editingIdx].content) ? [...s[editingIdx].content as string[]] : [s[editingIdx].content as string]; c[bIdx] = e.target.value; s[editingIdx].content = c; setSlides(s); }} className="w-full h-24 bg-transparent border-none p-0 text-xs font-bold focus:ring-0 outline-none resize-none" />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-1">
                      <label className="text-[9px] font-black text-gray-500 uppercase">Content Lines</label>
                      <textarea value={Array.isArray(activeSlide.content) ? (activeSlide.content as string[]).join('\n') : (activeSlide.content as string)} onChange={e => { const s = [...slides]; s[editingIdx].content = e.target.value.split('\n'); setSlides(s); }} className="w-full h-48 bg-[#0a0a0a] border border-white/10 p-3 rounded-xl text-xs outline-none" />
                    </div>
                  )}
                  <div className="space-y-1">
                    <label className="text-[9px] font-black text-gray-500 uppercase">Asset Image URL</label>
                    <input type="text" value={activeSlide.imageUrl || ''} onChange={e => { const s = [...slides]; s[editingIdx].imageUrl = e.target.value; setSlides(s); }} className="w-full bg-[#0a0a0a] border border-white/10 p-3 rounded-xl text-[10px]" />
                  </div>
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
      <div className="fixed top-4 right-4 md:top-6 md:right-8 z-[100] flex gap-3">
        <button onClick={() => setIsAdmin(true)} className="p-2.5 bg-gray-900/30 backdrop-blur-xl rounded-xl border border-white/10 text-gray-500 hover:text-blue-400 transition-all"><Settings size={18} /></button>
        <button onClick={toggleFullscreen} className="p-2.5 bg-gray-900/30 backdrop-blur-xl rounded-xl border border-white/10 text-gray-500 hover:text-green-400 transition-all">{isFullscreen ? <Minimize size={18}/> : <Maximize size={18}/>}</button>
      </div>
      
      <div ref={slideRef} className="relative z-10 w-full h-full md:max-w-[1920px] md:aspect-[16/9] bg-[#00040d] overflow-hidden flex flex-col">
        {slide ? (
          <div key={currentIdx} className="w-full h-full flex flex-col pt-24 md:pt-32 pb-72 md:pb-96 px-4 md:px-12 relative overflow-y-auto custom-scrollbar">
            {/* Header UI */}
            <div className={`absolute top-2 md:top-5 left-2 md:left-5 right-2 md:right-5 min-h-[64px] md:h-24 bg-gradient-to-r from-[#1e3a8a]/60 via-[#1e3a8a]/30 to-transparent backdrop-blur-3xl flex items-center px-4 md:px-10 border border-white/10 z-20 rounded-xl ${GLOW_SHADOW}`}>
              <div className="w-1 md:w-2 h-8 md:h-14 bg-[#ea580c] mr-3 md:mr-6 rounded-full shadow-[0_0_20px_rgba(234,88,12,0.6)] shrink-0" />
              <div className="animate-in slide-in-from-left duration-700 truncate">
                <h1 className="font-black text-white uppercase truncate tracking-tight" style={{ fontSize: getScaledSize(26, settings.titleFontScale) }}>{slide.title}</h1>
                <p className="text-[12px] md:text-lg font-bold text-gray-300 opacity-90 truncate">{slide.subtitle}</p>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 flex flex-col items-center transition-transform duration-500 w-full" style={{ transform: `scale(${slide.contentScale || 1}) translateY(${slide.contentYOffset || 0}px)`, transformOrigin: 'top center' }}>
              {slide.type === 'quiz' && (
                <div className="flex-1 flex flex-col items-center justify-start pt-6 space-y-6 md:space-y-10 animate-in slide-in-from-bottom duration-700 w-full">
                  <div className={`w-full max-w-full border border-white/10 rounded-[1.5rem] md:rounded-[3rem] text-center shadow-2xl bg-[#0d1c3a]/50 backdrop-blur-2xl mt-4 md:mt-12 ${GLOW_SHADOW}`} style={{ padding: `${settings.boxPadding}px` }}>
                    <h3 className="font-black leading-snug text-white" style={{ fontSize: getScaledSize(28, settings.bodyFontScale) }}>{Array.isArray(slide.content) ? renderHighlightedText(slide.content[0]) : renderHighlightedText(slide.content as string)}</h3>
                    {Array.isArray(slide.content) && slide.content[1] && <p className="text-gray-400 font-bold opacity-70 mt-6" style={{ fontSize: getScaledSize(18, settings.bodyFontScale) }}>{renderHighlightedText(slide.content[1])}</p>}
                  </div>
                  <div className="w-full max-w-full flex flex-col gap-3 md:gap-5">
                    {slide.options?.map((opt) => {
                      const isCorrect = slide.correctOptionId === opt.id && slide.isRevealed;
                      return (
                        <div key={opt.id} className={`p-3.5 md:p-5 rounded-2xl border transition-all duration-700 flex items-center gap-5 md:gap-10 shadow-xl ${isCorrect ? `bg-[#2563eb]/60 border-yellow-400/60 shadow-[0_0_50px_rgba(250,204,21,0.3)] scale-[1.02]` : 'bg-[#1e40af]/20 border-white/5 hover:bg-[#1e40af]/30'}`}>
                          <div className={`text-base md:text-2xl font-black w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-xl ${isCorrect ? 'text-yellow-400 bg-black/40 shadow-inner' : 'text-gray-500 bg-white/5'}`}>{opt.label}</div>
                          <span className={`font-black flex-1 ${isCorrect ? 'text-yellow-400' : 'text-gray-200'}`} style={{ fontSize: getScaledSize(22, settings.bodyFontScale) }}>{renderHighlightedText(opt.text)}</span>
                          {isCorrect && <Check size={24} className="text-yellow-400 animate-in zoom-in"/>}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
              
              {slide.type === 'fact' && (
                <div className="flex-1 flex flex-col lg:flex-row gap-6 items-center justify-center animate-in slide-in-from-right duration-700 w-full pt-12">
                  <div className="flex-1 w-full space-y-5">
                    {Array.isArray(slide.content) && (slide.content as string[]).map((line, lIdx) => (
                      <div key={lIdx} className={`bg-[#1e40af]/30 border-l-[6px] md:border-l-[12px] border-[#ea580c] p-4 md:p-7 rounded-r-2xl border border-white/10 shadow-2xl transition-all ${GLOW_SHADOW}`}>
                        <p className="font-black text-gray-100" style={{ fontSize: getScaledSize(22, settings.factFontScale) }}>{renderHighlightedText(line)}</p>
                      </div>
                    ))}
                  </div>
                  {slide.imageUrl && (
                    <div className="w-full lg:w-[45%] flex items-center justify-center p-3">
                      <img src={slide.imageUrl} className="max-w-full rounded-[2rem] shadow-2xl border border-white/10 object-cover" />
                    </div>
                  )}
                </div>
              )}
              
              {slide.type === 'title' && (
                <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6 md:space-y-12 animate-in zoom-in duration-1000 w-full">
                  <div className={`bg-[#ea580c] px-8 py-3 rounded-full text-xs md:text-xl font-black uppercase tracking-widest shadow-2xl border border-white/30 ${GLOW_SHADOW}`}>Current Affairs</div>
                  <h1 className="font-black text-white px-4 leading-tight" style={{ fontSize: getScaledSize(68, settings.titleFontScale) }}>{renderHighlightedText(slide.title || '')}</h1>
                  <div className="space-y-6 px-4">
                    {Array.isArray(slide.content) && (slide.content as string[]).map((c, i) => (
                      <p key={i} className="font-black text-blue-500 uppercase tracking-widest shadow-sm" style={{ fontSize: getScaledSize(32, settings.bodyFontScale) }}>{renderHighlightedText(c)}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full space-y-6">
            <Loader2 size={48} className="animate-spin text-blue-600"/>
            <p className="font-black uppercase tracking-widest text-gray-700 text-[10px]">Preparing Your Canvas</p>
          </div>
        )}
      </div>

      <div className="fixed bottom-4 md:bottom-8 left-0 right-0 z-50 pointer-events-none px-4 flex flex-col items-center">
        <div className="w-full max-w-[1920px] relative flex items-center justify-center">
          <div className="flex gap-4 md:gap-8 pointer-events-auto bg-black/60 backdrop-blur-3xl p-1.5 rounded-full border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.8)]">
            <button onClick={() => setCurrentIdx(p => Math.max(0, p - 1))} className="px-8 md:px-16 py-3.5 md:py-5 bg-gray-900/90 border border-white/10 rounded-full font-black text-xs md:text-base hover:bg-blue-600/50 transition-all disabled:opacity-20 flex items-center gap-2" disabled={currentIdx === 0}><ChevronLeft size={20}/> PREV</button>
            <button onClick={() => setCurrentIdx(p => Math.min(slides.length - 1, p + 1))} className="px-8 md:px-16 py-3.5 md:py-5 bg-gray-900/90 border border-white/10 rounded-full font-black text-xs md:text-base hover:bg-blue-600/50 transition-all disabled:opacity-20 flex items-center gap-2" disabled={currentIdx === slides.length - 1}>NEXT <ChevronRight size={20}/></button>
          </div>
          {slide?.type === 'quiz' && (
            <div className="absolute right-0 md:right-4 top-0 bottom-0 flex items-center pointer-events-auto">
              <button onClick={toggleReveal} title="Reveal Correct Answer" className={`p-4 md:p-6 bg-yellow-400 text-black rounded-full shadow-[0_0_50px_rgba(250,204,21,0.5)] hover:scale-110 active:scale-95 transition-all animate-bounce-subtle`}><CheckCircle2 size={30}/></button>
            </div>
          )}
        </div>
      </div>

      {isExporting && (
        <div className="fixed inset-0 z-[300] bg-black/98 backdrop-blur-3xl flex flex-col items-center justify-center gap-8 p-10">
           <Loader2 className="animate-spin text-blue-600" size={60}/>
           <div className="text-center space-y-2"><h2 className="text-xl md:text-4xl font-black uppercase text-white">Exporting {exportType}</h2><p className="text-gray-500 font-bold animate-pulse">Processing Slide {currentIdx + 1} of {slides.length}</p></div>
           <div className="w-full max-w-md h-2.5 bg-white/5 rounded-full overflow-hidden"><div className="h-full bg-blue-600 transition-all duration-300" style={{ width: `${exportProgress}%` }} /></div>
        </div>
      )}
      
      <style>{`
        @keyframes bounce-subtle { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
        .animate-bounce-subtle { animation: bounce-subtle 2s infinite ease-in-out; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }
      `}</style>
    </div>
  );
};

export default App;
