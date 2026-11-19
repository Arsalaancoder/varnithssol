import React from 'react';
import { Briefcase, Users, ShieldCheck, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { siteData } from '../../data/siteData';

const icons = [Briefcase, Users, ShieldCheck, GraduationCap];

export default function HighlightsSection() {
  return (
    <section className="bg-[#F8FAFC] py-8 lg:py-12 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {siteData.highlights.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={item.title}
                className="group relative flex items-start gap-4 p-5 rounded-2xl backdrop-blur-md bg-white/85 border border-slate-200/80 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(5,110,181,0.08),0_4px_16px_rgba(244,138,37,0.05)] hover:border-blue-200 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
              >
                {/* Top reflection line */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent pointer-events-none" />

                {/* Subtle blue & orange ambient glassmorphism reflections */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-[#056EB5]/10 via-[#127DC4]/4 to-transparent rounded-tr-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#F48A25]/8 via-transparent to-transparent rounded-bl-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />

                {/* Clean Frosted Icon Badge */}
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-50/80 via-white to-orange-50/40 border border-slate-200/60 shadow-2xs flex items-center justify-center shrink-0 text-[#056EB5] group-hover:text-[#F48A25] transition-colors duration-300">
                  <Icon className="w-5 h-5 transition-transform group-hover:scale-105" />
                </div>

                <div className="space-y-1 relative z-10">
                  <h3 className="text-sm font-bold text-[#0A3857] group-hover:text-[#056EB5] transition-colors font-['Familjen_Grotesk']">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-['Familjen_Grotesk']">
                    {item.subtitle}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
