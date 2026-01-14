import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, AnimatePresence } from 'framer-motion';
import {
  Zap,
  MessageSquare,
  Calendar,
  Database,
  Mail,
  BarChart3,
  Globe,
  Shield,
  Bot,
  Mic,
  PhoneCall,
  PhoneForwarded
} from 'lucide-react';

import { useLanguage } from '../context/LanguageContext';

const getCarouselFeatures = (t: (key: string) => string) => [
  { icon: Database, text: t('carousel.unifiedCRM') },
  { icon: Calendar, text: t('carousel.smartScheduling') },
  { icon: Mail, text: t('carousel.emailAutomation') },
  { icon: BarChart3, text: t('carousel.realtimeAnalytics') },
  { icon: Bot, text: t('carousel.aiAgents') },
  { icon: Mic, text: t('carousel.voiceAI') },
  { icon: PhoneCall, text: t('carousel.aiOutbound') },
  { icon: PhoneForwarded, text: t('carousel.aiInbound') },
  { icon: Zap, text: t('carousel.aiBooking') },
  { icon: MessageSquare, text: t('carousel.omniSMS') },
  { icon: Globe, text: t('carousel.salesFunnels') },
  { icon: Shield, text: t('carousel.securePipelines') },
];

const FeatureCard: React.FC<{ icon: any, text: string, x: any }> = ({ icon: Icon, text, x }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [highlight, setHighlight] = useState(0);

  useEffect(() => {
    const unsubscribe = x.on("change", () => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const centerOfScreen = window.innerWidth / 2;
        const centerOfCard = rect.left + rect.width / 2;
        const distance = Math.abs(centerOfScreen - centerOfCard);

        // Adjust threshold to control how many cards look "active" at once
        const threshold = 350;
        if (distance < threshold) {
          const intensity = 1 - (distance / threshold);
          setHighlight(Math.pow(intensity, 2));
        } else {
          setHighlight(0);
        }
      }
    });
    return () => unsubscribe();
  }, [x]);

  return (
    <div className="relative flex-shrink-0 flex items-center justify-center py-6 px-6">

      {/* Connecting line - solid and visible */}
      <div className="absolute top-1/2 left-[-100px] right-[-100px] h-[1.5px] bg-slate-200 dark:bg-slate-800 -translate-y-1/2 z-0" />

      {/* Card - Solid with shadow and border like the reference */}
      <div
        ref={cardRef}
        className={`
          w-52 h-28
          flex flex-col items-center justify-center gap-3 px-4
          rounded-xl
          transition-all duration-500
          relative z-30
          bg-white dark:bg-slate-900
          border-[1.5px]
          ${highlight > 0.4
            ? 'border-brand-500 shadow-[0_10px_30px_-5px_rgba(37,99,235,0.2)]'
            : 'border-slate-100 dark:border-slate-800 shadow-sm'
          }
        `}
        style={{
          transform: `scale(${1 + highlight * 0.05})`,
        }}
      >
        {/* Subtle glow when highlighted */}
        <AnimatePresence>
          {highlight > 0.6 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 rounded-xl bg-brand-500/5 pointer-events-none"
            />
          )}
        </AnimatePresence>

        {/* Left node dot */}
        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 z-40">
          <div
            className={`w-2.5 h-2.5 rounded-full transition-all duration-500 border-2 border-white dark:border-slate-900 shadow-sm ${highlight > 0.4 ? 'bg-brand-600 scale-125' : 'bg-slate-300 dark:bg-slate-700'
              }`}
          />
        </div>

        {/* Content with distinct colors */}
        <div className={`transition-all duration-500 flex flex-col items-center gap-2`}>
          <div className={`${highlight > 0.4 ? 'text-brand-600' : 'text-slate-400'}`}>
            <Icon size={24} strokeWidth={highlight > 0.4 ? 2.5 : 2} />
          </div>

          <span className={`text-center text-[13px] font-bold tracking-tight transition-all duration-500 whitespace-nowrap ${highlight > 0.4 ? 'text-brand-600' : 'text-slate-500'
            }`}>
            {text}
          </span>
        </div>

        {/* Right node dot */}
        <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 z-40">
          <div
            className={`w-2.5 h-2.5 rounded-full transition-all duration-500 border-2 border-white dark:border-slate-900 shadow-sm ${highlight > 0.4 ? 'bg-brand-600 scale-125' : 'bg-slate-300 dark:bg-slate-700'
              }`}
          />
        </div>
      </div>
    </div>
  );
};

const FeatureCarousel: React.FC = () => {
  const x = useMotionValue(0);
  const { t } = useLanguage();
  const carouselFeatures = getCarouselFeatures(t);
  const itemWidth = 256; // Adjusted based on card width (52*4=208px) + padding/gap
  const loopWidth = carouselFeatures.length * itemWidth;

  return (
    <div className="w-full overflow-hidden py-2 relative bg-transparent">
      {/* Side masking for smooth fade into the flow */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-slate-950 to-transparent z-40" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-slate-950 to-transparent z-40" />

      <div className="relative flex items-center h-36">
        <motion.div
          className="flex items-center"
          animate={{ x: [0, -loopWidth] }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ x }}
        >
          {[...carouselFeatures, ...carouselFeatures, ...carouselFeatures].map((feature, i) => (
            <FeatureCard
              key={i}
              icon={feature.icon}
              text={feature.text}
              x={x}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FeatureCarousel;