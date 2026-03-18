import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { CONTACT_PHONE, CONTACT_EMAIL, OFFICE_ADDRESS, OFFICE_ADDRESS_AR } from '../../constants';
import { localizeNumber } from '../../utils/localizeNumber';
import { isValidSaudiPhone, handlePhoneInput, formatPhoneDisplay } from '../../utils/saudiPhone';
import emailjs from '@emailjs/browser';

const ContactHome: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: 'Product Repair',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [formTouched, setFormTouched] = useState(false);

    const phoneError = formTouched && (!formData.phone.trim() || !isValidSaudiPhone(formData.phone));

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormTouched(true);

        if (!formData.name.trim() || !formData.phone.trim() || !isValidSaudiPhone(formData.phone)) {
            return;
        }

        setLoading(true);

        try {
            const templateParams = {
                name: formData.name,
                email: 'N/A (Home Form)',
                number: formData.phone,
                message: formData.message,
                service: formData.service,
                DeliveryOption: 'N/A (Home Form)',
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
            setFormData({ name: '', phone: '', service: 'Product Repair', message: '' });
            setTimeout(() => setSubmitted(false), 5000);
        } catch (error) {
            console.error("EmailJS Error:", error);
            alert("Failed to send message. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact-form" className="py-32 px-6 md:px-10 bg-[linear-gradient(to_bottom_right,_var(--tw-gradient-stops))] from-white via-slate-50 to-khidmaat-red/[0.03] dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 scroll-mt-24">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-10 tracking-tighter">
                            {t('contactHome.title')} <br /><span className="khidmaat-red">{t('contactHome.titleAccent')}</span>
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-400 mb-16 max-w-lg leading-relaxed">
                            {t('contactHome.desc')}
                        </p>
                        <div className="space-y-10">
                            {[
                                { icon: Phone, label: t('contactHome.support'), val: localizeNumber(formatPhoneDisplay(CONTACT_PHONE), i18n.language) },
                                { icon: Mail, label: t('contactHome.official'), val: CONTACT_EMAIL },
                                { icon: MapPin, label: t('contactHome.hq'), val: i18n.language === 'ar' ? OFFICE_ADDRESS_AR : OFFICE_ADDRESS }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-8 group">
                                    <div className="w-16 h-16 rounded-[1.5rem] bg-white dark:bg-slate-800 shadow-md border border-slate-100 dark:border-slate-800 flex items-center justify-center text-khidmaat-red group-hover:scale-110 transition-transform duration-500">
                                        <item.icon size={28} />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] mb-1">{item.label}</div>
                                        <div className="text-xl font-bold text-slate-900 dark:text-slate-200">{item.val}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-slate-900 p-12 md:p-16 rounded-[4rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] dark:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)] border border-slate-100 dark:border-slate-800"
                    >
                        {submitted ? (
                            <div className="text-center py-20">
                                <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                                    <Send size={40} />
                                </div>
                                <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4">{t('contactHome.form.success')}</h3>
                                <p className="text-slate-500 dark:text-slate-400">{t('contactHome.form.successDesc')}</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">{t('contactHome.form.name')}</label>
                                        <input
                                            type="text"
                                            required
                                            placeholder={t('contactHome.form.namePlaceholder')}
                                            className="w-full bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl outline-none focus:ring-2 ring-khidmaat-red/20 transition-all border-none font-medium"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">{t('contactHome.form.phone')}</label>
                                        <input
                                            type="tel"
                                            required
                                            placeholder={t('contactHome.form.phonePlaceholder')}
                                            className={`w-full bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl outline-none focus:ring-2 ring-khidmaat-red/20 transition-all font-medium border-2 ${phoneError ? 'border-red-500/70' : 'border-transparent'}`}
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: handlePhoneInput(e.target.value) })}
                                            maxLength={16}
                                            dir="ltr"
                                        />
                                        {phoneError && (
                                            <p className="text-red-500 text-xs font-bold ml-2">
                                                {!formData.phone.trim() ? t('contactHome.form.phoneRequired') : t('contactHome.form.phoneInvalid')}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">{t('contactHome.form.service')}</label>
                                    <select
                                        className="w-full bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl outline-none focus:ring-2 ring-khidmaat-red/20 transition-all border-none font-bold"
                                        value={formData.service}
                                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                    >
                                        <option>{t('hero.quickServices.repair')}</option>
                                        <option>{t('hero.quickServices.install')}</option>
                                        <option>{t('hero.quickServices.buy')}</option>
                                    </select>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">{t('contactHome.form.message')}</label>
                                    <textarea
                                        rows={5}
                                        required
                                        placeholder={t('contactHome.form.messagePlaceholder')}
                                        className="w-full bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl outline-none focus:ring-2 ring-khidmaat-red/20 transition-all border-none resize-none font-medium"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-khidmaat-red text-white py-7 rounded-[2.5rem] font-black text-xl hover:shadow-[0_24px_48px_-12px_rgba(240,35,39,0.4)] transition-all flex items-center justify-center gap-4 group disabled:opacity-50"
                                >
                                    {loading ? t('contactHome.form.loading') : t('contactHome.form.submit')}
                                    {!loading && <Send size={28} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactHome;
