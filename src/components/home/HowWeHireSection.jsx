import React from 'react';
import { motion } from 'framer-motion';
import { siteData } from '../../data/siteData';

export default function HowWeHireSection() {
  return (
    <section className="bg-[#F8FAFC] py-16 sm:py-20 lg:py-24 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-semibold text-[#0D5C91] uppercase tracking-wider font-['Familjen_Grotesk']">
            Recruitment Process
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0D5C91] tracking-tight font-['Familjen_Grotesk']">
            How We Hire: 8 Calibrated Stages
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-['Familjen_Grotesk']">
            Hiring shouldn't be a gamble. We follow a strict 8-stage methodology that delivers screened shortlists without wasting engineering hours.
          </p>
        </div>

        {/* 8-Stage Refined Glassmorphism Cards with Orange + Blue Sheen (NO DOTS) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteData.recruitmentStages.map((stage, idx) => (
            <motion.div
              key={stage.step}
              className="backdrop-blur-md bg-white/85 rounded-2xl p-7 border border-slate-200/80 shadow-[0_6px_24px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(5,110,181,0.08),0_4px_16px_rgba(244,138,37,0.05)] hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
            >
              {/* Top reflection line */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent pointer-events-none" />

              {/* Ambient glass reflections */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-[#056EB5]/10 via-[#127DC4]/4 to-transparent rounded-tr-2xl pointer-events-none group-hover:scale-120 transition-transform duration-500" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#F48A25]/8 via-transparent to-transparent rounded-bl-2xl pointer-events-none group-hover:scale-120 transition-transform duration-500" />

              <div className="relative z-10">
                {/* Number Badge with subtle gradient tint (NO DOTS) */}
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-50/80 via-white to-orange-50/40 border border-slate-200/60 shadow-2xs flex items-center justify-center mb-5 shrink-0 font-mono font-bold text-xs text-[#056EB5] group-hover:text-[#F48A25] transition-colors duration-300">
                  {stage.step}
                </div>

                {/* Clean Category Eyebrow (NO DOTS) */}
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2 font-['Familjen_Grotesk']">
                  STAGE • {stage.name}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#0D5C91] mb-2 leading-snug font-['Familjen_Grotesk'] group-hover:text-[#056EB5] transition-colors">
                  {stage.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-['Familjen_Grotesk']">
                  {stage.description}
                </p>
              </div>

              {/* Bottom Mini Indicator */}
              <div className="pt-4 mt-4 border-t border-slate-100/90 flex items-center justify-between text-[11px] text-slate-400 font-mono relative z-10">
                <span>Phase {Math.floor(idx / 2) + 1} of 4</span>
                <span className="text-[#056EB5] font-semibold text-[10px]">Verified Stage</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
