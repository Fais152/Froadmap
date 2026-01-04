
import React, { useEffect, useState } from 'react';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: 'explore' | 'my-learning' | 'ai-advisor';
  setActiveTab: (tab: 'explore' | 'my-learning' | 'ai-advisor') => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-emerald-50 selection:bg-emerald-200 dark:selection:bg-emerald-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-[#020617]/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer btn-press group" onClick={() => setActiveTab('explore')}>
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-emerald-600/20">F</div>
            <h1 className="font-bold text-lg tracking-tight hidden sm:block text-slate-800 dark:text-emerald-50">F<span className="text-emerald-600">Roamap</span></h1>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-4">
            <nav className="flex items-center gap-1 bg-slate-100 dark:bg-slate-900 p-1 rounded-full border border-slate-200 dark:border-slate-800">
              <button 
                onClick={() => setActiveTab('explore')}
                className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 btn-press ${activeTab === 'explore' ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-emerald-400 shadow-sm' : 'text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-300'}`}
              >
                Explore
              </button>
              <button 
                onClick={() => setActiveTab('my-learning')}
                className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 btn-press ${activeTab === 'my-learning' ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-emerald-400 shadow-sm' : 'text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-300'}`}
              >
                Progress
              </button>
              <button 
                onClick={() => setActiveTab('ai-advisor')}
                className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 btn-press ${activeTab === 'ai-advisor' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-300'}`}
              >
                AI Advisor
              </button>
            </nav>

            <button 
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors btn-press"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 dark:bg-[#020617] border-t border-slate-200 dark:border-slate-800 py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-500 dark:text-slate-500 font-medium">
            © 2024 FRoamap.
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-500 dark:text-slate-500">
             <a href="#" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Discord</a>
             <a href="#" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Twitter</a>
             <a href="#" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
