import type { ReactNode } from 'react';

type Size = 'sm' | 'md';

export default function TechTag({
  children,
  accent = false,
  size = 'md',
}: {
  children: ReactNode;
  accent?: boolean;
  size?: Size;
}) {
  const padding =
    size === 'sm' ? 'px-1.5 py-[1px] text-[11px]' : 'px-2 py-[2px] text-[12px]';
  return (
    <span
      className={
        'inline-flex items-center whitespace-nowrap font-mono rounded-[3px] border ' +
        padding +
        ' ' +
        (accent
          ? 'border-accent/40 bg-accentSoft text-accent'
          : 'border-rule bg-chip text-ink')
      }
    >
      {children}
    </span>
  );
}
