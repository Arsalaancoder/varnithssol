import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Briefcase, UserCheck, FileCheck, ShieldAlert, LineChart, ArrowRight, CheckCircle2 } from 'lucide-react';

const hrPillars = [
  {
    icon: Users,
    title: 'Talent Acquisition',
    desc: 'Precision technical sourcing across modern software frameworks, cloud platforms, and enterprise data architectures.',
    link: '/and/hr-services/recruitment'
  },
  {
    icon: Briefcase,
    title: 'Recruitment Process Outsourcing (RPO)',
    desc: 'Scalable recruiter squads managing the full talent lifecycle from role design to calibrated onboarding.',
    link: '/and/hr-services/staffing'
  },
  {
    icon: UserCheck,
    title: 'Executive Search',
    desc: 'Discreet, retained search for VP of Technology, Principal Architects, and senior leadership positions.',
    link: '/and/hr-services/recruitment'
  },
  {
    icon: FileCheck,
    title: 'Contract Staffing',
    desc: 'Flexible technical staff augmentation with complete statutory compliance, rapid ramp-up, and zero payroll risk.',
    link: '/and/hr-services/staffing'
  },
  {
    icon: ShieldAlert,
    title: 'HR Advisory & Compliance',
    desc: 'Employment policy auditing, statutory frameworks, labor law adherence, and workforce retention roadmaps.',
    link: '/and/hr-services/hr-consulting'
  },
  {
    icon: LineChart,
    title: 'Talent Intelligence & Benchmarking',
    desc: 'Real-time compensation analytics, skills mapping, and geographic talent availability intelligence.',
    link: '/and/hr-services/hr-strategy'
  }
];

export default function HRConsultingSection() {
  return (
    <section id="hr-consulting" className="bg-[#F8FAFC] py-16 sm:py-20 lg:py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-Column Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold tracking-widest text-[#0066CC] uppercase">
              ENTERPRISE HR PRACTICE
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
              Comprehensive HR Consulting Designed for Modern Businesses
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Based in Madhapur, Hyderabad, Varnith operates as a strategic talent partner to software product companies and IT consulting firms. We eliminate recruitment friction through documented role briefs, hands-on technical vetting, and proactive communication.
            </p>
            <div className="pt-2">
              <Link
                to="/and/hr-services"
                className="btn-primary text-xs sm:text-sm px-6 py-2.5"
              >
                <span>Explore Full HR Practice</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-white">
              <img
                src="/assets/hr_talent.jpg"
                alt="Varnith HR Consulting Team at Work"
                className="w-full h-72 sm:h-80 object-cover"
              />
            </div>
          </div>
        </div>

        {/* 6 Grid Offerings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {hrPillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white border border-slate-200 rounded-lg p-6 hover:border-slate-300 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div className="space-y-3.5">
                  <div className="w-10 h-10 rounded-md bg-slate-50 border border-slate-200 flex items-center justify-center text-[#0B2545]">
                    <Icon className="w-5 h-5 stroke-[1.75]" />
                  </div>
                  <h3 className="text-base font-bold text-[#0F172A]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to={item.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0066CC] hover:text-[#0B2545] transition-colors"
                  >
                    <span>View Service Scope</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-[11px] font-semibold text-slate-400">14-Day SLA</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

