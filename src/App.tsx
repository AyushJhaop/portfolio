import { useState } from 'react';
import { SmoothScroll } from './components/SmoothScroll';
import { ScrollProgress } from './components/ScrollProgress';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { StackingSection } from './components/StackingSection';
import { HeroSection } from './sections/HeroSection';
import { MarqueeSection } from './sections/MarqueeSection';
import { AboutSection } from './sections/AboutSection';
import { ServicesSection } from './sections/ServicesSection';
import { SkillsSection } from './sections/SkillsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { AchievementsSection } from './sections/AchievementsSection';
import { ResumeSection } from './sections/ResumeSection';
import { ContactSection } from './sections/ContactSection';
import { ContactModal } from './components/ContactModal';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleOpenContact = () => {
    setIsContactOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactOpen(false);
  };

  const handleOpenResume = () => {
    setIsResumeOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeOpen(false);
  };

  return (
    <SmoothScroll>
      <div className="w-full min-h-screen bg-[#0C0C0C] text-[#D7E2EA] font-sans overflow-x-clip selection:bg-[#B600A8] selection:text-white">
        {/* Top Scroll Progress Indicator */}
        <ScrollProgress />

        {/* Smooth Custom Cursor Follower */}
        <CustomCursor />

        {/* Floating Modern Curved Navbar */}
        <Navbar
          onContactClick={handleOpenContact}
          onResumeClick={handleOpenResume}
        />

        {/* 1. Hero Section (Base Layer) */}
        <div className="relative z-0">
          <HeroSection
            onContactClick={handleOpenContact}
            onResumeClick={handleOpenResume}
          />
        </div>

        {/* 2. Marquee Showcase */}
        <div className="relative z-0">
          <MarqueeSection />
        </div>

        {/* 3. About Section */}
        <StackingSection id="about" index={1}>
          <AboutSection
            onContactClick={handleOpenContact}
            onResumeClick={handleOpenResume}
          />
        </StackingSection>

        {/* 4. Services Section */}
        <StackingSection id="services" index={2}>
          <ServicesSection />
        </StackingSection>

        {/* 5. Clean Redesigned Skills Section */}
        <StackingSection id="skills" index={3}>
          <SkillsSection />
        </StackingSection>

        {/* 6. Featured Projects */}
        <StackingSection id="projects" index={4}>
          <ProjectsSection />
        </StackingSection>

        {/* 7. Achievements Section */}
        <StackingSection id="achievements" index={5}>
          <AchievementsSection />
        </StackingSection>

        {/* 8. Resume & LinkedIn Section */}
        <StackingSection id="resume" index={6}>
          <ResumeSection onResumeClick={handleOpenResume} />
        </StackingSection>

        {/* 9. Contact Section (Top Layer) */}
        <StackingSection id="contact" index={7}>
          <ContactSection />
        </StackingSection>

        {/* Interactive Modals */}
        <ContactModal isOpen={isContactOpen} onClose={handleCloseContact} />
        <ResumeModal isOpen={isResumeOpen} onClose={handleCloseResume} />
      </div>
    </SmoothScroll>
  );
}

export default App;
