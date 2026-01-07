import React from 'react';
import { ArrowLeft, Scale, CheckCircle2, ShieldAlert, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigation } from '../App';

const Terms: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <div className="pt-32 pb-24 bg-white dark:bg-slate-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Go Back Button */}
        <button
          onClick={() => navigateTo('/')}
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-600 transition-colors mb-12 group"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center group-hover:bg-brand-50 dark:group-hover:bg-brand-900/30"
          >
            <ArrowLeft size={16} />
          </motion.div>
          Back to Website
        </button>

        <header className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 text-[10px] font-black uppercase tracking-widest mb-6 border border-brand-100 dark:border-brand-800">
            <Scale size={12} /> Compliance
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium">
            Last Updated: January 2025
          </p>
        </header>

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">1. Agreement to Terms</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              By accessing or using True Pipeline, you agree to be bound by these Terms of Service. If you do not agree, you may not access our platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
                <Zap size={20} className="text-brand-600" />
              </div>
              2. Use of Automation & Messaging
            </h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-400 font-medium">
              <p>True Pipeline provides tools for automated SMS, Email, and Voice calling. You are solely responsible for:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Complying with TCPA, GDPR, and other local regulations regarding automated outreach.</li>
                <li>Obtaining explicit opt-in consent from all leads before sending automated messages.</li>
                <li>Ensuring all AI-driven conversations represent your business accurately.</li>
                <li>Maintaining the proper opt-out (STOP) mechanisms for all telephony services.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">3. Subscriptions & Payments</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium mb-4">
              We offer Starter, Growth, and Pro plans. By selecting a plan:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 flex items-start gap-3">
                <CheckCircle2 size={16} className="text-brand-600 mt-1" />
                <span className="text-xs font-bold">You agree to recurring billing based on your selected cycle (Monthly/Annual).</span>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 flex items-start gap-3">
                <CheckCircle2 size={16} className="text-brand-600 mt-1" />
                <span className="text-xs font-bold">Cancellations must be processed before the next billing date.</span>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
                <ShieldAlert size={20} className="text-brand-600" />
              </div>
              4. Prohibited Activities
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium mb-4">
              You may not use True Pipeline to:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400 font-medium">
              <li>Send unsolicited "spam" messages or illegal promotional content.</li>
              <li>Impersonate individuals or organizations without authorization.</li>
              <li>Reverse engineer the platform or AI logic.</li>
              <li>Circumvent security protocols or carrier filters (A2P 10DLC).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">5. Limitation of Liability</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              True Pipeline is provided "as is." We are not liable for any business interruptions, loss of leads, or regulatory fines resulting from your use or misuse of our automated communication tools.
            </p>
          </section>

          <section className="pt-8 border-t border-slate-100 dark:border-slate-800">
             <p className="text-sm text-slate-500 font-bold italic">
               For any legal inquiries regarding these terms, please contact our legal department at <a href="mailto:info@truep4p.com" className="text-brand-600 hover:underline">info@truep4p.com</a>.
             </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;