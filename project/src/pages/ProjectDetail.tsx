import { Link, useParams } from 'react-router-dom';
import { projectById, projects } from '../data/projects';
import { PageShell, PageHeading, Section } from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Infobox from '../components/Infobox';
import TechTag from '../components/TechTag';
import ArchitectureDiagram from '../components/ArchitectureDiagram';
import ScreenshotGallery from '../components/ScreenshotGallery';
import NotFound from './NotFound';

export default function ProjectDetail() {
  const { id = '' } = useParams<{ id: string }>();
  const p = projectById(id);
  if (!p) return <NotFound />;

  const toc = [
    { id: 'sec-overview', label: '概述' },
    { id: 'sec-concept', label: '核心理念' },
    { id: 'sec-arch', label: '系統架構' },
    { id: 'sec-stack', label: '技術棧' },
    { id: 'sec-shots', label: '截圖' },
    { id: 'sec-contrib', label: '核心工作與貢獻' },
  ];
  const others = projects.filter((x) => x.id !== p.id);

  const sidebar = (
    <Sidebar
      items={toc}
      extra={
        <div className="border border-rule rounded-[3px] p-3 bg-parchment">
          <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted mb-2">
            Other projects
          </div>
          <ul className="text-[12.5px] space-y-1.5">
            {others.map((o) => (
              <li key={o.id}>
                ·{' '}
                <Link to={`/projects/${o.id}`} className="wiki-link">
                  {o.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      }
    />
  );

  const subtitle = p.fullName.split('—')[1]?.trim();
  const infobox = (
    <Infobox
      title={p.name}
      subtitle={subtitle ? '// ' + subtitle : undefined}
      rows={[
        ['Status', p.status],
        ['Team', p.team],
        ['Role', p.role],
        ['Timeline', p.timeline],
        [
          'URL',
          p.url.startsWith('—') ? (
            <span className="text-muted">{p.url}</span>
          ) : (
            <a
              className="wiki-link break-all"
              href={'https://' + p.url}
              target="_blank"
              rel="noreferrer"
            >
              {p.url}
            </a>
          ),
        ],
        [
          'Stack',
          <div key="stack" className="flex flex-wrap gap-1 -ml-0.5">
            {p.stack
              .flatMap((g) => g.items)
              .slice(0, 6)
              .map((t) => (
                <TechTag key={t} size="sm">
                  {t}
                </TechTag>
              ))}
          </div>,
        ],
      ]}
      footer={
        <>產品分類：{p.team === '個人專案' ? '個人 / 概念驗證' : '商業 / 團隊產品'}</>
      }
    />
  );

  return (
    <PageShell
      sidebar={sidebar}
      infobox={infobox}
      breadcrumbs={[
        { to: '/', label: 'keychen.dev' },
        { to: '/projects', label: 'Projects' },
        { label: p.name },
      ]}
    >
      <PageHeading kicker={'Project · ' + p.id} title={p.fullName} lede={p.tagline} />

      <Section id="sec-overview" title="概述">
        <div className="prose-wiki">
          {p.overview.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </Section>

      <Section id="sec-concept" title="核心理念">
        <div className="prose-wiki">
          {p.concept.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </Section>

      <Section id="sec-arch" title="系統架構">
        <ArchitectureDiagram nodes={p.architectureNodes} />
        <p className="mt-4 text-muted text-[13px] leading-relaxed">
          上圖為簡化的概念流。實際 production 環境中還包含監控、CI/CD 與身分驗證層，因篇幅省略。
        </p>
      </Section>

      <Section id="sec-stack" title="技術棧">
        <div className="border border-rule rounded-[3px] divide-y divide-softrule">
          {p.stack.map((g) => (
            <div key={g.group} className="grid grid-cols-[110px_1fr] gap-4 px-4 py-3">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted pt-1">
                {g.group}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {g.items.map((t) => (
                  <TechTag key={t}>{t}</TechTag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="sec-shots" title="截圖">
        <p className="text-muted text-[13px] mb-3">// gallery 區為佔位，待補真實截圖。</p>
        <ScreenshotGallery items={p.screenshots} />
      </Section>

      <Section id="sec-contrib" title="核心工作與貢獻">
        <ul className="prose-wiki">
          {p.contributions.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </Section>

      <div className="mt-12 border-t border-rule pt-6 flex items-center justify-between font-mono text-[12px]">
        <Link to="/projects" className="wiki-link">
          ← 回 Projects
        </Link>
        {others[0] && (
          <Link to={`/projects/${others[0].id}`} className="wiki-link">
            下一個：{others[0].name} →
          </Link>
        )}
      </div>
    </PageShell>
  );
}
