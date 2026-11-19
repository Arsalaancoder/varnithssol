import React from 'react';
import { Briefcase, Users, ShieldCheck, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { siteData } from '../../data/siteData';

const icons = [Briefcase, Users, ShieldCheck, GraduationCap];

export default function HighlightsSection() {
  return (
    <section className="bg-[#F8FAFC] py-8 lg:py-10 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {siteData.highlights.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={item.title}
                className="flex items-start gap-4 p-4 rounded-md bg-white border border-slate-200 shadow-2xs hover:border-slate-300 transition-colors"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
              >
                <div className="w-10 h-10 rounded-md bg-[#0A3857]/5 flex items-center justify-center shrink-0 text-[#0A3857]">
                  <Icon className="w-5 h-5 text-[#0A3857]" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-[#0A3857]">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.subtitle}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

