import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, Briefcase, GraduationCap, Award, Code2, Mail, MapPin, Globe, FileText, Eye } from 'lucide-react';
import resumePdf from '../assets/Ayush_resume.pdf';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'pdf' | 'overview'>('pdf');

  const targetEmail = 'ayushop645@gmail.com';
  const githubUrl = 'https://github.com/AyushJhaop';
  const linkedinUrl = 'https://www.linkedin.com/in/ayush-jha-63b657319/';

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-4xl max-h-[92vh] bg-[#121214] border border-[#D7E2EA]/20 rounded-[28px] sm:rounded-[36px] shadow-2xl overflow-hidden flex flex-col z-10 my-auto"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 sm:px-8 py-4 border-b border-[#D7E2EA]/10 bg-[#161618] flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <h3 className="text-base sm:text-xl font-bold uppercase tracking-wider text-[#D7E2EA]">
                  Curriculum Vitae
                </h3>
              </div>

              {/* View Switcher Tabs */}
              <div className="flex items-center bg-[#202024] p-1 rounded-full border border-[#D7E2EA]/10">
                <button
                  onClick={() => setActiveTab('pdf')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                    activeTab === 'pdf'
                      ? 'bg-[#D7E2EA] text-[#0C0C0C] shadow'
                      : 'text-[#D7E2EA]/70 hover:text-white'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>PDF View</span>
                </button>
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                    activeTab === 'overview'
                      ? 'bg-[#D7E2EA] text-[#0C0C0C] shadow'
                      : 'text-[#D7E2EA]/70 hover:text-white'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Overview</span>
                </button>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={resumePdf}
                  download="Ayush_Jha_Resume.pdf"
                  className="flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-[#0C0C0C] font-bold text-xs uppercase tracking-wider rounded-full transition-all cursor-pointer shadow-lg"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full bg-[#202024] text-[#D7E2EA]/70 hover:text-white hover:bg-[#2c2c32] transition-colors cursor-pointer"
                  title="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Resume Content Body */}
            <div className="overflow-y-auto p-5 sm:p-8 space-y-6 text-[#D7E2EA] flex-1">
              {activeTab === 'pdf' ? (
                <div className="w-full flex flex-col items-center">
                  <div className="w-full h-[60vh] sm:h-[65vh] rounded-2xl overflow-hidden border border-[#D7E2EA]/15 bg-[#1a1a1e] relative">
                    <object
                      data={resumePdf}
                      type="application/pdf"
                      className="w-full h-full"
                    >
                      <div className="flex flex-col items-center justify-center h-full p-6 text-center space-y-4">
                        <FileText className="w-12 h-12 text-emerald-400 mb-2" />
                        <p className="text-base text-white font-medium">
                          Resume PDF Ready for Preview & Download
                        </p>
                        <p className="text-xs text-[#D7E2EA]/70 max-w-md">
                          Your browser may not support embedding inline PDFs. Click below to download or view the document directly.
                        </p>
                        <a
                          href={resumePdf}
                          download="Ayush_Jha_Resume.pdf"
                          className="px-6 py-3 bg-emerald-500 text-[#0C0C0C] rounded-full font-bold uppercase tracking-wider text-xs flex items-center gap-2 shadow-lg"
                        >
                          <Download className="w-4 h-4" />
                          <span>Download Ayush_Jha_Resume.pdf</span>
                        </a>
                      </div>
                    </object>
                  </div>
                </div>
              ) : (
                <>
                  {/* Header Info */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-[#D7E2EA]/10">
                    <div>
                      <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
                        Ayush Jha
                      </h1>
                      <p className="text-sm sm:text-base text-[#D7E2EA]/80 font-medium mt-1">
                        Full-Stack Developer & AI Automation Engineer
                      </p>
                    </div>

                    <div className="text-xs sm:text-sm text-[#D7E2EA]/70 space-y-1">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-emerald-400" />
                        <span className="font-mono">{targetEmail}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-emerald-400" />
                        <span>India / Global Remote</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-purple-400" />
                        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="hover:underline font-mono text-xs">
                          github.com/AyushJhaop
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Career Objective */}
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 font-bold mb-2 flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-[#D7E2EA]" />
                      Career Objective
                    </h4>
                    <p className="text-sm sm:text-base text-[#D7E2EA]/90 leading-relaxed font-light bg-[#18181c] p-4 sm:p-5 rounded-2xl border border-[#D7E2EA]/10">
                      Full-Stack Developer and AI Automation Engineer dedicated to building high-performance web applications and intelligent workflows using React, Next.js, Node.js, Python, and modern AI pipelines.
                    </p>
                  </div>

                  {/* Technical Skills Summary */}
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 font-bold mb-3 flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-[#D7E2EA]" />
                      Technical Competencies
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
                      <div className="bg-[#18181c] p-4 rounded-2xl border border-[#D7E2EA]/10">
                        <span className="font-semibold text-white block mb-1">Languages:</span>
                        <span className="text-[#D7E2EA]/70">TypeScript, JavaScript (ES6+), Python, C++, SQL, HTML5/CSS3</span>
                      </div>
                      <div className="bg-[#18181c] p-4 rounded-2xl border border-[#D7E2EA]/10">
                        <span className="font-semibold text-white block mb-1">Frontend:</span>
                        <span className="text-[#D7E2EA]/70">React.js, Next.js 15, Tailwind CSS, Three.js, GSAP, Framer Motion</span>
                      </div>
                      <div className="bg-[#18181c] p-4 rounded-2xl border border-[#D7E2EA]/10">
                        <span className="font-semibold text-white block mb-1">Backend & Cloud:</span>
                        <span className="text-[#D7E2EA]/70">Node.js, Express.js, FastAPI, Docker, AWS, Vercel, REST & GraphQL</span>
                      </div>
                      <div className="bg-[#18181c] p-4 rounded-2xl border border-[#D7E2EA]/10">
                        <span className="font-semibold text-white block mb-1">AI & Databases:</span>
                        <span className="text-[#D7E2EA]/70">n8n, OpenAI APIs, Claude, PostgreSQL, MongoDB, Prisma, Redis</span>
                      </div>
                    </div>
                  </div>

                  {/* Experience / Featured Projects */}
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 font-bold mb-3 flex items-center gap-2">
                      <Award className="w-4 h-4 text-[#D7E2EA]" />
                      Key Projects & Experience
                    </h4>
                    <div className="space-y-4">
                      <div className="bg-[#18181c] p-5 rounded-2xl border border-[#D7E2EA]/10">
                        <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
                          <h5 className="font-bold text-white text-base">Suukr Digital Platform</h5>
                          <span className="text-xs text-[#D7E2EA]/60">2026 – Present</span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#D7E2EA]/70 mb-2">
                          Architected full-stack gourmet brand digital platform with responsive ordering workflows, store location discovery, and clean web architecture.
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {['React', 'TypeScript', 'Tailwind', 'Vite', 'UI/UX'].map((t) => (
                            <span key={t} className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#222228] text-[#D7E2EA]/80">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="bg-[#18181c] p-5 rounded-2xl border border-[#D7E2EA]/10">
                        <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
                          <h5 className="font-bold text-white text-base">E.V AI Voice Assistant</h5>
                          <span className="text-xs text-[#D7E2EA]/60">2025 – Present</span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#D7E2EA]/70 mb-2">
                          Engineered an AI-powered voice assistant utilizing automation, web search, and AI agents to understand natural voice commands and execute complex workflows.
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {['Python', 'Voice AI', 'Web Search', 'AI Agents', 'Automation'].map((t) => (
                            <span key={t} className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#222228] text-[#D7E2EA]/80">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Education */}
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 font-bold mb-3 flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-[#D7E2EA]" />
                      Education
                    </h4>
                    <div className="bg-[#18181c] p-4 rounded-2xl border border-[#D7E2EA]/10">
                      <h5 className="font-bold text-white text-sm">Bachelor of Technology (B.Tech)</h5>
                      <p className="text-xs text-[#D7E2EA]/80 font-medium mt-0.5">Computer Science & Engineering</p>
                      <p className="text-xs text-[#D7E2EA]/60 mt-1">Focus: Distributed Systems, Data Structures, Algorithms & Machine Learning</p>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-6 sm:px-8 py-4 bg-[#161618] border-t border-[#D7E2EA]/10 flex justify-between items-center flex-wrap gap-3">
              <span className="text-xs text-[#D7E2EA]/50 font-light">
                Ayush_Jha_Resume.pdf • Updated 2026
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={resumePdf}
                  download="Ayush_Jha_Resume.pdf"
                  className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download File</span>
                </a>
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#D7E2EA] hover:text-white transition-colors"
                >
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
