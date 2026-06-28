import React from 'react';
import { motion } from 'framer-motion';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: 'none' | 'glow' | 'scale' | 'lift';
  variant?: 'default' | 'outline' | 'glass';
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverEffect = 'lift',
  variant = 'default',
  ...props
}) => {
  const baseStyles = 'rounded-xl overflow-hidden border transition-all duration-300';
  
  const variantStyles = {
    default: 'bg-surface-card border-zinc-900 shadow-premium',
    outline: 'bg-transparent border-zinc-800',
    glass: 'glass-panel border-white/5 shadow-premium shadow-black/40',
  };

  const hoverStyles = {
    none: '',
    glow: 'hover:border-purple-500/30 hover:shadow-glow-purple',
    scale: 'hover:scale-[1.015] hover:border-zinc-800',
    lift: 'hover:-translate-y-1 hover:border-zinc-800 hover:shadow-premium',
  };

  if (hoverEffect !== 'none') {
    const motionProps = {
      whileHover: hoverEffect === 'glow' ? { boxShadow: 'var(--shadow-glow-purple)', borderColor: 'rgba(139, 92, 246, 0.25)' } : undefined
    };

    return (
      <motion.div
        className={`${baseStyles} ${variantStyles[variant]} ${hoverStyles[hoverEffect]} ${className}`}
        {...motionProps}
        {...(props as React.ComponentPropsWithoutRef<typeof motion.div>)}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className = '', ...props }) => (
  <div className={`px-5 py-4 border-b border-zinc-900/60 ${className}`} {...props}>
    {children}
  </div>
);

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className = '', ...props }) => (
  <div className={`p-5 ${className}`} {...props}>
    {children}
  </div>
);

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className = '', ...props }) => (
  <div className={`px-5 py-4 border-t border-zinc-900/60 bg-zinc-950/20 ${className}`} {...props}>
    {children}
  </div>
);
