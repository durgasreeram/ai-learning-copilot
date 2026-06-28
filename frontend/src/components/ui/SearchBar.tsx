import React, { useEffect, useRef } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = 'Search course modules, tasks, settings...',
  className = '',
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // Monitor keyboard for Ctrl+K / Cmd+K focus shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className={`relative flex items-center w-full max-w-md ${className}`}>
      <Search className="absolute left-3 w-4 h-4 text-zinc-500 pointer-events-none" />
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 pr-16 py-2 bg-zinc-950/40 border border-zinc-900 focus:border-purple-500/40 rounded-lg text-sm text-zinc-200 placeholder-zinc-500 outline-none transition-all duration-200 focus:ring-2 focus:ring-purple-500/5 focus:bg-zinc-950/70"
      />
      {/* Keyboard Shortcut Indicator */}
      <div className="absolute right-3 hidden sm:flex items-center gap-1 pointer-events-none select-none">
        <kbd className="px-1.5 py-0.5 text-[10px] font-semibold text-zinc-500 bg-zinc-900 border border-zinc-800 rounded">
          ⌘
        </kbd>
        <kbd className="px-1.5 py-0.5 text-[10px] font-semibold text-zinc-500 bg-zinc-900 border border-zinc-800 rounded">
          K
        </kbd>
      </div>
    </div>
  );
};
