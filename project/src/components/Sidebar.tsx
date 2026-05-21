import { useEffect, useState, type ReactNode } from 'react';

export type TocItem = { id: string; label: string };

export default function Sidebar({
  title = 'Contents',
  items,
  extra,
}: {
  title?: string;
  items: TocItem[];
  extra?: ReactNode;
}) {
  const [active, setActive] = useState<string | undefined>(items[0]?.id);

  useEffect(() => {
    const onScroll = () => {
      let current = items[0]?.id;
      for (const it of items) {
        const el = document.getElementById(it.id);
        if (el && el.getBoundingClientRect().top - 100 <= 0) current = it.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [items]);

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <aside className="hidden md:block">
      <div className="sticky top-20">
        <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted pb-2 border-b border-rule">
          {title}
        </div>
        <nav className="mt-2 flex flex-col">
          {items.map((it, i) => (
            <a
              key={it.id}
              href={'#' + it.id}
              onClick={(e) => onClick(e, it.id)}
              data-active={active === it.id}
              className={
                'block pl-3 pr-2 py-1.5 text-[13px] leading-snug border-l hover:text-accent hover:bg-chip transition-colors ' +
                (active === it.id
                  ? 'border-accent text-accent bg-chip'
                  : 'border-softrule text-ink/80')
              }
            >
              <span className="font-mono text-muted mr-2">
                {String(i + 1).padStart(2, '0')}
              </span>
              {it.label}
            </a>
          ))}
        </nav>
        {extra && <div className="mt-6">{extra}</div>}
      </div>
    </aside>
  );
}
