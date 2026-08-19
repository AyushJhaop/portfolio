import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { ContactButton } from '../components/ContactButton';

interface AboutSectionProps {
  onContactClick?: () => void;
  onResumeClick?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick, onResumeClick }) => {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-5 sm:px-8 md:px-12 py-20 sm:py-24 md:py-32 bg-[#0C0C0C] overflow-hidden"
    >
      {/* Decorative 3D Elements in Corners - Full Opacity & Vibrant 3D Contrast */}
      {/* Top-left: Moon icon */}
      <div className="absolute top-[6%] left-[1%] sm:left-[3%] md:left-[5%] z-0 pointer-events-none">
        <FadeIn delay={0.1} x={-60} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="3D Moon Icon"
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain drop-shadow-[0_15px_35px_rgba(0,0,0,0.9)] select-none"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Bottom-left: 3D abstract shape */}
      <div className="absolute bottom-[8%] left-[2%] sm:left-[6%] md:left-[9%] z-0 pointer-events-none">
        <FadeIn delay={0.25} x={-60} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="3D Abstract Shape"
            className="w-[100px] sm:w-[140px] md:w-[180px] h-auto object-contain drop-shadow-[0_15px_35px_rgba(0,0,0,0.9)] select-none"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Top-right: Lego icon */}
      <div className="absolute top-[6%] right-[1%] sm:right-[3%] md:right-[5%] z-0 pointer-events-none">
        <FadeIn delay={0.15} x={60} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="3D Lego Icon"
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain drop-shadow-[0_15px_35px_rgba(0,0,0,0.9)] select-none"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Bottom-right: 3D group */}
      <div className="absolute bottom-[8%] right-[2%] sm:right-[6%] md:right-[9%] z-0 pointer-events-none">
        <FadeIn delay={0.3} x={60} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="3D Object Group"
            className="w-[130px] sm:w-[170px] md:w-[220px] h-auto object-contain drop-shadow-[0_15px_35px_rgba(0,0,0,0.9)] select-none"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl w-full mx-auto text-center">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} className="w-full">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center select-none mb-8 sm:mb-12"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About Me
          </h2>
        </FadeIn>

        {/* Narrative & Career Objective */}
        <FadeIn delay={0.15} y={30} className="w-full max-w-3xl mb-12 sm:mb-16">
          <div className="space-y-6 text-[#D7E2EA] font-light leading-relaxed text-base sm:text-lg md:text-xl">
            <p>
              I'm <strong className="font-semibold text-white">Ayush Jha</strong>, a Full-Stack Developer and AI Automation Engineer passionate about building modern web applications and intelligent automation systems.
            </p>
            <p className="text-[#D7E2EA]/80 text-sm sm:text-base md:text-lg">
              <strong className="font-semibold text-white uppercase tracking-wider block mb-2 text-xs sm:text-sm text-[#D7E2EA]/60">
                Career Objective
              </strong>
              To build and scale robust, user-focused digital products using TypeScript, Next.js, Node.js, Python, and AI pipelines that solve real-world problems and deliver measurable impact.
            </p>
          </div>
        </FadeIn>

        {/* Action CTAs */}
        <FadeIn delay={0.25} y={20} className="flex items-center gap-4 flex-wrap justify-center">
          {onResumeClick && (
            <button
              onClick={onResumeClick}
              className="px-6 py-3.5 rounded-full border border-[#D7E2EA]/40 hover:border-[#D7E2EA] text-[#D7E2EA] hover:bg-[#D7E2EA]/10 uppercase font-medium tracking-wider text-xs sm:text-sm transition-all cursor-pointer"
            >
              View Resume
            </button>
          )}
          <ContactButton onClick={onContactClick} />
        </FadeIn>
      </div>
    </section>
  );
};
