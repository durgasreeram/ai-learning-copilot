import React, { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  error,
  helperText,
  leftIcon,
  rightIcon,
  className = '',
  disabled,
  ...props
}, ref) => {
  return (
    <div className={`w-full flex flex-col gap-1.5 ${disabled ? 'opacity-50' : ''}`}>
      {label && (
        <label className="text-xs font-semibold text-zinc-400 select-none px-0.5">
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        {leftIcon && (
          <div className="absolute left-3 text-zinc-500 pointer-events-none flex items-center justify-center">
            {leftIcon}
          </div>
        )}
        <input
          ref={ref}
          disabled={disabled}
          className={`w-full px-3 py-2 bg-zinc-950/60 border rounded-lg text-sm text-white placeholder-zinc-500 transition-all duration-200 outline-none
            ${leftIcon ? 'pl-10' : ''}
            ${rightIcon ? 'pr-10' : ''}
            ${error 
              ? 'border-red-500/50 focus:border-red-500 focus:ring-2 focus:ring-red-500/10' 
              : 'border-zinc-800 focus:border-purple-500/40 focus:ring-2 focus:ring-purple-500/5'
            }
            focus:bg-zinc-950/90
            ${className}`}
          {...props}
        />
        {rightIcon && (
          <div className="absolute right-3 text-zinc-500 pointer-events-none flex items-center justify-center">
            {rightIcon}
          </div>
        )}
      </div>
      {error && (
        <span className="text-xs text-red-400 mt-0.5 px-0.5">{error}</span>
      )}
      {!error && helperText && (
        <span className="text-xs text-zinc-500 mt-0.5 px-0.5">{helperText}</span>
      )}
    </div>
  );
});

Input.displayName = 'Input';
