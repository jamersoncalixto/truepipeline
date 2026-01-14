import React from 'react';
import { ArrowRight, CheckCircle2, Mic, Loader2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import DashboardPreview from './DashboardPreview';
import WordSwitcher from './WordSwitcher';
import AutomationWorkflowBackground from './AutomationWorkflowBackground';
import FeatureCarousel from './FeatureCarousel';
import VoiceVisualizer from './VoiceVisualizer';
import { useVoice } from '../context/VoiceContext';

import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { isActive, isConnecting, isAssistantSpeaking, volume, toggleVoiceCall } = useVoice();
  const { t } = useLanguage();

  const handleScrollToPricing = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.querySelector('#pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-white dark:bg-slate-950">
      {/* Dynamic Backgrounds */}
      <AnimatePresence mode="wait">
        {isActive ? (
          <VoiceVisualizer key="voice" volume={volume} isActive={isActive} />
        ) : (
          <AutomationWorkflowBackground key="workflow" />
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-4 sm:py-2 rounded-full bg-brand-50/50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 mb-4 border border-brand-100/50 dark:border-brand-800/50 animate-float shadow-sm backdrop-blur-sm">
            <span className="flex h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-brand-600 animate-pulse"></span>
            <span className="text-[9px] sm:text-[10px] font-bold tracking-wider sm:tracking-widest uppercase">{t('hero.badge')}</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.12]">
            {t('hero.title.prefix')} <br className="sm:hidden" />
            <WordSwitcher
              words={[t('hero.word.ai'), t('hero.word.unified'), t('hero.word.allInOne'), t('hero.word.automated')]}
              className="mx-0 sm:mx-2"
            /> <br className="hidden sm:block" />
            {t('hero.title.suffix')}
          </h1>

          <p className="mt-4 text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-medium transition-all duration-700">
            {isActive ? (
              <span className="text-brand-600 dark:text-brand-400 font-bold flex items-center justify-center gap-2">
                <Sparkles size={18} className="animate-pulse" />
                {isAssistantSpeaking ? "Assistant is speaking..." : "Listening to you..."}
              </span>
            ) : (
              t('hero.subtitle')
            )}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 w-full max-w-2xl">
            <button
              onClick={handleScrollToPricing}
              className="w-full sm:w-auto px-10 py-4 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-2xl shadow-xl shadow-brand-500/20 transform hover:-translate-y-1 transition-all text-lg flex items-center justify-center gap-2 z-20"
            >
              {t('hero.cta.start')} <ArrowRight size={20} />
            </button>

            <div className="relative w-full sm:w-auto group">
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 0.3, scale: 1.1 + volume * 0.8 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute inset-0 rounded-2xl bg-brand-600 blur-xl pointer-events-none"
                  />
                )}
              </AnimatePresence>

              <button
                onClick={toggleVoiceCall}
                disabled={isConnecting}
                className={`w-full sm:w-auto px-8 py-4 font-bold rounded-2xl border-2 transition-all flex items-center justify-center gap-3 text-lg relative z-20 ${isActive
                  ? 'bg-white dark:bg-slate-900 border-brand-600 text-brand-600 shadow-inner'
                  : 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-slate-200 dark:border-slate-700 hover:border-brand-500 dark:hover:border-brand-500 shadow-sm'
                  }`}
              >
                {isConnecting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    <span>{t('hero.cta.voice.connecting')}</span>
                  </>
                ) : isActive ? (
                  <>
                    <div className="flex items-center gap-1.5">
                      {[1, 2, 3].map((i) => (
                        <motion.div
                          key={i}
                          animate={{ height: [8, 16 + volume * 30, 8] }}
                          transition={{ duration: 0.4, repeat: Infinity, delay: i * 0.1 }}
                          className={`w-1 rounded-full ${isAssistantSpeaking ? 'bg-brand-600' : 'bg-brand-400 opacity-50'}`}
                        />
                      ))}
                    </div>
                    <span>{t('hero.cta.voice.end')}</span>
                  </>
                ) : (
                  <>
                    <Mic size={20} className="text-brand-600 group-hover:scale-110 transition-transform" />
                    <span>{t('hero.cta.voice.start')}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-slate-500 dark:text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em] mb-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-brand-600" /> {t('hero.trial')}
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-brand-600" /> {t('hero.cancel')}
            </div>
          </div>

          <FeatureCarousel />

          <div className="mt-20 w-full">
            <DashboardPreview />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;