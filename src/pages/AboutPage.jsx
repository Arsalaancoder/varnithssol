import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Users, 
  ShieldCheck, 
  Heart, 
  CheckCircle, 
  ArrowRight,
  Briefcase,
  GraduationCap
} from 'lucide-react';
import { motion } from 'framer-motion';
import { siteData } from '../data/siteData';

export default function AboutPage() {
  const values = [
    {
      title: "Honesty",
      desc: "We tell clients and candidates the truth, even when it is not what they hoped to hear.",
      icon: ShieldCheck
    },
    {
      title: "Care",
      desc: "We treat every candidate and learner with respect and genuine attention.",
      icon: Heart
    },
    {
      title: "Quality over Volume",
      desc: "Fewer, calibrated shortlists that save engineering managers from resume fatigue.",
      icon: CheckCircle
    },
    {
      title: "Ownership",
      desc: "We follow through from the first requirement call until the placement or learning outcome is secure.",
      icon: Building2
    }
  ];

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="bg-white pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <motion.div 
              className="lg:col-span-7 space-y-6"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 border border-slate-200 rounded-full text-xs font-semibold text-[#0A3857] uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#127DC4]"></span>
                <span>Our Identity &amp; Purpose</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A3857] tracking-tight leading-tight">
                About Varnith Technologies
              </h1>

              <p className="text-base sm:text-xl text-slate-700 font-medium leading-relaxed">
                Varnith Technologies is a young Hyderabad company with an old-fashioned belief: people matter most. We help software organisations hire well, and we help people build the skills those organisations need.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link to="/contact" className="btn-primary text-sm sm:text-base px-6 py-3 justify-center gap-2 font-semibold">
                  <span>Talk to Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/hire" className="btn-secondary text-sm sm:text-base px-6 py-3 justify-center font-semibold">
                  Explore HR Consulting
                </Link>
              </div>
            </motion.div>

            <motion.div 
              className="lg:col-span-5"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <div className="rounded-lg overflow-hidden border border-slate-200 shadow-xs aspect-4/3 bg-slate-50">
                <img
                  src="/assets/about_mentor.jpg"
                  alt="Varnith Technologies Team and Office in Hyderabad"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. OUR STORY */}
      <section className="bg-[#F8FAFC] py-16 sm:py-20 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-semibold text-[#0A3857] uppercase tracking-wider">
            Background
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A3857] tracking-tight">
            Our Story
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            <p>
              We started Varnith because we kept seeing the same gap from both sides. Companies could not find the right people, and good people could not find the right start.
            </p>
            <p>
              Hiring and skills belong together, so we work on both. We are small, and we like it that way: every client and every learner gets our full attention.
            </p>
            <p className="text-sm text-slate-500 italic">
              Registered in Hyderabad as Varnith Technologies Private Limited (CIN: {siteData.brand.cin}), operating from Madhapur and serving teams across India.
            </p>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE DO */}
      <section className="bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A3857] tracking-tight">
              What We Do
            </h2>
            <p className="text-base text-slate-600">
              Two connected practices dedicated to software organisations and technical professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Box 1 */}
            <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-8 space-y-4 hover:border-slate-300 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-[#0A3857] text-white flex items-center justify-center">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#0A3857]">HR Consulting</h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Hiring for software organisations across India – from one specialized engineering role to a complete recruitment process outsourcing (RPO) plan.
              </p>
              <div className="pt-2">
                <Link to="/hire" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#127DC4] hover:text-[#0A3857]">
                  <span>Explore HR Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Box 2 */}
            <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-8 space-y-4 hover:border-slate-300 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-[#127DC4] text-white flex items-center justify-center">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#0A3857]">Training &amp; Development</h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Live online SAP Basis Security and SAP GRC programmes for working professionals, plus training partnerships with colleges to prepare graduates for work.
              </p>
              <div className="pt-2">
                <Link to="/academy" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#127DC4] hover:text-[#0A3857]">
                  <span>Explore Programmes</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. OUR VALUES */}
      <section className="bg-[#F8FAFC] py-16 sm:py-20 lg:py-24 border-b border-slate-200 relative overflow-hidden">
        {/* Decorative Geometric Accents matching reference */}
        <div className="hidden sm:block absolute top-12 left-6 lg:left-20 w-7 h-7 rounded-full bg-[#FBBF24] opacity-90 shadow-2xs pointer-events-none" />
        <div className="hidden sm:block absolute top-10 right-4 lg:right-16 pointer-events-none">
          <div className="w-7 h-7 rounded-full bg-[#FBBF24] mb-2 ml-auto opacity-90 shadow-2xs" />
          <div className="w-10 h-7 rounded-b-full bg-[#056EB5] opacity-90" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-semibold text-[#0A3857] uppercase tracking-wider">
              Guiding Principles
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A3857] tracking-tight">
              Our Values
            </h2>
            <p className="text-base text-slate-600">
              The fundamental convictions that guide our conversations with clients, candidates, and students every single day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="bg-white rounded-2xl p-7 border border-slate-100 shadow-md shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-300/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100/40 via-blue-50/20 to-transparent rounded-tr-2xl pointer-events-none" />

                  <div>
                    <div className="w-11 h-11 rounded-full bg-white shadow-xs border border-slate-100/90 flex items-center justify-center mb-5 shrink-0 group-hover:scale-105 transition-transform text-slate-800">
                      <Icon className="w-5 h-5 text-slate-800" />
                    </div>

                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2 font-['Familjen_Grotesk']">
                      CORE VALUE • 0{idx + 1}
                    </div>

                    <h3 className="text-xl font-bold text-[#0D5C91] mb-2 leading-snug font-['Familjen_Grotesk']">
                      {v.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed font-['Familjen_Grotesk'] mb-4">
                      {v.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-auto border-t border-slate-100/80">
                    <span className="text-[11px] font-semibold text-[#056EB5] font-['Familjen_Grotesk']">
                      Foundational Belief ✓
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. HOW WE WORK */}
      <section className="bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0D5C91] tracking-tight font-['Familjen_Grotesk']">
              How We Work
            </h2>
            <p className="text-base text-slate-600 font-['Familjen_Grotesk']">
              Four commitments that govern every hiring partnership we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteData.differentiators.map((diff) => (
              <div
                key={diff.title}
                className="bg-white rounded-2xl p-7 border border-slate-100 shadow-md shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-300/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100/40 via-blue-50/20 to-transparent rounded-tr-2xl pointer-events-none" />

                <div>
                  <div className="w-11 h-11 rounded-full bg-white shadow-xs border border-slate-100/90 flex items-center justify-center mb-5 shrink-0 group-hover:scale-105 transition-transform font-mono font-bold text-xs text-[#056EB5]">
                    {diff.number}
                  </div>

                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2 font-['Familjen_Grotesk']">
                    COMMITMENT
                  </div>

                  <h3 className="text-lg font-bold text-[#0D5C91] mb-2 leading-snug font-['Familjen_Grotesk']">
                    {diff.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-['Familjen_Grotesk'] mb-4">
                    {diff.description}
                  </p>
                </div>

                <div className="pt-4 mt-auto border-t border-slate-100/80">
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-['Familjen_Grotesk']">
                    Strict Adherence
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. BOTTOM CONTACT CTA */}
      <section className="bg-[#0A3857] text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Looking for a partner who listens first?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Reach out to our Hyderabad office. We will listen, ask the right questions, and come back with an honest plan.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center font-semibold px-6 py-3 rounded-md text-[#0A3857] bg-white hover:bg-slate-100 text-sm">
              <span>Talk to Us</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

