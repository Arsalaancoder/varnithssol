import React from 'react';
import { UserCheck, FileText, CheckCircle, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const promises = [
  {
    category: 'SINGLE POINT CONTACT',
    title: 'One dedicated lead',
    titleMuted: 'who knows your stack.',
    desc: 'One consistent account lead who knows your technical stack, engineering managers, and delivery milestones.',
    icon: UserCheck
  },
  {
    category: 'DOCUMENTED SCOPE',
    title: 'Written role brief',
    titleMuted: 'before candidate sourcing.',
    desc: 'We agree on what good looks like before searching, establishing explicit criteria so nobody’s time is wasted.',
    icon: FileText
  },
  {
    category: 'VETTED CANDIDATES',
    title: 'Screened shortlists',
    titleMuted: 'in live cloud sandboxes.',
    desc: 'Fewer resumes, better conversations. You only interview verified candidates we have technically evaluated.',
    icon: CheckCircle
  },
  {
    category: 'PROACTIVE UPDATES',
    title: 'Regular updates',
    titleMuted: 'without ever chasing.',
    desc: 'Structured progress updates at an agreed rhythm. You never have to chase for candidate statuses or feedback.',
    icon: Clock
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-[#F8F9FA] py-16 sm:py-20 lg:py-24 border-b border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-2">
          <span className="text-xs font-bold text-[#063568] uppercase tracking-widest block">
            THE VARNITH COMMITMENT
          </span>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#171717] tracking-tight">
            Why Choose <span className="text-[#063568]">Varnith</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#666F7B] leading-relaxed">
            We operate with the accountability and transparency of an in-house talent team, backed by deep technical evaluation rigor.
          </p>
        </div>

        {/* 4 Pillars Grid matching Reference Card Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {promises.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="relative bg-gradient-to-br from-white via-white to-blue-50/30 border border-slate-100 rounded-2xl p-6 sm:p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(6,53,104,0.12)] hover:border-[#063568]/30 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Subtle corner glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100/20 rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10 space-y-4">
                  {/* Circular Icon Badge */}
                  <div className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-xs flex items-center justify-center text-[#16191D] group-hover:text-[#063568] group-hover:border-[#063568]/40 transition-colors">
                    <Icon className="w-5 h-5 stroke-[1.75]" />
                  </div>

                  {/* Uppercase Category Label */}
                  <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider block">
                    {p.category}
                  </span>

                  {/* Two-Tone Striking Heading */}
                  <h3 className="text-xl font-extrabold text-[#0F172A] leading-snug tracking-tight">
                    {p.title}{' '}
                    <span className="text-[#94A3B8] font-medium">
                      {p.titleMuted}
                    </span>
                  </h3>

                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed line-clamp-3">
                    {p.desc}
                  </p>
                </div>

                {/* Pill Button: See More */}
                <div className="relative z-10 pt-6 mt-4">
                  <Link
                    to="/and/why-us"
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
