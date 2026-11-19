import React from 'react';
import { UserCheck, FileText, CheckCircle, Clock, ShieldCheck } from 'lucide-react';

const promises = [
  {
    icon: UserCheck,
    title: 'One Point of Contact',
    desc: 'One dedicated lead who knows your technical stack, your team culture, and your delivery milestones from start to finish.'
  },
  {
    icon: FileText,
    title: 'Written Role Brief Before Sourcing',
    desc: 'We agree on what good looks like before searching, establishing explicit evaluation criteria so nobody’s time is wasted.'
  },
  {
    icon: CheckCircle,
    title: 'Screened Shortlists Only',
    desc: 'Fewer resumes, better conversations. You only interview verified candidates we have technically evaluated in live sandboxes.'
  },
  {
    icon: Clock,
    title: 'Regular Updates Without Chasing',
    desc: 'You receive structured progress updates at an agreed rhythm. You never have to chase for candidate feedback or status.'
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-[#F8F9FA] py-16 sm:py-20 lg:py-24 border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#00A859]" />
            <span className="text-xs sm:text-sm font-bold tracking-wider text-[#00A859] uppercase">
              THE VARNITH COMMITMENT
            </span>
            <span className="h-2 w-2 rounded-full bg-[#00A859]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#16191D] tracking-tight">
            Why Choose <span className="text-[#00A859]">Varnith</span>
          </h2>

          <p className="text-base sm:text-lg text-[#5E6874] leading-relaxed">
            We operate with the accountability and transparency of an in-house talent team, backed by deep technical evaluation rigor.
          </p>
        </div>

        {/* 4 Pillars Grid matching Template */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {promises.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-[#E5E7EB] rounded-xl p-6 sm:p-7 hover:border-[#00A859] hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-[#EAF7EE] text-[#00A859] group-hover:bg-[#00A859] group-hover:text-white transition-colors flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-[#16191D] group-hover:text-[#00A859] transition-colors">
                    {p.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5E6874] leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#E5E7EB] flex items-center gap-2 text-xs font-semibold text-[#00A859]">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>Guaranteed Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Performance Metrics Bar matching Acuvic About stats */}
        <div className="mt-12 bg-white border border-[#E5E7EB] rounded-xl p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#00A859]">&lt; 14 Days</div>
            <div className="text-xs sm:text-sm text-[#5E6874] font-medium mt-1">Average Sourcing Turnaround</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#16191D]">96.4%</div>
            <div className="text-xs sm:text-sm text-[#5E6874] font-medium mt-1">Technical Screening Accuracy</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#00A859]">90 Days</div>
            <div className="text-xs sm:text-sm text-[#5E6874] font-medium mt-1">Free Replacement Warranty</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#16191D]">10+ Yrs</div>
            <div className="text-xs sm:text-sm text-[#5E6874] font-medium mt-1">Industry Mentor Experience</div>
          </div>
        </div>

      </div>
    </section>
  );
}
