import React, { useState } from 'react';
import { 
  Search, Bell, Moon, Sun, ArrowRight, Zap, Map, FileText, 
  HelpCircle, Code, ChevronRight, Bookmark, Trophy, 
  MessageSquare, BookOpen, Crown, CheckCircle2, Circle
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const Dashboard: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="flex-1 flex flex-col min-w-0 h-full p-6 md:p-10 overflow-y-auto scrollbar-none relative z-10">
      {/* Subtle ambient background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/[0.03] via-transparent to-blue-900/[0.02] pointer-events-none -z-10" />
      
      {/* 1. Top Navigation / Greeting */}
      <div className="flex items-center justify-between gap-6 mb-10">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            Good evening, Durga <span className="text-purple-400">✨</span>
          </h1>
          <p className="text-sm text-zinc-400 mt-1">Let's continue your learning journey.</p>
        </div>

        <div className="flex items-center gap-5">
          <div className="relative w-64 lg:w-80 group hidden md:block">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-purple-400 transition-colors" />
            <input 
              type="text"
              placeholder="Search anything..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="w-full bg-zinc-900/40 border border-zinc-800 rounded-full py-2 pl-10 pr-12 text-[13px] text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500/50 focus:bg-zinc-900 transition-all hover:bg-zinc-900/60"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center">
              <span className="text-[10px] font-bold text-zinc-500 bg-zinc-800 px-1.5 py-0.5 rounded border border-zinc-700">⌘K</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button onClick={toggleTheme} className="text-zinc-400 hover:text-white transition-colors">
              {theme === 'dark' ? <Sun className="w-5 h-5" strokeWidth={1.5} /> : <Moon className="w-5 h-5" strokeWidth={1.5} />}
            </button>
            
            <button className="text-zinc-400 hover:text-white transition-colors relative">
              <Bell className="w-5 h-5" strokeWidth={1.5} />
              <span className="absolute top-0 right-0.5 w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
            </button>
          </div>

          <div className="flex items-center gap-2 pl-2 cursor-pointer">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" alt="Profile" className="w-8 h-8 rounded-full object-cover border border-zinc-800" />
            <ChevronRight className="w-4 h-4 text-zinc-600 rotate-90 hidden sm:block" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-8 pb-10">
        
        {/* LEFT COLUMN: Main Content */}
        <div className="flex flex-col gap-8 min-w-0">
          
          {/* AI Command Center */}
          <div className="bg-gradient-to-br from-indigo-950/50 via-[#09090B] to-purple-950/40 border border-purple-500/30 hover:border-purple-500/50 rounded-[28px] p-10 relative overflow-hidden shadow-[0_12px_40px_rgba(168,85,247,0.12)] transition-colors duration-500 group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/15 blur-[120px] pointer-events-none rounded-full group-hover:bg-purple-500/20 transition-all duration-700" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 blur-[100px] pointer-events-none rounded-full" />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl border border-purple-500/40 bg-gradient-to-br from-purple-500/20 to-transparent flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(168,85,247,0.25)] backdrop-blur-xl">
                  {/* Abstract compass / nav icon */}
                  <div className="w-6 h-6 rounded-full border-[2.5px] border-purple-300 relative shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-1.5 h-3 bg-purple-300 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl font-extrabold text-white tracking-tight">What do you want to learn today?</h2>
                  <p className="text-[14px] text-zinc-400 font-medium">Ask anything, generate quizzes, notes, roadmaps and more.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 relative z-10 max-w-3xl">
              <input 
                type="text" 
                placeholder="Ask your learning copilot..."
                className="w-full bg-zinc-950/60 border border-white/10 rounded-2xl py-4 pl-5 pr-16 text-[14px] text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500/50 focus:bg-zinc-950/80 transition-all shadow-inner"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-purple-600 hover:bg-purple-500 rounded-xl flex items-center justify-center text-white transition-colors shadow-lg">
                <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-3 mt-5 relative z-10">
              <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/5 hover:border-white/10 hover:bg-white/[0.05] text-xs font-medium text-zinc-300 hover:text-white transition-all">
                <Code className="w-3.5 h-3.5 text-zinc-400" /> Explain Recursion in DSA
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/5 hover:border-white/10 hover:bg-white/[0.05] text-xs font-medium text-zinc-300 hover:text-white transition-all">
                <Map className="w-3.5 h-3.5 text-zinc-400" /> Roadmap for Backend
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/5 hover:border-white/10 hover:bg-white/[0.05] text-xs font-medium text-zinc-300 hover:text-white transition-all">
                <HelpCircle className="w-3.5 h-3.5 text-zinc-400" /> Quiz on Python
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/5 hover:border-white/10 hover:bg-white/[0.05] text-xs font-medium text-zinc-300 hover:text-white transition-all">
                <FileText className="w-3.5 h-3.5 text-zinc-400" /> Notes on OOPs
              </button>
            </div>
          </div>

          {/* Quick Access */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="text-[15px] font-bold text-white tracking-wide">Quick Access</h3>
              <a href="#" className="text-xs text-purple-400 font-medium hover:text-purple-300 flex items-center gap-1 transition-colors">
                View all tools <ArrowRight className="w-3 h-3" />
              </a>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { title: 'AI Chat', desc: 'Get instant answers to your doubts', icon: MessageSquare, color: 'text-purple-400', bg: 'bg-purple-500/10' },
                { title: 'Quiz Generator', desc: 'Generate quizzes on any topic', icon: HelpCircle, color: 'text-indigo-400', bg: 'bg-indigo-500/10' },
                { title: 'Notes Generator', desc: 'Generate structured notes in seconds', icon: FileText, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
                { title: 'Roadmap Generator', desc: 'Personalized learning roadmaps', icon: BookOpen, color: 'text-orange-400', bg: 'bg-orange-500/10' },
                { title: 'Code Explainer', desc: 'Explain code and complex concepts', icon: Code, color: 'text-blue-400', bg: 'bg-blue-500/10' },
              ].map((tool, i) => (
                <div key={i} className="bg-zinc-900/40 backdrop-blur-md border border-white/10 hover:border-purple-500/30 rounded-2xl p-4 flex flex-col gap-3 cursor-pointer transition-all duration-300 group hover:bg-white/[0.02] shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:to-blue-500/5 transition-all duration-500" />
                  <div className={`w-10 h-10 rounded-xl ${tool.bg} ${tool.color} flex items-center justify-center relative z-10`}>
                    <tool.icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col gap-1 mt-1 relative z-10">
                    <span className="text-[13px] font-bold text-zinc-200 group-hover:text-white transition-colors">{tool.title}</span>
                    <span className="text-[11px] text-zinc-500 leading-relaxed font-medium">{tool.desc}</span>
                  </div>
                  <div className="mt-auto pt-3 flex justify-end relative z-10">
                    <ArrowRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-zinc-300 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Continue Learning */}
          <div className="flex flex-col gap-4 mt-2">
            <div className="flex items-center justify-between">
              <h3 className="text-[15px] font-bold text-white tracking-wide">Continue Learning</h3>
              <a href="#" className="text-xs text-purple-400 font-medium hover:text-purple-300 flex items-center gap-1 transition-colors">
                View all sessions <ArrowRight className="w-3 h-3" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: 'FastAPI Authentication', subtitle: 'Study Session • 2h ago', icon: Zap, color: 'text-purple-400', bg: 'bg-purple-500/10', progress: 75 },
                { title: 'DSA - Arrays & Hashing', subtitle: 'Study Session • Yesterday', icon: Code, color: 'text-indigo-400', bg: 'bg-indigo-500/10', progress: 60 },
                { title: 'System Design Basics', subtitle: 'Study Session • 2 days ago', icon: Map, color: 'text-blue-400', bg: 'bg-blue-500/10', progress: 40 },
              ].map((item, i) => (
                <div key={i} className="bg-zinc-900/40 border border-white/5 rounded-2xl p-5 flex flex-col gap-5 cursor-pointer hover:bg-zinc-900/60 transition-colors group shadow-sm">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl ${item.bg} ${item.color} flex items-center justify-center shrink-0`}>
                        <item.icon className="w-5 h-5" strokeWidth={1.5} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[13px] font-bold text-zinc-200 truncate pr-2 group-hover:text-white transition-colors">{item.title}</span>
                        <span className="text-[10px] text-zinc-500 font-medium">{item.subtitle}</span>
                      </div>
                    </div>
                    <Bookmark className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400 shrink-0 transition-colors" strokeWidth={1.5} />
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-1.5 flex-1 bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500 rounded-full" style={{ width: `${item.progress}%` }} />
                    </div>
                    <span className="text-[10px] font-bold text-zinc-400">{item.progress}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Next Steps */}
          <div className="flex flex-col gap-4 mt-2">
            <h3 className="text-[15px] font-bold text-white tracking-wide">Recommended Next Steps</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: 'FastAPI Authentication', subtitle: '75% complete', action: 'Resume →', color: 'bg-purple-500' },
                { title: 'Recursion Review', subtitle: 'Recommended by AI', action: 'Start →', color: 'bg-indigo-500' },
                { title: 'Python Quiz', subtitle: '15 Questions', action: 'Begin →', color: 'bg-blue-500' },
              ].map((rec, i) => (
                <div key={i} className="bg-zinc-900/40 border border-white/5 hover:border-white/15 rounded-2xl p-5 flex flex-col gap-5 cursor-pointer transition-all duration-300 group hover:bg-white/[0.02] shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${rec.color} shrink-0 shadow-[0_0_8px_rgba(255,255,255,0.3)]`} />
                    <div className="flex flex-col">
                      <span className="text-[13px] font-bold text-zinc-200 group-hover:text-white transition-colors">{rec.title}</span>
                      <span className="text-[11px] text-zinc-500 font-medium mt-0.5">{rec.subtitle}</span>
                    </div>
                  </div>
                  <div className="flex justify-end mt-auto">
                    <span className="text-[11px] font-bold text-purple-400 group-hover:text-purple-300 transition-colors">{rec.action}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Map */}
          <div className="flex flex-col gap-4 mt-2">
            <div className="flex items-center justify-between">
              <h3 className="text-[15px] font-bold text-white tracking-wide">Active Roadmap</h3>
              <a href="#" className="text-xs text-purple-400 font-medium hover:text-purple-300 flex items-center gap-1 transition-colors">
                View roadmap <ArrowRight className="w-3 h-3" />
              </a>
            </div>
            <div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-purple-900/10 to-transparent pointer-events-none" />
              <div className="flex flex-col gap-5 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                    <Map className="w-4 h-4" strokeWidth={2} />
                  </div>
                  <h4 className="text-[14px] font-bold text-zinc-100">Backend Developer Path</h4>
                </div>
                <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-2">
                  {[
                    { name: 'Python', status: 'completed' },
                    { name: 'FastAPI', status: 'completed' },
                    { name: 'JWT', status: 'completed' },
                    { name: 'PostgreSQL', status: 'current' },
                    { name: 'Docker', status: 'upcoming' },
                    { name: 'Deployment', status: 'upcoming' },
                  ].map((node, i, arr) => (
                    <div key={i} className="flex items-center gap-2 shrink-0">
                      <div className={`px-3 py-1.5 rounded-full border text-[11px] font-bold flex items-center gap-1.5 transition-all
                        ${node.status === 'completed' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 
                          node.status === 'current' ? 'bg-purple-500/10 border-purple-500/30 text-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.2)]' : 
                          'bg-zinc-900 border-zinc-800 text-zinc-500'}
                      `}>
                        {node.status === 'completed' && <CheckCircle2 className="w-3 h-3" strokeWidth={2.5} />}
                        {node.status === 'current' && <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />}
                        {node.status === 'upcoming' && <div className="w-1.5 h-1.5 rounded-full border border-zinc-500" />}
                        {node.name}
                      </div>
                      {i < arr.length - 1 && (
                        <div className={`w-4 h-[2px] rounded-full ${node.status === 'completed' ? 'bg-emerald-500/30' : 'bg-zinc-800'}`} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="flex flex-col gap-4 mt-2">
            <div className="flex items-center justify-between">
              <h3 className="text-[15px] font-bold text-white tracking-wide">Recent Activity</h3>
              <a href="#" className="text-xs text-purple-400 font-medium hover:text-purple-300 flex items-center gap-1 transition-colors">
                View all activity <ArrowRight className="w-3 h-3" />
              </a>
            </div>
            
            <div className="flex flex-col relative before:absolute before:inset-y-4 before:left-[19px] before:w-px before:bg-zinc-800/80">
              {[
                { title: 'Completed quiz on Python OOPs', desc: 'Score: 92%', icon: Trophy, color: 'text-yellow-400', bg: 'bg-yellow-500/10', time: '2h ago' },
                { title: 'Created note: DSA Quick Revision', desc: '24m', icon: FileText, color: 'text-emerald-400', bg: 'bg-emerald-500/10', time: 'Yesterday' },
                { title: 'Chat session on System Design', desc: '12 messages', icon: MessageSquare, color: 'text-blue-400', bg: 'bg-blue-500/10', time: 'Yesterday' },
                { title: 'Studied Dynamic Programming Patterns', desc: '1h 30m', icon: BookOpen, color: 'text-orange-400', bg: 'bg-orange-500/10', time: '2 days ago' },
              ].map((activity, i) => (
                <div key={i} className="flex items-start gap-5 py-3 group cursor-pointer relative">
                  <div className={`w-10 h-10 rounded-full ${activity.bg} border border-zinc-800/80 flex items-center justify-center shrink-0 relative z-10 group-hover:border-zinc-700 transition-colors shadow-sm`}>
                    <activity.icon className={`w-4 h-4 ${activity.color}`} strokeWidth={2} />
                  </div>
                  <div className="flex flex-col gap-1 pt-1 flex-1 border-b border-transparent group-hover:border-white/[0.02] pb-4 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="text-[13px] font-bold text-zinc-200 group-hover:text-white transition-colors">{activity.title}</span>
                      <span className="text-[11px] text-zinc-500 font-medium">{activity.time}</span>
                    </div>
                    <span className="text-[12px] text-zinc-400">{activity.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Sidebar stats */}
        <div className="flex flex-col gap-5 min-w-0">
          
          {/* Learning Streak Heatmap */}
          <div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-5 flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-lg">🔥</span>
                <h3 className="text-[13px] font-bold text-white tracking-wide">Learning Streak</h3>
              </div>
              <button className="text-zinc-500 hover:text-zinc-300">•••</button>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1.5">
                <span className="text-4xl font-extrabold text-white">4</span>
                <span className="text-[13px] text-zinc-400 font-medium">days</span>
              </div>
              <span className="text-[11px] text-zinc-500 mt-1">Keep it up! You're on fire!</span>
            </div>

            <div className="flex items-center justify-between mt-1">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
                <div key={day} className="flex flex-col items-center gap-2">
                  {i < 4 ? (
                    <div className="w-[22px] h-[22px] rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                      <CheckCircle2 className="w-3.5 h-3.5" strokeWidth={3} />
                    </div>
                  ) : (
                    <div className="w-[22px] h-[22px] rounded-full border border-zinc-700 bg-zinc-800/50 flex items-center justify-center">
                    </div>
                  )}
                  <span className="text-[10px] text-zinc-500 font-medium">{day}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Today's Progress */}
          <div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-5 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-4 h-4 text-zinc-400" />
                <h3 className="text-[13px] font-bold text-white tracking-wide">Today's Progress</h3>
              </div>
              <a href="#" className="text-[11px] text-purple-400 hover:text-purple-300 font-medium">View all</a>
            </div>

            <div className="flex items-center gap-5">
              {/* Circular Progress */}
              <div className="relative w-24 h-24 shrink-0">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="42" fill="transparent" stroke="#27272a" strokeWidth="6" />
                  <circle 
                    cx="50" cy="50" r="42" fill="transparent" 
                    stroke="url(#progress-gradient)" 
                    strokeWidth="6" 
                    strokeDasharray="263.89" 
                    strokeDashoffset={263.89 * (1 - 0.7)} 
                    strokeLinecap="round" 
                  />
                  <defs>
                    <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center mt-0.5">
                  <span className="text-xl font-bold text-white">70%</span>
                  <span className="text-[8px] text-zinc-400 uppercase tracking-widest mt-0.5">Completed</span>
                </div>
              </div>

              <div className="flex flex-col gap-3.5 flex-1">
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-2 h-2 rounded-full bg-purple-500 shrink-0" />
                  <span className="text-zinc-300 font-medium">3/5 Sessions</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-2 h-2 rounded-full bg-indigo-500 shrink-0" />
                  <span className="text-zinc-300 font-medium">2/3 Quizzes</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  <span className="text-zinc-300 font-medium">1/2 Notes</span>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Tasks */}
          <div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-5 flex flex-col gap-4">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-4 h-4 text-zinc-400" />
                <h3 className="text-[13px] font-bold text-white tracking-wide">Upcoming Tasks</h3>
              </div>
              <a href="#" className="text-[11px] text-purple-400 hover:text-purple-300 font-medium">View all</a>
            </div>

            <div className="flex flex-col gap-3.5">
              {[
                { task: 'Revise FastAPI Concepts', time: '6:00 PM' },
                { task: 'Solve DSA Problems', time: '7:30 PM' },
                { task: 'Complete Python Quiz', time: '9:00 PM' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <Circle className="w-3.5 h-3.5 text-zinc-600 group-hover:text-purple-400 transition-colors" strokeWidth={2} />
                    <span className="text-[13px] text-zinc-300 group-hover:text-white transition-colors">{item.task}</span>
                  </div>
                  <span className="text-[11px] text-zinc-500 font-medium">{item.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quote */}
          <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-950/80 border border-white/5 rounded-2xl p-6 flex flex-col gap-4 relative overflow-hidden mt-2">
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500/10 blur-[40px] rounded-full pointer-events-none" />
            
            <div className="text-purple-500/40 text-4xl font-serif leading-none h-6">"</div>
            <p className="text-[13px] text-zinc-300 leading-relaxed relative z-10 font-medium -mt-2">
              The beautiful thing about learning is that no one can take it away from you.
            </p>
            <span className="text-[11px] text-zinc-500 font-bold tracking-wide">— B.B. King</span>
            
            {/* Abstract decorative lines */}
            <svg className="absolute bottom-0 right-0 w-32 h-20 opacity-30 pointer-events-none" viewBox="0 0 100 50" preserveAspectRatio="none">
              <path d="M0 50 C 30 20, 50 40, 70 10 S 90 30, 100 0 L 100 50 Z" fill="transparent" stroke="#a855f7" strokeWidth="0.5"/>
              <path d="M0 50 C 20 30, 40 10, 60 30 S 80 10, 100 20 L 100 50 Z" fill="transparent" stroke="#8b5cf6" strokeWidth="1"/>
            </svg>
          </div>

        </div>
      </div>
    </div>
  );
};

// Simple generic calendar-like icon for headers
function CalendarIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}
