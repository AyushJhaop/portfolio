import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  enableZoom?: boolean;
}

export const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  className = '',
  id,
  enableZoom = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Parallax Zoom effect: scale up smoothly as it enters, stays at 1 in center, scales down slightly as it leaves
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    enableZoom ? [0.94, 1, 1, 0.95] : [1, 1, 1, 1]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0.75, 1, 1, 0.75]
  );

  return (
    <div id={id} ref={containerRef} className="relative w-full">
      <motion.div
        style={{ scale, opacity }}
        className={`w-full will-change-transform ${className}`}
      >
        {children}
      </motion.div>
    </div>
  );
};
