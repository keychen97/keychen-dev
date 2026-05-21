import { Link } from 'react-router-dom';
import { PageShell, PageHeading } from '../components/Layout';

export default function NotFound() {
  return (
    <PageShell
      breadcrumbs={[
        { to: '/', label: 'keychen.dev' },
        { label: '404' },
      ]}
    >
      <PageHeading kicker="Error 404" title="找不到頁面" lede="這個路由不存在，或內容尚未撰寫。" />
      <div className="prose-wiki">
        <p>你可能想去：</p>
        <ul>
          <li>
            <Link to="/" className="wiki-link">
              首頁
            </Link>
          </li>
          <li>
            <Link to="/projects" className="wiki-link">
              專案總覽
            </Link>
          </li>
          <li>
            <Link to="/about" className="wiki-link">
              關於 Key Chen
            </Link>
          </li>
        </ul>
      </div>
    </PageShell>
  );
}
