
import React, { useState, useEffect, useRef } from 'react';
import { SlideData, Project, GlobalSettings } from './types';
import { 
  ChevronLeft, ChevronRight, Settings, Save, 
  Loader2, CheckCircle2, RefreshCw, Check, Layers, 
  Maximize, Minimize, Sliders, Highlighter, Plus, X, Menu, Search, FolderOpen, LayoutGrid
} from 'lucide-react';
import { createClient } from '@supabase/supabase-js';
import { SLIDES as INITIAL_DATA } from './constants/slidesData';

const SUPABASE_URL = 'https://tvcwdfgvyhkjcfjljcna.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2Y3dkZmd2eWhramNmamxqY25hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY1ODY1MzMsImV4cCI6MjA4MjE2MjUzM30.8DxeIeYWCW6EfQ7kPWD041mqjNNDlEx9ax8l2MN0pC4';
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const GLOW_SHADOW = "shadow-[0_0_40px_rgba(0,0,0,0.5)]";

const App: React.FC = () => {
  // Persistence state - initialized from localStorage for "instant" recovery
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeProjectId, setActiveProjectId] = useState<string | null>(() => localStorage.getItem('activeProjectId'));
  
  const [slides, setSlides] = useState<SlideData[]>(() => {
    const saved = localStorage.getItem('cached_slides');
    return saved ? JSON.parse(saved) : INITIAL_DATA;
  });

  const [currentIdx, setCurrentIdx] = useState(() => {
    const saved = localStorage.getItem('currentIdx');
    return saved ? parseInt(saved, 10) : 0;
  });

  const [isAdmin, setIsAdmin] = useState(() => localStorage.getItem('isAdmin') === 'true');
  
  const [settings, setSettings] = useState<GlobalSettings>(() => {
    const saved = localStorage.getItem('cached_settings');
    if (saved) return JSON.parse(saved);
    return {
      titleFontScale: 1.1,
      bodyFontScale: 1.1,
      factFontScale: 1.1,
      quizScale: 1.0,
      factScale: 1.0,
      boxPadding: 40,
      defaultContentScale: 1,
      defaultContentYOffset: 0,
      defaultBottomPadding: 260,
      navScale: 0.85,
    };
  });

  // UI State
  const [editingIdx, setEditingIdx] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [adminTab, setAdminTab] = useState<'slides' | 'settings' | 'projects'>('slides');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [focusedBoxIdx, setFocusedBoxIdx] = useState<number | null>(null);
  const [jumpValue, setJumpValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncSuccess, setSyncSuccess] = useState(false);

  const slideRef = useRef<HTMLDivElement>(null);
  const boxRefs = useRef<(HTMLTextAreaElement | null)[]>([]);

  // Effect to persist changes to localStorage instantly
  useEffect(() => {
    if (activeProjectId) localStorage.setItem('activeProjectId', activeProjectId);
    localStorage.setItem('currentIdx', currentIdx.toString());
    localStorage.setItem('isAdmin', isAdmin.toString());
    localStorage.setItem('cached_settings', JSON.stringify(settings));
    localStorage.setItem('cached_slides', JSON.stringify(slides));
  }, [activeProjectId, currentIdx, isAdmin, settings, slides]);

  // Initial loads
  useEffect(() => { fetchProjects(); }, []);

  useEffect(() => {
    if (activeProjectId) { 
      fetchProjectData(activeProjectId); 
    } 
  }, [activeProjectId]);

  useEffect(() => {
    const handleFullscreenChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) { 
      document.documentElement.requestFullscreen().catch(e => console.error(e)); 
    } else { 
      document.exitFullscreen().catch(e => console.error(e)); 
    }
  };

  const fetchProjects = async () => {
    try {
      const { data } = await supabase.from('projects').select('*').order('created_at', { ascending: false });
      if (data && data.length > 0) {
        setProjects(data);
        if (!activeProjectId || !data.find(p => p.id === activeProjectId)) {
          setActiveProjectId(data[0].id);
        }
      } else {
        setProjects([]);
      }
    } catch (e) { 
      console.error("Fetch projects error:", e);
    }
  };

  const fetchProjectData = async (projectId: string) => {
    setIsSyncing(true);
    try {
      // 1. Load Global Settings from Cloud
      const { data: project, error: pError } = await supabase.from('projects').select('settings').eq('id', projectId).single();
      if (pError) throw pError;
      
      if (project?.settings) {
        const newSettings = { ...settings, ...project.settings };
        setSettings(newSettings);
        localStorage.setItem('cached_settings', JSON.stringify(newSettings));
      }
      
      // 2. Load Slides from Cloud
      const { data: slidesData, error: sError } = await supabase
        .from('slides')
        .select('data')
        .eq('project_id', projectId)
        .order('slide_index', { ascending: true });
        
      if (sError) throw sError;

      if (slidesData && slidesData.length > 0) {
        const newSlides = slidesData.map(d => d.data as SlideData);
        setSlides(newSlides);
        localStorage.setItem('cached_slides', JSON.stringify(newSlides));
      }
    } catch (err) { 
      console.error("Fetch project data error:", err);
    } finally { 
      setIsSyncing(false); 
    }
  };

  const syncToCloud = async () => {
    if (!activeProjectId) {
      alert("No active project to sync to.");
      return;
    }
    
    setIsSyncing(true);
    setSyncSuccess(false);
    try {
      // 1. Update project global settings (scales, paddings, etc.)
      const { error: pError } = await supabase
        .from('projects')
        .update({ settings: settings })
        .eq('id', activeProjectId);
      if (pError) throw pError;
      
      // 2. Clear old slide data for this specific project
      const { error: dError } = await supabase
        .from('slides')
        .delete()
        .eq('project_id', activeProjectId);
      if (dError) throw dError;
      
      // 3. Save all current slides (includes text edits and individual scale overrides)
      const rows = slides.map((s, i) => ({ 
        project_id: activeProjectId, 
        slide_index: i, 
        data: s 
      }));
      const { error: iError } = await supabase.from('slides').insert(rows);
      if (iError) throw iError;
      
      setSyncSuccess(true);
      setTimeout(() => setSyncSuccess(false), 3000);
      await fetchProjects();
    } catch (err) { 
      console.error("Sync error:", err);
      alert("Failed to sync to database. Ensure you have run the SQL script in Supabase."); 
    } finally { 
      setIsSyncing(false); 
    }
  };

  const handleCreateNewProject = async () => {
    const name = prompt("Enter Name for New Batch (e.g., June 2025):");
    if (!name) return;
    setIsSyncing(true);
    try {
      // 1. Create the project row
      const { data: newProject, error: pError } = await supabase
        .from('projects')
        .insert([{ name, settings: settings }])
        .select()
        .single();
      
      if (pError) throw pError;
      
      // 2. Seed with the initial template
      const rows = INITIAL_DATA.map((s, i) => ({ 
        project_id: newProject.id, 
        slide_index: i, 
        data: s 
      }));
      const { error: sError } = await supabase.from('slides').insert(rows);
      if (sError) throw sError;
      
      setProjects(prev => [newProject, ...prev]);
      setActiveProjectId(newProject.id);
      setSlides(INITIAL_DATA);
      setCurrentIdx(0);
      alert("New Project created successfully!");
    } catch (err) {
      console.error("Create project error:", err);
      alert("Error creating project.");
    } finally {
      setIsSyncing(false);
    }
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

  const handleJumpToSlide = (e: React.FormEvent) => {
    e.preventDefault();
    const val = parseInt(jumpValue);
    if (!isNaN(val) && val >= 1 && val <= slides.length) setCurrentIdx(val - 1);
    setJumpValue('');
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
        return <span key={i} className="font-black" style={{ color: '#f0ff00' }}>{part.slice(3, -4)}</span>;
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
    const mobileSize = Math.max(desktopSize * 0.4, 10);
    const vwFactor = (desktopSize / 1920) * 100;
    return `clamp(${mobileSize}px, ${vwFactor}vw, ${desktopSize}px)`;
  };

  const slide = slides[currentIdx];
  const filteredSlides = slides.filter(s => 
    s.title?.toLowerCase().includes(searchTerm.toLowerCase()) || 
    s.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentGlobalScale = slide?.type === 'quiz' ? settings.quizScale : slide?.type === 'fact' ? settings.factScale : 1;

  if (isAdmin) {
    const activeSlide = slides[editingIdx];
    const contentList = Array.isArray(activeSlide?.content) ? activeSlide.content : [activeSlide?.content as string];
    
    return (
      <div className="fixed inset-0 bg-[#0a0a0c] text-white flex flex-col md:flex-row z-[200] font-sans overflow-hidden">
        <div className={`${isSidebarOpen ? 'w-full md:w-96' : 'w-0'} border-r border-white/10 flex flex-col bg-[#0d0d0f] transition-all duration-500 overflow-hidden relative shrink-0`}>
          <div className="p-5 border-b border-white/5 bg-[#121215] flex items-center justify-between min-w-[384px]">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-600 rounded-lg"><Layers size={18}/></div>
              <h2 className="text-xs font-black uppercase tracking-widest text-white">Advanced CMS</h2>
            </div>
            <button onClick={() => setIsSidebarOpen(false)} className="md:hidden text-gray-500 hover:text-white"><X size={20}/></button>
          </div>
          
          <div className="flex border-b border-white/5 bg-[#0d0d0f] min-w-[384px]">
            {[
              { id: 'slides', label: 'Slides', icon: <LayoutGrid size={14}/> },
              { id: 'settings', label: 'Styling', icon: <Sliders size={14}/> },
              { id: 'projects', label: 'Projects', icon: <FolderOpen size={14}/> }
            ].map(tab => (
              <button 
                key={tab.id}
                onClick={() => setAdminTab(tab.id as any)}
                className={`flex-1 p-4 text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all ${adminTab === tab.id ? 'bg-blue-600/10 text-blue-400 border-b-2 border-blue-500' : 'text-gray-500 hover:bg-white/5'}`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar min-w-[384px] bg-[#0d0d0f]">
            {adminTab === 'slides' && (
              <div className="p-4 space-y-3">
                <div className="relative">
                  <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"/>
                  <input type="text" placeholder="Search slides..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full bg-[#121215] border border-white/5 rounded-xl pl-9 pr-4 py-3 text-xs focus:border-blue-500 outline-none transition-all" />
                </div>
                <div className="space-y-1">
                  {filteredSlides.map((s, i) => {
                    const globalIdx = slides.findIndex(gs => gs.id === s.id);
                    return (
                      <div key={s.id} onClick={() => setEditingIdx(globalIdx)} className={`p-3 rounded-xl cursor-pointer transition-all border flex items-center gap-3 ${editingIdx === globalIdx ? 'bg-blue-600/20 border-blue-500/50' : 'bg-transparent border-transparent hover:bg-white/5'}`}>
                        <span className="text-[10px] font-mono text-gray-600">{(globalIdx + 1).toString().padStart(3, '0')}</span>
                        <div className="flex-1 overflow-hidden">
                          <p className="text-[11px] font-bold text-gray-200 truncate">{s.title}</p>
                          <span className="text-[9px] text-gray-500 uppercase font-black">{s.type}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {adminTab === 'settings' && (
              <div className="p-6 space-y-8">
                 <div className="space-y-6">
                   <h3 className="text-[10px] font-black text-blue-500 uppercase flex items-center gap-2"><LayoutGrid size={12}/> Global Type Overrides</h3>
                    {[
                      { label: 'All Quiz Slides Scale', key: 'quizScale' },
                      { label: 'All Fact Slides Scale', key: 'factScale' }
                    ].map(item => (
                      <div key={item.key} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <label className="text-[10px] font-bold text-gray-400">{item.label}</label>
                          <span className="text-[10px] font-mono text-blue-400">{(settings as any)[item.key]?.toFixed(2)}x</span>
                        </div>
                        <input type="range" min="0.5" max="1.5" step="0.01" value={(settings as any)[item.key] || 1} onChange={e => setSettings(prev => ({...prev, [item.key]: parseFloat(e.target.value)}))} className="w-full h-1 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-blue-500" />
                      </div>
                    ))}
                 </div>

                 <div className="space-y-6 pt-6 border-t border-white/5">
                   <h3 className="text-[10px] font-black text-gray-500 uppercase flex items-center gap-2"><LayoutGrid size={12}/> General Typography</h3>
                    {[
                      { label: 'Title Size', key: 'titleFontScale' },
                      { label: 'Body Content', key: 'bodyFontScale' },
                      { label: 'Fact Text', key: 'factFontScale' }
                    ].map(item => (
                      <div key={item.key} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <label className="text-[10px] font-bold text-gray-400">{item.label}</label>
                          <span className="text-[10px] font-mono text-blue-400">{(settings as any)[item.key]?.toFixed(2)}x</span>
                        </div>
                        <input type="range" min="0.5" max="2.0" step="0.01" value={(settings as any)[item.key]} onChange={e => setSettings(prev => ({...prev, [item.key]: parseFloat(e.target.value)}))} className="w-full h-1 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-blue-500" />
                      </div>
                    ))}
                 </div>

                 <div className="space-y-6 pt-6 border-t border-white/5">
                   <h3 className="text-[10px] font-black text-orange-500 uppercase flex items-center gap-2"><Maximize size={12}/> Layout Corrections</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <label className="text-[10px] font-bold text-gray-400">Nav Clearance (Bottom Padding)</label>
                        <span className="text-[10px] font-mono text-orange-400">{settings.defaultBottomPadding}px</span>
                      </div>
                      <input type="range" min="100" max="600" step="10" value={settings.defaultBottomPadding} onChange={e => setSettings(prev => ({...prev, defaultBottomPadding: parseInt(e.target.value)}))} className="w-full h-1 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-orange-500" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <label className="text-[10px] font-bold text-gray-400">Navigation Buttons Scale</label>
                        <span className="text-[10px] font-mono text-blue-400">{(settings.navScale || 1).toFixed(2)}x</span>
                      </div>
                      <input type="range" min="0.5" max="1.5" step="0.05" value={settings.navScale || 1} onChange={e => setSettings(prev => ({...prev, navScale: parseFloat(e.target.value)}))} className="w-full h-1 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-blue-500" />
                    </div>
                 </div>
              </div>
            )}

            {adminTab === 'projects' && (
              <div className="p-6 space-y-4">
                 <button onClick={handleCreateNewProject} className="w-full py-4 bg-blue-600 rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20"><Plus size={16}/> New Project</button>
                 <div className="space-y-2 pt-4">
                   <h3 className="text-[10px] font-black text-gray-600 uppercase">Available Batches</h3>
                   {projects.map(p => (
                     <div key={p.id} onClick={() => setActiveProjectId(p.id)} className={`p-4 rounded-xl border cursor-pointer transition-all ${activeProjectId === p.id ? 'border-blue-500 bg-blue-600/10' : 'border-white/5 bg-[#121215] hover:border-white/10'}`}>
                        <p className="text-[11px] font-bold">{p.name}</p>
                        <p className="text-[9px] text-gray-500 mt-1">{new Date(p.created_at || '').toLocaleDateString()}</p>
                     </div>
                   ))}
                 </div>
              </div>
            )}
          </div>

          <div className="p-5 border-t border-white/5 bg-[#121215] space-y-3 min-w-[384px]">
            <button onClick={syncToCloud} className="w-full py-4 bg-green-600 rounded-xl text-[11px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-green-500 transition-all shadow-lg shadow-green-600/10">
              {isSyncing ? <RefreshCw className="animate-spin" size={14}/> : (syncSuccess ? <CheckCircle2 size={14}/> : <Save size={14}/>)}
              {syncSuccess ? 'UPDATED CLOUD' : 'SYNC TO CLOUD'}
            </button>
            <button onClick={() => setIsAdmin(false)} className="w-full py-4 bg-gray-800 rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-gray-700 transition-all">Exit Admin</button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 md:p-12 bg-[#050506] custom-scrollbar flex flex-col">
          {!isSidebarOpen && <button onClick={() => setIsSidebarOpen(true)} className="fixed top-6 left-6 p-3 bg-blue-600 rounded-xl shadow-xl z-[210]"><Menu size={20}/></button>}
          
          <div className="max-w-6xl mx-auto w-full space-y-10 pb-40">
             <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/5 pb-8">
               <div className="space-y-1">
                 <h1 className="text-3xl font-black text-white tracking-tighter">Editing Slide {editingIdx + 1}</h1>
                 <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">{activeSlide?.type} mode — {activeSlide?.id}</p>
               </div>
               <div className="flex gap-4">
                  <div className="px-4 py-2 bg-[#121215] border border-white/10 rounded-xl flex items-center gap-3">
                    <span className="text-[10px] font-black text-gray-500 uppercase">Individual Scale Override</span>
                    <input type="range" min="0.5" max="1.5" step="0.05" value={activeSlide?.contentScale || 1} onChange={e => { const s = [...slides]; s[editingIdx].contentScale = parseFloat(e.target.value); setSlides(s); }} className="w-24 h-1 accent-blue-600" />
                  </div>
               </div>
             </div>

             <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-4 space-y-6">
                   <div className="space-y-2">
                     <label className="text-[10px] font-black text-gray-500 uppercase">English Header</label>
                     <input type="text" value={activeSlide?.title || ''} onChange={e => { const s = [...slides]; s[editingIdx].title = e.target.value; setSlides(s); }} className="w-full bg-[#121215] border border-white/10 p-4 rounded-xl text-sm font-bold focus:border-blue-500 outline-none" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-[10px] font-black text-gray-500 uppercase">Hindi Sub-Header</label>
                     <input type="text" value={activeSlide?.subtitle || ''} onChange={e => { const s = [...slides]; s[editingIdx].subtitle = e.target.value; setSlides(s); }} className="w-full bg-[#121215] border border-white/10 p-4 rounded-xl text-sm font-bold focus:border-blue-500 outline-none" />
                   </div>
                   {activeSlide?.type === 'fact' && (
                     <div className="space-y-2 pt-4">
                       <label className="text-[10px] font-black text-gray-500 uppercase">Image URL</label>
                       <input type="text" value={activeSlide?.imageUrl || ''} onChange={e => { const s = [...slides]; s[editingIdx].imageUrl = e.target.value; setSlides(s); }} className="w-full bg-[#121215] border border-white/10 p-4 rounded-xl text-[10px] font-mono focus:border-blue-500 outline-none" />
                     </div>
                   )}
                </div>

                <div className="lg:col-span-8 space-y-4">
                   <label className="text-[10px] font-black text-gray-500 uppercase block mb-2">Verbatim Content Blocks</label>
                   {contentList.map((box, bIdx) => (
                     <div key={bIdx} className="bg-[#121215] border border-white/10 p-1 rounded-2xl relative group focus-within:border-blue-500/50 transition-all">
                        <div className="px-4 py-2 border-b border-white/5 flex items-center justify-between">
                           <button onClick={() => applyHighlightToBox(bIdx)} className="flex items-center gap-2 px-3 py-1.5 bg-[#f0ff00] text-black rounded-lg text-[10px] font-black uppercase hover:scale-105 transition-all shadow-lg active:scale-95"><Highlighter size={12}/> Highlight Text</button>
                           <span className="text-[9px] font-black text-gray-600 uppercase">Block {bIdx + 1}</span>
                        </div>
                       <textarea 
                         ref={el => boxRefs.current[bIdx] = el}
                         value={box}
                         onFocus={() => setFocusedBoxIdx(bIdx)}
                         onChange={e => {
                           const s = [...slides];
                           const c = Array.isArray(s[editingIdx].content) ? [...s[editingIdx].content as string[]] : [s[editingIdx].content as string];
                           c[bIdx] = e.target.value;
                           s[editingIdx].content = c;
                           setSlides(s);
                         }}
                         className="w-full h-40 bg-transparent border-none p-4 text-sm font-bold focus:ring-0 outline-none resize-none custom-scrollbar leading-relaxed"
                       />
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#00040a] text-white flex flex-col items-center justify-center overflow-hidden font-sans relative select-none">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_#0b1a33_0%,_#000000_100%)] opacity-85" />
      
      <form onSubmit={handleJumpToSlide} className="fixed bottom-6 left-6 z-[100] group opacity-20 hover:opacity-100 transition-all duration-500">
        <div className="flex items-center gap-2 bg-gray-900/60 backdrop-blur-3xl px-3 py-1.5 rounded-full border border-white/10 shadow-2xl">
          <input type="text" placeholder={(currentIdx + 1).toString()} value={jumpValue} onChange={e => setJumpValue(e.target.value)} className="w-10 bg-transparent text-[10px] font-mono text-center border-none focus:ring-0 text-blue-400 placeholder-gray-700" />
          <span className="text-[9px] text-gray-700 font-black">/ {slides.length}</span>
        </div>
      </form>

      <div className="fixed top-4 right-4 z-[100] flex gap-3">
        <button onClick={() => setIsAdmin(true)} className="p-3 bg-gray-900/40 backdrop-blur-xl rounded-xl border border-white/10 text-gray-500 hover:text-blue-400 transition-all shadow-xl active:scale-90"><Settings size={18} /></button>
        <button onClick={toggleFullscreen} className="p-3 bg-gray-900/40 backdrop-blur-xl rounded-xl border border-white/10 text-gray-500 hover:text-green-400 transition-all shadow-xl active:scale-90">{isFullscreen ? <Minimize size={18}/> : <Maximize size={18}/>}</button>
      </div>
      
      <div ref={slideRef} className="relative z-10 w-full h-full md:max-w-[1920px] md:aspect-[16/9] bg-[#00040d] overflow-hidden flex flex-col shadow-2xl">
        {slide ? (
          <div 
            key={currentIdx} 
            className="w-full h-full flex flex-col pt-24 md:pt-32 px-6 md:px-16 relative overflow-y-auto custom-scrollbar scroll-smooth"
            style={{ paddingBottom: `${settings.defaultBottomPadding}px` }}
          >
            <div className={`absolute top-4 md:top-6 left-4 md:left-6 right-4 md:right-6 min-h-[60px] md:h-24 bg-[#0d1c3a]/70 backdrop-blur-3xl flex items-center px-6 md:px-10 border border-white/10 z-20 rounded-2xl ${GLOW_SHADOW}`}>
              <div className="w-1.5 md:w-2 h-8 md:h-12 bg-[#ea580c] mr-4 md:mr-6 rounded-full shadow-[0_0_20px_rgba(234,88,12,0.8)] shrink-0" />
              <div className="animate-in slide-in-from-left duration-700 w-full overflow-hidden">
                <h1 className="font-black text-white uppercase truncate tracking-tight leading-none" style={{ fontSize: getScaledSize(24, settings.titleFontScale) }}>{slide.title}</h1>
                <p className="text-[12px] md:text-lg font-bold text-gray-300 opacity-90 truncate mt-1">{slide.subtitle}</p>
              </div>
            </div>

            <div className="flex-1 flex flex-col items-center transition-all duration-700 w-full" style={{ transform: `scale(${(slide.contentScale || 1) * (currentGlobalScale || 1)}) translateY(${slide.contentYOffset || 0}px)`, transformOrigin: 'top center' }}>
              {slide.type === 'quiz' && (
                <div className="flex-1 flex flex-col items-center justify-start pt-6 space-y-6 md:space-y-10 animate-in slide-in-from-bottom duration-1000 w-full">
                  <div className={`w-full max-w-full border border-white/10 rounded-[1.5rem] md:rounded-[3rem] text-center shadow-2xl bg-[#0d1c3a]/40 backdrop-blur-2xl ${GLOW_SHADOW}`} style={{ padding: `${settings.boxPadding}px` }}>
                    <h3 className="font-black leading-tight text-white break-words" style={{ fontSize: getScaledSize(28, settings.bodyFontScale) }}>{Array.isArray(slide.content) ? renderHighlightedText(slide.content[0]) : renderHighlightedText(slide.content as string)}</h3>
                    {Array.isArray(slide.content) && slide.content[1] && <p className="text-gray-400 font-bold opacity-70 mt-6 break-words" style={{ fontSize: getScaledSize(18, settings.bodyFontScale) }}>{renderHighlightedText(slide.content[1])}</p>}
                  </div>
                  <div className="w-full max-w-full flex flex-col gap-3 md:gap-5">
                    {slide.options?.map((opt) => {
                      const isCorrect = slide.correctOptionId === opt.id && slide.isRevealed;
                      return (
                        <div key={opt.id} className={`p-4 md:p-6 rounded-xl border transition-all duration-700 flex items-center gap-4 md:gap-10 shadow-xl ${isCorrect ? `bg-[#2563eb]/70 border-yellow-400/70 shadow-[0_0_60px_rgba(250,204,21,0.3)] scale-[1.01]` : 'bg-[#1e40af]/15 border-white/5 hover:bg-[#1e40af]/25'}`}>
                          <div className={`text-base md:text-xl font-black w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl shrink-0 ${isCorrect ? 'text-yellow-400 bg-black/50' : 'text-gray-500 bg-white/5'}`}>{opt.label}</div>
                          <span className={`font-black flex-1 break-words leading-tight ${isCorrect ? 'text-yellow-400' : 'text-gray-200'}`} style={{ fontSize: getScaledSize(22, settings.bodyFontScale) }}>{renderHighlightedText(opt.text)}</span>
                          {isCorrect && <Check size={24} className="text-yellow-400 animate-in zoom-in shrink-0"/>}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
              
              {slide.type === 'fact' && (
                <div className="flex-1 flex flex-col lg:flex-row gap-6 items-center justify-center animate-in slide-in-from-right duration-1000 w-full pt-8">
                  <div className="flex-1 w-full space-y-4">
                    {Array.isArray(slide.content) && (slide.content as string[]).map((line, lIdx) => {
                      const { main, translation } = splitTranslation(line);
                      return (
                        <div key={lIdx} className={`bg-[#1e40af]/20 border-l-[10px] border-[#ea580c] p-5 md:p-8 rounded-xl border border-white/10 shadow-2xl transition-all hover:bg-[#1e40af]/30 flex flex-col ${GLOW_SHADOW}`}>
                          <div className="overflow-hidden">
                            <p className="font-black text-white leading-snug break-words" style={{ fontSize: getScaledSize(22, settings.factFontScale) }}>{renderHighlightedText(main)}</p>
                            {translation && <p className="font-bold text-gray-400 mt-4 opacity-80 leading-relaxed break-words" style={{ fontSize: getScaledSize(16, settings.factFontScale) }}>{renderHighlightedText(translation)}</p>}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  {slide.imageUrl && (
                    <div className="w-full lg:w-[45%] flex items-center justify-center p-2">
                      <img src={slide.imageUrl} alt="topic" className="max-w-full rounded-[2rem] shadow-2xl border border-white/10 object-cover aspect-video lg:aspect-auto" />
                    </div>
                  )}
                </div>
              )}
              
              {slide.type === 'title' && (
                <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6 md:space-y-12 animate-in zoom-in duration-1000 w-full">
                  <div className={`bg-[#ea580c] px-8 py-3 rounded-full text-sm md:text-xl font-black uppercase tracking-widest shadow-2xl border border-white/30 ${GLOW_SHADOW}`}>Current Affairs</div>
                  <h1 className="font-black text-white px-6 leading-tight break-words" style={{ fontSize: getScaledSize(64, settings.titleFontScale) }}>{renderHighlightedText(slide.title || '')}</h1>
                  <div className="space-y-4 px-6">
                    {Array.isArray(slide.content) && (slide.content as string[]).map((c, i) => (
                      <p key={i} className="font-black text-blue-500 uppercase tracking-[0.2em] shadow-sm break-words" style={{ fontSize: getScaledSize(30, settings.bodyFontScale) }}>{renderHighlightedText(c)}</p>
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

      <div className="fixed bottom-4 md:bottom-8 left-0 right-0 z-50 pointer-events-none px-6 flex flex-col items-center">
        <div className="w-full max-w-[1920px] relative flex items-center justify-center gap-6">
          <div className="flex gap-4 pointer-events-auto bg-black/80 backdrop-blur-3xl p-1.5 rounded-full border border-white/10 shadow-[0_0_80px_rgba(0,0,0,1)]" style={{ transform: `scale(${settings.navScale || 1})` }}>
            <button onClick={() => setCurrentIdx(p => Math.max(0, p - 1))} className="px-6 md:px-10 py-3 md:py-4 bg-[#121215] border border-white/5 rounded-full font-black text-[10px] md:text-xs hover:bg-blue-600 hover:text-white transition-all disabled:opacity-10 flex items-center gap-2 uppercase tracking-widest" disabled={currentIdx === 0}><ChevronLeft size={16}/> Prev</button>
            <div className="px-4 flex items-center border-x border-white/10">
              <span className="text-[10px] font-mono font-bold text-blue-400">{(currentIdx + 1).toString().padStart(3, '0')}</span>
              <span className="mx-2 text-[9px] text-gray-600 font-black">/</span>
              <span className="text-[10px] font-mono text-gray-600">{slides.length.toString().padStart(3, '0')}</span>
            </div>
            <button onClick={() => setCurrentIdx(p => Math.min(slides.length - 1, p + 1))} className="px-6 md:px-10 py-3 md:py-4 bg-[#121215] border border-white/5 rounded-full font-black text-[10px] md:text-xs hover:bg-blue-600 hover:text-white transition-all disabled:opacity-10 flex items-center gap-2 uppercase tracking-widest" disabled={currentIdx === slides.length - 1}>Next <ChevronRight size={16}/></button>
          </div>
          
          {slide?.type === 'quiz' && (
            <div className="pointer-events-auto">
              <button onClick={toggleReveal} className={`p-3 md:p-4 bg-yellow-400 text-black rounded-full shadow-[0_0_40px_rgba(250,204,21,0.5)] hover:scale-110 active:scale-95 transition-all animate-bounce-subtle flex items-center justify-center`}><CheckCircle2 size={24}/></button>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes bounce-subtle { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
        .animate-bounce-subtle { animation: bounce-subtle 2.5s infinite ease-in-out; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(234, 88, 12, 0.2); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(234, 88, 12, 0.4); }
        * { overflow-wrap: anywhere; }
      `}</style>
    </div>
  );
};

export default App;
