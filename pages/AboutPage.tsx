
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Heart, Target, Users, Landmark, Clock, AlertTriangle, PhoneCall, History, ShieldCheck, Award, History as HistoryIcon, MapPin } from 'lucide-react';
import { BRAND_NAME, OFFICE_ADDRESS, OFFICE_ADDRESS_AR, BUSINESS_HOURS, EMERGENCY_PHONE, GOOGLE_MAPS_EMBED_URL } from '../constants';
import { localizeNumber } from '../utils/localizeNumber';
import SEO from '../components/SEO';

const AboutPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="pt-32 pb-32 bg-khidmaat-bg dark:bg-slate-950 transition-colors relative overflow-hidden">
      <SEO
        title={t('aboutPage.seo.title')}
        description={t('aboutPage.seo.description')}
        keywords="khidmaatt history, migroup uae, heritage repair uae"
        canonical="/about"
      />
      {/* Decorative Gradient Blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-khidmaat-red/[0.05] blur-[160px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-khidmaat-red/[0.03] blur-[160px] rounded-full -z-10" />

      {/* Introduction */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-khidmaat-red font-black tracking-widest uppercase text-xs mb-6 block tracking-[0.5em]">{t('aboutPage.intro.badge')}</span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-slate-900 dark:text-white mb-10 tracking-tighter leading-[0.9]">{t('aboutPage.intro.title')} <br /><span className="khidmaat-red">{t('aboutPage.intro.titleAccent')}</span></h1>
          <p className="text-2xl text-slate-500 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
            {BRAND_NAME} {t('aboutPage.intro.desc')}
          </p>
        </motion.div>
      </div>

      {/* Heritage Banner with Deep Gradient */}
      <section className="py-32 bg-slate-900 dark:bg-black relative overflow-hidden mb-32 border-y border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,_rgba(240,35,39,0.15),_transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-khidmaat-red text-[10px] font-black uppercase tracking-widest mb-10">
              <HistoryIcon size={16} />
              {t('aboutPage.heritage.badge')}
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter">{t('aboutPage.heritage.title')}</h2>
            <p className="text-slate-400 text-xl leading-relaxed mb-12">
              {t('aboutPage.heritage.desc')}
            </p>
            <div className="flex gap-8">
              <div className="text-center">
                <div className="text-4xl font-black text-white">{t('aboutPage.stats.years')}</div>
                <div className="text-[10px] font-bold text-khidmaat-red uppercase tracking-widest">{t('aboutPage.stats.yearsLabel')}</div>
              </div>
              <div className="text-center border-l border-white/10 pl-8">
                <div className="text-4xl font-black text-white">{t('aboutPage.stats.techs')}</div>
                <div className="text-[10px] font-bold text-khidmaat-red uppercase tracking-widest">{t('aboutPage.stats.techsLabel')}</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center relative">
            <div className="text-[18rem] md:text-[25rem] font-black text-white/[0.03] leading-none select-none">{localizeNumber(1990, i18n.language)}</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-48 h-48 md:w-64 md:h-64 rounded-[4rem] bg-khidmaat-red flex flex-col items-center justify-center shadow-[0_0_80px_-10px_rgba(240,35,39,0.5)]"
              >
                <span className="text-white text-5xl md:text-7xl font-black">{t('aboutPage.stats.glorious')}</span>
                <span className="text-white/80 text-[10px] font-bold uppercase tracking-widest mt-2">{t('aboutPage.stats.gloriousLabel')}</span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Values with Gradient Cards */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-32">
        {[
          { title: t('aboutPage.values.integrity.title'), desc: t('aboutPage.values.integrity.desc'), icon: ShieldCheck },
          { title: t('aboutPage.values.human.title'), desc: t('aboutPage.values.human.desc'), icon: Heart },
          { title: t('aboutPage.values.roots.title'), desc: t('aboutPage.values.roots.desc'), icon: Landmark },
          { title: t('aboutPage.values.growth.title'), desc: t('aboutPage.values.growth.desc'), icon: Award }
        ].map((value, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-12 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[3.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 text-center group bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950"
          >
            <div className="w-20 h-20 rounded-[1.8rem] bg-khidmaat-red/10 flex items-center justify-center text-khidmaat-red mb-10 mx-auto group-hover:bg-khidmaat-red group-hover:text-white transition-all duration-500 shadow-sm">
              <value.icon size={36} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-5">{value.title}</h3>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm font-medium">{value.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* HQ Presentation with Side Gradient */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="bg-gradient-to-r from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 rounded-[5rem] p-12 md:p-24 flex flex-col lg:flex-row items-center gap-24 border border-slate-100 dark:border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-khidmaat-red/[0.02] -z-10" />
          <div className="flex-1">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-khidmaat-red/10 text-khidmaat-red rounded-full text-[10px] font-black uppercase tracking-widest mb-10">
              <MapPin size={16} />
              {t('aboutPage.hq.badge')}
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-10 leading-[1.1] tracking-tighter">{t('aboutPage.hq.title')}</h2>
            <p className="text-slate-600 dark:text-slate-400 text-xl mb-16 leading-relaxed">
              {t('aboutPage.hq.desc')}
            </p>
            <div className="flex items-center gap-8">
              <div className="w-20 h-20 rounded-[2rem] bg-khidmaat-red flex items-center justify-center text-white shadow-2xl shadow-red-500/30">
                <Landmark size={32} />
              </div>
              <div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{t('aboutPage.hq.label')}</div>
                <div className="text-2xl font-black text-slate-900 dark:text-white">{i18n.language === 'ar' ? OFFICE_ADDRESS_AR : OFFICE_ADDRESS}</div>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full relative">
            <div className="absolute -inset-6 bg-khidmaat-red/5 rounded-[5rem] blur-2xl -z-10" />
            <iframe
              src={GOOGLE_MAPS_EMBED_URL}
              className="w-full h-[600px] rounded-[4.5rem] shadow-2xl border border-white/20"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Khidmaatt Location"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
