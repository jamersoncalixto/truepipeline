import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MousePointer2, MessageSquare, Calendar, BarChart, Sparkles, CheckCircle } from 'lucide-react';

const workflowCards = [
  {
    id: 1,
    title: "Omni-Channel Lead Capture",
    eyebrow: "Step 01: Capture",
    description: "Automate lead collection from Facebook, Instagram, LinkedIn, SMS, and Email. Every conversation flows into one unified inbox instantly.",
    icon: MousePointer2,
    gradient: "from-blue-600 to-indigo-600",
    visual: (
      <div className="relative w-full h-full flex items-center justify-center py-16 px-6 sm:p-12">
        <div className="flex flex-col gap-4 w-full max-w-[320px] relative z-10">
          {[
            { label: 'FB', text: 'New Lead: Sarah Miller', color: 'bg-blue-600' },
            { label: 'IG', text: 'DM from: @creative_studio', color: 'bg-gradient-to-tr from-purple-500 to-pink-500' },
            { label: 'SMS', text: 'Inquiry: Pricing details?', color: 'bg-green-500' },
            { label: 'IN', text: 'New Connection: Tech CEO', color: 'bg-sky-700' }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 dark:border-slate-700 flex items-center gap-4"
            >
              <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center text-white text-[10px] font-black`}>
                {item.label}
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="h-2 w-28 bg-slate-100 dark:bg-slate-700 rounded-full"></div>
                <div className="h-1.5 w-20 bg-slate-50 dark:bg-slate-800 rounded-full"></div>
              </div>
              <div className="ml-auto w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            </motion.div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "24/7 AI-Powered Nurturing",
    eyebrow: "Step 02: Nurture",
    description: "Our intelligent AI agents engage leads in natural, human-like conversations. They answer questions and book demos while you sleep.",
    icon: MessageSquare,
    gradient: "from-indigo-600 to-violet-600",
    visual: (
      <div className="relative w-full h-full flex items-center justify-center py-16 px-6 sm:p-12">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 dark:border-slate-700 w-full max-w-[320px] relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-2xl bg-brand-600 flex items-center justify-center shadow-lg shadow-brand-500/20">
              <Sparkles className="text-white w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">AI Agent Active</div>
              <div className="text-[9px] text-green-500 font-bold">Bot is typing...</div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-2xl rounded-tl-none text-xs text-slate-600 dark:text-slate-300 font-medium">
              "Hi Sarah! I saw you were interested in our growth plan. Would you like to see a quick demo tomorrow?"
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="bg-brand-600 p-4 rounded-2xl rounded-tr-none text-xs text-white ml-auto max-w-[85%] font-medium shadow-lg shadow-brand-500/10"
            >
              "That sounds perfect. How about 2 PM EST?"
            </motion.div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "Self-Driving Appointments",
    eyebrow: "Step 03: Convert",
    description: "The platform automatically triggers calendar bookings and sends SMS reminders the moment a lead says yes.",
    icon: Calendar,
    gradient: "from-violet-600 to-purple-600",
    visual: (
      <div className="relative w-full h-full flex items-center justify-center py-16 px-6 sm:p-12">
        <div className="w-full max-w-[320px] bg-white dark:bg-slate-800 p-6 rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 dark:border-slate-700">
          <div className="flex justify-between items-center mb-6">
            <span className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-tighter">October 2024</span>
            <div className="flex gap-1">
              <div className="w-6 h-6 rounded-lg bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-[10px]">←</div>
              <div className="w-6 h-6 rounded-lg bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-[10px]">→</div>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-2 mb-6">
            {[...Array(21)].map((_, i) => (
              <div key={i} className={`aspect-square rounded-xl flex items-center justify-center ${i === 12 ? 'bg-brand-600 shadow-xl shadow-brand-500/20' : 'bg-slate-50 dark:bg-slate-900'}`}>
                {i === 12 ? <Calendar className="w-4 h-4 text-white" /> : <span className="text-[8px] text-slate-300">{i + 1}</span>}
              </div>
            ))}
          </div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="p-4 bg-green-50 dark:bg-green-900/20 rounded-2xl flex items-center justify-between border border-green-100 dark:border-green-900/30"
          >
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-green-600 dark:text-green-400 uppercase tracking-widest">Booking Confirmed</span>
              <span className="text-[10px] text-slate-500 font-bold">Sarah Miller • 2:00 PM</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
              <CheckCircle size={14} />
            </div>
          </motion.div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "Unified Growth Engine",
    eyebrow: "Step 04: Scale",
    description: "One source of truth. Full attribution tracking shows you exactly which campaigns are driving revenue in real-time.",
    icon: BarChart,
    gradient: "from-brand-600 to-sky-600",
    visual: (
      <div className="relative w-full h-full flex items-center justify-center py-16 px-6 sm:p-12">
        <div className="w-full max-w-[320px] bg-white dark:bg-slate-800 rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 dark:border-slate-700 p-8 flex flex-col gap-6">
          <div className="flex justify-between items-end">
            <div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Pipeline</div>
              <div className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter">$248,400</div>
            </div>
            <div className="text-xs font-black text-green-500">+12.4%</div>
          </div>
          <div className="flex items-end gap-2.5 h-32">
            {[40, 70, 45, 90, 60, 80, 100].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                transition={{ delay: i * 0.1, duration: 1 }}
                className="flex-1 bg-gradient-to-t from-brand-600 to-brand-400 rounded-xl shadow-lg shadow-brand-500/10"
              />
            ))}
          </div>
          <div className="flex justify-between pt-4 border-t border-slate-50 dark:border-slate-800">
            <div className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">Campaign ROI</div>
            <div className="text-[9px] font-black text-brand-600 uppercase tracking-tighter">View Report →</div>
          </div>
        </div>
      </div>
    )
  }
];

const WorkFlowStack: React.FC = () => {
  return (
    <section className="bg-white dark:bg-slate-950">
      {/* Introduction Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 sm:pt-32 sm:pb-20">
        <div className="text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 text-[10px] font-bold uppercase tracking-widest mb-6 border border-brand-100 dark:border-brand-800"
          >
            <Sparkles size={10} /> The Automated Flow
          </motion.div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-8">
            Watch your business <span className="text-brand-600">run itself.</span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-500 dark:text-slate-400 leading-relaxed px-4 max-w-2xl font-medium">
            True Pipeline replaces your entire stack with one intelligent, automated ecosystem.
          </p>
        </div>
      </div>

      {/* Stacking Cards Section */}
      <div className="relative">
        {workflowCards.map((card, index) => (
          <WorkflowCardSection
            key={card.id}
            card={card}
            index={index}
            totalCards={workflowCards.length}
          />
        ))}
      </div>

      {/* Spacer to allow the final card to scroll off or feel complete */}
      <div className="h-[20vh]" />
    </section>
  );
};

const WorkflowCardSection: React.FC<{ card: any; index: number; totalCards: number }> = ({ card, index, totalCards }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress of this specific card section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Calculate scaling for the "receding" effect as next cards come in
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 1]); // Keep opacity solid for better stacking
  // const blur = useTransform(scrollYProgress, [0, 1], ["0px", "4px"]); // Removed blur for cleaner look

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[100vh] flex items-center justify-center sticky top-0"
    >
      <div className="w-full h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          style={{
            scale,
            opacity,
            zIndex: index + 10,
            marginTop: `${index * 15}px`, // Reduced margin for tighter stack
            transform: "translateZ(0)" // Force hardware acceleration
          }}
          className="w-full max-w-6xl h-[65vh] min-h-[600px] md:h-[650px] md:min-h-[600px] md:max-h-[800px] bg-white dark:bg-slate-900 rounded-[2rem] sm:rounded-[3.5rem] border border-slate-100 dark:border-slate-800 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] dark:shadow-none overflow-hidden flex flex-col md:flex-row relative"
        >
          {/* Content Side */}
          <div className="flex-1 p-6 sm:p-12 md:p-20 flex flex-col justify-center shrink-0">
            <div className="text-brand-600 font-black text-xs uppercase tracking-[0.3em] mb-4 sm:mb-6">
              {card.eyebrow}
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-4 sm:mb-8 tracking-tighter leading-[1.1]">
              {card.title}
            </h3>
            <p className="text-sm sm:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium max-w-md mb-4 sm:mb-0">
              {card.description}
            </p>
          </div>

          {/* Visual/Demo Side */}
          <div className="flex-1 bg-slate-50/40 dark:bg-slate-800/20 border-t md:border-t-0 md:border-l border-slate-100 dark:border-slate-800 flex items-center justify-center overflow-hidden h-full min-h-[350px]">
            <div className="w-full h-full relative">
              <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${card.gradient} blur-[100px] sm:blur-[140px]`}></div>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 80 }}
                className="relative z-10 w-full h-full"
              >
                {card.visual}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WorkFlowStack;