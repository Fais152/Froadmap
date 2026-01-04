
import React from 'react';
import { Skill, UserProgress, Category } from '../types';
import { SkillLogo } from './SkillLogo';
import { DETAILED_DESCRIPTIONS } from '../descriptions';

// Gradient Helper
const getCategoryGradient = (category: Category) => {
  switch (category) {
    case Category.TECH: return 'from-blue-500 to-indigo-600';
    case Category.BUSINESS: return 'from-emerald-500 to-teal-600';
    case Category.CREATIVE: return 'from-fuchsia-500 to-pink-600';
    case Category.LIFE: return 'from-amber-500 to-orange-600';
    case Category.HOBBY: return 'from-lime-500 to-green-600';
    case Category.UNIVERSAL: return 'from-sky-500 to-cyan-600';
    default: return 'from-slate-500 to-gray-600';
  }
};

interface RoadmapViewProps {
  skill: Skill;
  progress: UserProgress;
  onToggleStep: (skillId: string, stepId: string) => void;
  onBack: () => void;
}

export const RoadmapView: React.FC<RoadmapViewProps> = ({ skill, progress, onToggleStep, onBack }) => {
  const completedSteps = progress[skill.id] || [];
  const progressPercent = Math.round((completedSteps.length / skill.steps.length) * 100);
  const headerGradient = getCategoryGradient(skill.category);

  return (
    <div className="animate-fade-up">
      {/* Navigation & Header */}
      <button 
        onClick={onBack}
        className="mb-6 flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 font-bold text-sm transition-colors group"
      >
        <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
        Kembali ke Daftar
      </button>

      <div className="bg-white dark:bg-[#0b1120] rounded-[2.5rem] border border-slate-100 dark:border-slate-800 overflow-hidden shadow-sm mb-8">
        <div className={`relative p-8 sm:p-12 bg-gradient-to-br ${headerGradient} text-white overflow-hidden`}>
           {/* Decorative Background */}
           <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 opacity-10">
              <SkillLogo id={skill.id} className="w-96 h-96" colorClass="text-white" />
           </div>
           
           <div className="relative z-10">
             <div className="flex items-start justify-between gap-6 mb-6">
                <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-lg">
                   <SkillLogo id={skill.id} className="w-16 h-16" colorClass="text-white" />
                </div>
                <div className="flex flex-col items-end">
                    <span className="bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 border border-white/10">
                        {skill.category}
                    </span>
                     <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold border border-white/10 flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        {skill.duration}
                    </span>
                </div>
             </div>

             <h1 className="text-3xl sm:text-5xl font-black mb-4 leading-tight">{skill.title}</h1>
             <p className="text-lg text-white/90 max-w-2xl leading-relaxed font-medium">{skill.purpose}</p>
           </div>
        </div>

        {/* Progress Bar & Stats */}
        <div className="p-8 sm:p-10 border-b border-slate-100 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-900/20">
            <div className="flex flex-col sm:flex-row gap-8 items-center justify-between mb-6">
               <div className="space-y-1">
                   <div className="text-sm text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Target Output</div>
                   <div className="font-bold text-slate-800 dark:text-slate-200">{skill.outcome}</div>
               </div>
               <div className="w-full sm:w-auto min-w-[200px] text-right">
                   <div className="flex justify-between items-end mb-2">
                       <span className="text-sm font-bold text-slate-500 dark:text-slate-400">Progress</span>
                       <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400">{progressPercent}%</span>
                   </div>
                   <div className="h-3 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                       <div 
                         className="h-full bg-emerald-500 rounded-full transition-all duration-1000 ease-out"
                         style={{ width: `${progressPercent}%` }}
                       ></div>
                   </div>
               </div>
            </div>
            
            {/* Prerequisites */}
            <div className="flex flex-wrap gap-2">
                <span className="text-xs font-bold text-slate-400 dark:text-slate-500 py-1">Syarat:</span>
                {skill.prerequisites.map((req, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 font-medium">
                        {req}
                    </span>
                ))}
            </div>
        </div>

        {/* Steps List */}
        <div className="p-8 sm:p-12 space-y-12">
            {skill.steps.map((step, index) => {
                const isCompleted = completedSteps.includes(step.id);
                const detailedDesc = DETAILED_DESCRIPTIONS[step.id] || step.description;

                return (
                    <div key={step.id} className={`relative pl-8 sm:pl-12 group transition-all duration-500 ${isCompleted ? 'opacity-70 grayscale-[0.5] hover:opacity-100 hover:grayscale-0' : ''}`}>
                        {/* Timeline Line */}
                        {index !== skill.steps.length - 1 && (
                            <div className="absolute left-[11px] sm:left-[19px] top-8 bottom-[-48px] w-0.5 bg-slate-200 dark:bg-slate-800 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-900 transition-colors"></div>
                        )}

                        {/* Checkbox / Number */}
                        <div 
                            onClick={() => onToggleStep(skill.id, step.id)}
                            className={`absolute left-0 top-0 w-6 h-6 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border-2 sm:border-4 cursor-pointer transition-all duration-300 z-10 
                            ${isCompleted 
                                ? 'bg-emerald-500 border-emerald-500 text-white scale-110 shadow-[0_0_15px_rgba(16,185,129,0.5)]' 
                                : 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-600 text-slate-400 dark:text-slate-500 hover:border-emerald-400 dark:hover:border-emerald-500'}`}
                        >
                            {isCompleted ? (
                                <svg className="w-3 h-3 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                            ) : (
                                <span className="text-[10px] sm:text-sm font-bold">{index + 1}</span>
                            )}
                        </div>

                        {/* Content Card */}
                        <div className={`space-y-4 ${isCompleted ? '' : ''}`}>
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                <h3 
                                    onClick={() => onToggleStep(skill.id, step.id)}
                                    className={`text-xl font-bold cursor-pointer transition-colors ${isCompleted ? 'text-emerald-700 dark:text-emerald-400 line-through decoration-2 decoration-emerald-500/50' : 'text-slate-900 dark:text-slate-100 hover:text-emerald-600 dark:hover:text-emerald-400'}`}
                                >
                                    {step.title}
                                </h3>
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wide bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded self-start sm:self-auto">
                                    ⏱ {step.estimatedTime}
                                </span>
                            </div>

                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                                {detailedDesc}
                            </p>

                            {/* Resources */}
                            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-100 dark:border-slate-800">
                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                                    Sumber Belajar
                                </h4>
                                <div className="space-y-2">
                                    {step.resources.map((res, i) => (
                                        <a 
                                            key={i}
                                            href={res.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 p-3 bg-white dark:bg-[#0b1120] rounded-lg border border-slate-200 dark:border-slate-700 hover:border-emerald-400 dark:hover:border-emerald-500 hover:shadow-md transition-all group/link"
                                        >
                                            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded uppercase ${
                                                res.type === 'Video' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' :
                                                res.type === 'Article' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' :
                                                res.type === 'Tool' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300' :
                                                'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300'
                                            }`}>
                                                {res.type}
                                            </span>
                                            <span className="text-sm font-medium text-slate-700 dark:text-emerald-50 group-hover/link:text-emerald-600 dark:group-hover/link:text-emerald-400 transition-colors line-clamp-1">
                                                {res.title}
                                            </span>
                                            <svg className="w-4 h-4 text-slate-300 group-hover/link:text-emerald-500 ml-auto transform group-hover/link:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                                        </a>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Challenge */}
                            <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-900/10 border-l-4 border-amber-400 rounded-r-xl">
                                <h4 className="text-xs font-bold text-amber-600 dark:text-amber-500 uppercase tracking-widest mb-1">Tantangan Praktek</h4>
                                <p className="text-sm text-slate-700 dark:text-slate-300 font-medium italic">"{step.challenge}"</p>
                            </div>

                            {/* Completion Button */}
                            <button
                                onClick={() => onToggleStep(skill.id, step.id)}
                                className={`w-full mt-6 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 btn-press border-2
                                ${isCompleted 
                                    ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/30' 
                                    : 'bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-emerald-500 hover:text-emerald-500 dark:hover:border-emerald-500 dark:hover:text-emerald-400'}`}
                            >
                                {isCompleted ? (
                                    <>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        Selesai Dipelajari
                                    </>
                                ) : (
                                    <>
                                        <span className="w-5 h-5 rounded-md border-2 border-current opacity-60"></span>
                                        Tandai Selesai
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>

        {/* Traps */}
        {skill.traps && skill.traps.length > 0 && (
            <div className="bg-rose-50 dark:bg-rose-900/10 p-8 sm:p-12 border-t border-rose-100 dark:border-rose-900/30">
                <h3 className="text-lg font-bold text-rose-700 dark:text-rose-400 mb-6 flex items-center gap-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                    Jebakan Pemula (Hindari Ini!)
                </h3>
                <ul className="grid sm:grid-cols-2 gap-4">
                    {skill.traps.map((trap, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-rose-800 dark:text-rose-200 bg-white dark:bg-rose-950/30 p-4 rounded-xl border border-rose-100 dark:border-rose-900/50 shadow-sm">
                            <span className="text-lg">❌</span>
                            <span>{trap}</span>
                        </li>
                    ))}
                </ul>
            </div>
        )}
      </div>
    </div>
  );
};
