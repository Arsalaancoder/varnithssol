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
                className="group relative flex items-start gap-4 p-6 rounded-2xl backdrop-blur-md bg-gradient-to-br from-blue-50/80 via-white/95 to-orange-50/70 border-2 border-slate-200/90 shadow-[0_8px_24px_-4px_rgba(5,110,181,0.12),0_4px_16px_rgba(244,138,37,0.08)] hover:shadow-[0_16px_36px_-4px_rgba(5,110,181,0.20),0_8px_24px_rgba(244,138,37,0.14)] hover:border-[#056EB5]/50 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
              >
                {/* Top thick dual-color brand accent line */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#056EB5] via-[#38BDF8] to-[#F48A25] opacity-85 group-hover:opacity-100 transition-opacity" />

                {/* Visible Light Blue & Light Orange glass reflections */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-[#056EB5]/20 via-[#38BDF8]/10 to-transparent rounded-tr-2xl pointer-events-none group-hover:scale-115 transition-transform duration-500" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#F48A25]/18 via-[#FB923C]/10 to-transparent rounded-bl-2xl pointer-events-none group-hover:scale-115 transition-transform duration-500" />

                {/* Clean Frosted Icon Badge with 2px border */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100/80 via-white to-orange-100/60 border-2 border-slate-200/80 shadow-xs flex items-center justify-center shrink-0 text-[#056EB5] group-hover:text-[#F48A25] transition-colors duration-300">
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
