import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import StatisticsBanner from '../components/StatisticsBanner';
import HRServices from '../components/HRServices';
import LearningJourney from '../components/LearningJourney';
import WhoWeHireFor from '../components/WhoWeHireFor';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      {/* 01. Homepage Hero Slider matching Template */}
      <Hero />

      {/* 02. Welcome / About Section with Overlapping Green Statistics Card */}
      <About />

      {/* 03. Acuvic Full-Width Corporate Green Statistics Banner */}
      <StatisticsBanner />

      {/* 04. Business Shaped Solutions — Comprehensive Service Offerings */}
      <HRServices />

      {/* 05. How We Hire — 8-Stage Recruitment Methodology */}
      <LearningJourney />

      {/* 06. Who We Hire For — 6 Enterprise Technical Specializations */}
      <WhoWeHireFor />

      {/* 07. Why Choose Varnith — 4 Core Commitments & Verified SLAs */}
      <WhyChooseUs />

      {/* 08. Client & Alumni Testimonials */}
      <Testimonials />

      {/* 09. Frequently Asked Questions */}
      <FAQ />

      {/* 10. Traditional Corporate Contact Section */}
      <Contact />
    </>
  );
}
