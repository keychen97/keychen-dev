import { Fragment } from 'react';

export type ArchNode = { label: string; sub?: string };

export default function ArchitectureDiagram({
  nodes,
  title = '系統架構（概念圖）',
}: {
  nodes: ArchNode[];
  title?: string;
}) {
  return (
    <figure className="border border-rule rounded-[3px] bg-white overflow-hidden">
      <figcaption className="flex items-center justify-between bg-chip border-b border-rule px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
        <span>{title}</span>
        <span>fig.1</span>
      </figcaption>
      <div className="dotgrid p-6">
        <div className="flex flex-wrap items-stretch gap-3">
          {nodes.map((n, i) => (
            <Fragment key={n.label}>
              <div className="flex-1 min-w-[160px] max-w-[220px] bg-white border border-rule rounded-[2px] px-3 py-3">
                <div className="font-mono text-[10px] text-muted mb-1">
                  node_{String(i + 1).padStart(2, '0')}
                </div>
                <div className="text-[13px] text-ink font-medium leading-snug">
                  {n.label}
                </div>
                {n.sub && (
                  <div className="text-[11.5px] text-muted mt-0.5 leading-snug">
                    {n.sub}
                  </div>
                )}
              </div>
              {i < nodes.length - 1 && (
                <div className="self-center font-mono text-accent text-lg select-none">
                  →
                </div>
              )}
            </Fragment>
          ))}
        </div>
        <div className="mt-5 pt-4 border-t border-dashed border-rule font-mono text-[11px] text-muted">
          // 此區為架構概念示意。實際 production 圖請參考 README / docs/architecture.md
        </div>
      </div>
    </figure>
  );
}
