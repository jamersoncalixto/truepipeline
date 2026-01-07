import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2, MessageSquare, Shield, Zap, Sparkles, Smartphone } from 'lucide-react';

const BentoFeatures: React.FC = () => {
  return (
    <section id="features" className="py-32 bg-slate-50/50 dark:bg-slate-900/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-brand-600 font-bold tracking-wider uppercase text-xs mb-4">Core Ecosystem</h2>
          <p className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            One Solution for <br />
            <span className="text-slate-400">streamlining your business</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Large Card */}
          <div className="md:col-span-2 bg-white dark:bg-slate-900 rounded-[32px] p-8 border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col md:flex-row gap-8 relative">
            <div className="flex-1 flex flex-col justify-center">
              <div className="w-12 h-12 bg-brand-50 dark:bg-brand-900/30 rounded-2xl flex items-center justify-center mb-6">
                <BarChart2 className="text-brand-600 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Data-Driven Insights</h3>
              <p className="text-slate-500 dark:text-slate-400 mb-6">
                Our suite of tools is specifically designed to automate repetitive tasks and unlock valuable insights.
              </p>
              <div className="flex gap-4">
                 <div className="bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-full text-xs font-bold">43% Growth</div>
                 <div className="bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-full text-xs font-bold">99% Accuracy</div>
              </div>
            </div>
            <div className="flex-1 bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 relative min-h-[240px]">
               <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 max-w-[200px] mb-4">
                  <div className="text-xs text-slate-400 mb-1">Total Leads</div>
                  <div className="text-xl font-bold">2,482</div>
                  <div className="w-full bg-slate-100 dark:bg-slate-700 h-1.5 rounded-full mt-2">
                     <motion.div 
                       initial={{ width: 0 }}
                       whileInView={{ width: '70%' }}
                       className="bg-brand-600 h-full rounded-full"
                     ></motion.div>
                  </div>
               </div>
               <div className="absolute bottom-4 right-4 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 max-w-[200px]">
                  <div className="text-xs text-slate-400 mb-1">Conversion</div>
                  <div className="text-xl font-bold text-green-500">12.4%</div>
                  <div className="flex gap-1 mt-2">
                    {[1,2,3,4,5,6].map(i => <div key={i} className="w-1 h-3 bg-brand-500 rounded-full"></div>)}
                  </div>
               </div>
            </div>
          </div>

          {/* Secure Card */}
          <div className="bg-brand-900 dark:bg-brand-950 rounded-[32px] p-8 text-white flex flex-col justify-between">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
              <Shield className="text-white w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Scalable & Secure</h3>
              <p className="text-brand-100/70 text-sm leading-relaxed">
                Monitor performance indicators and unlock valuable insights with enterprise-grade security.
              </p>
            </div>
          </div>

          {/* Integration Card */}
          <div className="bg-white dark:bg-slate-900 rounded-[32px] p-8 border border-slate-200 dark:border-slate-800 flex flex-col">
            <div className="w-12 h-12 bg-sky-50 dark:bg-sky-900/30 rounded-2xl flex items-center justify-center mb-6">
              <Sparkles className="text-sky-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Integrations Easy</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Connect your favorite apps in seconds. Zero code required.
            </p>
            <div className="mt-auto flex -space-x-2">
               {[1,2,3,4].map(i => (
                 <div key={i} className="w-8 h-8 rounded-full bg-slate-100 border-2 border-white dark:border-slate-800"></div>
               ))}
            </div>
          </div>

          {/* Mobile Card */}
          <div className="bg-white dark:bg-slate-900 rounded-[32px] p-8 border border-slate-200 dark:border-slate-800 flex flex-col">
            <div className="w-12 h-12 bg-green-50 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mb-6">
              <Smartphone className="text-green-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Mobile Optimization</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Manage your entire pipeline from the palm of your hand with our native apps.
            </p>
          </div>

          {/* Message Card */}
          <div className="bg-white dark:bg-slate-900 rounded-[32px] p-8 border border-slate-200 dark:border-slate-800 flex flex-col">
            <div className="w-12 h-12 bg-orange-50 dark:bg-orange-900/30 rounded-2xl flex items-center justify-center mb-6">
              <MessageSquare className="text-orange-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">24/7 Support</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Our experts are always here to help you scale your business to the next level.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BentoFeatures;