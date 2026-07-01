export const ROUTES = {
  DASHBOARD: '/dashboard',
  COURSES: '/courses',
  SETTINGS: '/settings',
  LOGIN: '/login',
  REGISTER: '/register',
  AI_CHAT: '/ai-chat',
} as const;

export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

export const LOCAL_STORAGE_KEYS = {
  THEME: 'lumina-theme',
  ACCENT_COLOR: 'lumina-accent-color',
  AUTH_TOKEN: 'lumina-token',
} as const;

export const NAV_ITEMS = [
  {
    name: 'Dashboard',
    path: ROUTES.DASHBOARD,
    icon: 'Home',
  },
  {
    name: 'AI Chat',
    path: ROUTES.AI_CHAT,
    icon: 'MessageSquare',
  },
  {
    name: 'Study Sessions',
    path: '/sessions',
    icon: 'Clock',
  },
  {
    name: 'Roadmaps',
    path: '/roadmaps',
    icon: 'Map',
  },
  {
    name: 'Quiz Generator',
    path: '/quiz',
    icon: 'HelpCircle',
  },
  {
    name: 'Notes',
    path: '/notes',
    icon: 'FileText',
  },
  {
    name: 'Flashcards',
    path: '/flashcards',
    icon: 'Layers',
  },
  {
    name: 'Code Explainer',
    path: '/code',
    icon: 'Code',
  },
  {
    name: 'Progress',
    path: '/progress',
    icon: 'BarChart2',
  },
  {
    name: 'Resources',
    path: '/resources',
    icon: 'Folder',
  },
  {
    name: 'Settings',
    path: ROUTES.SETTINGS,
    icon: 'Settings',
  },
] as const;

