import { Link } from 'react-router-dom';
import { profile } from '../data/profile';
import { projects } from '../data/projects';
import { PageShell, PageHeading } from '../components/Layout';
import Sidebar from '../components/Sidebar';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const toc = projects.map((p) => ({ id: 'p-' + p.id, label: p.name }));

  const sidebar = (
    <Sidebar
      title="Index"
      items={toc}
      extra={
        <div className="border border-rule rounded-[3px] p-3 bg-parchment">
          <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted mb-2">
            Conventions
          </div>
          <ul className="text-[12px] text-ink/85 leading-relaxed space-y-1.5">
            <li>
              <span className="font-mono text-accent">●</span> 商業 / 上線
            </li>
            <li>
              <span className="font-mono text-muted">○</span> 個人 / WIP
            </li>
          </ul>
        </div>
      }
    />
  );

  return (
    <PageShell
      sidebar={sidebar}
      breadcrumbs={[
        { to: '/', label: 'keychen.dev' },
        { label: 'Projects' },
      ]}
    >
      <PageHeading
        kicker={`Index · ${projects.length} entries`}
        title="專案總覽"
        lede="以下三項專案橫跨多雲整合、企業級搜尋系統、與個人健康資料整合。每項皆以可量產的工程化方式建構。"
      />
      <div className="flex flex-col gap-4">
        {projects.map((p) => (
          <div key={p.id} id={'p-' + p.id} className="scroll-mt-24">
            <ProjectCard p={p} />
          </div>
        ))}
      </div>

      <div className="mt-12 border-t border-rule pt-6">
        <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          See also
        </div>
        <ul className="mt-2 text-[13.5px] space-y-1">
          <li>
            ·{' '}
            <Link to="/about" className="wiki-link">
              完整履歷與工作經歷
            </Link>
          </li>
          <li>
            ·{' '}
            <a
              className="wiki-link"
              href={'https://' + profile.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub @keychen97
            </a>
          </li>
        </ul>
      </div>
    </PageShell>
  );
}
