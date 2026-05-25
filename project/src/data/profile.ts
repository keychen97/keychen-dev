export type Skill = {
  category: string;
  label: string;
  detail: string;
  items: string[];
};

export type Experience = {
  title: string;
  company: string;
  period: string;
  bullets: string[];
};

export type Education = {
  school: string;
  program: string;
  period: string;
};

export type Profile = {
  name: string;
  handle: string;
  tagline: string;
  email: string;
  phone: string;
  github: string;
  portfolio: string;
  location: string;
  status: string;
  summary: string[];
  stats: { value: string; label: string }[];
  skills: Skill[];
  experience: Experience[];
  education: Education[];
};

export const profile: Profile = {
  name: 'Key Chen',
  handle: 'keychen.dev',
  tagline: '媒體背景轉職前端工程師，擅長前端介面開發、AWS 雲端串接與跨團隊溝通',
  email: 'keychenwork2018@gmail.com',
  phone: '0918-308-339',
  github: 'github.com/keychen97',
  portfolio: 'keychen.dev',
  location: 'Taipei, Taiwan',
  status: '積極尋求雲端 / 全端相關職缺',
  summary: [
    '在媒體業做了五年企劃與製作，某天決定系統性地跨入技術領域，報名了為期半年、530 小時的全職培訓。',
    '從產品發想到實際落地執行，參與打造了兩個具備完整架構的產品——一個是整合 AWS 與 GCP 的多雲成本管理平台，另一個是已有企業採用的智能搜尋系統。',
    '媒體背景讓我習慣從使用者角度思考問題，也培養了在高壓環境下快速學習與執行的能力。',
  ],
  stats: [
    { value: '5 yrs', label: '媒體業企劃與製作' },
    { value: '530 hr', label: '全職技術培訓' },
    { value: '2 products', label: '已落地產品' },
    { value: '40 days', label: '極速交付週期' },
  ],
  skills: [
    {
      category: 'Cloud',
      label: '雲端平台整合',
      detail:
        'AWS CloudFormation、IAM Role 串接、前端 API 整合；了解最小權限原則。GCP 核心服務概念。',
      items: ['AWS', 'GCP', 'CloudFormation', 'IAM', 'App Runner', 'Cloudflare Pages'],
    },
    {
      category: 'Frontend',
      label: '前端開發',
      detail:
        'React + TypeScript + Vite 完成兩項產品前端；資料視覺化（Chart.js、Recharts、Sankey）與 Dashboard 介面。',
      items: ['React', 'TypeScript', 'Vite', 'Chart.js', 'Recharts', 'Axios', 'Ant Design', 'Tailwind CSS'],
    },
    {
      category: 'Backend',
      label: 'Python / FastAPI 基礎',
      detail:
        '課程期間學習 FastAPI 框架與 Pydantic 資料驗證；可進行基礎後端功能開發與團隊協作。',
      items: ['Python', 'FastAPI', 'Pydantic', 'Pandas', 'Selenium'],
    },
    {
      category: 'Data',
      label: '資料庫與資料處理',
      detail:
        '兩項產品均以 PostgreSQL 作為主資料庫；具備關聯式資料庫實際使用經驗。',
      items: ['PostgreSQL', 'pgvector', 'MySQL', 'MongoDB', 'Tableau', 'Power BI'],
    },
    {
      category: 'DevEnv',
      label: '系統與工具',
      detail:
        'Linux (Ubuntu) / macOS 指令列操作、環境設定、服務建置；基本 Git 操作。',
      items: ['Ubuntu', 'macOS', 'Git', 'Bash'],
    },
    {
      category: 'Design',
      label: 'UI / UX 介面設計',
      detail:
        '具媒體產業設計背景，擅用 Illustrator 與 Photoshop；以工程思維將設計精準實作為前端頁面。',
      items: ['Illustrator', 'Photoshop', 'Figma'],
    },
  ],
  experience: [
    {
      title: '實習前端設計工程師',
      company: '想見科技股份有限公司',
      period: '2025/12 — 2026/05',
      bullets: [
        '參與兩項產品的前端架構開發與 AWS 串接實作。',
        '負責 Dashboard 介面設計與資料視覺化元件開發。',
      ],
    },
    {
      title: '行銷企劃 / 影片製作',
      company: '黑火娛樂有限公司',
      period: '2019 — 2024',
      bullets: [
        '統籌節目企劃、製作流程與跨部門溝通。',
        '培養在高壓時程下快速產出可交付成果的能力。',
      ],
    },
    {
      title: '工讀經歷',
      company: '東森電視自製戲劇中心 / 壹電視新聞編輯中心',
      period: '在校期間',
      bullets: ['電視戲劇製作後勤與新聞編輯室實務支援。'],
    },
  ],
  education: [
    {
      school: '中國文化大學 × 程式驅動產業新尖兵計畫',
      program: 'AI 大數據人才養成班（第 7 梯次）',
      period: '2025/12 — 2026/05',
    },
    {
      school: '國立台灣藝術大學',
      program: '廣播電視學系 學士',
      period: '2015/09 — 2020/07',
    },
  ],
};
