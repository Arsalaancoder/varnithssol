import React from 'react';
import { Link } from 'react-router-dom';
import { Users, GraduationCap, Building } from 'lucide-react';
import CTASection from '../components/CTASection';

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-[#f7f9fc] py-12 sm:py-16 border-b border-[#e3e8f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-medium text-[#5b6b85]">
            <Link to="/and" className="hover:text-[#1e5bc6]">Home</Link>
            <span>/</span>
            <span className="text-[#00184a] font-semibold">About Us</span>
          </div>

          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#1e5bc6]">
              About Varnith Technologies
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold text-[#00184a] tracking-tight">
              People and Skills, Under One Roof
            </h1>
            <p className="text-base sm:text-lg text-[#5b6b85] leading-relaxed">
              Based in Hyderabad, Varnith Technologies operates two interconnected practices: strategic HR consulting for software organizations, and practical technical training for ambitious professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story & Dual Model */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#00184a]">
                Why We Built Varnith
              </h2>
              <p className="text-base text-[#5b6b85] leading-relaxed">
                For years, software companies struggled with hiring agencies that circulated generic resumes without evaluating technical substance. At the same time, professionals spent months on theoretical courses that left them unprepared for actual production environments.
              </p>
              <p className="text-base text-[#5b6b85] leading-relaxed">
                Varnith was founded to close that loop. Because we hire directly for enterprise engineering teams, we know what technical managers actually evaluate. That real-time intelligence feeds straight into our SAP, Cloud, and Data training curricula.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <Link to="/and/hr-services" className="btn-blue">
                  Explore HR Consulting
                </Link>
                <Link to="/and/courses" className="btn-orange">
                  Explore Training
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-xl border border-[#e3e8f0] bg-[#f7f9fc] space-y-2">
                <div className="w-9 h-9 rounded-lg bg-[#1e5bc6]/10 text-[#1e5bc6] flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#00184a]">HR Consulting Division</h3>
                <p className="text-xs text-[#5b6b85] leading-relaxed">
                  Specialized talent acquisition, contract staffing, and RPO for software companies across India.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[#e3e8f0] bg-[#f7f9fc] space-y-2">
                <div className="w-9 h-9 rounded-lg bg-[#f6650a]/10 text-[#f6650a] flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#00184a]">IT Training Division</h3>
                <p className="text-xs text-[#5b6b85] leading-relaxed">
                  Live online instructor-led courses in SAP Basis Security, SAP GRC, DevOps, and Data Analytics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-[#f7f9fc] py-14 border-y border-[#e3e8f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-2xl space-y-2">
            <h2 className="text-2xl font-bold text-[#00184a]">
              What We Stand For
            </h2>
            <p className="text-sm text-[#5b6b85]">
              Core values that govern our client partnerships and student mentorship.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-[#e3e8f0] rounded-xl p-6 space-y-2">
              <h3 className="text-base font-bold text-[#00184a]">Honesty</h3>
              <p className="text-xs text-[#5b6b85] leading-relaxed">
                We give candid assessments about candidate availability, realistic hiring timelines, and genuine course difficulty.
              </p>
            </div>

            <div className="bg-white border border-[#e3e8f0] rounded-xl p-6 space-y-2">
              <h3 className="text-base font-bold text-[#00184a]">Care</h3>
              <p className="text-xs text-[#5b6b85] leading-relaxed">
                Every candidate is treated with dignity, and every learner receives attentive personal guidance from faculty.
              </p>
            </div>

            <div className="bg-white border border-[#e3e8f0] rounded-xl p-6 space-y-2">
              <h3 className="text-base font-bold text-[#00184a]">Technical Rigor</h3>
              <p className="text-xs text-[#5b6b85] leading-relaxed">
                Zero fluff. We emphasize real toolchains, production sandboxes, and verified competence.
              </p>
            </div>

            <div className="bg-white border border-[#e3e8f0] rounded-xl p-6 space-y-2">
              <h3 className="text-base font-bold text-[#00184a]">Discipline</h3>
              <p className="text-xs text-[#5b6b85] leading-relaxed">
                Clear SLAs, scheduled communication rhythms, and dependable execution from start to finish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Registered Office Details */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Building className="w-8 h-8 text-[#1e5bc6] mx-auto" />
          <h2 className="text-2xl font-bold text-[#00184a]">
            Hyderabad Corporate Hub
          </h2>
          <p className="text-sm text-[#5b6b85] max-w-xl mx-auto leading-relaxed">
            1-90/B/C/1, Flat No. 102, Bhanu Elite, Madhapur, Shaikpet, Hyderabad – 500081, Telangana, India.
          </p>
          <div className="pt-2">
            <Link to="/and/contact" className="btn-blue">
              Contact our Hyderabad Office
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
