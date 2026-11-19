import React from 'react';
import { ArrowRight, RefreshCw, Briefcase, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { siteData } from '../../data/siteData';

export default function ConnectedSection() {
  const { connectedConcept } = siteData;

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 rounded-full text-xs font-semibold text-[#0A3857] uppercase tracking-wider">
            Connected Practice
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A3857] tracking-tight">
            {connectedConcept.heading}
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            {connectedConcept.subheading}
          </p>
        </div>

        {/* Professional Dual-Card Graphic Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Left Card: Hiring Practice */}
          <motion.div
            className="lg:col-span-5 bg-[#F8FAFC] border border-slate-200 rounded-lg p-6 lg:p-8 space-y-4"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="w-12 h-12 rounded-md bg-[#0A3857] text-white flex items-center justify-center">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#0A3857]">
              {connectedConcept.leftTitle}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {connectedConcept.leftDescription}
            </p>
            <div className="text-xs font-semibold text-[#127DC4] pt-2">
              Outcome: Real-time intelligence on live hiring gaps
            </div>
          </motion.div>

          {/* Center Connector Indicator */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center py-2 text-center">
            <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-300 flex items-center justify-center text-[#0A3857] shadow-2xs">
              <RefreshCw className="w-4 h-4 text-[#127DC4]" />
            </div>
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-2">
              Continuous Loop
            </span>
          </div>

          {/* Right Card: Training Practice */}
          <motion.div
            className="lg:col-span-5 bg-[#F8FAFC] border border-slate-200 rounded-lg p-6 lg:p-8 space-y-4"
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="w-12 h-12 rounded-md bg-[#127DC4] text-white flex items-center justify-center">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#0A3857]">
              {connectedConcept.rightTitle}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {connectedConcept.rightDescription}
            </p>
            <div className="text-xs font-semibold text-[#127DC4] pt-2">
              Outcome: Enterprise-ready practitioners from day one
            </div>
          </motion.div>

        </div>

        {/* Bridge Summary Banner */}
        <div className="mt-10 p-5 bg-slate-50 border border-slate-200 rounded-lg max-w-4xl mx-auto text-center">
          <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
            "{connectedConcept.bridgeText}"
          </p>
        </div>

      </div>
    </section>
  );
}

