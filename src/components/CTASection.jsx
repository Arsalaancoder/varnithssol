import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="bg-white py-16 sm:py-20 border-b border-[#e3e8f0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#f7f9fc] border border-[#e3e8f0] rounded-2xl p-8 sm:p-12 text-center space-y-6">
          <div className="text-xs font-bold uppercase tracking-wider text-[#1e5bc6]">
            Get In Touch
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-[#00184a] tracking-tight">
            Tell Us What You Need to Hire
          </h2>

          <p className="text-base sm:text-lg text-[#5b6b85] max-w-2xl mx-auto leading-relaxed">
            Tell us about the role and the team. We will listen, ask the right questions, and come back with an honest, customized plan.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link to="/and/contact" className="btn-orange">
              <span>Talk to us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/and/hr-services" className="btn-blue">
              <span>Explore HR Consulting</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
