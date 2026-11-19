import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, CheckCircle2, ShieldCheck, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full bg-[#F7F9FB] overflow-hidden border-b border-[#EAEAEA] min-h-[580px] lg:min-h-[640px] flex items-center">
      {/* Hero Background Image: Team in Conference Meeting */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/assets/hero_team_meeting.jpg')` }}
      >
        {/* Soft gradient wash ensuring perfect contrast and readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 via-50% to-white/40 lg:to-transparent" />
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[0.5px]" />
      </div>

      {/* Subtle Geometric Decorative Shapes on Edges matching Acuvic */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none hidden xl:block overflow-hidden z-0 opacity-40">
        <svg
          className="absolute right-0 top-0 h-full w-[400px] text-[#00A859]"
          viewBox="0 0 400 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="300,0 400,0 400,320 220,180" fill="#00A859" fillOpacity="0.4" />
          <polygon points="400,320 400,580 320,480 220,180" fill="#261C4E" fillOpacity="0.3" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-16 lg:py-20">
        <div className="max-w-2xl lg:max-w-3xl space-y-6">
          
          {/* Eyebrow Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/90 border border-slate-200/80 rounded-full shadow-xs">
            <span className="h-2 w-2 rounded-full bg-[#00A859]" />
            <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#00A859] uppercase">
              WELCOME TO THE BEST SOLUTION
            </span>
          </div>

          {/* Acuvic Dark Purple Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-extrabold text-[#261C4E] leading-[1.14] tracking-tight">
            Easy Solution{' '}
            <span className="block text-[#00A859] mt-1 sm:mt-2">
              For HR Consulting
            </span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base lg:text-lg text-[#475569] leading-relaxed max-w-xl font-medium">
            The right leadership and talent you can get with us. Expand capabilities for your business growth. We help software organisations find exceptional technical talent, while empowering professionals through rigorous, industry-aligned training.
          </p>

          {/* CTA Buttons: Rectangular Green Explore More + Play-Circle How We Work */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <Link
              to="/and/hr-services"
              className="bg-[#00A859] hover:bg-[#008F4C] text-white text-sm font-bold px-7 py-3 rounded-sm shadow-sm transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Explore More</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/and/about"
              className="inline-flex items-center gap-3 text-sm font-bold text-[#261C4E] hover:text-[#00A859] px-4 py-3 transition-colors cursor-pointer group bg-white/80 rounded-sm border border-slate-200/60 shadow-xs"
            >
              <div className="w-8 h-8 rounded-full bg-white border border-slate-200 shadow-xs flex items-center justify-center text-[#00A859] group-hover:bg-[#00A859] group-hover:text-white group-hover:border-[#00A859] transition-all">
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
              </div>
              <span>How We Work</span>
            </Link>
          </div>

          {/* Quality Trust Badges */}
          <div className="pt-6 flex flex-wrap items-center gap-6 text-xs text-[#475569] font-semibold border-t border-slate-200/80">
            <div className="flex items-center gap-2 bg-white/80 px-3 py-1.5 rounded-sm border border-slate-200/60 shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-[#00A859]" />
              <span>Single Point of Contact</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 px-3 py-1.5 rounded-sm border border-slate-200/60 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-[#00A859]" />
              <span>Screened Shortlists Only</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 px-3 py-1.5 rounded-sm border border-slate-200/60 shadow-xs">
              <Users className="w-4 h-4 text-[#00A859]" />
              <span>Enterprise SLA Guaranteed</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
