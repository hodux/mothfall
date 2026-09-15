'use client';

export default function Grid({
  gridSize = 48,
  className = '',
  children
}) {
  const gridBg = (color) =>
    `repeating-linear-gradient(0deg, ${color} 0px, ${color} 1px, transparent 1px, transparent ${gridSize}px), repeating-linear-gradient(90deg, ${color} 0px, ${color} 1px, transparent 1px, transparent ${gridSize}px)`;

  return (
    <section className={`relative w-full overflow-hidden ${className}`}>
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 dark:hidden" style={{ backgroundImage: gridBg('rgba(120, 100, 80, 0.10)') }} />
        <div className="absolute inset-0 hidden dark:block" style={{ backgroundImage: gridBg('rgba(255, 255, 255, 0.05)') }} />
      </div>
      {/* Content wrapper */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </section>
  );
}
