import React from 'react';
import { MapPin } from 'lucide-react';
import { GOOGLE_MAPS_EMBED_URL } from '../../constants';

const MapSection: React.FC = () => {
    return (
        <section className="h-[650px] w-full relative group/map">
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-50 dark:from-slate-950 to-transparent z-10" />
            <iframe
                src={GOOGLE_MAPS_EMBED_URL}
                className="w-full h-full border-0 grayscale-[40%] hover:grayscale-0 transition-all duration-1000 dark:invert-[0.9] dark:hue-rotate-[180deg]"
                allowFullScreen
                loading="lazy"
                title="Office Location"
            ></iframe>
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md px-10 py-5 rounded-full shadow-2xl border border-white/20 pointer-events-none group-hover/map:translate-y-4 group-hover/map:opacity-0 transition-all duration-500">
                <div className="flex items-center gap-4">
                    <MapPin className="text-khidmaat-red" size={24} />
                    <span className="font-black text-slate-900 dark:text-white uppercase tracking-widest text-xs">Oneway Electronics - Industrial Area 6, Sharjah</span>
                </div>
            </div>
        </section>
    );
};

export default MapSection;
