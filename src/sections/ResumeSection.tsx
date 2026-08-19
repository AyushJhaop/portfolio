import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { GithubIcon, LinkedinIcon } from '../components/Icons';

interface ResumeSectionProps {
  onResumeClick?: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onResumeClick }) => {
  const handleDirectDownload = () => {
    if (onResumeClick) {
      onResumeClick();
    } else {
      window.print();
    }
  };

  const githubUrl = 'https://github.com/AyushJhaop';
  const linkedinUrl = 'https://www.linkedin.com/in/ayush-jha-63b657319/';

  return (
    <section
      id="resume"
      className="relative w-full bg-white text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-20 px-5 sm:px-8 md:px-12 py-20 sm:py-24 md:py-32 border-t border-[#0C0C0C]/10 shadow-2xl overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-14 sm:mb-20">
          <h2
            className="font-black uppercase leading-none tracking-tight text-[#0C0C0C] text-center select-none"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Resume & Links
          </h2>
          <p className="text-[#0C0C0C]/60 font-light text-xs sm:text-sm md:text-base uppercase tracking-widest mt-4">
            Download Latest Resume & Professional Profiles
          </p>
        </FadeIn>

        {/* 2-Column Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Left Column: Downloadable Resume Card */}
          <FadeIn delay={0.1} y={30} className="lg:col-span-7 h-full">
            <div className="h-full bg-[#F6F7F9] border border-[#0C0C0C]/15 rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 flex flex-col justify-between hover:border-[#0C0C0C]/40 transition-colors">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-[#0C0C0C]/10">
                  <h3 className="text-2xl sm:text-3xl font-bold uppercase text-[#0C0C0C]">
                    Curriculum Vitae
                  </h3>
                  <span className="text-xs uppercase tracking-widest text-[#0C0C0C]/50">
                    Latest 2026
                  </span>
                </div>

                <p className="text-sm sm:text-base text-[#0C0C0C]/80 font-light leading-relaxed mb-8">
                  Download my full resume covering technical experience, software architecture projects, AI pipelines, academic background, and core skills.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-[#0C0C0C]/10">
                <button
                  onClick={handleDirectDownload}
                  className="w-full sm:flex-1 py-4 bg-[#0C0C0C] text-white rounded-full font-bold uppercase tracking-widest text-xs sm:text-sm hover:bg-[#252528] transition-colors cursor-pointer"
                >
                  Download Resume PDF
                </button>

                {onResumeClick && (
                  <button
                    onClick={onResumeClick}
                    className="w-full sm:w-auto px-6 py-4 rounded-full border-2 border-[#0C0C0C] text-[#0C0C0C] hover:bg-[#0C0C0C] hover:text-white uppercase tracking-wider text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Preview CV
                  </button>
                )}
              </div>
            </div>
          </FadeIn>

          {/* Right Column: LinkedIn & GitHub */}
          <FadeIn delay={0.2} y={30} className="lg:col-span-5 flex flex-col gap-6 justify-between">
            {/* LinkedIn */}
            <div className="bg-[#F6F7F9] border border-[#0C0C0C]/15 hover:border-[#0C0C0C]/40 rounded-[32px] p-6 sm:p-8 flex flex-col justify-between transition-colors">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <LinkedinIcon className="w-5 h-5 text-[#0C0C0C]" />
                  <h4 className="font-bold text-lg text-[#0C0C0C] uppercase tracking-wider">
                    LinkedIn
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#0C0C0C]/70 font-light leading-relaxed mb-6">
                  Connect on LinkedIn for professional network and career updates.
                </p>
              </div>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-[#0C0C0C] text-white hover:bg-[#252528] rounded-full font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition-all cursor-pointer text-center"
              >
                <span>Connect on LinkedIn</span>
              </a>
            </div>

            {/* GitHub */}
            <div className="bg-[#F6F7F9] border border-[#0C0C0C]/15 hover:border-[#0C0C0C]/40 rounded-[32px] p-6 sm:p-8 flex flex-col justify-between transition-colors">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <GithubIcon className="w-5 h-5 text-[#0C0C0C]" />
                  <h4 className="font-bold text-lg text-[#0C0C0C] uppercase tracking-wider">
                    GitHub
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#0C0C0C]/70 font-light leading-relaxed mb-6">
                  Explore full repositories, commit history, and open-source contributions.
                </p>
              </div>

              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-[#0C0C0C] text-white hover:bg-[#252528] rounded-full font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition-all cursor-pointer text-center"
              >
                <span>View GitHub Profile</span>
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
