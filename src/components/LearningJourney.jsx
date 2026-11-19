import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const hiringSteps = [
  {
    num: '01',
    title: 'Requirement',
    titleMuted: 'and culture discovery.',
    desc: 'We listen first: mapping technical stacks, team dynamics, and business milestones.'
  },
  {
    num: '02',
    title: 'Role Brief',
    titleMuted: 'agreed upfront.',
    desc: 'Explicit evaluation criteria documented together, ensuring mutual alignment before searching.'
  },
  {
    num: '03',
    title: 'Sourcing',
    titleMuted: 'passive tech talent.',
    desc: 'Direct outreach across verified candidate networks and proprietary engineer pipelines.'
  },
  {
    num: '04',
    title: 'Screening',
    titleMuted: 'in live cloud labs.',
    desc: 'Sandbox architecture audits and competency tests to verify genuine hands-on ability.'
  },
  {
    num: '05',
    title: 'Shortlist',
    titleMuted: 'calibrated dossiers.',
    desc: 'You receive calibrated candidate dossiers with transparent evaluation scorecards.'
  },
  {
    num: '06',
    title: 'Interviews',
    titleMuted: 'and briefing prep.',
    desc: 'We manage round schedules, candidate technical briefings, and debrief feedback.'
  },
  {
    num: '07',
    title: 'Offer',
    titleMuted: 'and joining assurance.',
    desc: 'Active compensation alignment and counter-offer engagement to eliminate dropouts.'
  },
  {
    num: '08',
    title: 'Onboarding',
    titleMuted: 'and probation warranty.',
    desc: '90-day replacement warranty and continuous check-ins through the probationary window.'
  }
];

export default function LearningJourney() {
  return (
    <section id="hiring-process" className="bg-white py-16 sm:py-20 lg:py-24 border-b border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-2">
          <span className="text-xs font-bold text-[#00A859] uppercase tracking-widest block">
            STRUCTURED RECRUITMENT METHODOLOGY
          </span>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#261C4E] tracking-tight">
            How We <span className="text-[#00A859]">Hire</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#666F7B] leading-relaxed">
            A disciplined 8-stage methodology that turns ambiguous hiring needs into verified, high-retention engineering placements.
          </p>
        </div>

        {/* 8-Stage Process Grid matching Reference Card Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hiringSteps.map((st) => (
            <div
              key={st.num}
              className="relative bg-gradient-to-br from-white via-white to-blue-50/30 border border-slate-100 rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(0,168,89,0.12)] hover:border-[#00A859]/30 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Subtle corner glow */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-100/20 rounded-full blur-xl pointer-events-none" />

              <div className="relative z-10 space-y-3">
                {/* Circular Step Badge matching Reference Card Style */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-xs flex items-center justify-center font-extrabold text-sm text-[#00A859] group-hover:bg-[#00A859] group-hover:text-white group-hover:border-[#00A859] transition-colors">
                    {st.num}
                  </div>
                  <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider">
                    STAGE {st.num}
                  </span>
                </div>

                {/* Two-Tone Heading */}
                <h3 className="text-lg font-extrabold text-[#0F172A] leading-snug tracking-tight">
                  {st.title}{' '}
                  <span className="text-[#94A3B8] font-medium">
                    {st.titleMuted}
                  </span>
                </h3>

                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  {st.desc}
                </p>
              </div>

              {/* Status footer with pill */}
              <div className="relative z-10 pt-4 mt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="inline-flex items-center gap-1.5 text-[#00A859] font-semibold text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified SLA</span>
                </span>
                <Link
                  to="/and/hr-services"
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-white border border-slate-200 text-[11px] font-semibold text-[#0F172A] hover:border-[#00A859] hover:text-[#00A859] transition-all"
                >
                  <span>See More</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
