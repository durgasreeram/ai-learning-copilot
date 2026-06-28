import React from 'react';
import type { LucideIcon } from 'lucide-react';
import { Card, CardContent } from './Card';
import { Button } from './Button';

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  actionText?: string;
  onAction?: () => void;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon: Icon,
  title,
  description,
  actionText,
  onAction,
  className = '',
}) => {
  return (
    <Card variant="glass" hoverEffect="none" className={`border-dashed border-zinc-800 ${className}`}>
      <CardContent className="flex flex-col items-center justify-center text-center py-12 px-6">
        {/* Icon Container */}
        <div className="p-4 bg-zinc-950/40 border border-zinc-900 rounded-2xl text-zinc-500 mb-4 flex items-center justify-center">
          <Icon className="w-8 h-8 text-purple-500/80" />
        </div>

        {/* Text */}
        <h4 className="text-base font-semibold text-zinc-100 mb-1">{title}</h4>
        <p className="text-sm text-zinc-400 max-w-sm mb-6 leading-relaxed">{description}</p>

        {/* Action Button */}
        {actionText && onAction && (
          <Button variant="glass" size="sm" onClick={onAction}>
            {actionText}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};
