import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface PreloaderProps {
  onLoadingComplete?: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onLoadingComplete }) => {
  const { i18n } = useTranslation();
  const [progress, setProgress] = useState(0);
  const logoSrc = i18n.language === 'ar' ? '/khidmaat-arabic.png' : '/khidmaat.png';

  useEffect(() => {
    let interval: NodeJS.Timeout;
    const totalImages = document.images.length;
    let loadedImages = 0;

    const updateProgress = () => {
      // Simulate real loading behavior: starts fast, slows down as it nears completion
      // but also reacts to actual asset loading.
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoadingComplete?.(), 500);
          return 100;
        }

        // Dynamic increment: faster if many images are loaded, but capped at 99 until window.onload
        const step = Math.random() * 2;
        const next = prev + step;

        // If window is loaded, we can go to 100
        if (document.readyState === 'complete') {
          return Math.min(next + 5, 100);
        }

        return Math.min(next, 99);
      });
    };

    interval = setInterval(updateProgress, 30);

    const handleImageLoad = () => {
      loadedImages++;
      const assetProgress = (loadedImages / (totalImages || 1)) * 50; // Images account for 50% of weight
      setProgress(prev => Math.max(prev, assetProgress));
    };

    // Track existing images
    Array.from(document.images).forEach(img => {
      if (img.complete) {
        handleImageLoad();
      } else {
        img.addEventListener('load', handleImageLoad);
        img.addEventListener('error', handleImageLoad); // Count errors as "done" too
      }
    });

    const handleWindowLoad = () => {
      // Once window is fully loaded, accelerate to 100
      const jumpToFinish = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(jumpToFinish);
            return 100;
          }
          return prev + 5;
        });
      }, 50);
    };

    window.addEventListener('load', handleWindowLoad);

    return () => {
      clearInterval(interval);
      window.removeEventListener('load', handleWindowLoad);
      Array.from(document.images).forEach(img => {
        img.removeEventListener('load', handleImageLoad);
        img.removeEventListener('error', handleImageLoad);
      });
    };
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-khidmaat-bg dark:bg-slate-950 flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="relative flex flex-col items-center gap-12">
        {/* Animated Circle around Logo */}
        <div className="relative w-48 h-48 flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            {/* Background Circle */}
            <circle
              cx="96"
              cy="96"
              r="88"
              fill="none"
              stroke="currentColor"
              className="text-slate-200 dark:text-slate-800"
              strokeWidth="4"
            />
            {/* Progress Circle */}
            <motion.circle
              cx="96"
              cy="96"
              r="88"
              fill="none"
              stroke="currentColor"
              className="text-khidmaat-red"
              strokeWidth="4"
              strokeDasharray="553" // 2 * PI * 88
              initial={{ strokeDashoffset: 553 }}
              animate={{ strokeDashoffset: 553 - (553 * progress) / 100 }}
              transition={{ duration: 0.5, ease: "linear" }}
              strokeLinecap="round"
            />
          </svg>

          {/* Logo with pulse animation */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="z-10"
          >
            <img src={logoSrc} alt="Khidmaat Logo" className="w-32 h-auto" />
          </motion.div>
        </div>

        {/* Percentage text */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold tracking-tighter text-slate-900 dark:text-white"
          >
            {Math.round(progress)}
            <span className="text-xl text-khidmaat-red ml-1">%</span>
          </motion.div>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-2 uppercase tracking-[0.2em]">
            Loading Experience
          </p>
        </div>
      </div>

      {/* Dynamic Loading Bar at the bottom */}
      <div className="absolute bottom-0 left-0 w-full px-10 pb-12">
        <div className="max-w-md mx-auto relative group">
          {/* Label */}
          <div className="flex justify-between items-end mb-3">
            <span className="text-[10px] font-bold text-slate-400 dark:text-slate-600 uppercase tracking-widest">System Check</span>
            <span className="text-[10px] font-bold text-khidmaat-red uppercase tracking-widest">UAE Standard</span>
          </div>

          {/* Progress Bar Container */}
          <div className="h-1 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden backdrop-blur-sm">
            {/* Glossy Progress Bar */}
            <motion.div
              className="h-full bg-khidmaat-red relative"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "linear" }}
            >
              {/* Glow effect at the tip of the bar */}
              <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-r from-transparent to-white/30 blur-sm" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Animated background elements for extra premium feel */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30 dark:opacity-20 transition-opacity">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-khidmaat-red/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-khidmaat-red/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
    </motion.div>
  );
};

export default Preloader;
