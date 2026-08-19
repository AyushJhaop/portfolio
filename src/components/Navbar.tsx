import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Sparkles, Code2, FolderKanban, Trophy, FileText, Mail } from 'lucide-react';

interface NavbarProps {
  onContactClick?: () => void;
  onResumeClick?: () => void;
}

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'hero', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'services', label: 'Services', icon: Sparkles },
  { id: 'skills', label: 'Skills', icon: Code2 },
  { id: 'projects', label: 'Projects', icon: FolderKanban },
  { id: 'achievements', label: 'Awards', icon: Trophy },
  { id: 'resume', label: 'Resume', icon: FileText },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export const Navbar: React.FC<NavbarProps> = ({ onContactClick, onResumeClick }) => {
  const [activeId, setActiveId] = useState<string>('hero');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Dynamic Scroll Active Section Observer
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 200) {
        setActiveId('hero');
        return;
      }

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const id = NAV_ITEMS[i].id;
        if (id === 'hero') continue;
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top - 120) {
            setActiveId(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveId('hero');
      return;
    }
    if (id === 'contact' && onContactClick) {
      onContactClick();
      return;
    }
    if (id === 'resume' && onResumeClick) {
      const el = document.getElementById('resume');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center pointer-events-none px-3">
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="pointer-events-auto max-w-full"
      >
        <nav className="flex items-center gap-1 xs:gap-1.5 sm:gap-2.5 md:gap-3 p-1.5 xs:p-2 sm:p-3 md:p-3.5 bg-[#121214]/90 backdrop-blur-2xl border-2 border-[#D7E2EA]/25 rounded-full shadow-[0_25px_60px_rgba(0,0,0,0.95)] transition-all duration-300 hover:border-[#D7E2EA]/50 max-w-[98vw] sm:max-w-max overflow-x-auto no-scrollbar">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeId === item.id;
            const isHovered = hoveredId === item.id;
            const isPillActive = hoveredId ? isHovered : isActive;

            return (
              <div key={item.id} className="relative flex items-center justify-center">
                {/* Floating Micro Tooltip on Hover */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.85 }}
                      animate={{ opacity: 1, y: -50, scale: 1 }}
                      exit={{ opacity: 0, y: 4, scale: 0.85 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-0 px-3 py-1.5 bg-[#1A1A1E] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl border border-[#D7E2EA]/25 shadow-2xl whitespace-nowrap pointer-events-none z-30"
                    >
                      {item.label}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-[#1A1A1E] rotate-45 border-r border-b border-[#D7E2EA]/25" />
                    </motion.div>
                  )}
                </AnimatePresence>

                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="relative px-2 py-2 xs:px-2.5 xs:py-2.5 sm:px-4.5 sm:py-3 md:px-5 md:py-3.5 text-xs sm:text-sm md:text-base font-bold uppercase tracking-wider transition-all duration-200 select-none z-10 flex items-center gap-2 sm:gap-2.5 rounded-full cursor-pointer group"
                  aria-label={item.label}
                >
                  {/* Sliding Animated Active Pill */}
                  {isPillActive && (
                    <motion.div
                      layoutId="nav-active-pill"
                      className="absolute inset-0 bg-[#D7E2EA] rounded-full -z-10 shadow-[0_0_25px_rgba(215,226,234,0.5)]"
                      initial={false}
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}

                  {/* Icon */}
                  <Icon
                    className={`w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 transition-colors duration-200 ${
                      isPillActive ? 'text-[#0C0C0C]' : 'text-[#D7E2EA]/75 group-hover:text-white'
                    }`}
                  />

                  {/* Text Label - Expanding on Active/Hover on Medium+ screens */}
                  <span
                    className={`hidden md:inline-block transition-all duration-200 text-xs sm:text-sm ${
                      isPillActive
                        ? 'text-[#0C0C0C] font-extrabold max-w-[110px] opacity-100'
                        : 'text-[#D7E2EA]/75 max-w-0 opacity-0 overflow-hidden w-0 group-hover:max-w-[110px] group-hover:opacity-100 group-hover:w-auto'
                    }`}
                  >
                    {item.label}
                  </span>

                  {/* Active Dot Indicator when inactive & not hovered */}
                  {isActive && !isPillActive && (
                    <motion.span
                      layoutId="nav-active-dot"
                      className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#D7E2EA]"
                    />
                  )}
                </a>
              </div>
            );
          })}
        </nav>
      </motion.header>
    </div>
  );
};
