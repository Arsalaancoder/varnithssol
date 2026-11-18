import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building, Award, Target } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="bg-[#f7f9fc] py-16 sm:py-20 border-b border-[#e3e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-bold uppercase tracking-wider text-[#1e5bc6]">
              Connected by People
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#00184a] tracking-tight">
              Bridging Corporate Recruitment & Technical Capability
            </h2>
            <p className="text-base text-[#5b6b85] leading-relaxed">
              Because we actively hire for software and ERP teams across India, we know the exact tools and architectural standards companies demand. That intelligence directly shapes our training programmes.
            </p>
            <p className="text-base text-[#5b6b85] leading-relaxed">
              Whether you are an engineering director looking to scale an infrastructure team or an aspiring consultant aiming for an SAP career, Varnith provides direct, high-trust execution.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-white border border-[#e3e8f0] p-4 rounded-xl">
                <div className="text-2xl font-bold text-[#1e5bc6]">80%</div>
                <div className="text-xs text-[#5b6b85] mt-1">Practical Lab Immersion</div>
              </div>
              <div className="bg-white border border-[#e3e8f0] p-4 rounded-xl">
                <div className="text-2xl font-bold text-[#f6650a]">&lt; 14 Days</div>
                <div className="text-xs text-[#5b6b85] mt-1">Average Sourcing Turnaround</div>
              </div>
              <div className="bg-white border border-[#e3e8f0] p-4 rounded-xl">
                <div className="text-2xl font-bold text-[#00184a]">10+ Yrs</div>
                <div className="text-xs text-[#5b6b85] mt-1">Mentor Industry Experience</div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <Link to="/and/about" className="btn-blue">
                <span>About Varnith Technologies</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/and/why-us" className="btn-outline">
                Our Differentiators
              </Link>
            </div>
          </div>

          {/* Right Visual Container */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-[#e3e8f0] rounded-2xl p-6 sm:p-8 space-y-6">
              <h3 className="text-lg font-bold text-[#00184a] border-b border-[#e3e8f0] pb-3">
                Corporate Overview
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Building className="w-5 h-5 text-[#1e5bc6] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#00184a]">Hyderabad Headquarters</h4>
                    <p className="text-xs text-[#5b6b85] mt-0.5">
                      Bhanu Elite, Madhapur, Hyderabad – 500081, Telangana, India.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-[#f6650a] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#00184a]">Core Business Mission</h4>
                    <p className="text-xs text-[#5b6b85] mt-0.5">
                      Strategic HR consulting for tech enterprises & job-ready technical upskilling.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-[#1e5bc6] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#00184a]">SLA Guarantees</h4>
                    <p className="text-xs text-[#5b6b85] mt-0.5">
                      Milestone-driven hiring warranties and genuine sandbox learning capstones.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
