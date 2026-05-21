// ============================================================================
// components.jsx — Shared UI primitives
// In the Vite project these are split into src/components/*.tsx files.
// ============================================================================

const { useEffect, useMemo, useRef, useState } = React;

// ---------------- Hash router primitives ----------------

function useHashRoute() {
  const [hash, setHash] = useState(() => window.location.hash || '#/');
  useEffect(() => {
    const onChange = () => setHash(window.location.hash || '#/');
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  return hash.replace(/^#/, '') || '/';
}

function Link({ to, className = '', children, ...rest }) {
  const onClick = (e) => {
    e.preventDefault();
    if (window.location.hash !== '#' + to) {
      window.location.hash = '#' + to;
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };
  return (
    <a href={'#' + to} onClick={onClick} className={className} {...rest}>{children}</a>
  );
}

// ---------------- Navigation ----------------

function Navbar() {
  const path = useHashRoute();
  const active = (p) => p === '/' ? path === '/' : path.startsWith(p);
  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/projects', label: 'Projects' },
    { to: '/about', label: 'About' },
  ];
  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-rule">
      <div className="max-w-wiki mx-auto px-6 lg:px-10 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-baseline gap-2 group">
          <span className="font-mono text-[15px] font-semibold text-ink tracking-tight">keychen</span>
          <span className="font-mono text-[15px] text-accent">.dev</span>
          <span className="ml-2 hidden sm:inline font-mono text-[11px] text-muted uppercase tracking-[0.18em]">Portfolio · v1</span>
        </Link>
        <nav className="flex items-center gap-1">
          {navItems.map(n => (
            <Link
              key={n.to}
              to={n.to}
              className={
                'px-3 py-1.5 text-[13.5px] rounded-sm transition-colors border ' +
                (active(n.to)
                  ? 'text-accent border-rule bg-chip'
                  : 'text-ink border-transparent hover:bg-chip hover:text-accent')
              }
            >{n.label}</Link>
          ))}
          <a
            href="https://github.com/keychen97"
            target="_blank"
            rel="noreferrer"
            className="ml-2 px-3 py-1.5 text-[13.5px] font-mono text-muted hover:text-accent transition-colors"
          >github ↗</a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-24 border-t border-rule bg-parchment">
      <div className="max-w-wiki mx-auto px-6 lg:px-10 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-[13.5px]">
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted mb-3">Contact</div>
          <ul className="space-y-1.5">
            <li><span className="font-mono text-muted mr-2">email</span><a className="wiki-link" href={'mailto:' + profile.email}>{profile.email}</a></li>
            <li><span className="font-mono text-muted mr-2">phone</span><a className="wiki-link" href={'tel:' + profile.phone.replace(/-/g,'')}>{profile.phone}</a></li>
            <li><span className="font-mono text-muted mr-2">github</span><a className="wiki-link" href={'https://' + profile.github} target="_blank" rel="noreferrer">{profile.github}</a></li>
          </ul>
        </div>
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted mb-3">Sitemap</div>
          <ul className="space-y-1.5">
            <li><Link to="/" className="wiki-link">Home</Link></li>
            <li><Link to="/projects" className="wiki-link">Projects</Link></li>
            <li><Link to="/about" className="wiki-link">About</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted mb-3">Colophon</div>
          <p className="text-muted leading-relaxed">
            排版參考 Wikipedia 與技術文件慣例。<br />
            字型：IBM Plex Sans / Mono / Serif。<br />
            Accent <span className="font-mono">#0066CC</span>。本站以 React + TypeScript + Tailwind 建構。
          </p>
        </div>
      </div>
      <div className="border-t border-softrule">
        <div className="max-w-wiki mx-auto px-6 lg:px-10 py-3 flex justify-between items-center font-mono text-[11px] text-muted">
          <span>© 2026 Key Chen · keychen.dev</span>
          <span>last edited 2026-05-21</span>
        </div>
      </div>
    </footer>
  );
}

// ---------------- Tag chip ----------------

function TechTag({ children, accent = false, size = 'md' }) {
  const padding = size === 'sm' ? 'px-1.5 py-[1px] text-[11px]' : 'px-2 py-[2px] text-[12px]';
  return (
    <span
      className={
        'inline-flex items-center whitespace-nowrap font-mono rounded-[3px] border ' + padding + ' ' +
        (accent
          ? 'border-accent/40 bg-accentSoft text-accent'
          : 'border-rule bg-chip text-ink')
      }
    >{children}</span>
  );
}

// ---------------- TOC sidebar ----------------

function TocSidebar({ title = 'Contents', items, extra }) {
  const [active, setActive] = useState(items[0]?.id);
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
  const onClick = (e, id) => {
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
        <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted pb-2 border-b border-rule">{title}</div>
        <nav className="mt-2 flex flex-col">
          {items.map((it, i) => (
            <a
              key={it.id}
              href={'#' + it.id}
              onClick={(e) => onClick(e, it.id)}
              data-active={active === it.id}
              className={
                'toc-link block pl-3 pr-2 py-1.5 text-[13px] leading-snug border-l text-ink/80 hover:text-accent hover:bg-chip transition-colors ' +
                (active === it.id ? 'border-accent text-accent bg-chip' : 'border-softrule')
              }
            >
              <span className="font-mono text-muted mr-2">{String(i + 1).padStart(2, '0')}</span>{it.label}
            </a>
          ))}
        </nav>
        {extra && <div className="mt-6">{extra}</div>}
      </div>
    </aside>
  );
}

// ---------------- Infobox (right-side wiki card) ----------------

function Infobox({ title, subtitle, rows, footer }) {
  return (
    <aside className="border border-rule rounded-[3px] overflow-hidden bg-white shadow-[0_1px_0_rgba(0,0,0,0.02)]">
      <div className="bg-chip px-4 py-3 border-b border-rule">
        <div className="font-serif text-[15px] font-medium text-ink leading-tight">{title}</div>
        {subtitle && <div className="font-mono text-[11px] text-muted mt-1">{subtitle}</div>}
      </div>
      <dl className="divide-y divide-softrule text-[12.5px]">
        {rows.map(([k, v]) => (
          <div key={k} className="grid grid-cols-[88px_1fr] gap-3 px-4 py-2.5">
            <dt className="font-mono text-[11px] uppercase tracking-wide text-muted pt-[2px]">{k}</dt>
            <dd className="text-ink leading-snug break-words">{v}</dd>
          </div>
        ))}
      </dl>
      {footer && <div className="border-t border-rule bg-parchment px-4 py-3 text-[12px] text-muted">{footer}</div>}
    </aside>
  );
}

// ---------------- Project card (wiki-style entry) ----------------

function ProjectCard({ p, compact = false }) {
  return (
    <Link
      to={`/projects/${p.id}`}
      className="group block border-l-[3px] border-accent bg-white pl-5 pr-5 py-5 border-y border-r border-rule hover:bg-chip transition-colors"
    >
      <div className="flex items-start justify-between gap-6">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-3 flex-wrap">
            <h3 className="font-serif text-[20px] font-medium text-ink group-hover:text-accent transition-colors">{p.name}</h3>
            <span className="font-mono whitespace-nowrap text-[11px] px-1.5 py-[1px] rounded-[2px] border border-rule bg-chip text-muted">{p.status}</span>
          </div>
          <p className="mt-2 text-[14px] text-ink/85 leading-relaxed max-w-[62ch]">{p.tagline}</p>
          {!compact && (
            <div className="mt-3 flex items-center gap-x-5 gap-y-1 flex-wrap font-mono text-[11.5px] text-muted">
              <span className="whitespace-nowrap"><span className="text-ink/60">team</span> <span className="text-ink">{p.team}</span></span>
              <span className="whitespace-nowrap"><span className="text-ink/60">role</span> <span className="text-ink">{p.role}</span></span>
              <span className="whitespace-nowrap"><span className="text-ink/60">timeline</span> <span className="text-ink">{p.timeline}</span></span>
              <span className="whitespace-nowrap"><span className="text-ink/60">url</span> <span className="text-accent">{p.url}</span></span>
            </div>
          )}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {p.stack.flatMap(g => g.items).slice(0, 7).map(t => (
              <TechTag key={t} size="sm">{t}</TechTag>
            ))}
            {p.stack.flatMap(g => g.items).length > 7 && (
              <span className="font-mono text-[11px] text-muted self-center">+{p.stack.flatMap(g => g.items).length - 7}</span>
            )}
          </div>
        </div>
        <div className="hidden md:block shrink-0 self-stretch">
          <div className="w-32 h-full min-h-[100px] stripe-placeholder border border-rule rounded-[2px] flex items-center justify-center">
            <span className="font-mono text-[10px] text-muted/80 -rotate-90 tracking-widest uppercase">thumbnail</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

// ---------------- Architecture diagram placeholder ----------------

function ArchitectureDiagram({ nodes, title = '系統架構（概念圖）' }) {
  return (
    <figure className="not-prose border border-rule rounded-[3px] bg-white overflow-hidden">
      <figcaption className="flex items-center justify-between bg-chip border-b border-rule px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
        <span>{title}</span>
        <span>fig.1</span>
      </figcaption>
      <div className="dotgrid p-6">
        <div className="flex flex-wrap items-stretch gap-3">
          {nodes.map((n, i) => (
            <React.Fragment key={n.label}>
              <div className="flex-1 min-w-[160px] max-w-[220px] bg-white border border-rule rounded-[2px] px-3 py-3">
                <div className="font-mono text-[10px] text-muted mb-1">node_{String(i + 1).padStart(2, '0')}</div>
                <div className="text-[13px] text-ink font-medium leading-snug">{n.label}</div>
                {n.sub && <div className="text-[11.5px] text-muted mt-0.5 leading-snug">{n.sub}</div>}
              </div>
              {i < nodes.length - 1 && (
                <div className="self-center font-mono text-accent text-lg select-none">→</div>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="mt-5 pt-4 border-t border-dashed border-rule font-mono text-[11px] text-muted">
          // 此區為架構概念示意。實際 production 圖請參考 README / docs/architecture.md
        </div>
      </div>
    </figure>
  );
}

// ---------------- Screenshot gallery ----------------

function ScreenshotGallery({ items }) {
  return (
    <div className="not-prose">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((s, i) => (
          <figure key={s.title} className="border border-rule rounded-[3px] overflow-hidden bg-white">
            <div className="aspect-[16/10] stripe-placeholder relative flex items-center justify-center">
              <div className="text-center">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">screenshot</div>
                <div className="font-mono text-[12px] text-ink mt-0.5">fig.{i + 2}</div>
              </div>
              <span className="absolute top-2 left-2 font-mono text-[10px] px-1.5 py-0.5 bg-white/90 border border-rule rounded-[2px] text-muted">
                {String(i + 1).padStart(2, '0')}
              </span>
            </div>
            <figcaption className="border-t border-rule px-3 py-2.5">
              <div className="text-[13px] text-ink font-medium">{s.title}</div>
              <div className="text-[12px] text-muted mt-0.5 leading-snug">{s.caption}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

// ---------------- Layout shell ----------------

function PageShell({ children, sidebar, infobox, breadcrumbs }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-wiki mx-auto px-6 lg:px-10 pt-8">
          {breadcrumbs && (
            <nav className="mb-4 font-mono text-[11.5px] text-muted flex items-center gap-1.5 flex-wrap">
              {breadcrumbs.map((b, i) => (
                <React.Fragment key={i}>
                  {b.to ? <Link to={b.to} className="wiki-link">{b.label}</Link> : <span className="text-ink">{b.label}</span>}
                  {i < breadcrumbs.length - 1 && <span className="text-muted/60">/</span>}
                </React.Fragment>
              ))}
            </nav>
          )}
          <div className="grid grid-cols-12 gap-x-8 gap-y-10">
            {sidebar && <div className="col-span-12 md:col-span-3">{sidebar}</div>}
            <div className={
              'col-span-12 ' +
              (sidebar && infobox ? 'md:col-span-6' :
               sidebar ? 'md:col-span-9' :
               infobox ? 'md:col-span-9' : 'md:col-span-12')
            }>
              {children}
            </div>
            {infobox && <div className="col-span-12 md:col-span-3">{infobox}</div>}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

// ---------------- Page heading (wiki article title block) ----------------

function PageHeading({ kicker, title, lede }) {
  return (
    <header className="pb-4 border-b border-rule mb-6">
      {kicker && <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted mb-2">{kicker}</div>}
      <h1 className="font-serif text-[36px] leading-[1.15] font-medium text-ink tracking-tight">{title}</h1>
      {lede && <p className="mt-3 text-[15px] text-ink/85 leading-relaxed max-w-[62ch]">{lede}</p>}
    </header>
  );
}

// ---------------- Section heading (wiki h2 + edit anchor cue) ----------------

function Section({ id, title, children }) {
  return (
    <section id={id} className="mb-2">
      <h2 className="font-serif text-[22px] leading-tight font-medium text-ink border-b border-rule pb-1.5 mt-10 mb-4 scroll-mt-24 flex items-baseline gap-2">
        <span>{title}</span>
        <a href={'#' + id} className="font-mono text-[11px] text-muted hover:text-accent transition-colors no-underline">[#]</a>
      </h2>
      {children}
    </section>
  );
}

// Expose to other babel scripts
window.useHashRoute = useHashRoute;
window.Link = Link;
window.Navbar = Navbar;
window.Footer = Footer;
window.TechTag = TechTag;
window.TocSidebar = TocSidebar;
window.Infobox = Infobox;
window.ProjectCard = ProjectCard;
window.ArchitectureDiagram = ArchitectureDiagram;
window.ScreenshotGallery = ScreenshotGallery;
window.PageShell = PageShell;
window.PageHeading = PageHeading;
window.Section = Section;
