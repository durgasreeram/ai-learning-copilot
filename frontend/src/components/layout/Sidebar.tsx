import { useState } from 'react';
import { NavLink, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { NAV_ITEMS, ROUTES } from '../../constants';
import { LuminaLogo } from '../ui/LuminaLogo';

interface SidebarProps {
  chatHistory: any[];
}

export const Sidebar: React.FC<SidebarProps> = ({ chatHistory }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [aiChatExpanded, setAiChatExpanded] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const currentChatId = searchParams.get('chat');

  return (
    <aside
      className={`h-screen border-r border-zinc-900 bg-[#09090B] flex flex-col transition-all duration-300 relative select-none shrink-0
        ${isCollapsed ? 'w-20' : 'w-64'}`}
    >
      {/* Sidebar Toggle */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-6 w-6 h-6 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 cursor-pointer z-20 shadow-md"
      >
        {isCollapsed ? <Icons.ChevronRight className="w-3.5 h-3.5" /> : <Icons.ChevronLeft className="w-3.5 h-3.5" />}
      </button>

      {/* Brand Logo Header */}
      <div className={`flex flex-col items-center justify-center pt-6 pb-4 px-4 gap-2 border-b border-transparent transition-all duration-300 ${isCollapsed ? 'h-20' : 'h-28'}`}>
        <LuminaLogo variant="gradient" size={isCollapsed ? 28 : 36} className="shrink-0" />
        {!isCollapsed && (
          <div className="flex flex-col items-center gap-1.5 mt-1">
            <span className="font-display font-bold text-sm text-white tracking-[0.25em] uppercase">
              Lumina
            </span>
            <span className="text-[10px] text-zinc-400 font-medium tracking-wide">
              Learn smarter. Achieve more.
            </span>
          </div>
        )}
      </div>

      {/* Navigation List */}
      <nav className="flex-1 py-4 px-4 flex flex-col gap-1.5 overflow-y-auto scrollbar-none">
        {NAV_ITEMS.map((item) => {
          const IconComponent = Icons[item.icon as keyof typeof Icons] as React.ComponentType<{ className?: string, strokeWidth?: number }>;

          if (item.name === 'AI Chat') {
            const isAIChatActive = location.pathname === ROUTES.AI_CHAT;
            return (
              <div key={item.path} className="flex flex-col relative group/nav">
                <div
                  className={`flex items-center ${isCollapsed ? 'justify-center' : 'gap-3 px-3'} py-2.5 rounded-xl text-[13px] transition-all duration-200 cursor-pointer
                    ${isAIChatActive
                      ? 'bg-purple-500/10 text-purple-400 font-semibold shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]'
                      : 'text-zinc-400 font-medium hover:text-zinc-100 hover:bg-white/[0.02]'
                    }`}
                  onClick={() => {
                    if (isCollapsed) navigate(item.path);
                    else setAiChatExpanded(!aiChatExpanded);
                  }}
                  title={isCollapsed ? item.name : undefined}
                >
                  {IconComponent && (
                    <IconComponent className={`shrink-0 transition-transform ${isCollapsed ? 'w-5 h-5' : 'w-4 h-4'}`} strokeWidth={1.5} />
                  )}
                  {!isCollapsed && (
                    <>
                      <span className="flex-1 text-left">{item.name}</span>
                      <button
                        onClick={(e) => { e.stopPropagation(); navigate(item.path); }}
                        className="p-1 -mr-1 text-zinc-400 hover:text-purple-300 hover:bg-purple-500/20 rounded-md opacity-0 group-hover/nav:opacity-100 transition-all"
                        title="New Chat"
                      >
                        <Icons.Plus className="w-3.5 h-3.5" strokeWidth={2} />
                      </button>
                      <Icons.ChevronDown className={`w-3.5 h-3.5 shrink-0 text-zinc-500 transition-transform ml-1 ${aiChatExpanded ? 'rotate-180' : ''}`} />
                    </>
                  )}
                </div>

                {/* Expanded Conversation History */}
                {!isCollapsed && aiChatExpanded && (
                  <div className="pl-9 pr-2 flex flex-col gap-0.5 mt-1 pb-1">
                    {chatHistory.map(chat => {
                      const isChatActive = isAIChatActive && currentChatId === chat.id;
                      return (
                        <button
                          key={chat.id}
                          onClick={() => navigate(`${ROUTES.AI_CHAT}?chat=${chat.id}`)}
                          className={`w-full text-left px-2 py-1.5 rounded-lg text-[12.5px] truncate transition-colors border border-transparent ${isChatActive
                            ? 'text-purple-300 bg-purple-500/10 border-purple-500/20 font-medium'
                            : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.02]'
                            }`}
                        >
                          {chat.prompt}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          }

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `
                flex items-center ${isCollapsed ? 'justify-center' : 'gap-3 px-3'} py-2.5 rounded-xl text-[13px] transition-all duration-200 group
                ${isActive
                  ? 'bg-purple-500/10 text-purple-400 font-semibold shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]'
                  : 'text-zinc-400 font-medium hover:text-zinc-100 hover:bg-white/[0.02]'
                }
              `}
              title={isCollapsed ? item.name : undefined}
            >
              {IconComponent && (
                <IconComponent className={`shrink-0 transition-transform group-hover:scale-105 ${isCollapsed ? 'w-5 h-5' : 'w-4 h-4'}`} strokeWidth={1.5} />
              )}
              {!isCollapsed && <span>{item.name}</span>}
            </NavLink>
          );
        })}
      </nav>

      {/* Lumina Pro Upgrade Card */}
      {!isCollapsed && (
        <div className="px-4 mb-4">
          <div className="bg-gradient-to-b from-purple-500/[0.08] to-transparent border border-purple-500/20 rounded-2xl p-4 flex flex-col items-center text-center gap-3 relative overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
            <div className="absolute top-0 right-0 w-16 h-16 bg-purple-500/20 blur-xl pointer-events-none rounded-full" />
            <div className="flex items-center gap-2">
              <Icons.Crown className="w-4 h-4 text-purple-400" strokeWidth={2} />
              <span className="text-sm font-bold text-white tracking-wide">Lumina Pro</span>
            </div>
            <p className="text-[11px] text-zinc-400 font-medium leading-relaxed">
              Unlock unlimited AI, advanced tools, and more.
            </p>
            <button className="w-full py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg text-xs font-bold shadow-[0_2px_10px_rgba(147,51,234,0.3)] transition-all duration-300 mt-1 flex items-center justify-center gap-1.5 group">
              Upgrade Now <Icons.ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      )}

      {/* Sidebar Footer / User Profile */}
      <div className={`p-4 flex items-center ${isCollapsed ? 'justify-center' : 'gap-3'} bg-zinc-950/40 border-t border-white/[0.02] cursor-pointer hover:bg-zinc-950/60 transition-colors`}>
        <div className="w-9 h-9 rounded-full overflow-hidden border border-zinc-800 shrink-0">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
            alt="Durga Sreeram"
            className="w-full h-full object-cover"
          />
        </div>
        {!isCollapsed && (
          <div className="flex flex-col min-w-0 flex-1">
            <span className="text-[13px] font-bold text-zinc-200 truncate">Durga Sreeram</span>
            <span className="text-[11px] text-zinc-500 font-medium truncate">durga@example.com</span>
          </div>
        )}
        {!isCollapsed && <Icons.ChevronDown className="w-4 h-4 text-zinc-500 shrink-0" />}
      </div>
    </aside>
  );
};
