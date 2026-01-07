import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Zap, Users, BarChart3, Mail } from 'lucide-react';

const cards = [
  {
    title: "Consolidation",
    subtitle: "Everything in one place",
    description: "Stop juggling 15 different logins. True Pipeline replaces your CRM, email marketing, funnel builder, and more.",
    icon: Layers,
    color: "bg-brand-600",
    visual: (
      <div className="flex flex-col items-center justify-center h-full gap-4">
        <div className="flex -space-x-4">
           {[1,2,3,4,5].map(i => (
             <div 
               key={i}
               className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center text-[10px] font-bold text-slate-400 relative"
               style={{ zIndex: 5 - i }}
             >
               Tool
             </div>
           ))}
        </div>
        <div className="h-8 w-px bg-slate-200 dark:bg-slate-700"></div>
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.5 }}
          className="w-16 h-16 rounded-2xl bg-slate-900 dark:bg-white flex items-center justify-center text-white dark:text-slate-900 shadow-xl"
        >
          <Zap size={32} fill="currentColor" />
        </motion.div>
      </div>
    )
  },
  {
    title: "Lead Capture",
    subtitle: "Automated omni-channel intake",
    description: "Our unified inbox captures leads from Facebook, Instagram, SMS, Email, and GMB instantly.",
    icon: Users,
    color: "bg-brand-600",
    visual: (
      <div className="w-full h-full p-4 flex flex-col justify-center gap-3">
         {[1, 2, 3].map((i) => (
           <motion.div
             key={i}
             initial={{ x: 50, opacity: 0 }}
             whileInView={{ x: 0, opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: i * 0.1, duration: 0.4 }}
             className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700"
           >
             <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-[10px] font-bold ${i === 1 ? 'bg-blue-500' : i === 2 ? 'bg-sky-500' : 'bg-indigo-500'}`}>
               {i === 1 ? 'FB' : i === 2 ? 'IG' : 'SMS'}
             </div>
             <div className="h-1.5 w-24 bg-slate-100 dark:bg-slate-700 rounded-full"></div>
             <div className="ml-auto text-[10px] text-green-500 font-bold px-2 py-0.5 bg-green-50 dark:bg-green-900/30 rounded-full">LIVE</div>
           </motion.div>
         ))}
      </div>
    )
  },
  {
    title: "AI Nurturing",
    subtitle: "Intelligent agent assistants",
    description: "Our AI agents engage in human-like conversations to book appointments on your calendar automatically.",
    icon: Mail,
    color: "bg-brand-600",
    visual: (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="z-10 bg-white dark:bg-slate-800 p-5 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-2xl max-w-[220px]">
           <div className="flex gap-1.5 mb-4">
             <div className="w-2 h-2 rounded-full bg-slate-200"></div>
             <div className="w-2 h-2 rounded-full bg-slate-200"></div>
           </div>
           <div className="space-y-3">
             <div className="bg-slate-50 dark:bg-slate-900/50 p-2.5 rounded-2xl rounded-tl-none text-[11px] text-slate-600 dark:text-slate-300">
               Hi! Ready to book your demo?
             </div>
             <div className="bg-brand-600 p-2.5 rounded-2xl rounded-tr-none text-[11px] text-right text-white">
               Absolutely, Tuesday at 2?
             </div>
           </div>
        </div>
      </div>
    )
  }
];

const ComparisonSection: React.FC = () => {
  return (
    <section className="py-32 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-24 text-center max-w-3xl mx-auto">
          <h2 className="text-brand-600 font-bold tracking-wider uppercase text-xs mb-4">
            Comparison
          </h2>
          <p className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
             Experience the <span className="text-slate-400 font-normal italic">Future of Business</span>
          </p>
        </div>

        <div className="relative pb-24">
          {cards.map((card, index) => (
            <Card key={index} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Card: React.FC<{ card: any; index: number }> = ({ card, index }) => {
  return (
    <div 
      className="sticky w-full max-w-5xl mx-auto mb-32 last:mb-0"
      style={{ 
        top: `calc(120px + ${index * 30}px)`, 
        zIndex: index + 10 
      }}
    >
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-[40px] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col md:flex-row h-[500px] md:h-[450px]">
        
        {/* Content Side */}
        <div className="flex-1 p-10 md:p-16 flex flex-col justify-center">
           <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-900/20 flex items-center justify-center mb-8 border border-brand-100 dark:border-brand-800/50">
             <card.icon className="w-5 h-5 text-brand-600" />
           </div>
           <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">{card.title}</h3>
           <h4 className="text-sm font-semibold text-brand-600 mb-6 uppercase tracking-widest">{card.subtitle}</h4>
           <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-lg font-medium">
             {card.description}
           </p>
        </div>

        {/* Visual Side */}
        <div className="flex-1 bg-slate-50/50 dark:bg-slate-800/30 p-10 flex items-center justify-center border-t md:border-t-0 md:border-l border-slate-100 dark:border-slate-800 relative">
            <div className="w-full h-full relative z-10">
               {card.visual}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonSection;