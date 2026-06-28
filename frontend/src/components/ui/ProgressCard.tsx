import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './Card';
import { BookOpen, Trophy } from 'lucide-react';

interface ProgressCardProps {
  title: string;
  category: string;
  progress: number;
  completedLessons: number;
  totalLessons: number;
  icon?: React.ReactNode;
  className?: string;
}

export const ProgressCard: React.FC<ProgressCardProps> = ({
  title,
  category,
  progress,
  completedLessons,
  totalLessons,
  icon,
  className = '',
}) => {
  const isComplete = progress === 100;

  return (
    <Card hoverEffect="lift" className={`bg-zinc-950/40 border-zinc-900 ${className}`}>
      <CardContent className="flex flex-col gap-4">
        {/* Top Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">
              {category}
            </span>
            <h3 className="font-semibold text-zinc-100 line-clamp-1 text-sm md:text-base">
              {title}
            </h3>
          </div>
          <div className="p-2 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-400 flex items-center justify-center shrink-0">
            {icon || (isComplete ? <Trophy className="w-4 h-4 text-purple-400" /> : <BookOpen className="w-4 h-4" />)}
          </div>
        </div>

        {/* Stats Row */}
        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span>
            {completedLessons} of {totalLessons} lessons
          </span>
          <span className="font-semibold text-zinc-200">{progress}%</span>
        </div>

        {/* Progress Bar Container */}
        <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ type: 'spring', stiffness: 80, damping: 15 }}
            className={`h-full rounded-full ${
              isComplete ? 'bg-gradient-to-r from-purple-500 to-indigo-500' : 'bg-purple-600'
            }`}
          />
        </div>
      </CardContent>
    </Card>
  );
};
