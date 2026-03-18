import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { History } from 'lucide-react';

const LegacyHistory: React.FC = () => {
    const { t } = useTranslation();
    return (
        <section className="py-32 px-6 md:px-10 bg-slate-950 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(240,35,39,0.08)_0%,_transparent_50%,_rgba(240,35,39,0.08)_100%)]" />
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center gap-4 mb-10">
                        <History size={32} className="text-khidmaat-red" />
                        <span className="text-khidmaat-red font-black tracking-widest uppercase text-sm">{t('legacy.badge')}</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black mb-10 leading-[1.05] tracking-tighter">
                        {t('legacy.title')} <br />{t('legacy.subtitle')} <span className="text-khidmaat-red">{t('legacy.subtitleAccent')}</span>
                    </h2>
                    <p className="text-slate-400 text-xl leading-relaxed mb-16 max-w-xl">
                        {t('legacy.desc')}
                    </p>
                    <div className="grid grid-cols-2 gap-12">
                        {[
                            { label: t('legacy.stats.heritage'), val: '36 Years' },
                            { label: t('legacy.stats.fixes'), val: '250K+' },
                            { label: t('legacy.stats.hubs'), val: t('legacy.stats.hubsVal') },
                            { label: t('legacy.stats.partners'), val: '50+' }
                        ].map((s, i) => (
                            <div key={i} className="border-l-2 border-khidmaat-red/30 pl-6">
                                <div className="text-4xl font-black text-khidmaat-red mb-1">{s.val}</div>
                                <div className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>
                <div className="relative group">
                    <div className="aspect-[4/5] bg-gradient-to-tr from-khidmaat-red/20 to-slate-800 rounded-[5rem] overflow-hidden p-1 shadow-[0_0_80px_-20px_rgba(240,35,39,0.4)]">
                        <img
                            src="https://images.unsplash.com/photo-1682345262055-8f95f3c513ea?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="w-full h-full object-cover rounded-[4.8rem] transition-all duration-1000 group-hover:scale-110"
                            alt="MIGroup History"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LegacyHistory;
