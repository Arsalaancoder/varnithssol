import React from 'react';
import HeroSection from '../components/home/HeroSection';
import HighlightsSection from '../components/home/HighlightsSection';
import ChallengesSection from '../components/home/ChallengesSection';
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

      {/* SECTION 3: COMMON CHALLENGES */}
      <ChallengesSection />

      {/* SECTION 4: OUR SOLUTION */}
      <SolutionSection />

      {/* SECTION 5: HOW WE HELP */}
      <HowWeHelpSection />

      {/* SECTION 6: SERVICES */}
      <ServicesSection />

      {/* SECTION 7: CONNECTED BY PEOPLE */}
      <ConnectedSection />

      {/* SECTION 8: HOW WE HIRE */}
      <HowWeHireSection />

      {/* SECTION 9: WHO WE HIRE FOR */}
      <WhoWeHireSection />

      {/* SECTION 10: WHAT WORKING WITH US FEELS LIKE */}
      <WorkingWithUsSection />

      {/* SECTION 11: FAQ */}
      <FAQSection />

      {/* SECTION 12: CONTACT CTA */}
      <ContactCtaSection />
    </div>
  );
}

