import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, Globe } from 'lucide-react';

const WhyUs: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section id="why-us" className="py-32 px-6 md:px-10 bg-slate-950 text-white relative overflow-hidden scroll-mt-24">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(240,35,39,0.08)_0%,_transparent_50%,_rgba(240,35,39,0.08)_100%)]" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Left Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-7xl font-black mb-12 leading-[1.1] tracking-tighter">
                            {t('whyUs.title')} <br /><span className="text-khidmaat-red">{t('whyUs.titleAccent')}</span>
                        </h2>

                        <div className="space-y-10">
                            {[
                                { title: t('whyUs.feature1.title'), desc: t('whyUs.feature1.desc'), icon: ShieldCheck },
                                { title: t('whyUs.feature2.title'), desc: t('whyUs.feature2.desc'), icon: Globe }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-6 items-start group">
                                    <div className="w-14 h-14 shrink-0 rounded-2xl bg-slate-800 flex items-center justify-center text-khidmaat-red border border-slate-700 group-hover:bg-khidmaat-red group-hover:text-white transition-all duration-500">
                                        <item.icon size={28} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                                        <p className="text-slate-400 text-base leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column - Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative group">
                            <div className="aspect-[4/5] bg-gradient-to-tr from-khidmaat-red/20 to-slate-800 rounded-[5rem] overflow-hidden p-1 shadow-[0_0_80px_-20px_rgba(240,35,39,0.4)]">

                                <motion.img
                                    src="/web-images/Ducr_AC_Fixing.jpeg"
                                    alt="Khidmaatt Legacy"
                                    className="w-full h-full object-cover rounded-[4.8rem]"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.2, ease: "easeInOut" }}
                                />

                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-28"
                >
                    <div className="mb-12">
                        <h3 className="text-3xl md:text-4xl font-black tracking-tighter mb-2">
                            {t('whyUs.statsHeader')} <span className="text-khidmaat-red">{t('whyUs.statsSubheader')}</span>
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {(['years', 'fixes', 'partners'] as const).map((key, i) => (
                            <div key={i} className="border-l-2 border-khidmaat-red/30 pl-6">
                                <div className="text-4xl md:text-5xl font-black text-khidmaat-red mb-2">
                                    {t(`whyUs.stats.${key}.val`)}
                                </div>
                                <div className="text-sm font-bold text-white mb-1">
                                    {t(`whyUs.stats.${key}.label`)}
                                </div>
                                <div className="text-xs text-slate-500">
                                    {t(`whyUs.stats.${key}.desc`)}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyUs;
