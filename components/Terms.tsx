import React from 'react';
import { ArrowLeft, Scale, CheckCircle2, ShieldAlert, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigation } from '../App';

import { useLanguage } from '../context/LanguageContext';

const Terms: React.FC = () => {
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
          {t('terms.back')}
        </button>

        <header className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 text-[10px] font-black uppercase tracking-widest mb-6 border border-brand-100 dark:border-brand-800">
            <Scale size={12} /> {t('terms.badge')}
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
            {t('terms.title')}
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium">
            {t('terms.updated')}
          </p>
        </header>

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">{t('terms.1.title')}</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              {t('terms.1.text')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
                <Zap size={20} className="text-brand-600" />
              </div>
              {t('terms.2.title')}
            </h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-400 font-medium">
              <p>{t('terms.2.intro')}</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>{t('terms.2.li1')}</li>
                <li>{t('terms.2.li2')}</li>
                <li>{t('terms.2.li3')}</li>
                <li>{t('terms.2.li4')}</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">{t('terms.3.title')}</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium mb-4">
              {t('terms.3.text')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 flex items-start gap-3">
                <CheckCircle2 size={16} className="text-brand-600 mt-1" />
                <span className="text-xs font-bold">{t('terms.3.card1')}</span>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 flex items-start gap-3">
                <CheckCircle2 size={16} className="text-brand-600 mt-1" />
                <span className="text-xs font-bold">{t('terms.3.card2')}</span>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
                <ShieldAlert size={20} className="text-brand-600" />
              </div>
              {t('terms.4.title')}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium mb-4">
              {t('terms.4.text')}
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400 font-medium">
              <li>{t('terms.4.li1')}</li>
              <li>{t('terms.4.li2')}</li>
              <li>{t('terms.4.li3')}</li>
              <li>{t('terms.4.li4')}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">{t('terms.5.title')}</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              {t('terms.5.text')}
            </p>
          </section>

          <section className="pt-8 border-t border-slate-100 dark:border-slate-800">
            <p className="text-sm text-slate-500 font-bold italic">
              {t('terms.contact')} <a href="mailto:info@truep4p.com" className="text-brand-600 hover:underline">info@truep4p.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;