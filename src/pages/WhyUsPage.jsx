import React from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/siteData';
import LearningJourney from '../components/LearningJourney';
import CTASection from '../components/CTASection';
import { 
  Users, 
  Terminal, 
  Code2, 
  Award, 
  BookCheck, 
  Briefcase 
} from 'lucide-react';

const icons = [Users, Terminal, Code2, Award, BookCheck, Briefcase];

export default function WhyUsPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-[#f7f9fc] py-12 sm:py-16 border-b border-[#e3e8f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-medium text-[#5b6b85]">
            <Link to="/and" className="hover:text-[#1e5bc6]">Home</Link>
            <span>/</span>
            <span className="text-[#00184a] font-semibold">Why Us</span>
          </div>

          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#1e5bc6]">
              The Varnith Difference
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold text-[#00184a] tracking-tight">
              Why Companies & Professionals Choose Us
            </h1>
            <p className="text-base sm:text-lg text-[#5b6b85] leading-relaxed">
              We eliminated the disconnect between theoretical IT training and real-world corporate execution. Discover the six foundational pillars of our dual learning and recruitment model.
            </p>
          </div>
        </div>
      </section>

      {/* 6 Core Pillars Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteData.differentiators.map((diff, idx) => {
              const Icon = icons[idx] || Users;
              return (
                <div
                  key={diff.number}
                  className="bg-white border border-[#e3e8f0] rounded-xl p-6 hover:border-[#1e5bc6] hover:shadow-xs transition-all space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-lg bg-[#1e5bc6]/10 text-[#1e5bc6] flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#5b6b85]">
                        Pillar 0{diff.number}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#00184a]">
                      {diff.title}
                    </h3>

                    <p className="text-sm text-[#5b6b85] leading-relaxed">
                      {diff.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#e3e8f0] text-xs font-semibold text-[#1e5bc6]">
                    Varnith Standard • Hyderabad
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Learning Journey / How We Hire Section */}
      <LearningJourney />

      <CTASection />
    </div>
  );
}
