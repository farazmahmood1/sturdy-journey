import React from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

const LanguageSelector: React.FC = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'ar' : 'en';
        i18n.changeLanguage(newLang);
    };

    return (
        <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-khidmaat-red hover:text-white transition-all duration-300 rounded-full font-bold text-sm"
        >
            <Languages size={18} />
            <span>{i18n.language === 'en' ? 'العربية' : 'English'}</span>
        </button>
    );
};

export default LanguageSelector;
