import React from 'react';

const steps = [
  {
    num: '01',
    title: 'Requirement',
    desc: 'We listen first: understanding the role, technical stack, team culture, and business impact.'
  },
  {
    num: '02',
    title: 'Role Brief',
    desc: 'We document explicit hiring criteria together, ensuring mutual alignment before searching.'
  },
  {
    num: '03',
    title: 'Sourcing',
    desc: 'We tap passive networks, verified talent communities, and our training alumni pool.'
  },
  {
    num: '04',
    title: 'Screening',
    desc: 'We conduct technical evaluations and preliminary interviews to verify competency and fit.'
  },
  {
    num: '05',
    title: 'Shortlist',
    desc: 'You receive a curated selection of top candidates with detailed evaluation summaries.'
  },
  {
    num: '06',
    title: 'Interviews',
    desc: 'We facilitate round scheduling, candidate briefing, and structured debriefing.'
  },
  {
    num: '07',
    title: 'Offer',
    desc: 'We support compensation alignment, expectations management, and offer acceptance.'
  },
  {
    num: '08',
    title: 'Onboarding',
    desc: 'We maintain touchpoints through the probationary period to ensure long-term retention.'
  }
];

export default function LearningJourney() {
  return (
    <section className="bg-[#f7f9fc] py-16 sm:py-20 border-b border-[#e3e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-[#1e5bc6]">
            Structured Process
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#00184a] tracking-tight">
            How We Hire
          </h2>
          <p className="text-base sm:text-lg text-[#5b6b85] leading-relaxed">
            A disciplined 8-stage methodology that turns ambiguous hiring requirements into high-retention corporate placements.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#e3e8f0] rounded-xl p-6 hover:border-[#1e5bc6] transition-colors space-y-2 relative"
            >
              <div className="text-xs font-mono font-bold text-[#1e5bc6] bg-[#1e5bc6]/10 px-2.5 py-1 rounded w-fit">
                Step {st.num}
              </div>
              <h3 className="text-lg font-bold text-[#00184a] pt-1">
                {st.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#5b6b85] leading-relaxed">
                {st.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
