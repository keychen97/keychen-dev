// ============================================================================
// app.jsx — Router + mount
// ============================================================================

function App() {
  const path = useHashRoute();

  // Route matching
  let page;
  if (path === '/' || path === '') {
    page = <HomePage />;
  } else if (path === '/projects') {
    page = <ProjectsPage />;
  } else if (path.startsWith('/projects/')) {
    const id = path.replace('/projects/', '').replace(/\/$/, '');
    page = <ProjectDetailPage id={id} />;
  } else if (path === '/about') {
    page = <AboutPage />;
  } else {
    page = <NotFoundPage />;
  }

  return page;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
