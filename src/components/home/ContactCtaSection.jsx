import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, PhoneCall } from 'lucide-react';
import { siteData } from '../../data/siteData';

export default function ContactCtaSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="border border-slate-200 rounded-xl p-8 sm:p-12 lg:p-16 text-center space-y-6 bg-linear-to-b from-slate-50/60 to-white shadow-2xs">
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-semibold text-[#0A3857] uppercase tracking-wider">
            Start a Conversation
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A3857] tracking-tight max-w-2xl mx-auto leading-tight">
            Tell Us What You Need to Hire
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Tell us about the role and the team. We will listen, ask the right questions, and come back with an honest plan.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="btn-primary text-sm sm:text-base px-7 py-3.5 font-semibold gap-2 shadow-xs"
            >
              <span>Talk to Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${siteData.brand.rawPhone}`}
              className="btn-secondary text-sm sm:text-base px-6 py-3.5 font-semibold gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[#0A3857]" />
              <span>Call +91 79954 83137</span>
            </a>
          </div>

          <div className="pt-4 text-xs text-slate-500">
            Registered Office: Madhapur, Hyderabad • We usually reply within one business day.
          </div>

        </div>

      </div>
    </section>
  );
}

