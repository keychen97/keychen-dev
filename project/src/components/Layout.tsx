import { Fragment, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export type Crumb = { to?: string; label: string };

export function PageShell({
  children,
  sidebar,
  infobox,
  breadcrumbs,
}: {
  children: ReactNode;
  sidebar?: ReactNode;
  infobox?: ReactNode;
  breadcrumbs?: Crumb[];
}) {
  const mainCol =
    sidebar && infobox
      ? 'md:col-span-6'
      : sidebar
      ? 'md:col-span-9'
      : infobox
      ? 'md:col-span-9'
      : 'md:col-span-12';

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-wiki mx-auto px-6 lg:px-10 pt-8">
          {breadcrumbs && (
            <nav className="mb-4 font-mono text-[11.5px] text-muted flex items-center gap-1.5 flex-wrap">
              {breadcrumbs.map((b, i) => (
                <Fragment key={i}>
                  {b.to ? (
                    <Link to={b.to} className="wiki-link">
                      {b.label}
                    </Link>
                  ) : (
                    <span className="text-ink">{b.label}</span>
                  )}
                  {i < breadcrumbs.length - 1 && (
                    <span className="text-muted/60">/</span>
                  )}
                </Fragment>
              ))}
            </nav>
          )}
          <div className="grid grid-cols-12 gap-x-8 gap-y-10">
            {sidebar && (
              <div className="col-span-12 md:col-span-3">{sidebar}</div>
            )}
            <div className={'col-span-12 ' + mainCol}>{children}</div>
            {infobox && (
              <div className="col-span-12 md:col-span-3">{infobox}</div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export function PageHeading({
  kicker,
  title,
  lede,
}: {
  kicker?: string;
  title: ReactNode;
  lede?: ReactNode;
}) {
  return (
    <header className="pb-4 border-b border-rule mb-6">
      {kicker && (
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted mb-2">
          {kicker}
        </div>
      )}
      <h1 className="font-serif text-[36px] leading-[1.15] font-medium text-ink tracking-tight">
        {title}
      </h1>
      {lede && (
        <p className="mt-3 text-[15px] text-ink/85 leading-relaxed max-w-[62ch]">
          {lede}
        </p>
      )}
    </header>
  );
}

export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mb-2">
      <h2 className="font-serif text-[22px] leading-tight font-medium text-ink border-b border-rule pb-1.5 mt-10 mb-4 scroll-mt-24 flex items-baseline gap-2">
        <span>{title}</span>
        <a
          href={'#' + id}
          className="font-mono text-[11px] text-muted hover:text-accent transition-colors no-underline"
        >
          [#]
        </a>
      </h2>
      {children}
    </section>
  );
}
