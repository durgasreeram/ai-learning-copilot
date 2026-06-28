export type Theme = 'light' | 'dark';

export type AccentColor = 'purple' | 'blue' | 'indigo';

export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  role: 'student' | 'instructor' | 'admin';
  joinedAt: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  progress: number; // 0 to 100
  totalLessons: number;
  completedLessons: number;
  category: string;
  imageUrl?: string;
  updatedAt: string;
}

export interface Lesson {
  id: string;
  courseId: string;
  title: string;
  duration: string; // e.g. "12m"
  type: 'video' | 'quiz' | 'reading' | 'interactive';
  status: 'locked' | 'unlocked' | 'completed';
}

export interface Activity {
  id: string;
  type: 'course_start' | 'lesson_complete' | 'quiz_pass' | 'badge_earn';
  title: string;
  description: string;
  timestamp: string;
}

export interface NavItem {
  name: string;
  path: string;
  icon: string;
}
