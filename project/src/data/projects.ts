export type Project = {
  id: string;
  name: string;
  fullName: string;
  tagline: string;
  status: string;
  team: string;
  role: string;
  url: string;
  timeline: string;
  cardAccent: string;
  overview: string[];
  concept: string[];
  stack: { group: string; items: string[] }[];
  architectureNodes: { label: string; sub?: string }[];
  contributions: string[];
  screenshots: { title: string; caption: string }[];
};

export const projects: Project[] = [
  {
    id: 'fincloud',
    name: 'FinCloud',
    fullName: 'FinCloud — 整合多雲數據成本管理平台',
    tagline: '專為小型新創團隊打造的多雲（AWS + GCP）成本控管與優化建議 Dashboard。',
    status: '已上線 demo',
    team: '雙人團隊',
    role: '前端架構 + AWS 串接',
    url: 'fin-cloud.app',
    timeline: '40 天極速交付',
    cardAccent: '#0066CC',
    overview: [
      'FinCloud 是專為缺乏專職雲端管理人員的小型新創團隊打造的多雲成本控管平台。整合 AWS 與 GCP 帳單資料、資源監控、異常偵測與優化建議，以直觀的 Dashboard 介面讓不熟悉雲端的團隊也能輕鬆掌握雲端支出，並在超支前提早收到通知。',
      '產品在 40 天內由雙人團隊極速交付。我負責前端完整架構、雲端 SDK 串接、以及以使用者思維驅動的介面設計。',
    ],
    concept: [
      '小型團隊的痛點不是「看不懂帳單」，而是「沒人有時間每天看」。FinCloud 把多雲帳單壓平成一個可消化的 Dashboard，讓非雲端工程師也能對團隊每月的雲端支出有即時感知。',
      '設計上採「異常先告知，細節後挖掘」策略：首頁只呈現超支警示與本月趨勢；想看細節再進到資源拓樸圖（Sankey）與單一服務時序圖。',
    ],
    stack: [
      { group: 'Frontend', items: ['React', 'TypeScript', 'Vite', 'Chart.js', 'Recharts', 'Sankey'] },
      { group: 'Backend', items: ['FastAPI', 'Pydantic', 'PostgreSQL'] },
      { group: 'Cloud', items: ['AWS SDK', 'GCP SDK', 'CloudFormation', 'IAM Role', 'AWS App Runner', 'Cloudflare Pages'] },
    ],
    architectureNodes: [
      { label: 'Browser (React)', sub: 'Vite / TS' },
      { label: 'Cloudflare Pages', sub: '前端靜態部署 + 邊緣快取' },
      { label: 'FastAPI on App Runner', sub: 'Python 後端' },
      { label: 'PostgreSQL', sub: '帳單與資源快取' },
      { label: 'AWS Cost Explorer', sub: '帳單來源' },
      { label: 'GCP Billing', sub: '帳單來源' },
    ],
    contributions: [
      '雙人團隊 40 天極速交付：從產品發想到上線 demo。',
      '完成前端架構（路由、狀態、API 抽象層）與 AWS Cost Explorer / Resource API 串接。',
      '設計 CloudFormation 模板，讓使用者一鍵建立最小權限 IAM Role 並回填到平台。',
      '實作 Dashboard 視覺化元件：成本時序圖、Sankey 資源流、異常偵測警示卡。',
    ],
    screenshots: [
      { title: 'Dashboard 首頁', caption: '雙雲支出概覽、月度趨勢、異常警示。' },
      { title: 'Sankey 資源流', caption: '從帳號到服務到資源的成本流向。' },
      { title: 'IAM Role 引導', caption: 'CloudFormation 一鍵部署最小權限角色。' },
      { title: '優化建議列表', caption: '依潛在節省金額排序的建議清單。' },
    ],
  },
  {
    id: 'mohuhu',
    name: 'Mohuhu',
    fullName: 'Mohuhu — 智能搜尋平台（已正式上架）',
    tagline: '高資安企業環境的台灣上市公司智能搜尋引擎，支援注音容錯與離線打包執行。',
    status: '正式上架，有企業採用',
    team: '六人團隊',
    role: '前端架構',
    url: 'mohuhu.pair.tw',
    timeline: '40 天極速交付',
    cardAccent: '#0066CC',
    overview: [
      'Mohuhu 是專為高資安企業環境打造的台灣上市公司智能搜尋引擎。整合公司基本資料、季度財報、每日股價與董監事網絡，提供注音輸入容錯與多策略模糊搜尋功能，並支援打包為獨立地端離線執行檔。',
      '六人團隊 40 天極速交付，產品已上架並有企業導入驗證。我負責前端架構與 API 串接。',
    ],
    concept: [
      '高資安客戶不能把資料丟到雲，所以整個搜尋系統需要能離線跑——我們用 PyInstaller 把後端 + 向量資料庫 + 本地 LLM 打包成一個資料夾的 exe，前端再用 Ant Design 撐起企業使用者熟悉的桌面感介面。',
      '搜尋策略採多策略融合：注音 → 拼音 → 全文 → 向量。即使輸入錯字或注音，仍能命中正確的公司條目。',
    ],
    stack: [
      { group: 'Frontend', items: ['React', 'TypeScript', 'Vite', 'Ant Design'] },
      { group: 'Backend', items: ['FastAPI', 'PostgreSQL', 'pgvector', 'Ollama'] },
      { group: 'Packaging', items: ['PyInstaller', 'Local LLM'] },
    ],
    architectureNodes: [
      { label: 'React Frontend', sub: 'Ant Design + Vite' },
      { label: 'FastAPI Gateway', sub: '搜尋策略融合' },
      { label: 'PostgreSQL + pgvector', sub: '結構化 + 向量索引' },
      { label: 'Ollama 本地模型', sub: '查詢理解與重排序' },
      { label: 'PyInstaller Bundle', sub: '單一資料夾離線部署' },
    ],
    contributions: [
      '六人團隊 40 天極速交付，產品上架並有商業導入驗證。',
      '主導前端整體架構與路由設計，串接後端搜尋與資料 API。',
      '實作公司詳細頁：基本資料、季財報、股價時序、董監事網絡圖。',
      '與後端共同設計注音容錯輸入介面與搜尋結果排序展示。',
    ],
    screenshots: [
      { title: '搜尋首頁', caption: '注音容錯輸入 + 即時建議。' },
      { title: '公司詳細頁', caption: '基本資料、財報、股價、董監事網絡。' },
      { title: '財報視覺化', caption: '季度財報關鍵指標時序。' },
      { title: '董監事網絡', caption: '跨公司董監事連動關係圖。' },
    ],
  },
  {
    id: 'health',
    name: '健康一條龍',
    fullName: '健康一條龍 — 個人健康數據整合應用',
    tagline:
      '把健保資料、穿戴裝置與飲食紀錄整合進一個本地優先的個人健康時序庫。（個人專案 / WIP）',
    status: '個人專案 · 概念驗證',
    team: '個人專案',
    role: '全端',
    url: '— (尚未公開)',
    timeline: '2026 Q2 起',
    cardAccent: '#0066CC',
    overview: [
      '健康一條龍是一個個人健康數據整合的概念驗證專案，目標是把健保署的個人醫療紀錄、穿戴裝置量測與每日飲食紀錄壓平成一條可查詢的時序庫，讓使用者能用一個 Dashboard 回答「過去三個月我發生了什麼」這個問題。',
      '本地優先（local-first）：所有資料先存在使用者裝置，雲端只做選擇性同步。',
    ],
    concept: [
      '現有的健康 App 都只看自己那一段資料；醫療在醫院、運動在手錶、飲食在另一個 App。健康一條龍要做的是把這些片段都接到同一條時序上，並以「事件 → 趨勢 → 假設」三層讓使用者能自己探索身體變化。',
      '隱私是核心約束：所有原始資料預設不離開使用者裝置，雲端只儲存使用者明確同意的衍生指標。',
    ],
    stack: [
      { group: 'Frontend', items: ['React', 'TypeScript', 'Vite', 'Recharts'] },
      { group: 'Backend', items: ['FastAPI', 'PostgreSQL', 'SQLite (local)'] },
      { group: 'Cloud', items: ['GCP Cloud Run', 'GCS'] },
      { group: 'Integrations', items: ['健保快易通 API', 'Apple HealthKit', 'Google Fit'] },
    ],
    architectureNodes: [
      { label: 'Mobile / Web Client', sub: 'React + local SQLite' },
      { label: '健保快易通匯入器', sub: '使用者主動匯出 → 解析' },
      { label: 'HealthKit / Google Fit', sub: '穿戴裝置整合' },
      { label: 'Local Timeline DB', sub: 'SQLite, 加密' },
      { label: 'Optional Cloud Sync', sub: 'GCP Cloud Run + GCS' },
    ],
    contributions: [
      '規劃資料模型：把醫療事件、量測、飲食壓平成單一時序 schema。',
      '設計本地優先同步策略與加密儲存方案。',
      '前端 Timeline 元件原型與健康指標 Dashboard。',
    ],
    screenshots: [
      { title: '個人時序首頁', caption: '醫療、量測、飲食疊在同一條時間軸。' },
      { title: '指標趨勢頁', caption: '可選任意指標，畫出三個月趨勢與分布。' },
      { title: '匯入引導', caption: '健保快易通 / HealthKit 匯入步驟。' },
    ],
  },
];

export const projectById = (id: string) => projects.find((p) => p.id === id);
