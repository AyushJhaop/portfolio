import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { Magnet } from '../components/Magnet';
import { ContactButton } from '../components/ContactButton';

interface HeroSectionProps {
  onContactClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onContactClick }) => {
  return (
    <section className="relative h-screen w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C]">
      {/* Top Spacer for Floating Navbar */}
      <div className="w-full pt-14 sm:pt-16 md:pt-20" />

      {/* Hero Heading */}
      <div className="w-full overflow-hidden flex justify-center items-center z-0 px-2 sm:px-4">
        <FadeIn delay={0.15} y={40} className="w-full text-center">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[10vw] sm:text-[12.5vw] md:text-[13.5vw] lg:text-[14.5vw] mt-2 sm:mt-4 md:-mt-5 select-none">
            Hi, i'm ayush
          </h1>
        </FadeIn>
      </div>

      {/* Hero Portrait with Magnet effect */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 bottom-[14%] sm:bottom-0 translate-y-0 sm:translate-y-[12%] md:translate-y-[15%] pointer-events-auto">
        <FadeIn delay={0.6} y={30}>
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <img
              src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
              alt="Jack 3D Portrait"
              className="w-[170px] xs:w-[200px] sm:w-[300px] md:w-[370px] lg:w-[430px] h-auto object-contain drop-shadow-2xl select-none pointer-events-auto"
              loading="eager"
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="w-full px-4 sm:px-6 md:px-10 pb-6 sm:pb-8 md:pb-10 flex justify-between items-end z-20 gap-3">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[130px] xs:max-w-[160px] sm:max-w-[220px] md:max-w-[260px] text-[0.65rem] xs:text-[0.75rem] sm:text-[1rem]"
          >
            Building modern web applications, AI-powered systems, and scalable digital experiences that help businesses grow.
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20} className="flex-shrink-0">
          <ContactButton onClick={onContactClick} />
        </FadeIn>
      </div>
    </section>
  );
};
