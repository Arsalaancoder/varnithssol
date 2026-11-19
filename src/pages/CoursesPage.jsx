import React from 'react';
import { 
  Server, 
  Shield, 
  Cloud, 
  Database, 
  GraduationCap, 
  Award,
  Terminal,
  Laptop,
  Users,
  Compass
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

export default function CoursesPage() {
  // 1. Statistics Bar Items
  const stats = [
    { title: '80% Practical', subtitle: 'PRACTICAL TRAINING', desc: 'Hands-on immersion inside dedicated cloud labs' },
    { title: '10+ Years Exp', subtitle: 'INDUSTRY-FOCUSED LEARNING', desc: 'Instruction by practicing enterprise engineers' },
    { title: 'Enterprise ERP', subtitle: 'TECHNICAL PROGRAMS', desc: 'SAP Basis Security, GRC 12.0, DevOps & Data' },
    { title: 'Placement Ready', subtitle: 'CAREER DEVELOPMENT', desc: 'Direct corporate recruitment introductions' }
  ];

  // 2. Training Programs Grid (6 Cards with Navy Square Icon Container)
  const trainingServices = [
    {
      title: 'SAP Basis Security',
      description: 'Master enterprise SAP authorization architecture, PFCG role design, SU01 user administration, TMS transport routes, and audit hardening in live cloud labs.',
      icon: Server,
      actionText: 'View Syllabus & Lab Scope',
      link: '/and/courses/sap-basis-security'
    },
    {
      title: 'SAP GRC 12.0',
      description: 'Implement Segregation of Duties (SoD) risk matrices, Access Risk Analysis (ARA), Emergency Access Management (EAM Firefighter), and Access Request (ARM) workflows.',
      icon: Shield,
      actionText: 'View GRC Curriculum',
      link: '/and/courses/sap-grc'
    },
    {
      title: 'DevOps & Cloud Engineering',
      description: 'Hands-on CI/CD pipeline automation, Docker containerization, Kubernetes cluster orchestration, Terraform Infrastructure as Code (IaC), and AWS architecture.',
      icon: Cloud,
      actionText: 'View DevOps Track',
      link: '/and/courses/devops'
    },
    {
      title: 'Data & BI Analytics',
      description: 'End-to-end data warehousing, Power BI interactive dashboard design, enterprise SQL ETL query optimization, and business intelligence reporting models.',
      icon: Database,
      actionText: 'View Analytics Syllabus',
      link: '#enquiry'
    },
    {
      title: 'College Engagements',
      description: 'Institutional campus training bootcamps, technical university workshops, and faculty development immersion bridging engineering academia with production.',
      icon: GraduationCap,
      actionText: 'Discuss Campus Cohort',
      link: '#enquiry'
    },
    {
      title: 'Career Development & Placement',
      description: 'Technical portfolio audits, resume calibration, mock scenario interviews with enterprise architects, and direct introductions to corporate hiring partners.',
      icon: Award,
      actionText: 'Explore Placement Pipeline',
      link: '#enquiry'
    }
  ];

  // 3. Dark Navy Feature Section Benefits
  const featureBenefits = [
    {
      title: 'Practical Industry-Oriented Training',
      desc: 'Learners spend 80% of their course hours configuring live authorization roles, troubleshooting transport errors, and architecting real deployments.',
      icon: Terminal
    },
    {
      title: 'Experienced Technical Mentors',
      desc: 'Our faculty consists of active senior software practitioners and certified SAP architects who administer enterprise client production systems daily.',
      icon: Users
    },
    {
      title: 'Hands-On Learning Approach',
      desc: 'Every participant receives dedicated 24/7 cloud sandbox workstation access with enterprise licenses, not simulated slides or passive lectures.',
      icon: Laptop
    },
    {
      title: 'Career-Focused Skill Development',
      desc: 'We train learners on the exact scenarios, interview evaluations, and audit checks software enterprises look for during their candidate vetting.',
      icon: Compass
    }
  ];

  // 4. 3-Column Program Offerings
  const offerings = [
    {
      category: 'ENTERPRISE ERP',
      title: 'SAP Security & GRC',
      description: 'Comprehensive enterprise authorization, risk compliance, and audit governance track with SU01/PFCG and GRC 12.0 sandbox workstations.',
      features: [
        'Live S/4HANA & NetWeaver Cloud Workstation',
        'PFCG Single, Composite & Derived Roles',
        'Segregation of Duties (SoD) & ARA Rulesets',
        'Firefighter EAM Workflows & Audit Logs',
        'Weekend & Weekday Flexible Cohorts'
      ],
      ctaText: 'Enquire for SAP Track',
      ctaHref: '#enquiry'
    },
    {
      category: 'CLOUD AUTOMATION',
      title: 'Enterprise DevOps Track',
      description: 'End-to-end cloud infrastructure automation covering containerization, Kubernetes cluster management, and Infrastructure as Code.',
      isFeatured: true,
      features: [
        'Dedicated AWS Cloud Infrastructure Sandbox',
        'Production Docker & Multi-Node Kubernetes',
        'Terraform Infrastructure as Code (IaC) Labs',
        'Jenkins & GitHub Actions CI/CD Pipelines',
        'Monitoring with Prometheus & Grafana'
      ],
      ctaText: 'Enquire for DevOps Track',
      ctaHref: '#enquiry'
    },
    {
      category: 'ACADEMIC & EARLY CAREER',
      title: 'Career Development Programs',
      description: 'Power BI Data Analytics, college campus hackathons, faculty immersion, and comprehensive technical placement interview prep.',
      features: [
        'Hands-on Power BI & SQL Data Warehousing',
        'Resume Calibration & LinkedIn Optimization',
        'Architect-Led Technical Mock Interviews',
        'Campus Placement Bootcamps for Universities',
        'Direct Corporate Client Interview Introductions'
      ],
      ctaText: 'Enquire for Career Programs',
      ctaHref: '#enquiry'
    }
  ];

  // 5. 6-Step Training Methodology
  const processSteps = [
    {
      num: '01',
      title: 'Course Enquiry',
      desc: 'Connect with our student advisory team to explore course syllabi, prerequisite requirements, batch schedules, and career transition pathways.'
    },
    {
      num: '02',
      title: 'Training Requirement Discussion',
      desc: 'Our technical counselors evaluate your current technical background to guide you into the appropriate beginner, intermediate, or advanced track.'
    },
    {
      num: '03',
      title: 'Program Selection & Sandbox Setup',
      desc: 'Enrollment confirmation, syllabus distribution, and provisioning of your dedicated cloud sandbox environment credentials.'
    },
    {
      num: '04',
      title: 'Practical Hands-On Training',
      desc: '80% practical immersion with instructor-led sessions, live scenario troubleshooting, role design exercises, and real cloud lab tasks.'
    },
    {
      num: '05',
      title: 'Assessment & Capstone Evaluation',
      desc: 'Execute an end-to-end audit scenario or architecture deployment evaluated directly by our senior technical practice mentors.'
    },
    {
      num: '06',
      title: 'Career Guidance & Placement',
      desc: 'Resume optimization, technical interview debriefs, and introductions to hiring managers across our corporate recruitment client network.'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      
      {/* 01. Lumintu Hero Section */}
      <CorporateHero
        eyebrow="ENTERPRISE TECHNICAL TRAINING"
        heading="Build Practical Skills. Develop Industry-Ready Professionals."
        description="Industry-focused technical training in SAP Basis Security, SAP GRC, DevOps, and Data Analytics, delivered with practical learning and professional guidance."
        primaryBtn={{ text: "Explore Training Programs", href: "#services" }}
        secondaryBtn={{ text: "Request Course Details", href: "#enquiry" }}
        mainImage="/assets/about_mentor.jpg"
        secondaryImage="/assets/experience_lab.jpg"
        badgeNumber="80% Practical"
        badgeLabel="Dedicated Sandbox Lab Immersion"
      />

      {/* 02. Full-Width Navy Statistics Bar */}
      <StatisticsBar items={stats} />

      {/* 03. Introduction Section (Lumintu Collage) */}
      <IntroductionCollage
        eyebrow="ABOUT OUR TRAINING DIVISION"
        title="Practical Learning for Professional Growth"
        leadParagraph="Varnith Technologies provides practical, lab-intensive IT upskilling designed to transition engineers from academic theory into enterprise production competence."
        secondaryDescription="Because our recruiters actively hire software, ERP, and cloud talent for leading enterprises, we teach the exact configurations, tools, and security standards companies evaluate. Our classrooms are equipped with live enterprise systems, giving each learner real-world troubleshooting experience."
        highlights={[
          "80% practical configuration inside dedicated 24/7 cloud workstations",
          "Mentorship by senior practicing architects with 10+ years field experience",
          "Comprehensive capstone implementations aligned with real audit scenarios",
          "Direct interview pipeline to Varnith's corporate hiring partner network"
        ]}
        ctaText="Request Course Syllabus"
        ctaHref="#enquiry"
        primaryImage="/assets/lab_student_portrait.jpg"
        secondaryImage="/assets/experience_presentation.jpg"
      />

      {/* 04. Technology Ecosystem Strip */}
      <PartnerLogoStrip title="PRACTICE ON MODERN ENTERPRISE PLATFORMS & SOFTWARE LABS" />

      {/* 05. Our Range of Services (Exact Lumintu Service Cards) */}
      <ServiceGrid
        eyebrow="TECHNICAL PROGRAMS"
        title="Our Range of Training Programs"
        description="Hands-on learning tracks across enterprise ERP, cloud infrastructure automation, and data intelligence."
        services={trainingServices}
        id="services"
      />

      {/* 06. Full-Width Navy Feature Section */}
      <NavyFeatureSection
        eyebrow="WHY LEARN WITH VARNITH"
        heading="Why Learn With Varnith"
        benefits={featureBenefits}
        image="/assets/experience_lab.jpg"
        badgeTitle="24/7 Labs"
        badgeSubtitle="Dedicated Cloud Workstations"
      />

      {/* 07. Three-Column Offering Section (Lumintu Pricing / Packages style) */}
      <OfferingCards
        eyebrow="TRAINING TRACKS"
        title="Comprehensive Learning Programs Designed for Career Growth"
        description="Select the technical specialization that aligns with your professional development and enterprise aspirations."
        offerings={offerings}
      />

      {/* 08. How Our Process Works Section */}
      <ProcessSection
        eyebrow="LEARNING METHODOLOGY"
        title="How Our Process Works"
        subtitle="A step-by-step path taking learners from fundamental concepts to production-grade implementation."
        steps={processSteps}
        featuredImage="/assets/about_mentor.jpg"
      />

      {/* 09. Testimonials Section */}
      <TestimonialSection
        eyebrow="ALUMNI FEEDBACK"
        title="What Our Successful Learners Say"
        description="Verified reviews from professionals who completed hands-on training tracks and accelerated their careers."
      />

      {/* 10. Contact / Enquiry Section */}
      <EnquirySection
        eyebrow="ENQUIRE FOR UPCOMING BATCHES"
        title="Ready to Advance Your Skills?"
        description="Contact our admissions and technical advisory team in Madhapur, Hyderabad. Ask about the next weekday or weekend cohort schedule and secure your sandbox access."
        checklist={[
          "24/7 dedicated cloud workstation sandbox access",
          "Flexible weekend and weekday batch timing options",
          "Direct mentor guidance from senior enterprise software architects",
          "Comprehensive syllabus, lab guidebooks, and mock interview prep"
        ]}
        serviceOptions={[
          "SAP Basis Security (Weekend / Weekday)",
          "SAP GRC 12.0 Access Control",
          "DevOps & Cloud Engineering (Docker, K8s, AWS)",
          "Data & BI Analytics (Power BI / SQL)",
          "College Engagements & Campus Drives",
          "General Training Enquiry"
        ]}
        storageKey="varnith_training_enquiries"
        id="enquiry"
      />

    </div>
  );
}
