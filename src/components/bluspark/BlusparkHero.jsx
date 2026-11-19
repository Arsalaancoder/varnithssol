import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, Users } from 'lucide-react';
import { motion } from 'motion/react';

export default function BlusparkHero() {
  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-28 overflow-hidden border-b border-slate-200">
      {/* Subtle background wash */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-50/80 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading, Description & CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Subtle Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-md text-xs font-semibold text-slate-700 tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-[#0066CC]" />
              <span>HR Consulting & Enterprise Technology Training</span>
            </div>

            {/* Main Primary Heading specified by user */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-bold text-[#0F172A] leading-[1.15] tracking-tight">
              Connecting Businesses With Talent.{' '}
              <span className="block text-[#0066CC] mt-1 sm:mt-2">
                Empowering People With Skills.
              </span>
            </h1>

            {/* Exact Description specified by user */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              Varnith Technologies helps businesses find the right talent and helps professionals build industry-relevant technical skills through recruitment solutions and specialized technology training.
            </p>

            {/* Two Action Buttons specified by user */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/and/hr-services"
                className="btn-primary text-sm sm:text-base px-7 py-3.5 shadow-sm hover:shadow-md transition-all group"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/and/contact"
                className="btn-outline text-sm sm:text-base px-7 py-3.5 shadow-xs hover:shadow-sm transition-all"
              >
                <span>Start a Conversation</span>
              </Link>
            </div>

            {/* Authentic Trust Points */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-medium text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0066CC] shrink-0" />
                <span>Single Point of Contact</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0066CC] shrink-0" />
                <span>Screened Shortlists Only</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#0066CC] shrink-0" />
                <span>Enterprise SLA Guarantee</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Professional Corporate Image Composition */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Subtle background framing border */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-slate-200 to-slate-100 rounded-xl -z-10" />

              {/* Main Corporate Photograph */}
              <div className="rounded-lg overflow-hidden border border-slate-200 shadow-md bg-white">
                <img
                  src="/assets/experience_presentation.jpg"
                  alt="Varnith Technologies Professional Consulting Session"
                  className="w-full h-[360px] sm:h-[420px] object-cover"
                />
              </div>

              {/* Minimal Overlapping Badge */}
              <div className="absolute -bottom-5 -left-4 sm:-bottom-6 sm:-left-6 bg-white border border-slate-200 rounded-lg p-4 sm:p-5 shadow-lg max-w-[240px] space-y-1">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#0B2545]">96.4%</span>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Success Rate</span>
                </div>
                <p className="text-xs text-slate-600 leading-snug">
                  Verified candidate retention and enterprise placement delivery.
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

