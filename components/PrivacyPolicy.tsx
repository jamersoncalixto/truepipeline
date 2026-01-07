import React from 'react';
import { ArrowLeft, ShieldCheck, Mail, Phone, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigation } from '../App';

const PrivacyPolicy: React.FC = () => {
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
            <ShieldCheck size={12} /> Privacy First
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium">
            Last Updated: January 2025
          </p>
        </header>

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
                <Lock size={20} className="text-brand-600" />
              </div>
              Our Commitment
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              At True Pipeline, we take your data privacy seriously. This policy describes how we collect, use, and handle your information when you use our website, CRM, and automated growth tools.
            </p>
          </section>

          <section className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm">
                <Phone size={20} className="text-brand-600" />
              </div>
              SMS & Telephony Privacy
            </h2>
            <div className="space-y-4">
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-bold">
                True Pipeline is built on multi-channel communication. We have strict rules regarding phone number data:
              </p>
              <ul className="list-disc pl-5 space-y-3 text-slate-600 dark:text-slate-400 font-medium">
                <li><span className="text-slate-900 dark:text-white font-bold">Consent:</span> By providing your phone number and opting in via our forms, you agree to receive SMS/MMS messages. You can reply STOP at any time to opt out.</li>
                <li><span className="text-slate-900 dark:text-white font-bold">No Sharing:</span> Mobile information will NOT be shared with third parties or affiliates for marketing or promotional purposes.</li>
                <li><span className="text-slate-900 dark:text-white font-bold">Usage:</span> Your phone number is strictly used for the automation features you configure (e.g., missed call text back, lead nurturing, and appointment reminders).</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Information We Collect</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              We collect information you provide directly to us, such as when you create an account, fill out a form, or communicate with us through our unified inbox. This includes:
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2 text-slate-600 dark:text-slate-400 font-medium">
              <li>Contact Information (Name, Email, Phone Number)</li>
              <li>Business Details and Industry</li>
              <li>Communication History (SMS, Emails, AI Transcriptions)</li>
              <li>Billing Information (handled via secure payment processors)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">AI Processing</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              True Pipeline utilizes advanced AI (including Google Gemini and Vapi) to automate your growth. Data processed by our AI is used strictly to enhance your business workflows and is never used to train external public models outside of your specific ecosystem's context.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
                <Mail size={20} className="text-brand-600" />
              </div>
              Contact Us
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              If you have any questions about this Privacy Policy, please reach out to our privacy team at <a href="mailto:info@truep4p.com" className="text-brand-600 font-bold hover:underline">info@truep4p.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;