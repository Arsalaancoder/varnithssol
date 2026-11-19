import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Briefcase, UserCheck, ShieldCheck, FileCheck, Brain, Server, Shield, GraduationCap, Code2, LineChart, CheckCircle2 } from 'lucide-react';
import { siteData } from '../data/siteData';

// All verified offerings specified by client
const allServicesList = [
  // HR Consulting Offerings
  {
    id: 'talent-acquisition',
    category: 'hr',
    categoryLabel: 'HR Consulting',
    title: 'Talent Acquisition',
    shortDesc: 'End-to-end recruitment matching enterprise hiring demands with pre-assessed, high-caliber tech talent in Hyderabad and pan-India.',
    icon: Users,
    link: '/and/hr-services/recruitment',
    points: ['Live sandbox technical evaluation', 'Screened shortlists within 48-72h', '90-day replacement guarantee']
  },
  {
    id: 'rpo',
    category: 'hr',
    categoryLabel: 'HR Consulting',
    title: 'Recruitment Process Outsourcing',
    shortDesc: 'Scalable recruitment outsourcing taking over part or all of your talent acquisition lifecycle to reduce cost and time-to-hire.',
    icon: Briefcase,
    link: '/and/hr-services/staffing',
    points: ['Dedicated recruiter pods', 'ATS workflow integration', 'Transparent SLA & metrics reporting']
  },
  {
    id: 'executive-hiring',
    category: 'hr',
    categoryLabel: 'HR Consulting',
    title: 'Executive Hiring',
    shortDesc: 'Discreet search and placement for technology leaders, VP of Engineering, Directors, and senior architectural consultants.',
    icon: UserCheck,
    link: '/and/hr-services/recruitment',
    points: ['Confidential leadership mapping', 'Deep technical competency audits', 'Executive offer negotiation']
  },
  {
    id: 'contract-staffing',
    category: 'hr',
    categoryLabel: 'HR Consulting',
    title: 'Contract Staffing',
    shortDesc: 'Flexible contingent and contract-to-hire tech talent with direct payroll, statutory compliance, and onboarding coverage.',
    icon: FileCheck,
    link: '/and/hr-services/staffing',
    points: ['Rapid 72-hour deployment window', '100% PF/ESI/statutory compliance', 'Contract-to-hire flexibility']
  },
  {
    id: 'hr-advisory',
    category: 'hr',
    categoryLabel: 'HR Consulting',
    title: 'HR Advisory & Strategy',
    shortDesc: 'Strategic guidance on organization structure, compensation benchmarking, retention frameworks, and performance metrics.',
    icon: Brain,
    link: '/and/hr-services/hr-consulting',
    points: ['Compensation & salary banding', 'Workplace culture assessments', 'Retention & succession roadmaps']
  },
  {
    id: 'talent-intelligence',
    category: 'hr',
    categoryLabel: 'HR Consulting',
    title: 'Talent Intelligence & Workforce Planning',
    shortDesc: 'Data-driven talent mapping, market salary insights, and competitive availability reports across Tier-1 tech ecosystems.',
    icon: LineChart,
    link: '/and/hr-services/workforce-management',
    points: ['Tech ecosystem talent mapping', 'Real-time compensation analytics', 'Capacity & demand forecasting']
  },

  // Training & Development Offerings
  {
    id: 'sap-basis-security',
    category: 'training',
    categoryLabel: 'Training & Development',
    title: 'SAP Basis Security',
    shortDesc: 'Hands-on enterprise SAP Basis administration, system architecture, role design, client copies, and kernel management.',
    icon: Server,
    link: '/and/courses/sap-basis-security',
    points: ['Live SAP NetWeaver sandbox labs', 'Authorizations & SU01/PFCG workflows', 'Transport Management System (TMS)']
  },
  {
    id: 'sap-grc',
    category: 'training',
    categoryLabel: 'Training & Development',
    title: 'SAP GRC & Access Control',
    shortDesc: 'Master SAP Governance, Risk, and Compliance (GRC 12.0/10.1) Access Control (ARA, ARM, EAM/Firefighter, and BRM).',
    icon: Shield,
    link: '/and/courses/sap-grc',
    points: ['Segregation of Duties (SoD) matrices', 'Firefighter / Emergency access config', 'Audit readiness & remediation workflows']
  },
  {
    id: 'college-engagements',
    category: 'training',
    categoryLabel: 'Training & Development',
    title: 'College Engagements & Campus Drives',
    shortDesc: 'Collaborative programs partnering with universities and colleges for specialized technical training and campus placement drives.',
    icon: GraduationCap,
    link: '/and/courses',
    points: ['Curriculum alignment with IT industry', 'Faculty development programs (FDP)', 'Structured campus placement drives']
  },
  {
    id: 'devops-cloud',
    category: 'training',
    categoryLabel: 'Training & Development',
    title: 'Technology Training: DevOps & Cloud',
    shortDesc: 'Production-grade CI/CD pipelines, Docker containers, Kubernetes orchestration, and AWS cloud infrastructure automation.',
    icon: Code2,
    link: '/and/courses/devops',
    points: ['Jenkins & GitHub Actions CI/CD', 'Terraform & Infrastructure-as-Code', 'AWS Cloud Architecture & Kubernetes']
  },
  {
    id: 'career-development',
    category: 'training',
    categoryLabel: 'Training & Development',
    title: 'Career Development & QA Engineering',
    shortDesc: 'Comprehensive manual, automation, and API testing tracks paired with resume engineering and mock technical interviews.',
    icon: ShieldCheck,
    link: '/and/courses/testing',
    points: ['Selenium WebDriver & Postman automation', 'Resume architecture & GitHub profiles', 'Direct interview referrals']
  }
];

export default function HRServices() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredServices = activeTab === 'all'
    ? allServicesList
    : allServicesList.filter(s => s.category === activeTab);

  return (
    <section id="services" className="bg-white py-16 sm:py-20 lg:py-24 border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching Template: Business Shaped Solutions */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#00A859]" />
            <span className="text-xs sm:text-sm font-bold tracking-wider text-[#00A859] uppercase">
              OUR SERVICE OFFERINGS
            </span>
            <span className="h-2 w-2 rounded-full bg-[#00A859]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#16191D] tracking-tight">
            Business <span className="text-[#00A859]">Shaped</span> Solutions
          </h2>

          <p className="text-base sm:text-lg text-[#5E6874] leading-relaxed">
            From strategic talent sourcing and leadership hiring to practical technology training, we help organizations build and scale high-performing technical teams.
          </p>

          {/* Clean Category Filter Tabs matching Template */}
          <div className="inline-flex p-1 bg-[#F8F9FA] border border-[#E5E7EB] rounded-lg mt-6">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-md transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#00A859] text-white shadow-xs'
                  : 'text-[#5E6874] hover:text-[#16191D]'
              }`}
            >
              All Solutions ({allServicesList.length})
            </button>
            <button
              onClick={() => setActiveTab('hr')}
              className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-md transition-all cursor-pointer ${
                activeTab === 'hr'
                  ? 'bg-[#00A859] text-white shadow-xs'
                  : 'text-[#5E6874] hover:text-[#16191D]'
              }`}
            >
              HR Consulting (6)
            </button>
            <button
              onClick={() => setActiveTab('training')}
              className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-md transition-all cursor-pointer ${
                activeTab === 'training'
                  ? 'bg-[#00A859] text-white shadow-xs'
                  : 'text-[#5E6874] hover:text-[#16191D]'
              }`}
            >
              Training & Development (5)
            </button>
          </div>
        </div>

        {/* Clean Service Cards Grid matching Template */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white border border-[#E5E7EB] rounded-xl p-6 sm:p-7 hover:border-[#00A859] hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group relative"
              >
                {/* Top subtle green accent line on hover */}
                <div className="absolute top-0 left-6 right-6 h-0.5 bg-[#00A859] opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />

                <div className="space-y-4">
                  {/* Category Pill and Icon */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-lg bg-[#EAF7EE] text-[#00A859] group-hover:bg-[#00A859] group-hover:text-white transition-colors flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-[#5E6874] uppercase tracking-wider bg-[#F8F9FA] px-2.5 py-1 rounded border border-[#E5E7EB]">
                      {service.categoryLabel}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#16191D] group-hover:text-[#00A859] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#5E6874] leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>

                  {/* Inclusions list */}
                  <ul className="space-y-2 pt-3 border-t border-[#E5E7EB] text-xs text-[#16191D]">
                    {service.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00A859] shrink-0 mt-0.5" />
                        <span className="text-[#5E6874]">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Read More Action Link */}
                <div className="pt-5 mt-5 border-t border-[#E5E7EB]">
                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#00A859] group-hover:text-[#008F4C] transition-colors"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Bottom Banner Note */}
        <div className="mt-12 bg-[#F8F9FA] border border-[#E5E7EB] rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base font-bold text-[#16191D]">
              Looking for a custom hiring package or corporate batch training?
            </h4>
            <p className="text-xs sm:text-sm text-[#5E6874]">
              Speak directly with our technical staffing leads in Madhapur, Hyderabad.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link to="/and/contact" className="btn-green text-xs px-5 py-2.5">
              Talk to Our Team
            </Link>
            <a href={`tel:${siteData.brand.rawPhone}`} className="btn-outline text-xs px-5 py-2.5">
              Call {siteData.brand.phone}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
