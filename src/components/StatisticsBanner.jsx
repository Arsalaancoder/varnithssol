import React from 'react';
import { Users, Briefcase, Award, Clock } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '340+',
    label: 'ACTIVE CLIENTS & PARTNERS',
    sub: 'Trusted enterprises across India'
  },
  {
    icon: Briefcase,
    value: '256+',
    label: 'SPECIALIST HIRES PLACED',
    sub: 'Across SAP, Cloud & Engineering'
  },
  {
    icon: Award,
    value: '96.4%',
    label: 'CLIENT RETENTION RATE',
    sub: 'Verified hiring satisfaction'
  },
  {
    icon: Clock,
    value: '< 14 Days',
    label: 'TIME-TO-SHORTLIST SLA',
    sub: 'Rapid turnaround delivery'
  }
];

export default function StatisticsBanner() {
  return (
    <section className="bg-[#00A859] text-white py-10 sm:py-12 border-y border-[#008F4C] relative overflow-hidden">
      {/* Subtle decorative geometric overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-white/20">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={stat.label} 
                className={`flex flex-col items-center text-center ${idx > 0 ? 'pt-6 lg:pt-0 lg:pl-6' : ''}`}
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white/90">
                  {stat.label}
                </div>
                <div className="text-[11px] text-white/75 mt-0.5 hidden sm:block">
                  {stat.sub}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
