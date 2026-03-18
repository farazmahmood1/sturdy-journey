
import React from 'react';
import { Wrench, PackagePlus, ShoppingBag } from 'lucide-react';

export const BRAND_NAME = 'Khidmaat';
export const SLOGAN = 'Bringing Your Electronics Back to Life';
export const CONTACT_PHONE = '+971 50 410 0285';
export const EMERGENCY_PHONE = '+971 50 410 0285'; // Same for now, but distinct constant
export const CONTACT_EMAIL = 'khidmaatt.uae@gmail.com';
export const OFFICE_ADDRESS = 'Oneway Electronics - Industrial Area 6 - Sharjah - United Arab Emirates';
export const OFFICE_ADDRESS_AR = 'ون واي إلكترونيكس - المنطقة الصناعية ٦ - الشارقة - الإمارات العربية المتحدة';
export const GOOGLE_MAPS_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2068!2d55.4120813!3d25.3182504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f59529ee9e127%3A0x10c0d40b174dccf9!2sONE%20WAY%20ELECT%20DEV%20TR%20LLC!5e0!3m2!1sen!2sae!4v1234567890";

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/profile.php?id=61587920021069',
  instagram: 'https://www.instagram.com/khidmaatt/',
  tiktok: 'https://www.tiktok.com/@khidmaatt?lang=en',
};

export const BUSINESS_HOURS = [
  { dayKey: 'mon', hours: '9:00 AM - 10:00 PM' },
  { dayKey: 'tue', hours: '9:00 AM - 10:00 PM' },
  { dayKey: 'wed', hours: '9:00 AM - 10:00 PM' },
  { dayKey: 'thu', hours: '9:00 AM - 10:00 PM' },
  { dayKey: 'fri', hours: '4:00 PM - 10:00 PM' },
  { dayKey: 'sat', hours: '9:00 AM - 10:00 PM' },
  { dayKey: 'sun', hours: '9:00 AM - 10:00 PM' },
];

export const SERVICES = [
  {
    id: 'repair',
    title: 'Device Repairs',
    description: 'Get your gadgets and appliances repaired quickly and reliably by certified technicians.',
    longDescription: 'Get your gadgets and appliances repaired quickly and reliably by certified technicians.',
    icon: <Wrench className="w-10 h-10" />,
    image: "https://img.freepik.com/free-photo/service-maintenance-worker-repairing_23-2149176714.jpg?ga=GA1.1.1825210727.1771255577&semt=ais_hybrid&w=740&q=80"
  },
  {
    id: 'install',
    title: 'Expert Installation',
    description: 'We set up your devices safely and efficiently so they\'re ready to use immediately.',
    longDescription: 'We set up your devices safely and efficiently so they\'re ready to use immediately.',
    icon: <PackagePlus className="w-10 h-10" />,
    image: "https://img.freepik.com/premium-photo/installing-tv_926199-4109643.jpg?ga=GA1.1.1825210727.1771255577&semt=ais_hybrid"
  },
  {
    id: 'accessories',
    title: 'Accessories & Parts',
    description: 'Find high-quality accessories that perfectly match your devices and keep them performing at their best.',
    longDescription: 'Find high-quality accessories that perfectly match your devices and keep them performing at their best.',
    icon: <ShoppingBag className="w-10 h-10" />,
    image: "https://images.unsplash.com/photo-1566793474285-2decf0fc182a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Ahmed Al-Mansouri',
    location: 'Sharjah, UAE',
    text: 'Exceptional service! They fixed my Samsung fridge within hours. Very professional technicians who really know their craft.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=ahmed'
  },
  {
    id: 2,
    name: 'Sarah Jenkins',
    location: 'Dubai Marina, UAE',
    text: 'Khidmaat installed my entire home theater system and smart home lighting. The attention to detail and cable management was perfect.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    id: 4,
    name: 'Elena Volkova',
    location: 'Jumeirah, Dubai',
    text: 'Excellent communication and very punctual. They arrived exactly when they said they would and fixed my AC unit quickly.',
    rating: 4,
    avatar: 'https://i.pravatar.cc/150?u=elena'
  }
];

export const COLORS = {
  primary: '#f02327',
  background: '#fafbfc',
  text: '#1a1a1a'
};
