import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    X, ChevronLeft, ChevronRight, Check,
    Wrench, Plug, ShoppingCart,
    Search, Shield, CheckCircle2, Clock,
    Phone, MapPin, CreditCard, Wallet
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

// Import Static Data
import repairCategories from '../../static/Repairmyproduct/MobileRepair/RepairMyProduct';
import repairOptions from '../../static/Repairmyproduct/MobileRepair/RepairOptions';
import { DEVICE_CONFIG } from '../../static/DeviceConfig';

import { INSTALL_MY_PRODUCT_SERVICES } from '../../static/InstallMyProductServices';
import { BUY_ACCESSORIES } from '../../static/BuyAccessories';
import { localizeNumber } from '../../utils/localizeNumber';
import { isValidSaudiPhone, handlePhoneInput } from '../../utils/saudiPhone';

interface ServiceFlowModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialFlow: 'repair' | 'install' | 'buy' | null;
}

const BASE_URL = 'https://vigilant-rotary-phone-two.vercel.app';

const ServiceFlowModal: React.FC<ServiceFlowModalProps> = ({ isOpen, onClose, initialFlow }) => {
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const [currentStep, setCurrentStep] = useState(1);
    const [flow, setFlow] = useState(initialFlow);
    const [loading, setLoading] = useState(false);
    const [stepLoading, setStepLoading] = useState(false);

    // Selection States
    const [selections, setSelections] = useState<any>({
        repairCategory: null,
        productType: null,
        brandName: '',
        services: [],
        deliveryOption: null,
        city: null,
        installCategory: null,
        installService: null,
        installServices: [],
        accessoriesCategory: null,
        accessoriesType: null,
        accessoriesModel: null,
        accessoriesOptions: []
    });

    const [customerInfo, setCustomerInfo] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    });

    const [searchTerm, setSearchTerm] = useState('');
    const [formTouched, setFormTouched] = useState(false);

    // Reset state when modal opens/changes flow
    useEffect(() => {
        if (isOpen) {
            setFlow(initialFlow);
            setCurrentStep(1);
            setSelections({
                repairCategory: null,
                productType: null,
                brandName: '',
                issueDescription: '',
                services: [],
                deliveryOption: null,
                city: null,
                installCategory: null,
                installService: null,
                installServices: [],
                accessoriesCategory: null,
                accessoriesType: null,
                accessoriesModel: null,
                accessoriesOptions: []
            });
            setCustomerInfo({
                name: '',
                email: '',
                phone: '',
                address: ''
            });
            setStepLoading(false);
            setFormTouched(false);
        }
    }, [isOpen, initialFlow]);

    // Clear step loading after brief delay to show skeleton
    useEffect(() => {
        if (stepLoading) {
            const timer = setTimeout(() => setStepLoading(false), 350);
            return () => clearTimeout(timer);
        }
    }, [stepLoading]);

    // Simulated live user counter — realistic drift within a range
    const [liveUsers, setLiveUsers] = useState(() => Math.floor(Math.random() * 18) + 14);
    useEffect(() => {
        if (!isOpen) return;
        const interval = setInterval(() => {
            setLiveUsers(prev => {
                const delta = Math.random() < 0.5 ? -1 : 1;
                return Math.max(8, Math.min(38, prev + delta));
            });
        }, 4000 + Math.random() * 3000);
        return () => clearInterval(interval);
    }, [isOpen]);

    if (!isOpen) return null;

    const handleBack = () => {
        if (currentStep > 1) {
            setStepLoading(true);
            setCurrentStep(currentStep - 1);
        } else {
            onClose();
        }
    };

    const handleNext = () => {
        setStepLoading(true);
        setCurrentStep(currentStep + 1);
    };

    const selectItem = (key: string, value: any, nextStep = true) => {
        setSelections((prev: any) => ({ ...prev, [key]: value }));
        if (nextStep) {
            setStepLoading(true);
            setCurrentStep((prev) => prev + 1);
        }
    };

    const toggleMultiSelect = (key: string, value: any) => {
        setSelections((prev: any) => {
            const current = prev[key] || [];
            if (current.includes(value)) {
                return { ...prev, [key]: current.filter((i: any) => i !== value) };
            } else {
                return { ...prev, [key]: [...current, value] };
            }
        });
    };

    const getFlowTitle = () => {
        switch (flow) {
            case 'repair': return t('modal.flowTitles.repair');
            case 'install': return t('modal.flowTitles.install');
            case 'buy': return t('modal.flowTitles.buy');
            default: return t('modal.flowTitles.select');
        }
    };

    const buildServiceMessage = () => {
        switch (flow) {
            case 'repair':
                return `Device: ${selections.repairCategory}\nProduct Type: ${selections.productType}\nBrand: ${selections.brandName || 'Not specified'}\nIssue: ${selections.issueDescription || 'Not specified'}\nDelivery: ${selections.deliveryOption === 'center' ? `Visit ${selections.city}` : 'Home Pickup'}`;
            case 'install':
                return `Category: ${selections.installCategory}\nServices: ${selections.installServices?.join(', ') || 'Not specified'}`;
            case 'buy':
                return `Category: ${selections.accessoriesCategory}\nType: ${selections.accessoriesType?.name}\nModel: ${selections.accessoriesModel?.name}`;
            default:
                return "No details available";
        }
    };

    const handlePayLater = async () => {
        setLoading(true);
        const templateParams = {
            name: customerInfo.name,
            email: customerInfo.email,
            number: customerInfo.phone,
            address: customerInfo.address,
            message: buildServiceMessage(),
            DeliveryOption: selections.deliveryOption === 'home' ? "Home/Office Pickup" : (selections.city ? `${selections.city} Center` : "Not selected"),
            paymentStatus: "Pending",
        };

        try {
            await emailjs.send(
                "service_0ub7p1b",
                "template_f5fvciv",
                templateParams,
                "G4ZVOl4Xt2ttwkPn9"
            );
            localStorage.removeItem("serviceData");
            navigate("/submit-success");
            onClose();
        } catch (error) {
            alert("Failed to send request. Please try again.");
            console.error("EmailJS Error:", error);
        } finally {
            setLoading(false);
        }
    };

    const handlePayOnline = async () => {
        const needsAddress = !(flow === 'repair' && selections.deliveryOption === 'center');
        if (!customerInfo.name || !customerInfo.email || !customerInfo.phone || (needsAddress && !customerInfo.address)) {
            alert("Please fill in all customer details.");
            return;
        }

        setLoading(true);
        try {
            const fullCustomerInfo = {
                name: customerInfo.name,
                email: customerInfo.email,
                number: customerInfo.phone,
                address: customerInfo.address,
                message: buildServiceMessage(),
                DeliveryOption: selections.deliveryOption === 'home' ? "Home/Office Pickup" : (selections.city ? `${selections.city} Center` : "Not selected"),
                paymentStatus: "Paid"
            };
            localStorage.setItem("customerInfo", JSON.stringify(fullCustomerInfo));

            const res = await fetch(`${BASE_URL}/payment/create-session`, {
                
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    customer: {
                        name: customerInfo.name,
                        email: customerInfo.email,
                        phone: customerInfo.phone,
                        address: customerInfo.address,
                    },
                    service: {
                        serviceType: { serviceName: getFlowTitle() },
                        ...selections,
                        deliveryOption: selections.deliveryOption,
                        selectedCity: selections.city,
                        message: buildServiceMessage(),
                    },
                }),
            });

            const data = await res.json();
            if (data.success && data.url) {
                window.location.href = data.url;
            } else {
                alert("Failed to create payment session");
            }
        } catch (err) {
            console.error("Stripe error:", err);
            alert("Payment error. Try again.");
        } finally {
            setLoading(false);
        }
    };

    const renderCustomerDetails = () => {
        const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        const needsAddress = !(flow === 'repair' && selections.deliveryOption === 'center');
        const errors = {
            name: formTouched && !customerInfo.name.trim(),
            email: formTouched && (!customerInfo.email.trim() || !isValidEmail(customerInfo.email)),
            phone: formTouched && (!customerInfo.phone.trim() || !isValidSaudiPhone(customerInfo.phone)),
            address: formTouched && needsAddress && !customerInfo.address.trim(),
        };
        const errorInputClass = 'border-red-500/70 ring-2 ring-red-500/20';
        const baseInputClass = 'w-full bg-slate-50 dark:bg-slate-800/50 border rounded-xl py-3 px-5 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-khidmaat-red/50 transition-colors';

        const handleReviewOrder = () => {
            setFormTouched(true);
            if (customerInfo.name.trim() && isValidEmail(customerInfo.email) && customerInfo.phone.trim() && isValidSaudiPhone(customerInfo.phone) && (!needsAddress || customerInfo.address.trim())) {
                setFormTouched(false);
                handleNext();
            }
        };

        return (
            <div className="max-w-xl mx-auto space-y-5">
                <div className="text-center mb-4">
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-1">{t('modal.customer.title')}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">{t('modal.customer.desc')}</p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-1.5">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">{t('modal.customer.fullName')}</label>
                        <input
                            type="text"
                            placeholder={t('modal.customer.namePlaceholder')}
                            className={`${baseInputClass} ${errors.name ? errorInputClass : 'border-slate-200 dark:border-slate-700'}`}
                            value={customerInfo.name}
                            onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                        />
                        {errors.name && <p className="text-red-400 text-xs ml-4">{t('modal.customer.nameRequired')}</p>}
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">{t('modal.customer.email')}</label>
                        <input
                            type="email"
                            placeholder={t('modal.customer.emailPlaceholder')}
                            className={`${baseInputClass} ${errors.email ? errorInputClass : 'border-slate-200 dark:border-slate-700'}`}
                            value={customerInfo.email}
                            onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                        />
                        {errors.email && (
                            <p className="text-red-400 text-xs ml-4">
                                {!customerInfo.email.trim() ? t('modal.customer.emailRequired') : t('modal.customer.emailInvalid')}
                            </p>
                        )}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">{t('modal.customer.phone')}</label>
                            <input
                                type="tel"
                                placeholder={t('modal.customer.phonePlaceholder')}
                                className={`${baseInputClass} ${errors.phone ? errorInputClass : 'border-slate-200 dark:border-slate-700'}`}
                                value={customerInfo.phone}
                                onChange={(e) => setCustomerInfo({ ...customerInfo, phone: handlePhoneInput(e.target.value) })}
                                maxLength={16}
                                dir="ltr"
                            />
                            {errors.phone && (
                                <p className="text-red-400 text-xs ml-4">
                                    {!customerInfo.phone.trim() ? t('modal.customer.phoneRequired') : t('modal.customer.phoneInvalid')}
                                </p>
                            )}
                        </div>
                        {flow === 'repair' && (
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">{t('modal.customer.brandName')} <span className="text-slate-600">{t('modal.customer.optional')}</span></label>
                                <input
                                    type="text"
                                    placeholder={t('modal.customer.brandPlaceholder')}
                                    className={`${baseInputClass} border-slate-200 dark:border-slate-700`}
                                    value={selections.brandName}
                                    onChange={(e) => setSelections((prev: any) => ({ ...prev, brandName: e.target.value }))}
                                />
                            </div>
                        )}
                    </div>
                    {needsAddress && (
                        <div className="space-y-1.5">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">{t('modal.customer.address')}</label>
                            <textarea
                                placeholder={t('modal.customer.addressPlaceholder')}
                                rows={2}
                                className={`${baseInputClass} ${errors.address ? errorInputClass : 'border-slate-200 dark:border-slate-700'}`}
                                value={customerInfo.address}
                                onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                            />
                            {errors.address && <p className="text-red-400 text-xs ml-4">{t('modal.customer.addressRequired')}</p>}
                        </div>
                    )}
                </div>

                {formTouched && (errors.name || errors.email || errors.phone || errors.address) && (
                    <p className="text-red-400 text-sm text-center font-bold">{t('modal.customer.fillRequired')}</p>
                )}

                <div className="mt-6 flex justify-center">
                    <button
                        onClick={handleReviewOrder}
                        className="bg-khidmaat-red hover:bg-khidmaat-red-dark text-white px-14 py-3.5 rounded-2xl font-black uppercase tracking-widest transition-all shadow-2xl shadow-khidmaat-red/30"
                    >
                        {t('modal.customer.reviewOrder')}
                    </button>
                </div>
            </div>
        );
    };

    const renderSummary = () => {
        return (
            <div className="max-w-2xl mx-auto space-y-5 pb-4">
                <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border-2 border-green-500/20">
                        <Shield size={32} className="text-green-500" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-1">{t('modal.summary.title')}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">{t('modal.summary.desc')}</p>
                </div>

                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
                    <div className="bg-khidmaat-red/5 px-6 py-4 border-b border-slate-200 dark:border-slate-800">
                        <h4 className="text-xs font-black uppercase tracking-[0.3em] text-khidmaat-red mb-2">{t('modal.summary.selectedItems')}</h4>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {flow === 'repair' && (
                                <>
                                    <SummaryTag label={t('modal.summary.device')} value={t(`modal.devices.${selections.repairCategory}`, { defaultValue: selections.repairCategory })} />
                                    <SummaryTag label={selections.repairCategory === 'Mobile Repair' ? t('modal.summary.brand') : t('modal.summary.type')} value={t(`modal.productTypes.${selections.productType}`, { defaultValue: selections.productType })} />
                                    {selections.repairCategory !== 'Mobile Repair' && selections.brandName && <SummaryTag label={t('modal.summary.brand')} value={selections.brandName} />}
                                    <SummaryTag label={t('modal.summary.issue')} value={selections.issueDescription} color="red" />
                                    <SummaryTag label={t('modal.summary.delivery')} value={selections.deliveryOption === 'center' ? `${t('modal.summary.visit')} ${selections.city}` : t('modal.summary.homePickup')} color="green" />
                                </>
                            )}
                            {flow === 'install' && (
                                <>
                                    <SummaryTag label={t('modal.summary.category')} value={t(`modal.installCategories.${selections.installCategory}`, { defaultValue: selections.installCategory })} />
                                    {selections.installServices?.map((s: string, i: number) => (
                                        <SummaryTag key={i} label={t('modal.summary.service')} value={s} color="red" />
                                    ))}
                                </>
                            )}
                            {flow === 'buy' && (
                                <>
                                    <SummaryTag label={t('modal.summary.category')} value={t(`modal.buyCategories.${selections.accessoriesCategory}`, { defaultValue: selections.accessoriesCategory })} />
                                    <SummaryTag label={t('modal.summary.type')} value={selections.accessoriesType?.name} />
                                    <SummaryTag label={t('modal.summary.model')} value={selections.accessoriesModel?.name} color="red" />
                                </>
                            )}
                        </div>
                    </div>

                    <div className="px-6 py-4 bg-slate-50 dark:bg-slate-900/50 space-y-3">
                        <div className="flex justify-between items-center px-3 py-1.5 rounded-lg">
                            <span className="text-slate-500 dark:text-slate-400 font-bold text-sm">{t('modal.summary.advanceFee')}</span>
                            <span className="text-slate-900 dark:text-white font-black">{t('modal.summary.feeAmount')}</span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed px-3">{t('modal.summary.feeDesc')}</p>
                        <div className="flex justify-between items-center p-4 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-white/5">
                            <span className="text-slate-700 dark:text-slate-200 font-black">{t('modal.summary.advancePayment')}</span>
                            <span className="text-khidmaat-red font-black text-2xl">{t('modal.summary.feeAmount')}</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={loading}
                        onClick={handlePayOnline}
                        className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white py-4 px-6 rounded-2xl font-black uppercase tracking-widest text-sm transition-all shadow-xl shadow-green-500/20"
                    >
                        <CreditCard size={20} />
                        {loading ? t('modal.summary.processing') : t('modal.summary.payOnline')}
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={loading}
                        onClick={handlePayLater}
                        className="flex items-center justify-center gap-3 bg-slate-100 dark:bg-slate-800 border-2 border-khidmaat-red text-khidmaat-red hover:bg-khidmaat-red/10 disabled:opacity-50 py-4 px-6 rounded-2xl font-black uppercase tracking-widest text-sm transition-all"
                    >
                        <Wallet size={20} />
                        {loading ? t('modal.summary.sending') : t('modal.summary.payLater')}
                    </motion.button>
                </div>
            </div>
        );
    };

    const SummaryTag = ({ label, value, color = 'slate' }: any) => {
        const colors: any = {
            slate: 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700',
            red: 'bg-khidmaat-red/10 text-khidmaat-red border-khidmaat-red/20',
            green: 'bg-green-500/10 text-green-500 border-green-500/20'
        };

        return (
            <div className={`px-4 py-2 rounded-xl border flex flex-col ${colors[color]}`}>
                <span className="text-[8px] font-black uppercase tracking-tighter opacity-50">{label}</span>
                <span className="text-xs font-bold leading-tight">{value}</span>
            </div>
        );
    };

    const StepSkeleton = () => (
        <div className="space-y-4 animate-pulse">
            <div className="h-8 bg-slate-200 dark:bg-slate-800/60 rounded-xl w-3/4" />
            <div className="h-4 bg-slate-100 dark:bg-slate-800/40 rounded-lg w-1/2" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
                {[1, 2, 3, 4, 5, 6].map(i => (
                    <div key={i} className="h-14 bg-slate-100 dark:bg-slate-800/30 rounded-xl border border-slate-200/50 dark:border-slate-700/20" />
                ))}
            </div>
            <div className="flex justify-center mt-8">
                <div className="h-12 w-48 bg-slate-200 dark:bg-slate-800/40 rounded-2xl" />
            </div>
        </div>
    );

    const getStepPercentage = () => {
        const totalStepsLookup: any = {
            'repair': 6,
            'install': 4,
            'buy': 5,
        };
        return (currentStep / (totalStepsLookup[flow || 'repair'] || 6)) * 100;
    };

    const renderStep = () => {
        // REPAIR FLOW (6 steps: Category -> Product Type -> Issues -> Delivery -> Details -> Summary)
        if (flow === 'repair') {
            switch (currentStep) {
                case 1: // Category
                    const categories = repairCategories.filter(cat => {
                        const translated = t(`modal.devices.${cat.service}`, { defaultValue: cat.service });
                        return cat.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            translated.toLowerCase().includes(searchTerm.toLowerCase());
                    });
                    return (
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{t('modal.repair.step1Title')}</h3>
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                <input
                                    type="text"
                                    placeholder={t('modal.repair.searchPlaceholder')}
                                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 pl-11 pr-4 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-khidmaat-red/50"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                {categories.map((cat) => (
                                    <motion.button
                                        whileHover={{ y: -5 }}
                                        whileTap={{ scale: 0.98 }}
                                        key={cat.id}
                                        onClick={() => selectItem('repairCategory', cat.service)}
                                        className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-3xl text-center group hover:bg-slate-100 dark:hover:bg-slate-700/60 hover:border-khidmaat-red/30 transition-all overflow-hidden"
                                    >
                                        {cat.img ? (
                                            <div className="w-full h-36 overflow-hidden bg-slate-100 dark:bg-slate-800/60">
                                                <img
                                                    src={cat.img}
                                                    alt={cat.service}
                                                    className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                                                />
                                            </div>
                                        ) : (
                                            <div className="w-full h-36 flex items-center justify-center bg-slate-100 dark:bg-slate-800/60">
                                                <Wrench className="text-slate-500 group-hover:text-khidmaat-red transition-colors" size={40} />
                                            </div>
                                        )}
                                        <div className="p-6">
                                            <span className="text-slate-800 dark:text-white font-black text-lg leading-tight">
                                                {t(`modal.devices.${cat.service}`, { defaultValue: cat.service })}
                                            </span>
                                        </div>
                                    </motion.button>
                                ))}
                            </div>
                        </div>
                    );
                case 2: // Product Type / Brand
                    const productTypes = DEVICE_CONFIG[selections.repairCategory]?.productTypes || [];
                    const isMobile = selections.repairCategory === 'Mobile Repair';
                    return (
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{isMobile ? t('modal.repair.step2TitleBrand') : t('modal.repair.step2TitleType')}</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm">{t(`modal.devices.${selections.repairCategory}`, { defaultValue: selections.repairCategory })}</p>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                {productTypes.map((type: any) => (
                                    <motion.button
                                        whileHover={{ y: -3 }}
                                        key={type.id}
                                        onClick={() => selectItem('productType', type.name)}
                                        className="p-5 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-2xl hover:bg-khidmaat-red hover:border-khidmaat-red transition-all group"
                                    >
                                        <span className="text-slate-800 dark:text-white font-black text-lg group-hover:text-white group-hover:scale-110 transition-transform block">{t(`modal.productTypes.${type.name}`, { defaultValue: type.name })}</span>
                                    </motion.button>
                                ))}
                            </div>
                        </div>
                    );
                case 3: // Issue Description
                    return (
                        <div className="space-y-4 max-w-xl mx-auto">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{t('modal.repair.step3Title')}</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm">{t(`modal.devices.${selections.repairCategory}`, { defaultValue: selections.repairCategory })} — {t(`modal.productTypes.${selections.productType}`, { defaultValue: selections.productType })}</p>
                            <textarea
                                placeholder={t('modal.repair.step3Placeholder')}
                                rows={5}
                                className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-4 px-5 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-khidmaat-red/50 resize-none leading-relaxed"
                                value={selections.issueDescription || ''}
                                onChange={(e) => setSelections((prev: any) => ({ ...prev, issueDescription: e.target.value }))}
                            />
                            <div className="mt-6 flex justify-center">
                                <button
                                    disabled={!selections.issueDescription?.trim()}
                                    onClick={handleNext}
                                    className="bg-khidmaat-red hover:bg-khidmaat-red-dark disabled:opacity-50 disabled:cursor-not-allowed text-white px-12 py-3.5 rounded-2xl font-black uppercase tracking-widest transition-all shadow-xl shadow-khidmaat-red/20"
                                >
                                    {t('modal.buttons.continue')}
                                </button>
                            </div>
                        </div>
                    );
                case 4: // Delivery
                    return (
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center">{t('modal.repair.step4Title')}</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <motion.button
                                    whileHover={{ y: -3 }}
                                    onClick={() => { selectItem('deliveryOption', 'center', false); setSelections((prev: any) => ({ ...prev, city: 'Sharjah' })); }}
                                    className={`p-6 rounded-2xl border transition-all text-center flex flex-col items-center ${selections.deliveryOption === 'center'
                                        ? 'bg-khidmaat-red/10 border-khidmaat-red ring-4 ring-khidmaat-red/20'
                                        : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700/50 grayscale hover:grayscale-0'
                                        }`}
                                >
                                    <div className="w-14 h-14 bg-slate-100 dark:bg-slate-900 rounded-2xl flex items-center justify-center mb-4 border border-slate-200 dark:border-white/5">
                                        <MapPin size={28} className="text-khidmaat-red" />
                                    </div>
                                    <h4 className="text-lg font-black text-slate-800 dark:text-white mb-1">{t('modal.repair.visitCenter')}</h4>
                                    <p className="text-slate-500 dark:text-slate-400 text-xs mb-2">{t('modal.repair.visitCenterDesc')}</p>
                                    <div className="text-khidmaat-red font-black text-xs">{t('modal.repair.visitCenterPrice')}</div>
                                </motion.button>

                                <motion.button
                                    whileHover={{ y: -3 }}
                                    onClick={() => selectItem('deliveryOption', 'home', false)}
                                    className={`p-6 rounded-2xl border transition-all text-center flex flex-col items-center ${selections.deliveryOption === 'home'
                                        ? 'bg-khidmaat-red/10 border-khidmaat-red ring-4 ring-khidmaat-red/20'
                                        : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700/50 grayscale hover:grayscale-0'
                                        }`}
                                >
                                    <div className="w-14 h-14 bg-slate-100 dark:bg-slate-900 rounded-2xl flex items-center justify-center mb-4 border border-slate-200 dark:border-white/5">
                                        <Clock size={28} className="text-khidmaat-red" />
                                    </div>
                                    <h4 className="text-lg font-black text-slate-800 dark:text-white mb-1">{t('modal.repair.homePickup')}</h4>
                                    <p className="text-slate-500 dark:text-slate-400 text-xs mb-2">{t('modal.repair.homePickupDesc')}</p>
                                    <div className="text-khidmaat-red font-black text-xs">{t('modal.repair.homePickupPrice')}</div>
                                </motion.button>
                            </div>

                            {selections.deliveryOption === 'center' && (
                                <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-4 block">{t('modal.repair.ourCenter')}</label>
                                    <div className="p-4 bg-white dark:bg-slate-800/50 rounded-xl border border-khidmaat-red/30 flex gap-4">
                                        <div className="w-10 h-10 bg-slate-100 dark:bg-slate-900 rounded-lg flex items-center justify-center shrink-0">
                                            <MapPin size={20} className="text-khidmaat-red" />
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-slate-800 dark:text-white text-sm mb-0.5">{t('modal.repair.centerName')}</h5>
                                            <p className="text-xs text-slate-500 dark:text-slate-400 mb-2 leading-relaxed">{t('modal.repair.centerAddress')}</p>
                                            <div className="flex flex-wrap gap-3 text-[10px] font-black tracking-widest uppercase">
                                                <span className="text-khidmaat-red flex items-center gap-1"><Clock size={12} /> {t('modal.repair.timings')}</span>
                                                <span className="text-slate-500">{t('modal.repair.timingWeekday')}</span>
                                                <span className="text-slate-500">{t('modal.repair.timingFriday')}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="mt-6 flex justify-center">
                                <button
                                    disabled={!selections.deliveryOption}
                                    onClick={handleNext}
                                    className="bg-khidmaat-red hover:bg-khidmaat-red-dark disabled:opacity-50 disabled:cursor-not-allowed text-white px-14 py-3.5 rounded-2xl font-black uppercase tracking-widest transition-all shadow-2xl shadow-khidmaat-red/30"
                                >
                                    {t('modal.buttons.proceedToInfo')}
                                </button>
                            </div>
                        </div>
                    );
                case 5: // Customer Details
                    return renderCustomerDetails();
                case 6: // Summary
                    return renderSummary();
            }
        }

        // INSTALL FLOW
        if (flow === 'install') {
            switch (currentStep) {
                case 1: // Category
                    return (
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            {INSTALL_MY_PRODUCT_SERVICES.map((cat: any) => (
                                <motion.button
                                    whileHover={{ y: -5 }}
                                    key={cat.id}
                                    onClick={() => selectItem('installCategory', cat.category)}
                                    className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-3xl text-center group hover:bg-slate-100 dark:hover:bg-slate-700/60 hover:border-khidmaat-red/30 transition-all overflow-hidden"
                                >
                                    {cat.image ? (
                                        <div className="w-full h-36 overflow-hidden">
                                            <img
                                                src={cat.image}
                                                alt={cat.category}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                    ) : (
                                        <div className="w-full h-36 flex items-center justify-center bg-slate-100 dark:bg-slate-800/60">
                                            <Plug className="text-slate-500 group-hover:text-khidmaat-red transition-colors" size={40} />
                                        </div>
                                    )}
                                    <div className="p-6">
                                        <span className="text-slate-800 dark:text-white font-black text-lg">{t(`modal.installCategories.${cat.category}`, { defaultValue: cat.category })}</span>
                                    </div>
                                </motion.button>
                            ))}
                        </div>
                    );
                case 2: // Result logic — multi-select
                    const issues = INSTALL_MY_PRODUCT_SERVICES.find(s => s.category === selections.installCategory)?.issues || [];
                    return (
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{t('modal.install.step2Title')} {t(`modal.installCategories.${selections.installCategory}`, { defaultValue: selections.installCategory })}?</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm">{t('modal.install.step2Desc')}</p>
                            </div>
                            <div className="grid grid-cols-1 gap-6">
                                {issues.map((issue: any) => (
                                    <div key={issue.issue} className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-3xl p-8">
                                        <h4 className="text-khidmaat-red font-black text-sm uppercase tracking-widest mb-6 border-b border-slate-200 dark:border-slate-800 pb-4">{issue.issue}</h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {issue.types.map((type: string) => {
                                                const isSelected = selections.installServices?.includes(type);
                                                return (
                                                    <button
                                                        key={type}
                                                        onClick={() => toggleMultiSelect('installServices', type)}
                                                        className={`p-5 rounded-2xl border transition-all text-left font-bold flex items-center gap-3 ${isSelected
                                                            ? 'bg-khidmaat-red/10 border-khidmaat-red text-white ring-2 ring-khidmaat-red/30'
                                                            : 'bg-white dark:bg-slate-800/40 border-slate-200 dark:border-slate-700/50 text-slate-800 dark:text-white hover:border-slate-400 dark:hover:border-slate-500'
                                                        }`}
                                                    >
                                                        <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center shrink-0 transition-all ${isSelected
                                                            ? 'bg-khidmaat-red border-khidmaat-red'
                                                            : 'border-slate-300 dark:border-slate-600'
                                                        }`}>
                                                            {isSelected && <Check size={14} className="text-white" />}
                                                        </div>
                                                        {type}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {selections.installServices?.length > 0 && (
                                <div className="text-center text-xs text-slate-400 font-bold">
                                    {selections.installServices.length > 1
                                        ? t('modal.install.servicesSelected_other', { count: selections.installServices.length, formattedCount: localizeNumber(selections.installServices.length, i18n.language) })
                                        : t('modal.install.servicesSelected_one', { count: selections.installServices.length, formattedCount: localizeNumber(selections.installServices.length, i18n.language) })}
                                </div>
                            )}
                            <div className="flex justify-center">
                                <button
                                    disabled={!selections.installServices?.length}
                                    onClick={handleNext}
                                    className="bg-khidmaat-red hover:bg-khidmaat-red-dark disabled:opacity-50 disabled:cursor-not-allowed text-white px-14 py-3.5 rounded-2xl font-black uppercase tracking-widest transition-all shadow-2xl shadow-khidmaat-red/30"
                                >
                                    {t('modal.buttons.continue')}
                                </button>
                            </div>
                        </div>
                    );
                case 3:
                    return renderCustomerDetails();
                case 4:
                    return renderSummary();
            }
        }

        // BUY FLOW
        if (flow === 'buy') {
            switch (currentStep) {
                case 1:
                    const buyCategories = Object.keys(BUY_ACCESSORIES);
                    return (
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            {buyCategories.map(cat => {
                                const catData = (BUY_ACCESSORIES as any)[cat];
                                return (
                                    <motion.button
                                        whileHover={{ y: -5 }}
                                        key={cat}
                                        onClick={() => selectItem('accessoriesCategory', cat)}
                                        className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-3xl text-center group hover:bg-slate-100 dark:hover:bg-slate-700/60 hover:border-khidmaat-red/30 transition-all overflow-hidden"
                                    >
                                        {catData.image ? (
                                            <div className="w-full h-36 overflow-hidden">
                                                <img
                                                    src={catData.image}
                                                    alt={cat}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                            </div>
                                        ) : (
                                            <div className="w-full h-36 flex items-center justify-center bg-slate-100 dark:bg-slate-800/60">
                                                <ShoppingCart className="text-slate-500 group-hover:text-khidmaat-red transition-colors" size={40} />
                                            </div>
                                        )}
                                        <div className="p-6">
                                            <span className="text-slate-800 dark:text-white font-black text-lg">{t(`modal.buyCategories.${cat}`, { defaultValue: cat })}</span>
                                        </div>
                                    </motion.button>
                                );
                            })}
                        </div>
                    );
                case 2:
                    const types = (BUY_ACCESSORIES as any)[selections.accessoriesCategory]?.types || [];
                    return (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {types.map((type: any) => (
                                <button
                                    key={type.name}
                                    onClick={() => selectItem('accessoriesType', type)}
                                    className="p-8 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-3xl text-slate-800 dark:text-white font-bold text-xl hover:bg-khidmaat-red hover:text-white transition-all text-left"
                                >
                                    {type.name}
                                </button>
                            ))}
                        </div>
                    );
                case 3:
                    const modelOptions = selections.accessoriesType?.models || [];
                    return (
                        <div className="space-y-4">
                            {modelOptions.map((model: any) => (
                                <button
                                    key={model.name}
                                    onClick={() => selectItem('accessoriesModel', model)}
                                    className="w-full flex items-center justify-between p-8 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-3xl hover:bg-slate-100 dark:hover:bg-slate-700/60 transition-all group"
                                >
                                    <div className="text-left">
                                        <h4 className="text-slate-800 dark:text-white font-black text-lg mb-2">{model.name}</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {model.options.slice(0, 3).map((opt: string) => (
                                                <span key={opt} className="text-[10px] text-slate-500 border border-slate-200 dark:border-slate-700 px-2 py-1 rounded-md">{opt}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <ChevronRight size={24} className="text-khidmaat-red group-hover:translate-x-1 transition-transform" />
                                </button>
                            ))}
                        </div>
                    );
                case 4:
                    return renderCustomerDetails();
                case 5:
                    return renderSummary();
            }
        }

    };

    return (
        <div className="fixed inset-0 z-[9999] flex items-start justify-center p-0 md:pt-[3vh] md:px-6 lg:px-12">
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black/30 dark:bg-slate-950/80 backdrop-blur-md"
                    onClick={onClose}
                />
            </AnimatePresence>

            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 md:rounded-[3rem] shadow-[0_64px_128px_-32px_rgba(0,0,0,0.15)] dark:shadow-[0_64px_128px_-32px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden w-full max-w-6xl max-h-[100dvh] md:max-h-[88dvh] mx-auto"
            >
                {/* Progress Bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-slate-200 dark:bg-slate-800 z-50">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${getStepPercentage()}%` }}
                        className="h-full bg-khidmaat-red shadow-[0_0_15px_rgba(245,87,108,0.5)] transition-all duration-700"
                    />
                </div>

                {/* Modal Header */}
                <div className="flex items-center justify-between px-6 py-4 md:px-8 md:py-5 border-b border-slate-200 dark:border-white/5 shrink-0 z-40 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={handleBack}
                            className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <div>
                            <h2 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white leading-none mb-1">{getFlowTitle()}</h2>
                            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-khidmaat-red">
                                <span>{t('modal.header.step')} {localizeNumber(currentStep, i18n.language)}</span>
                                <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                                <span className="text-slate-400 dark:text-slate-500">{t('modal.header.portal')}</span>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-600 dark:text-white hover:bg-khidmaat-red hover:text-white hover:rotate-90 transition-all duration-500"
                    >
                        <X size={22} />
                    </button>
                </div>

                {/* Modal Content */}
                <div className="flex-1 overflow-y-auto custom-scrollbar px-6 py-6 md:px-8 md:py-8 lg:px-12 lg:py-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`${flow}-${currentStep}`}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                        >
                            {stepLoading ? <StepSkeleton /> : renderStep()}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Footer Info */}
                <div className="px-6 py-3 md:px-8 md:py-4 border-t border-slate-200 dark:border-white/5 shrink-0 flex items-center justify-between bg-slate-50/50 dark:bg-slate-950/30">
                    <div className="flex items-center gap-6 -ml-2">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-8 h-8 rounded-full border-3 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-800 overflow-hidden">
                                    <img src={`https://i.pravatar.cc/100?u=${i + 10}`} alt="User" />
                                </div>
                            ))}
                        </div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">
                            <span className="text-green-500">{t('modal.footer.live')}</span> {localizeNumber(liveUsers, i18n.language)} {t('modal.footer.usersSelecting')}
                        </div>
                    </div>
                    <div className="flex items-center gap-3 text-slate-400 dark:text-slate-500">
                        <Shield size={14} />
                        <span className="text-[10px] font-black uppercase tracking-widest hidden sm:inline">{t('modal.footer.secure')}</span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ServiceFlowModal;
