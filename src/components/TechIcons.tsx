import React from 'react';

interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = '', size = 20 }) => {
  const iconStyle = { width: `${size}px`, height: `${size}px`, flexShrink: 0 };
  const cleanName = name.toLowerCase().trim();

  switch (cleanName) {
    case 'typescript':
    case 'ts':
      return (
        <svg style={iconStyle} className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path d="M4 8.5h8M8 8.5v10" stroke="#FFF" strokeWidth="2" strokeLinecap="round" />
          <path d="M14 18c1.5 1 3.5 1 4.5-.5s-.5-2.5-2-3-2.5-1.5-2-3 2.5-1.5 4-.5" stroke="#FFF" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'javascript':
    case 'js':
      return (
        <svg style={iconStyle} className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path d="M10 12v5c0 1.5-1 2-2 2s-2-.5-2-1.5" stroke="#000" strokeWidth="2" strokeLinecap="round" />
          <path d="M14 17.5c1 1 2.5 1 3.5 0s0-2-1.5-2.5-2-1.5-1.5-2.5 2-1 3 0" stroke="#000" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'python':
    case 'py':
      return (
        <svg style={iconStyle} className={className} viewBox="0 0 24 24" fill="currentColor">
          <path fill="#3776AB" d="M11.9 2C6.9 2 7.2 4.2 7.2 4.2l.01 2.2h4.8v.7H5.2S2 6.7 2 11.8s2.8 5 2.8 5l1.6-.01v-2.4s-.1-2.9 2.9-2.9h4.9s2.8.04 2.8-2.7V4.7S17.4 2 11.9 2zm-1.4 1.5a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6z" />
          <path fill="#FFD43B" d="M12.1 22c5 0 4.7-2.2 4.7-2.2l-.01-2.2H12v-.7h6.8s3.2.4 3.2-4.7-2.8-5-2.8-5l-1.6.01v2.4s.1 2.9-2.9 2.9H9.8s-2.8-.04-2.8 2.7v4.1s-.4 2.7 5.1 2.7zm1.4-1.5a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6z" />
        </svg>
      );

    case 'c++':
    case 'cpp':
    case 'c plus plus':
    case 'c':
      return (
        <svg style={iconStyle} className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#00599C" />
          <path d="M10 8.5a4 4 0 1 0 0 7" stroke="#FFF" strokeWidth="2" strokeLinecap="round" />
          <path d="M13.5 12h3M15 10.5v3" stroke="#004482" strokeWidth="2.5" />
          <path d="M13.5 12h3M15 10.5v3" stroke="#FFF" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M18.5 12h3M20 10.5v3" stroke="#004482" strokeWidth="2.5" />
          <path d="M18.5 12h3M20 10.5v3" stroke="#FFF" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );

    case 'sql':
    case 'mysql':
      return (
        <svg style={iconStyle} className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#00758F" />
          <ellipse cx="12" cy="7" rx="7" ry="2.5" stroke="#FFF" strokeWidth="1.5" />
          <path d="M5 7v5c0 1.38 3.13 2.5 7 2.5s7-1.12 7-2.5V7" stroke="#FFF" strokeWidth="1.5" />
          <path d="M5 12v5c0 1.38 3.13 2.5 7 2.5s7-1.12 7-2.5v-5" stroke="#FFF" strokeWidth="1.5" />
        </svg>
      );

    case 'react':
    case 'react.js':
    case 'reactjs':
      return (
        <svg style={iconStyle} className={className} viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="1.5">
          <ellipse cx="12" cy="12" rx="10" ry="4" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="2" fill="#61DAFB" />
        </svg>
      );

    case 'next.js':
    case 'nextjs':
    case 'next':
      return (
        <svg style={iconStyle} className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="11" fill="#000" stroke="#FFF" strokeWidth="1.5" />
          <path d="M7.5 7.5v9M16.5 7.5v9M7.5 7.5l9 10" stroke="#FFF" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );

    case 'tailwind':
    case 'tailwind css':
    case 'tailwindcss':
      return (
        <svg style={iconStyle} className={className} viewBox="0 0 24 24" fill="#38BDF8">
          <path d="M12 6c-2.4 0-3.9 1.2-4.5 3.6 1-.9 2.1-1.3 3.3-.9 1 .3 1.7 1 2.5 1.8 1.3 1.3 2.7 2.7 5.7 2.7 2.4 0 3.9-1.2 4.5-3.6-1 .9-2.1 1.3-3.3.9-1-.3-1.7-1-2.5-1.8-1.3-1.3-2.7-2.7-5.7-2.7zm-6.5 6c-2.4 0-3.9 1.2-4.5 3.6 1-.9 2.1-1.3 3.3-.9 1 .3 1.7 1 2.5 1.8 1.3 1.3 2.7 2.7 5.7 2.7 2.4 0 3.9-1.2 4.5-3.6-1 .9-2.1 1.3-3.3.9-1-.3-1.7-1-2.5-1.8-1.3-1.3-2.7-2.7-5.7-2.7z" />
        </svg>
      );

    case 'three.js':
    case 'threejs':
    case 'three':
      return (
        <svg style={iconStyle} className={className} viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      );

    case 'framer motion':
    case 'framer':
      return (
        <svg style={iconStyle} className={className} viewBox="0 0 24 24" fill="#FFF">
          <path d="M4 2h16v8h-8zM4 10h8l8 8H4zM4 18h8v6z" />
        </svg>
      );

    case 'gsap':
      return (
        <svg style={iconStyle} className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#0AE448" />
          <path d="M7 12a4 4 0 1 1 4 4h-2M15 8h4M17 8v8" stroke="#000" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'n8n':
      return (
        <svg style={iconStyle} className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#EA4B71" />
          <circle cx="7" cy="12" r="2.5" fill="#FFF" />
          <circle cx="17" cy="8" r="2.5" fill="#FFF" />
          <circle cx="17" cy="16" r="2.5" fill="#FFF" />
          <path d="M7 12h6l4-4M13 12l4 4" stroke="#FFF" strokeWidth="1.8" />
        </svg>
      );

    case 'openai':
    case 'llm':
    case 'gpt':
      return (
        <svg style={iconStyle} className={className} viewBox="0 0 24 24" fill="none" stroke="#10A37F" strokeWidth="1.8">
          <circle cx="12" cy="12" r="8" />
          <path d="M12 4v4M12 16v4M4 12h4M16 12h4M6.3 6.3l2.8 2.8M14.9 14.9l2.8 2.8M6.3 17.7l2.8-2.8M14.9 9.1l2.8-2.8" />
        </svg>
      );

    case 'claude':
    case 'anthropic':
      return (
        <svg style={iconStyle} className={className} viewBox="0 0 24 24" fill="#D97706">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.5h-2v-5h2zm0-7h-2V7.5h2z" />
        </svg>
      );

    case 'node.js':
    case 'nodejs':
    case 'node':
      return (
        <svg style={iconStyle} className={className} viewBox="0 0 24 24" fill="#339933">
          <path d="M12 2l8.5 5v10L12 22l-8.5-5V7L12 2zm0 3.5L6 9.5v5l6 4 6-4v-5l-6-4z" />
        </svg>
      );

    case 'express.js':
    case 'express':
      return (
        <svg style={iconStyle} className={className} viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="1.8">
          <rect width="24" height="24" rx="4" fill="#1A1A1A" />
          <path d="M6 8l5 8M11 8l-5 8M14 8h4M14 12h3M14 16h4" strokeLinecap="round" />
        </svg>
      );

    case 'fastapi':
      return (
        <svg style={iconStyle} className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#009688" />
          <path d="M13 3L6 14h6l-1 7 7-11h-6l1-7z" fill="#FFF" />
        </svg>
      );

    case 'graphql':
      return (
        <svg style={iconStyle} className={className} viewBox="0 0 24 24" fill="none" stroke="#E10098" strokeWidth="1.8">
          <circle cx="12" cy="4" r="2" />
          <circle cx="19" cy="8" r="2" />
          <circle cx="19" cy="16" r="2" />
          <circle cx="12" cy="20" r="2" />
          <circle cx="5" cy="16" r="2" />
          <circle cx="5" cy="8" r="2" />
          <path d="M12 6v12M6.7 9l10.6 6M6.7 15l10.6-6" />
        </svg>
      );

    case 'postgresql':
    case 'postgres':
      return (
        <svg style={iconStyle} className={className} viewBox="0 0 24 24" fill="#4169E1">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.8c-2.4.2-4.5-.8-5-2.6-.5-1.7.6-3.7 2.8-4.2 2.1-.5 4.3.4 5 2.1.8 1.8-.4 4.5-2.8 4.7z" />
        </svg>
      );

    case 'mongodb':
    case 'mongo':
    case 'mongo db':
      return (
        <svg style={iconStyle} className={className} viewBox="0 0 24 24" fill="none">
          <path d="M12 2C12 2 7 7 7 13c0 3.31 2.24 6 5 6.8V22l1-1v-2.2c2.76-.8 5-3.49 5-6.8 0-6-6-11-6-11z" fill="#47A248" />
          <path d="M12 2v20c-.05 0-.1 0-.15-.01C9.09 21.2 7 18.3 7 14.8c0-5.2 4.4-9.8 4.85-12.75.05-.05.1-.05.15-.05z" fill="#499D4A" />
        </svg>
      );

    case 'prisma':
    case 'prisma orm':
      return (
        <svg style={iconStyle} className={className} viewBox="0 0 24 24" fill="none">
          <path d="M12.5 2L4 18.5l6.5 3.5L20 9.5 12.5 2z" fill="#2D3748" stroke="#5A67D8" strokeWidth="1.5" />
          <path d="M10.5 22l2-3.5 7.5-9" stroke="#FFF" strokeWidth="1.5" />
        </svg>
      );

    case 'redis':
      return (
        <svg style={iconStyle} className={className} viewBox="0 0 24 24" fill="#DC382D">
          <path d="M12 3L2 8l10 5 10-5-10-5zM2 13l10 5 10-5M2 18l10 5 10-5" />
        </svg>
      );

    case 'firebase':
      return (
        <svg style={iconStyle} className={className} viewBox="0 0 24 24" fill="currentColor">
          <path fill="#FFA611" d="M4.5 18.5L7.2 4.2a.5.5 0 0 1 .9-.2l2.9 5.5-6.5 9z" />
          <path fill="#FFCA28" d="M12.5 8.2l2.2-4.3a.5.5 0 0 1 .9.1l3.9 14.5-7-10.3z" />
          <path fill="#F57C00" d="M3.5 19.5l1.6-1 7.4 4.3a1 1 0 0 0 1 0l7-4.3 1.5 1a1 1 0 0 1-.5 1.8H4a1 1 0 0 1-.5-1.8z" />
        </svg>
      );

    case 'docker':
      return (
        <svg style={iconStyle} className={className} viewBox="0 0 24 24" fill="#2496ED">
          <path d="M13 10h2V8h-2v2zm-3 0h2V8h-2v2zm-3 0h2V8H7v2zm-3 0h2V8H4v2zm6-3h2V5h-2v2zm-3 0h2V5H7v2zm-3 0h2V5H4v2zm12 3h2V8h-2v2zm3.5 2.5c-.5-.3-1.6-.4-2.5.2-.2-1.3-1.2-2.2-2.5-2.2H3c-.6 0-1 .4-1 1 0 4 3.5 7.5 9 7.5s9.5-3 10.5-6c.2-.3.1-.4 0-.5z" />
        </svg>
      );

    case 'aws':
      return (
        <svg style={iconStyle} className={className} viewBox="0 0 24 24" fill="none">
          <path d="M6 10l2-4 2 4M7 8.5h2" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M12 6v4M12 8l2-2M12 8l2 2" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M17 10l1-4 1 4 1-4" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M4 15c4.5 3 11.5 3 16 0" stroke="#FF9900" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M18 14.5l2 1-1.5 1.5" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case 'git':
    case 'github':
      return (
        <svg style={iconStyle} className={className} viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      );

    case 'vercel':
      return (
        <svg style={iconStyle} className={className} viewBox="0 0 24 24" fill="#FFF">
          <path d="M12 2L2 20h20L12 2z" />
        </svg>
      );

    case 'postman':
      return (
        <svg style={iconStyle} className={className} viewBox="0 0 24 24" fill="#FF6C37">
          <circle cx="12" cy="12" r="10" />
          <path d="M10 8l5 4-5 4V8z" fill="#FFF" />
        </svg>
      );

    case 'figma':
      return (
        <svg style={iconStyle} className={className} viewBox="0 0 24 24" fill="none">
          <path d="M8 2h4v4H8a2 2 0 0 1 0-4z" fill="#F24E1E" />
          <path d="M12 2h4a2 2 0 0 1 0 4h-4V2z" fill="#FF7262" />
          <path d="M8 6h4v4H8a2 2 0 0 1 0-4z" fill="#A259FF" />
          <circle cx="14" cy="8" r="2" fill="#1ABCFE" />
          <path d="M8 10h4v4H8a2 2 0 0 1 0-4z" fill="#0ACF83" />
          <path d="M8 14h4v2a2 2 0 0 1-4 0v-2z" fill="#0ACF83" />
        </svg>
      );

    default:
      return (
        <svg style={iconStyle} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v8M8 12h8" />
        </svg>
      );
  }
};
