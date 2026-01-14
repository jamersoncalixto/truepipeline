import React, { useState } from 'react';
import { Mail, Calendar, X, CheckCircle2, Sparkles, Clock, Globe, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigation } from '../App';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const { path, navigateTo } = useNavigation();
  const { t } = useLanguage();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      if (path !== '/') {
        navigateTo('/');
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const handleInternalLink = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    navigateTo(href);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 pt-20 pb-10 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 sm:gap-12 mb-16">

          <div className="flex flex-col col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img
                src="https://i.imgur.com/UdzWq5n.png"
                alt="True Pipeline Symbol"
                className="h-7 sm:h-8 w-auto object-contain brightness-100 dark:brightness-110"
              />
              <span className="text-base sm:text-lg font-black tracking-tight text-slate-900 dark:text-white">
                True <span className="text-brand-600">Pipeline</span>
              </span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-[11px] sm:text-sm leading-relaxed font-medium">
              {t('hero.subtitle')}
            </p>
          </div>

          <div className="flex flex-col col-span-1 lg:pl-12">
            <h4 className="font-black text-slate-950 dark:text-white mb-6 text-[10px] sm:text-xs uppercase tracking-[0.2em]">{t('footer.platform')}</h4>
            <ul className="space-y-4 text-[12px] sm:text-sm font-bold text-slate-500 dark:text-slate-400">
              <li>
                <a
                  href="/#home"
                  onClick={(e) => handleScrollTo(e, '#home')}
                  className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                >
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a
                  href="/#features"
                  onClick={(e) => handleScrollTo(e, '#features')}
                  className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                >
                  {t('nav.features')}
                </a>
              </li>
              <li>
                <a
                  href="/#pricing"
                  onClick={(e) => handleScrollTo(e, '#pricing')}
                  className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                >
                  {t('nav.pricing')}
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col col-span-1 lg:pl-4">
            <h4 className="font-black text-slate-950 dark:text-white mb-6 text-[10px] sm:text-xs uppercase tracking-[0.2em]">{t('footer.legal')}</h4>
            <ul className="space-y-4 text-[12px] sm:text-sm font-bold text-slate-500 dark:text-slate-400">
              <li><a href="/privacy-policy" onClick={(e) => handleInternalLink(e, '/privacy-policy')} className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">{t('privacy.title')}</a></li>
              <li><a href="/terms" onClick={(e) => handleInternalLink(e, '/terms')} className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">{t('terms.title')}</a></li>
            </ul>
          </div>

          <div className="flex flex-col col-span-1">
            <h4 className="font-black text-slate-950 dark:text-white mb-6 text-[10px] sm:text-xs uppercase tracking-[0.2em]">{t('footer.contact')}</h4>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className="flex items-center gap-2 sm:gap-3 text-[11px] sm:text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors group"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center group-hover:bg-brand-50 dark:group-hover:bg-brand-900/30 transition-colors shrink-0">
                    <Calendar size={12} className="text-slate-400 group-hover:text-brand-600" />
                  </div>
                  <span className="truncate">{t('footer.bookDemo')}</span>
                </button>
              </li>
              <li>
                <a
                  href="mailto:info@truep4p.com"
                  className="flex items-center gap-2 sm:gap-3 text-[11px] sm:text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors group"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center group-hover:bg-brand-50 dark:group-hover:bg-brand-900/30 transition-colors shrink-0">
                    <Mail size={12} className="text-slate-400 group-hover:text-brand-600" />
                  </div>
                  <span className="truncate">{t('footer.reachOut')}</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/true-p4p/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 sm:gap-3 text-[11px] sm:text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors group"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center group-hover:bg-brand-50 dark:group-hover:bg-brand-900/30 transition-colors shrink-0">
                    <Linkedin size={12} className="text-slate-400 group-hover:text-brand-600" />
                  </div>
                  <span className="truncate">LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-100 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-black uppercase tracking-[0.1em] text-slate-400 dark:text-slate-600">
            © {currentYear} True Pipeline. {t('footer.rights')}
          </p>
          <a
            href="https://truep4p.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-black uppercase tracking-[0.1em] text-slate-400 dark:text-slate-600 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
          >
            {t('footer.p4p')}
          </a>
        </div>
      </div>

      <AnimatePresence>
        {isDemoModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDemoModalOpen(false)}
              className="absolute inset-0 bg-slate-950/40 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-6xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-y-auto lg:overflow-hidden border border-slate-100 dark:border-slate-800"
            >
              <button
                onClick={() => setIsDemoModalOpen(false)}
                className="absolute top-6 right-6 z-20 p-2 rounded-full bg-slate-100/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-500 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors shadow-sm"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col lg:flex-row lg:min-h-[650px]">
                <div className="lg:w-[38%] p-8 sm:p-12 bg-slate-50/50 dark:bg-slate-900/50 border-b lg:border-b-0 lg:border-r border-slate-100 dark:border-slate-800 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 text-brand-600 dark:text-brand-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                    <Sparkles size={12} /> {t('footer.modal.liveStrategy')}
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                    {t('footer.modal.title')} <br />
                    <span className="text-brand-600">{t('footer.modal.subtitle')}</span>
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-4 font-medium leading-relaxed">
                    {t('footer.modal.desc')}
                  </p>

                  <div className="mt-8 space-y-4">
                    {[
                      { icon: Clock, text: t('footer.modal.benefit1') },
                      { icon: Globe, text: t('footer.modal.benefit2') },
                      { icon: CheckCircle2, text: t('footer.modal.benefit3') }
                    ].map((benefit, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm">
                          <benefit.icon size={14} className="text-brand-600" />
                        </div>
                        <span className="text-xs font-bold text-slate-700 dark:text-slate-200">{benefit.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex-1 p-4 sm:p-8 bg-white dark:bg-slate-900 relative min-h-[600px] lg:min-h-0">
                  <div className="h-[600px] lg:h-full w-full relative rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-950/30">
                    <iframe
                      src="https://api.leadconnectorhq.com/widget/booking/9cirtaoy1UlrAgaZm2w6"
                      className="w-full h-full border-none"
                      scrolling="yes"
                      id="9cirtaoy1UlrAgaZm2w6_1766505499241"
                      title="True Pipeline Booking Widget"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;