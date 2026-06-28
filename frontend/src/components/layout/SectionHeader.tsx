import React from 'react';

interface SectionHeaderProps {
  title: string;
  description?: string;
  actions?: React.ReactNode;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
  actions,
  className = '',
}) => {
  return (
    <div className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 ${className}`}>
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight leading-none m-0">
          {title}
        </h1>
        {description && (
          <p className="text-sm text-zinc-400 font-normal leading-relaxed m-0">
            {description}
          </p>
        )}
      </div>
      {actions && (
        <div className="flex items-center gap-2 shrink-0">
          {actions}
        </div>
      )}
    </div>
  );
};
