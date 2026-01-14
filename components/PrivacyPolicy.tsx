import React from 'react';
import { ArrowLeft, ShieldCheck, Mail, Phone, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigation } from '../App';

import { useLanguage } from '../context/LanguageContext';

const PrivacyPolicy: React.FC = () => {
  const { navigateTo } = useNavigation();
  const { t } = useLanguage();

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
          {t('privacy.back')}
        </button>

        <header className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 text-[10px] font-black uppercase tracking-widest mb-6 border border-brand-100 dark:border-brand-800">
            <ShieldCheck size={12} /> {t('privacy.badge')}
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
            {t('privacy.title')}
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium">
            {t('privacy.updated')}
          </p>
        </header>

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
                <Lock size={20} className="text-brand-600" />
              </div>
              {t('privacy.commitment.title')}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              {t('privacy.commitment.text')}
            </p>
          </section>

          <section className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm">
                <Phone size={20} className="text-brand-600" />
              </div>
              {t('privacy.sms.title')}
            </h2>
            <div className="space-y-4">
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-bold">
                {t('privacy.sms.intro')}
              </p>
              <ul className="list-disc pl-5 space-y-3 text-slate-600 dark:text-slate-400 font-medium">
                <li><span className="text-slate-900 dark:text-white font-bold">{t('privacy.sms.consent')}</span> {t('privacy.sms.consent_text')}</li>
                <li><span className="text-slate-900 dark:text-white font-bold">{t('privacy.sms.sharing')}</span> {t('privacy.sms.sharing_text')}</li>
                <li><span className="text-slate-900 dark:text-white font-bold">{t('privacy.sms.usage')}</span> {t('privacy.sms.usage_text')}</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">{t('privacy.collect.title')}</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              {t('privacy.collect.text')}
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2 text-slate-600 dark:text-slate-400 font-medium">
              <li>{t('privacy.collect.li1')}</li>
              <li>{t('privacy.collect.li2')}</li>
              <li>{t('privacy.collect.li3')}</li>
              <li>{t('privacy.collect.li4')}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">{t('privacy.ai.title')}</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              {t('privacy.ai.text')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
                <Mail size={20} className="text-brand-600" />
              </div>
              {t('privacy.contact.title')}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              {t('privacy.contact.text')} <a href="mailto:info@truep4p.com" className="text-brand-600 font-bold hover:underline">info@truep4p.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;