export type Shot = { title: string; caption: string };

export default function ScreenshotGallery({ items }: { items: Shot[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((s, i) => (
        <figure
          key={s.title}
          className="border border-rule rounded-[3px] overflow-hidden bg-white"
        >
          <div className="aspect-[16/10] stripe-placeholder relative flex items-center justify-center">
            <div className="text-center">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                screenshot
              </div>
              <div className="font-mono text-[12px] text-ink mt-0.5">
                fig.{i + 2}
              </div>
            </div>
            <span className="absolute top-2 left-2 font-mono text-[10px] px-1.5 py-0.5 bg-white/90 border border-rule rounded-[2px] text-muted">
              {String(i + 1).padStart(2, '0')}
            </span>
          </div>
          <figcaption className="border-t border-rule px-3 py-2.5">
            <div className="text-[13px] text-ink font-medium">{s.title}</div>
            <div className="text-[12px] text-muted mt-0.5 leading-snug">
              {s.caption}
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
