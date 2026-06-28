import { useRef, useState } from 'react';

interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  glowColor?: 'purple' | 'blue' | 'none';
  interactive?: boolean;
  spotlight?: boolean;
}

export const GlassPanel: React.FC<GlassPanelProps> = ({
  children,
  className = '',
  glowColor = 'none',
  interactive = false,
  spotlight = false,
  ...props
}) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!panelRef.current || !spotlight) return;
    const rect = panelRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const glowStyles = {
    purple: 'shadow-glow-purple border-purple-500/10',
    blue: 'shadow-glow-blue border-blue-500/10',
    none: '',
  };

  return (
    <div
      ref={panelRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`glass-panel rounded-2xl p-6 relative overflow-hidden transition-all duration-300
        ${interactive ? 'glass-panel-hover cursor-pointer' : ''}
        ${glowColor !== 'none' ? glowStyles[glowColor] : ''}
        ${className}`}
      {...props}
    >
      {/* Dynamic Cursor Spotlight Effect */}
      {spotlight && isHovered && (
        <div
          className="absolute pointer-events-none transition-opacity duration-300"
          style={{
            width: '350px',
            height: '350px',
            background: `radial-gradient(150px circle at ${coords.x}px ${coords.y}px, rgba(139, 92, 246, 0.08), transparent)`,
            top: '-175px',
            left: '-175px',
            filter: 'blur(30px)',
          }}
        />
      )}

      {/* Static Ambient Accent Glow Spots */}
      {glowColor === 'purple' && !spotlight && (
        <div className="absolute top-0 right-0 w-48 h-48 glow-purple -z-10 rounded-full" />
      )}
      {glowColor === 'blue' && !spotlight && (
        <div className="absolute bottom-0 left-0 w-48 h-48 glow-blue -z-10 rounded-full" />
      )}

      <div className="relative z-10">{children}</div>
    </div>
  );
};
