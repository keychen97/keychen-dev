import { profile } from '../data/profile';
import { PageShell, PageHeading, Section } from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Infobox from '../components/Infobox';
import TechTag from '../components/TechTag';

export default function About() {
  const toc = [
    { id: 'sec-summary', label: '個人摘要' },
    { id: 'sec-skills', label: '技術能力' },
    { id: 'sec-experience', label: '工作經歷' },
    { id: 'sec-education', label: '學歷' },
    { id: 'sec-contact', label: '聯絡資訊' },
  ];

  const sidebar = <Sidebar items={toc} />;

  const infobox = (
    <Infobox
      title="Key Chen"
      subtitle="// curriculum vitae"
      rows={[
        ['Name', '陳芝宇 / Key Chen'],
        ['Role', '前端 + 雲端工程師'],
        ['Based', profile.location],
        ['Status', profile.status],
        [
          'Email',
          <a key="e" className="wiki-link break-all" href={'mailto:' + profile.email}>
            {profile.email}
          </a>,
        ],
        ['Phone', <span key="p" className="font-mono">{profile.phone}</span>],
        [
          'GitHub',
          <a
            key="g"
            className="wiki-link"
            href={'https://' + profile.github}
            target="_blank"
            rel="noreferrer"
          >
            @keychen97
          </a>,
        ],
        [
          'Site',
          <a key="s" className="wiki-link" href={'https://' + profile.portfolio}>
            {profile.portfolio}
          </a>,
        ],
      ]}
    />
  );

  return (
    <PageShell
      sidebar={sidebar}
      infobox={infobox}
      breadcrumbs={[
        { to: '/', label: 'keychen.dev' },
        { label: 'About' },
      ]}
    >
      <PageHeading
        kicker="Curriculum Vitae"
        title="關於 Key Chen"
        lede="從廣電到雲端：媒體業五年企劃製作經驗，再以 530 小時全職培訓系統性跨入工程領域。"
      />

      <Section id="sec-summary" title="個人摘要">
        <div className="prose-wiki">
          {profile.summary.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <p>目前職涯定位：{profile.status}。</p>
        </div>
      </Section>

      <Section id="sec-skills" title="技術能力">
        <div className="border border-rule rounded-[3px] divide-y divide-softrule">
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

      <Section id="sec-experience" title="工作經歷">
        <div className="border-l border-rule pl-6 ml-1 space-y-7">
          {profile.experience.map((e, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-[27px] top-2 w-2.5 h-2.5 bg-white border border-accent rounded-full" />
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
                <h3 className="font-serif text-[17px] text-ink font-medium whitespace-nowrap">
                  {e.title}
                </h3>
                <span className="text-[13.5px] text-ink/85">· {e.company}</span>
              </div>
              <div className="font-mono text-[11.5px] text-muted mt-1">{e.period}</div>
              <ul className="mt-2 text-[13.5px] leading-relaxed text-ink/85 list-disc pl-5 space-y-1">
                {e.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section id="sec-education" title="學歷">
        <div className="border border-rule rounded-[3px] divide-y divide-softrule">
          {profile.education.map((e, i) => (
            <div
              key={i}
              className="px-4 py-3 flex flex-wrap items-baseline justify-between gap-2"
            >
              <div>
                <div className="text-[14px] text-ink font-medium">{e.school}</div>
                <div className="text-[13px] text-ink/80 mt-0.5">{e.program}</div>
              </div>
              <div className="font-mono text-[11.5px] text-muted">{e.period}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="sec-contact" title="聯絡資訊">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-rule border border-rule">
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
            href={'tel:' + profile.phone.replace(/-/g, '')}
            className="bg-white px-4 py-3 hover:bg-chip transition-colors"
          >
            <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted">
              phone
            </div>
            <div className="font-mono text-[13.5px] text-accent mt-1">{profile.phone}</div>
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
            href={'https://' + profile.portfolio}
            className="bg-white px-4 py-3 hover:bg-chip transition-colors"
          >
            <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted">
              portfolio
            </div>
            <div className="text-[13.5px] text-accent mt-1">{profile.portfolio}</div>
          </a>
        </div>
      </Section>
    </PageShell>
  );
}
