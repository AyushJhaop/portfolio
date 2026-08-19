import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { MagicBento } from '../components/MagicBento';
import type { BentoCardData } from '../components/MagicBento';

const SKILLS_CARDS: BentoCardData[] = [
  {
    color: '#120F17',
    title: 'Languages & Core',
    description: 'Foundation programming languages',
    label: '01 / Foundation',
    techs: ['TypeScript', 'JavaScript', 'Python', 'C++']
  },
  {
    color: '#120F17',
    title: 'Frontend & 3D Web',
    description: 'Modern reactive & immersive user interfaces',
    label: '02 / Interface',
    techs: ['React', 'Next.js', 'Tailwind', 'Three.js', 'Framer Motion', 'GSAP']
  },
  {
    color: '#120F17',
    title: 'AI & Automation',
    description: 'Intelligent pipelines & autonomous workflows',
    label: '03 / Intelligence',
    techs: ['n8n', 'OpenAI', 'Claude', 'Python']
  },
  {
    color: '#120F17',
    title: 'Backend & APIs',
    description: 'High-throughput microservices & endpoints',
    label: '04 / Architecture',
    techs: ['Node.js', 'Express.js', 'FastAPI', 'GraphQL']
  },
  {
    color: '#120F17',
    title: 'Databases & Storage',
    description: '',
    label: '05 / Storage',
    techs: ['MongoDB', 'PostgreSQL', 'SQL', 'Prisma', 'Firebase']
  },
  {
    color: '#120F17',
    title: 'Cloud & DevOps',
    description: 'Cloud infrastructure, containers & CI/CD',
    label: '06 / Deployment',
    techs: ['Docker', 'AWS', 'GitHub', 'Vercel', 'Postman', 'Figma']
  }
];

export const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative w-full bg-[#0C0C0C] text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-4 sm:px-6 md:px-10 py-20 sm:py-24 md:py-32 shadow-2xl border-t border-[#D7E2EA]/15 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-12 sm:mb-16 md:mb-20">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center select-none"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Skills
          </h2>
          <p className="text-[#D7E2EA]/60 font-light text-xs sm:text-sm md:text-base uppercase tracking-widest mt-4">
            Interactive Bento Matrix of Core Technologies & Frameworks
          </p>
        </FadeIn>

        {/* Stable, Smooth Interactive Magic Bento Component */}
        <FadeIn delay={0.15} y={30} className="w-full flex justify-center">
          <MagicBento
            cards={SKILLS_CARDS}
            textAutoHide={false}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={false}
            enableMagnetism={false}
            clickEffect={true}
            spotlightRadius={280}
            particleCount={12}
            glowColor="132, 0, 255"
          />
        </FadeIn>
      </div>
    </section>
  );
};
