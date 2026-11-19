import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { 
  Users, 
  Search, 
  UserCheck, 
  FileCheck, 
  ShieldCheck, 
  TrendingUp, 
  Clock, 
  Award 
} from 'lucide-react';
import { siteData } from '../data/siteData';

import CorporateHero from '../components/lumintu/CorporateHero';
import StatisticsBar from '../components/lumintu/StatisticsBar';
import IntroductionCollage from '../components/lumintu/IntroductionCollage';
import PartnerLogoStrip from '../components/lumintu/PartnerLogoStrip';
import ServiceGrid from '../components/lumintu/ServiceGrid';
import NavyFeatureSection from '../components/lumintu/NavyFeatureSection';
import OfferingCards from '../components/lumintu/OfferingCards';
import ProcessSection from '../components/lumintu/ProcessSection';
import TestimonialSection from '../components/lumintu/TestimonialSection';
import EnquirySection from '../components/lumintu/EnquirySection';

export default function HRServiceDetail() {
  const params = useParams();
  const location = useLocation();

  const pathParts = location.pathname.split('/').filter(Boolean);
  const pathSlug = pathParts[pathParts.length - 1];
  const activeSlug = params.slug || (pathSlug !== 'hr-services' ? pathSlug : null);

  const service = siteData.hrServices.find(
    s => s.slug === activeSlug || s.id === activeSlug
  ) || siteData.hrServices[0];

  // 1. Statistics Bar Items
  const stats = [
    { title: '< 14 Days', subtitle: 'AVERAGE TURNAROUND', desc: 'From requirement briefing to calibrated shortlist' },
    { title: '100% Vetted', subtitle: 'SANDBOX EVALUATION', desc: 'Assessed on live cloud infrastructure' },
    { title: '96.4%', subtitle: 'ACCEPTANCE RATE', desc: 'First-round interview candidate approval' },
    { title: '90-Day', subtitle: 'REPLACEMENT WARRANTY', desc: 'Comprehensive post-placement probation assurance' }
  ];

  // 2. Service Grid Items (mapped from whatItIncludes or fallback)
  const serviceCards = (service.whatItIncludes && service.whatItIncludes.length > 0)
    ? service.whatItIncludes.map((inc, i) => {
        const icons = [Users, Search, UserCheck, FileCheck, ShieldCheck, TrendingUp];
        return {
          title: inc.title,
          description: inc.description,
          icon: icons[i % icons.length],
          actionText: 'Discuss Scope',
          link: '#enquiry'
        };
      })
    : [
        {
          title: 'Requirement & Architecture Calibration',
          description: 'We align technical stack expectations, team dynamics, and business milestones before outreach.',
          icon: Search,
          actionText: 'Learn More',
          link: '#enquiry'
        },
        {
          title: 'Live Lab Sandbox Evaluation',
          description: 'Candidates deploy code and troubleshoot real scenarios to verify genuine production competence.',
          icon: Terminal,
          actionText: 'Learn More',
          link: '#enquiry'
        },
        {
          title: 'Dedicated Account Pod',
          description: 'One consistent technical talent partner managing communications, interviews, and debrief notes.',
          icon: UserCheck,
          actionText: 'Learn More',
          link: '#enquiry'
        },
        {
          title: 'Market Intelligence & Benchmarks',
          description: 'Objective compensation data and hiring availability mapping for competitive talent acquisition.',
          icon: TrendingUp,
          actionText: 'Learn More',
          link: '#enquiry'
        },
        {
          title: 'Offer & Counter-Offer Advisory',
          description: 'Active candidate engagement to protect against last-minute dropouts and competing offers.',
          icon: ShieldCheck,
          actionText: 'Learn More',
          link: '#enquiry'
        },
        {
          title: '90-Day Replacement Assurance',
          description: 'Guaranteed no-cost replacement within the 90-day probationary window for total peace of mind.',
          icon: Award,
          actionText: 'Learn More',
          link: '#enquiry'
        }
      ];

  // 3. Dark Navy Feature Benefits
  const featureBenefits = [
    {
      title: 'Structured Recruitment Process',
      desc: `Our disciplined 8-stage methodology turns ambiguous job requirements into calibrated engineering shortlists.`,
      icon: Search
    },
    {
      title: 'Industry-Focused Talent Search',
      desc: `We understand software architectures, microservices, and ERP ecosystems, vetting real production ability.`,
      icon: Users
    },
    {
      title: 'Dedicated Hiring Support',
      desc: 'One consistent account manager who understands your engineering stack and delivery deadlines.',
      icon: UserCheck
    },
    {
      title: 'Transparent Communication',
      desc: 'Regular milestone updates, transparent candidate scorecards, and zero chasing required.',
      icon: Clock
    }
  ];

  // 4. Offering Cards
  const offerings = [
    {
      category: 'SINGLE & NICHE',
      title: 'Individual Role Search',
      description: `Targeted sourcing for specialized technical vacancies and immediate project requirements.`,
      features: [
        'Dedicated Technical Sourcing Squad',
        '14-Day Delivery SLA for First Shortlist',
        'Live Cloud Sandbox Candidate Audits',
        'Transparent Evaluation Scorecards',
        '90-Day Candidate Replacement Warranty'
      ],
      ctaText: 'Discuss Role Scope',
      ctaHref: '#enquiry'
    },
    {
      category: 'TEAM SCALING',
      title: 'Dedicated Sourcing Pod',
      description: `Embedded technical talent team delivering calibrated shortlists for multiple concurrent hires.`,
      isFeatured: true,
      features: [
        'Dedicated Senior Tech Recruiter & Researcher',
        'Accelerated Multi-Role Sourcing Pipeline',
        'Customized Technical Assessment Framework',
        'Weekly Hiring Manager Debrief Sessions',
        'Volume Discounted Placement Fee Structure'
      ],
      ctaText: 'Enquire for Pod',
      ctaHref: '#enquiry'
    },
    {
      category: 'ENTERPRISE RPO',
      title: 'Recruitment Outsourcing',
      description: `Turnkey talent acquisition outsourcing managing full-lifecycle hiring, logistics, and reporting.`,
      features: [
        'Embedded Recruiters in Your ATS & Slack',
        'Full Pipeline & Candidate Experience Management',
        'Comprehensive Employer Branding Advisory',
        'Predictable Monthly Subscription Model',
        'Enterprise SLA & Retention Warranty'
      ],
      ctaText: 'Discuss RPO Model',
      ctaHref: '#enquiry'
    }
  ];

  // 5. 6-Step Process
  const processSteps = [
    {
      num: '01',
      title: 'Requirement Discovery',
      desc: `We evaluate your technical stack, seniority expectations, budget, and culture to build a clear role profile.`
    },
    {
      num: '02',
      title: 'Role Understanding & Scorecard',
      desc: 'We draft and calibrate a comprehensive evaluation scorecard upfront, agreeing on non-negotiable skills.'
    },
    {
      num: '03',
      title: 'Candidate Sourcing & Outreach',
      desc: 'Direct outreach across verified candidate networks and proprietary developer communities for passive talent.'
    },
    {
      num: '04',
      title: 'Screening and Shortlisting',
      desc: 'Rigorous competency verification in sandbox environments, ensuring only thoroughly vetted candidates are presented.'
    },
    {
      num: '05',
      title: 'Interview Coordination',
      desc: 'We manage round schedules, candidate technical briefings, debrief feedback, and expectations alignment.'
    },
    {
      num: '06',
      title: 'Final Selection & Onboarding',
      desc: 'Offer negotiation, counter-offer resistance counseling, joining assurance, and a binding 90-day replacement warranty.'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      
      {/* 01. Lumintu Hero Section */}
      <CorporateHero
        eyebrow={`ENTERPRISE HR PRACTICE • ${service.title.toUpperCase()}`}
        heading={service.fullTitle || `${service.title} for Growing Businesses`}
        description={service.shortDescription || service.description}
        primaryBtn={{ text: "Explore Capabilities", href: "#services" }}
        secondaryBtn={{ text: "Talk to Our Team", href: "#enquiry" }}
        mainImage={service.image || "/assets/hr_talent.jpg"}
        secondaryImage="/assets/experience_discussion.jpg"
        badgeNumber="14-Day SLA"
        badgeLabel="Average Time-to-Shortlist"
      />

      {/* 02. Full-Width Navy Statistics Bar */}
      <StatisticsBar items={stats} />

      {/* 03. Introduction Section (Lumintu Collage) */}
      <IntroductionCollage
        eyebrow="PRACTICE OVERVIEW"
        title={`People Solutions That Power Business Growth`}
        leadParagraph={service.description}
        secondaryDescription="At Varnith Technologies, we combine deep technology comprehension with transparent, SLA-governed recruitment practices. Every candidate we submit has been technically evaluated against real enterprise benchmarks."
        highlights={service.features || [
          "Pre-assessed technical candidates evaluated in live sandboxes",
          "Dedicated 14-day turnaround SLA for critical roles",
          "Comprehensive compensation benchmarking and talent market intel",
          "Binding 90-day candidate replacement warranty"
        ]}
        ctaText="Discuss Your Hiring Scope"
        ctaHref="#enquiry"
        primaryImage={service.image || "/assets/experience_collab.jpg"}
        secondaryImage="/assets/team_conf.jpg"
      />

      {/* 04. Technology Ecosystem Strip */}
      <PartnerLogoStrip title={`SUPPORTING ENTERPRISE TECH STACKS & HIRING PIPELINES`} />

      {/* 05. Range of Practice Capabilities (Lumintu Service Cards) */}
      <ServiceGrid
        eyebrow="PRACTICE SCOPE"
        title={`Core Capabilities & Deliverables`}
        description={`Comprehensive hiring methodologies and talent solutions delivered under our ${service.title} practice.`}
        services={serviceCards}
        id="services"
      />

      {/* 06. Full-Width Navy Feature Section */}
      <NavyFeatureSection
        eyebrow="WHY VARNITH STANDS OUT"
        heading={`Why Businesses Choose Varnith for ${service.title}`}
        benefits={featureBenefits}
        image="/assets/about_empowering.jpg"
        badgeTitle="10+ Years"
        badgeSubtitle="Corporate Recruitment Experience"
      />

      {/* 07. Three-Column Offering Section (Lumintu Pricing / Packages style) */}
      <OfferingCards
        eyebrow="ENGAGEMENT TIERS"
        title={`Flexible Engagement Models`}
        description={`Choose the collaboration model that matches your hiring velocity and delivery milestones.`}
        offerings={offerings}
      />

      {/* 08. How Our Process Works Section */}
      <ProcessSection
        eyebrow="RECRUITMENT METHODOLOGY"
        title="How Our Process Works"
        subtitle="A disciplined 6-stage sequence turning ambiguous hiring needs into verified, long-term engineering placements."
        steps={processSteps}
        featuredImage="/assets/experience_discussion.jpg"
      />

      {/* 09. Testimonials Section */}
      <TestimonialSection
        eyebrow="CLIENT & PARTNER TESTIMONIALS"
        title="What Our Enterprise Partners Say"
        description="Real feedback from corporate technology teams who scaled their engineering squads with Varnith Technologies."
      />

      {/* 10. Contact / Enquiry Section */}
      <EnquirySection
        eyebrow="START HIRING TODAY"
        title={`Ready to Strengthen Your Team?`}
        description={`Schedule a consultation with our senior talent acquisition leads in Madhapur, Hyderabad regarding ${service.title}.`}
        checklist={[
          "Calibrated candidate shortlists delivered within 14 days",
          "Dedicated account manager with single point of contact",
          "90-day candidate replacement assurance",
          "Transparent, non-binding initial requirement consultation"
        ]}
        serviceOptions={[
          service.title,
          "Talent Acquisition & Sourcing",
          "Executive Leadership Search",
          "Contract Staffing & Deployment",
          "Recruitment Process Outsourcing (RPO)",
          "General HR Consulting Enquiry"
        ]}
        storageKey="varnith_service_enquiries"
        id="enquiry"
      />

    </div>
  );
}
