import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Cloud, Database, CheckSquare, Layers, Award, ArrowRight } from 'lucide-react';

const domains = [
  {
    category: 'FULL-STACK SCALE',
    title: 'Software Engineering',
    titleMuted: 'for high-throughput systems.',
    desc: 'Full-stack developers, frontend specialists, backend architects, and mobile engineers across modern enterprise stacks.',
    icon: Code,
    skills: ['Java / Spring Boot', 'Python / Django', 'React / Next.js', 'Node.js / TS', 'Go Microservices']
  },
  {
    category: 'CLOUD INFRASTRUCTURE',
    title: 'Cloud & DevOps',
    titleMuted: 'for automated delivery.',
    desc: 'Cloud architects, SREs, and platform automation engineers managing multi-cloud Kubernetes clusters.',
    icon: Cloud,
    skills: ['AWS / Azure / GCP', 'Kubernetes & Docker', 'Terraform & IaC', 'CI/CD Pipelines', 'Prometheus']
  },
  {
    category: 'DATA & INTELLIGENCE',
    title: 'Data & AI Analytics',
    titleMuted: 'for actionable insights.',
    desc: 'Data engineers, BI developers, and machine learning specialists architecting modern data warehouses.',
    icon: Database,
    skills: ['Python & PySpark', 'Power BI / Tableau', 'SQL Warehousing', 'Snowflake', 'ETL Pipelines']
  },
  {
    category: 'QUALITY ASSURANCE',
    title: 'Quality Engineering',
    titleMuted: 'for production stability.',
    desc: 'SDETs, test automation engineers, and API performance specialists building automated test frameworks.',
    icon: CheckSquare,
    skills: ['Selenium WebDriver', 'Postman / REST APIs', 'Playwright', 'JMeter Load Testing', 'TestNG']
  },
  {
    category: 'ENTERPRISE ERP',
    title: 'SAP & Enterprise',
    titleMuted: 'for audit & compliance.',
    desc: 'Enterprise ERP administrators, security leads, and functional consultants specializing in S/4HANA.',
    icon: Layers,
    skills: ['SAP Basis Security', 'SAP GRC 12.0', 'Role Architecture', 'TMS Transport', 'S/4HANA Migration']
  },
  {
    category: 'EXECUTIVE SEARCH',
    title: 'Technology Leadership',
    titleMuted: 'for enterprise direction.',
    desc: 'Directors of engineering, VP of technology, technical product leads, and principal practice architects.',
    icon: Award,
    skills: ['VP of Engineering', 'Director of DevOps', 'Principal Architect', 'Engineering Manager']
  }
];

export default function WhoWeHireFor() {
  return (
    <section id="who-we-hire-for" className="bg-white py-16 sm:py-20 lg:py-24 border-b border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-2">
          <span className="text-xs font-bold text-[#063568] uppercase tracking-widest block">
            TECHNICAL SPECIALIZATION
          </span>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#171717] tracking-tight">
            Who We <span className="text-[#063568]">Hire For</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#666F7B] leading-relaxed">
            We evaluate, verify, and place high-performing talent across the six most critical domains in modern engineering.
          </p>
        </div>

        {/* 6-Item Grid matching Reference Card Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {domains.map((dom, idx) => {
            const Icon = dom.icon;
            return (
              <div
                key={idx}
                className="relative bg-gradient-to-br from-white via-white to-blue-50/30 border border-slate-100 rounded-2xl p-6 sm:p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(6,53,104,0.12)] hover:border-[#063568]/30 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Top Corner Subtle Wash */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-blue-100/20 rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10 space-y-4">
                  {/* Circular Icon Badge */}
                  <div className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-xs flex items-center justify-center text-[#16191D] group-hover:text-[#063568] group-hover:border-[#063568]/40 transition-colors">
                    <Icon className="w-5 h-5 stroke-[1.75]" />
                  </div>

                  {/* Uppercase Category Label */}
                  <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider block">
                    {dom.category}
                  </span>

                  {/* Two-Tone Striking Heading */}
                  <h3 className="text-xl font-extrabold text-[#0F172A] leading-snug tracking-tight">
                    {dom.title}{' '}
                    <span className="text-[#94A3B8] font-medium">
                      {dom.titleMuted}
                    </span>
                  </h3>

                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed line-clamp-2">
                    {dom.desc}
                  </p>

                  <div className="pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {dom.skills.map((sk, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 bg-white text-[#0F172A] text-[11px] rounded-md border border-slate-200 font-medium shadow-xs"
                        >
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Pill Button: See More */}
                <div className="relative z-10 pt-6 mt-4">
                  <Link
                    to="/and/contact"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 shadow-xs text-xs font-semibold text-[#0F172A] hover:border-[#063568] hover:text-[#063568] hover:shadow-sm transition-all"
                  >
                    <span>See More</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#64748B] group-hover:text-[#063568] group-hover:translate-x-0.5 transition-all" />
                  </Link>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
