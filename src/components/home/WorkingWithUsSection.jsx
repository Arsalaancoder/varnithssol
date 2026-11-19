import React from 'react';
import { UserCheck, FileText, Filter, Clock, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { siteData } from '../../data/siteData';

const diffIcons = [UserCheck, FileText, Filter, Clock];

export default function WorkingWithUsSection() {
  return (
    <section className="bg-[#F8FAFC] py-16 sm:py-20 lg:py-24 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-semibold text-[#0D5C91] uppercase tracking-wider font-['Familjen_Grotesk']">
            Client Experience
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0D5C91] tracking-tight font-['Familjen_Grotesk']">
            What Working With Us Feels Like
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-['Familjen_Grotesk']">
            We operate with transparency, accountability, and respect for your time. Here is what you can always rely on when partnering with Varnith.
          </p>
        </div>

        {/* 4 Differentiator Refined Glassmorphism Cards with Orange + Blue Sheen (NO DOTS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {siteData.differentiators.map((diff, idx) => {
            const Icon = diffIcons[idx % diffIcons.length];
            return (
              <motion.div
                key={diff.title}
                className="backdrop-blur-md bg-gradient-to-br from-blue-50/80 via-white/95 to-orange-50/70 rounded-2xl p-7 border-2 border-slate-200/90 shadow-[0_8px_24px_-4px_rgba(5,110,181,0.12),0_4px_16px_rgba(244,138,37,0.08)] hover:shadow-[0_20px_40px_-4px_rgba(5,110,181,0.20),0_8px_24px_rgba(244,138,37,0.14)] hover:border-[#056EB5]/50 hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
              >
                {/* Top thick dual-color brand accent line */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#056EB5] via-[#38BDF8] to-[#F48A25] opacity-85 group-hover:opacity-100 transition-opacity" />

                {/* Visible Light Blue & Light Orange glass reflections */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#056EB5]/20 via-[#38BDF8]/10 to-transparent rounded-tr-2xl pointer-events-none group-hover:scale-120 transition-transform duration-500" />
                <div className="absolute bottom-0 left-0 w-36 h-36 bg-gradient-to-tr from-[#F48A25]/18 via-[#FB923C]/10 to-transparent rounded-bl-2xl pointer-events-none group-hover:scale-120 transition-transform duration-500" />

                <div className="relative z-10">
                  {/* Clean Frosted Icon Badge with 2px border */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100/80 via-white to-orange-100/60 border-2 border-slate-200/80 shadow-xs flex items-center justify-center mb-5 shrink-0 text-[#056EB5] group-hover:text-[#F48A25] transition-colors duration-300">
                    <Icon className="w-5 h-5 transition-transform group-hover:scale-105" />
                  </div>

                  {/* Clean Category Eyebrow (NO DOTS) */}
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2 font-['Familjen_Grotesk']">
                    STANDARD • {diff.number}
                  </div>

                  {/* Headline */}
                  <h3 className="text-lg font-bold text-[#0D5C91] mb-2 leading-snug font-['Familjen_Grotesk'] group-hover:text-[#056EB5] transition-colors">
                    {diff.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed font-['Familjen_Grotesk'] mb-4">
                    {diff.description}
                  </p>
                </div>

                {/* Bottom Badge */}
                <div className="pt-4 mt-auto border-t border-slate-100/90 relative z-10">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50/90 border border-emerald-100 rounded-md px-2.5 py-1 font-['Familjen_Grotesk'] shadow-2xs">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Guaranteed Principle</span>
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
