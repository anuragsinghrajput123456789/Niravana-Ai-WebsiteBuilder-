import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsStars, BsFolder, BsSearch, BsClockHistory, BsCommand, BsPlayFill, BsDownload, BsCodeSlash } from "react-icons/bs";
import { RiComputerLine, RiSmartphoneLine, RiTabletLine } from "react-icons/ri";
import Editor from '@monaco-editor/react';
import { getChats, saveChat, generateWebsite } from '../api';
import { toast } from 'react-toastify';
import heroBg from '../assets/hero-bg.png';

const DEFAULT_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nirvana AI - Default Template</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Inter', sans-serif; background-color: #020202; color: #fff; overflow-x: hidden; }
    .glass { background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.05); }
    .text-gradient { background: linear-gradient(to right, #ff3333, #cc0000); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    .aurora { position: absolute; width: 600px; height: 600px; background: radial-gradient(circle, rgba(255,0,0,0.1) 0%, transparent 70%); filter: blur(60px); z-index: -1; }
  </style>
</head>
<body class="min-h-screen relative flex flex-col items-center justify-center p-6">
  <div class="aurora top-0 left-0"></div>
  <div class="aurora bottom-0 right-0"></div>
  
  <nav class="w-full max-w-6xl flex justify-between items-center py-6 absolute top-0 z-10">
    <div class="text-2xl font-bold tracking-widest font-serif">NIRVANA<span class="text-red-500">.</span></div>
    <div class="space-x-8 text-xs font-bold tracking-widest text-gray-500 uppercase">
      <span class="hover:text-white transition cursor-pointer">Studio</span>
      <span class="hover:text-white transition cursor-pointer">Docs</span>
    </div>
  </nav>

  <main class="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between z-10 mt-12 gap-12">
    <div class="max-w-xl space-y-6">
      <div class="inline-block px-4 py-1 rounded-full glass text-xs font-bold tracking-widest text-red-500 uppercase mb-4 border border-red-500/20 shadow-[0_0_15px_rgba(255,0,0,0.1)]">Studio Initialized</div>
      <h1 class="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight uppercase font-serif">
        TRY <br/><span class="text-gradient">NIRVANA.</span>
      </h1>
      <p class="text-lg text-gray-400 font-light leading-relaxed">
        Command the Nirvana engine to synthesize your digital reality. Enter a prompt to generate production-ready code.
      </p>
    </div>
    
    <div class="relative w-full max-w-md flex justify-center items-center">
      <div class="absolute inset-0 bg-red-900/20 blur-[100px] rounded-full"></div>
      <div class="w-64 h-64 border border-white/10 rounded-full glass flex items-center justify-center shadow-[0_0_50px_rgba(255,0,0,0.1)] relative z-10 overflow-hidden group">
         <div class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500 z-10"></div>
         <span class="text-xs tracking-widest text-white uppercase font-bold z-20 absolute">Awaiting Input</span>
      </div>
    </div>
  </main>
</body>
</html>`;

const Studio = () => {
    const [prompt, setPrompt] = useState("");
    const [code, setCode] = useState(DEFAULT_CODE);
    const [viewMode, setViewMode] = useState('preview'); // 'preview' | 'code'
    const [deviceMode, setDeviceMode] = useState('desktop'); // 'desktop' | 'tablet' | 'mobile'
    const [loading, setLoading] = useState(false);
    const [loadingState, setLoadingState] = useState('');
    const [history, setHistory] = useState([]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (token) fetchHistory();
    }, [token]);

    const fetchHistory = async () => {
        try {
            const { data } = await getChats();
            setHistory(data);
        } catch (error) {
            console.error('Failed to fetch history', error);
        }
    };

    const extractCode = (response) => {
        const match = response.match(/```html\n([\s\S]*?)```/);
        return match ? match[1].trim() : response.trim();
    };

    const handleGenerate = async (isUpdate = false) => {
        if (!prompt.trim()) {
            toast.error("Please describe what you want to build.");
            return;
        }

        setLoading(true);
        setLoadingState(isUpdate ? 'Analyzing update request...' : 'Analyzing prompt...');
        
        try {
            setTimeout(() => setLoadingState('Synthesizing React components...'), 1500);
            setTimeout(() => setLoadingState('Applying Tailwind utility classes...'), 3000);
            
            const currentCode = isUpdate ? code : null;
            const { data } = await generateWebsite(prompt, currentCode);
            const generatedCode = extractCode(data.result);
            setCode(generatedCode);
            
            if (token) {
                await saveChat({ prompt, code: generatedCode });
                fetchHistory();
            }
            toast.success(isUpdate ? "Code updated successfully!" : "Generation complete!");
        } catch (error) {
            toast.error(isUpdate ? "Failed to update code." : "Failed to generate code.");
        } finally {
            setLoading(false);
        }
    };

    const loadHistoryItem = (item) => {
        setPrompt(item.prompt);
        setCode(item.code);
    };

    const downloadCode = () => {
        const blob = new Blob([code], { type: "text/html" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "nirvana-app.html";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="h-[calc(100vh-80px)] mt-[80px] w-full flex bg-[var(--bg-primary)] overflow-hidden font-sans relative">
            

            {/* Sidebar */}
            <motion.div 
                initial={{ x: -300 }}
                animate={{ x: isSidebarOpen ? 0 : -300 }}
                className={`absolute md:relative z-30 h-full w-64 border-r border-[var(--border-light)] bg-[var(--bg-secondary)] flex flex-col transition-all duration-300 ${isSidebarOpen ? 'left-0' : '-left-64 hidden md:flex md:-ml-64'}`}
            >
                <div className="p-4 border-b border-[var(--border-light)]">
                    <div className="relative">
                        <BsSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xs" />
                        <input 
                            type="text" 
                            placeholder="Search projects..." 
                            className="w-full bg-[var(--bg-primary)] border border-[var(--border-light)] rounded-md py-1.5 pl-8 pr-3 text-xs text-white focus:outline-none focus:border-white/30"
                        />
                    </div>
                </div>
                
                <div className="flex-1 overflow-y-auto p-2">
                    <div className="mb-4">
                        <div className="px-3 py-2 flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            <BsFolder /> Library
                        </div>
                        <div className="space-y-0.5">
                            <button className="w-full text-left px-3 py-1.5 text-sm text-gray-300 hover:bg-white/5 rounded transition-colors flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-blue-500"></span> Recent
                            </button>
                            <button className="w-full text-left px-3 py-1.5 text-sm text-gray-300 hover:bg-white/5 rounded transition-colors flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-purple-500"></span> Favorites
                            </button>
                        </div>
                    </div>

                    <div>
                        <div className="px-3 py-2 flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            <BsClockHistory /> History
                        </div>
                        <div className="space-y-1">
                            {history.length === 0 ? (
                                <p className="px-3 py-2 text-xs text-gray-600 italic">No history yet</p>
                            ) : (
                                history.map(item => (
                                    <button 
                                        key={item._id}
                                        onClick={() => loadHistoryItem(item)}
                                        className="w-full text-left px-3 py-2 text-xs text-gray-400 hover:bg-white/5 hover:text-white rounded transition-colors truncate"
                                    >
                                        {item.prompt}
                                    </button>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Main Workspace */}
            <div className="flex-1 flex flex-col min-w-0 bg-[var(--bg-primary)]">
                
                {/* Top Control Bar */}
                <header className="h-12 border-b border-[var(--border-light)] bg-[var(--bg-primary)] flex items-center justify-between px-4">
                    <div className="flex items-center gap-4">
                        <button 
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="text-gray-400 hover:text-white transition-colors"
                            title="Toggle History Sidebar"
                        >
                            <BsFolder className="text-xl" />
                        </button>
                        <div className="flex items-center gap-1 bg-[var(--bg-secondary)] rounded-md p-1 border border-[var(--border-light)]">
                        <button 
                            onClick={() => setViewMode('preview')}
                            className={`px-3 py-1 text-xs font-medium rounded-sm transition-all ${viewMode === 'preview' ? 'bg-[#222] text-white shadow-sm' : 'text-gray-500 hover:text-gray-300'}`}
                        >
                            Preview
                        </button>
                        <button 
                            onClick={() => setViewMode('code')}
                            className={`px-3 py-1 text-xs font-medium rounded-sm transition-all ${viewMode === 'code' ? 'bg-[#222] text-white shadow-sm' : 'text-gray-500 hover:text-gray-300'}`}
                        >
                            Code
                        </button>
                    </div>
                    </div>

                    <div className="flex items-center gap-2">
                        {viewMode === 'preview' && (
                            <div className="flex items-center gap-1 mr-4 text-gray-500">
                                <button onClick={() => setDeviceMode('desktop')} className={`p-1.5 rounded hover:bg-white/5 ${deviceMode === 'desktop' ? 'text-white' : ''}`}><RiComputerLine /></button>
                                <button onClick={() => setDeviceMode('tablet')} className={`p-1.5 rounded hover:bg-white/5 ${deviceMode === 'tablet' ? 'text-white' : ''}`}><RiTabletLine /></button>
                                <button onClick={() => setDeviceMode('mobile')} className={`p-1.5 rounded hover:bg-white/5 ${deviceMode === 'mobile' ? 'text-white' : ''}`}><RiSmartphoneLine /></button>
                            </div>
                        )}
                        <button onClick={downloadCode} className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-md border border-[var(--border-light)] transition-all">
                            <BsDownload /> Export
                        </button>
                    </div>
                </header>

                {/* Main Content Area: Prompt + Preview */}
                <div className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">
                    
                    {/* Prompt Terminal (Left/Top) */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full lg:w-[450px] border-b lg:border-b-0 lg:border-r border-[var(--border-light)] bg-[var(--bg-secondary)]/80 backdrop-blur-md flex flex-col p-6 relative z-10 shadow-2xl"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-sm font-display font-bold flex items-center gap-2 text-white">
                                <BsCommand className="text-gray-400" /> Command Center
                            </h2>
                        </div>
                        
                        {/* Quick Ready Prompts */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            <button onClick={() => setPrompt("Create a responsive modern Navbar with logo, links, and dark/light toggle.")} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400 hover:text-white hover:bg-white/10 transition-colors">Navbar</button>
                            <button onClick={() => setPrompt("Design a visually rich Hero Section with gradient text and CTA buttons.")} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400 hover:text-white hover:bg-white/10 transition-colors">Hero Section</button>
                            <button onClick={() => setPrompt("Build a sleek SaaS Footer with multiple columns and newsletter signup.")} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400 hover:text-white hover:bg-white/10 transition-colors">Footer</button>
                            <button onClick={() => setPrompt("Create a premium landing page with glassmorphic cards and floating animations.")} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400 hover:text-white hover:bg-white/10 transition-colors">Landing Page</button>
                        </div>

                        <div className="flex-1 relative group flex flex-col">
                            <textarea
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                                placeholder="Describe the UI component or page you want to build. Be as specific as possible..."
                                className="w-full flex-1 bg-[var(--bg-primary)] text-sm text-gray-300 p-4 rounded-xl border border-[var(--border-light)] focus:outline-none focus:border-white/30 resize-none font-sans leading-relaxed shadow-inner"
                            />
                            
                            {/* Toolbar inside textarea */}
                            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                                <span className="text-[10px] font-mono text-gray-500">
                                    {prompt.length} chars
                                </span>
                                <div className="flex gap-2">
                                    <button className="p-1.5 text-gray-500 hover:text-white hover:bg-white/10 rounded transition-colors" title="Improve Prompt">
                                        <BsStars />
                                    </button>
                                    <button 
                                        onClick={() => handleGenerate(false)}
                                        disabled={loading || !prompt}
                                        className="flex items-center gap-2 px-6 py-2.5 bg-white text-black text-sm font-bold rounded-lg hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] disabled:opacity-50 disabled:scale-100 disabled:cursor-not-allowed transition-all"
                                    >
                                        <BsPlayFill className="text-lg" /> Generate
                                    </button>
                                    <button 
                                        onClick={() => handleGenerate(true)}
                                        disabled={loading || !prompt || code === DEFAULT_CODE}
                                        className="flex items-center gap-2 px-6 py-2.5 bg-white/10 text-white text-sm font-bold rounded-lg hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                    >
                                        <BsStars className="text-lg" /> Update
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Extra Actions */}
                        <div className="mt-4 grid grid-cols-2 gap-2">
                            <button className="py-2 px-3 text-xs font-medium text-gray-400 bg-[var(--bg-primary)] border border-[var(--border-light)] rounded-lg hover:text-white hover:border-white/20 transition-all flex justify-center items-center gap-2">
                                <BsCodeSlash /> Explain Code
                            </button>
                            <button className="py-2 px-3 text-xs font-medium text-gray-400 bg-[var(--bg-primary)] border border-[var(--border-light)] rounded-lg hover:text-white hover:border-white/20 transition-all flex justify-center items-center gap-2">
                                <BsStars /> Fix Errors
                            </button>
                        </div>
                    </motion.div>

                    {/* Preview/Editor Window (Right/Bottom) */}
                    <div className="flex-1 bg-[#020202] relative flex flex-col items-center justify-center overflow-hidden p-4">
                        
                        {/* Abstract Background for IDE */}
                        <div className="grid-bg opacity-20"></div>

                        {loading ? (
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/80 backdrop-blur-md"
                            >
                                <div className="w-16 h-16 border-2 border-white/20 border-t-white rounded-full animate-spin mb-6"></div>
                                <h3 className="text-sm font-mono tracking-widest uppercase text-white animate-pulse">
                                    {loadingState}
                                </h3>
                            </motion.div>
                        ) : null}

                        {viewMode === 'code' ? (
                            <div className="w-full h-full rounded-xl overflow-hidden border border-[var(--border-light)] shadow-2xl relative z-10">
                                <Editor
                                    height="100%"
                                    theme="vs-dark"
                                    defaultLanguage="html"
                                    value={code}
                                    onChange={(val) => setCode(val || "")}
                                    options={{
                                        minimap: { enabled: false },
                                        fontSize: 14,
                                        fontFamily: "'JetBrains Mono', monospace",
                                        padding: { top: 20 },
                                        scrollBeyondLastLine: false,
                                        smoothScrolling: true,
                                        cursorBlinking: "smooth"
                                    }}
                                />
                            </div>
                        ) : (
                            <motion.div 
                                layout
                                className={`bg-white rounded-xl overflow-hidden border border-[var(--border-light)] shadow-2xl relative z-10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                                    ${deviceMode === 'desktop' ? 'w-full h-full' : 
                                      deviceMode === 'tablet' ? 'w-[768px] h-[1024px] max-h-full scale-[0.85] origin-top' : 
                                      'w-[375px] h-[812px] max-h-full scale-[0.85] origin-top'}`}
                            >
                                <iframe 
                                    srcDoc={code} 
                                    className="w-full h-full bg-white"
                                    title="Live Preview"
                                />
                            </motion.div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Studio;
