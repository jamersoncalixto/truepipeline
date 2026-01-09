import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { useNavigation } from '../App';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { path, navigateTo } = useNavigation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      // If we are on a subpage, navigate home first via state
      if (path !== '/') {
        navigateTo('/');
        // Give time for home to render before scrolling
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setIsOpen(false);
        }
      }
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 sm:p-6 pointer-events-none">
      <nav
        className={`pointer-events-auto transition-all duration-300 w-full max-w-5xl rounded-2xl border ${scrolled || isOpen
            ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg border-slate-200/50 dark:border-slate-800/50'
            : 'bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border-transparent shadow-sm'
          }`}
      >
        <div className="px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="/"
              className="flex-shrink-0 flex items-center gap-2.5 cursor-pointer group"
              onClick={(e) => {
                e.preventDefault();
                if (path === '/') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                  navigateTo('/');
                }
                setIsOpen(false);
              }}
            >
              <img
                src="https://i.imgur.com/UdzWq5n.png"
                alt="True Pipeline Symbol"
                className="h-8 w-auto object-contain transform group-hover:scale-110 transition-transform duration-300"
              />
              <span className="text-xl font-black tracking-tight text-slate-900 dark:text-white transition-colors">
                True <span className="text-brand-600">Pipeline</span>
              </span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-6">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Right Side Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <a
                href="#pricing"
                onClick={(e) => handleLinkClick(e, '#pricing')}
                className="bg-brand-600 hover:bg-brand-700 text-white px-5 py-2 rounded-xl font-medium transition-all shadow-md hover:shadow-brand-500/20 text-sm"
              >
                Start Free Trial
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 dark:text-slate-300 hover:text-brand-600 focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen opacity-100 pb-4' : 'max-h-0 opacity-0'
            }`}
        >
          <div className="px-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:text-brand-600 hover:bg-slate-50 dark:hover:bg-slate-800/50"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#pricing"
                onClick={(e) => handleLinkClick(e, '#pricing')}
                className="block w-full text-center bg-brand-600 hover:bg-brand-700 text-white px-4 py-2.5 rounded-xl font-bold transition-colors"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;