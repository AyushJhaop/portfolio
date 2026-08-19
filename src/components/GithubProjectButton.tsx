import React from 'react';
import { motion } from 'framer-motion';
import { GithubIcon } from './Icons';

interface GithubProjectButtonProps {
  repoUrl?: string;
  className?: string;
  label?: string;
}

export const GithubProjectButton: React.FC<GithubProjectButtonProps> = ({
  repoUrl = 'https://github.com',
  className = '',
  label = 'Source Code',
}) => {
  return (
    <motion.a
      href={repoUrl}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#18181c] border border-[#D7E2EA]/20 hover:border-[#D7E2EA] text-[#D7E2EA] hover:text-white transition-all text-xs font-semibold uppercase tracking-wider cursor-pointer shadow-md ${className}`}
      title="View GitHub Repository"
    >
      <GithubIcon className="w-3.5 h-3.5" />
      <span>{label}</span>
    </motion.a>
  );
};
