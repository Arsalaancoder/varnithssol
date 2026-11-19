import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, FileCheck, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TrainingCtaSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#0A3857] text-white rounded-xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
          </div>

          <div className="relative max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 border border-white/15 rounded-full text-xs font-semibold text-white uppercase tracking-wider">
              SAP &amp; IT Training Division
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
              Ready to Grow Your SAP Career?
            </h2>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Live online classes for working professionals and students – learn from anywhere, at a pace that fits your life.
            </p>

            {/* Three Programme Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-lg p-3.5">
                <ShieldCheck className="w-5 h-5 text-[#127DC4] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white">SAP Basis Security</div>
                  <div className="text-[11px] text-slate-300">Live online system admin</div>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-lg p-3.5">
                <FileCheck className="w-5 h-5 text-[#127DC4] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white">SAP GRC</div>
                  <div className="text-[11px] text-slate-300">Access risk &amp; governance</div>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-lg p-3.5">
                <GraduationCap className="w-5 h-5 text-[#127DC4] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white">College Engagements</div>
                  <div className="text-[11px] text-slate-300">Campus skills workshops</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4">
              <Link
                to="/academy#batch-enquiry"
                className="inline-flex items-center justify-center font-semibold px-6 py-3 rounded-md text-[#0A3857] bg-white hover:bg-slate-100 transition-colors shadow-xs text-sm"
              >
                <span>Ask About the Next Batch</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                to="/academy?enquiry=syllabus#batch-enquiry"
                className="inline-flex items-center justify-center font-semibold px-6 py-3 rounded-md text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors text-sm"
              >
                <span>Ask for the Syllabus</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

