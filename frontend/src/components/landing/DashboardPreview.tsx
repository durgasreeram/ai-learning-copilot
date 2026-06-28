import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, Search, MessageSquare, CheckCircle, 
  HelpCircle, FileText, Compass, Code, BarChart2, 
  Settings as SettingsIcon, Bell, User, History, ArrowRight, CornerDownLeft
} from 'lucide-react';
import { LuminaLogo } from '../ui/LuminaLogo';

export const DashboardPreview: React.FC = () => {
  // Sidebar items definition
  const sidebarItems = [
    { name: 'Dashboard', icon: Compass, active: true },
    { name: 'AI Chat', icon: MessageSquare, active: false },
    { name: 'Quiz Generator', icon: HelpCircle, active: false },
    { name: 'Notes', icon: FileText, active: false },
    { name: 'Roadmaps', icon: Sparkles, active: false },
    { name: 'Code Explainer', icon: Code, active: false },
    { name: 'Progress', icon: BarChart2, active: false },
    { name: 'History', icon: History, active: false },
    { name: 'Settings', icon: SettingsIcon, active: false },
  ];

  const quickAccess = [
    { name: 'AI Chat', desc: 'Ask anything', icon: MessageSquare, color: 'text-purple-400' },
    { name: 'Quiz Generator', desc: 'Generate quizzes instantly', icon: HelpCircle, color: 'text-blue-400' },
    { name: 'Notes Generator', desc: 'Create smart notes', icon: FileText, color: 'text-emerald-400' },
  ];

  const streakDays = [
    { day: 'M', active: true },
    { day: 'T', active: true },
    { day: 'W', active: true },
    { day: 'T', active: true },
    { day: 'F', active: true },
    { day: 'S', active: false },
    { day: 'S', active: false },
  ];

  const tasks = [
    { name: 'DSA Practice', progress: '2/3', active: true },
    { name: 'System Design', progress: '1/1', active: true },
    { name: 'Read Notes', progress: '2/2', active: false },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-6xl mx-auto rounded-xl border border-white/5 bg-zinc-950/40 shadow-2xl relative overflow-hidden text-left"
      style={{
        boxShadow: '0 40px 80px -20px rgba(0, 0, 0, 0.95), 0 0 50px -5px rgba(139, 92, 246, 0.1)',
        backdropFilter: 'blur(30px)',
      }}
    >
      {/* Mock OS Window Titlebar */}
      <div className="h-10 border-b border-white/5 bg-zinc-950/20 px-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/30 border border-red-500/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30 border border-yellow-500/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/30 border border-green-500/10" />
        </div>
        <div className="text-[10px] text-zinc-500 font-mono tracking-widest font-semibold uppercase">Lumina Platform</div>
        <div className="w-12" />
      </div>

      {/* Main App Body */}
      <div className="flex h-[460px] md:h-[480px] overflow-hidden text-[12px]">
        
        {/* Mock Sidebar (Hidden on mobile) */}
        <div className="w-48 border-r border-white/5 bg-zinc-950/20 p-4 flex flex-col justify-between shrink-0 hidden md:flex">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2.5 px-1 py-0.5">
              <LuminaLogo variant="gradient" size={24} className="shrink-0" />
              <span className="font-bold text-zinc-150 font-display text-sm tracking-wide">Lumina</span>
            </div>

            <nav className="flex flex-col gap-0.5">
              {sidebarItems.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-2.5 px-3 py-1.5 rounded-lg cursor-pointer transition-colors duration-200
                    ${item.active 
                      ? 'bg-purple-500/10 text-purple-400 font-semibold border border-purple-500/10' 
                      : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                >
                  <item.icon className="w-3.5 h-3.5" />
                  <span className="font-medium">{item.name}</span>
                </div>
              ))}
            </nav>
          </div>

          {/* Profile Card */}
          <div className="p-2 border-t border-white/5 flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-purple-900/30 border border-purple-500/15 text-purple-400 flex items-center justify-center font-bold text-[10px]">
              JD
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[11px] font-semibold text-zinc-300 truncate">John Doe</span>
              <span className="text-[9px] text-zinc-500 truncate">Pro Plan</span>
            </div>
          </div>
        </div>

        {/* Central Workspace Area */}
        <div className="flex-1 flex flex-col min-w-0 bg-zinc-900/5 overflow-y-auto">
          {/* Internal Header */}
          <header className="h-12 border-b border-white/5 px-6 flex items-center justify-between gap-4">
            <div className="relative flex-1 max-w-xs">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-650" />
              <input 
                type="text" 
                placeholder="Search resources, templates, help..." 
                disabled
                className="w-full pl-8 pr-3 py-1 bg-zinc-950/20 border border-white/5 rounded-md text-[10px] outline-none text-zinc-400 placeholder-zinc-600"
              />
            </div>
            <div className="flex items-center gap-3 text-zinc-500">
              <Bell className="w-3.5 h-3.5 cursor-pointer hover:text-zinc-300 transition-colors" />
              <div className="h-3 w-px bg-zinc-800" />
              <User className="w-3.5 h-3.5 cursor-pointer hover:text-zinc-300 transition-colors" />
            </div>
          </header>

          {/* Main workspace cards */}
          <div className="p-6 md:p-7 flex flex-col gap-5 flex-1 justify-between">
            <div className="flex flex-col gap-0.5">
              <h2 className="text-sm font-bold text-zinc-100 tracking-tight flex items-center gap-1.5">
                Good evening, John 👋
              </h2>
              <p className="text-zinc-500 text-[10px]">Ready to turn your study session into progress today?</p>
            </div>

            {/* Prompt input field - Centerpiece */}
            <div className="border border-white/5 rounded-xl bg-zinc-950/40 p-4 shadow-xl relative transition-all duration-200 focus-within:border-purple-500/20">
              <textarea
                disabled
                placeholder="Ask Lumina anything (e.g., 'Generate an NLP quiz' or 'Explain transformers')..."
                className="w-full bg-transparent resize-none outline-none text-zinc-200 placeholder-zinc-600 min-h-[50px] text-[11px] leading-relaxed"
              />
              <div className="flex justify-between items-center mt-3 pt-2.5 border-t border-white/5">
                <div className="flex gap-2.5 text-zinc-500">
                  <button className="p-1 hover:text-zinc-300 transition-colors"><Compass className="w-3.5 h-3.5" /></button>
                  <button className="p-1 hover:text-zinc-300 transition-colors"><Code className="w-3.5 h-3.5" /></button>
                  <button className="p-1 hover:text-zinc-300 transition-colors"><FileText className="w-3.5 h-3.5" /></button>
                </div>
                <button className="px-3 py-1 rounded bg-purple-600 text-white flex items-center justify-center hover:bg-purple-500 cursor-pointer font-semibold text-[10px] gap-1.5 transition-colors">
                  Ask AI <CornerDownLeft className="w-2.5 h-2.5" />
                </button>
              </div>
            </div>

            {/* Try these suggestions */}
            <div className="flex flex-col gap-2">
              <span className="text-[9px] text-zinc-500 uppercase tracking-widest font-bold">Try These Suggestions</span>
              <div className="flex flex-wrap gap-1.5">
                {['Explain Recursion', 'Python Quiz', 'Generate FastAPI Notes', 'Create DSA Roadmap'].map((tag, idx) => (
                  <span 
                    key={idx} 
                    className="px-2.5 py-1 rounded-lg bg-zinc-950/30 border border-white/5 text-zinc-400 hover:text-white hover:border-purple-500/20 hover:bg-purple-500/5 transition-all text-[9.5px] cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Access section */}
            <div className="flex flex-col gap-2">
              <span className="text-[9px] text-zinc-500 uppercase tracking-widest font-bold">Quick Access</span>
              <div className="grid grid-cols-3 gap-3">
                {quickAccess.map((item, idx) => (
                  <div 
                    key={idx}
                    className="glass-panel-premium border-white/5 p-3 rounded-xl flex flex-col gap-2.5 hover:bg-white/5 cursor-pointer transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <item.icon className={`w-4 h-4 ${item.color}`} />
                      <ArrowRight className="w-3 h-3 text-zinc-650" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-semibold text-zinc-200 text-[10.5px]">{item.name}</span>
                      <span className="text-[9px] text-zinc-500">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Widgets (Hidden on small screens) */}
        <div className="w-56 border-l border-white/5 bg-zinc-950/20 p-4 flex flex-col gap-4 shrink-0 hidden lg:flex overflow-y-auto">
          {/* Learning Streak */}
          <div className="glass-panel-premium border-white/5 p-3 rounded-xl flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider">Learning Streak</span>
              <div className="flex items-center gap-1 text-[9.5px] text-orange-400 font-bold">
                🔥 12 Days
              </div>
            </div>
            <div className="flex justify-between items-center mt-1">
              {streakDays.map((day, idx) => (
                <div key={idx} className="flex flex-col items-center gap-1.5">
                  <span className="text-[9px] text-zinc-500 font-medium">{day.day}</span>
                  <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center border
                    ${day.active 
                      ? 'bg-orange-500/10 border-orange-500/25 text-orange-400' 
                      : 'bg-zinc-900/50 border-zinc-800 text-zinc-700'
                    }`}
                  >
                    {day.active && <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Today's Progress */}
          <div className="glass-panel-premium border-white/5 p-3 rounded-xl flex flex-col items-center justify-center gap-1.5">
            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider self-start">Today's Progress</span>
            <div className="relative w-16 h-16 flex items-center justify-center my-0.5 shrink-0">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-zinc-900"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <motion.path
                  initial={{ strokeDasharray: "0, 100" }}
                  animate={{ strokeDasharray: "68, 100" }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="text-purple-500"
                  strokeWidth="2.5"
                  strokeDasharray="68, 100"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute text-center flex flex-col">
                <span className="text-[11px] font-bold text-white leading-none">68%</span>
              </div>
            </div>
          </div>

          {/* Today's Tasks */}
          <div className="glass-panel-premium border-white/5 p-3 rounded-xl flex flex-col gap-2">
            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider">Today's Tasks</span>
            <div className="flex flex-col gap-1.5">
              {tasks.map((task, idx) => (
                <div key={idx} className="flex items-center justify-between text-[9.5px]">
                  <div className="flex items-center gap-1.5 text-zinc-300">
                    <CheckCircle className={`w-3 h-3 ${task.active ? 'text-purple-500' : 'text-zinc-750'}`} />
                    <span className={task.active ? '' : 'line-through text-zinc-550'}>{task.name}</span>
                  </div>
                  <span className="text-zinc-500 font-mono text-[9px]">{task.progress}</span>
                </div>
              ))}
            </div>
          </div>

          {/* AI Insight */}
          <div className="p-2.5 bg-purple-500/5 border border-purple-500/10 rounded-lg">
            <p className="text-[9px] text-purple-300 leading-relaxed italic m-0">
              "Consistency is the compass that turns effort into mastery. ✨"
            </p>
          </div>
        </div>

      </div>
    </motion.div>
  );
};
