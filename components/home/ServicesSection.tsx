import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { SERVICES } from '../../constants';

const ServicesSection: React.FC = () => {
    const { t } = useTranslation();
    return (
        <section className="py-32 relative bg-white dark:bg-slate-950 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-khidmaat-bg to-transparent dark:from-slate-950/50" />

            <div className="max-w-7xl mx-auto px-6 md:px-10 text-center mb-24 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-khidmaat-red font-black tracking-widest uppercase text-xs mb-4 block">{t('servicesSection.badge')}</span>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter">{t('servicesSection.title')}</h2>
                    <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        {t('servicesSection.description')}
                    </p>
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
                {SERVICES.map((service, idx) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="group bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 p-12 rounded-[3.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 dark:border-slate-800 hover:-translate-y-3"
                    >
                        <div className="w-16 h-16 rounded-[1.5rem] bg-khidmaat-red/10 flex items-center justify-center text-khidmaat-red mb-10 group-hover:bg-khidmaat-red group-hover:text-white group-hover:rotate-12 transition-all duration-500">
                            {service.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
                            {t(`servicesSection.cards.${service.id}.title`)}
                        </h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8">
                            {t(`servicesSection.cards.${service.id}.desc`)}
                        </p>
                        <Link to="/services" className="text-khidmaat-red font-black text-sm flex items-center gap-2 group/link">
                            {t('servicesSection.viewDetails')}
                            <ArrowRight size={18} className="group-hover/link:translate-x-2 transition-transform duration-300" />
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;
