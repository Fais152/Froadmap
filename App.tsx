
import React, { useState, useEffect, useMemo } from 'react';
import { Layout } from './components/Layout';
import { SkillCard } from './components/SkillCard';
import { RoadmapView } from './components/RoadmapView';
import { SKILLS } from './constants';
import { Category, Skill, UserProgress, Difficulty } from './types';
import { getSkillRecommendation } from './services/geminiService';

// Skeleton Component for AI Loading State
const AISkeleton = () => (
  <div className="bg-white dark:bg-[#0b1120] border border-emerald-100 dark:border-emerald-900/40 p-8 rounded-3xl space-y-6 animate-pulse shadow-[0_0_40px_-10px_rgba(16,185,129,0.1)]">
    <div className="flex items-center justify-between">
      <div className="h-4 w-32 skeleton rounded"></div>
      <div className="h-5 w-24 skeleton rounded-full"></div>
    </div>
    <div className="space-y-3">
      <div className="h-8 w-3/4 skeleton rounded"></div>
      <div className="h-4 w-full skeleton rounded"></div>
      <div className="h-4 w-5/6 skeleton rounded"></div>
    </div>
    <div className="h-14 w-full skeleton rounded-2xl mt-4"></div>
  </div>
);

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'explore' | 'my-learning' | 'ai-advisor'>('explore');
  const [selectedSkillId, setSelectedSkillId] = useState<string | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<Category | 'All'>('All');
  const [difficultyFilter, setDifficultyFilter] = useState<Difficulty | 'All'>('All');
  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const saved = localStorage.getItem('user-progress');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });

  // AI Advisor State
  const [userGoal, setUserGoal] = useState('');
  const [userTime, setUserTime] = useState('1 jam/hari');
  const [aiRec, setAiRec] = useState<{ recommendedSkillId: string; reasoning: string } | null>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem('user-progress', JSON.stringify(progress));
  }, [progress]);

  // Reset filters/selection when tab changes for a clean transition
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab, selectedSkillId]);

  const handleToggleStep = (skillId: string, stepId: string) => {
    setProgress(prev => {
      const current = prev[skillId] || [];
      const updated = current.includes(stepId) 
        ? current.filter(id => id !== stepId)
        : [...current, stepId];
      return { ...prev, [skillId]: updated };
    });
  };

  const filteredSkills = useMemo(() => {
    return SKILLS.filter(skill => {
      const matchCat = categoryFilter === 'All' || skill.category === categoryFilter;
      const matchDiff = difficultyFilter === 'All' || skill.difficulty === difficultyFilter;
      return matchCat && matchDiff;
    });
  }, [categoryFilter, difficultyFilter]);

  const mySkills = useMemo(() => {
    return SKILLS.filter(skill => (progress[skill.id]?.length || 0) > 0);
  }, [progress]);

  const handleAiAdvice = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAiLoading(true);
    setAiRec(null); // Clear previous result
    const rec = await getSkillRecommendation(userGoal, userTime);
    setAiRec(rec);
    setIsAiLoading(false);
  };

  const selectedSkill = useMemo(() => 
    SKILLS.find(s => s.id === selectedSkillId)
  , [selectedSkillId]);

  return (
    <Layout activeTab={activeTab} setActiveTab={(tab) => {
      setActiveTab(tab);
      setSelectedSkillId(null);
    }}>
      {selectedSkill ? (
        <RoadmapView 
          skill={selectedSkill} 
          progress={progress} 
          onToggleStep={handleToggleStep}
          onBack={() => setSelectedSkillId(null)}
        />
      ) : (
        <div className="space-y-12 min-h-[60vh]">
          {activeTab === 'explore' && (
            <>
              {/* Explorer Hero - With Enhanced Glow */}
              <div className="relative text-center space-y-6 max-w-4xl mx-auto py-16 px-4 rounded-[3rem] overflow-hidden animate-fade-up">
                {/* Background Decor */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-emerald-50/50 to-transparent dark:from-emerald-900/10 pointer-events-none -z-10 rounded-[3rem]"></div>
                
                {/* Vibrant Glowing Orbs */}
                <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] bg-emerald-400/20 dark:bg-emerald-500/20 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse mix-blend-screen"></div>
                <div className="absolute -top-40 right-1/4 w-[400px] h-[400px] bg-teal-400/20 dark:bg-teal-500/20 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse delay-700 mix-blend-screen"></div>
                
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 dark:bg-emerald-900/30 border border-emerald-100 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2 shadow-[0_0_20px_rgba(16,185,129,0.2)] backdrop-blur-sm">
                   <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
                   Platform Belajar Gratis #1
                </div>

                <h2 className="text-5xl sm:text-7xl font-black text-slate-900 dark:text-slate-50 tracking-tight leading-[1.05] animate-text-fade drop-shadow-sm">
                  Bangun Karir Impian <br className="hidden sm:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 dark:from-emerald-400 dark:via-teal-300 dark:to-emerald-400 animate-shimmer bg-[length:200%_auto] drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">Tanpa Biaya.</span>
                </h2>
                <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed animate-fade-up delay-100 font-medium">
                  Akses kurikulum terstruktur standar industri. Mulai dari nol, belajar mandiri, dan raih keahlian global.
                </p>
              </div>

              {/* Filters - Sticky with Fade Up */}
              <div className="sticky top-[4.1rem] z-40 bg-slate-50/90 dark:bg-[#020617]/90 backdrop-blur-md py-4 border-b border-slate-200 dark:border-slate-800 animate-fade-up delay-200">
                <div className="flex flex-col gap-4">
                  <div className="flex bg-white dark:bg-[#0b1120] p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-x-auto max-w-full no-scrollbar shadow-sm">
                    {['All', ...Object.values(Category)].map(cat => (
                      <button 
                        key={cat}
                        onClick={() => setCategoryFilter(cat as any)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap btn-press ${categoryFilter === cat ? 'bg-emerald-600 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)]' : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-center">
                    <div className="relative group">
                        <select 
                        value={difficultyFilter}
                        onChange={(e) => setDifficultyFilter(e.target.value as any)}
                        className="bg-white dark:bg-[#0b1120] border border-slate-200 dark:border-slate-800 text-xs font-bold py-3 pl-6 pr-10 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all cursor-pointer dark:text-slate-200 appearance-none hover:border-emerald-500/30 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.1)]"
                        >
                        <option value="All">Semua Tingkat Kesulitan</option>
                        {Object.values(Difficulty).map(d => (
                            <option key={d} value={d}>{d}</option>
                        ))}
                        </select>
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skill Grid with Staggered Animation */}
              {filteredSkills.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-2 pb-20">
                  {filteredSkills.map((skill, idx) => {
                    // Check if user has started this skill
                    const completedCount = progress[skill.id]?.length || 0;
                    const totalSteps = skill.steps.length;
                    const hasStarted = completedCount > 0;

                    return (
                      <SkillCard 
                        key={skill.id} 
                        skill={skill} 
                        index={idx} // Pass index for delay calculation
                        onClick={(id) => setSelectedSkillId(id)}
                        progress={hasStarted ? { completed: completedCount, total: totalSteps } : undefined}
                      />
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-20 animate-fade-up">
                  <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl shadow-inner">🔍</div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Tidak ada roadmap ditemukan</h3>
                  <p className="text-slate-500 dark:text-slate-500">Coba ubah filter kategori atau tingkat kesulitan.</p>
                </div>
              )}
            </>
          )}

          {activeTab === 'my-learning' && (
            <div className="animate-fade-up">
              <div className="mb-10 text-center sm:text-left bg-emerald-50 dark:bg-emerald-900/10 p-10 rounded-[2.5rem] border border-emerald-100 dark:border-emerald-900/30 relative overflow-hidden shadow-[0_0_50px_-20px_rgba(16,185,129,0.2)]">
                <div className="absolute -right-10 -top-10 w-64 h-64 bg-emerald-500/20 rounded-full blur-[80px] pointer-events-none"></div>
                <div className="absolute -left-10 -bottom-10 w-64 h-64 bg-teal-500/20 rounded-full blur-[80px] pointer-events-none"></div>
                <h2 className="text-3xl font-black text-slate-900 dark:text-emerald-50 mb-3 relative z-10 drop-shadow-sm">Progres Belajar Saya</h2>
                <p className="text-slate-600 dark:text-emerald-200/70 relative z-10 text-lg">Lanjutkan perjalanan belajarmu. Sedikit demi sedikit lama-lama menjadi bukit.</p>
              </div>
              {mySkills.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
                  {mySkills.map((skill, idx) => {
                    const completedCount = progress[skill.id]?.length || 0;
                    const totalSteps = skill.steps.length;
                    
                    return (
                      <SkillCard 
                        key={skill.id} 
                        skill={skill} 
                        onClick={(id) => setSelectedSkillId(id)} 
                        progress={{
                            completed: completedCount,
                            total: totalSteps
                        }}
                      />
                    );
                  })}
                </div>
              ) : (
                <div className="bg-white dark:bg-[#0b1120] border border-dashed border-slate-300 dark:border-slate-700 rounded-3xl p-12 text-center shadow-sm">
                  <div className="w-20 h-20 bg-slate-50 dark:bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl animate-bounce shadow-inner">📚</div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">Belum Memulai Belajar</h3>
                  <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-md mx-auto">Pilih skill dari menu Explore dan mulai tandai langkah pertama belajarmu.</p>
                  <button 
                    onClick={() => setActiveTab('explore')}
                    className="bg-emerald-600 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-emerald-700 transition-all btn-press shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                  >
                    Mulai Belajar Sekarang
                  </button>
                </div>
              )}
            </div>
          )}

          {activeTab === 'ai-advisor' && (
            <div className="max-w-2xl mx-auto space-y-8 animate-fade-up">
              <div className="text-center space-y-4 mb-10 py-10 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-emerald-500/20 rounded-full blur-[60px] pointer-events-none"></div>
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white text-4xl mb-4 shadow-[0_0_30px_rgba(16,185,129,0.4)] transform hover:rotate-6 transition-transform relative z-10">✨</div>
                <h2 className="text-4xl font-black text-slate-900 dark:text-emerald-50 relative z-10">AI Path Finder</h2>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed max-w-md mx-auto text-lg relative z-10">Bingung mulai dari mana? Ceritakan tujuanmu, AI akan memilihkan jalan terbaik.</p>
              </div>

              <form onSubmit={handleAiAdvice} className="bg-white dark:bg-[#0b1120] p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-2xl shadow-emerald-900/5 dark:shadow-emerald-900/10 space-y-6 relative overflow-hidden group hover:border-emerald-500/30 transition-all duration-500">
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-emerald-500/5 rounded-full blur-[60px] pointer-events-none group-hover:bg-emerald-500/10 transition-colors"></div>
                <div className="relative z-10">
                  <label className="block text-xs font-bold text-slate-400 dark:text-slate-500 mb-2 uppercase tracking-widest">Tujuan Karir / Hobi</label>
                  <textarea 
                    value={userGoal}
                    onChange={(e) => setUserGoal(e.target.value)}
                    placeholder="Example: I want to become a frontend developer who can build modern web applications."
                    className="w-full bg-slate-50 dark:bg-[#020617] border border-slate-200 dark:border-slate-800 rounded-xl p-5 text-sm focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition-all h-64 dark:text-emerald-50 placeholder:text-slate-400 resize-none shadow-inner"
                    required
                  />
                </div>
                <div className="relative z-10">
                  <label className="block text-xs font-bold text-slate-400 dark:text-slate-500 mb-2 uppercase tracking-widest">Waktu Luang per Hari</label>
                  <input 
                    type="text" 
                    value={userTime}
                    onChange={(e) => setUserTime(e.target.value)}
                    placeholder="Contoh: 30 menit malam hari"
                    className="w-full bg-slate-50 dark:bg-[#020617] border border-slate-200 dark:border-slate-800 rounded-xl p-5 text-sm focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition-all dark:text-emerald-50 placeholder:text-slate-400 shadow-inner"
                    required
                  />
                </div>
                <div className="relative z-10 pt-4">
                    <button 
                    disabled={isAiLoading}
                    type="submit"
                    className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold hover:bg-emerald-700 disabled:opacity-70 transition-all btn-press shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
                    >
                    {isAiLoading ? (
                        <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Menganalisis Kebutuhanmu...
                        </>
                    ) : 'Temukan Roadmap Saya'}
                    </button>
                </div>
              </form>

              {isAiLoading && <AISkeleton />}

              {aiRec && !isAiLoading && (
                <div className="bg-emerald-50 dark:bg-[#064e3b]/20 border border-emerald-100 dark:border-emerald-500/30 p-8 rounded-[2rem] space-y-6 animate-fade-up shadow-[0_0_40px_-10px_rgba(16,185,129,0.1)]">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">Rekomendasi Personal</h4>
                    <span className="text-[10px] bg-emerald-200 dark:bg-emerald-500/30 text-emerald-800 dark:text-emerald-200 px-3 py-1 rounded-full font-bold shadow-[0_0_10px_rgba(16,185,129,0.2)]">Best Match</span>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-3xl font-black text-emerald-900 dark:text-emerald-50 drop-shadow-sm">
                      {SKILLS.find(s => s.id === aiRec.recommendedSkillId)?.title || 'Custom Path'}
                    </h3>
                    <p className="text-emerald-800/80 dark:text-emerald-200/80 leading-relaxed text-sm bg-white/50 dark:bg-black/20 p-6 rounded-2xl italic border border-emerald-100 dark:border-emerald-500/20">
                      "{aiRec.reasoning}"
                    </p>
                  </div>
                  <button 
                    onClick={() => {
                      setSelectedSkillId(aiRec.recommendedSkillId);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold hover:bg-emerald-700 transition-all btn-press shadow-md flex items-center justify-center gap-2 shadow-emerald-600/20 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                  >
                    Buka Roadmap & Mulai Belajar
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </Layout>
  );
};

export default App;
