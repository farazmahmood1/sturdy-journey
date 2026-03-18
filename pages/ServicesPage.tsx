import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SERVICES } from '../constants.tsx';
import SEO from '../components/SEO';
import { Check, ArrowRight, ShieldCheck } from 'lucide-react';
import ServiceFlowModal from '../components/service-flow/ServiceFlowModal';

const ServicesPage: React.FC = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrolledFlow, setScrolledFlow] = useState<'repair' | 'install' | 'buy' | null>(null);

  const handleOpenModal = (flowId: string) => {
    const flowMap: any = {
      'repair': 'repair',
      'install': 'install',
      'accessories': 'buy'
    };
    setScrolledFlow(flowMap[flowId] || null);
    setIsModalOpen(true);
  };

  return (
    <div className="pt-32 pb-32 bg-khidmaat-bg dark:bg-slate-950 transition-colors relative overflow-hidden">
      <SEO
        title={t('nav.services')}
        description={t('servicesPage.header.description')}
        keywords="ac repair sharjah, mobile repair uae, appliance installation"
        canonical="/services"
      />
      {/* Dynamic Background Accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-khidmaat-red/[0.04] blur-[180px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-khidmaat-red/[0.02] blur-[180px] rounded-full -z-10" />

      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <span className="text-khidmaat-red font-black tracking-widest uppercase text-xs mb-6 block tracking-[0.4em]">{t('servicesPage.header.badge')}</span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-slate-900 dark:text-white mb-10 tracking-tighter leading-[0.9]">
            {t('servicesPage.header.title')} <br /><span className="khidmaat-red">{t('servicesPage.header.titleAccent')}</span>
          </h1>
          <p className="text-2xl text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
            {t('servicesPage.header.description')}
          </p>
        </motion.div>
      </div>

      {/* Services Breakdown */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-48">
        {SERVICES.map((service, idx) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 lg:gap-32 items-center`}
          >
            <div className="flex-1 w-full relative group">
              <div className="absolute -inset-8 bg-gradient-to-br from-khidmaat-red/10 to-transparent rounded-[5rem] -z-10 opacity-60" />
              <div className="relative rounded-[4.5rem] overflow-hidden shadow-2xl border border-white/20">
                <img
                  src={`${service.image}`}
                  alt={t(`servicesSection.cards.${service.id}.title`)}
                  className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
              </div>

              {/* Floating Badge on Image */}
              <div className="absolute -bottom-6 -right-6 lg:bottom-12 lg:-right-12 bg-white dark:bg-slate-900 p-8 rounded-[3rem] shadow-2xl border border-slate-100 dark:border-slate-800 z-10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-khidmaat-red/10 flex items-center justify-center text-khidmaat-red">
                  <ShieldCheck size={24} />
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t('servicesPage.serviceGrade')}</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">{t('servicesPage.authorizedPartner')}</div>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <div className="w-20 h-20 bg-khidmaat-red/10 dark:bg-khidmaat-red/20 rounded-[2rem] flex items-center justify-center text-khidmaat-red mb-12 shadow-sm">
                {service.icon}
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-10 leading-[1.05] tracking-tighter">{t(`servicesSection.cards.${service.id}.title`)}</h2>
              <p className="text-slate-600 dark:text-slate-400 text-xl leading-relaxed mb-12 font-medium">
                {t(`servicesPage.longDescriptions.${service.id}`)}
              </p>

              <div className="space-y-4 mb-16">
                {(t(`servicesPage.highlights.${service.id}`, { returnObjects: true }) as string[]).map((item: string, i: number) => (
                  <div key={i} className="flex items-center gap-5 text-slate-800 dark:text-slate-200 font-bold group">
                    <div className="w-10 h-10 rounded-2xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-green-600 border border-slate-100 dark:border-slate-800 group-hover:bg-khidmaat-red group-hover:text-white group-hover:border-khidmaat-red transition-all duration-300 shrink-0">
                      <Check size={20} />
                    </div>
                    {item}
                  </div>
                ))}
              </div>

              <button
                onClick={() => handleOpenModal(service.id)}
                className="inline-flex items-center gap-4 bg-khidmaat-red text-white px-12 py-6 rounded-[2.5rem] font-black text-xl hover:shadow-[0_24px_48px_-12px_rgba(240,35,39,0.4)] transition-all hover:-translate-y-1 group"
              >
                {t('servicesPage.requestService')}
                <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <ServiceFlowModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialFlow={scrolledFlow}
      />
    </div>
  );
};

export default ServicesPage;
