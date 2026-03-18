import React from 'react';
import Hero from '../components/home/Hero';
import SEO from '../components/SEO';
import ServicesSection from '../components/home/ServicesSection';
import WhyUs from '../components/home/WhyUs';

import Testimonials from '../components/home/Testimonials';
import EmergencySection from '../components/home/EmergencySection';
import ContactHome from '../components/home/ContactHome';
import MapSection from '../components/home/MapSection';


const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <SEO
        title="Sharjah & Dubai's #1 Repair Service"
        description="Trusted electronics repair and installation specialists serving Dubai, Sharjah, and across the UAE. Bringing your electronics back to life with over 36 years of experience."
        keywords="home repair sharjah, appliance repair dubai, ac repair uae, mobile repair sharjah"
        canonical="/"
      />
      <Hero />
      <ServicesSection />
      <WhyUs />
      <Testimonials />
      <EmergencySection />
      <ContactHome />
      <MapSection />
    </div>
  );
};

export default Home;
