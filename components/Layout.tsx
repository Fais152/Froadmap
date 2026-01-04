
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
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] dark:bg-[#020617] text-slate-900 dark:text-emerald-50 selection:bg-emerald-200 dark:selection:bg-emerald-900 selection:text-emerald-900 dark:selection:text-emerald-100 transition-colors duration-500">
      {/* Decorative Background for Light Mode */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-100 dark:opacity-0 transition-opacity duration-500">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-200/20 blur-[100px]"></div>
        <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] rounded-full bg-teal-200/20 blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[30%] h-[30%] rounded-full bg-blue-200/20 blur-[100px]"></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/70 dark:bg-[#020617]/80 backdrop-blur-xl border-b border-slate-200/60 dark:border-slate-800 transition-all duration-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer btn-press group" onClick={() => setActiveTab('explore')}>
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-shadow">F</div>
            <h1 className="font-bold text-lg tracking-tight hidden sm:block text-slate-800 dark:text-emerald-50">F<span className="text-emerald-600">Roamap</span></h1>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-4">
            <nav className="flex items-center gap-1 bg-slate-100/50 dark:bg-slate-900 p-1 rounded-full border border-slate-200 dark:border-slate-800 shadow-inner">
              <button 
                onClick={() => setActiveTab('explore')}
                className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 btn-press ${activeTab === 'explore' ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-emerald-400 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.1)]' : 'text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:bg-slate-200/50 dark:hover:bg-white/5'}`}
              >
                Explore
              </button>
              <button 
                onClick={() => setActiveTab('my-learning')}
                className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 btn-press ${activeTab === 'my-learning' ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-emerald-400 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.1)]' : 'text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:bg-slate-200/50 dark:hover:bg-white/5'}`}
              >
                Progress
              </button>
              <button 
                onClick={() => setActiveTab('ai-advisor')}
                className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 btn-press ${activeTab === 'ai-advisor' ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/30' : 'text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:bg-slate-200/50 dark:hover:bg-white/5'}`}
              >
                AI Advisor
              </button>
            </nav>

            <button 
              onClick={toggleTheme}
              className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800 hover:shadow-sm transition-all btn-press border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? (
                <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
              ) : (
                <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 py-8 relative z-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white/60 dark:bg-[#020617] border-t border-slate-200 dark:border-slate-800 py-12 relative z-10">
        <div className="max-w-5xl mx-auto px-6 flex flex-col-reverse sm:flex-row justify-between items-center gap-8">
          <p className="text-sm text-slate-500 dark:text-slate-500 font-medium text-center sm:text-left">
            © 2024 FRoamap.
          </p>
          <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
             <a href="https://www.facebook.com/fais.ntaps?locale=id_ID" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all transform hover:scale-110" aria-label="Facebook">
                <svg className="w-6 h-6 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
             </a>
             <a href="https://www.instagram.com/fais.aff/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-pink-50 dark:hover:bg-pink-900/20 hover:text-pink-600 dark:hover:text-pink-400 transition-all transform hover:scale-110" aria-label="Instagram">
                <svg className="w-6 h-6 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468.985c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
             </a>
             <a href="https://github.com/Fais152/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all transform hover:scale-110" aria-label="GitHub">
                <svg className="w-6 h-6 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.008c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
             </a>
             <a href="https://wa.me/+6281254710324" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-green-50 dark:hover:bg-green-900/20 hover:text-green-500 dark:hover:text-green-400 transition-all transform hover:scale-110" aria-label="WhatsApp">
                <svg className="w-6 h-6 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M2.004 22L3.35 17.062A10 10 0 1 1 12 22a9.96 9.96 0 0 1-5.184-1.455L2.004 22zM6.87 18.06l.32.19A7.957 7.957 0 1 0 12 4.02a7.957 7.957 0 0 0-5.13 14.23l.19.314-1.226 4.498 4.498-1.226.538-.776zM15.82 14.5c-.21.49-.96.94-1.6.86-.68-.08-2.42-.71-4.04-2.32-1.61-1.62-2.24-3.36-2.32-4.04-.08-.64.37-1.39.86-1.6.47-.21.75-.12.98.15.24.28.61 1.13.75 1.4.15.26.11.45-.04.66-.15.21-.29.28-.5.5-.18.17-.38.38-.21.72.18.35.8 1.36 1.72 2.18.92.82 1.94 1.45 2.29 1.63.34.17.55-.03.72-.21.22-.21.29-.35.5-.5s.4-.19.66-.04c.25.14 1.1.51 1.4.75.29.23.38.51.17.98z" clipRule="evenodd"/></svg>
             </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
