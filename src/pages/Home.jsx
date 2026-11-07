import React from 'react';
import Hero from '../components/Hero';
import TechRail from '../components/TechRail';
import About from '../components/About';
import Courses from '../components/Courses';
import WhyChooseUs from '../components/WhyChooseUs';
import LearningJourney from '../components/LearningJourney';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <TechRail />
      <About />
      <Courses />
      <WhyChooseUs />
      <LearningJourney />
      <Testimonials />
      <CTASection />
      <FAQ />
      <Contact />
    </>
  );
}
