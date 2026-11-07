import React from 'react';
import Hero from '../components/Hero';
import TechRail from '../components/TechRail';
import HRServices from '../components/HRServices';
import Courses from '../components/Courses';
import WhyChooseUs from '../components/WhyChooseUs';
import LearningJourney from '../components/LearningJourney';
import Testimonials from '../components/Testimonials';
import About from '../components/About';
import FAQ from '../components/FAQ';
import CTASection from '../components/CTASection';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      {/* 01. Hero — HR-focused introduction */}
      <Hero />

      {/* Enterprise Tech & Client Infrastructure Marquee */}
      <TechRail />

      {/* 02. HR Services — First Priority (Strategic HR Solutions for Growing Businesses) */}
      <HRServices />

      {/* 03. IT Training — Second Priority (Advance Your Career Through Industry-Focused Training) */}
      <Courses />

      {/* 04. Why Choose Varnith Global — The Varnith Advantage 3D Deck */}
      <WhyChooseUs />

      {/* 05. Our Approach / How We Work — 4-Stage Pathway */}
      <LearningJourney />

      {/* 06. Client & Alumni Testimonials */}
      <Testimonials />

      {/* 07. Career Development / Empowering People. Elevating Businesses */}
      <About />

      {/* 08. Frequently Asked Questions */}
      <FAQ />

      {/* 09. Enterprise Partnership CTA & Campus Contact */}
      <CTASection />
      <Contact />
    </>
  );
}
