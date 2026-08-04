import React from 'react';
import { ContactButton } from './ContactButton';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onContactClick?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onContactClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative w-full bg-[#0C0C0C] text-[#D7E2EA] px-6 md:px-10 py-16 sm:py-20 border-t border-[#D7E2EA]/10 z-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="hero-heading text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-3">
            Ready to Create?
          </h2>
          <p className="text-[#D7E2EA]/60 text-sm sm:text-base max-w-md font-light">
            Let's build striking, photorealistic 3D visuals and unforgettable digital experiences together.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <ContactButton onClick={onContactClick} />
          
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-4 rounded-full border-2 border-[#D7E2EA]/30 text-[#D7E2EA] hover:border-[#D7E2EA] hover:bg-[#D7E2EA]/10 transition-all cursor-pointer"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-[#D7E2EA]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D7E2EA]/50 font-light uppercase tracking-wider">
        <p>© {new Date().getFullYear()} AYUSH -- 3D CREATOR. ALL RIGHTS RESERVED.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-[#D7E2EA] transition-colors">TWITTER / X</a>
          <a href="#" className="hover:text-[#D7E2EA] transition-colors">INSTAGRAM</a>
          <a href="#" className="hover:text-[#D7E2EA] transition-colors">ARTSTATION</a>
          <a href="#" className="hover:text-[#D7E2EA] transition-colors">LINKEDIN</a>
        </div>
      </div>
    </footer>
  );
};
