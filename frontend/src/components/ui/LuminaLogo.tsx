import React from 'react';

interface LuminaLogoProps {
  className?: string;
  size?: number | string;
  variant?: 'gradient' | 'monochrome' | 'white';
}

export const LuminaLogo: React.FC<LuminaLogoProps> = ({
  className = '',
  size = 24,
  variant = 'gradient',
}) => {
  // Unique gradient IDs to avoid duplication conflicts
  const ringGradientId = 'lumina-ring-gradient';
  const dotGradientId = 'lumina-dot-gradient';
  const arrowGradientId = 'lumina-arrow-gradient';

  // Determine stroke and fill colors based on variant
  const isGradient = variant === 'gradient';
  const strokeColor = isGradient ? `url(#${ringGradientId})` : 'currentColor';
  const dotColor = isGradient ? `url(#${dotGradientId})` : 'currentColor';
  const arrowColor = isGradient ? `url(#${arrowGradientId})` : 'currentColor';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {isGradient && (
        <defs>
          {/* Blue-violet gradient for the outer ring */}
          <linearGradient id={ringGradientId} x1="4" y1="28" x2="28" y2="8" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#3b82f6" />    {/* Soft Blue */}
            <stop offset="50%" stopColor="#8b5cf6" />   {/* Violet */}
            <stop offset="100%" stopColor="#a855f7" />  {/* Purple */}
          </linearGradient>

          {/* Soft purple-blue gradient for the central dot with subtle glow */}
          <linearGradient id={dotGradientId} x1="14.2" y1="16.7" x2="17.8" y2="20.3" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#c084fc" />
            <stop offset="100%" stopColor="#818cf8" />
          </linearGradient>

          {/* Light violet gradient for the pointer */}
          <linearGradient id={arrowGradientId} x1="13" y1="7" x2="19" y2="2" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#e9d5ff" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
          
          {/* Subtle glow filter for the dot to make it feel premium */}
          <filter id="lumina-glow" x="12" y="14" width="8" height="8" filterUnits="userSpaceOnUse">
            <feGaussianBlur stdDeviation="0.8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
      )}

      {/* Outer Circle Ring with a top gap */}
      {/* Starting from top-right (20.75, 9.77) to top-left (11.25, 9.77) around center (16, 18.5) */}
      <path
        d="M 20.75 9.77 A 9.5 9.5 0 1 1 11.25 9.77"
        stroke={strokeColor}
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Central Focal Dot */}
      <circle
        cx="16"
        cy="18.5"
        r="1.8"
        fill={dotColor}
        filter={isGradient ? "url(#lumina-glow)" : undefined}
      />

      {/* Upward Pointing Pointer Arrow */}
      <polygon
        points="16,2.5 19,7.5 13,7.5"
        fill={arrowColor}
      />
    </svg>
  );
};
