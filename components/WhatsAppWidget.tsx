
import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT_PHONE } from '../constants';

const WhatsAppIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 0 5.415 0 12.05c0 2.122.551 4.197 1.597 6.011L0 24l6.135-1.61a11.787 11.787 0 005.911 1.564h.005c6.634 0 12.05-5.415 12.05-12.051a11.742 11.742 0 00-3.483-8.52z"/>
  </svg>
);

const WhatsAppWidget: React.FC = () => {
  // Normalize phone for WhatsApp: Remove non-digits and ensure UAE prefix 971
  const cleanPhone = CONTACT_PHONE.replace(/\D/g, '');
  const waPhone = cleanPhone.startsWith('0') ? '971' + cleanPhone.substring(1) : cleanPhone;
  const waLink = `https://wa.me/${waPhone}`;

  return (
    <motion.div 
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 260, damping: 20 }}
      className="fixed bottom-8 right-6 md:right-10 z-[100] group"
    >
      {/* Tooltip Label */}
      <div className="absolute bottom-full right-0 mb-4 w-48 bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none translate-y-2 group-hover:translate-y-0">
        <p className="text-[10px] font-black text-slate-900 dark:text-white leading-tight uppercase tracking-tighter mb-1">Instant Support</p>
        <p className="text-xs text-slate-500 dark:text-slate-400">Chat with a technician now on WhatsApp!</p>
        <div className="absolute bottom-0 right-6 translate-y-1/2 rotate-45 w-3 h-3 bg-white dark:bg-slate-900 border-r border-b border-slate-100 dark:border-slate-800"></div>
      </div>

      {/* Main Button */}
      <a 
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-green-500 text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group"
      >
        {/* Pulsing Aura */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-green-500 rounded-full -z-10"
        />
        <WhatsAppIcon size={36} className="group-hover:rotate-12 transition-transform" />
      </a>
    </motion.div>
  );
};

export default WhatsAppWidget;
