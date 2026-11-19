import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { 
  Server, 
  Terminal, 
  Laptop, 
  Users, 
  Compass, 
  Database, 
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

export default function CourseDetails() {
  const params = useParams();
  const location = useLocation();

  const pathParts = location.pathname.split('/').filter(Boolean);
  const pathSlug = pathParts[pathParts.length - 1];
  const activeSlug = params.slug || (pathSlug !== 'courses' ? pathSlug : null);

  const course = siteData.courses.find(
    c => c.slug === activeSlug || c.id === activeSlug
  ) || siteData.courses[0];

  // 1. Statistics Bar Items
  const stats = [
    { title: '80% Practical', subtitle: 'HANDS-ON CONFIGURATION', desc: 'Real production scenarios in live sandboxes' },
    { title: course.duration || '12 Weeks', subtitle: 'PROGRAM DURATION', desc: 'Weekend & weekday flexible batch formats' },
    { title: '24/7 Access', subtitle: 'CLOUD WORKSTATION', desc: 'Dedicated sandbox credentials with live licenses' },
    { title: 'Placement Ready', subtitle: 'CORPORATE PIPELINE', desc: 'Interview introductions to hiring partners' }
  ];

  // 2. Syllabus Highlights mapped to Lumintu Service Grid Cards
  const moduleCards = (course.highlights && course.highlights.length > 0)
    ? course.highlights.map((item, idx) => {
        const icons = [Server, Terminal, Laptop, Database, Compass, Award];
        return {
          title: `Module 0${idx + 1}: ${item.split('(')[0].trim()}`,
          description: item.includes('(')
            ? `Hands-on configuration covering ${item.split('(')[1].replace(')', '')}.`
            : `Practical enterprise implementation, troubleshooting, and audit-ready configuration.`,
          icon: icons[idx % icons.length],
          actionText: 'View Module Lab Details',
          link: '#enquiry'
        };
      })
    : [
        {
          title: 'Core Architecture & Environment Setup',
          description: 'Initial workstation provisioning, client configuration, and foundational enterprise principles.',
          icon: Server,
          actionText: 'View Details',
          link: '#enquiry'
        },
        {
          title: 'Live Lab Configuration Exercises',
          description: 'Hands-on guided walkthroughs executing production tasks on dedicated cloud servers.',
          icon: Terminal,
          actionText: 'View Details',
          link: '#enquiry'
        },
        {
          title: 'Enterprise Security & Audit Hardening',
          description: 'Implement authorization matrices, access control rules, and compliance frameworks.',
          icon: Shield,
          actionText: 'View Details',
          link: '#enquiry'
        },
        {
          title: 'Troubleshooting & Error Debugging',
          description: 'Diagnose common production issues, analyze trace logs, and resolve bottleneck incidents.',
          icon: Laptop,
          actionText: 'View Details',
          link: '#enquiry'
        },
        {
          title: 'Capstone Implementation Project',
          description: 'Complete an end-to-end scenario reviewed by practicing enterprise software mentors.',
          icon: Database,
          actionText: 'View Details',
          link: '#enquiry'
        },
        {
          title: 'Interview & Portfolio Calibration',
          description: 'Resume optimization, technical scenario debriefs, and corporate interview introductions.',
          icon: Award,
          actionText: 'View Details',
          link: '#enquiry'
        }
      ];

  // 3. Dark Navy Feature Benefits
  const featureBenefits = [
    {
      title: 'Practical Industry-Oriented Training',
      desc: 'Learners spend 80% of their curriculum configuring real systems inside 24/7 live cloud sandboxes.',
      icon: Terminal
    },
    {
      title: 'Experienced Technical Mentors',
      desc: 'Instruction led by active enterprise architects and software engineers with 10+ years field tenure.',
      icon: Users
    },
    {
      title: 'Real-World Production Scenarios',
      desc: 'You work on actual enterprise authorization roles, deployment pipelines, and database queries.',
      icon: Laptop
    },
    {
      title: 'Career-Focused Placement Pipeline',
      desc: 'Top performers receive direct interview introductions to hiring managers across our recruitment client network.',
      icon: Compass
    }
  ];

  // 4. Enrollment Offering Cards
  const offerings = [
    {
      category: 'FLEXIBLE SCHEDULE',
      title: 'Weekend Professional Batch',
      description: 'Engineered for working professionals seeking career transitions without disrupting work hours.',
      features: [
        'Saturday & Sunday Live Interactive Sessions',
        '24/7 Dedicated Cloud Sandbox Workstation Access',
        'Complete Session Video Recordings & Lab Manuals',
        'Weekend Mentor Office Hours & Debugging Support',
        'Official Certificate of Completion'
      ],
      ctaText: 'Enquire for Weekend Batch',
      ctaHref: '#enquiry'
    },
    {
      category: 'FAST-TRACK IMMERSION',
      title: 'Full-Immersion Cohort',
      description: 'Intensive weekday track combining daily instructor-led labs, code reviews, and scenario evaluations.',
      isFeatured: true,
      features: [
        'Daily Morning / Evening Interactive Batches',
        'Dedicated 1-on-1 Mentor Code & Lab Audits',
        'Comprehensive Real-World Capstone Project',
        'Priority Technical Mock Interview Scheduling',
        'Direct Placement Pipeline Introductions'
      ],
      ctaText: 'Enquire for Full-Immersion',
      ctaHref: '#enquiry'
    },
    {
      category: 'ENTERPRISE & CAMPUS',
      title: 'Corporate / Team Training',
      description: 'Customized cohort delivery tailored for engineering teams, software enterprises, or university campuses.',
      features: [
        'Customized Curriculum Tailored to Company Tech Stack',
        'Flexible Batch Scheduling for Enterprise Teams',
        'Hands-on Audits Aligned with Internal Standards',
        'Dedicated Enterprise Lead Instructor',
        'Employee Competency & Progress Reporting'
      ],
      ctaText: 'Discuss Enterprise Cohort',
      ctaHref: '#enquiry'
    }
  ];

  // 5. 6-Step Learning Methodology
  const processSteps = [
    {
      num: '01',
      title: 'Course Enquiry & Counseling',
      desc: `Connect with our student advisors to explore prerequisites, career prospects, and batch schedules for ${course.title}.`
    },
    {
      num: '02',
      title: 'Technical Requirement Discussion',
      desc: 'Our instructors evaluate your background to recommend the ideal study path and provision your sandbox access.'
    },
    {
      num: '03',
      title: 'Sandbox Provisioning & Onboarding',
      desc: 'You receive dedicated cloud workstation credentials, live system access licenses, and lab guidebooks.'
    },
    {
      num: '04',
      title: 'Practical Hands-On Training',
      desc: '80% practical immersion with instructor-led sessions, live troubleshooting, and real enterprise configurations.'
    },
    {
      num: '05',
      title: 'Assessment & Capstone Project',
      desc: 'Execute an end-to-end architecture implementation or audit setup reviewed directly by practicing architects.'
    },
    {
      num: '06',
      title: 'Career Guidance & Placement',
      desc: 'Resume optimization, technical interview mock rounds, and introductions to our corporate recruitment client network.'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      
      {/* 01. Lumintu Hero Section */}
      <CorporateHero
        eyebrow={`ENTERPRISE TECHNICAL TRAINING • ${course.category.toUpperCase()}`}
        heading={course.fullTitle || `Master ${course.title} with Hands-On Cloud Labs`}
        description={course.description}
        primaryBtn={{ text: "Explore Lab Curriculum", href: "#services" }}
        secondaryBtn={{ text: "Request Batch Details", href: "#enquiry" }}
        mainImage={course.image || "/assets/about_mentor.jpg"}
        secondaryImage="/assets/experience_lab.jpg"
        badgeNumber={course.duration || "80% Practical"}
        badgeLabel="Live Cloud Sandbox Workstation"
      />

      {/* 02. Full-Width Navy Statistics Bar */}
      <StatisticsBar items={stats} />

      {/* 03. Introduction Section (Lumintu Collage) */}
      <IntroductionCollage
        eyebrow="CURRICULUM OVERVIEW"
        title={`Practical Learning for Professional Growth`}
        leadParagraph={course.description}
        secondaryDescription={`Target Audience: ${course.targetAudience || 'Aspiring engineers, administrators, developers, and tech graduates seeking enterprise career growth.'}`}
        highlights={course.highlights ? course.highlights.slice(0, 4) : [
          "24/7 dedicated cloud workstation sandbox access with real licenses",
          "Mentorship by active enterprise software practitioners with 10+ years tenure",
          "Comprehensive capstone implementations aligned with real audit scenarios",
          "Direct interview pipeline to Varnith's corporate hiring partner network"
        ]}
        ctaText="Request Full Syllabus"
        ctaHref="#enquiry"
        primaryImage={course.image || "/assets/lab_student_portrait.jpg"}
        secondaryImage="/assets/experience_presentation.jpg"
      />

      {/* 04. Technology Ecosystem Strip */}
      <PartnerLogoStrip title={`PRACTICE ON REAL ENTERPRISE PLATFORMS & SOFTWARE LABS`} />

      {/* 05. Range of Curriculum Modules (Lumintu Service Cards) */}
      <ServiceGrid
        eyebrow="COURSE MODULES"
        title={`Curriculum Modules & Lab Exercises`}
        description={`Hands-on modules and practical implementation labs covered throughout the ${course.title} program.`}
        services={moduleCards}
        id="services"
      />

      {/* 06. Full-Width Navy Feature Section */}
      <NavyFeatureSection
        eyebrow="WHY LEARN WITH VARNITH"
        heading={`Why Learn ${course.title} with Varnith`}
        benefits={featureBenefits}
        image="/assets/experience_lab.jpg"
        badgeTitle="24/7 Labs"
        badgeSubtitle="Dedicated Cloud Workstations"
      />

      {/* 07. Three-Column Offering Section (Lumintu Pricing / Packages style) */}
      <OfferingCards
        eyebrow="ENROLLMENT OPTIONS"
        title={`Flexible Batch Options for Career Growth`}
        description={`Choose the learning format that fits your professional schedule and transition goals.`}
        offerings={offerings}
      />

      {/* 08. How Our Process Works Section */}
      <ProcessSection
        eyebrow="LEARNING METHODOLOGY"
        title="How Our Learning Process Works"
        subtitle="A step-by-step path taking learners from fundamental principles to production-grade implementation."
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
        title={`Ready to Master ${course.title}?`}
        description={`Contact our admissions and technical advisory team in Madhapur, Hyderabad. Ask about the next weekday or weekend cohort schedule for ${course.title}.`}
        checklist={[
          "24/7 dedicated cloud workstation sandbox access",
          "Flexible weekend and weekday batch timing options",
          "Direct mentor guidance from senior enterprise software architects",
          "Comprehensive syllabus, lab guidebooks, and mock interview prep"
        ]}
        serviceOptions={[
          course.title,
          "SAP Basis Security (Weekend / Weekday)",
          "SAP GRC 12.0 Access Control",
          "DevOps & Cloud Engineering",
          "Data & BI Analytics (Power BI / SQL)",
          "General Training Enquiry"
        ]}
        storageKey="varnith_course_enquiries"
        id="enquiry"
      />

    </div>
  );
}
