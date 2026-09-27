export default function AirmailStripe({
  position = 'top',
  reversed = false,
  wide = false,
  className = '',
  style = {},
  ...props
}) {
  const positionClasses = {
    top: 'absolute top-0 inset-x-0',
    bottom: 'absolute bottom-0 inset-x-0',
    static: 'w-full',
    none: '',
  }[position] ?? position;

  const firstColor = reversed ? '#f59e0b' : '#1e90ff';
  const secondColor = reversed ? '#1e90ff' : '#f59e0b';

  const gradient = wide
    ? `repeating-linear-gradient(135deg, ${firstColor} 0, ${firstColor} 14px, transparent 14px, transparent 20px, ${secondColor} 20px, ${secondColor} 34px, transparent 34px, transparent 40px)`
    : `repeating-linear-gradient(135deg, ${firstColor} 0, ${firstColor} 12px, transparent 12px, transparent 18px, ${secondColor} 18px, ${secondColor} 30px, transparent 30px, transparent 36px)`;

  const hasHeight = /\bh-/.test(className);
  const hasOpacity = /\bopacity-/.test(className);

  const defaultClasses = [
    !hasHeight && 'h-2',
    !hasOpacity && 'opacity-75',
    'pointer-events-none',
    positionClasses,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      aria-hidden="true"
      className={defaultClasses}
      style={{
        backgroundImage: gradient,
        ...style,
      }}
      {...props}
    />
  );
}
