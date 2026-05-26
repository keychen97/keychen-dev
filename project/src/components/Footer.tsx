import { Link } from 'react-router-dom';
import { profile } from '../data/profile';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-rule bg-parchment">
      <div className="max-w-wiki mx-auto px-6 lg:px-10 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-[13.5px]">
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted mb-3">
            Contact
          </div>
          <ul className="space-y-1.5">
            <li>
              <span className="font-mono text-muted mr-2">email</span>
              <a className="wiki-link" href={'mailto:' + profile.email}>
                {profile.email}
              </a>
            </li>
            <li>
              <span className="font-mono text-muted mr-2">phone</span>
              <a className="wiki-link" href={'tel:' + profile.phone.replace(/-/g, '')}>
                {profile.phone}
              </a>
            </li>
            <li>
              <span className="font-mono text-muted mr-2">github</span>
              <a
                className="wiki-link"
                href={'https://' + profile.github}
                target="_blank"
                rel="noreferrer"
              >
                {profile.github}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted mb-3">
            Sitemap
          </div>
          <ul className="space-y-1.5">
            <li>
              <Link to="/" className="wiki-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/projects" className="wiki-link">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/about" className="wiki-link">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-muted mb-4">CONNECT</p>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="https://www.linkedin.com/in/keychen97" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                linkedin.com/in/keychen97
              </a>
            </li>
            <li>
              <a href="https://github.com/keychen97" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                github.com/keychen97
              </a>
            </li>
          </ul>
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
