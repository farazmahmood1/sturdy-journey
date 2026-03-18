import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import WhatsAppWidget from './components/WhatsAppWidget';

import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SubmitSuccess from './pages/SubmitSuccess';
import SubmitCancel from './pages/SubmitCancel';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';

// Scroll to top helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Page transition wrapper component
const PageTransition = ({ children }: { children?: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/services" element={<PageTransition><ServicesPage /></PageTransition>} />
        <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
        <Route path="/submit-success" element={<PageTransition><SubmitSuccess /></PageTransition>} />
        <Route path="/submit-cancel" element={<PageTransition><SubmitCancel /></PageTransition>} />
        <Route path="/privacy-policy" element={<PageTransition><PrivacyPolicy /></PageTransition>} />
        <Route path="/terms-and-conditions" element={<PageTransition><TermsAndConditions /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const { i18n } = useTranslation();

  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Set initial dir/lang
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;

    const handleLanguageChange = (lng: string) => {
      setIsTransitioning(true);
      // Wait for fade-out to complete, then apply dir/lang and fade back in
      setTimeout(() => {
        document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = lng;
        requestAnimationFrame(() => setIsTransitioning(false));
      }, 280);
    };

    i18n.on('languageChanged', handleLanguageChange);
    return () => { i18n.off('languageChanged', handleLanguageChange); };
  }, [i18n]);

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <AnimatePresence>
          {loading && <Preloader onLoadingComplete={() => setLoading(false)} />}
        </AnimatePresence>

        {!loading && (
          <motion.div
            animate={{
              opacity: isTransitioning ? 0 : 1,
              scale: isTransitioning ? 0.985 : 1,
              filter: isTransitioning ? 'blur(4px)' : 'blur(0px)',
            }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col min-h-screen relative bg-khidmaat-bg dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300"
          >
            <Topbar />
            <Navbar />
            <main className="flex-grow">
              <AnimatedRoutes />
            </main>
            <Footer />
          </motion.div>
        )}
        {!loading && <WhatsAppWidget />}
      </Router>
    </HelmetProvider>
  );
};

export default App;
