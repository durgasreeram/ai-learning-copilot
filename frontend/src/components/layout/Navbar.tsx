import { useState } from 'react';
import { Bell, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { SearchBar } from '../ui/SearchBar';
import { Button } from '../ui/Button';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [searchValue, setSearchValue] = useState('');

  return (
    <header className="h-16 border-b border-zinc-900 bg-surface-dark/40 backdrop-blur-md px-6 flex items-center justify-between gap-4 z-10">
      {/* Search Input Wrapper */}
      <div className="flex-1 max-w-md">
        <SearchBar value={searchValue} onChange={setSearchValue} />
      </div>

      {/* Actions & Settings Panel */}
      <div className="flex items-center gap-2">
        {/* Toggle Theme Icon */}
        <Button
          variant="ghost"
          size="sm"
          className="!p-2 rounded-lg text-zinc-400 hover:text-zinc-150"
          onClick={toggleTheme}
          title={theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
        >
          {theme === 'dark' ? (
            <Sun className="w-4 h-4" />
          ) : (
            <Moon className="w-4 h-4" />
          )}
        </Button>

        {/* Notifications Icon */}
        <Button
          variant="ghost"
          size="sm"
          className="!p-2 rounded-lg text-zinc-400 hover:text-zinc-150 relative"
          title="Notifications"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-purple-500 rounded-full" />
        </Button>

        <div className="h-4 w-px bg-zinc-800 mx-1" />

        {/* Upgrade/CTA Button */}
        <Button variant="glass" size="sm" className="hidden sm:inline-flex border-purple-500/10">
          Pro Account
        </Button>
      </div>
    </header>
  );
};
