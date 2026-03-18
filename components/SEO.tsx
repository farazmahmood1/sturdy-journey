import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BRAND_NAME, SLOGAN } from '../constants';

interface SEOProps {
    title?: string;
    description?: string;
    canonical?: string;
    ogType?: string;
    ogImage?: string;
    keywords?: string;
}

const SEO: React.FC<SEOProps> = ({
    title,
    description,
    canonical,
    ogType = 'website',
    ogImage = '/khidmaat.png',
    keywords,
}) => {
    const fullTitle = title ? `${title} | ${BRAND_NAME}` : `${BRAND_NAME} | ${SLOGAN}`;
    const defaultDescription = "Khidmaat - Premium UAE Services for repairing and installing. Certified technicians in Sharjah and Dubai.";
    const siteUrl = "https://khidmaatt.com";

    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            {keywords && <meta name="keywords" content={keywords} />}
            {canonical && <link rel="canonical" href={`${siteUrl}${canonical}`} />}

            {/* Open Graph Tags */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:type" content={ogType} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:url" content={`${siteUrl}${canonical || ''}`} />

            {/* Twitter Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description || defaultDescription} />
            <meta name="twitter:image" content={ogImage} />
        </Helmet>
    );
};

export default SEO;
