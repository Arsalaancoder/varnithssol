import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Cloud, Database, CheckCircle2, ShieldCheck, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { siteData } from '../../data/siteData';

const roleIcons = {
  Code2,
  Cloud,
  Database,
  CheckCircle2,
  ShieldCheck,
  Users
};

export default function WhoWeHireSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 rounded-full text-xs font-semibold text-[#0D5C91] uppercase tracking-wider font-['Familjen_Grotesk']">
            Domain Expertise
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0D5C91] tracking-tight font-['Familjen_Grotesk']">
            Who We Hire For
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-['Familjen_Grotesk']">
            We partner with product companies, GCCs, high-growth startups, and IT enterprises across India to source specialized talent across six core tech domains.
          </p>
        </div>

        {/* 6 Role Family Cards matching reference card design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {siteData.whoWeHireFor.map((item, idx) => {
            const Icon = roleIcons[item.icon] || Code2;
            return (
              <motion.div
                key={item.title}
                className="bg-white rounded-2xl p-7 border border-slate-100 shadow-md shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-300/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
              >
                {/* Subtle Radial Glow */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-blue-100/40 via-blue-50/20 to-transparent rounded-tr-2xl pointer-events-none" />

                <div>
                  {/* Top Circular Icon Badge */}
                  <div className="w-11 h-11 rounded-full bg-white shadow-xs border border-slate-100/90 flex items-center justify-center mb-5 shrink-0 group-hover:scale-105 transition-transform text-slate-800">
                    <Icon className="w-5 h-5 text-slate-800" />
                  </div>

                  {/* Category Eyebrow */}
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2 font-['Familjen_Grotesk']">
                    TECH VERTICAL • 0{idx + 1}
                  </div>

                  {/* Headline */}
                  <h3 className="text-xl font-bold text-[#0D5C91] mb-2 leading-snug font-['Familjen_Grotesk']">
                    {item.title}
                  </h3>

                  {/* Roles Description */}
                  <p className="text-sm text-slate-600 leading-relaxed font-['Familjen_Grotesk'] mb-6">
                    {item.roles}
                  </p>
                </div>

                {/* Bottom Action */}
                <div className="pt-4 mt-auto border-t border-slate-100/80">
                  <Link
                    to="/industries"
                    className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-200/80 rounded-md px-3.5 py-1.5 text-xs font-semibold text-slate-700 shadow-2xs hover:shadow-xs hover:border-slate-300 transition-all font-['Familjen_Grotesk']"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-12 p-8 bg-[#EDF3F5] border border-[#D8E3E8] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <div className="text-lg font-bold text-[#0D5C91] font-['Familjen_Grotesk']">Need to fill a specialized engineering role?</div>
            <div className="text-sm text-slate-600 font-['Familjen_Grotesk']">Share your requirement and get a calibrated shortlist in days.</div>
          </div>
          <Link
            to="/hire"
            className="inline-flex items-center justify-center font-['Familjen_Grotesk'] text-sm font-medium text-white bg-[#056EB5] hover:bg-[#045992] rounded-full px-6 py-3 transition-all duration-200 shadow-xs shrink-0"
          >
            Share Your Requirement
          </Link>
        </div>

      </div>
    </section>
  );
}
