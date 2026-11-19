import React from 'react';
import { motion } from 'framer-motion';
import { siteData } from '../../data/siteData';

export default function HowWeHireSection() {
  return (
    <section className="bg-[#F8FAFC] py-16 sm:py-20 lg:py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
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

        {/* 8-Stage Cards matching reference design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteData.recruitmentStages.map((stage, idx) => (
            <motion.div
              key={stage.step}
              className="bg-white rounded-2xl p-7 border border-slate-100 shadow-md shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-300/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
            >
              {/* Subtle Radial Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100/40 via-blue-50/20 to-transparent rounded-tr-2xl pointer-events-none" />

              <div>
                {/* Top Circular Number Badge */}
                <div className="w-11 h-11 rounded-full bg-white shadow-xs border border-slate-100/90 flex items-center justify-center mb-5 shrink-0 group-hover:scale-105 transition-transform font-mono font-bold text-xs text-[#056EB5]">
                  {stage.step}
                </div>

                {/* Category Eyebrow */}
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2 font-['Familjen_Grotesk']">
                  STAGE • {stage.name}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#0D5C91] mb-2 leading-snug font-['Familjen_Grotesk']">
                  {stage.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-['Familjen_Grotesk']">
                  {stage.description}
                </p>
              </div>

              {/* Bottom Mini Indicator */}
              <div className="pt-4 mt-4 border-t border-slate-100/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>Phase {Math.floor(idx / 2) + 1} of 4</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
