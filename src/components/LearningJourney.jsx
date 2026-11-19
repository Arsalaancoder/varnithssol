import React from 'react';
import { 
  Search, 
  FileText, 
  Users, 
  Terminal, 
  CalendarCheck, 
  Award,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const steps = [
  {
    num: '01',
    title: 'Discovery & Role Audit',
    desc: 'We analyze your workflows, engineering stack requirements, team dynamics, and delivery milestones.',
    icon: Search,
    highlight: true
  },
  {
    num: '02',
    title: 'Role Blueprint & Scorecard',
    desc: 'We design a detailed evaluation architecture aligned with hiring KPIs and competency benchmarks before sourcing.',
    icon: FileText
  },
  {
    num: '03',
    title: 'Targeted Sourcing & Outreach',
    desc: 'Direct outreach across verified candidate networks and proprietary developer communities for passive talent.',
    icon: Users
  },
  {
    num: '04',
    title: 'Screening & Sandbox Vetting',
    desc: 'Candidates undergo live cloud sandbox assessments and architecture audits to verify genuine hands-on ability.',
    icon: Terminal
  },
  {
    num: '05',
    title: 'Calibrated Shortlists & Interviews',
    desc: 'We deliver calibrated dossiers with scoring scorecards, handling interview logistics and debrief notes.',
    icon: CalendarCheck
  },
  {
    num: '06',
    title: 'Selection, Joining & Warranty',
    desc: 'Offer negotiation, counter-offer resistance counseling, joining assurance, and a binding 90-day replacement warranty.',
    icon: Award
  }
];

export default function LearningJourney() {
  return (
    <section id="hiring-process" className="bg-white py-20 sm:py-24 lg:py-28 border-b border-[#EAEAEA] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching Reference Image */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="text-[11px] font-bold tracking-widest text-[#64748B] uppercase">
              004 • PROCESS
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#16191D] tracking-tight">
            How We Hire
          </h2>

          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed max-w-xl mx-auto">
            A proven process designed to transform complex hiring needs into scalable, verified engineering placements — efficiently and strategically.
          </p>
        </div>

        {/* Vertical Timeline Progress Container */}
        <div className="relative">
          
          {/* Continuous Center Vertical Progress Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#00A859] via-slate-200 to-slate-200" />

          {/* Continuous Left Vertical Progress Line (Mobile) */}
          <div className="md:hidden absolute left-6 top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#00A859] via-slate-200 to-slate-200" />

          <div className="space-y-12 md:space-y-16">
            
            {/* Step 01: Top Highlighted Pill Card matching Reference Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="relative z-10"
            >
              {/* Highlighted soft card banner */}
              <div className="max-w-xl mx-auto bg-slate-50/80 hover:bg-slate-50 border border-slate-200/80 rounded-3xl p-5 sm:p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col sm:flex-row items-center gap-5 sm:gap-6 transition-all">
                
                {/* Squircle Dark Icon Badge matching Reference */}
                <div className="w-14 h-14 rounded-2xl bg-[#16191D] text-white flex items-center justify-center shrink-0 shadow-sm relative group">
                  <Search className="w-6 h-6 stroke-[2]" />
                  <span className="absolute -bottom-1 -right-1 text-[10px] font-extrabold bg-[#00A859] text-white px-1.5 py-0.5 rounded-sm">
                    01
                  </span>
                </div>

                {/* Content */}
                <div className="text-center sm:text-left space-y-1">
                  <h3 className="text-lg font-extrabold text-[#16191D]">
                    {steps[0].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    {steps[0].desc}
                  </p>
                </div>
              </div>

              {/* Center Glowing Progress Node below Step 1 */}
              <div className="hidden md:flex justify-center mt-6">
                <div className="w-4 h-4 rounded-full bg-white border-2 border-[#00A859] shadow-[0_0_12px_rgba(0,168,89,0.5)] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00A859]" />
                </div>
              </div>
            </motion.div>

            {/* Steps 02 - 06: Alternating Layout along the Center Line */}
            {steps.slice(1).map((st, idx) => {
              const actualIndex = idx + 2;
              const isEven = actualIndex % 2 === 0; // 2, 4, 6 -> Left Text, Right Icon
              const Icon = st.icon;

              return (
                <motion.div
                  key={st.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="relative z-10"
                >
                  {/* Desktop Alternating Row */}
                  <div className="hidden md:grid md:grid-cols-2 gap-10 items-center">
                    
                    {/* Left Column */}
                    {isEven ? (
                      /* Text on Left (Steps 02, 04, 06) */
                      <div className="text-right pr-6 space-y-1">
                        <span className="text-[11px] font-bold text-[#00A859] uppercase tracking-wider block">
                          STAGE {st.num}
                        </span>
                        <h3 className="text-lg font-extrabold text-[#0F172A]">
                          {st.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed max-w-sm ml-auto">
                          {st.desc}
                        </p>
                      </div>
                    ) : (
                      /* Icon on Left (Steps 03, 05) */
                      <div className="flex justify-end pr-6">
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-bold text-[#64748B]">
                            {st.num}
                          </span>
                          <div className="w-13 h-13 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-[#00A859] flex items-center justify-center text-[#16191D] hover:text-[#00A859] transition-all">
                            <Icon className="w-6 h-6 stroke-[1.75]" />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Right Column */}
                    {isEven ? (
                      /* Icon on Right (Steps 02, 04, 06) */
                      <div className="flex justify-start pl-6">
                        <div className="flex items-center gap-3">
                          <div className="w-13 h-13 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-[#00A859] flex items-center justify-center text-[#16191D] hover:text-[#00A859] transition-all">
                            <Icon className="w-6 h-6 stroke-[1.75]" />
                          </div>
                          <span className="text-xs font-bold text-[#64748B]">
                            {st.num}
                          </span>
                        </div>
                      </div>
                    ) : (
                      /* Text on Right (Steps 03, 05) */
                      <div className="text-left pl-6 space-y-1">
                        <span className="text-[11px] font-bold text-[#00A859] uppercase tracking-wider block">
                          STAGE {st.num}
                        </span>
                        <h3 className="text-lg font-extrabold text-[#0F172A]">
                          {st.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed max-w-sm">
                          {st.desc}
                        </p>
                      </div>
                    )}

                  </div>

                  {/* Center Node Dot directly on the vertical line (Desktop) */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <div className="w-3.5 h-3.5 rounded-full bg-white border-2 border-slate-300 hover:border-[#00A859] transition-colors shadow-xs" />
                  </div>

                  {/* Mobile Row: Node on left line + content on right */}
                  <div className="md:hidden flex items-start gap-5 pl-3">
                    {/* Node on mobile line */}
                    <div className="w-6 h-6 rounded-full bg-white border-2 border-[#00A859] flex items-center justify-center shrink-0 mt-1 shadow-xs">
                      <div className="w-2 h-2 rounded-full bg-[#00A859]" />
                    </div>

                    <div className="bg-slate-50/70 border border-slate-200/70 rounded-2xl p-5 space-y-2 flex-grow">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#16191D]">
                          <Icon className="w-5 h-5 stroke-[1.75]" />
                        </div>
                        <span className="text-xs font-bold text-[#00A859]">
                          STAGE {st.num}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-[#0F172A]">
                        {st.title}
                      </h3>
                      <p className="text-xs text-[#64748B] leading-relaxed">
                        {st.desc}
                      </p>
                    </div>
                  </div>

                </motion.div>
              );
            })}

          </div>

          {/* Bottom Action */}
          <div className="text-center pt-16">
            <Link
              to="/and/hr-services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#00A859] hover:bg-[#008F4C] text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs"
            >
              <span>Explore Hiring Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
