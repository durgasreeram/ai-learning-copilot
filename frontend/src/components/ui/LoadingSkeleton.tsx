import React from 'react';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  variant = 'rectangular',
}) => {
  const baseClasses = 'bg-zinc-900/60 animate-pulse';
  
  const variantClasses = {
    text: 'h-4 w-full rounded',
    circular: 'rounded-full shrink-0',
    rectangular: 'rounded-xl',
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`} />
  );
};

export const CourseSkeleton: React.FC = () => {
  return (
    <div className="glass-panel border-zinc-900 rounded-xl p-5 flex flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col gap-2 w-2/3">
          <Skeleton variant="text" className="w-1/3 h-3 bg-purple-900/10" />
          <Skeleton variant="text" className="w-full h-4" />
        </div>
        <Skeleton variant="rectangular" className="w-9 h-9" />
      </div>
      <div className="flex justify-between items-center mt-2">
        <Skeleton variant="text" className="w-1/2 h-3" />
        <Skeleton variant="text" className="w-12 h-3" />
      </div>
      <Skeleton variant="rectangular" className="w-full h-2 rounded-full" />
    </div>
  );
};

export const DashboardSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex flex-col gap-2">
        <Skeleton variant="text" className="w-48 h-8" />
        <Skeleton variant="text" className="w-96 h-4" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <CourseSkeleton />
        <CourseSkeleton />
        <CourseSkeleton />
      </div>
    </div>
  );
};
