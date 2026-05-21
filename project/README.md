# keychen.dev

個人技術作品集網站。React + TypeScript + Vite + Tailwind CSS。
Wiki / 技術文件風格排版，accent 色 `#0066CC`。

## 開發

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # 產出 dist/
npm run preview
```

## 結構

```
project/
├─ index.html
├─ package.json
├─ vite.config.ts
├─ tailwind.config.js
├─ postcss.config.js
├─ tsconfig.json
└─ src/
   ├─ main.tsx          # 入口；BrowserRouter
   ├─ App.tsx           # Routes
   ├─ index.css         # Tailwind + 自訂 wiki prose 樣式
   ├─ data/
   │  ├─ profile.ts     # 個人資料（姓名、技能、經歷、學歷）
   │  └─ projects.ts    # 三項專案資料
   ├─ components/
   │  ├─ Navbar.tsx
   │  ├─ Footer.tsx
   │  ├─ Layout.tsx     # PageShell, PageHeading, Section
   │  ├─ Sidebar.tsx    # 左側 sticky TOC（wiki 風）
   │  ├─ TechTag.tsx    # 技術 tag chip（monospace）
   │  ├─ Infobox.tsx    # 右側 wiki infobox
   │  ├─ ProjectCard.tsx
   │  ├─ ArchitectureDiagram.tsx
   │  └─ ScreenshotGallery.tsx
   └─ pages/
      ├─ Home.tsx          # /
      ├─ Projects.tsx      # /projects
      ├─ ProjectDetail.tsx # /projects/:id
      ├─ About.tsx         # /about
      └─ NotFound.tsx      # 404
```

## 路由

| Path                    | Component       |
| ----------------------- | --------------- |
| `/`                     | `Home`          |
| `/projects`             | `Projects`      |
| `/projects/fincloud`    | `ProjectDetail` |
| `/projects/mohuhu`      | `ProjectDetail` |
| `/projects/health`      | `ProjectDetail` |
| `/about`                | `About`         |

## 設計系統摘要

| Token       | Value      |
| ----------- | ---------- |
| ink (text)  | `#1F2328`  |
| muted       | `#57606A`  |
| rule        | `#D8DEE4`  |
| chip        | `#F6F8FA`  |
| accent      | `#0066CC`  |
| accent deep | `#0052A3`  |
| parchment   | `#FBFBFA`  |

字型：

- Sans  — `IBM Plex Sans`
- Mono  — `IBM Plex Mono`（tags、metadata）
- Serif — `IBM Plex Serif`（H1 / H2 標題）

字型透過 `index.html` 內的 Google Fonts CDN 載入，可改為 self-host。

## 內容更新

- 個人資料 → `src/data/profile.ts`
- 專案資料 → `src/data/projects.ts`
- 新增專案 → 在 `projects` 陣列中新增條目，路由 `/projects/<id>` 會自動匹配。

## 部署建議

靜態站，可部署到 Cloudflare Pages / Vercel / Netlify。`npm run build` 產出 `dist/` 即為部署目標。

> 因使用 `BrowserRouter`，部署平台需設定 SPA fallback（所有未匹配的路徑 fallback 到 `index.html`）。Cloudflare Pages 預設即支援。
