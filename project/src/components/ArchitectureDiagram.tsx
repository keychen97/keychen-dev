import { Fragment } from 'react';

export type ArchNode = { label: string; sub?: string };

const COLS = 3;

export default function ArchitectureDiagram({
  nodes,
  title = '系統架構（概念圖）',
}: {
  nodes: ArchNode[];
  title?: string;
}) {
  const rows: ArchNode[][] = [];
  for (let i = 0; i < nodes.length; i += COLS) {
    rows.push(nodes.slice(i, i + COLS));
  }

  return (
    <figure className="border border-rule rounded-[3px] bg-white overflow-hidden">
      <figcaption className="flex items-center justify-between bg-chip border-b border-rule px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
        <span>{title}</span>
        <span>fig.1</span>
      </figcaption>
      <div className="dotgrid p-6 space-y-2">
        {rows.map((row, ri) => (
          <Fragment key={ri}>
            {ri > 0 && (
              <div className="flex justify-start pl-[calc(50%/3)] font-mono text-accent text-base select-none">
                ↓
              </div>
            )}
            <div className="flex items-stretch gap-3">
              {row.map((n, i) => {
                const globalIdx = ri * COLS + i;
                return (
                  <Fragment key={n.label}>
                    <div className="flex-1 bg-white border border-rule rounded-[2px] px-3 py-3">
                      <div className="font-mono text-[10px] text-muted mb-1">
                        node_{String(globalIdx + 1).padStart(2, '0')}
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
                    {i < row.length - 1 && (
                      <div className="self-center font-mono text-accent text-lg select-none">
                        →
                      </div>
                    )}
                  </Fragment>
                );
              })}
            </div>
          </Fragment>
        ))}
        <div className="mt-5 pt-4 border-t border-dashed border-rule font-mono text-[11px] text-muted">
          // 此區為架構概念示意。實際 production 圖請參考 README / docs/architecture.md
        </div>
      </div>
    </figure>
  );
}
