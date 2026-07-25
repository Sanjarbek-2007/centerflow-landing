import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import DocsHub from './pages/DocsHub';
import DocsStaff from './pages/DocsStaff';
import DocsStudent from './pages/DocsStudent';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0 });
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<DocsHub />} />
        <Route path="/docs/staff" element={<DocsStaff />} />
        <Route path="/docs/student" element={<DocsStudent />} />
      </Routes>
    </BrowserRouter>
  );
}
