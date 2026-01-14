import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, User, CheckCircle2, TrendingUp, Sparkles, ArrowUp } from 'lucide-react';

import { useLanguage } from '../context/LanguageContext';

const CRMCard: React.FC<{ name: string; value: string; delay: number; left: string; duration?: number; isMobile?: boolean; t: (key: string) => string }> = ({ name, value, delay, left, duration = 12, isMobile = false, t }) => (
  <motion.div
    initial={{ opacity: 0, y: "0%", scale: 0.95 }}
    animate={{
      opacity: [0, 0.8, 0.8, 0],
      y: ["0%", "-300%"],
      scale: [0.95, 1, 1, 1.05]
    }}
    transition={{
      duration: duration,
      repeat: Infinity,
      delay: delay,
      ease: "linear"
    }}
    className={`absolute bg-white/15 backdrop-blur-lg border border-white/30 p-3 sm:p-4 rounded-2xl w-40 sm:w-48 shadow-2xl pointer-events-none ${isMobile ? 'block sm:hidden' : 'hidden sm:block'}`}
    style={{ left, top: '60%' }}
  >
    <div className="flex items-center gap-2 sm:gap-3 mb-2">
      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/30 flex items-center justify-center">
        <User size={12} className="text-white" />
      </div>
      <div className="flex flex-col">
        <span className="text-[8px] sm:text-[10px] font-black text-white/80 uppercase tracking-widest">{t('cta.card.opportunity')}</span>
        <span className="text-[10px] sm:text-xs font-bold text-white truncate">{name}</span>
      </div>
    </div>
    <div className="flex items-center justify-between pt-2 border-t border-white/20">
      <div className="flex items-center text-green-300 font-black text-[10px] sm:text-xs">
        <DollarSign size={10} />
        <span>{value}</span>
      </div>
      <div className="flex items-center gap-1">
        <TrendingUp size={10} className="text-brand-200" />
        <CheckCircle2 size={12} className="text-white/60" />
      </div>
    </div>
  </motion.div>
);

const TrialCTA: React.FC = () => {
  const { t } = useLanguage();

  const handleScrollToPricing = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.querySelector('#pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Reduced count for better performance/optimization
  const desktopOpportunities = [
    { name: "Sarah Miller", value: "1,200", left: "5%", delay: 0, duration: 15 },
    { name: "Acme Corp", value: "5,450", left: "22%", delay: 5, duration: 18 },
    { name: "Global Tech", value: "38%", left: "38%", delay: 2, duration: 14 },
    { name: "Design Co", value: "850", left: "55%", delay: 8, duration: 16 },
    { name: "Retail Solutions", value: "9,800", left: "72%", delay: 10, duration: 20 },
    { name: "Skyline Org", value: "11,200", left: "88%", delay: 4, duration: 16 },
    { name: "Growth Labs", value: "3,300", left: "15%", delay: 12, duration: 15 },
  ];

  const mobileOpportunities = [
    { name: "Sarah Miller", value: "1,200", left: "10%", delay: 0, duration: 14 },
    { name: "Global Tech", value: "3,100", left: "60%", delay: 4, duration: 16 },
  ];

  return (
    <section id="trial" className="py-20 relative overflow-hidden">
      {/* Background with Animated CRM Visuals */}
      <div className="absolute inset-0 bg-brand-600 dark:bg-brand-950">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-600 via-brand-700 to-sky-600 opacity-95"></div>

        {/* Floating CRM Cards Visual */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-60">
          {/* Desktop Cards */}
          {desktopOpportunities.map((opp, idx) => (
            <CRMCard
              key={`desk-${idx}`}
              name={opp.name}
              value={opp.value}
              left={opp.left}
              delay={opp.delay}
              duration={opp.duration}
              t={t}
            />
          ))}
          {/* Mobile Cards (Reduced Count) */}
          {mobileOpportunities.map((opp, idx) => (
            <CRMCard
              key={`mob-${idx}`}
              name={opp.name}
              value={opp.value}
              left={opp.left}
              delay={opp.delay}
              duration={opp.duration}
              isMobile={true}
              t={t}
            />
          ))}
        </div>

        {/* Extra atmospheric particles */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <motion.div
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white rounded-full blur-[120px]"
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="mb-8 flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.2em]">
            <Sparkles size={12} /> {t('cta.badge')}
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-8">
            {t('cta.title.prefix')} <span className="text-brand-100">{t('cta.title.highlight')}</span>
          </h2>
          <p className="text-lg sm:text-xl text-brand-50 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            {t('cta.subtitle')}
          </p>

          <div className="flex flex-col items-center justify-center">
            <button
              onClick={handleScrollToPricing}
              className="group px-10 sm:px-12 py-5 bg-white text-brand-600 font-black rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] hover:bg-brand-50 transform hover:-translate-y-1 active:scale-95 transition-all text-base sm:text-lg uppercase tracking-widest flex items-center gap-3"
            >
              {t('cta.button')}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowUp size={20} strokeWidth={3} />
              </motion.div>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrialCTA;