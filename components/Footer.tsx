
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { BRAND_NAME, CONTACT_EMAIL, CONTACT_PHONE, OFFICE_ADDRESS, OFFICE_ADDRESS_AR, SLOGAN, SOCIAL_LINKS } from '../constants';
import { localizeNumber } from '../utils/localizeNumber';
import { formatPhoneDisplay } from '../utils/saudiPhone';

const FacebookIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#1877F2">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24">
    <defs>
      <radialGradient id="ig-grad-ft" cx="30%" cy="107%" r="150%">
        <stop offset="0%" stopColor="#fdf497" />
        <stop offset="5%" stopColor="#fdf497" />
        <stop offset="45%" stopColor="#fd5949" />
        <stop offset="60%" stopColor="#d6249f" />
        <stop offset="90%" stopColor="#285AEB" />
      </radialGradient>
    </defs>
    <path fill="url(#ig-grad-ft)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const TikTokIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.11-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" fill="#25F4EE" transform="translate(-0.4, 0.4)"/>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.11-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" fill="#FE2C55" transform="translate(0.4, -0.4)"/>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.11-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" fill="white"/>
  </svg>
);

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();
  const logoSrc = i18n.language === 'ar' ? '/khidmaat-arabic.png' : '/khidmaat.png';
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-6 group">
            <img src={logoSrc} alt="Khidmaat Logo" className={`${i18n.language === 'ar' ? 'w-30 h-12' : 'w-32 h-10'}`} />
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            {t('footer.description')}
          </p>
          <div className="flex gap-4">
            {[
              { icon: FacebookIcon, href: SOCIAL_LINKS.facebook, label: 'Facebook' },
              { icon: InstagramIcon, href: SOCIAL_LINKS.instagram, label: 'Instagram' },
              { icon: TikTokIcon, href: SOCIAL_LINKS.tiktok, label: 'TikTok' },
            ].map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-khidmaat-red transition-colors border border-white/5">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-lg">{t('footer.services')}</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li><Link to="/services" className="hover:text-khidmaat-red transition-colors">{t('footer.serviceLinks.repair')}</Link></li>
            <li><Link to="/services" className="hover:text-khidmaat-red transition-colors">{t('footer.serviceLinks.install')}</Link></li>
            <li><Link to="/services" className="hover:text-khidmaat-red transition-colors">{t('footer.serviceLinks.accessories')}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-lg">{t('footer.quickLinks')}</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li><Link to="/about" className="hover:text-khidmaat-red transition-colors">{t('nav.about')}</Link></li>
            <li><Link to="/contact" className="hover:text-khidmaat-red transition-colors">{t('nav.contact')}</Link></li>
            <li><Link to="/contact" className="hover:text-khidmaat-red transition-colors">{t('footer.bookTechnician')}</Link></li>
            <li><Link to="/about" className="hover:text-khidmaat-red transition-colors">{t('footer.ourValues')}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-lg">{t('footer.contactUs')}</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-khidmaat-red mt-0.5 shrink-0" />
              <span>{i18n.language === 'ar' ? OFFICE_ADDRESS_AR : OFFICE_ADDRESS}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-khidmaat-red shrink-0" />
              <span dir="ltr">{localizeNumber(formatPhoneDisplay(CONTACT_PHONE), i18n.language)}</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-khidmaat-red shrink-0" />
              <span dir="ltr">{CONTACT_EMAIL}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500">
        <p>&copy; {localizeNumber(new Date().getFullYear(), i18n.language)} {BRAND_NAME}. {t('footer.rights')}</p>
        <div className="flex gap-8">
          <Link to="/privacy-policy" className="hover:text-white transition-colors">{t('footer.privacy')}</Link>
          <Link to="/terms-and-conditions" className="hover:text-white transition-colors">{t('footer.terms')}</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
