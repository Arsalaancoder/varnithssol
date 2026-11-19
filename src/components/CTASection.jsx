import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Server, Shield, GraduationCap, FileText, Calendar } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function CTASection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Professional Green-accented Container matching Template */}
        <div className="bg-[#16191D] text-white rounded-2xl p-8 sm:p-12 lg:p-16 relative overflow-hidden border border-[#2A3036] shadow-xl">
          
          {/* Subtle green polygonal glow in the background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00A859]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-[#00A859]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00A859]/20 border border-[#00A859]/40 text-xs font-bold text-[#00A859] uppercase tracking-wider">
                <span>TECHNICAL TRAINING DIVISION</span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                Advance Enterprise Capabilities: <br />
                <span className="text-[#00A859]">SAP Security, GRC & College Engagements</span>
              </h2>

              <p className="text-base text-gray-300 leading-relaxed max-w-xl">
                Taught in live cloud sandbox environments by industry practitioners with 10+ years of ERP experience. Master real authorization matrices, Firefighter workflows, and audit controls.
              </p>

              {/* 3 Promoted Tracks */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                <div className="bg-white/5 border border-white/10 rounded-lg p-3.5 space-y-1">
                  <div className="flex items-center gap-2 text-[#00A859]">
                    <Server className="w-4 h-4" />
                    <span className="text-xs font-bold text-white">SAP Basis Security</span>
                  </div>
                  <p className="text-[11px] text-gray-400">PFCG roles, TMS & audit hardening</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-3.5 space-y-1">
                  <div className="flex items-center gap-2 text-[#00A859]">
                    <Shield className="w-4 h-4" />
                    <span className="text-xs font-bold text-white">SAP GRC 12.0</span>
                  </div>
                  <p className="text-[11px] text-gray-400">ARA, ARM, EAM & SoD rulesets</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-3.5 space-y-1">
                  <div className="flex items-center gap-2 text-[#00A859]">
                    <GraduationCap className="w-4 h-4" />
                    <span className="text-xs font-bold text-white">College Engagements</span>
                  </div>
                  <p className="text-[11px] text-gray-400">Campus drives & faculty bootcamps</p>
                </div>
              </div>

              {/* Action Buttons required by client */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to="/and/contact"
                  className="btn-green text-sm px-6 py-3 font-semibold"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Ask About the Next Batch</span>
                </Link>

                <a
                  href={`tel:${siteData.brand.rawPhone}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-colors"
                >
                  <FileText className="w-4 h-4 text-[#00A859]" />
                  <span>Ask for the Syllabus</span>
                </a>
              </div>
            </div>

            {/* Right Card: Quick Batch & Placement Stats */}
            <div className="lg:col-span-5 bg-white text-[#16191D] rounded-xl p-6 sm:p-8 space-y-5 border border-white/20 shadow-2xl">
              <div className="border-b border-[#E5E7EB] pb-3">
                <span className="text-xs font-bold text-[#00A859] uppercase tracking-wider block">
                  Upcoming Cohort Details
                </span>
                <h3 className="text-xl font-bold text-[#16191D]">
                  Weekend & Weekday Batches
                </h3>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-center justify-between py-1.5 border-b border-[#E5E7EB]">
                  <span className="text-[#5E6874]">Learning Mode</span>
                  <span className="font-bold text-[#16191D]">Live Online + Cloud Labs</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-[#E5E7EB]">
                  <span className="text-[#5E6874]">Lab Access</span>
                  <span className="font-bold text-[#00A859]">24/7 Dedicated Sandbox</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-[#E5E7EB]">
                  <span className="text-[#5E6874]">Batch Size</span>
                  <span className="font-bold text-[#16191D]">Max 15 Students per Mentor</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-[#E5E7EB]">
                  <span className="text-[#5E6874]">Placement Support</span>
                  <span className="font-bold text-[#16191D]">Direct Referral to Client Roles</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/and/contact"
                  className="w-full btn-green justify-center py-2.5 text-xs font-bold"
                >
                  <span>Enquire for Batch Timings & Fee</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
