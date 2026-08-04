import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';
import { BorderGlow } from '../components/BorderGlow';

interface SkillCategory {
  id: string;
  category: string;
  skills: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: '01',
    category: 'Programming Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'C++'],
  },
  {
    id: '02',
    category: 'Frontend',
    skills: ['React.js', 'Next.js', 'Tailwind CSS', 'GSAP', 'Three.js', 'Framer Motion'],
  },
  {
    id: '03',
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'FastAPI'],
  },
  {
    id: '04',
    category: 'Databases',
    skills: ['MongoDB', 'PostgreSQL', 'Prisma'],
  },
  {
    id: '05',
    category: 'AI & Automation',
    skills: ['n8n'],
  },
  {
    id: '06',
    category: 'DevOps & Cloud',
    skills: ['Docker', 'AWS'],
  },
  {
    id: '07',
    category: 'Tools',
    skills: ['Git & GitHub', 'Postman', 'Figma', 'Vercel'],
  },
];

export const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative w-full bg-[#0C0C0C] text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 shadow-2xl border-t border-[#D7E2EA]/15 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20 md:mb-24">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center select-none"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Skills
          </h2>
          <p className="text-[#D7E2EA]/60 font-light text-sm sm:text-base md:text-lg uppercase tracking-widest mt-4">
            Technologies & Tools I Work With
          </p>
        </FadeIn>

        {/* Skills Cards Grid with BorderGlow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SKILL_CATEGORIES.map((category, index) => (
            <FadeIn
              key={category.id}
              delay={0.08 * index}
              y={30}
              className="h-full"
            >
              <BorderGlow
                edgeSensitivity={30}
                glowColor="210 60 75"
                backgroundColor="#141414"
                borderRadius={32}
                glowRadius={35}
                glowIntensity={1.2}
                coneSpread={28}
                animated={false}
                colors={['#c084fc', '#f472b6', '#38bdf8']}
                className="h-full shadow-xl transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="p-6 sm:p-8 flex flex-col justify-between h-full group">
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#D7E2EA]/10">
                    <h3 className="font-bold text-lg sm:text-xl uppercase tracking-wider text-[#D7E2EA] group-hover:text-white transition-colors">
                      {category.category}
                    </h3>
                    <span className="font-black text-[#D7E2EA]/30 text-xl sm:text-2xl select-none font-mono">
                      {category.id}
                    </span>
                  </div>

                  {/* Skill Pills */}
                  <div className="flex flex-wrap gap-2.5 sm:gap-3">
                    {category.skills.map((skill, skillIdx) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.04 * skillIdx, duration: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                        className="px-3.5 sm:px-4 py-1.5 sm:py-2 bg-[#1E1E1E] text-[#D7E2EA] text-xs sm:text-sm font-medium rounded-full border border-[#D7E2EA]/15 hover:border-[#D7E2EA] hover:bg-[#D7E2EA] hover:text-[#0C0C0C] transition-all duration-200 select-none cursor-default flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D7E2EA]/40 group-hover:bg-[#D7E2EA]" />
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </BorderGlow>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
