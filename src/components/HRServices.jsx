import React, { useState } from 'react';
import { Users, Briefcase, UserCheck, FileCheck, Server, Shield, Cloud, Database } from 'lucide-react';
import ServiceCard from './ServiceCard';

const servicesList = [
  {
    id: 'talent-acquisition',
    category: 'TALENT ACQUISITION',
    title: 'Source top talent',
    titleMuted: 'with precision vetting',
    subtitle: 'built directly into',
    subtitleMuted: 'your tech stack.',
    description: 'Pre-assessed software engineers evaluated in live cloud sandboxes with a 14-day turnaround SLA.',
    icon: Users,
    link: '/and/hr-services/recruitment'
  },
  {
    id: 'hr-consulting',
    category: 'HR CONSULTING',
    title: 'Align HR strategy',
    titleMuted: 'at every growth stage',
    subtitle: 'with data-backed',
    subtitleMuted: 'advisory frameworks.',
    description: 'Compensation benchmarking, org restructuring, and workplace retention roadmaps.',
    icon: Briefcase,
    link: '/and/hr-services/hr-consulting'
  },
  {
    id: 'executive-search',
    category: 'EXECUTIVE SEARCH',
    title: 'Secure tech leaders',
    titleMuted: 'with discreet search',
    subtitle: 'for VP & Director',
    subtitleMuted: 'strategic roles.',
    description: 'Targeted leadership mapping for VP of Engineering, Practice Leads, and Principal Architects.',
    icon: UserCheck,
    link: '/and/hr-services/recruitment'
  },
  {
    id: 'contract-staffing',
    category: 'CONTRACT STAFFING',
    title: 'Scale flexible teams',
    titleMuted: 'with fast deployment',
    subtitle: 'and full statutory',
    subtitleMuted: 'payroll coverage.',
    description: 'Contract-to-hire tech talent with 72-hour onboarding, PF/ESI compliance, and replacement assurance.',
    icon: FileCheck,
    link: '/and/hr-services/staffing'
  },
  {
    id: 'sap-basis-security',
    category: 'SAP BASIS SECURITY',
    title: 'Master ERP systems',
    titleMuted: 'with SU01 & PFCG',
    subtitle: 'authorizations in',
    subtitleMuted: 'live cloud labs.',
    description: 'Enterprise SAP Basis administration, TMS transports, kernel updates, and audit hardening.',
    icon: Server,
    link: '/and/courses/sap-basis-security'
  },
  {
    id: 'sap-grc',
    category: 'SAP GRC 12.0',
    title: 'Enforce compliance',
    titleMuted: 'with ARA rulesets',
    subtitle: 'and Firefighter EAM',
    subtitleMuted: 'audit controls.',
    description: 'Segregation of Duties (SoD) matrices, ARM provisioning workflows, and emergency access.',
    icon: Shield,
    link: '/and/courses/sap-grc'
  },
  {
    id: 'devops',
    category: 'CLOUD & DEVOPS',
    title: 'Automate delivery',
    titleMuted: 'with CI/CD pipelines',
    subtitle: 'and Kubernetes',
    subtitleMuted: 'orchestrations.',
    description: 'Docker containers, Terraform infrastructure as code, AWS cloud architectures, and monitoring.',
    icon: Cloud,
    link: '/and/courses/devops'
  },
  {
    id: 'data-analytics',
    category: 'DATA ANALYTICS',
    title: 'Drive actionable insights',
    titleMuted: 'with Power BI dashboards',
    subtitle: 'and scalable SQL',
    subtitleMuted: 'ETL pipelines.',
    description: 'Business intelligence modeling, automated reporting, and enterprise data warehousing.',
    icon: Database,
    link: '/and/courses'
  }
];

export default function HRServices() {
  const [activeTab, setActiveTab] = useState('all');

  const filtered = activeTab === 'all'
    ? servicesList
    : activeTab === 'hr'
      ? servicesList.filter(s => s.category.includes('TALENT') || s.category.includes('HR') || s.category.includes('EXECUTIVE') || s.category.includes('STAFFING'))
      : servicesList.filter(s => s.category.includes('SAP') || s.category.includes('CLOUD') || s.category.includes('DATA'));

  return (
    <section id="services" className="bg-[#F8F9FA] py-16 sm:py-20 lg:py-24 border-b border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-2">
          <span className="text-xs font-bold text-[#00A859] uppercase tracking-widest block">
            OUR BUSINESS OFFERINGS
          </span>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#261C4E] tracking-tight">
            Business <span className="text-[#00A859]">Shaped</span> Solutions
          </h2>

          <p className="text-xs sm:text-sm text-[#666F7B] leading-relaxed pt-1">
            Explore our specialized talent acquisition, workforce consulting, and enterprise technical training practices.
          </p>

          {/* Simple Clean Tabs */}
          <div className="pt-4 flex items-center justify-center gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#00A859] text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-[#261C4E] hover:text-[#00A859]'
              }`}
            >
              All Services
            </button>
            <button
              onClick={() => setActiveTab('hr')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeTab === 'hr'
                  ? 'bg-[#00A859] text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-[#261C4E] hover:text-[#00A859]'
              }`}
            >
              HR Consulting
            </button>
            <button
              onClick={() => setActiveTab('training')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeTab === 'training'
                  ? 'bg-[#00A859] text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-[#261C4E] hover:text-[#00A859]'
              }`}
            >
              IT Training
            </button>
          </div>
        </div>

        {/* 4-Column Clean Grid matching Reference Image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              category={service.category}
              title={service.title}
              titleMuted={service.titleMuted}
              subtitle={service.subtitle}
              subtitleMuted={service.subtitleMuted}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
