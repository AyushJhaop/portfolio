import { useEffect, useState, useMemo, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';

export interface FlipFadeTextProps {
  /**
   * Array of words or single text to display
   * @default ["HI, I'M AYUSH"]
   */
  words?: string[];
  /**
   * Interval between word changes in milliseconds (if multiple words)
   * @default 2500
   */
  interval?: number;
  /**
   * Additional CSS classes for the container
   */
  className?: string;
  /**
   * Additional CSS classes for the text
   */
  textClassName?: string;
  /**
   * Animation duration for each letter in seconds
   * @default 0.7
   */
  letterDuration?: number;
  /**
   * Stagger delay between letters on enter in seconds
   * @default 0.05
   */
  staggerDelay?: number;
  /**
   * Stagger delay between letters on exit in seconds
   * @default 0.04
   */
  exitStaggerDelay?: number;
}

const defaultWords = ["HI, I'M AYUSH"];

// Letter component with 3D Flip, Fade, and Blur
const Letter = memo(function Letter({
  char,
  letterDuration,
}: {
  char: string;
  letterDuration: number;
}) {
  if (char === ' ') {
    return <span className="inline-block w-[0.28em]">&nbsp;</span>;
  }

  return (
    <motion.span
      style={{
        display: 'inline-block',
        transformStyle: 'preserve-3d',
        willChange: 'transform, opacity, filter',
      }}
      variants={{
        initial: {
          rotateX: 90,
          y: 25,
          opacity: 0,
          filter: 'blur(10px)',
        },
        animate: {
          rotateX: 0,
          y: 0,
          opacity: 1,
          filter: 'blur(0px)',
          transition: {
            duration: letterDuration,
            ease: [0.2, 0.65, 0.3, 0.9],
          },
        },
        exit: {
          rotateX: -90,
          y: -25,
          opacity: 0,
          filter: 'blur(10px)',
          transition: {
            duration: letterDuration * 0.67,
            ease: 'easeIn',
          },
        },
      }}
      className="hero-heading inline-block"
    >
      {char}
    </motion.span>
  );
});

// Word component with letter staggering
const Word = memo(function Word({
  text,
  staggerDelay,
  exitStaggerDelay,
  letterDuration,
  textClassName,
}: {
  text: string;
  staggerDelay: number;
  exitStaggerDelay: number;
  letterDuration: number;
  textClassName?: string;
}) {
  const letters = useMemo(() => text.split(''), [text]);

  return (
    <motion.div
      className={cn(
        'flex items-center justify-center tracking-tight leading-none uppercase font-black select-none whitespace-nowrap',
        textClassName
      )}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={{
        initial: { opacity: 1 },
        animate: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.15,
          },
        },
        exit: {
          opacity: 1,
          transition: {
            staggerChildren: exitStaggerDelay,
          },
        },
      }}
    >
      {letters.map((char, i) => (
        <Letter
          key={`${char}-${i}`}
          char={char}
          letterDuration={letterDuration}
        />
      ))}
    </motion.div>
  );
});

export function FlipFadeText({
  words = defaultWords,
  interval = 2500,
  className,
  textClassName,
  letterDuration = 0.75,
  staggerDelay = 0.045,
  exitStaggerDelay = 0.04,
}: FlipFadeTextProps) {
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const updateIndex = useCallback(() => {
    if (words.length > 1) {
      setIndex((prev) => (prev + 1) % words.length);
    }
  }, [words.length]);

  useEffect(() => {
    if (words.length <= 1) return;
    const timer = setInterval(updateIndex, interval);
    return () => clearInterval(timer);
  }, [updateIndex, interval, words.length]);

  const currentWord = useMemo(() => words[index] || words[0], [words, index]);

  if (!mounted) {
    return (
      <div className={cn('flex items-center justify-center w-full', className)}>
        <h1 className={cn('hero-heading uppercase font-black tracking-tight leading-none whitespace-nowrap opacity-0', textClassName)}>
          {currentWord}
        </h1>
      </div>
    );
  }

  return (
    <div className={cn('flex items-center justify-center w-full', className)}>
      <div
        className="relative flex items-center justify-center w-full"
        style={{ perspective: '1200px' }}
      >
        <AnimatePresence mode="wait">
          <Word
            key={currentWord}
            text={currentWord}
            staggerDelay={staggerDelay}
            exitStaggerDelay={exitStaggerDelay}
            letterDuration={letterDuration}
            textClassName={textClassName}
          />
        </AnimatePresence>
      </div>
    </div>
  );
}

export default FlipFadeText;
