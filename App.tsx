
import React, { useState, useEffect, useRef } from 'react';
import { SlideData, Project, GlobalSettings } from './types';
import { 
  ChevronLeft, ChevronRight, Settings, Save, Trash2, 
  Loader2, FileDown, Presentation, Target, LogOut, CheckCircle2,
  PlusCircle, RefreshCw, Check, Layers, FolderOpen, Upload,
  Maximize, Minimize, Type as TypeIcon, Sliders, Image as ImageIcon,
  Highlighter, Plus, X, Menu, MoveUp
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

  const [settings, setSettings] = useState<GlobalSettings>({
    titleFontScale: 1,
    bodyFontScale: 1,
    factFontScale: 1,
    boxPadding: 24,
    defaultContentScale: 1,
    defaultContentYOffset: 0,
  });

  const [isSyncing, setIsSyncing] = useState(false);
  const [syncSuccess, setSyncSuccess] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [exportType, setExportType] = useState<'PPTX' | 'PDF' | null>(null);
  const [exportProgress, setExportProgress] = useState(0);

  const slideRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const contentTextAreaRef = useRef<HTMLTextAreaElement>(null);
  
  const [focusedBoxIdx, setFocusedBoxIdx] = useState<number | null>(null);
  const boxRefs = useRef<(HTMLTextAreaElement | null)[]>([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    if (activeProjectId) {
      fetchProjectData(activeProjectId);
    } else if (projects.length === 0) {
       setSlides(INITIAL_DATA);
    }
  }, [activeProjectId]);

  const fetchProjects = async () => {
    const { data } = await supabase.from('projects').select('*').order('created_at', { ascending: false });
    if (data && data.length > 0) {
      setProjects(data);
      if (!activeProjectId) setActiveProjectId(data[0].id);
    }
  };

  const fetchProjectData = async (projectId: string) => {
    setIsSyncing(true);
    try {
      const { data: project } = await supabase.from('projects').select('settings').eq('id', projectId).single();
      if (project?.settings) {
        setSettings({
          ...settings,
          ...project.settings
        });
      }

      const { data: slidesData } = await supabase.from('slides').select('data').eq('project_id', projectId).order('slide_index', { ascending: true });
      if (slidesData && slidesData.length > 0) {
        setSlides(slidesData.map(d => d.data as SlideData));
        setCurrentIdx(0);
      } else {
        setSlides(INITIAL_DATA);
      }
    } catch (err) {
      console.error("Error loading project data:", err);
    } finally {
      setIsSyncing(false);
    }
  };

  const handleCreateProject = async () => {
    const name = prompt("Enter project name:");
    if (!name) return;
    const initialSettings = { titleFontScale: 1, bodyFontScale: 1, factFontScale: 1, boxPadding: 24, defaultContentScale: 1, defaultContentYOffset: 0 };
    const { data } = await supabase.from('projects').insert({ name, settings: initialSettings }).select().single();
    if (data) {
      setProjects([data, ...projects]);
      setActiveProjectId(data.id);
    }
  };

  const handleDeleteProject = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!confirm("Are you sure you want to delete this project?")) return;
    await supabase.from('projects').delete().eq('id', id);
    await supabase.from('slides').delete().eq('project_id', id);
    
    const updated = projects.filter(p => p.id !== id);
    setProjects(updated);
    if (activeProjectId === id) {
      setActiveProjectId(updated.length > 0 ? updated[0].id : null);
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
      console.error("Sync Error:", err); 
      alert("Failed to sync data to cloud.");
    }
    finally { setIsSyncing(false); }
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
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleExport = async (type: 'PDF' | 'PPTX') => {
    setIsExporting(true);
    setExportType(type);
    setExportProgress(0);
    const originalIdx = currentIdx;

    const captureAndAdd = async (i: number, doc: any) => {
      setCurrentIdx(i);
      await new Promise(r => setTimeout(r, 1200));
      if (slideRef.current) {
        const canvas = await html2canvas(slideRef.current, { scale: 2, useCORS: true, logging: false });
        const img = canvas.toDataURL(type === 'PDF' ? 'image/jpeg' : 'image/png', 0.95);
        if (type === 'PDF') {
          if (i > 0) doc.addPage([1920, 1080], 'landscape');
          doc.addImage(img, 'JPEG', 0, 0, 1920, 1080);
        } else {
          const slide = doc.addSlide();
          slide.addImage({ data: img, x: 0, y: 0, w: '100%', h: '100%' });
        }
      }
    };

    if (type === 'PDF') {
      const pdf = new jsPDF('landscape', 'px', [1920, 1080]);
      for (let i = 0; i < slides.length; i++) {
        await captureAndAdd(i, pdf);
        setExportProgress(Math.round(((i + 1) / slides.length) * 100));
      }
      pdf.save(`Presentation_${activeProjectId}.pdf`);
    } else {
      const pres = new pptxgen();
      pres.layout = 'LAYOUT_16x9';
      for (let i = 0; i < slides.length; i++) {
        await captureAndAdd(i, pres);
        setExportProgress(Math.round(((i + 1) / slides.length) * 100));
      }
      await pres.writeFile({ fileName: `Presentation_${activeProjectId}.pptx` });
    }
    setCurrentIdx(originalIdx);
    setIsExporting(false);
  };

  const handleExportProject = async (projectId: string, type: 'PDF' | 'PPTX', e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeProjectId !== projectId) {
      setActiveProjectId(projectId);
      setTimeout(() => handleExport(type), 1000);
    } else {
      handleExport(type);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const base64 = event.target?.result as string;
      const s = [...slides];
      s[editingIdx].imageUrl = base64;
      setSlides(s);
    };
    reader.readAsDataURL(file);
  };

  const handleApplyHighlight = (boxIndex?: number) => {
    const targetIdx = boxIndex !== undefined ? boxIndex : focusedBoxIdx;
    if (targetIdx === null) {
      if (!contentTextAreaRef.current) return;
      const textarea = contentTextAreaRef.current;
      applyToTextarea(textarea, (val) => {
        const s = [...slides];
        s[editingIdx].content = val.split('\n');
        setSlides(s);
      });
      return;
    }

    const textarea = boxRefs.current[targetIdx];
    if (!textarea) return;

    applyToTextarea(textarea, (val) => {
      const s = [...slides];
      const content = Array.isArray(s[editingIdx].content) ? [...s[editingIdx].content as string[]] : [s[editingIdx].content as string];
      content[targetIdx] = val;
      s[editingIdx].content = content;
      setSlides(s);
    });
  };

  const applyToTextarea = (textarea: HTMLTextAreaElement, callback: (newVal: string) => void) => {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    if (start === end) return;
    
    const text = textarea.value;
    const before = text.substring(0, start);
    const selection = text.substring(start, end);
    const after = text.substring(end);
    
    const newText = `${before}[h]${selection}[/h]${after}`;
    callback(newText);

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start, end + 6);
    }, 10);
  };

  const renderHighlightedText = (text: string) => {
    if (!text) return text;
    const parts = text.split(/(\[h\].*?\[\/h\])/g);
    return parts.map((part, i) => {
      if (part.startsWith('[h]') && part.endsWith('[/h]')) {
        const innerText = part.slice(3, -4);
        return (
          <span 
            key={i} 
            className="bg-[#f0ff00] text-black px-1.5 py-0.5 rounded-sm mx-0.5 shadow-sm inline-block"
            style={{ fontWeight: 'inherit' }}
          >
            {innerText}
          </span>
        );
      }
      return part;
    });
  };

  const slide = slides[currentIdx];
  const GLOW_SHADOW = "shadow-[0_0_20px_rgba(255,255,255,0.06)]";

  const getScaledSize = (base: number, scale: number = 1) => {
    const desktopSize = base * scale;
    const mobileSize = Math.max(desktopSize * 0.7, 14);
    return `clamp(${mobileSize}px, 2.5vw, ${desktopSize}px)`;
  };

  if (isAdmin) {
    const activeSlide = slides[editingIdx];
    const contentList = Array.isArray(activeSlide.content) ? activeSlide.content : [activeSlide.content as string];

    return (
      <div className="fixed inset-0 bg-black text-white flex flex-col md:flex-row z-[100] font-sans overflow-hidden">
        {/* Sidebar */}
        <div className={`${isSidebarOpen ? 'w-full md:w-80' : 'w-0'} border-b md:border-b-0 md:border-r border-white/5 flex flex-col bg-[#050505] transition-all duration-300 overflow-hidden relative`}>
          <div className="p-4 border-b border-white/5 bg-[#0a0a0d] flex items-center justify-between min-w-[320px]">
            <h2 className="text-[10px] font-black text-gray-500 uppercase tracking-widest flex items-center gap-2"><Layers size={14}/> Projects</h2>
            <div className="flex items-center gap-2">
              <button onClick={handleCreateProject} className="text-blue-500 hover:scale-110 transition-transform active:scale-90"><PlusCircle size={18}/></button>
              <button onClick={() => setIsSidebarOpen(false)} className="md:hidden text-gray-500"><X size={18}/></button>
            </div>
          </div>
          
          <div className="h-40 overflow-y-auto custom-scrollbar p-2 space-y-1 bg-black/30 border-b border-white/5 min-w-[320px]">
            {projects.map(p => (
              <div 
                key={p.id} 
                onClick={() => setActiveProjectId(p.id)} 
                className={`group p-3 rounded-lg cursor-pointer transition-all flex items-center justify-between gap-2 ${activeProjectId === p.id ? 'bg-blue-600/10 border-l-2 border-blue-500' : 'hover:bg-white/5'}`}
              >
                <span className="flex-1 text-[11px] font-bold text-gray-300 truncate">{p.name}</span>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                   <button onClick={(e) => handleExportProject(p.id, 'PDF', e)} title="Export PDF" className="p-1 text-red-500 hover:bg-red-500/10 rounded transition-colors"><FileDown size={12}/></button>
                   <button onClick={(e) => handleExportProject(p.id, 'PPTX', e)} title="Export PPTX" className="p-1 text-purple-500 hover:bg-purple-500/10 rounded transition-colors"><Presentation size={12}/></button>
                   <button onClick={(e) => handleDeleteProject(p.id, e)} title="Delete Project" className="p-1 text-gray-600 hover:text-red-500 rounded transition-colors"><Trash2 size={12}/></button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex border-b border-white/5 min-w-[320px]">
            <button onClick={() => setAdminTab('slides')} className={`flex-1 p-3 text-[10px] font-black uppercase tracking-widest transition-all ${adminTab === 'slides' ? 'bg-blue-600/10 text-blue-400 border-b-2 border-blue-500' : 'text-gray-500 hover:bg-white/5'}`}>Slides</button>
            <button onClick={() => setAdminTab('settings')} className={`flex-1 p-3 text-[10px] font-black uppercase tracking-widest transition-all ${adminTab === 'settings' ? 'bg-blue-600/10 text-blue-400 border-b-2 border-blue-500' : 'text-gray-500 hover:bg-white/5'}`}>Settings</button>
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar min-w-[320px]">
            {adminTab === 'slides' ? (
              <div className="p-2 space-y-1">
                {slides.map((s, i) => (
                  <div key={s.id} onClick={() => setEditingIdx(i)} className={`p-3 rounded-lg cursor-pointer transition-all ${editingIdx === i ? 'bg-blue-600/10 border-l-2 border-blue-500' : 'hover:bg-white/5'}`}>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-mono text-gray-600">{(i+1).toString().padStart(2, '0')}</span>
                      <span className="flex-1 text-[11px] font-bold text-gray-300 truncate">{s.title || 'Untitled'}</span>
                      <button onClick={(e) => { e.stopPropagation(); setSlides(slides.filter((_, idx) => idx !== i)); }} className="text-red-500/50 hover:text-red-500 transition-all"><Trash2 size={12}/></button>
                    </div>
                  </div>
                ))}
                <button onClick={() => setSlides([...slides, { id: crypto.randomUUID(), type: 'quiz', title: 'New Topic', subtitle: 'नया विषय', content: ['Que. ...?', '...'], options: [{id: '1', label: 'A', text: 'Option A'}, {id: '2', label: 'B', text: 'Option B'}, {id: '3', label: 'C', text: 'Option C'}, {id: '4', label: 'D', text: 'Option D'}], correctOptionId: '3' }])} className="w-full p-3 border border-dashed border-white/10 rounded-lg text-[10px] font-black text-gray-500 hover:bg-white/5 transition-all">+ ADD SLIDE</button>
              </div>
            ) : (
              <div className="p-4 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-[10px] font-black text-blue-500 uppercase tracking-widest flex items-center gap-2"><Sliders size={12}/> Global Font Scaling</h3>
                  <div className="space-y-1">
                    <label className="text-[9px] font-bold text-gray-500 uppercase">Title Font Scale: {settings.titleFontScale}x</label>
                    <input type="range" min="0.5" max="2" step="0.1" value={settings.titleFontScale} onChange={e => setSettings({...settings, titleFontScale: parseFloat(e.target.value)})} className="w-full accent-blue-600 h-1.5 bg-white/5 rounded-lg cursor-pointer" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] font-bold text-gray-500 uppercase">Body/Quiz Font Scale: {settings.bodyFontScale}x</label>
                    <input type="range" min="0.5" max="2" step="0.1" value={settings.bodyFontScale} onChange={e => setSettings({...settings, bodyFontScale: parseFloat(e.target.value)})} className="w-full accent-blue-600 h-1.5 bg-white/5 rounded-lg cursor-pointer" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] font-bold text-gray-500 uppercase">Fact Line Font Scale: {settings.factFontScale}x</label>
                    <input type="range" min="0.5" max="2" step="0.1" value={settings.factFontScale} onChange={e => setSettings({...settings, factFontScale: parseFloat(e.target.value)})} className="w-full accent-blue-600 h-1.5 bg-white/5 rounded-lg cursor-pointer" />
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-white/5">
                  <h3 className="text-[10px] font-black text-blue-500 uppercase tracking-widest flex items-center gap-2"><Maximize size={12}/> Layout Scaling</h3>
                  <div className="space-y-1">
                    <label className="text-[9px] font-bold text-gray-500 uppercase">Container Padding: {settings.boxPadding}px</label>
                    <input type="range" min="8" max="64" step="4" value={settings.boxPadding} onChange={e => setSettings({...settings, boxPadding: parseInt(e.target.value)})} className="w-full accent-blue-600 h-1.5 bg-white/5 rounded-lg cursor-pointer" />
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="p-4 border-t border-white/5 bg-[#0a0a0d] space-y-2 min-w-[320px]">
            <button onClick={syncToCloud} className="w-full py-3 bg-blue-600 rounded-lg text-[10px] font-black flex items-center justify-center gap-2 active:scale-95 transition-all">
              {isSyncing ? <RefreshCw className="animate-spin" size={12}/> : <Save size={12}/>}
              {syncSuccess ? 'SAVED' : 'SYNC CLOUD'}
            </button>
            <button onClick={() => setIsAdmin(false)} className="w-full py-3 bg-gray-800 rounded-lg text-[10px] font-black active:scale-95">PREVIEW</button>
          </div>
        </div>

        {/* Editor Main Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-10 bg-black custom-scrollbar">
          <button onClick={() => setIsSidebarOpen(true)} className={`${isSidebarOpen ? 'hidden' : 'block'} mb-4 p-2 bg-gray-900 rounded-lg text-gray-400`}><Menu size={20}/></button>
          
          {activeSlide && adminTab === 'slides' ? (
            <div className="max-w-5xl mx-auto space-y-8 pb-32">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <h1 className="text-xl md:text-2xl font-black text-white">{activeSlide.title}</h1>
                  <p className="text-blue-500 font-mono text-[9px] uppercase tracking-widest mt-1">Template: {activeSlide.type}</p>
                </div>
                <select value={activeSlide.type} onChange={e => { const s = [...slides]; s[editingIdx].type = e.target.value as any; setSlides(s); }} className="bg-gray-900 border border-white/10 p-2 rounded-lg text-[10px] font-black uppercase outline-none focus:border-blue-500 w-full sm:w-auto">
                  <option value="quiz">Quiz</option>
                  <option value="fact">Fact</option>
                  <option value="title">Cover</option>
                </select>
              </div>

              {/* Layout Tuning Section */}
              <div className="bg-[#0a0a0a] border border-blue-500/20 rounded-2xl p-6 space-y-4">
                 <h3 className="text-[10px] font-black text-blue-500 uppercase tracking-widest flex items-center gap-2"><MoveUp size={14}/> Layout Fine Tuning (Per Slide)</h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[9px] font-bold text-gray-500 uppercase">Content Scale: {(activeSlide.contentScale || 1).toFixed(2)}x</label>
                      <input type="range" min="0.5" max="1.2" step="0.05" value={activeSlide.contentScale || 1} onChange={e => { const s = [...slides]; s[editingIdx].contentScale = parseFloat(e.target.value); setSlides(s); }} className="w-full accent-blue-600 h-1.5 bg-white/5 rounded-lg cursor-pointer" />
                      <p className="text-[8px] text-gray-600 italic">Shrink content to avoid overlap</p>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] font-bold text-gray-500 uppercase">Vertical Offset (Y): {activeSlide.contentYOffset || 0}px</label>
                      <input type="range" min="-200" max="100" step="10" value={activeSlide.contentYOffset || 0} onChange={e => { const s = [...slides]; s[editingIdx].contentYOffset = parseInt(e.target.value); setSlides(s); }} className="w-full accent-blue-600 h-1.5 bg-white/5 rounded-lg cursor-pointer" />
                      <p className="text-[8px] text-gray-600 italic">Negative values move content UP</p>
                    </div>
                 </div>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="space-y-1">
                    <label className="text-[9px] font-black uppercase text-gray-500 tracking-widest">Main Header (EN)</label>
                    <input type="text" value={activeSlide.title || ''} onChange={e => { const s = [...slides]; s[editingIdx].title = e.target.value; setSlides(s); }} className="w-full bg-[#0a0a0a] border border-white/10 p-3 rounded-xl text-xs font-bold focus:border-blue-500 outline-none" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] font-black uppercase text-gray-500 tracking-widest">Sub Header (HI)</label>
                    <input type="text" value={activeSlide.subtitle || ''} onChange={e => { const s = [...slides]; s[editingIdx].subtitle = e.target.value; setSlides(s); }} className="w-full bg-[#0a0a0a] border border-white/10 p-3 rounded-xl text-xs font-bold focus:border-blue-500 outline-none" />
                  </div>
                  {activeSlide.type === 'quiz' && (
                    <div className="space-y-3 pt-4 border-t border-white/5">
                      <h3 className="text-[9px] font-black uppercase text-blue-500 flex items-center gap-2"><Target size={12}/> Options</h3>
                      {activeSlide.options?.map((opt, oIdx) => (
                        <div key={opt.id} className="flex gap-2 items-center">
                          <span className="w-8 h-8 flex items-center justify-center font-black text-gray-600 text-[10px] border border-white/5 rounded-lg shrink-0">{opt.label}</span>
                          <input type="text" value={opt.text} onChange={e => { const s = [...slides]; s[editingIdx].options![oIdx].text = e.target.value; setSlides(s); }} className="flex-1 bg-[#0a0a0a] border border-white/10 p-2 rounded-xl text-[11px] focus:border-blue-500 outline-none" />
                          <input type="radio" checked={activeSlide.correctOptionId === opt.id} onChange={() => { const s = [...slides]; s[editingIdx].correctOptionId = opt.id; setSlides(s); }} className="w-4 h-4 accent-blue-600 cursor-pointer shrink-0" />
                        </div>
                      ))}
                    </div>
                  )}
                  {activeSlide.type === 'fact' && (
                    <div className="space-y-4 pt-4 border-t border-white/5">
                      <h3 className="text-[9px] font-black uppercase text-blue-500 flex items-center gap-2"><ImageIcon size={12}/> Image Box Controls</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-[9px] font-bold text-gray-500 uppercase">Width (px)</label>
                          <input type="number" value={activeSlide.imageWidth || 400} onChange={e => { const s = [...slides]; s[editingIdx].imageWidth = parseInt(e.target.value); setSlides(s); }} className="w-full bg-[#0a0a0a] border border-white/10 p-2 rounded-lg text-xs outline-none focus:border-blue-500" />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[9px] font-bold text-gray-500 uppercase">Height (px)</label>
                          <input type="number" value={activeSlide.imageHeight || 300} onChange={e => { const s = [...slides]; s[editingIdx].imageHeight = parseInt(e.target.value); setSlides(s); }} className="w-full bg-[#0a0a0a] border border-white/10 p-2 rounded-lg text-xs outline-none focus:border-blue-500" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-6">
                  {activeSlide.type === 'fact' ? (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                         <label className="text-[9px] font-black uppercase text-gray-500 tracking-widest">Content Boxes</label>
                         <button 
                          onClick={() => {
                            const s = [...slides];
                            const content = Array.isArray(s[editingIdx].content) ? [...s[editingIdx].content as string[]] : [s[editingIdx].content as string];
                            content.push('New Box\nनया बॉक्स');
                            s[editingIdx].content = content;
                            setSlides(s);
                          }}
                          className="flex items-center gap-1 text-blue-500 hover:text-blue-400 text-[10px] font-black uppercase"
                         >
                           <Plus size={14}/> Add Box
                         </button>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {contentList.map((box, bIdx) => (
                          <div key={bIdx} className="group bg-[#0a0a0a] border border-white/5 p-4 rounded-xl space-y-2 relative transition-all hover:border-white/10">
                            <div className="flex items-center justify-between">
                              <span className="text-[9px] font-black text-gray-600 uppercase tracking-widest">Box {bIdx + 1}</span>
                              <div className="flex items-center gap-2">
                                <button 
                                  onClick={() => handleApplyHighlight(bIdx)}
                                  className="p-1 text-blue-500 hover:bg-blue-500/10 rounded" title="Highlight Selection"
                                >
                                  <Highlighter size={12}/>
                                </button>
                                <button 
                                  onClick={() => {
                                    const s = [...slides];
                                    const content = [...contentList];
                                    content.splice(bIdx, 1);
                                    s[editingIdx].content = content;
                                    setSlides(s);
                                  }}
                                  className="p-1 text-red-500 hover:bg-red-500/10 rounded" title="Delete Box"
                                >
                                  <X size={12}/>
                                </button>
                              </div>
                            </div>
                            <textarea 
                              ref={el => boxRefs.current[bIdx] = el}
                              value={box}
                              onFocus={() => setFocusedBoxIdx(bIdx)}
                              onChange={e => {
                                const s = [...slides];
                                const content = [...contentList];
                                content[bIdx] = e.target.value;
                                s[editingIdx].content = content;
                                setSlides(s);
                              }}
                              className="w-full h-24 bg-transparent border-none p-0 text-xs leading-relaxed focus:ring-0 outline-none resize-none custom-scrollbar font-bold"
                              placeholder="English text\nHindi translation"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-1">
                      <div className="flex items-center justify-between mb-1">
                        <label className="text-[9px] font-black uppercase text-gray-500 tracking-widest">Content Lines</label>
                        <button 
                          onClick={() => handleApplyHighlight()}
                          className="p-1.5 bg-blue-600/10 text-blue-500 rounded hover:bg-blue-600/20 transition-all flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-tight"
                          title="Highlight Selected Text"
                        >
                          <Highlighter size={10}/> Highlight Selection
                        </button>
                      </div>
                      <textarea 
                        ref={contentTextAreaRef}
                        onFocus={() => setFocusedBoxIdx(null)}
                        value={Array.isArray(activeSlide.content) ? activeSlide.content.join('\n') : activeSlide.content} 
                        onChange={e => { const s = [...slides]; s[editingIdx].content = e.target.value.split('\n'); setSlides(s); }} 
                        className="w-full h-48 bg-[#0a0a0a] border border-white/10 p-3 rounded-xl text-xs leading-relaxed focus:border-blue-500 outline-none resize-none custom-scrollbar" 
                      />
                    </div>
                  )}

                  <div className="space-y-1">
                    <label className="text-[9px] font-black uppercase text-gray-500 tracking-widest flex items-center justify-between">
                      <span>Asset Image</span>
                      <button onClick={() => fileInputRef.current?.click()} className="flex items-center gap-1 text-blue-500 hover:text-blue-400 transition-colors uppercase tracking-tight">
                        <Upload size={10} /> Upload Local
                      </button>
                    </label>
                    <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageUpload} />
                    <div className="flex gap-2">
                      <input type="text" value={activeSlide.imageUrl || ''} onChange={e => { const s = [...slides]; s[editingIdx].imageUrl = e.target.value; setSlides(s); }} className="flex-1 bg-[#0a0a0a] border border-white/10 p-3 rounded-xl text-[10px] font-mono focus:border-blue-500 outline-none" placeholder="https://... or uploaded base64" />
                    </div>
                    {activeSlide.imageUrl && (
                      <div className="mt-2 w-full aspect-video bg-white/5 rounded-lg border border-white/5 flex items-center justify-center p-2 overflow-hidden">
                        <img src={activeSlide.imageUrl} className="max-w-full max-h-full object-contain rounded" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : adminTab === 'slides' ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-800 space-y-6">
              <FolderOpen size={64} className="opacity-20"/>
              <p className="font-black uppercase tracking-[0.2em] text-sm">Select a slide to edit</p>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-gray-800 space-y-6">
               <Sliders size={64} className="opacity-20"/>
               <p className="font-black uppercase tracking-[0.2em] text-sm">Fine tune presentation layout</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden font-sans relative select-none">
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,_#0b1a33_0%,_#000000_100%)] opacity-85" />
      
      <div className="fixed top-4 right-4 md:top-6 md:right-8 z-[100] flex gap-2 md:gap-3 pointer-events-auto">
        <button 
          onClick={() => setIsAdmin(true)} 
          className="p-2.5 bg-gray-900/30 backdrop-blur-xl rounded-xl border border-white/10 hover:border-blue-500/50 transition-all text-gray-500 hover:text-blue-400 group"
        >
          <Settings size={18} className="group-hover:rotate-45 transition-transform" />
        </button>
        <button 
          onClick={toggleFullscreen} 
          className="p-2.5 bg-gray-900/30 backdrop-blur-xl rounded-xl border border-white/10 hover:border-green-500/50 transition-all text-gray-500 hover:text-green-400"
          title={isFullscreen ? "Exit Full Screen" : "Enter Full Screen"}
        >
          {isFullscreen ? <Minimize size={18}/> : <Maximize size={18}/>}
        </button>
      </div>

      <div ref={slideRef} className="relative z-10 w-full h-full md:max-w-[1920px] md:aspect-[16/9] bg-[#00040d] overflow-hidden md:shadow-[0_0_100px_rgba(0,0,0,1)] flex flex-col">
        {slide ? (
          <div key={currentIdx} className="w-full h-full flex flex-col pt-20 md:pt-28 pb-48 md:pb-64 px-4 md:px-12 relative overflow-y-auto custom-scrollbar">
            
            <div className={`absolute top-2 md:top-5 left-2 md:left-5 right-2 md:right-5 min-h-[64px] md:h-24 bg-gradient-to-r from-[#1e3a8a]/50 via-[#1e3a8a]/20 to-transparent backdrop-blur-3xl flex items-center px-4 md:px-10 border border-white/10 z-20 rounded-xl shadow-2xl ${GLOW_SHADOW}`}>
              <div className="w-1 md:w-2 h-8 md:h-14 bg-[#ea580c] mr-3 md:mr-6 rounded-full shadow-[0_0_20px_rgba(234,88,12,0.4)] shrink-0" />
              <div className="animate-in slide-in-from-left duration-700 max-w-[95%] overflow-hidden">
                <h1 
                  className="font-black tracking-tight text-white uppercase drop-shadow-md leading-tight truncate"
                  style={{ fontSize: getScaledSize(24, settings.titleFontScale) }}
                >
                  {slide.title}
                </h1>
                <p className="text-[10px] md:text-base font-bold text-gray-400 tracking-tight opacity-90 truncate">{slide.subtitle}</p>
              </div>
            </div>

            {/* Template Content Area with scaling and offset logic */}
            <div 
              className="flex-1 flex flex-col overflow-visible pr-2 -mr-2 transition-transform duration-500"
              style={{
                transform: `scale(${slide.contentScale || 1}) translateY(${slide.contentYOffset || 0}px)`,
                transformOrigin: 'top center'
              }}
            >
              
              {/* Template: Quiz */}
              {slide.type === 'quiz' && (
                <div className="flex-1 flex flex-col items-center justify-start pt-4 md:pt-10 space-y-6 md:space-y-10 animate-in slide-in-from-bottom duration-700 w-full">
                  <div 
                    className={`w-full max-w-[96%] border border-white/5 rounded-[1.25rem] md:rounded-[2.5rem] text-center shadow-xl relative bg-[#0d1c3a]/40 backdrop-blur-lg mt-4 md:mt-8 ${GLOW_SHADOW}`}
                    style={{ padding: `${settings.boxPadding}px` }}
                  >
                    <div className="relative space-y-2 md:space-y-4">
                      <h3 
                        className="font-black leading-snug text-white drop-shadow-sm"
                        style={{ fontSize: getScaledSize(26, settings.bodyFontScale) }}
                      >
                        {Array.isArray(slide.content) ? renderHighlightedText(slide.content[0]) : renderHighlightedText(slide.content as string)}
                      </h3>
                      {Array.isArray(slide.content) && slide.content[1] && (
                        <p 
                          className="text-gray-400 font-bold opacity-70 leading-relaxed"
                          style={{ fontSize: getScaledSize(16, settings.bodyFontScale) }}
                        >
                          {renderHighlightedText(slide.content[1])}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="w-full max-w-[96%] flex flex-col gap-3 md:gap-4">
                    {slide.options?.map((opt) => {
                      const isCorrect = slide.correctOptionId === opt.id && slide.isRevealed;
                      return (
                        <div 
                          key={opt.id} 
                          className={`group relative p-3 md:p-5 rounded-xl md:rounded-[1.5rem] border transition-all duration-700 flex items-center gap-4 md:gap-10 shadow-lg ${isCorrect ? `bg-[#2563eb]/50 border-yellow-400/50 shadow-[0_0_40px_rgba(250,204,21,0.25)] scale-[1.01] ${GLOW_SHADOW}` : 'bg-[#1e40af]/15 border-white/5 hover:border-blue-500/20'}`}
                        >
                          <div className={`text-sm md:text-xl font-black w-7 h-7 md:w-10 md:h-10 flex items-center justify-center rounded-lg md:rounded-xl shrink-0 ${isCorrect ? 'text-yellow-400 bg-black/20' : 'text-gray-500 bg-white/5'}`}>{opt.label}</div>
                          <span 
                            className={`font-black tracking-tight flex-1 ${isCorrect ? 'text-yellow-400' : 'text-gray-200'}`}
                            style={{ fontSize: getScaledSize(20, settings.bodyFontScale) }}
                          >
                            {renderHighlightedText(opt.text)}
                          </span>
                          {isCorrect && <div className="animate-in zoom-in duration-500 flex items-center justify-center shrink-0"><Check size={20} className="md:w-8 md:h-8 text-yellow-400 stroke-[4px]"/></div>}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Template: Fact */}
              {slide.type === 'fact' && (
                <div className="flex-1 flex flex-col lg:flex-row gap-6 lg:gap-12 items-center justify-center py-4 md:py-8 animate-in slide-in-from-right duration-700 h-full w-full">
                  <div className="flex-1 w-full flex flex-col justify-center space-y-4 md:space-y-6">
                    {Array.isArray(slide.content) && (slide.content as string[]).map((line, lIdx) => {
                      const lines = line.split('\n');
                      return (
                        <div 
                          key={lIdx} 
                          className={`bg-[#1e40af]/25 border-l-[4px] md:border-l-[10px] border-[#ea580c] p-3 md:p-6 rounded-r-lg md:rounded-r-2xl border-y border-r border-white/5 shadow-xl hover:translate-x-2 transition-all backdrop-blur-xl ${GLOW_SHADOW}`}
                        >
                          <p 
                            className="font-black leading-snug text-gray-100 drop-shadow-sm"
                            style={{ fontSize: getScaledSize(20, settings.factFontScale) }}
                          >
                            {renderHighlightedText(lines[0])}
                          </p>
                          {lines[1] && (
                            <p 
                              className="font-bold text-gray-400 mt-1 md:mt-2 opacity-80 leading-relaxed italic"
                              style={{ fontSize: getScaledSize(14, settings.factFontScale) }}
                            >
                              {renderHighlightedText(lines[1])}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  {slide.imageUrl && (
                    <div className="w-full lg:w-[42%] flex flex-col items-center justify-center p-2 md:p-6">
                      <div 
                        className="rounded-xl md:rounded-[2rem] shadow-[0_0_60px_rgba(255,255,255,0.2),_0_0_30px_rgba(255,255,255,0.1)] overflow-hidden flex items-center justify-center transition-transform hover:scale-[1.03] duration-500"
                        style={{ 
                          width: slide.imageWidth ? `clamp(100px, 80vw, ${slide.imageWidth}px)` : '100%',
                          height: slide.imageHeight ? `clamp(100px, 50vh, ${slide.imageHeight}px)` : 'auto',
                          maxWidth: '100%'
                        }}
                      >
                        <img 
                          src={slide.imageUrl} 
                          className="w-full h-full object-cover" 
                          crossOrigin="anonymous" 
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Template: Title */}
              {slide.type === 'title' && (
                <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4 md:space-y-10 py-10 animate-in zoom-in duration-1000 w-full">
                  <div className={`bg-[#ea580c] px-4 md:px-6 py-1.5 md:py-2 rounded-full text-[9px] md:text-lg font-black uppercase tracking-[0.2em] md:tracking-[0.3em] shadow-md border border-white/20 ${GLOW_SHADOW}`}>Current Affairs</div>
                  <h1 
                    className="font-black tracking-tighter drop-shadow-2xl text-white leading-none px-4"
                    style={{ fontSize: getScaledSize(64, settings.titleFontScale) }}
                  >
                    {renderHighlightedText(slide.title || '')}
                  </h1>
                  <div className="space-y-2 md:space-y-4 px-4">
                    {Array.isArray(slide.content) && slide.content.map((c, i) => (
                      <p 
                        key={i} 
                        className="font-black text-blue-500 uppercase tracking-widest drop-shadow-md"
                        style={{ fontSize: getScaledSize(28, settings.bodyFontScale) }}
                      >
                        {renderHighlightedText(c)}
                      </p>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full space-y-6 p-10 text-center">
            <Loader2 size={48} className="animate-spin text-blue-600"/>
            <p className="font-black uppercase tracking-[0.4em] text-gray-700 text-[10px]">Loading Canvas</p>
          </div>
        )}
      </div>

      <div className="fixed bottom-6 md:bottom-10 left-0 right-0 z-50 pointer-events-none px-4 md:px-12 flex flex-col items-center">
        <div className="w-full max-w-[1920px] relative flex items-center justify-center">
          <div className="flex gap-4 md:gap-12 pointer-events-auto bg-black/40 backdrop-blur-3xl p-2 rounded-full border border-white/5">
            <button onClick={e => { e.stopPropagation(); setCurrentIdx(p => Math.max(0, p - 1)); }} className="flex-1 md:flex-none px-8 md:px-16 py-3 md:py-5 bg-gray-900/70 border border-white/10 rounded-full font-black text-[10px] md:text-sm tracking-widest hover:bg-blue-600/50 transition-all shadow-2xl disabled:opacity-20 flex items-center justify-center gap-2 active:scale-95" disabled={currentIdx === 0}><ChevronLeft size={18}/> PREV</button>
            <button onClick={e => { e.stopPropagation(); setCurrentIdx(p => Math.min(slides.length - 1, p + 1)); }} className="flex-1 md:flex-none px-8 md:px-16 py-3 md:py-5 bg-gray-900/70 border border-white/10 rounded-full font-black text-[10px] md:text-sm tracking-widest hover:bg-blue-600/50 transition-all shadow-2xl disabled:opacity-20 flex items-center justify-center gap-2 active:scale-95" disabled={currentIdx === slides.length - 1}>NEXT <ChevronRight size={18}/></button>
          </div>
          
          {slide?.type === 'quiz' && (
            <div className="absolute right-0 top-0 bottom-0 flex items-center pointer-events-auto">
              <button onClick={toggleReveal} className={`p-4 md:p-6 bg-yellow-400 text-black rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all ${GLOW_SHADOW}`}>
                <CheckCircle2 size={28} className="md:w-10 md:h-10" strokeWidth={3}/>
              </button>
            </div>
          )}
        </div>
      </div>

      {isExporting && (
        <div className="fixed inset-0 z-[300] bg-black/98 backdrop-blur-3xl flex flex-col items-center justify-center gap-8 p-10 text-center">
           <Loader2 className="animate-spin text-blue-600" size={60} md:size={80}/>
           <div className="space-y-2 md:space-y-3">
             <h2 className="text-xl md:text-4xl font-black uppercase tracking-[0.2em] text-white">Exporting {exportType}</h2>
             <p className="text-gray-500 text-[8px] md:text-lg font-bold uppercase tracking-[0.3em] animate-pulse">Processing Slide {currentIdx + 1}</p>
           </div>
           <div className="w-full max-w-md h-1.5 md:h-2 bg-white/5 rounded-full overflow-hidden border border-white/10">
             <div className="h-full bg-blue-600 transition-all duration-300" style={{ width: `${exportProgress}%` }} />
           </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); filter: blur(8px); } to { opacity: 1; transform: translateY(0); filter: blur(0); } }
        .animate-in { animation: fadeIn 0.4s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        .custom-scrollbar::-webkit-scrollbar { width: 5px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.08); border-radius: 10px; }
        
        @media (max-width: 768px) {
          .md\\:aspect-\\[16\\/9\\] { aspect-ratio: auto; min-height: 100vh; }
        }
      `}</style>
    </div>
  );
};

export default App;
