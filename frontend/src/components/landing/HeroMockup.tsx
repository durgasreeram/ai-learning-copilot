import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, MessageSquare, CheckCircle, 
  HelpCircle, FileText, Compass, Code, 
  Settings as SettingsIcon, Bell, User, ArrowRight, CornerDownLeft
} from 'lucide-react';
import { LuminaLogo } from '../ui/LuminaLogo';

export const HeroMockup: React.FC = () => {
  // Mock Sidebar navigation list (Compact for 16:9 mockup aspect ratio)
  const sidebarItems = [
    { name: 'Dashboard', icon: Compass, active: true },
    { name: 'AI Chat', icon: MessageSquare, active: false },
    { name: 'Quiz Generator', icon: HelpCircle, active: false },
    { name: 'Notes', icon: FileText, active: false },
    { name: 'Settings', icon: SettingsIcon, active: false },
  ];

  const quickAccess = [
    { name: 'AI Chat', desc: 'Ask anything', icon: MessageSquare, color: 'text-purple-400' },
    { name: 'Quiz Generator', desc: 'Generate quizzes', icon: HelpCircle, color: 'text-blue-400' },
    { name: 'Notes Maker', desc: 'Create smart notes', icon: FileText, color: 'text-emerald-400' },
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
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="w-full rounded-2xl border border-white/5 bg-zinc-950/45 shadow-2xl relative overflow-hidden text-left"
      style={{
        boxShadow: '0 40px 80px -20px rgba(0, 0, 0, 0.95), 0 0 50px -5px rgba(139, 92, 246, 0.1)',
        backdropFilter: 'blur(30px)',
      }}
    >
      {/* Mock OS Window Titlebar */}
      <div className="h-10 border-b border-white/5 bg-zinc-950/30 px-5 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/10" />
        </div>
        <div className="text-[10px] text-zinc-500 font-mono tracking-widest font-bold uppercase select-none">Lumina Platform</div>
        <div className="w-12" />
      </div>

      {/* Main App Body - Strict 16:9 Desktop Ratio (Height compressed to 380px) */}
      <div className="flex h-[365px] md:h-[385px] overflow-hidden text-[12px] w-full">
        
        {/* Mock Sidebar (Exactly 19% Width) */}
        <div className="w-[19%] min-w-[130px] max-w-[200px] border-r border-white/5 bg-zinc-950/20 p-3.5 flex flex-col justify-between shrink-0 hidden md:flex select-none">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 px-1 py-0.5">
              <LuminaLogo variant="gradient" size={20} className="shrink-0" />
              <span className="font-bold text-white font-display text-xs tracking-wide">Lumina</span>
            </div>

            <nav className="flex flex-col gap-0.5">
              {sidebarItems.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-2.5 px-2.5 py-1 rounded-lg cursor-pointer transition-all duration-200
                    ${item.active 
                      ? 'bg-purple-500/10 text-purple-400 font-bold border border-purple-500/10' 
                      : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                >
                  <item.icon className="w-3.5 h-3.5 shrink-0" strokeWidth={1.5} />
                  <span className="font-semibold text-[11px]">{item.name}</span>
                </div>
              ))}
            </nav>
          </div>

          {/* Profile Card */}
          <div className="p-1 border-t border-white/5 flex items-center gap-2">
            <div className="w-6.5 h-6.5 rounded-lg bg-purple-900/30 border border-purple-500/15 text-purple-400 flex items-center justify-center font-bold text-[9px] shrink-0 font-mono">
              JD
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[10px] font-bold text-zinc-300 truncate leading-none">John Doe</span>
              <span className="text-[8px] text-zinc-500 truncate mt-0.5 font-medium">Pro Plan</span>
            </div>
          </div>
        </div>

        {/* Central Workspace Area (Exactly 56% Width - Dominated, spacious) */}
        <div className="w-full md:w-[56%] flex-1 flex flex-col min-w-0 bg-zinc-900/5 overflow-y-auto">
          {/* Internal Header */}
          <header className="h-11 border-b border-white/5 px-5.5 flex items-center justify-between gap-4 shrink-0 select-none">
            <div className="relative flex-1 max-w-xs">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-650" strokeWidth={1.5} />
              <input 
                type="text" 
                placeholder="Search resources..." 
                disabled
                className="w-full pl-8 pr-3 py-1 bg-zinc-950/20 border border-white/5 rounded-md text-[10px] outline-none text-zinc-400 placeholder-zinc-650"
              />
            </div>
            <div className="flex items-center gap-3 text-zinc-500">
              <Bell className="w-3.5 h-3.5 cursor-pointer hover:text-zinc-300 transition-colors" strokeWidth={1.5} />
              <div className="h-3 w-px bg-zinc-800" />
              <User className="w-3.5 h-3.5 cursor-pointer hover:text-zinc-300 transition-colors" strokeWidth={1.5} />
            </div>
          </header>

          {/* Workspace Content Panel - Extremely Spacious & Highly Legible */}
          <div className="p-5 md:p-6.5 flex flex-col gap-4.5 flex-1 justify-between">
            <div className="flex flex-col gap-0.5">
              <h2 className="text-xs font-extrabold text-white tracking-tight flex items-center gap-1.5">
                Good evening, John 👋
              </h2>
              <p className="text-zinc-500 text-[10px] font-medium">Ready to turn your study session into progress today?</p>
            </div>

            {/* Prompt input field - Expanded visual centerpiece */}
            <div className="border border-white/5 rounded-xl bg-zinc-950/40 p-3 shadow-xl relative transition-all duration-200 focus-within:border-purple-500/20">
              <textarea
                disabled
                placeholder="Ask Lumina anything (e.g., 'Generate an NLP quiz' or 'Explain recursion')..."
                className="w-full bg-transparent resize-none outline-none text-zinc-200 placeholder-zinc-650 min-h-[45px] md:min-h-[55px] text-[11px] leading-relaxed font-medium"
              />
              <div className="flex justify-between items-center mt-3 pt-2 border-t border-white/5">
                <div className="flex gap-2.5 text-zinc-500">
                  <button className="p-1 hover:text-zinc-300 transition-colors"><Compass className="w-3.5 h-3.5" strokeWidth={1.5} /></button>
                  <button className="p-1 hover:text-zinc-300 transition-colors"><Code className="w-3.5 h-3.5" strokeWidth={1.5} /></button>
                  <button className="p-1 hover:text-zinc-300 transition-colors"><FileText className="w-3.5 h-3.5" strokeWidth={1.5} /></button>
                </div>
                <button className="px-3 py-1 rounded-md bg-purple-600 text-white flex items-center justify-center hover:bg-purple-500 cursor-pointer font-bold text-[9.5px] gap-1.5 transition-colors shadow-lg shadow-purple-500/10">
                  Ask AI <CornerDownLeft className="w-2.5 h-2.5" strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Suggestions pills */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[9px] text-zinc-500 uppercase tracking-widest font-bold font-display select-none">Try These Suggestions</span>
              <div className="flex flex-wrap gap-1.5">
                {['Explain Recursion', 'Python Quiz', 'Generate FastAPI Notes', 'Create DSA Roadmap'].map((tag, idx) => (
                  <span 
                    key={idx} 
                    className="px-2.5 py-1 rounded-lg bg-zinc-950/40 border border-white/5 text-zinc-400 hover:text-white hover:border-purple-500/20 hover:bg-purple-500/5 transition-all text-[9.5px] font-semibold cursor-pointer select-none"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Access section */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[9px] text-zinc-500 uppercase tracking-widest font-bold font-display select-none">Quick Access</span>
              <div className="grid grid-cols-3 gap-3">
                {quickAccess.map((item, idx) => (
                  <div 
                    key={idx}
                    className="glass-panel-premium border-white/5 p-3 rounded-xl flex flex-col gap-2 hover:bg-white/5 cursor-pointer transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <item.icon className={`w-4 h-4 ${item.color}`} strokeWidth={1.5} />
                      <ArrowRight className="w-3 h-3 text-zinc-650" strokeWidth={1.5} />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-bold text-zinc-200 text-[10px] tracking-tight">{item.name}</span>
                      <span className="text-[8.5px] text-zinc-500 font-medium">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Widgets (Exactly 25% Width - Spacious, uncompressed analytics) */}
        <div className="w-[25%] min-w-[150px] max-w-[260px] border-l border-white/5 bg-zinc-950/20 p-4 flex flex-col gap-3.5 shrink-0 hidden lg:flex overflow-y-auto">
          {/* Learning Streak */}
          <div className="glass-panel-premium border-white/5 p-3 rounded-xl flex flex-col gap-2 shrink-0">
            <div className="flex items-center justify-between select-none">
              <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider">Learning Streak</span>
              <div className="flex items-center gap-0.5 text-[9.5px] text-orange-400 font-bold">
                🔥 12 Days
              </div>
            </div>
            <div className="flex justify-between items-center mt-0.5">
              {streakDays.map((day, idx) => (
                <div key={idx} className="flex flex-col items-center gap-1">
                  <span className="text-[9px] text-zinc-500 font-bold">{day.day}</span>
                  <div className={`w-3 h-3 rounded-full flex items-center justify-center border
                    ${day.active 
                      ? 'bg-orange-500/10 border-orange-500/25 text-orange-400' 
                      : 'bg-zinc-900/50 border-zinc-800 text-zinc-700'
                    }`}
                  >
                    {day.active && <div className="w-1 h-1 rounded-full bg-orange-500" />}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Today's Progress */}
          <div className="glass-panel-premium border-white/5 p-3 rounded-xl flex flex-col items-center justify-center gap-1.5 shrink-0">
            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider self-start select-none">Today's Progress</span>
            <div className="relative w-14 h-14 flex items-center justify-center shrink-0">
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
                <span className="text-[10px] font-bold text-white leading-none">68%</span>
              </div>
            </div>
          </div>

          {/* Today's Tasks */}
          <div className="glass-panel-premium border-white/5 p-3 rounded-xl flex flex-col gap-2 shrink-0">
            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider select-none">Today's Tasks</span>
            <div className="flex flex-col gap-1.5">
              {tasks.map((task, idx) => (
                <div key={idx} className="flex items-center justify-between text-[9px]">
                  <div className="flex items-center gap-1.5 text-zinc-300 font-medium">
                    <CheckCircle className="w-3.5 h-3.5 text-purple-500" strokeWidth={1.5} />
                    <span className="truncate">{task.name}</span>
                  </div>
                  <span className="text-zinc-500 font-mono text-[9px] font-medium">{task.progress}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
};
export default HeroMockup;
