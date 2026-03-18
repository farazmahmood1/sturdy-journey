
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin, Send, MessageSquare, Clock, AlertTriangle, PhoneCall, ChevronRight } from 'lucide-react';
import { CONTACT_EMAIL, CONTACT_PHONE, OFFICE_ADDRESS, OFFICE_ADDRESS_AR, SERVICES, BUSINESS_HOURS, EMERGENCY_PHONE, GOOGLE_MAPS_EMBED_URL } from '../constants';
import emailjs from '@emailjs/browser';
import SEO from '../components/SEO';
import { localizeNumber } from '../utils/localizeNumber';
import { isValidSaudiPhone, handlePhoneInput, formatPhoneDisplay } from '../utils/saudiPhone';

const ContactPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [formTouched, setFormTouched] = useState(false);

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const errors = {
    name: formTouched && !formData.name.trim(),
    phone: formTouched && (!formData.phone.trim() || !isValidSaudiPhone(formData.phone)),
    email: formTouched && (!formData.email.trim() || !isValidEmail(formData.email)),
  };

  // Normalize phone for WhatsApp
  const cleanPhone = CONTACT_PHONE.replace(/\D/g, '');
  const waPhone = cleanPhone.startsWith('0') ? '971' + cleanPhone.substring(1) : cleanPhone;
  const waLink = `https://wa.me/${waPhone}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormTouched(true);

    if (!formData.name.trim() || !formData.phone.trim() || !isValidSaudiPhone(formData.phone) || !formData.email.trim() || !isValidEmail(formData.email)) {
      return;
    }

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        number: formData.phone,
        message: formData.message,
        service: t(`servicesSection.cards.${formData.service}.title`) || formData.service || 'General Inquiry',
        DeliveryOption: 'N/A (Contact Form)',
        paymentStatus: 'Contact Request'
      };

      await emailjs.send(
        "service_0ub7p1b",
        "template_f5fvciv",
        templateParams,
        "G4ZVOl4Xt2ttwkPn9"
      );

      setSubmitted(true);
      setFormTouched(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert(t('contactPage.form.error') || "Failed to send message. Please try again or call us directly.");
    }
  };

  return (
    <div className="pt-32 pb-32 relative bg-khidmaat-bg dark:bg-slate-950 transition-colors">
      <SEO
        title={t('contactPage.seo.title')}
        description={t('contactPage.seo.description')}
        keywords="contact khidmaatt, sharjah technical support, dubai repair contact"
        canonical="/contact"
      />
      {/* Decorative Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-khidmaat-red/[0.05] blur-[150px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-khidmaat-red font-black tracking-widest uppercase text-xs mb-6 block tracking-[0.4em]">{t('contactPage.intro.badge')}</span>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white mb-10 tracking-tighter leading-[0.9]">{t('contactPage.intro.title')} <br /><span className="khidmaat-red">{t('contactPage.intro.titleAccent')}</span></h1>
            <p className="text-2xl text-slate-500 dark:text-slate-400 mb-16 leading-relaxed font-medium">
              {t('contactPage.intro.desc')}
            </p>

            <div className="space-y-10 mb-16">
              {[
                { label: t('contactPage.contacts.support'), value: localizeNumber(formatPhoneDisplay(CONTACT_PHONE), i18n.language), icon: Phone, action: `tel:${CONTACT_PHONE}` },
                { label: t('contactPage.contacts.correspondence'), value: CONTACT_EMAIL, icon: Mail, action: `mailto:${CONTACT_EMAIL}` },
                { label: t('contactPage.contacts.office'), value: i18n.language === 'ar' ? OFFICE_ADDRESS_AR : OFFICE_ADDRESS, icon: MapPin, action: '#' }
              ].map((item, idx) => (
                <a key={idx} href={item.action} className="flex gap-8 items-center group">
                  <div className="w-16 h-16 rounded-[1.5rem] bg-khidmaat-red flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-[0_20px_40px_-10px_rgba(240,35,39,0.3)]">
                    <item.icon size={28} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] mb-1">{item.label}</div>
                    <div className="text-xl font-black text-slate-900 dark:text-slate-200 group-hover:text-khidmaat-red transition-colors duration-300" dir="ltr">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* WhatsApp Premium Widget */}

          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-[4rem] shadow-[0_64px_128px_-32px_rgba(0,0,0,0.15)] dark:shadow-[0_64px_128px_-32px_rgba(0,0,0,0.6)] border border-slate-100 dark:border-slate-800"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-20">
                <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mb-10 shadow-xl">
                  <Send size={48} />
                </div>
                <h3 className="text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter">{t('contactPage.form.success')}</h3>
                <p className="text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-sm mx-auto">{t('contactPage.form.successDesc')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-2">{t('contactPage.form.name')}</label>
                    <input
                      type="text"
                      placeholder={t('contactPage.form.namePlaceholder')}
                      className={`w-full bg-slate-50 dark:bg-slate-800 dark:text-white rounded-[1.2rem] p-4 focus:ring-4 ring-khidmaat-red/10 outline-none transition-all placeholder:dark:text-slate-600 font-bold border-2 ${errors.name ? 'border-red-500/70' : 'border-transparent'}`}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    {errors.name && <p className="text-red-500 text-xs font-bold ml-2">Full name is required.</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-2">{t('contactPage.form.phone')}</label>
                    <input
                      type="tel"
                      placeholder={t('contactPage.form.phonePlaceholder')}
                      className={`w-full bg-slate-50 dark:bg-slate-800 dark:text-white rounded-[1.2rem] p-4 focus:ring-4 ring-khidmaat-red/10 outline-none transition-all placeholder:dark:text-slate-600 font-bold border-2 ${errors.phone ? 'border-red-500/70' : 'border-transparent'}`}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: handlePhoneInput(e.target.value) })}
                      maxLength={16}
                      dir="ltr"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs font-bold ml-2">
                        {!formData.phone.trim() ? t('contactPage.form.phoneRequired') || 'Phone number is required.' : t('contactPage.form.phoneInvalid')}
                      </p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-2">{t('contactPage.form.email')}</label>
                  <input
                    type="email"
                    placeholder={t('contactPage.form.emailPlaceholder')}
                    className={`w-full bg-slate-50 dark:bg-slate-800 dark:text-white rounded-[1.2rem] p-4 focus:ring-4 ring-khidmaat-red/10 outline-none transition-all placeholder:dark:text-slate-600 font-bold border-2 ${errors.email ? 'border-red-500/70' : 'border-transparent'}`}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs font-bold ml-2">
                      {!formData.email.trim() ? 'Email address is required.' : 'Please enter a valid email address.'}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-2">{t('contactPage.form.service')}</label>
                  <select
                    className="w-full bg-slate-50 dark:bg-slate-800 dark:text-white border-none rounded-[1.2rem] p-4 focus:ring-4 ring-khidmaat-red/10 outline-none transition-all font-bold"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option value="" className="dark:bg-slate-800">{t('contactPage.form.servicePlaceholder')}</option>
                    {SERVICES.map(s => <option key={s.id} value={s.id} className="dark:bg-slate-800">{t(`servicesSection.cards.${s.id}.title`)}</option>)}
                    <option value="other" className="dark:bg-slate-800">{t('contactPage.form.other')}</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-2">{t('contactPage.form.message')}</label>
                  <textarea
                    rows={4}
                    placeholder={t('contactPage.form.messagePlaceholder')}
                    className="w-full bg-slate-50 dark:bg-slate-800 dark:text-white border-none rounded-[1.2rem] p-4 focus:ring-4 ring-khidmaat-red/10 outline-none transition-all resize-none placeholder:dark:text-slate-600 font-bold"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-khidmaat-red text-white py-5 rounded-[2rem] font-black text-2xl hover:shadow-[0_32px_64px_-16px_rgba(240,35,39,0.4)] transition-all flex items-center justify-center gap-4 group active:scale-95"
                >
                  {t('contactPage.form.submit')}
                  <Send size={28} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>
        </div>

        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-8 bg-green-500/10 dark:bg-green-500/5 p-8 rounded-[3rem] border border-green-500/20 group hover:bg-green-500/15 transition-all duration-500 mt-20"
        >
          <div className="w-16 h-16 rounded-[1.8rem] bg-green-500 flex items-center justify-center text-white shadow-2xl shadow-green-500/30 group-hover:rotate-12 transition-transform duration-500">
            <MessageSquare size={30} />
          </div>
          <div>
            <h4 className="text-xl font-black text-slate-900 dark:text-white mb-1">{t('contactPage.whatsapp.title')}</h4>
            <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">{t('contactPage.whatsapp.desc')}</p>
          </div>
        </a>

        {/* Quick Access Grid - Moved to separate section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3.5rem] border border-slate-100 dark:border-slate-800 shadow-sm bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-950">
            <h4 className="font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
              <Clock className="khidmaat-red" size={24} />
              {t('contactPage.windows.service.title')}
            </h4>
            <div className="space-y-5">
              {BUSINESS_HOURS.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center text-sm border-b border-slate-100 dark:border-slate-800 pb-3 last:border-0 last:pb-0">
                  <span className="text-slate-500 dark:text-slate-400 font-bold">{t(`contactPage.windows.service.${item.dayKey}`)}</span>
                  <span className="text-slate-900 dark:text-slate-200 font-black">{localizeNumber(item.hours, i18n.language)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 dark:bg-black p-10 rounded-[3.5rem] text-white flex flex-col justify-center border-b-8 border-khidmaat-red shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-khidmaat-red/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-khidmaat-red/20 transition-all duration-500" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="text-khidmaat-red" size={24} />
                <span className="font-black text-[10px] uppercase tracking-widest text-khidmaat-red">{t('contactPage.windows.priority.badge')}</span>
              </div>
              <p className="text-sm text-slate-400 mb-8 leading-relaxed">
                {t('contactPage.windows.priority.desc')}
              </p>
              <a
                href={`tel:${EMERGENCY_PHONE}`}
                className="inline-flex items-center gap-3 text-khidmaat-red font-black text-lg hover:translate-x-2 transition-transform"
              >
                {t('contactPage.windows.priority.cta')}
                <ChevronRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section with Glass Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-32 relative">
        <div className="h-[650px] w-full rounded-[4.5rem] overflow-hidden bg-slate-200 dark:bg-slate-800 shadow-2xl relative group/map border border-slate-100 dark:border-slate-800">
          <iframe
            src={GOOGLE_MAPS_EMBED_URL}
            className="w-full h-full border-0 absolute inset-0 transition-opacity duration-700 opacity-90 group-hover/map:opacity-100 dark:invert-[0.9] dark:hue-rotate-[180deg]"
            allowFullScreen
            loading="lazy"
            title="Khidmaat Office Location"
          ></iframe>

          {/* Enhanced Map Overlay Badge */}
          <div className="absolute top-12 left-12 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl p-8 rounded-[3rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)] border border-white/40 dark:border-slate-800 pointer-events-none transition-all duration-700 group-hover/map:scale-105 group-hover/map:translate-y-4">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-[1.8rem] bg-khidmaat-red flex items-center justify-center text-white shadow-xl shadow-red-500/30">
                <MapPin size={32} />
              </div>
              <div>
                <p className="text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-none mb-1">{t('contactPage.map.title')}</p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-[0.4em]">{i18n.language === 'ar' ? OFFICE_ADDRESS_AR : OFFICE_ADDRESS}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
