import React from 'react';
import HeroSection from '../components/home/HeroSection';
import HighlightsSection from '../components/home/HighlightsSection';
import SolutionSection from '../components/home/SolutionSection';
import HowWeHelpSection from '../components/home/HowWeHelpSection';
import ServicesSection from '../components/home/ServicesSection';
import ConnectedSection from '../components/home/ConnectedSection';
import HowWeHireSection from '../components/home/HowWeHireSection';
import WhoWeHireSection from '../components/home/WhoWeHireSection';
import WorkingWithUsSection from '../components/home/WorkingWithUsSection';
import FAQSection from '../components/home/FAQSection';
import ContactCtaSection from '../components/home/ContactCtaSection';

export default function Home() {
  return (
    <div className="bg-white">
      {/* SECTION 1: HERO */}
      <HeroSection />

      {/* SECTION 2: COMPANY HIGHLIGHTS */}
      <HighlightsSection />

      {/* SECTION 3: OUR SOLUTION */}
      <SolutionSection />

      {/* SECTION 4: HOW WE HELP */}
      <HowWeHelpSection />

      {/* SECTION 5: SERVICES */}
      <ServicesSection />

      {/* SECTION 6: CONNECTED BY PEOPLE */}
      <ConnectedSection />

      {/* SECTION 7: HOW WE HIRE */}
      <HowWeHireSection />

      {/* SECTION 8: WHO WE HIRE FOR */}
      <WhoWeHireSection />

      {/* SECTION 9: WHAT WORKING WITH US FEELS LIKE */}
      <WorkingWithUsSection />

      {/* SECTION 10: FAQ */}
      <FAQSection />

      {/* SECTION 11: CONTACT CTA */}
      <ContactCtaSection />
    </div>
  );
}

