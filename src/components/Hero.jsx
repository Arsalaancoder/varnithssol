import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, GraduationCap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 border-b border-[#e3e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Clear Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f7f9fc] border border-[#e3e8f0] text-xs font-semibold text-[#1e5bc6]">
              <span>Varnith Technologies • Hyderabad</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-bold text-[#00184a] leading-[1.15] tracking-tight">
              We find people. <br />
              <span className="text-[#1e5bc6]">We grow skills.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#5b6b85] leading-relaxed max-w-xl">
              Behind every good team is a good hire, and behind every good career is the right skill. We help software organisations find their people, and help professionals build the skills to grow.
            </p>

            {/* Two Direct Entry Cards matching reference site */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {/* HR Consulting Entry */}
              <div className="p-5 rounded-xl border border-[#e3e8f0] bg-[#f7f9fc] hover:border-[#1e5bc6] transition-colors flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="w-9 h-9 rounded-lg bg-[#1e5bc6]/10 text-[#1e5bc6] flex items-center justify-center mb-1">
                    <Users className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#00184a]">I'm hiring</h3>
                  <p className="text-xs text-[#5b6b85] leading-relaxed">
                    Let's find the right people for your software and enterprise team.
                  </p>
                </div>
                <div className="pt-4">
                  <Link
                    to="/and/hr-services"
                    className="btn-blue w-full justify-between"
                  >
                    <span>Explore HR Services</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Training Entry */}
              <div className="p-5 rounded-xl border border-[#e3e8f0] bg-[#f7f9fc] hover:border-[#f6650a] transition-colors flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="w-9 h-9 rounded-lg bg-[#f6650a]/10 text-[#f6650a] flex items-center justify-center mb-1">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#00184a]">I want to upskill</h3>
                  <p className="text-xs text-[#5b6b85] leading-relaxed">
                    Industry-focused SAP security, DevOps, and data analytics programmes.
                  </p>
                </div>
                <div className="pt-4">
                  <Link
                    to="/and/courses"
                    className="btn-orange w-full justify-between"
                  >
                    <span>Explore IT Training</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Visual Asset */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden border border-[#e3e8f0] bg-[#f7f9fc] p-6 flex items-center justify-center">
              <img
                src="/assets/ref-hero-orbs.jpg"
                alt="Varnith Technologies — People & Skills"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
