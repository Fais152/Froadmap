
import React from 'react';

interface SkillLogoProps {
  id: string;
  className?: string;
  colorClass?: string;
}

export const SkillLogo: React.FC<SkillLogoProps> = ({ id, className = "w-16 h-16", colorClass = "text-slate-900 dark:text-white" }) => {
  const getPath = (skillId: string) => {
    switch (skillId) {
      // TECH & DIGITAL
      case 'frontend-development':
        return (
          <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 9l6 6-6 6" />
            <path d="M10 9l-6 6 6 6" />
            <path d="M3 3h18v18H3z" />
            <path d="M8 3v18" />
          </g>
        );
      case 'backend-development':
        return (
          <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          </g>
        );
      case 'python-data-science':
        return (
          <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a5 5 0 0 1 5 5v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a5 5 0 0 1 5-5h4z" />
            <path d="M12 22a5 5 0 0 1-5-5v-2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2a5 5 0 0 1-5 5h-4z" />
            <circle cx="9" cy="6" r="1" fill="currentColor" />
            <circle cx="15" cy="18" r="1" fill="currentColor" />
          </g>
        );
      case 'cloud-computing-aws':
        return (
          <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17.5 19c0-3.037-2.463-5.5-5.5-5.5S6.5 15.963 6.5 19" />
            <path d="M19 19h-1.5" />
            <path d="M6.5 19H5" />
            <path d="M12 13.5V10" />
            <path d="M12 4a6 6 0 0 0-5.66 8" />
            <path d="M17.66 12A6 6 0 0 0 12 4" />
          </g>
        );
      case 'cyber-security-basics':
        return (
          <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M12 8v4" />
            <path d="M12 16h.01" />
          </g>
        );
      case 'mobile-app-dev':
        return (
          <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
            <path d="M12 18h.01" />
          </g>
        );
      case 'ai-engineering':
        return (
          <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a10 10 0 1 0 10 10 10 10 0 0 0-10-10zm0 14a4 4 0 1 1 4-4 4 4 0 0 1-4 4z" />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
          </g>
        );
      case 'devops-basics':
        return (
          <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 12c-2-2.5-5-3-7-1-2.5 2.5 0 6 2 8" />
            <path d="M12 12c2-2.5 5-3 7-1 2.5 2.5 0 6-2 8" />
            <path d="M12 12c-2 2.5-5 3-7 1-2.5-2.5 0-6 2-8" />
            <path d="M12 12c2 2.5 5 3 7 1 2.5-2.5 0-6-2-8" />
          </g>
        );

      // BUSINESS & MONEY
      case 'digital-marketing':
        return (
          <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2l3 6 6 1-4.5 4.5L18 22l-6-3-6 3 1.5-8.5L3 9l6-1 3-6z" />
            <path d="M12 12v.01" />
          </g>
        );
      case 'freelancing-mastery':
        return (
          <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </g>
        );
      case 'project-management-agile':
        return (
          <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 3h18v18H3z" />
            <path d="M9 3v18" />
            <path d="M15 3v18" />
            <path d="M3 9h18" />
          </g>
        );
      case 'sales-mastery':
        return (
          <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 1v22" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </g>
        );
      case 'personal-finance':
        return (
          <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="1" x2="12" y2="23" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </g>
        );
      case 'product-management':
        return (
          <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
            <rect x="9" y="3" width="6" height="4" rx="2" />
            <path d="M9 14l2 2 4-4" />
          </g>
        );
      case 'startup-founder':
        return (
          <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
          </g>
        );

      // CREATIVE & MEDIA
      case 'content-creation-shortform':
        return (
          <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M10 9l6 3-6 3V9z" />
          </g>
        );
      case 'ux-design-path':
        return (
          <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 19l7-7 3 3-7 7-3-3z" />
            <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
            <path d="M2 2l7.586 7.586" />
            <circle cx="11" cy="11" r="2" />
          </g>
        );
      case 'graphic-design-branding':
        return (
          <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.85 0 3.58-.5 5.07-1.37.52-.3.93-.96.93-1.63 0-.7-.57-1.27-1.27-1.27H16c-2.21 0-4-1.79-4-4 0-.85.25-1.64.69-2.31.22-.34.31-.76.31-1.19 0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2" />
            <circle cx="8.5" cy="8.5" r="1" fill="currentColor" />
            <circle cx="15.5" cy="8.5" r="1" fill="currentColor" />
            <circle cx="8.5" cy="15.5" r="1" fill="currentColor" />
          </g>
        );
      case 'podcasting-audio':
        return (
          <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
            <line x1="12" y1="19" x2="12" y2="23" />
            <line x1="8" y1="23" x2="16" y2="23" />
          </g>
        );
      case 'photography-basics':
        return (
          <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
            <circle cx="12" cy="13" r="4" />
          </g>
        );
      case 'video-editing-pro':
        return (
          <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
            <line x1="7" y1="2" x2="7" y2="22" />
            <line x1="17" y1="2" x2="17" y2="22" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <line x1="2" y1="7" x2="7" y2="7" />
            <line x1="2" y1="17" x2="7" y2="17" />
            <line x1="17" y1="17" x2="22" y2="17" />
            <line x1="17" y1="7" x2="22" y2="7" />
          </g>
        );
      case '3d-modeling-blender':
        return (
          <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
            <line x1="12" y1="22.08" x2="12" y2="12" />
          </g>
        );
      case 'music-production':
        return (
          <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
          </g>
        );

      // LIFE SKILLS
      case 'effective-communication':
        return (
          <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </g>
        );
      case 'time-focus-management':
        return (
          <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </g>
        );
      case 'emotional-intelligence':
        return (
          <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </g>
        );
      case 'learning-meta-learning':
        return (
          <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18h6" />
            <path d="M10 22h4" />
            <path d="M12 2a7 7 0 0 1 4 11.6c0 2.4-1.6 3.4-1.6 3.4h-4.8s-1.6-1-1.6-3.4A7 7 0 0 1 12 2z" />
          </g>
        );
      case 'home-maintenance':
        return (
          <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
          </g>
        );
      case 'first-aid-basics':
        return (
          <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            <path d="M12 7v6" />
            <path d="M9 10h6" />
          </g>
        );
      case 'personal-branding':
        return (
          <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
            <polygon points="12 15 13.5 18 16.5 18.5 14.5 20.5 15 23.5 12 22 9 23.5 9.5 20.5 7.5 18.5 10.5 18 12 15" stroke="none" fill="currentColor" opacity="0.3" transform="translate(6, -8) scale(0.5)" />
          </g>
        );

      // HOBBY
      case 'culinary-fundamentals':
        return (
          <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 13.87A4 4 0 0 1 9.87 10h4.26A4 4 0 0 1 18 13.87V21H6v-7.13z" />
            <path d="M6 10V8a6 6 0 1 1 12 0v2" />
            <line x1="12" y1="4" x2="12" y2="2" />
          </g>
        );
      case 'drawing-sketching':
        return (
          <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.375-9.375z" />
          </g>
        );
      case 'meditation-mindfulness':
        return (
          <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
          </g>
        );
      case 'gardening-basics':
        return (
          <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 20h10" />
            <path d="M10 20c5.5-2.5.8-6.4 3-10" />
            <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
            <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
          </g>
        );
      case 'yoga-flexibility':
        return (
          <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="4" r="2" />
            <path d="M10 13a2 2 0 0 0 4 0" />
            <path d="M20 10a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2" />
            <path d="M12 15l-3 6" />
            <path d="M12 15l3 6" />
          </g>
        );
      case 'interior-design':
        return (
          <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 20v-5h8v5" />
            <path d="M4 20v-7a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v7" />
            <path d="M12 9v-4" />
            <path d="M8 5h8" />
          </g>
        );
      case 'barista-skills':
        return (
          <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
            <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
            <line x1="6" y1="1" x2="6" y2="4" />
            <line x1="10" y1="1" x2="10" y2="4" />
            <line x1="14" y1="1" x2="14" y2="4" />
          </g>
        );
      case 'bodyweight-fitness':
        return (
          <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6.5 6.5l11 11" />
            <path d="M21 21l-1-1" />
            <path d="M3 3l1 1" />
            <path d="M18 6l-3 3" />
            <path d="M6 18l3-3" />
            <rect x="14" y="2" width="8" height="8" rx="2" transform="rotate(45 18 6)" />
            <rect x="2" y="14" width="8" height="8" rx="2" transform="rotate(45 6 18)" />
          </g>
        );

      // UNIVERSAL
      case 'critical-thinking':
        return (
          <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
            <path d="M11 8v3h3" />
          </g>
        );
      case 'problem-solving':
        return (
          <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
            <path d="M12 6v12" />
            <path d="M6 12h12" />
          </g>
        );
      case 'language-learning':
        return (
          <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            <path d="M8 9h8" />
            <path d="M8 13h6" />
          </g>
        );
      case 'research-skills':
        return (
          <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            <circle cx="12" cy="12" r="3" />
            <line x1="14" y1="14" x2="17" y2="17" />
          </g>
        );
      case 'stoicism-mindset':
        return (
          <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="2" width="16" height="20" rx="2" />
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="18" x2="20" y2="18" />
            <path d="M8 2v20" />
            <path d="M16 2v20" />
          </g>
        );

      default:
        // Generic Star
        return (
          <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </g>
        );
    }
  };

  return (
    <svg viewBox="0 0 24 24" className={`${className} ${colorClass}`}>
      {getPath(id)}
    </svg>
  );
};
