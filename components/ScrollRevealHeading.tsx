import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrollRevealHeadingProps {
  children: string;
  className?: string;
  highlightWords?: string[];
}

const ScrollRevealHeading: React.FC<ScrollRevealHeadingProps> = ({ children, className = "", highlightWords = [] }) => {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0.2"],
  });

  const words = children.split(" ");

  return (
    <h2 ref={containerRef} className={`relative flex flex-wrap justify-center gap-x-[0.25em] ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        
        return (
          <Word 
            key={i} 
            progress={scrollYProgress} 
            range={[start, end]}
            isHighlighted={highlightWords.some(hw => word.toLowerCase().includes(hw.toLowerCase()))}
          >
            {word}
          </Word>
        );
      })}
    </h2>
  );
};

const Word = ({ children, progress, range, isHighlighted }: any) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const color = useTransform(
    progress, 
    range, 
    ["#cbd5e1", isHighlighted ? "#2563eb" : "#0f172a"]
  );

  return (
    <motion.span 
      style={{ opacity, color }} 
      className="inline-block"
    >
      {children}
    </motion.span>
  );
};

export default ScrollRevealHeading;