import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { Mic, MicOff, X, Loader2, Sparkles, Headphones } from 'lucide-react';
import { useVoice } from '../context/VoiceContext';

const FloatingVoiceBot: React.FC = () => {
  const { isActive, isConnecting, volume, toggleVoiceCall, isAssistantSpeaking } = useVoice();
  const [showTooltip, setShowTooltip] = useState(true);
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set initial state
    setIsVisible(window.scrollY > 400);

    const unsubscribe = scrollY.on("change", (latest) => {
      // Show when hero starts to scroll out of view
      setIsVisible(latest > 400);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <AnimatePresence>
      {(isVisible || isActive) && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.8 }}
          className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end pointer-events-none"
        >
          {/* Tooltip - gorgeous glassmorphism bubble */}
          <AnimatePresence>
            {showTooltip && !isActive && !isConnecting && (
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.9 }}
                className="mb-4 mr-2 relative pointer-events-auto"
              >
                <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 shadow-2xl rounded-2xl p-4 pr-10 max-w-[200px]">
                  <div className="flex items-center gap-2 mb-1">
                    <Headphones size={12} className="text-brand-600" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-600">AI Support</span>
                  </div>
                  <p className="text-xs font-bold text-slate-700 dark:text-slate-200 leading-tight">
                    I'm around if you want to talk! <Sparkles size={12} className="inline ml-1 text-brand-600" />
                  </p>
                  <button 
                    onClick={() => setShowTooltip(false)}
                    className="absolute top-2 right-2 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                  >
                    <X size={14} />
                  </button>
                </div>
                {/* Arrow */}
                <div className="absolute -bottom-1 right-6 w-3 h-3 bg-white/80 dark:bg-slate-900/80 border-r border-b border-slate-200/50 dark:border-slate-800/50 rotate-45" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Button with Ring Animations */}
          <div className="relative group pointer-events-auto">
            {/* Ambient Breathing Glow */}
            <motion.div
              animate={{
                scale: isActive ? [1, 1.3, 1] : [1, 1.1, 1],
                opacity: isActive ? [0.2, 0.4, 0.2] : [0.05, 0.1, 0.05],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 bg-brand-600 rounded-full blur-xl -z-10"
            />

            <button
              onClick={toggleVoiceCall}
              disabled={isConnecting}
              className={`relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-500 shadow-2xl ${
                isActive 
                  ? 'bg-white dark:bg-slate-900 border-2 border-brand-600 scale-110' 
                  : 'bg-brand-600 hover:bg-brand-700 hover:scale-105 active:scale-95'
              }`}
            >
              {isConnecting ? (
                <Loader2 size={24} className="text-white animate-spin" />
              ) : isActive ? (
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-0.5 mb-1 h-3">
                    {[1, 2, 3, 4].map((i) => (
                      <motion.div
                        key={i}
                        animate={{ height: [4, 10 + volume * 20, 4] }}
                        transition={{ duration: 0.3, repeat: Infinity, delay: i * 0.1 }}
                        className={`w-1 rounded-full ${isAssistantSpeaking ? 'bg-brand-600' : 'bg-brand-400 opacity-60'}`}
                      />
                    ))}
                  </div>
                  <MicOff size={14} className="text-brand-600" strokeWidth={3} />
                </div>
              ) : (
                <Mic size={28} className="text-white" />
              )}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingVoiceBot;