
import React from 'react';
import { Skill, Difficulty, Category } from '../types';
import { SkillLogo } from './SkillLogo';

interface SkillCardProps {
  skill: Skill;
  onClick: (skillId: string) => void;
  index?: number;
  progress?: {
    completed: number;
    total: number;
  };
}

const getCategoryColor = (category: Category) => {
  switch (category) {
    case Category.TECH: return 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/10';
    case Category.BUSINESS: return 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/10';
    case Category.CREATIVE: return 'text-fuchsia-600 dark:text-fuchsia-400 bg-fuchsia-50 dark:bg-fuchsia-900/10';
    case Category.LIFE: return 'text-amber-500 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/10';
    case Category.HOBBY: return 'text-lime-600 dark:text-lime-400 bg-lime-50 dark:bg-lime-900/10';
    case Category.UNIVERSAL: return 'text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-900/10';
    default: return 'text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/20';
  }
};

export const SkillCard: React.FC<SkillCardProps> = ({ skill, onClick, index = 0, progress }) => {
  const getDifficultyStyles = (diff: Difficulty) => {
    switch (diff) {
      case Difficulty.BEGINNER: 
        return { 
          badge: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
          dot: 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]' 
        };
      case Difficulty.INTERMEDIATE: 
        return { 
          badge: 'bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300 border-amber-200 dark:border-amber-800',
          dot: 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.4)]' 
        };
      case Difficulty.ADVANCED: 
        return { 
          badge: 'bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300 border-rose-200 dark:border-rose-800',
          dot: 'bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.4)]' 
        };
      default: 
        return { badge: 'bg-slate-100', dot: 'bg-slate-500' };
    }
  };

  const diffStyle = getDifficultyStyles(skill.difficulty);
  const animationDelay = `${Math.min(index * 50, 500)}ms`;
  
  const percentComplete = progress ? Math.round((progress.completed / progress.total) * 100) : 0;
  const categoryStyle = getCategoryColor(skill.category);
  // Extract just the text color class for the icon
  const iconColorClass = categoryStyle.split(' ')[0] + ' ' + categoryStyle.split(' ')[1];
  const bgClass = categoryStyle.split(' ')[2] + ' ' + categoryStyle.split(' ')[3];

  return (
    <div 
      onClick={() => onClick(skill.id)}
      style={{ animationDelay }}
      className="group animate-fade-up relative bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden hover-lift 
      shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.1)] dark:hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.15)]
      hover:border-emerald-500/20 dark:hover:border-emerald-500/30 
      cursor-pointer flex flex-col h-full transition-all duration-300"
    >
      {/* Logo Header */}
      <div className={`relative h-40 w-full flex items-center justify-center overflow-hidden transition-colors duration-300 ${bgClass} group-hover:bg-slate-50 dark:group-hover:bg-[#131c31]`}>
        {/* Large Faded Watermark Icon */}
        <div className="absolute -right-8 -bottom-8 opacity-[0.03] dark:opacity-5 transform rotate-12 scale-150 pointer-events-none">
            <SkillLogo id={skill.id} className="w-40 h-40" colorClass="text-current" />
        </div>

        {/* Main Logo */}
        <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-md">
            <SkillLogo id={skill.id} className="w-16 h-16" colorClass={iconColorClass} />
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-white/90 dark:bg-[#0f172a]/80 backdrop-blur-md text-slate-600 dark:text-slate-300 text-[10px] font-bold px-2.5 py-1 rounded-md border border-slate-100 dark:border-slate-700 shadow-sm uppercase tracking-wider">
            {skill.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 relative z-10">
        {/* Header: Difficulty & Duration */}
        <div className="flex justify-between items-center mb-3">
            <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide border ${diffStyle.badge}`}>
                <div className={`w-1.5 h-1.5 rounded-full ${diffStyle.dot}`}></div>
                {skill.difficulty}
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium bg-slate-50 dark:bg-slate-800/50 px-2 py-1 rounded-md">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                {skill.duration}
            </div>
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 leading-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors break-words">
            {skill.title}
        </h3>

        <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 mb-6 flex-1 leading-relaxed break-words">
          {skill.purpose}
        </p>
        
        {/* Footer: Progress OR CTA */}
        <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/50">
            {progress ? (
                <div className="w-full space-y-2">
                    <div className="flex justify-between items-center text-xs">
                        <span className="font-semibold text-slate-500 dark:text-slate-400">Progress</span>
                        <span className="font-bold text-emerald-600 dark:text-emerald-400 drop-shadow-[0_0_5px_rgba(16,185,129,0.5)]">{percentComplete}%</span>
                    </div>
                    <div className="h-2.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden border border-slate-200 dark:border-slate-700/50">
                        <div 
                            className="h-full bg-emerald-500 rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(16,185,129,0.5)] relative overflow-hidden"
                            style={{ width: `${percentComplete}%` }}
                        >
                            <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]" style={{ backgroundImage: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)', backgroundSize: '200% 100%' }}></div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex items-center justify-between text-xs font-bold text-emerald-600 dark:text-emerald-400 group/btn">
                    <span className="group-hover:underline decoration-2 underline-offset-4 decoration-emerald-500/30">Mulai Belajar</span>
                    <div className="w-8 h-8 rounded-full bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-[0_0_15px_rgba(16,185,129,0.5)]">
                        <svg className="w-4 h-4 transform group-hover/btn:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </div>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};
