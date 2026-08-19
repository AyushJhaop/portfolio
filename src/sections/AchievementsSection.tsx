import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { MagicBento } from '../components/MagicBento';
import type { BentoCardData } from '../components/MagicBento';

const ACHIEVEMENT_CARDS: BentoCardData[] = [
  {
    color: '#120F17',
    title: 'Winner – SummerHacks',
    description: '1st Place overall winner in high-stakes 36-hour hackathon, engineering real-time autonomous AI agent workflows and intelligent tools.',
    label: '2026 / 1st Place Winner',
    techs: ['Winner', '1st Place', 'AI Agents', '36h Hackathon', '2026']
  },
  {
    color: '#120F17',
    title: 'Top 5 – Odoo National Hackathon',
    description: 'National finalist ranked in Top 5 among 500+ competing engineering teams nationwide, building enterprise automation modules.',
    label: '2025 / National Finalist',
    techs: ['Top 5 National', 'Odoo ERP', 'Full-Stack', '2025']
  },
  {
    color: '#120F17',
    title: 'Top 5 – College Demo Day',
    description: 'Selected in Top 5 innovative product demonstrations presented before founder juries, industry mentors, and technical leaders.',
    label: '2025 / Product Showcase',
    techs: ['Top 5 Finalist', 'SaaS Demo', 'Product Pitch', '2025']
  },
  {
    color: '#120F17',
    title: 'Winner – College Internal SIH Hackathon',
    description: 'Secured 1st rank in Smart India Hackathon internal university selection round for national problem statement solutions.',
    label: '2024 / 1st Place Winner',
    techs: ['Winner', '1st Rank', 'SIH 2024', 'Problem Solving', '2024']
  }
];

export const AchievementsSection: React.FC = () => {
  return (
    <section
      id="achievements"
      className="relative w-full bg-[#0C0C0C] text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-20 px-4 sm:px-6 md:px-10 py-20 sm:py-24 md:py-32 shadow-2xl border-t border-[#D7E2EA]/15 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-12 sm:mb-16 md:mb-20">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center select-none"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Awards
          </h2>
          <p className="text-[#D7E2EA]/60 font-light text-xs sm:text-sm md:text-base uppercase tracking-widest mt-4">
            Hackathon Victories, National Recognition & Technical Milestones
          </p>
        </FadeIn>

        {/* Interactive Magic Bento Matrix */}
        <FadeIn delay={0.15} y={30} className="w-full flex justify-center">
          <MagicBento
            cards={ACHIEVEMENT_CARDS}
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
