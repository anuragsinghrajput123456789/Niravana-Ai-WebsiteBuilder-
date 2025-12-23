import React, { useState, useEffect } from 'react';
import { MdOutlineArrowUpward, MdDelete, MdHistory } from "react-icons/md";
import { ImNewTab } from "react-icons/im";
import { IoMdDownload } from "react-icons/io";
import { BiCodeAlt } from "react-icons/bi";
import { FaEyeSlash, FaTabletAlt, FaEye } from "react-icons/fa";
import Editor from '@monaco-editor/react';
import { RiComputerLine } from "react-icons/ri";
import { ImMobile2 } from "react-icons/im";
import { IoMdClose } from "react-icons/io";
import { getChats, saveChat, deleteChat, generateWebsite } from '../api';
import { motion, AnimatePresence } from 'framer-motion';

const ActionButton = ({ onClick, children, className = "" }) => (
  <button
    onClick={onClick}
    className={`flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-gray-200 bg-gray-700/50 border border-gray-600 rounded-lg hover:bg-gray-700 transition-all duration-300 ${className}`}
  >
    {children}
  </button>
);

const Home = () => {
  const [prompt, setPrompt] = useState("");
  const [isShowCode, setIsShowCode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [device, setDevice] = useState('desktop');
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const token = localStorage.getItem('token');

  const [code, setCode] = useState(
    `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to WebBuilder</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-900 text-white flex items-center justify-center h-screen flex-col font-sans p-5">
    <div class="text-center">
        <h1 class="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-4">
            Welcome to Nirvana-Ai
        </h1>
        <p class="text-gray-400 text-lg md:text-xl">
            Your AI-generated website will appear here. Start by describing what you want to build!
        </p>
    </div>
</body>
</html>`);

  useEffect(() => {
    if (token) {
      fetchHistory();
    }
  }, [token]);

  const fetchHistory = async () => {
    try {
      const { data } = await getChats();
      setHistory(data);
    } catch (error) {
      console.error('Failed to fetch history', error);
    }
  };

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    if (window.confirm('Are you sure you want to delete this chat?')) {
      try {
        await deleteChat(id);
        setHistory(history.filter(chat => chat._id !== id));
        toast.success('Chat deleted');
      } catch (error) {
        toast.error('Failed to delete chat');
      }
    }
  };

  const loadChat = (chat) => {
    setPrompt(chat.prompt);
    setCode(chat.code);
    setShowHistory(false);
  };

  const extractCode = (response) => {
    const match = response.match(/```html\n([\s\S]*?)```/);
    return match ? match[1].trim() : response.trim();
  };

  const downloadCode = () => {
    const blob = new Blob([code], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "index.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success("Code downloaded!");
  };

  async function getResponse() {
    if (prompt.trim() === "") {
      toast.error("Please enter a prompt!");
      return;
    }

    setLoading(true);
    toast.info("Generating your website...");

    try {
      const { data } = await generateWebsite(prompt);

      const generatedCode = extractCode(data.result);
      setCode(generatedCode);
      toast.success("Website generated successfully!");

      if (token) {
        await saveChat({ prompt, code: generatedCode });
        fetchHistory();
      }

    } catch (error) {
      console.error("AI Generation Error:", error);
      toast.error("Failed to generate code. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const deviceWidths = {
    desktop: 'w-full',
    tablet: 'w-[768px]',
    mobile: 'w-[390px]',
  };

  return (
    <>
      <div className="relative">

        {/* History Toggle Button */}
        {token && (
          <button
            onClick={() => setShowHistory(true)}
            className="fixed left-4 top-24 z-40 p-3 bg-gray-800 rounded-full text-white shadow-lg hover:bg-gray-700 transition"
            title="View History"
          >
            <MdHistory size={24} />
          </button>
        )}

        {/* History Sidebar */}
        <AnimatePresence>
          {showHistory && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowHistory(false)}
                className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
              />
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                className="fixed left-0 top-0 bottom-0 w-80 bg-gray-900 z-50 shadow-2xl border-r border-gray-800 p-4 overflow-y-auto"
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">History</h2>
                  <button onClick={() => setShowHistory(false)} className="p-1 hover:bg-gray-800 rounded-full">
                    <IoMdClose size={24} />
                  </button>
                </div>
                <div className="space-y-4">
                  {history.length === 0 ? (
                    <p className="text-gray-500 text-center">No history yet.</p>
                  ) : (
                    history.map((chat) => (
                      <div
                        key={chat._id}
                        onClick={() => loadChat(chat)}
                        className="p-3 bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-750 border border-gray-700 group transition-all"
                      >
                        <p className="text-sm text-gray-300 line-clamp-2 mb-2">{chat.prompt}</p>
                        <div className="flex justify-between items-center text-xs text-gray-500">
                          <span>{new Date(chat.createdAt).toLocaleDateString()}</span>
                          <button
                            onClick={(e) => handleDelete(e, chat._id)}
                            className="opacity-0 group-hover:opacity-100 p-1 hover:bg-red-500/20 hover:text-red-400 rounded transition-all"
                          >
                            <MdDelete size={16} />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className='text-3xl md:text-5xl font-bold'>
            Create beautiful websites with <span className='bg-gradient-to-br from-rose-700 via-blue-600 to-rose-800 bg-clip-text text-transparent'>Nirvana-Ai</span>
          </h1>
          <p className='mt-3 text-lg text-gray-400'>
            Describe your website, and watch the magic happen.
          </p>
        </div>

        {/* Input Section */}
        <div className="relative mb-12">
          <textarea
            onChange={(e) => setPrompt(e.target.value)}
            value={prompt}
            placeholder='e.g., "Create a modern landing page for a SaaS company that sells AI productivity tools..."'
            className="w-full h-28 p-4 bg-gray-900 border-2 border-gray-700 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
          />
          <button
            onClick={getResponse}
            disabled={loading}
            className='absolute bottom-4 right-4 flex items-center gap-2 px-5 py-2.5 bg-purple-600 rounded-lg hover:bg-purple-700 disabled:bg-gray-500 disabled:cursor-not-allowed transition-all font-semibold'
          >
            <MdOutlineArrowUpward />
            Submit
          </button>
        </div>

        {/* Preview Section */}
        <div className="preview-container bg-gray-900/50 border border-gray-800 rounded-xl shadow-2xl h-[70vh] flex flex-col">
          <div className="header flex items-center justify-between p-3 border-b border-gray-800">
            <h3 className='font-bold text-lg text-gray-300'>Live Preview</h3>
            <div className="actions flex items-center gap-3">
              <ActionButton onClick={() => setIsModalOpen(true)}>
                <ImNewTab /> New Tab
              </ActionButton>
              <ActionButton onClick={downloadCode}>
                <IoMdDownload /> Download
              </ActionButton>
              <ActionButton onClick={() => setIsShowCode(!isShowCode)}>
                {isShowCode ? <><FaEyeSlash /> Hide Code</> : <><BiCodeAlt /> Show Code</>}
              </ActionButton>
            </div>
          </div>

          <div className="content-area flex-grow relative">
            {loading && (
              <div className='absolute inset-0 bg-gray-900/80 backdrop-blur-sm z-10 flex flex-col items-center justify-center'>
                <FadeLoader color='#9933ff' />
                <h3 className='text-xl mt-6 font-semibold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent'>
                  Generating your masterpiece...
                </h3>
              </div>
            )}
            {isShowCode ? (
              <Editor
                height="100%"
                theme='vs-dark'
                defaultLanguage="html"
                value={code}
                onChange={(value) => setCode(value || "")}
                options={{ wordWrap: "on" }}
              />
            ) : (
              <iframe srcDoc={code} title="Live Preview" className='w-full h-full bg-white' />
            )}
          </div>
        </div>

        {/* Responsive Preview Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in">
            <div className="bg-gray-800 rounded-lg shadow-2xl w-full h-full flex flex-col overflow-hidden border border-gray-700">
              <div className="header flex items-center justify-between p-3 border-b border-gray-700 flex-shrink-0">
                <div className="device-toggles flex items-center gap-2">
                  <button onClick={() => setDevice('desktop')} className={`p-2 rounded-md ${device === 'desktop' ? 'bg-purple-600' : 'bg-gray-700 hover:bg-gray-600'}`}><RiComputerLine size={20} /></button>
                  <button onClick={() => setDevice('tablet')} className={`p-2 rounded-md ${device === 'tablet' ? 'bg-purple-600' : 'bg-gray-700 hover:bg-gray-600'}`}><FaTabletAlt size={20} /></button>
                  <button onClick={() => setDevice('mobile')} className={`p-2 rounded-md ${device === 'mobile' ? 'bg-purple-600' : 'bg-gray-700 hover:bg-gray-600'}`}><ImMobile2 size={20} /></button>
                </div>
                <h3 className='font-bold text-lg text-gray-300'>Responsive Preview</h3>
                <button onClick={() => setIsModalOpen(false)} className="p-2 rounded-full bg-gray-700 hover:bg-red-500 transition-colors">
                  <IoMdClose size={22} />
                </button>
              </div>
              <div className="iframe-wrapper flex-grow flex justify-center items-center p-4 bg-gray-900 overflow-auto">
                <iframe
                  srcDoc={code}
                  title="Responsive Preview"
                  className={`bg-white shadow-lg transition-all duration-300 ease-in-out ${deviceWidths[device]}`}
                  style={{ height: '100%' }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;