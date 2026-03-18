import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ShieldCheck, Wrench, Plug, ShoppingCart } from 'lucide-react';
import { SLOGAN } from '../../constants';
import ServiceFlowModal from '../service-flow/ServiceFlowModal';

const HERO_SLIDES = [
    {
        lightImage: "/web-images/new/khidmat_image_1_light.png",
        darkImage: "/web-images/new/khidmat_image_1_dark.png",
        title: "Precision Tech Repairs",
        category: "Gadgets & IT"
    },
    {
        lightImage: "/web-images/new/khidmat_image_2_light.png",
        darkImage: "/web-images/new/khidmat_image_2_dark.png",
        title: "Professional Installation",
        category: "Smart Home & Appliances"
    },
    {
        lightImage: "/web-images/new/khidmat_image_3_light.png",
        darkImage: "/web-images/new/khidmat_image_3_dark.png",
        title: "Advanced AC Services",
        category: "Climate Control"
    }
];

const QUICK_SERVICES: { titleKey: string; icon: any; flow: 'repair' | 'install' | 'buy' }[] = [
    { titleKey: "hero.quickServices.repair", icon: Wrench, flow: "repair" },
    { titleKey: "hero.quickServices.install", icon: Plug, flow: "install" },
    { titleKey: "hero.quickServices.buy", icon: ShoppingCart, flow: "buy" },
];

const Hero: React.FC = () => {
    const { t } = useTranslation();
    const [heroIndex, setHeroIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeFlow, setActiveFlow] = useState<'repair' | 'install' | 'buy' | null>(null);

    const nextHero = useCallback(() => {
        setHeroIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, []);

    useEffect(() => {
        const heroInterval = setInterval(nextHero, 10000);
        return () => clearInterval(heroInterval);
    }, [nextHero]);

    const handleServiceClick = (flow: 'repair' | 'install' | 'buy') => {
        setActiveFlow(flow);
        setIsModalOpen(true);
    };

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">
            {/* Background Image Slider */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={heroIndex}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
                        className="absolute inset-0"
                    >
                        <img
                            src={HERO_SLIDES[heroIndex].lightImage}
                            alt={HERO_SLIDES[heroIndex].title}
                            className="w-full h-full object-cover dark:hidden"
                        />
                        <img
                            src={HERO_SLIDES[heroIndex].darkImage}
                            alt={HERO_SLIDES[heroIndex].title}
                            className="hidden w-full h-full object-cover dark:block"
                        />
                        {/* Improved Overlay for Readability */}
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30" />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Pagination Indicators */}
            <div className="absolute bottom-12 right-12 flex gap-3 z-30">
                {HERO_SLIDES.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setHeroIndex(idx)}
                        className={`transition-all duration-500 rounded-full ${heroIndex === idx ? 'w-12 h-2 bg-khidmaat-red' : 'w-2 h-2 bg-white/30 hover:bg-white/60'
                            }`}
                    />
                ))}
            </div>

            {/* Content Container */}
            <div className="relative z-20 max-w-7xl mx-auto w-full px-6 md:px-10 pt-32 pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-7"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-khidmaat-red/20 text-khidmaat-red rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-khidmaat-red/20 backdrop-blur-sm">
                            <ShieldCheck size={12} className="text-khidmaat-red" />
                            <span className="text-white">{t('hero.badge')}</span>
                        </div>
                        <AnimatePresence mode="wait">
                            <motion.h1
                                key={`headline-${heroIndex}`}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -40 }}
                                transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                                className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] mb-8 tracking-tighter"
                            >
                                {t(`hero.headlines.${heroIndex}.line1`)} <br />
                                <span className="text-khidmaat-red">{t(`hero.headlines.${heroIndex}.line2`)}</span> <br />
                                {t(`hero.headlines.${heroIndex}.line3`)}
                            </motion.h1>
                        </AnimatePresence>

                        {/* Active Slide Info */}
                        <motion.div
                            key={heroIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mb-8"
                        >
                            <span className="text-khidmaat-red font-bold uppercase tracking-widest text-xs">
                                {heroIndex === 0 && t('hero.slides.repair.category')}
                                {heroIndex === 1 && t('hero.slides.install.category')}
                                {heroIndex === 2 && t('hero.slides.ac.category')}
                            </span>
                            <h2 className="text-2xl md:text-3xl font-bold text-white/90 mt-1">
                                {heroIndex === 0 && t('hero.slides.repair.title')}
                                {heroIndex === 1 && t('hero.slides.install.title')}
                                {heroIndex === 2 && t('hero.slides.ac.title')}
                            </h2>
                        </motion.div>

                        <AnimatePresence mode="wait">
                            <motion.p
                                key={`desc-${heroIndex}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                                className="text-lg md:text-xl text-slate-300 mb-12 max-w-lg leading-relaxed font-medium"
                            >
                                {t(`hero.descriptions.${heroIndex}`)}
                            </motion.p>
                        </AnimatePresence>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="lg:col-span-5 bg-white/10 backdrop-blur-xl rounded-[2.5rem] shadow-2xl p-10 max-w-[420px] border border-white/10 relative group lg:ml-auto"
                    >
                        <h3 className="text-3xl font-bold text-white mb-10 text-center">{t('hero.quickServicesTitle')}</h3>
                        <div className="flex flex-col">
                            {QUICK_SERVICES.map((item, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleServiceClick(item.flow)}
                                    className="flex items-center justify-between group py-5 border-b border-white/10 last:border-0 hover:bg-white/5 rounded-xl px-2 -mx-2 transition-all w-full"
                                >
                                    <div className="flex items-center gap-6">
                                        <div className="text-white/60 group-hover:text-khidmaat-red transition-colors duration-300">
                                            <item.icon size={30} />
                                        </div>
                                        <span className="text-white font-semibold text-xl">{t(item.titleKey)}</span>
                                    </div>
                                    <ArrowRight size={22} className="text-khidmaat-red opacity-0 group-hover:translate-x-1 group-hover:opacity-100 transition-all duration-300" />
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Service Flow Modal */}
            <ServiceFlowModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                initialFlow={activeFlow}
            />
        </section>
    );
};

export default Hero;
