import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { siteData } from '../../data/siteData';

export default function SolutionSection() {
  return (
    <section className="bg-[#F8FAFC] py-16 sm:py-20 lg:py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Composition */}
          <motion.div
            className="lg:col-span-6 relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-lg overflow-hidden border border-slate-200 shadow-xs bg-white aspect-4/3 sm:aspect-16/10">
              <img
                src="/assets/experience_collab.jpg"
                alt="Varnith Technologies HR Consulting and SAP Training Collaboration"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Minimal Stat Box */}
            <div className="mt-4 p-4 bg-white border border-slate-200 rounded-lg flex items-center justify-between text-xs sm:text-sm">
              <div className="font-semibold text-[#0A3857]">Two practices, one integrated vision</div>
              <div className="text-slate-500">Recruitment &amp; SAP Training</div>
            </div>
          </motion.div>

          {/* Right Column: Heading, Description, Checklist, CTA */}
          <motion.div
            className="lg:col-span-6 space-y-6 order-1 lg:order-2"
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-semibold text-[#0A3857] uppercase tracking-wider">
              Our Solution
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A3857] tracking-tight leading-tight">
              {siteData.solution.heading}
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {siteData.solution.description}
            </p>

            <div className="space-y-3 pt-2">
              {siteData.solution.bulletPoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#127DC4]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#127DC4]">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-sm sm:text-base text-slate-700 leading-relaxed">{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link to="/hire" className="btn-primary text-sm font-semibold">
                <span>Explore HR Consulting</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
              <Link to="/academy" className="btn-secondary text-sm font-semibold">
                <span>Explore Programmes</span>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

