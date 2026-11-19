import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

const pillars = [
  {
    title: 'Structured Recruitment Approach',
    desc: 'We never circulate generic resumes. Every candidate profile is matched to written role briefs with documented competencies and verified work history.'
  },
  {
    title: 'Industry-Focused Talent Search',
    desc: 'Our recruiters actively engage in specialized software, cloud, and SAP communities, giving you access to passive technical talent not found on job boards.'
  },
  {
    title: 'Practical Technical Learning',
    desc: 'Our training programs provide 80% lab immersion in live sandboxes. Students master production setups rather than theoretical slides.'
  },
  {
    title: 'Professional Guidance & Mentorship',
    desc: 'Taught by working consultants with 10+ years of active enterprise experience who bring real architectural problem-solving into every session.'
  },
  {
    title: 'Business-Oriented Solutions',
    desc: 'Flexible hiring models including retained search, contingency talent acquisition, RPO squads, and corporate upskilling programs tailored to budget.'
  }
];

export default function WhyVarnithSection() {
  return (
    <section id="why-varnith" className="bg-[#F8FAFC] py-16 sm:py-20 lg:py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading and Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold tracking-widest text-[#0066CC] uppercase">
              WHY VARNITH
            </span>

            <h2 className="text-2xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
              Experienced Support. Practical Solutions.
            </h2>

            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Based in Bhanu Elite, Madhapur, Hyderabad, Varnith Technologies operates with the accountability of an in-house talent team and the rigor of an enterprise lab. We back our commitments with transparent operating SLAs.
            </p>

            {/* Checklist */}
            <div className="space-y-4 pt-2">
              {pillars.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 mt-0.5 text-[#0066CC]">
                    <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0F172A]">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/and/why-us"
                className="btn-primary text-xs sm:text-sm px-6 py-2.5"
              >
                <span>Read Our Commitments</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/and/contact"
                className="btn-outline text-xs sm:text-sm px-6 py-2.5"
              >
                <span>Schedule a Meeting</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Statistics & Image Showcase */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-white">
              <img
                src="/assets/experience_discussion.jpg"
                alt="Varnith Advisory and Delivery Team"
                className="w-full h-72 sm:h-80 object-cover"
              />
            </div>

            {/* SLA Metrics Box */}
            <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-xs grid grid-cols-2 gap-6 text-center">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0B2545]">&lt; 14 Days</div>
                <div className="text-xs font-semibold text-slate-500 uppercase mt-1">Shortlist SLA</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0066CC]">90 Days</div>
                <div className="text-xs font-semibold text-slate-500 uppercase mt-1">Replacement Guarantee</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0066CC]">96.4%</div>
                <div className="text-xs font-semibold text-slate-500 uppercase mt-1">Interview Pass Rate</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0B2545]">80%</div>
                <div className="text-xs font-semibold text-slate-500 uppercase mt-1">Practical Lab Immersion</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

