import React from 'react';
import { Users, Briefcase, GraduationCap, Award } from 'lucide-react';

const highlights = [
  {
    icon: Users,
    title: 'HR Consulting',
    desc: 'Strategic talent advisory, org structuring & compliance frameworks',
    metric: '340+',
    metricLabel: 'Enterprise Clients'
  },
  {
    icon: Briefcase,
    title: 'Talent Acquisition',
    desc: 'Calibrated tech sourcing with 14-day turnaround SLA',
    metric: '256+',
    metricLabel: 'Hires Placed'
  },
  {
    icon: GraduationCap,
    title: 'Technical Training',
    desc: 'Hands-on enterprise lab tracks with 80% practical immersion',
    metric: '450+',
    metricLabel: 'Trained Learners'
  },
  {
    icon: Award,
    title: 'Enterprise Skills',
    desc: 'Specialized SAP Basis Security, GRC 12.0, DevOps & Analytics',
    metric: '96.4%',
    metricLabel: 'Retention Rate'
  }
];

export default function HighlightsStrip() {
  return (
    <section className="bg-slate-50 border-b border-slate-200 py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 lg:divide-x divide-slate-200">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.title} 
                className={`flex flex-col justify-between space-y-3 ${idx > 0 ? 'pt-6 sm:pt-0 lg:pl-6' : ''}`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-md bg-white border border-slate-200 flex items-center justify-center text-[#0B2545] shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0F172A]">{item.title}</h4>
                    <span className="text-xs font-semibold text-[#0066CC]">{item.metric} {item.metricLabel}</span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

