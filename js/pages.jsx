// ============================================================================
// pages.jsx — Page components for /, /projects, /projects/:id, /about
// ============================================================================

// ---------------------------------------------------------------------------
// Home — /
// ---------------------------------------------------------------------------
function HomePage() {
  const toc = [
    { id: 'sec-intro', label: '簡介' },
    { id: 'sec-skills', label: '技術能力概覽' },
    { id: 'sec-projects', label: '精選專案' },
    { id: 'sec-contact', label: '聯絡' },
  ];
  const featured = projects;

  const sidebar = <TocSidebar items={toc} />;

  const infobox = (
    <Infobox
      title="Key Chen"
      subtitle="// portfolio · home"
      rows={[
        ['Role', '前端 + 雲端工程師'],
        ['Based', profile.location],
        ['Status', profile.status],
        ['Email', <a className="wiki-link break-all" href={'mailto:' + profile.email}>{profile.email}</a>],
        ['GitHub', <a className="wiki-link" href={'https://' + profile.github} target="_blank" rel="noreferrer">{profile.github.replace('github.com/','@')}</a>],
        ['Phone', <span className="font-mono">{profile.phone}</span>],
      ]}
      footer={<>This entry was last updated <span className="font-mono">2026-05-21</span>.</>}
    />
  );

  return (
    <PageShell sidebar={sidebar} infobox={infobox}>
      <PageHeading
        kicker="Personal Engineering Portfolio · keychen.dev"
        title="Key Chen"
        lede={profile.tagline}
      />

      {/* Lede / summary */}
      <Section id="sec-intro" title="簡介">
        <div className="prose-wiki">
          {profile.summary.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-rule border border-rule mt-6">
          {profile.stats.map(s => (
            <div key={s.label} className="bg-white px-4 py-4">
              <div className="font-serif text-[26px] leading-none text-ink">{s.value}</div>
              <div className="font-mono text-[11px] text-muted mt-2 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section id="sec-skills" title="技術能力概覽">
        <div className="prose-wiki"><p>以兩個落地產品為主要實作經驗。下列技術依「實際在產品中使用」與「課程 / 個人實作」混合呈現。</p></div>
        <div className="border border-rule rounded-[3px] divide-y divide-softrule mt-2">
          {profile.skills.map(s => (
            <div key={s.category} className="grid grid-cols-[110px_1fr] gap-4 px-4 py-3.5">
              <div>
                <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted">{s.category}</div>
                <div className="text-[13.5px] text-ink font-medium mt-0.5 leading-snug">{s.label}</div>
              </div>
              <div>
                <p className="text-[13.5px] text-ink/85 leading-relaxed">{s.detail}</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {s.items.map(t => <TechTag key={t} size="sm">{t}</TechTag>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Featured projects */}
      <Section id="sec-projects" title="精選專案">
        <div className="prose-wiki"><p>三項代表性產品：兩項團隊極速交付的商業專案，一項持續演進中的個人專案。完整列表見 <Link to="/projects" className="wiki-link">Projects</Link>。</p></div>
        <div className="flex flex-col gap-3 mt-2">
          {featured.map(p => <ProjectCard key={p.id} p={p} />)}
        </div>
      </Section>

      {/* Contact */}
      <Section id="sec-contact" title="聯絡">
        <div className="prose-wiki"><p>目前積極尋求雲端或全端相關職缺。歡迎來信或在 GitHub 上交流。</p></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-rule border border-rule">
          <a href={'mailto:' + profile.email} className="bg-white px-4 py-3 hover:bg-chip transition-colors">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted">email</div>
            <div className="text-[13.5px] text-accent mt-1 break-all">{profile.email}</div>
          </a>
          <a href={'https://' + profile.github} target="_blank" rel="noreferrer" className="bg-white px-4 py-3 hover:bg-chip transition-colors">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted">github</div>
            <div className="text-[13.5px] text-accent mt-1">{profile.github}</div>
          </a>
          <a href={'tel:' + profile.phone.replace(/-/g,'')} className="bg-white px-4 py-3 hover:bg-chip transition-colors">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted">phone</div>
            <div className="font-mono text-[13.5px] text-accent mt-1">{profile.phone}</div>
          </a>
        </div>
      </Section>
    </PageShell>
  );
}

// ---------------------------------------------------------------------------
// Projects index — /projects
// ---------------------------------------------------------------------------
function ProjectsPage() {
  const toc = projects.map(p => ({ id: 'p-' + p.id, label: p.name }));

  const sidebar = (
    <TocSidebar
      title="Index"
      items={toc}
      extra={
        <div className="border border-rule rounded-[3px] p-3 bg-parchment">
          <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted mb-2">Conventions</div>
          <ul className="text-[12px] text-ink/85 leading-relaxed space-y-1.5">
            <li><span className="font-mono text-accent">●</span> 商業 / 上線</li>
            <li><span className="font-mono text-muted">○</span> 個人 / WIP</li>
          </ul>
        </div>
      }
    />
  );

  return (
    <PageShell sidebar={sidebar} breadcrumbs={[{ to: '/', label: 'keychen.dev' }, { label: 'Projects' }]}>
      <PageHeading
        kicker="Index · 3 entries"
        title="專案總覽"
        lede="以下三項專案橫跨多雲整合、企業級搜尋系統、與個人健康資料整合。每項皆以可量產的工程化方式建構。"
      />
      <div className="flex flex-col gap-4">
        {projects.map(p => (
          <div key={p.id} id={'p-' + p.id} className="scroll-mt-24">
            <ProjectCard p={p} />
          </div>
        ))}
      </div>

      <div className="mt-12 border-t border-rule pt-6">
        <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">See also</div>
        <ul className="mt-2 text-[13.5px] space-y-1">
          <li>· <Link to="/about" className="wiki-link">完整履歷與工作經歷</Link></li>
          <li>· <a className="wiki-link" href={'https://' + profile.github} target="_blank" rel="noreferrer">GitHub @keychen97</a></li>
        </ul>
      </div>
    </PageShell>
  );
}

// ---------------------------------------------------------------------------
// Project detail — /projects/:id
// ---------------------------------------------------------------------------
function ProjectDetailPage({ id }) {
  const p = projects.find(x => x.id === id);
  if (!p) return <NotFoundPage />;

  const toc = [
    { id: 'sec-overview', label: '概述' },
    { id: 'sec-concept', label: '核心理念' },
    { id: 'sec-arch', label: '系統架構' },
    { id: 'sec-stack', label: '技術棧' },
    { id: 'sec-shots', label: '截圖' },
    { id: 'sec-contrib', label: '核心工作與貢獻' },
  ];
  const otherProjects = projects.filter(x => x.id !== p.id);

  const sidebar = (
    <TocSidebar
      items={toc}
      extra={
        <div className="border border-rule rounded-[3px] p-3 bg-parchment">
          <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted mb-2">Other projects</div>
          <ul className="text-[12.5px] space-y-1.5">
            {otherProjects.map(o => (
              <li key={o.id}>· <Link to={`/projects/${o.id}`} className="wiki-link">{o.name}</Link></li>
            ))}
          </ul>
        </div>
      }
    />
  );

  const infobox = (
    <Infobox
      title={p.name}
      subtitle={'// ' + p.fullName.split('—')[1]?.trim()}
      rows={[
        ['Status', p.status],
        ['Team', p.team],
        ['Role', p.role],
        ['Timeline', p.timeline],
        ['URL', p.url.startsWith('—') ? <span className="text-muted">{p.url}</span> : (
          <a className="wiki-link break-all" href={'https://' + p.url} target="_blank" rel="noreferrer">{p.url}</a>
        )],
        ['Stack', (
          <div className="flex flex-wrap gap-1 -ml-0.5">
            {p.stack.flatMap(g => g.items).slice(0, 6).map(t => (
              <TechTag key={t} size="sm">{t}</TechTag>
            ))}
          </div>
        )],
      ]}
      footer={<>產品分類：{p.team === '個人專案' ? '個人 / 概念驗證' : '商業 / 團隊產品'}</>}
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
      <PageHeading
        kicker={'Project · ' + p.id}
        title={p.fullName}
        lede={p.tagline}
      />

      <Section id="sec-overview" title="概述">
        <div className="prose-wiki">
          {p.overview.map((para, i) => <p key={i}>{para}</p>)}
        </div>
      </Section>

      <Section id="sec-concept" title="核心理念">
        <div className="prose-wiki">
          {p.concept.map((para, i) => <p key={i}>{para}</p>)}
        </div>
      </Section>

      <Section id="sec-arch" title="系統架構">
        <ArchitectureDiagram nodes={p.architectureNodes} />
        <p className="prose-wiki mt-4 text-muted text-[13px]">
          上圖為簡化的概念流。實際 production 環境中還包含監控、CI/CD 與身分驗證層，因篇幅省略。
        </p>
      </Section>

      <Section id="sec-stack" title="技術棧">
        <div className="border border-rule rounded-[3px] divide-y divide-softrule">
          {p.stack.map(g => (
            <div key={g.group} className="grid grid-cols-[110px_1fr] gap-4 px-4 py-3">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted pt-1">{g.group}</div>
              <div className="flex flex-wrap gap-1.5">
                {g.items.map(t => <TechTag key={t}>{t}</TechTag>)}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="sec-shots" title="截圖">
        <p className="prose-wiki text-muted text-[13px]">// gallery 區為佔位，待補真實截圖。</p>
        <ScreenshotGallery items={p.screenshots} />
      </Section>

      <Section id="sec-contrib" title="核心工作與貢獻">
        <ul className="prose-wiki">
          {p.contributions.map((c, i) => <li key={i}>{c}</li>)}
        </ul>
      </Section>

      <div className="mt-12 border-t border-rule pt-6 flex items-center justify-between font-mono text-[12px]">
        <Link to="/projects" className="wiki-link">← 回 Projects</Link>
        {otherProjects[0] && (
          <Link to={`/projects/${otherProjects[0].id}`} className="wiki-link">
            下一個：{otherProjects[0].name} →
          </Link>
        )}
      </div>
    </PageShell>
  );
}

// ---------------------------------------------------------------------------
// About — /about
// ---------------------------------------------------------------------------
function AboutPage() {
  const toc = [
    { id: 'sec-summary', label: '個人摘要' },
    { id: 'sec-skills', label: '技術能力' },
    { id: 'sec-experience', label: '工作經歷' },
    { id: 'sec-education', label: '學歷' },
    { id: 'sec-contact', label: '聯絡資訊' },
  ];
  const sidebar = <TocSidebar items={toc} />;

  const infobox = (
    <Infobox
      title="Key Chen"
      subtitle="// curriculum vitae"
      rows={[
        ['Name', '陳冠閔 / Key Chen'],
        ['Role', '前端 + 雲端工程師'],
        ['Based', profile.location],
        ['Status', profile.status],
        ['Email', <a className="wiki-link break-all" href={'mailto:' + profile.email}>{profile.email}</a>],
        ['Phone', <span className="font-mono">{profile.phone}</span>],
        ['GitHub', <a className="wiki-link" href={'https://' + profile.github} target="_blank" rel="noreferrer">@keychen97</a>],
        ['Site', <a className="wiki-link" href={'https://' + profile.portfolio}>{profile.portfolio}</a>],
      ]}
    />
  );

  return (
    <PageShell
      sidebar={sidebar}
      infobox={infobox}
      breadcrumbs={[{ to: '/', label: 'keychen.dev' }, { label: 'About' }]}
    >
      <PageHeading
        kicker="Curriculum Vitae"
        title="關於 Key Chen"
        lede="從廣電到雲端：媒體業五年企劃製作經驗，再以 530 小時全職培訓系統性跨入工程領域。"
      />

      <Section id="sec-summary" title="個人摘要">
        <div className="prose-wiki">
          {profile.summary.map((p, i) => <p key={i}>{p}</p>)}
          <p>目前職涯定位：{profile.status}。</p>
        </div>
      </Section>

      <Section id="sec-skills" title="技術能力">
        <div className="border border-rule rounded-[3px] divide-y divide-softrule">
          {profile.skills.map(s => (
            <div key={s.category} className="grid grid-cols-[110px_1fr] gap-4 px-4 py-3.5">
              <div>
                <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted">{s.category}</div>
                <div className="text-[13.5px] text-ink font-medium mt-0.5 leading-snug">{s.label}</div>
              </div>
              <div>
                <p className="text-[13.5px] text-ink/85 leading-relaxed">{s.detail}</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {s.items.map(t => <TechTag key={t} size="sm">{t}</TechTag>)}
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
                <h3 className="font-serif text-[17px] text-ink font-medium whitespace-nowrap">{e.title}</h3>
                <span className="text-[13.5px] text-ink/85">· {e.company}</span>
              </div>
              <div className="font-mono text-[11.5px] text-muted mt-1">{e.period}</div>
              <ul className="mt-2 text-[13.5px] leading-relaxed text-ink/85 list-disc pl-5 space-y-1">
                {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section id="sec-education" title="學歷">
        <div className="border border-rule rounded-[3px] divide-y divide-softrule">
          {profile.education.map((e, i) => (
            <div key={i} className="px-4 py-3 flex flex-wrap items-baseline justify-between gap-2">
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
          <a href={'mailto:' + profile.email} className="bg-white px-4 py-3 hover:bg-chip transition-colors">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted">email</div>
            <div className="text-[13.5px] text-accent mt-1 break-all">{profile.email}</div>
          </a>
          <a href={'tel:' + profile.phone.replace(/-/g,'')} className="bg-white px-4 py-3 hover:bg-chip transition-colors">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted">phone</div>
            <div className="font-mono text-[13.5px] text-accent mt-1">{profile.phone}</div>
          </a>
          <a href={'https://' + profile.github} target="_blank" rel="noreferrer" className="bg-white px-4 py-3 hover:bg-chip transition-colors">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted">github</div>
            <div className="text-[13.5px] text-accent mt-1">{profile.github}</div>
          </a>
          <a href={'https://' + profile.portfolio} className="bg-white px-4 py-3 hover:bg-chip transition-colors">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted">portfolio</div>
            <div className="text-[13.5px] text-accent mt-1">{profile.portfolio}</div>
          </a>
        </div>
      </Section>
    </PageShell>
  );
}

// ---------------------------------------------------------------------------
// 404
// ---------------------------------------------------------------------------
function NotFoundPage() {
  return (
    <PageShell breadcrumbs={[{ to: '/', label: 'keychen.dev' }, { label: '404' }]}>
      <PageHeading kicker="Error 404" title="找不到頁面" lede="這個路由不存在，或內容尚未撰寫。" />
      <div className="prose-wiki">
        <p>你可能想去：</p>
        <ul>
          <li><Link to="/" className="wiki-link">首頁</Link></li>
          <li><Link to="/projects" className="wiki-link">專案總覽</Link></li>
          <li><Link to="/about" className="wiki-link">關於 Key Chen</Link></li>
        </ul>
      </div>
    </PageShell>
  );
}

// Expose
window.HomePage = HomePage;
window.ProjectsPage = ProjectsPage;
window.ProjectDetailPage = ProjectDetailPage;
window.AboutPage = AboutPage;
window.NotFoundPage = NotFoundPage;
