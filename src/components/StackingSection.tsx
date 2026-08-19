import React from 'react';
import { motion } from 'framer-motion';

interface StackingSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  index?: number;
}

export const StackingSection: React.FC<StackingSectionProps> = ({
  children,
  id,
  className = '',
  index = 0,
}) => {
  return (
    <div
      id={id}
      className={`relative w-full ${className}`}
      style={{
        zIndex: index + 1,
      }}
    >
      <motion.div
        initial={{ opacity: 0.9, y: 30, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-50px', amount: 0.05 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="w-full will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
};
