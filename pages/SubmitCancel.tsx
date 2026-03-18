import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const SubmitCancel: React.FC = () => {
    return (
        <div className="min-h-[80vh] flex items-center justify-center p-6">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-2xl w-full bg-slate-900 border border-slate-800 rounded-[3rem] p-12 text-center shadow-2xl"
            >
                <div className="w-24 h-24 bg-red-500/20 rounded-[2rem] flex items-center justify-center mx-auto mb-8 border-2 border-red-500/20">
                    <XCircle size={48} className="text-red-500" />
                </div>

                <h1 className="text-4xl font-black text-white mb-4">Payment Cancelled</h1>
                <p className="text-slate-400 text-lg mb-12 max-w-md mx-auto">
                    Your payment process was cancelled. No charges were made. You can try again or choose a different payment method.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        to="/"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-slate-800 hover:bg-slate-700 text-white px-12 py-4 rounded-2xl font-black uppercase tracking-widest transition-all border border-slate-700"
                    >
                        <ArrowLeft size={20} />
                        Back to Home
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default SubmitCancel;
