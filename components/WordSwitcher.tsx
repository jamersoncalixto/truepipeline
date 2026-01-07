import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface WordSwitcherProps {
  words: string[];
  className?: string;
}

const WordSwitcher: React.FC<WordSwitcherProps> = ({ words, className = "" }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Keep the fast rotation speed
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 1800); 
    return () => clearInterval(timer);
  }, [words.length]);

  return (
    <span className={`inline-grid grid-cols-1 grid-rows-1 h-[1.2em] overflow-visible relative ${className}`}>
      <AnimatePresence mode="popLayout">
        <motion.span
          key={words[index]}
          initial={{ 
            opacity: 0, 
            x: -2,
            textShadow: "2px 0 #ff00c1, -2px 0 #00fff9",
            filter: "brightness(2)"
          }}
          animate={{ 
            opacity: [0, 1, 0.8, 1],
            x: [5, -5, 3, -3, 0],
            textShadow: [
              "2px 0 #ff00c1, -2px 0 #00fff9",
              "-2px 0 #ff00c1, 2px 0 #00fff9",
              "1px 0 #ff00c1, -1px 0 #00fff9",
              "0px 0 #ff00c1, 0px 0 #00fff9"
            ],
            filter: "brightness(1)"
          }}
          exit={{ 
            opacity: 0,
            x: [0, -10, 10],
            textShadow: "4px 0 #ff00c1, -4px 0 #00fff9",
            filter: "brightness(2) blur(2px)",
          }}
          transition={{ 
            duration: 0.3, 
            ease: "easeInOut",
            times: [0, 0.2, 0.4, 0.6, 1]
          }}
          className="text-brand-600 col-start-1 row-start-1 block whitespace-nowrap font-black"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default WordSwitcher;