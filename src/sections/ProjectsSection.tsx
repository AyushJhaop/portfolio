import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';
import { LiveProjectButton } from '../components/LiveProjectButton';
import { GithubProjectButton } from '../components/GithubProjectButton';

interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
  video?: string;
}

const PROJECTS: Project[] = [
  {
    id: '01',
    name: 'Suukr',
    category: 'Client & Gourmet Brand Platform',
    description: 'A modern digital platform for Suukr dessert studio featuring interactive gourmet menus, online order workflows, store location discovery, and custom responsive web design.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'UI/UX Design'],
    githubUrl: 'https://github.com/AyushJhaop',
    liveUrl: 'https://suukr.au/',
    image: '/projects/suukr.png',
  },
  {
    id: '02',
    name: 'Pando AI',
    category: 'AI Mental Health & Wellness',
    description: 'An AI-driven mental health and wellness platform that tracks daily mood trends, habit check-ins, journal entries, and activity growth with personalized AI insights.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'LLM API', 'Python'],
    githubUrl: 'https://github.com/AyushJhaop/Pando-AI',
    liveUrl: 'https://github.com/AyushJhaop/Pando-AI',
    image: '/projects/pando-ai.png',
  },
  {
    id: '03',
    name: 'E.V',
    category: 'AI Voice Assistant & Automation',
    description: 'EV is an AI-powered voice assistant that uses automation, web search, and AI agents to understand natural voice commands and perform tasks.',
    tags: ['Python', 'Voice AI', 'Web Search', 'AI Agents', 'Automation'],
    githubUrl: 'https://github.com/AyushJhaop/E.V',
    liveUrl: 'https://github.com/AyushJhaop/E.V',
    video: '/projects/ev-demo.mp4',
  },
];

interface ProjectCardProps {
  project: Project;
  index: number;
  totalCards: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, totalCards }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.04;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="sticky h-auto sm:min-h-[85vh] flex items-center justify-center mb-12 sm:mb-20"
      style={{
        top: `calc(4.5rem + ${index * 32}px)`,
      }}
    >
      <motion.div
        style={{ scale }}
        className="w-full bg-[#FFFFFF] border-2 border-[#0C0C0C] rounded-[36px] sm:rounded-[48px] md:rounded-[56px] p-5 sm:p-7 md:p-9 shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col justify-between group transition-all duration-300"
      >
        {/* Top Row: Info & High-Contrast Action Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5 pb-4 border-b-2 border-[#0C0C0C]">
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            {/* Number */}
            <span
              className="font-black text-[#0C0C0C] leading-none tracking-tighter select-none"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 72px)' }}
            >
              {project.id}
            </span>

            {/* Title & Category */}
            <div>
              <span className="text-xs uppercase tracking-widest text-[#0C0C0C]/80 font-bold block mb-1">
                {project.category}
              </span>
              <h3 className="font-black uppercase text-[#0C0C0C] text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                {project.name}
              </h3>
            </div>
          </div>

          {/* Buttons with Solid High Contrast */}
          <div className="flex items-center gap-3 flex-wrap">
            <GithubProjectButton
              repoUrl={project.githubUrl}
              className="bg-[#0C0C0C] text-white hover:bg-[#252528] font-bold"
            />
            {project.liveUrl && (
              <LiveProjectButton
                href={project.liveUrl}
                label={project.liveUrl.includes('suukr.au') ? 'Live Website' : 'View Project'}
                className="bg-[#0C0C0C] text-white hover:bg-[#252528] font-bold border-2 border-[#0C0C0C]"
              />
            )}
          </div>
        </div>

        {/* Middle Row: Description & Bold Tech Tags */}
        <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-xs sm:text-sm md:text-base text-[#0C0C0C] font-normal leading-relaxed max-w-2xl">
            {project.description}
          </p>

          <div className="flex flex-wrap items-center gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3.5 py-1.5 bg-[#0C0C0C] text-white rounded-full text-xs uppercase font-bold tracking-wider select-none shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Row: Media Showcase (Embedded Video Player or Screenshot) */}
        <div className="w-full h-[240px] sm:h-[340px] md:h-[420px] rounded-[28px] sm:rounded-[36px] overflow-hidden bg-[#000000] border-2 border-[#0C0C0C] relative shadow-inner">
          {project.video ? (
            <video
              src={project.video}
              controls
              controlsList="nodownload"
              preload="metadata"
              playsInline
              className="w-full h-full object-contain bg-black rounded-[28px] sm:rounded-[36px]"
            />
          ) : (
            <img
              src={project.image}
              alt={`${project.name} preview`}
              className="w-full h-full object-cover rounded-[28px] sm:rounded-[36px] group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
          )}
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="relative w-full bg-white text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-20 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 shadow-2xl"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20 md:mb-28">
          <h2
            className="font-black uppercase leading-none tracking-tight text-[#0C0C0C] text-center select-none"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Projects
          </h2>
          <p className="text-[#0C0C0C]/70 font-bold text-xs sm:text-sm md:text-base uppercase tracking-widest mt-4">
            Academic, Client & Open-Source Software
          </p>
        </FadeIn>

        {/* Stacked Sticky Project Cards */}
        <div className="w-full relative">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              totalCards={PROJECTS.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
