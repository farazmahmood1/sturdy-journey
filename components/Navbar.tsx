import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Sparkles, Sun, Moon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import { BRAND_NAME, CONTACT_PHONE } from '../constants';
import { formatPhoneDisplay } from '../utils/saudiPhone';

const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const html = document.documentElement;
    const updateState = () => setIsDark(html.classList.contains('dark'));
    updateState();
    const observer = new MutationObserver(updateState);
    observer.observe(html, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const toggleTheme = (e: React.MouseEvent) => {
    e.preventDefault();
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-khidmaat-red dark:hover:text-khidmaat-red transition-all relative overflow-hidden flex items-center justify-center min-w-[42px] min-h-[42px]"
      aria-label="Toggle Theme"
    >
      <AnimatePresence mode="wait">
        {isDark ? (
          <motion.div
            key="sun"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Sun size={18} />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Moon size={18} />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const logoSrc = i18n.language === 'ar' ? '/khidmaat-arabic.png' : '/khidmaat.png';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/' && !location.hash;
    if (path.includes('#')) {
      const [basePath, hash] = path.split('#');
      return location.pathname === basePath && location.hash === `#${hash}`;
    }
    return location.pathname === path;
  };

  return (
    <nav className={`fixed left-0 w-full z-50 transition-all duration-300 ${scrolled
      ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-md shadow-sm py-3 top-0'
      : 'bg-transparent py-5 top-0 md:top-10'
      }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <img src={logoSrc} alt="Khidmaat Logo" className={`${i18n.language === 'ar' ? 'w-30 h-12' : 'w-32 h-10'} `} />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <div className="flex gap-4 lg:gap-6 items-center">
            {navLinks.map((link) => {
              const active = isActive(link.path);

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-semibold tracking-wide hover:text-khidmaat-red transition-all relative flex items-center gap-1.5 ${active ? 'text-khidmaat-red' : 'text-slate-600 dark:text-slate-400'
                    } ${link.special ? 'bg-khidmaat-red/5 dark:bg-khidmaat-red/10 px-3 py-1.5 rounded-lg border border-khidmaat-red/10 dark:border-khidmaat-red/20' : ''}`}
                >
                  {link.special && <Sparkles size={12} className="text-khidmaat-red" />}
                  {link.name}
                  {active && !link.special && (
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-khidmaat-red"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4 border-l border-slate-200 dark:border-slate-800 pl-6">
            <LanguageSelector />
            <ThemeToggle />
            <a
              href={`tel:${CONTACT_PHONE}`}
              className="flex items-center gap-2 bg-khidmaat-red text-white px-5 py-2.5 rounded-full font-bold text-sm hover:shadow-lg hover:shadow-red-500/30 transition-all"
            >
              <Phone size={16} />
              <span dir="ltr">{formatPhoneDisplay(CONTACT_PHONE)}</span>
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <LanguageSelector />
          <ThemeToggle />
          <button className="text-slate-900 dark:text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-lg font-bold flex items-center gap-2 ${isActive(link.path) ? 'text-khidmaat-red' : 'text-slate-900 dark:text-slate-100'
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.special && <Sparkles size={18} className="text-khidmaat-red" />}
                  {link.name}
                </Link>
              ))}
              <a
                href={`tel:${CONTACT_PHONE}`}
                className="flex items-center justify-center gap-2 bg-khidmaat-red text-white p-4 rounded-2xl font-bold"
              >
                <Phone size={18} />
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;