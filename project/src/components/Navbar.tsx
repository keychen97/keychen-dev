import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  const items = [
    { to: '/', label: 'Home', end: true },
    { to: '/projects', label: 'Projects' },
    { to: '/about', label: 'About' },
  ];
  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-rule">
      <div className="max-w-wiki mx-auto px-6 lg:px-10 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-baseline gap-2 group">
          <span className="inline-flex items-baseline">
            <span className="font-mono text-[15px] font-semibold text-ink tracking-tight">keychen</span>
            <span className="font-mono text-[15px] text-ink">.dev</span>
          </span>
          <span className="hidden sm:inline font-mono text-[11px] text-muted uppercase tracking-[0.18em]">
            Portfolio · v1
          </span>
        </Link>
        <nav className="flex items-center gap-1">
          {items.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.end}
              className={({ isActive }) =>
                'px-3 py-1.5 text-[13.5px] rounded-sm transition-colors border ' +
                (isActive
                  ? 'text-accent border-rule bg-chip'
                  : 'text-ink border-transparent hover:bg-chip hover:text-accent')
              }
            >
              {n.label}
            </NavLink>
          ))}
          <a
            href="https://github.com/keychen97"
            target="_blank"
            rel="noreferrer"
            className="ml-2 px-3 py-1.5 text-[13.5px] font-mono text-muted hover:text-accent transition-colors"
          >
            github ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
