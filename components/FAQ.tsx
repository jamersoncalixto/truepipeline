import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "What exactly is True Pipeline, and how is it different from other CRMs?",
    answer: "True Pipeline is an all-in-one sales and automation platform built specifically for service-based businesses. Unlike generic CRMs, it combines pipelines, automation, messaging, booking, and AI-ready workflows into a single system designed to turn leads into booked conversations, not just store contacts."
  },
  {
    question: "Can I use True Pipeline without changing my current tools?",
    answer: "Yes. True Pipeline is designed to integrate with your existing stack. You can connect ads, forms, calendars, email, SMS, and third-party tools while gradually consolidating everything into one place. No forced migration, no operational shock."
  },
  {
    question: "How fast can I get up and running?",
    answer: "Most accounts are fully operational within a few days. Core pipelines, automations, calendars, and messaging can be launched quickly, and advanced workflows can be layered in over time. The goal is speed to value, not long onboarding cycles."
  },
  {
    question: "Is True Pipeline just software, or do you help with setup and strategy?",
    answer: "It’s more than software. True Pipeline comes with strategic guidance on pipeline structure, lead flow, and automation logic. The platform is built to support real sales processes, not generic templates that don’t match how businesses actually sell."
  },
  {
    question: "Who is True Pipeline best suited for?",
    answer: "True Pipeline is ideal for agencies, consultants, service providers, and B2B businesses that rely on leads, calls, appointments, and follow-ups to generate revenue. If your growth depends on managing conversations and moving prospects through a sales process, it’s built for you."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Fixed Title Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 text-[10px] font-bold uppercase tracking-widest mb-6 border border-brand-100 dark:border-brand-800">
            <HelpCircle size={12} /> Questions & Answers
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 leading-tight">
            Scaling Business with <span className="text-brand-600">Intelligent Growth.</span>
          </h2>
          
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Everything you need to know about scaling with True Pipeline. If you have other questions, our team is always ready to help.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`group rounded-3xl border transition-all duration-300 ${
                openIndex === index 
                  ? 'border-brand-200 dark:border-brand-800 bg-brand-50/30 dark:bg-brand-900/10 shadow-sm' 
                  : 'border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-brand-100 dark:hover:border-brand-900'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none"
              >
                <span className={`text-lg font-bold transition-colors ${openIndex === index ? 'text-brand-600' : 'text-slate-900 dark:text-slate-100'}`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'rotate-180 bg-brand-600 border-brand-600 text-white' : 'text-slate-400'}`}>
                  <ChevronDown size={18} />
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    // Removed invalid x: 0 and y: 0 from transition which were causing type errors
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;