import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface NavbarProps {
  onContactClick?: () => void;
}

interface NavItem {
  id: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [activeId, setActiveId] = useState<string>('about');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Dynamic Scroll Active Section Observer
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const id = NAV_ITEMS[i].id;
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top - 100) {
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
    if (id === 'contact' && onContactClick) {
      onContactClick();
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const highlightedId = hoveredId || activeId;

  return (
    <div className="fixed top-3 sm:top-8 left-0 right-0 z-50 flex justify-center pointer-events-none px-2 sm:px-4">
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="pointer-events-auto max-w-full"
      >
        <nav className="flex items-center gap-0.5 sm:gap-3 md:gap-5 px-2 py-1.5 sm:px-8 sm:py-4 bg-[#121212]/90 backdrop-blur-2xl border sm:border-2 border-[#D7E2EA]/25 rounded-full shadow-[0_15px_40px_rgba(0,0,0,0.85)] transition-all duration-300 hover:border-[#D7E2EA]/60 max-w-[96vw] sm:max-w-max overflow-hidden">
          {NAV_ITEMS.map((item) => {
            const isHighlighted = highlightedId === item.id;
            const isActive = activeId === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="relative px-2 sm:px-6 md:px-7 py-1 sm:py-3 text-[10px] xs:text-xs sm:text-base md:text-lg font-bold uppercase tracking-tight sm:tracking-wider transition-colors duration-200 select-none z-10 flex items-center justify-center rounded-full flex-shrink-0"
              >
                {isHighlighted && (
                  <motion.div
                    layoutId="nav-dynamic-pill"
                    className="absolute inset-0 bg-[#D7E2EA] rounded-full -z-10 shadow-[0_0_25px_rgba(215,226,234,0.6)]"
                    initial={false}
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 28,
                    }}
                  />
                )}
                <span
                  className={`transition-colors duration-200 ${
                    isHighlighted ? 'text-[#0C0C0C] font-black' : 'text-[#D7E2EA]/75 hover:text-white'
                  }`}
                >
                  {item.label}
                </span>

                {/* Active Section Dot indicator when not highlighted */}
                {isActive && !isHighlighted && (
                  <motion.span
                    layoutId="active-dot"
                    className="absolute -bottom-1 w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#D7E2EA]"
                  />
                )}
              </a>
            );
          })}
        </nav>
      </motion.header>
    </div>
  );
};
