import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';
import { CheckCircle, ExternalLink, ShieldCheck, Calendar, Key } from 'lucide-react';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  verifyUrl: string;
  icon: string;
  skills: string[];
  description: string;
  color: string;
}

const CERTIFICATIONS: Certification[] = [
  {
    id: '01',
    title: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services (AWS)',
    date: '2025',
    credentialId: 'AWS-SAA-8392019',
    verifyUrl: 'https://aws.amazon.com/verification',
    icon: '☁️',
    skills: ['Cloud Architecture', 'S3 / EC2 / Lambda', 'VPC & Security', 'Cost Optimization'],
    description:
      'Comprehensive validation of distributed architecture design, multi-tier cloud applications, and high-availability systems on AWS.',
    color: 'from-amber-500/20 via-orange-500/10 to-transparent',
  },
  {
    id: '02',
    title: 'Meta Certified Front-End Developer Specialization',
    issuer: 'Meta / Coursera',
    date: '2025',
    credentialId: 'META-FE-593021',
    verifyUrl: 'https://www.coursera.org/verify/professional-cert',
    icon: '⚛️',
    skills: ['React.js Advanced', 'UI/UX Architecture', 'State Management', 'Testing & CI'],
    description:
      'Rigorous curriculum covering deep modern React patterns, accessibility (a11y), responsive UI/UX principles, and automated frontend testing.',
    color: 'from-blue-500/20 via-cyan-500/10 to-transparent',
  },
  {
    id: '03',
    title: 'Generative AI & LLM Systems Specialization',
    issuer: 'DeepLearning.AI',
    date: '2024',
    credentialId: 'DLAI-GENAI-19402',
    verifyUrl: 'https://deeplearning.ai',
    icon: '🧠',
    skills: ['RAG Pipelines', 'Vector Databases', 'Prompt Engineering', 'LangChain'],
    description:
      'Mastery in deploying large language model pipelines, semantic vector retrieval, transformer architectures, and multi-agent systems.',
    color: 'from-purple-500/20 via-pink-500/10 to-transparent',
  },
  {
    id: '04',
    title: 'Google Cloud Certified – Cloud Associate Engineer',
    issuer: 'Google Cloud Platform (GCP)',
    date: '2024',
    credentialId: 'GCP-ACE-772910',
    verifyUrl: 'https://cloud.google.com/certification',
    icon: '🌐',
    skills: ['Kubernetes & GKE', 'Cloud Run', 'IAM Security', 'Cloud SQL'],
    description:
      'Proficiency in deploying cloud microservices, managing containerized applications on Kubernetes, and configuring secure enterprise networks.',
    color: 'from-emerald-500/20 via-teal-500/10 to-transparent',
  },
];

export const CertificationsSection: React.FC = () => {
  return (
    <section
      id="certifications"
      className="relative w-full bg-[#0C0C0C] text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-20 px-4 sm:px-8 md:px-12 py-20 sm:py-24 md:py-32 border-t border-[#D7E2EA]/15 shadow-2xl overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute bottom-10 left-1/4 w-[500px] h-[350px] bg-gradient-to-tr from-amber-500/10 via-purple-500/10 to-transparent rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#18181c] border border-[#D7E2EA]/15 text-xs uppercase tracking-widest text-[#D7E2EA]/70 mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Validated Industry Credentials</span>
          </div>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center select-none"
            style={{ fontSize: 'clamp(3rem, 11vw, 150px)' }}
          >
            Certifications
          </h2>
          <p className="text-[#D7E2EA]/60 font-light text-xs sm:text-sm md:text-base uppercase tracking-widest mt-4">
            Professional qualifications and technical specializations across cloud, AI, and full-stack engineering.
          </p>
        </FadeIn>

        {/* Certifications 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {CERTIFICATIONS.map((cert, index) => (
            <FadeIn key={cert.id} delay={index * 0.1} y={30} className="h-full">
              <motion.div
                whileHover={{ y: -6 }}
                className={`relative h-full bg-gradient-to-br ${cert.color} bg-[#141416]/95 border border-[#D7E2EA]/15 hover:border-[#D7E2EA]/40 rounded-[32px] p-6 sm:p-8 flex flex-col justify-between shadow-xl backdrop-blur-md overflow-hidden transition-all duration-300 group`}
              >
                <div>
                  {/* Top Bar: Icon, Issuer & Verified Badge */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#1c1c22] border border-[#D7E2EA]/15 flex items-center justify-center text-2xl shadow-inner group-hover:scale-110 transition-transform">
                        {cert.icon}
                      </div>
                      <div>
                        <span className="text-xs uppercase tracking-widest text-cyan-400 font-mono font-semibold block">
                          {cert.issuer}
                        </span>
                        <div className="flex items-center gap-2 text-xs text-[#D7E2EA]/60 font-mono mt-0.5">
                          <Calendar className="w-3 h-3" />
                          <span>{cert.date}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-mono uppercase tracking-wider">
                      <CheckCircle className="w-3 h-3" />
                      <span>Verified</span>
                    </div>
                  </div>

                  {/* Certification Title */}
                  <h3 className="text-lg sm:text-xl font-bold uppercase text-white tracking-wide mb-3 group-hover:text-cyan-200 transition-colors">
                    {cert.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#D7E2EA]/75 font-light leading-relaxed mb-6">
                    {cert.description}
                  </p>
                </div>

                <div>
                  {/* Skills Acquired */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] px-3 py-1 rounded-full bg-[#1e1e24] text-[#D7E2EA]/90 font-mono border border-[#D7E2EA]/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Footer: Credential ID & Verify Link */}
                  <div className="pt-4 border-t border-[#D7E2EA]/10 flex items-center justify-between flex-wrap gap-2 text-xs font-mono">
                    <div className="flex items-center gap-1.5 text-[#D7E2EA]/50">
                      <Key className="w-3.5 h-3.5 text-cyan-400" />
                      <span>ID: {cert.credentialId}</span>
                    </div>

                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-400 hover:text-white transition-colors"
                    >
                      <span>Verify</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
