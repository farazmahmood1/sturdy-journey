import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { PhoneCall } from 'lucide-react';
import { EMERGENCY_PHONE } from '../../constants';
import { localizeNumber } from '../../utils/localizeNumber';
import { formatPhoneDisplay } from '../../utils/saudiPhone';

const EmergencySection: React.FC = () => {
    const { t, i18n } = useTranslation();
    return (
        <section className="py-24 px-6 md:px-10 bg-white dark:bg-slate-950">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative bg-gradient-to-r from-slate-950 to-slate-900 p-12 md:p-24 rounded-[4rem] text-white flex flex-col lg:flex-row items-center justify-between gap-16 overflow-hidden border border-white/5"
                >
                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,_rgba(240,35,39,0.15),_transparent_60%)]" />
                    <div className="max-w-xl relative z-10">
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-khidmaat-red/20 text-khidmaat-red rounded-full text-xs font-black uppercase tracking-widest mb-10">
                            <span className="w-2.5 h-2.5 bg-khidmaat-red rounded-full animate-ping" />
                            {t('emergency.badge')}
                        </div>
                        <h2 className="text-5xl font-black mb-8 leading-tight tracking-tighter">
                            {t('emergency.title')} <br />{t('emergency.subtitle')}
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed mb-0">
                            {t('emergency.desc')}
                        </p>
                    </div>
                    <div className="relative z-10 flex flex-col items-center gap-8">
                        <a
                            href={`tel:${EMERGENCY_PHONE}`}
                            className="bg-khidmaat-red text-white px-14 py-7 rounded-[2.5rem] font-black text-3xl shadow-[0_24px_48px_-12px_rgba(240,35,39,0.4)] hover:scale-105 active:scale-95 transition-all flex items-center gap-5 group"
                        >
                            <PhoneCall size={38} />
                            <span dir="ltr">{localizeNumber(formatPhoneDisplay(EMERGENCY_PHONE), i18n.language)}</span>
                        </a>
                        <span className="text-slate-500 font-bold uppercase tracking-[0.4em] text-[10px]">{t('emergency.hotline')}</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default EmergencySection;
