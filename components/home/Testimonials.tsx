import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Star, Quote } from 'lucide-react';
import { localizeNumber } from '../../utils/localizeNumber';

const Testimonials: React.FC = () => {
    const { t, i18n } = useTranslation();

    const TESTIMONIALS = [
        {
            name: t('testimonials.names.ahmed'),
            role: t('testimonials.roles.ahmed'),
            content: t('testimonials.list.ahmed'),
            rating: 5,
            image: "https://i.pravatar.cc/150?u=ahmed"
        },
        {
            name: t('testimonials.names.sarah'),
            role: t('testimonials.roles.sarah'),
            content: t('testimonials.list.sarah'),
            rating: 5,
            image: "https://i.pravatar.cc/150?u=sarah"
        },
        {
            name: t('testimonials.names.mohammed'),
            role: t('testimonials.roles.mohammed'),
            content: t('testimonials.list.mohammed'),
            rating: 5,
            image: "https://i.pravatar.cc/150?u=mohammed"
        }
    ];

    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-khidmaat-red/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-khidmaat-red/10 text-khidmaat-red rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-khidmaat-red/20"
                    >
                        <Star size={14} className="fill-khidmaat-red" />
                        {t('testimonials.badge')}
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter"
                    >
                        {t('testimonials.title')} <span className="text-khidmaat-red">{t('testimonials.titleAccent')}</span> <br />{t('testimonials.subtitle')}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-500 dark:text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium"
                    >
                        {t('testimonials.desc')}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((testimonial, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white dark:bg-slate-900/50 backdrop-blur-xl p-10 rounded-[3rem] border border-slate-100 dark:border-white/5 shadow-xl shadow-slate-200/50 dark:shadow-none hover:shadow-2xl transition-all group"
                        >
                            <div className="flex gap-1 mb-8">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            <div className="relative mb-8">
                                <Quote className="absolute -top-4 -left-4 text-khidmaat-red/10 w-16 h-16 group-hover:scale-110 transition-transform" />
                                <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed font-medium relative z-10 italic">
                                    "{testimonial.content}"
                                </p>
                            </div>

                            <div className="flex items-center gap-4 mt-auto">
                                <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 p-0.5 overflow-hidden">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover rounded-[14px]"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white">{testimonial.name}</h4>
                                    <p className="text-xs text-slate-500 dark:text-slate-500 uppercase font-black tracking-widest">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-8 py-6 px-12 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-[2.5rem] shadow-sm"
                    >
                        <div className="text-left">
                            <div className="text-2xl font-black text-slate-900 dark:text-white">{localizeNumber('4.9/5.0', i18n.language)}</div>
                            <div className="text-xs text-slate-500 uppercase font-black tracking-widest">{t('testimonials.avgRating')}</div>
                        </div>
                        <div className="w-px h-10 bg-slate-200 dark:bg-slate-800" />
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4, 5].map(i => (
                                <div key={i} className="w-10 h-10 rounded-full border-4 border-white dark:border-slate-900 bg-slate-200 overflow-hidden shadow-sm">
                                    <img src={`https://i.pravatar.cc/100?u=${i + 20}`} alt="Rating User" />
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
