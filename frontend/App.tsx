import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Loading } from './pages/Loading';
import { Results } from './pages/Results';
import { Activity } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 text-brand-600">
          <Activity className="w-6 h-6" />
          <span className="text-xl font-bold tracking-tight text-gray-900">CRO Auditor <span className="text-brand-600">Pro</span></span>
        </div>
      </div>
    </header>
    <main className="flex-1">
      {children}
    </main>
    <footer className="bg-white border-t border-gray-200 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-500">
        <p>Powered by Google Gemini AI. For demonstration purposes.</p>
      </div>
    </footer>
  </div>
);

export default function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}
