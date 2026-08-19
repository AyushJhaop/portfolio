import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { Magnet } from '../components/Magnet';
import { ContactButton } from '../components/ContactButton';

interface HeroSectionProps {
  onContactClick?: () => void;
  onResumeClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onContactClick,
  onResumeClick,
}) => {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#0C0C0C]">
      {/* Top Spacer for Floating Navbar - Guaranteed clearance below fixed navbar */}
      <div className="w-full pt-24 xs:pt-28 sm:pt-32 md:pt-36" />

      {/* Hero Heading - 100% visible below navbar */}
      <div className="w-full overflow-hidden flex justify-center items-center z-10 px-2 sm:px-4 mt-1 sm:mt-3">
        <FadeIn delay={0.15} y={30} className="w-full text-center">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[11vw] xs:text-[10vw] sm:text-[12vw] md:text-[13vw] lg:text-[14vw] select-none">
            Hi, i'm ayush
          </h1>
        </FadeIn>
      </div>

      {/* Hero Portrait with Magnet effect - Scaled so everything fits on mobile screens */}
      <div className="relative w-full flex items-center justify-center z-10 my-auto pointer-events-auto py-1 sm:py-2 mt-1 sm:mt-4 transform translate-y-0 sm:translate-y-2 md:translate-y-4">
        {/* Soft atmospheric backlight */}
        <div className="absolute w-[220px] xs:w-[260px] sm:w-[360px] md:w-[440px] h-[220px] xs:h-[260px] sm:h-[360px] md:h-[440px] bg-radial from-white/[0.08] via-transparent to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

        <FadeIn delay={0.3} y={20}>
          <Magnet
            padding={120}
            strength={2.5}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <img
              src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
              alt="Ayush 3D Portrait"
              className="w-[145px] xs:w-[180px] sm:w-[260px] md:w-[320px] lg:w-[380px] max-h-[30vh] xs:max-h-[35vh] sm:max-h-[46vh] md:max-h-[50vh] h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.95)] select-none pointer-events-auto"
              loading="eager"
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom Bar: Bio & Action Buttons */}
      <div className="w-full px-4 sm:px-6 md:px-10 pb-6 sm:pb-8 md:pb-10 flex justify-between items-end z-20 gap-3">
        <FadeIn delay={0.35} y={20}>
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[130px] xs:max-w-[160px] sm:max-w-[240px] md:max-w-[280px] text-[0.65rem] xs:text-[0.75rem] sm:text-[0.95rem]">
            Building modern web applications, AI-powered systems, and scalable digital experiences that help businesses grow.
          </p>
        </FadeIn>

        <FadeIn delay={0.4} y={20} className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          {onResumeClick && (
            <button
              onClick={onResumeClick}
              className="px-4 py-2.5 sm:px-6 sm:py-3 rounded-full border border-[#D7E2EA]/40 hover:border-[#D7E2EA] text-[#D7E2EA] hover:bg-[#D7E2EA]/10 uppercase font-medium tracking-wider text-xs sm:text-sm transition-all cursor-pointer"
            >
              Resume
            </button>
          )}
          <ContactButton onClick={onContactClick} />
        </FadeIn>
      </div>
    </section>
  );
};
