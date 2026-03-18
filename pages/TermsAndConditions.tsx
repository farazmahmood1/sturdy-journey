
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FileText, CheckCircle, AlertCircle, Clock } from 'lucide-react';
import SEO from '../components/SEO';

const TermsAndConditions: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div className="pt-32 pb-32 bg-khidmaat-bg dark:bg-slate-950 transition-colors relative overflow-hidden">
            <SEO
                title={t('terms.title')}
                description={t('terms.intro')}
                canonical="/terms-and-conditions"
            />

            {/* Decorative Gradient Blobs */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-khidmaat-red/[0.05] blur-[160px] rounded-full -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-khidmaat-red/[0.03] blur-[160px] rounded-full -z-10" />

            <div className="max-w-4xl mx-auto px-6 md:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <span className="text-khidmaat-red font-black tracking-widest uppercase text-xs mb-6 block tracking-[0.5em]">{t('terms.badge')}</span>
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter">{t('terms.title')}</h1>
                    <p className="text-slate-500 dark:text-slate-400 font-medium">{t('terms.lastUpdated')}</p>
                </motion.div>

                <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[3rem] p-10 md:p-16 shadow-xl relative overflow-hidden mb-12">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-khidmaat-red/[0.01] -z-10" />

                    <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-16 font-medium">
                        {t('terms.intro')}
                    </p>

                    <div className="space-y-16">
                        <section>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-khidmaat-red/10 flex items-center justify-center text-khidmaat-red">
                                    <FileText size={24} />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{t('terms.sections.service.title')}</h2>
                            </div>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                {t('terms.sections.service.desc')}
                            </p>
                        </section>

                        <section>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-khidmaat-red/10 flex items-center justify-center text-khidmaat-red">
                                    <CheckCircle size={24} />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{t('terms.sections.warranty.title')}</h2>
                            </div>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                {t('terms.sections.warranty.desc')}
                            </p>
                        </section>

                        <section>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-khidmaat-red/10 flex items-center justify-center text-khidmaat-red">
                                    <Clock size={24} />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{t('terms.sections.cancellation.title')}</h2>
                            </div>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                {t('terms.sections.cancellation.desc')}
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditions;
