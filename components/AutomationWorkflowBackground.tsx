import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  MessageSquare, 
  Webhook, 
  Zap, 
  Calendar, 
  Database, 
  Phone, 
  Bot, 
  Cpu, 
  Network 
} from 'lucide-react';

const icons = [
  { Icon: Mail, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { Icon: MessageSquare, color: 'text-sky-500', bg: 'bg-sky-500/10' },
  { Icon: Webhook, color: 'text-purple-500', bg: 'bg-purple-500/10' },
  { Icon: Zap, color: 'text-amber-500', bg: 'bg-amber-500/10' },
  { Icon: Calendar, color: 'text-green-500', bg: 'bg-green-500/10' },
  { Icon: Database, color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
  { Icon: Phone, color: 'text-rose-500', bg: 'bg-rose-500/10' },
  { Icon: Bot, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
  { Icon: Cpu, color: 'text-cyan-500', bg: 'bg-cyan-500/10' },
  { Icon: Network, color: 'text-blue-600', bg: 'bg-blue-600/10' },
];

const NodeRow = ({ speed, offset, rowY, opacity = 0.2 }: { speed: number; offset: number; rowY: string; opacity?: number }) => {
  return (
    <div className="absolute w-full flex items-center select-none pointer-events-none" style={{ top: rowY, opacity }}>
      <motion.div
        className="flex gap-16 sm:gap-32 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
          delay: offset,
        }}
      >
        {[...Array(24)].map((_, i) => {
          const config = icons[i % icons.length];
          return (
            <div key={i} className="flex items-center gap-16 sm:gap-32 shrink-0">
              {/* Modern Minimalist Node */}
              <div className={`relative w-10 h-10 sm:w-12 sm:h-12 rounded-[1.25rem] ${config.bg} backdrop-blur-xl border border-white/20 dark:border-slate-800/50 flex items-center justify-center shadow-lg shadow-black/[0.03]`}>
                <config.Icon size={18} className={`${config.color} opacity-80`} />
              </div>
              
              {/* Flowing Connecting Line */}
              <div className="relative w-20 sm:w-32 h-[1px] bg-slate-200/50 dark:bg-slate-800/30 overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-500/40 to-transparent w-full"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.5,
                  }}
                />
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

const AutomationWorkflowBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none bg-white dark:bg-slate-950">
      {/* Living Atmospheric Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 60, 0],
          y: [0, -40, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-20%] left-[-10%] w-[50rem] h-[50rem] bg-brand-500/5 dark:bg-brand-500/[0.03] rounded-full blur-[160px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          x: [0, -50, 0],
          y: [0, 70, 0],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-[-20%] right-[-10%] w-[55rem] h-[55rem] bg-sky-400/5 dark:bg-sky-400/[0.03] rounded-full blur-[180px]"
      />
      <motion.div
        animate={{
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[25%] right-[20%] w-[35rem] h-[35rem] bg-indigo-600/[0.03] dark:bg-indigo-600/[0.01] rounded-full blur-[140px]"
      />

      {/* Orchestrated Workflow Rows */}
      <div className="absolute inset-0">
        <NodeRow speed={70} offset={0} rowY="10%" opacity={0.12} />
        <NodeRow speed={95} offset={4} rowY="25%" opacity={0.08} />
        <NodeRow speed={80} offset={2} rowY="65%" opacity={0.08} />
        <NodeRow speed={110} offset={7} rowY="85%" opacity={0.1} />
      </div>

      {/* Side Vignettes for depth */}
      <div className="absolute inset-y-0 left-0 w-64 sm:w-[30vw] bg-gradient-to-r from-white dark:from-slate-950 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-64 sm:w-[30vw] bg-gradient-to-l from-white dark:from-slate-950 to-transparent" />
      
      {/* Subtle Texture Layer */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.015] dark:opacity-[0.005] mix-blend-overlay" />
    </div>
  );
};

export default AutomationWorkflowBackground;