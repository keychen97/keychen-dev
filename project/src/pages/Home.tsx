import { Link } from 'react-router-dom';
import { profile } from '../data/profile';
import { projects } from '../data/projects';
import { PageShell, PageHeading, Section } from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Infobox from '../components/Infobox';
import TechTag from '../components/TechTag';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  const toc = [
    { id: 'sec-intro', label: '簡介' },
    { id: 'sec-skills', label: '技術能力概覽' },
    { id: 'sec-projects', label: '精選專案' },
    { id: 'sec-contact', label: '聯絡' },
  ];

  const sidebar = <Sidebar items={toc} />;

  const infobox = (
    <Infobox
      title="Key Chen"
      subtitle="// portfolio · home"
      rows={[
        ['Role', '前端 + 雲端工程師'],
        ['Based', profile.location],
        ['Status', profile.status],
        [
          'Email',
          <a key="e" className="wiki-link break-all" href={'mailto:' + profile.email}>
            {profile.email}
          </a>,
        ],
        [
          'GitHub',
          <a
            key="g"
            className="wiki-link"
            href={'https://' + profile.github}
            target="_blank"
            rel="noreferrer"
          >
            {profile.github.replace('github.com/', '@')}
          </a>,
        ],
        ['Phone', <span key="p" className="font-mono">{profile.phone}</span>],
      ]}
      footer={
        <>
          This entry was last updated <span className="font-mono">2026-05-21</span>.
        </>
      }
    />
  );

  return (
    <PageShell sidebar={sidebar} infobox={infobox}>
      <PageHeading
        kicker="Personal Engineering Portfolio · keychen.dev"
        title="Key Chen"
        lede={profile.tagline}
      />

      <Section id="sec-intro" title="簡介">
        <div className="prose-wiki">
          {profile.summary.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-rule border border-rule mt-6">
          {profile.stats.map((s) => (
            <div key={s.label} className="bg-white px-4 py-4">
              <div className="font-serif text-[26px] leading-none text-ink">{s.value}</div>
              <div className="font-mono text-[11px] text-muted mt-2 uppercase tracking-wider">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="sec-skills" title="技術能力概覽">
        <div className="prose-wiki">
          <p>
            以兩個落地產品為主要實作經驗。下列技術依「實際在產品中使用」與「課程 / 個人實作」混合呈現。
          </p>
        </div>
        <div className="border border-rule rounded-[3px] divide-y divide-softrule mt-2">
          {profile.skills.map((s) => (
            <div key={s.category} className="grid grid-cols-[110px_1fr] gap-4 px-4 py-3.5">
              <div>
                <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted">
                  {s.category}
                </div>
                <div className="text-[13.5px] text-ink font-medium mt-0.5 leading-snug">
                  {s.label}
                </div>
              </div>
              <div>
                <p className="text-[13.5px] text-ink/85 leading-relaxed">{s.detail}</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {s.items.map((t) => (
                    <TechTag key={t} size="sm">
                      {t}
                    </TechTag>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="sec-projects" title="精選專案">
        <div className="prose-wiki">
          <p>
            三項代表性產品：兩項團隊極速交付的商業專案，一項持續演進中的個人專案。完整列表見{' '}
            <Link to="/projects" className="wiki-link">
              Projects
            </Link>
            。
          </p>
        </div>
        <div className="flex flex-col gap-3 mt-2">
          {projects.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>
      </Section>

      <Section id="sec-contact" title="聯絡">
        <div className="prose-wiki">
          <p>目前積極尋求雲端或全端相關職缺。歡迎來信或在 GitHub 上交流。</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-rule border border-rule">
          <a
            href={'mailto:' + profile.email}
            className="bg-white px-4 py-3 hover:bg-chip transition-colors"
          >
            <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted">
              email
            </div>
            <div className="text-[13.5px] text-accent mt-1 break-all">{profile.email}</div>
          </a>
          <a
            href={'https://' + profile.github}
            target="_blank"
            rel="noreferrer"
            className="bg-white px-4 py-3 hover:bg-chip transition-colors"
          >
            <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted">
              github
            </div>
            <div className="text-[13.5px] text-accent mt-1">{profile.github}</div>
          </a>
          <a
            href={'tel:' + profile.phone.replace(/-/g, '')}
            className="bg-white px-4 py-3 hover:bg-chip transition-colors"
          >
            <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted">
              phone
            </div>
            <div className="font-mono text-[13.5px] text-accent mt-1">{profile.phone}</div>
          </a>
        </div>
      </Section>
    </PageShell>
  );
}
