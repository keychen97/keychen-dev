import type { ReactNode } from 'react';

export type InfoboxRow = [string, ReactNode];

export default function Infobox({
  title,
  subtitle,
  rows,
  footer,
}: {
  title: string;
  subtitle?: string;
  rows: InfoboxRow[];
  footer?: ReactNode;
}) {
  return (
    <aside className="border border-rule rounded-[3px] overflow-hidden bg-white shadow-[0_1px_0_rgba(0,0,0,0.02)]">
      <div className="bg-chip px-4 py-3 border-b border-rule">
        <div className="font-serif text-[15px] font-medium text-ink leading-tight">
          {title}
        </div>
        {subtitle && (
          <div className="font-mono text-[11px] text-muted mt-1">{subtitle}</div>
        )}
      </div>
      <dl className="divide-y divide-softrule text-[12.5px]">
        {rows.map(([k, v]) => (
          <div key={k} className="grid grid-cols-[88px_1fr] gap-3 px-4 py-2.5">
            <dt className="font-mono text-[11px] uppercase tracking-wide text-muted pt-[2px]">
              {k}
            </dt>
            <dd className="text-ink leading-snug break-words">{v}</dd>
          </div>
        ))}
      </dl>
      {footer && (
        <div className="border-t border-rule bg-parchment px-4 py-3 text-[12px] text-muted">
          {footer}
        </div>
      )}
    </aside>
  );
}
