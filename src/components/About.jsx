import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="bg-[#F8F9FA] py-16 sm:py-20 lg:py-24 border-b border-[#E5E7EB] relative overflow-hidden">
      {/* Decorative circular doodle curve across background matching Acuvic */}
      <svg
        className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[400px] pointer-events-none opacity-20 hidden md:block"
        viewBox="0 0 1440 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-50 200 C 200 80, 350 320, 600 200 C 850 80, 1000 340, 1250 180 C 1380 90, 1450 150, 1500 220"
          stroke="#00A859"
          strokeWidth="1.5"
          strokeDasharray="6 6"
        />
        <circle cx="600" cy="200" r="40" stroke="#00A859" strokeWidth="1" fill="none" opacity="0.4" />
        <circle cx="1000" cy="340" r="25" stroke="#261C4E" strokeWidth="1" fill="none" opacity="0.3" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with Overlapping Green Statistics Card matching Template */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Background decorative corner accent */}
              <div className="absolute -top-4 -left-4 w-40 h-40 bg-[#EAF7EE] rounded-xl -z-10" />

              {/* Main Photograph */}
              <div className="rounded-xl overflow-hidden border border-[#E5E7EB] shadow-card bg-white">
                <img
                  src="/assets/experience_collab.jpg"
                  alt="Varnith Technologies Team Collaboration"
                  className="w-full h-auto object-cover aspect-4/3"
                />
              </div>

              {/* Prominent Overlapping Solid Green Statistics Card matching Template */}
              <div className="absolute -bottom-6 sm:-bottom-8 -right-3 sm:-right-6 bg-[#00A859] text-white p-6 sm:p-7 rounded-xl shadow-xl max-w-xs sm:max-w-sm space-y-2 border-4 border-white">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black tracking-tight">10+</span>
                  <span className="text-sm sm:text-base font-semibold text-white/90 leading-tight">
                    Years Corporate Experience
                  </span>
                </div>
                <div className="h-0.5 bg-white/20 w-full my-2" />
                <p className="text-xs sm:text-sm font-medium text-white/95 leading-relaxed">
                  Trusted by top software enterprises across India. Delivering verified tech talent & specialized SAP consulting.
                </p>
                <div className="text-[11px] font-bold text-white/80 uppercase tracking-wider pt-1 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  <span>Verified Placement Track Record</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Welcome Content & Details */}
          <div className="lg:col-span-6 space-y-6 pt-6 lg:pt-0">
            
            {/* Template-style Eyebrow */}
            <div className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#00A859]" />
              <span className="text-xs sm:text-sm font-bold tracking-wider text-[#00A859] uppercase">
                WELCOME TO VARNITH TECHNOLOGIES
              </span>
            </div>

            {/* Main Welcome Heading matching Acuvic */}
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#261C4E] tracking-tight leading-tight">
              Bridging Strategic <span className="text-[#00A859]">HR Consulting</span> & Workforce Solutions
            </h2>

            {/* Narrative using existing website content */}
            <p className="text-base text-[#5E6874] leading-relaxed">
              Based in Madhapur, Hyderabad, <strong className="text-[#261C4E]">Varnith Technologies Private Limited</strong> is a dual-practice consultancy. We help fast-growing software companies source pre-screened technical and leadership talent, while empowering professionals through rigorous, industry-aligned training programs.
            </p>

            <p className="text-base text-[#5E6874] leading-relaxed">
              Because our recruiters actively hire for software and ERP teams across India, we know the exact tools and architectural standards companies evaluate. That real-time intelligence directly shapes our training delivery.
            </p>

            {/* Checkpoint highlights matching template */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#00A859] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#261C4E]">Screened Shortlists Only</h4>
                  <p className="text-xs text-[#5E6874]">Candidates assessed in live sandboxes, not just resumes.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#00A859] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#261C4E]">14-Day Delivery SLA</h4>
                  <p className="text-xs text-[#5E6874]">Rapid hiring turnaround for critical tech roles.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#00A859] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#261C4E]">Hands-On IT Labs</h4>
                  <p className="text-xs text-[#5E6874]">80% practical immersion with real enterprise systems.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#00A859] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#261C4E]">Dedicated Lead Support</h4>
                  <p className="text-xs text-[#5E6874]">One single point of contact without chasing.</p>
                </div>
              </div>
            </div>

            {/* Simple rectangular CTA button matching template */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/and/about"
                className="btn-green text-sm px-6 py-2.5"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/and/hr-services"
                className="btn-outline text-sm px-6 py-2.5"
              >
                <span>Our HR Practices</span>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
