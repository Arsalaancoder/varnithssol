import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const hiringSteps = [
  {
    num: '01',
    title: 'Requirement',
    desc: 'We listen first: understanding the role, technical stack, team culture, and business milestones.'
  },
  {
    num: '02',
    title: 'Role Brief',
    desc: 'We document explicit hiring criteria together, ensuring mutual alignment before searching.'
  },
  {
    num: '03',
    title: 'Sourcing',
    desc: 'We tap passive networks, verified talent communities, and our proprietary tech database.'
  },
  {
    num: '04',
    title: 'Screening',
    desc: 'We conduct technical evaluations and sandbox tests to verify genuine competency.'
  },
  {
    num: '05',
    title: 'Shortlist',
    desc: 'You receive a curated shortlist of top candidates with detailed evaluation scorecards.'
  },
  {
    num: '06',
    title: 'Interviews',
    desc: 'We coordinate rounds, brief candidates thoroughly, and gather feedback seamlessly.'
  },
  {
    num: '07',
    title: 'Offer',
    desc: 'We manage compensation expectations, counter-offer risks, and offer acceptance.'
  },
  {
    num: '08',
    title: 'Onboarding',
    desc: 'We maintain touchpoints through probation to ensure smooth integration and retention.'
  }
];

export default function LearningJourney() {
  return (
    <section id="hiring-process" className="bg-[#F8F9FA] py-16 sm:py-20 lg:py-24 border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#00A859]" />
            <span className="text-xs sm:text-sm font-bold tracking-wider text-[#00A859] uppercase">
              STRUCTURED RECRUITMENT METHODOLOGY
            </span>
            <span className="h-2 w-2 rounded-full bg-[#00A859]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#16191D] tracking-tight">
            How We <span className="text-[#00A859]">Hire</span>
          </h2>

          <p className="text-base sm:text-lg text-[#5E6874] leading-relaxed">
            A disciplined 8-stage methodology that turns ambiguous hiring needs into verified, high-retention enterprise engineering placements.
          </p>
        </div>

        {/* 8-Stage Process Grid matching Template */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hiringSteps.map((st) => (
            <div
              key={st.num}
              className="bg-white border border-[#E5E7EB] rounded-xl p-6 hover:border-[#00A859] hover:shadow-card-hover transition-all duration-300 relative group flex flex-col justify-between"
            >
              {/* Step indicator header */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#EAF7EE] text-[#00A859] font-black text-sm flex items-center justify-center group-hover:bg-[#00A859] group-hover:text-white transition-colors">
                    {st.num}
                  </div>
                  <span className="text-[11px] font-bold text-[#5E6874] uppercase tracking-wider">
                    Stage {st.num}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#16191D] group-hover:text-[#00A859] transition-colors mb-2">
                  {st.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#5E6874] leading-relaxed">
                  {st.desc}
                </p>
              </div>

              {/* Status dot */}
              <div className="pt-4 mt-4 border-t border-[#E5E7EB] flex items-center gap-2 text-xs font-semibold text-[#00A859]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Deliverable</span>
              </div>
            </div>
          ))}
        </div>

        {/* Process Guarantee Note */}
        <div className="mt-10 text-center">
          <Link
            to="/and/hr-services"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#00A859] hover:text-[#008F4C] hover:underline"
          >
            <span>Learn how we tailor this process for your team</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
