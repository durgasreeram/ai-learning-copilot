import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassPanel } from '../components/ui/GlassPanel';
import { Button } from '../components/ui/Button';
import { LuminaLogo } from '../components/ui/LuminaLogo';
import * as Icons from 'lucide-react';
import { fadeIn } from '../animations/variants';
import { sendMessage } from "../services/chatService";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const SUGGESTED_PROMPTS = [
  "Explain Recursion in DSA",
  "Create FastAPI Roadmap",
  "Generate Python Quiz",
  "Explain JWT Authentication"
];


const CAPABILITIES = [
  { icon: Icons.HelpCircle, text: 'Ask questions' },
  { icon: Icons.ListChecks, text: 'Generate quizzes' },
  { icon: Icons.Map, text: 'Create learning roadmaps' },
  { icon: Icons.Code, text: 'Explain code' },
  { icon: Icons.FileText, text: 'Summarize notes' },
];

export const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [chatHistory, setChatHistory] = useState<any[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [searchParams] = useSearchParams();
  const activeChatId = searchParams.get('chat');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const loadChat = async (chatId: string) => {
    try {
      const token = localStorage.getItem("lumina-token");

      const response = await axios.get(
        `http://127.0.0.1:8000/ai/chat/${chatId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessages([
        {
          id: `user-${response.data.id}`,
          text: response.data.prompt,
          sender: "user",
          timestamp: new Date(),
        },
        {
          id: `ai-${response.data.id}`,
          text: response.data.response,
          sender: "ai",
          timestamp: new Date(),
        },
      ]);
    } catch (error) {
      console.error("Failed to load chat:", error);
    }
  };

  useEffect(() => {
    if (activeChatId) {
      loadChat(activeChatId);
    }
  }, [activeChatId]);

  const loadHistory = async () => {
    try {
      const token = localStorage.getItem("lumina-token");

      const response = await axios.get(
        "http://127.0.0.1:8000/ai/history",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setChatHistory(response.data);
      console.log("History:", response.data);
    } catch (error) {
      console.error("Failed to load history:", error);
    }
  };

  useEffect(() => {
    loadHistory();
  }, []);

  useEffect(() => {
    setMessages([]);
  }, [activeChatId]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async (text: string) => {
    if (!text.trim()) return;

    const newUserMsg: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMsg]);
    setInputValue('');
    setIsTyping(true);

    try {
      const token = localStorage.getItem("lumina-token");

      if (!token) {
        throw new Error("User not logged in");
      }

      const data = await sendMessage(text, token);

      await loadHistory();

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response,
        sender: "ai",
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, aiMessage]);

    } catch (error) {
      console.error(error);

      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, AI service is unavailable.",
        sender: "ai",
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, errorMessage]);

    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="flex flex-1 min-h-0 h-full gap-6 w-full max-w-[1400px] mx-auto overflow-hidden relative">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 -left-32 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col min-w-0 min-h-0 relative z-10 w-full">
        <GlassPanel className="flex-1 flex flex-col min-h-0 overflow-hidden p-0 relative border-white/5 shadow-2xl bg-black/40" glowColor="none">
          {/* Top Header */}
          <div className="flex items-center justify-between p-4 px-6 border-b border-white/5 bg-zinc-950/40 backdrop-blur-md z-20 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center border border-purple-500/30">
                <Icons.Bot className="w-4 h-4 text-purple-400" />
              </div>
              <div>
                <h1 className="text-sm font-bold text-white leading-tight">AI Learning Copilot</h1>
                <p className="text-xs text-zinc-400">{activeChatId ? chatHistory.find(c => c.id === activeChatId)?.title : 'New Session'}</p>
              </div>
            </div>
            <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10 text-zinc-400 hover:text-white transition-colors">
              <Icons.Search className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 min-h-0 overflow-y-auto p-4 md:p-6 scrollbar-thin">
            {messages.length === 0 ? (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="h-full flex flex-col items-center justify-center max-w-3xl mx-auto w-full px-4"
              >
                {/* Premium Empty State */}
                <div className="flex flex-col items-center text-center mb-10 w-full">
                  <div className="mb-6 p-4 rounded-2xl bg-gradient-to-b from-purple-500/10 to-transparent border border-purple-500/20 shadow-[0_0_30px_rgba(168,85,247,0.15)]">
                    <LuminaLogo size={42} variant="gradient" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 tracking-tight">
                    Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Lumina AI</span>
                  </h2>

                  {/* Capabilities Badges */}
                  <div className="flex flex-wrap justify-center gap-2 mt-4 max-w-lg mx-auto">
                    {CAPABILITIES.map((cap, i) => {
                      const Icon = cap.icon;
                      return (
                        <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/5 text-[11px] font-medium text-zinc-300">
                          <Icon className="w-3.5 h-3.5 text-purple-400/80" />
                          {cap.text}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Suggested Prompts Grid */}
                <div className="w-full max-w-2xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {SUGGESTED_PROMPTS.map((prompt, i) => (
                      <motion.button
                        key={i}
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleSend(prompt)}
                        className="p-4 rounded-xl border border-white/5 bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 hover:from-purple-500/10 hover:to-blue-500/10 hover:border-purple-500/30 transition-all duration-300 text-left flex flex-col gap-2 group shadow-sm hover:shadow-glow-purple"
                      >
                        <span className="text-sm text-zinc-300 group-hover:text-white font-medium leading-snug">{prompt}</span>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-[10px] text-zinc-500 group-hover:text-purple-300/70 transition-colors">Click to ask</span>
                          <Icons.ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-purple-400 transition-colors transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="space-y-8 max-w-3xl mx-auto w-full pb-8">
                <AnimatePresence initial={false}>
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex gap-4 w-full ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                    >
                      <div className="shrink-0 mt-1">
                        {msg.sender === 'user' ? (
                          <div className="w-8 h-8 rounded-full overflow-hidden border border-zinc-700/50 shadow-sm">
                            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" alt="User" />
                          </div>
                        ) : (
                          <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center shadow-sm">
                            <Icons.Sparkles className="w-4 h-4 text-purple-400" />
                          </div>
                        )}
                      </div>

                      <div className={`flex flex-col ${msg.sender === 'user' ? 'items-end max-w-[75%]' : 'flex-1 min-w-0'}`}>
                        <div className={`rounded-2xl text-[15px] leading-relaxed ${msg.sender === 'user'
                          ? 'px-5 py-3.5 bg-zinc-800 text-zinc-100 rounded-tr-sm shadow-sm'
                          : 'py-1.5 text-zinc-300 w-full min-w-0'
                          }`}>
                          {msg.sender === 'user' ? (
                            <p className="whitespace-pre-wrap">{msg.text}</p>
                          ) : (
                            <div className="prose prose-invert prose-sm md:prose-base max-w-none prose-p:leading-relaxed prose-pre:bg-zinc-900/80 prose-pre:border prose-pre:border-white/10 prose-headings:text-zinc-100 prose-a:text-purple-400 prose-code:text-purple-300 break-words">
                              <ReactMarkdown remarkPlugins={[remarkGfm]}>{msg.text}</ReactMarkdown>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex gap-4 w-full flex-row"
                    >
                      <div className="shrink-0 mt-1">
                        <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center shadow-sm">
                          <Icons.Sparkles className="w-4 h-4 text-purple-400" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0 py-3 text-zinc-300 flex items-center gap-1.5">
                        <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1.4 }} className="w-2 h-2 rounded-full bg-zinc-500" />
                        <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1.4, delay: 0.2 }} className="w-2 h-2 rounded-full bg-zinc-500" />
                        <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1.4, delay: 0.4 }} className="w-2 h-2 rounded-full bg-zinc-500" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-transparent shrink-0">
            <div className="max-w-3xl mx-auto relative flex items-end gap-2 bg-zinc-900/80 border border-white/10 rounded-2xl p-2 focus-within:border-white/20 focus-within:bg-zinc-800/90 transition-all shadow-lg backdrop-blur-md">
              <button className="p-2.5 text-zinc-400 hover:text-white transition-colors shrink-0 rounded-xl hover:bg-white/5 mb-0.5 ml-0.5">
                <Icons.Paperclip className="w-5 h-5" />
              </button>

              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend(inputValue);
                  }
                }}
                placeholder="Message Lumina..."
                className="flex-1 bg-transparent border-none focus:ring-0 text-white placeholder:text-zinc-500 outline-none resize-none py-3 max-h-32 min-h-[48px] overflow-y-auto text-[15px] scrollbar-thin"
                rows={1}
              />

              <button
                onClick={() => handleSend(inputValue)}
                disabled={!inputValue.trim() || isTyping}
                className="p-2.5 bg-white text-black hover:bg-zinc-200 disabled:bg-white/10 disabled:text-zinc-600 rounded-xl transition-all shrink-0 shadow-sm disabled:shadow-none mb-0.5 mr-0.5 group"
              >
                <Icons.ArrowUp className="w-5 h-5 group-disabled:opacity-50" strokeWidth={2.5} />
              </button>
            </div>
            <div className="text-center mt-3">
              <span className="text-[11px] text-zinc-500 font-medium">Lumina AI can make mistakes. Consider verifying important information.</span>
            </div>
          </div>
        </GlassPanel>
      </div>
    </div>
  );
};
