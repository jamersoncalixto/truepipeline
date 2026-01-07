import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, MicOff, Phone, Sparkles, Volume2, Loader2, Zap } from 'lucide-react';
import { useVoice } from '../context/VoiceContext';

const LiveVoiceSection: React.FC = () => {
  const { isActive, isConnecting, volume, toggleVoiceCall } = useVoice();

  return (
    <section className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-900/30">
      {/* Background Animated Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-600/10 dark:bg-brand-600/5 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-sky-500/10 dark:bg-sky-500/5 rounded-full blur-[80px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-800 text-brand-600 dark:text-brand-400 mb-8 border border-brand-100 dark:border-brand-800 shadow-sm"
        >
          <Sparkles size={14} className="animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest">Next-Gen Interface</span>
        </motion.div>

        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
          Talk to <span className="text-brand-600">True Pipeline.</span>
        </h2>
        
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-16 max-w-2xl mx-auto leading-relaxed">
          Experience the future of CRM. No typing, no clicking—just talk to our AI assistant to manage your leads and scale your growth.
        </p>

        {/* Voice Interface Button */}
        <div className="relative flex justify-center items-center py-10">
          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1.5 + volume * 2, opacity: 0.15 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="absolute w-40 h-40 rounded-full bg-brand-600"
              />
            )}
          </AnimatePresence>

          {/* Orbiting Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className={`absolute w-56 h-56 rounded-full border border-dashed border-brand-300 dark:border-brand-700/50 ${isActive ? 'opacity-100' : 'opacity-20'}`}
          />

          <button
            onClick={toggleVoiceCall}
            disabled={isConnecting}
            className={`relative z-20 group w-32 h-32 rounded-full flex items-center justify-center transition-all duration-500 shadow-2xl ${
              isActive 
                ? 'bg-white dark:bg-slate-900 border-4 border-brand-600' 
                : 'bg-brand-600 hover:bg-brand-700'
            }`}
          >
            {isConnecting ? (
              <Loader2 className="w-12 h-12 text-white animate-spin" />
            ) : isActive ? (
              <div className="flex flex-col items-center gap-1">
                 <MicOff className="w-10 h-10 text-brand-600" />
                 <span className="text-[10px] font-bold text-brand-600 uppercase tracking-tighter">LISTENING...</span>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-1">
                <Mic className="w-10 h-10 text-white group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-bold text-white uppercase">START CALL</span>
              </div>
            )}
          </button>

          {/* Decorative Status */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
             <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm">
                <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-green-500 animate-pulse' : 'bg-slate-300 dark:bg-slate-600'}`} />
                <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-tighter">
                  {isConnecting ? 'Establishing Connection...' : isActive ? 'AI Agent Listening' : 'System Ready'}
                </span>
             </div>
          </div>
        </div>

        <div className="mt-20 flex justify-center gap-12">
           <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center">
                 <Volume2 size={20} className="text-brand-600" />
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Natural Voice</span>
           </div>
           <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center">
                 <Zap size={20} className="text-brand-600" />
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Ultra Low Latency</span>
           </div>
           <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center">
                 <Phone size={20} className="text-brand-600" />
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Hands-Free CRM</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default LiveVoiceSection;