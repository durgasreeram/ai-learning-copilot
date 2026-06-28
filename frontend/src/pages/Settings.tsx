import React, { useState } from 'react';
import { SectionHeader } from '../components/layout/SectionHeader';
import { GlassPanel } from '../components/ui/GlassPanel';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Modal } from '../components/ui/Modal';
import { useTheme } from '../contexts/ThemeContext';
import { User, ShieldAlert, Sparkles } from 'lucide-react';
import type { AccentColor } from '../types';

export const Settings: React.FC = () => {
  const { theme, setTheme, accentColor, setAccentColor } = useTheme();
  
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john@lumina.ai',
  });
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [apiToken, setApiToken] = useState('lumina_sk_••••••••••••••••');

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const accentOptions: { value: AccentColor; label: string; bg: string }[] = [
    { value: 'purple', label: 'Purple (Default)', bg: 'bg-purple-600' },
    { value: 'blue', label: 'Blue', bg: 'bg-blue-500' },
    { value: 'indigo', label: 'Indigo', bg: 'bg-indigo-500' },
  ];

  return (
    <div className="flex flex-col gap-8 flex-1 max-w-4xl">
      {/* Heading */}
      <SectionHeader
        title="Settings"
        description="Configure your profile settings, application preferences, and security integrations."
      />

      <form onSubmit={handleSave} className="flex flex-col gap-6">
        {/* Profile Card */}
        <GlassPanel spotlight className="flex flex-col gap-4">
          <h3 className="text-base font-semibold text-white flex items-center gap-2">
            <User className="w-4 h-4 text-purple-400" /> Personal Profile
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Full Name"
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            />
            <Input
              label="Email Address"
              type="email"
              value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            />
          </div>
        </GlassPanel>

        {/* Theme Settings Card */}
        <GlassPanel className="flex flex-col gap-4">
          <h3 className="text-base font-semibold text-white">Appearance & Branding</h3>
          
          {/* Light/Dark Selector */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold text-zinc-400">Interface Theme</span>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setTheme('dark')}
                className={`px-4 py-2 text-sm border rounded-lg transition-all duration-200 cursor-pointer
                  ${theme === 'dark'
                    ? 'bg-purple-500/10 border-purple-500/30 text-purple-400 font-medium'
                    : 'bg-zinc-950 border-zinc-900 text-zinc-400 hover:text-zinc-200'
                  }`}
              >
                Dark Theme (Recommended)
              </button>
              <button
                type="button"
                onClick={() => setTheme('light')}
                className={`px-4 py-2 text-sm border rounded-lg transition-all duration-200 cursor-pointer
                  ${theme === 'light'
                    ? 'bg-purple-500/10 border-purple-500/30 text-purple-400 font-medium'
                    : 'bg-zinc-950 border-zinc-900 text-zinc-400 hover:text-zinc-200'
                  }`}
              >
                Light Theme
              </button>
            </div>
          </div>

          {/* Accent Color Selector */}
          <div className="flex flex-col gap-2 mt-2">
            <span className="text-xs font-semibold text-zinc-400">Accent Highlights</span>
            <div className="flex gap-3">
              {accentOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setAccentColor(opt.value)}
                  className={`px-3 py-2 text-xs font-medium border rounded-lg transition-all duration-200 flex items-center gap-2 cursor-pointer
                    ${accentColor === opt.value
                      ? 'bg-zinc-900 border-zinc-700 text-zinc-150'
                      : 'bg-zinc-950/40 border-zinc-900/60 text-zinc-400 hover:text-zinc-200'
                    }`}
                >
                  <span className={`w-3.5 h-3.5 rounded-full ${opt.bg} shrink-0`} />
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </GlassPanel>

        {/* Security / Dev Card */}
        <GlassPanel className="flex flex-col gap-4">
          <h3 className="text-base font-semibold text-white flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-purple-400" /> Developer Integrations
          </h3>
          <p className="text-xs text-zinc-400 leading-relaxed -mt-1">
            Lumina is connected to your backend API cluster. Customize keys to override local environment hooks.
          </p>
          <Input
            label="API Gateway Token"
            type="password"
            value={apiToken}
            onChange={(e) => setApiToken(e.target.value)}
            helperText="Bearer token applied to FastAPI route transactions."
          />
        </GlassPanel>

        {/* Footer Actions */}
        <div className="flex justify-end gap-3">
          <Button variant="secondary" type="button" onClick={() => setProfile({ name: 'John Doe', email: 'john@lumina.ai' })}>
            Reset Changes
          </Button>
          <Button variant="primary" type="submit">
            Save Preferences
          </Button>
        </div>
      </form>

      {/* Confirmation Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Settings Updated"
        footer={
          <Button variant="primary" size="sm" onClick={() => setIsModalOpen(false)}>
            Close
          </Button>
        }
      >
        <div className="flex flex-col gap-3 py-2 items-center text-center">
          <div className="p-3 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-full flex items-center justify-center mb-1">
            <Sparkles className="w-6 h-6" />
          </div>
          <h4 className="font-semibold text-zinc-200 text-base">Configurations Applied</h4>
          <p className="text-xs text-zinc-400 max-w-xs leading-relaxed">
            Your user preferences, system theme selections, and developer access tokens have been locally saved and updated.
          </p>
        </div>
      </Modal>
    </div>
  );
};
