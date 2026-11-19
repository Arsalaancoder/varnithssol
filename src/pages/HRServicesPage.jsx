import React from 'react';
import { 
  Users, 
  UserCheck, 
  FileCheck, 
  ShieldCheck, 
  TrendingUp,
  Search,
  Clock,
  Layers
} from 'lucide-react';

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

export default function HRServicesPage() {
  // 1. Statistics Bar Items
  const stats = [
    { title: '14-Day SLA', subtitle: 'RECRUITMENT SOLUTIONS', desc: 'Average turnaround to first calibrated shortlist' },
    { title: '100% Vetted', subtitle: 'TALENT ACQUISITION', desc: 'Evaluated in technical cloud sandboxes' },
    { title: 'C-Suite & VP', subtitle: 'EXECUTIVE SEARCH', desc: 'Discreet, retained practice leadership mapping' },
    { title: 'Full Compliance', subtitle: 'HR ADVISORY', desc: 'Statutory PF, ESI, gratuity & contracts governance' }
  ];

  // 2. Services Grid (6 Cards with Navy Square Icon Container)
  const hrServices = [
    {
      title: 'Talent Acquisition',
      description: 'Precision full-cycle sourcing for software engineers, principal architects, and engineering managers evaluated against production-grade criteria.',
      icon: Users,
      actionText: 'Explore Talent Search',
      link: '#enquiry'
    },
    {
      title: 'Recruitment Process Outsourcing',
      description: 'Dedicated embedded recruiting squads acting as your internal talent team, handling sourcing, pipeline velocity, ATS workflows, and hiring SLAs.',
      icon: Layers,
      actionText: 'Discuss RPO Engagement',
      link: '#enquiry'
    },
    {
      title: 'Executive Search',
      description: 'Discreet leadership mapping for VP of Engineering, Practice Directors, and Principal Cloud Architects with exhaustive confidential market dossiers.',
      icon: UserCheck,
      actionText: 'Leadership Inquiry',
      link: '#enquiry'
    },
    {
      title: 'Contract Staffing',
      description: 'Flexible technical contractors with 72-hour onboarding, complete statutory PF/ESI compliance, and guaranteed talent replacement assurance.',
      icon: FileCheck,
      actionText: 'Scale Contract Squads',
      link: '#enquiry'
    },
    {
      title: 'HR Advisory & Governance',
      description: 'Compensation benchmarking, organizational restructuring, compliant employment policies, and structured retention frameworks.',
      icon: ShieldCheck,
      actionText: 'Consult on Advisory',
      link: '#enquiry'
    },
    {
      title: 'Talent Intelligence',
      description: 'Real-time hiring market insights, skill scarcity mapping, competitor compensation analytics, and hiring timeline forecasting.',
      icon: TrendingUp,
      actionText: 'Request Market Intel',
      link: '#enquiry'
    }
  ];

  // 3. Dark Navy Feature Section Benefits
  const featureBenefits = [
    {
      title: 'Structured Recruitment Process',
      desc: 'Our disciplined 8-stage methodology turns ambiguous job specifications into calibrated engineering scorecards and high-retention hires.',
      icon: Search
    },
    {
      title: 'Industry-Focused Talent Search',
      desc: 'Our recruiters actively recruit for cloud, ERP, and software teams, meaning we evaluate actual code repositories and architecture depth.',
      icon: Users
    },
    {
      title: 'Dedicated Hiring Support',
      desc: 'One consistent account lead who understands your tech stack, hiring managers, and delivery timelines without handoff friction.',
      icon: UserCheck
    },
    {
      title: 'Transparent Communication',
      desc: 'Weekly calibration calls, real-time pipeline visibility, and objective feedback so you never have to chase candidate updates.',
      icon: Clock
    }
  ];

  // 4. 3-Column Offering Cards
  const offerings = [
    {
      category: 'FOCUSED HIRING',
      title: 'Talent Acquisition',
      description: 'Targeted single-role and batch hiring for critical engineering, cloud, and technical leadership vacancies.',
      features: [
        'Dedicated Technical Sourcing Squad',
        '14-Day Delivery SLA for First Shortlist',
        'Live Cloud Sandbox Candidate Audits',
        'Transparent Evaluation Scorecards',
        '90-Day Candidate Replacement Warranty'
      ],
      ctaText: 'Discuss Requirements',
      ctaHref: '#enquiry'
    },
    {
      category: 'RETAINED SEARCH',
      title: 'Executive Hiring',
      description: 'Confidential retained search for Vice Presidents, Technical Directors, and Principal Enterprise Architects.',
      isFeatured: true,
      features: [
        'Confidential Market & Competitor Mapping',
        'Exhaustive Candidate Leadership Dossiers',
        'Senior Partner-Led Search Process',
        'Comprehensive Reference & Reputation Check',
        'Offer Alignment & Counter-Offer Mitigation'
      ],
      ctaText: 'Enquire for Leadership',
      ctaHref: '#enquiry'
    },
    {
      category: 'EMBEDDED TEAM',
      title: 'Recruitment Outsourcing',
      description: 'Turnkey RPO solutions providing scalable talent infrastructure and embedded recruiters for high-growth software firms.',
      features: [
        'Embedded Recruiters in Your Slack/ATS',
        'Custom Pipeline Sourcing Velocity',
        'End-to-End Interview Scheduling Logistics',
        'Cost-Per-Hire & Cycle Time Optimization',
        'Monthly Predictable Subscription Model'
      ],
      ctaText: 'Discuss RPO Model',
      ctaHref: '#enquiry'
    }
  ];

  // 5. 6-Step Methodology
  const processSteps = [
    {
      num: '01',
      title: 'Requirement Discussion',
      desc: 'We conduct a detailed discovery call with your engineering leads to map technical stack requirements, cultural dynamics, and milestones.'
    },
    {
      num: '02',
      title: 'Role Understanding & Briefing',
      desc: 'We draft and calibrate a comprehensive evaluation scorecard upfront, agreeing on non-negotiable skills before initiating market outreach.'
    },
    {
      num: '03',
      title: 'Candidate Sourcing & Outreach',
      desc: 'Direct outreach across proprietary talent communities and verified engineering networks to engage passive, high-caliber practitioners.'
    },
    {
      num: '04',
      title: 'Screening and Shortlisting',
      desc: 'Rigorous competency verification in sandbox environments, ensuring only thoroughly vetted, interview-ready candidates are presented.'
    },
    {
      num: '05',
      title: 'Interview Coordination',
      desc: 'We handle calendar synchronization, candidate briefing notes, round debriefs, and real-time compensation expectations.'
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
        eyebrow="STRATEGIC HR CONSULTING"
        heading="Building Stronger Teams Through Smarter HR Consulting"
        description="Connecting businesses with the right talent through structured recruitment, executive search, and people-focused HR solutions."
        primaryBtn={{ text: "Explore HR Services", href: "#services" }}
        secondaryBtn={{ text: "Talk to Our Team", href: "#enquiry" }}
        mainImage="/assets/hr_talent.jpg"
        secondaryImage="/assets/experience_discussion.jpg"
        badgeNumber="14-Day SLA"
        badgeLabel="Average Turnaround to Shortlist"
      />

      {/* 02. Full-Width Navy Statistics Bar */}
      <StatisticsBar items={stats} />

      {/* 03. Introduction Section (Lumintu Collage) */}
      <IntroductionCollage
        eyebrow="ABOUT OUR HR PRACTICE"
        title="People Solutions That Drive Business Growth"
        leadParagraph="Varnith Technologies partners with high-growth software enterprises to solve complex hiring bottlenecks, source pre-assessed talent, and build compliant workforce structures."
        secondaryDescription="Unlike conventional agencies that flood hiring inboxes with unvetted resumes, our recruiters evaluate candidate competencies against real enterprise production benchmarks. We combine deep technology comprehension with transparent, SLA-governed recruitment practices."
        highlights={[
          "Pre-assessed technical candidates evaluated in live sandboxes",
          "Dedicated 14-day turnaround SLA for critical software roles",
          "Comprehensive compensation benchmarking and talent market intel",
          "Binding 90-day candidate replacement warranty"
        ]}
        ctaText="Discuss Your Hiring Needs"
        ctaHref="#enquiry"
        primaryImage="/assets/experience_collab.jpg"
        secondaryImage="/assets/team_conf.jpg"
      />

      {/* 04. Client & Technology Ecosystem Strip */}
      <PartnerLogoStrip title="SUPPORTING MODERN ENTERPRISE TECH STACKS & HIRING PIPELINES" />

      {/* 05. Our Range of Services (Exact Lumintu Service Cards) */}
      <ServiceGrid
        eyebrow="OUR HR PRACTICES"
        title="Our Range of HR Services"
        description="Scalable talent acquisition, executive leadership search, and compliant workforce advisory designed for modern software enterprises."
        services={hrServices}
        id="services"
      />

      {/* 06. Full-Width Navy Feature Section */}
      <NavyFeatureSection
        eyebrow="WHY VARNITH STANDS OUT"
        heading="Why Businesses Choose Varnith"
        benefits={featureBenefits}
        image="/assets/about_empowering.jpg"
        badgeTitle="10+ Years"
        badgeSubtitle="Corporate Recruitment Experience"
      />

      {/* 07. Three-Column Offering Section (Lumintu Pricing / Packages style) */}
      <OfferingCards
        eyebrow="ENGAGEMENT MODELS"
        title="Flexible Hiring Engagements Built for Scale"
        description="Choose the recruitment model that aligns with your headcount requirements and delivery milestones."
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
        description="Real feedback from corporate technology teams who scaled their engineering teams with Varnith Technologies."
      />

      {/* 10. Contact / Enquiry Section */}
      <EnquirySection
        eyebrow="START HIRING TODAY"
        title="Ready to Strengthen Your Team?"
        description="Schedule a consultation with our senior talent acquisition practice leads in Madhapur, Hyderabad. We'll analyze your open roles and present a calibrated hiring strategy."
        checklist={[
          "Calibrated candidate shortlists delivered within 14 days",
          "Dedicated account manager with single point of contact",
          "90-day candidate replacement assurance",
          "Transparent, non-binding initial requirement consultation"
        ]}
        serviceOptions={[
          "Talent Acquisition (Software & Cloud)",
          "Executive Search (VP & Director)",
          "Recruitment Process Outsourcing (RPO)",
          "Contract Staffing & Squad Deployment",
          "HR Advisory & Compliance Support",
          "General HR Consulting Enquiry"
        ]}
        storageKey="varnith_hr_enquiries"
        id="enquiry"
      />

    </div>
  );
}
