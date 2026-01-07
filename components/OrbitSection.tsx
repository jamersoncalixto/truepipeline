import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Mail, MessageSquare, Calendar, Globe, Database, Slack, Chrome } from 'lucide-react';

const icons = [
  { Icon: MessageSquare, color: 'text-blue-500', label: 'Slack', delay: 0, radius: 160, speed: 20 },
  { Icon: Mail, color: 'text-orange-500', label: 'Hubspot', delay: 5, radius: 160, speed: 20 },
  { Icon: Calendar, color: 'text-green-500', label: 'Google', delay: 10, radius: 160, speed: 20 },
  { Icon: Globe, color: 'text-indigo-500', label: 'Intercom', delay: 15, radius: 160, speed: 20 },
  { Icon: Database, color: 'text-slate-500', label: 'Notion', delay: 2, radius: 240, speed: 30 },
  { Icon: Chrome, color: 'text-sky-500', label: 'GMB', delay: 12, radius: 240, speed: 30 },
  { Icon: Slack, color: 'text-purple-500', label: 'Slack', delay: 22, radius: 240, speed: 30 },
];

const OrbitIcon = ({ Icon, color, radius, speed, delay }: any) => {
  return (
    <motion.div
      className="absolute flex items-center justify-center"
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{
        duration: speed,
        repeat: Infinity,
        ease: "linear",
        delay: -delay
      }}
      style={{
        width: radius * 2,
        height: radius * 2,
      }}
    >
      <motion.div
        className="bg-white dark:bg-slate-900 shadow-xl border border-slate-100 dark:border-slate-800 rounded-2xl p-3 flex items-center justify-center absolute"
        style={{
          top: 0,
          left: '50%',
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{ rotate: -360 }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
          delay: -delay
        }}
      >
        <Icon className={`w-6 h-6 ${color}`} />
      </motion.div>
    </motion.div>
  );
};

const OrbitSection: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-white dark:bg-slate-950">
      {/* Curved Background Lines */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 dark:opacity-20">
         <div className="w-[320px] h-[320px] rounded-full border border-slate-200 dark:border-slate-800"></div>
         <div className="absolute w-[480px] h-[480px] rounded-full border border-slate-100 dark:border-slate-900"></div>
         <div className="absolute w-[640px] h-[640px] rounded-full border border-slate-50 dark:border-slate-950"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col items-center">
        <div className="text-center mb-16 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
            Integrates with all your <br />
            <span className="text-brand-600">favourite tools</span>
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400">
            True Pipeline automatically captures your activity across 100+ platforms, allowing you to focus on growth while we handle the data.
          </p>
          <div className="mt-8">
             <button className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-brand-500/20 transition-all hover:-translate-y-1">
               Explore Integrations
             </button>
          </div>
        </div>

        {/* Orbit Visualization */}
        <div className="relative w-full h-[500px] flex items-center justify-center mt-12">
           {/* Center Logo */}
           <motion.div 
             initial={{ scale: 0.9, opacity: 0 }}
             whileInView={{ scale: 1, opacity: 1 }}
             className="w-24 h-24 sm:w-32 sm:h-32 bg-slate-950 dark:bg-white rounded-full flex items-center justify-center shadow-2xl z-20"
           >
              <Zap size={48} className="text-white dark:text-slate-950" fill="currentColor" />
           </motion.div>

           {/* Orbiting Icons */}
           {icons.map((icon, idx) => (
             <OrbitIcon key={idx} {...icon} />
           ))}
        </div>
      </div>
    </section>
  );
};

export default OrbitSection;