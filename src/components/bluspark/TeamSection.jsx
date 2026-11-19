import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Shield, Cpu, ArrowRight } from 'lucide-react';

const approachPillars = [
  {
    icon: Target,
    title: 'Enterprise Recruitment Methodology',
    role: 'Talent Acquisition & Staffing Practice',
    desc: 'Structured role briefs, live coding assessments, and calibrated candidate dossiers ensure engineering teams only meet candidates who fit 100% of the operational requirements.',
    image: '/assets/hr_carousel_1.jpg'
  },
  {
    icon: Shield,
    title: 'SAP Security & GRC Practice',
    role: 'Enterprise ERP Advisory & Lab',
    desc: 'Architectural immersion in SU01 authorization concepts, PFCG role builds, TMS transport logistics, and audit compliance matrices modeled on Fortune 500 implementations.',
    image: '/assets/hr_carousel_2.jpg'
  },
  {
    icon: Cpu,
    title: 'Cloud DevOps & Automation Practice',
    role: 'Infrastructure & Engineering Lab',
    desc: 'Hands-on practice deploying real-world Kubernetes clusters, Docker container pipelines, and Terraform configurations with 24/7 dedicated sandbox environments.',
    image: '/assets/hr_carousel_3.jpg'
  }
];

export default function TeamSection() {
  return (
    <section id="approach" className="bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="text-xs font-bold tracking-widest text-[#0066CC] uppercase">
            OUR APPROACH
          </span>

          <h2 className="text-2xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
            Practitioner-Led Execution Across Every Practice
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Our teams are comprised of working technical consultants and senior talent specialists who combine deep industry knowledge with disciplined operating methodologies.
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {approachPillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:border-slate-300 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="h-48 overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 space-y-2.5">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-md bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0066CC]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-[#0066CC] uppercase tracking-wide">
                        {item.role}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#0F172A]">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    to="/and/about"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B2545] hover:text-[#0066CC] transition-colors"
                  >
                    <span>Read about our methodology</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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

