import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { CONTACT_EMAIL } from '../constants';

const SubmitSuccess: React.FC = () => {
    useEffect(() => {
        const customerInfoRaw = localStorage.getItem("customerInfo");
        const emailSentFlag = localStorage.getItem("emailSent");

        if (!customerInfoRaw || emailSentFlag === "true") return;

        const customerInfo = JSON.parse(customerInfoRaw);

        if (customerInfo && customerInfo.name && customerInfo.email) {
            emailjs.send(
                "service_0ub7p1b",
                "template_f5fvciv",
                customerInfo,
                "G4ZVOl4Xt2ttwkPn9"
            )
                .then(() => {
                    console.log("Email sent successfully!");
                    localStorage.setItem("emailSent", "true");
                })
                .catch((err) => console.error("EmailJS error:", err));
        }
    }, []);

    return (
        <div className="min-h-[80vh] flex items-center justify-center p-6">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-2xl w-full bg-slate-900 border border-slate-800 rounded-[3rem] p-12 text-center shadow-2xl"
            >
                <div className="w-24 h-24 bg-green-500/20 rounded-[2rem] flex items-center justify-center mx-auto mb-8 border-2 border-green-500/20">
                    <CheckCircle2 size={48} className="text-green-500" />
                </div>

                <h1 className="text-4xl font-black text-white mb-4">Request Received!</h1>
                <p className="text-slate-400 text-lg mb-12 max-w-md mx-auto">
                    Your service request has been successfully placed. We've sent a confirmation email to your inbox.
                </p>

                <div className="bg-slate-800/50 rounded-3xl p-8 mb-12 border border-slate-700/50">
                    <div className="flex items-center justify-center gap-3 text-khidmaat-red font-black uppercase tracking-widest text-sm mb-4">
                        <Mail size={18} />
                        Support Contact
                    </div>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-2xl font-bold text-white hover:text-khidmaat-red transition-colors">
                        {CONTACT_EMAIL}
                    </a>
                </div>

                <Link
                    to="/"
                    className="inline-flex items-center gap-3 bg-khidmaat-red hover:bg-khidmaat-red-dark text-white px-12 py-4 rounded-2xl font-black uppercase tracking-widest transition-all shadow-xl shadow-khidmaat-red/20 group"
                >
                    Back to Home
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </motion.div>
        </div>
    );
};

export default SubmitSuccess;
