import React from 'react';
import { Link } from 'react-router-dom';
import { UserCheck, FileText, CheckCircle, Clock, ShieldCheck } from 'lucide-react';
import { UserCheck, FileText, CheckCircle, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import InnerPageLayout from '../components/InnerPageLayout';

export default function WhyUsPage() {
  const promises = [
    {
      icon: UserCheck,
      title: 'One Point of Contact',
      desc: 'One dedicated lead who knows your technical stack, your team culture, and your delivery milestones from start to finish. You never get passed around.'
    },
    {
      icon: FileText,
      title: 'Written Role Brief Before Sourcing',
      desc: 'We agree on what good looks like before searching, establishing explicit evaluation criteria so nobody’s time is wasted.'
    },
    {
      icon: CheckCircle,
      title: 'Screened Shortlists Only',
      desc: 'Fewer resumes, better conversations. You only interview verified candidates we have technically evaluated in live sandboxes.'
    },
    {
      icon: Clock,
      title: 'Regular Updates Without Chasing',
      desc: 'You receive structured progress updates at an agreed rhythm. You never have to chase for candidate feedback or status.'
    }
  ];

  return (
    <InnerPageLayout
      title="Why Choose Varnith"
      subtitle="Eliminating the gap between enterprise hiring demands and practical technical execution with SLA-backed commitments."
      breadcrumb={[{ label: 'Why Choose Us' }]}
      activePath="/and/why-us"
    >
      <div className="space-y-12">
        
        {/* Featured Image */}
        <div className="rounded-xl overflow-hidden border border-[#E5E7EB] shadow-card">
        <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm">
          <img
            src="/assets/experience_presentation.jpg"
            alt="Why Choose Varnith"
            className="w-full h-72 sm:h-80 object-cover"
            className="w-full h-72 sm:h-84 object-cover"
          />
        </div>

        {/* Section Intro */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#063568]" />
            <span className="text-xs font-bold text-[#063568] uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#0066CC]" />
            <span className="text-xs font-bold text-[#0066CC] uppercase tracking-wider">
              OUR SERVICE COMMITMENT
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-[#16191D]">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A]">
            What Working with Varnith Feels Like
          </h2>

          <p className="text-sm sm:text-base text-[#5E6874] leading-relaxed">
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Take the complete package or only the pieces you need. Whether sourcing niche engineering talent or upskilling your existing staff in SAP security, we shape our delivery around your business goals.
          </p>
        </div>

        {/* 4 Core Promises Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {promises.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-[#E5E7EB] rounded-xl p-6 hover:border-[#063568] hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
                className="bg-white border border-slate-200 rounded-lg p-6 hover:border-slate-300 hover:shadow-xs transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-[#F2F3FC] text-[#063568] group-hover:bg-[#063568] group-hover:text-white transition-colors flex items-center justify-center font-bold">
                    <Icon className="w-5 h-5" />
                  <div className="w-10 h-10 rounded-md bg-slate-50 border border-slate-200 text-[#0B2545] group-hover:bg-[#0B2545] group-hover:text-white transition-colors flex items-center justify-center font-bold">
                    <Icon className="w-5 h-5 stroke-[1.75]" />
                  </div>

                  <h3 className="text-lg font-bold text-[#16191D] group-hover:text-[#063568] transition-colors">
                  <h3 className="text-base font-bold text-[#0F172A]">
                    {p.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5E6874] leading-relaxed">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#E5E7EB] flex items-center gap-2 text-xs font-semibold text-[#063568]">
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#0066CC]">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>Verified Operating SLA</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* SLA Metrics Bar */}
        <div className="bg-[#16191D] text-white rounded-xl p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        <div className="bg-[#0B2545] text-white rounded-lg p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-extrabold text-[#063568]">&lt; 14 Days</div>
            <div className="text-xs text-gray-300 mt-1">Average Turnaround</div>
            <div className="text-3xl font-extrabold text-[#38BDF8]">&lt; 14 Days</div>
            <div className="text-xs text-slate-300 mt-1">Average Turnaround</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-white">96.4%</div>
            <div className="text-xs text-gray-300 mt-1">First-Round Pass Rate</div>
            <div className="text-xs text-slate-300 mt-1">First-Round Pass Rate</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-[#063568]">90 Days</div>
            <div className="text-xs text-gray-300 mt-1">Replacement Warranty</div>
            <div className="text-3xl font-extrabold text-[#38BDF8]">90 Days</div>
            <div className="text-xs text-slate-300 mt-1">Replacement Warranty</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-white">10+ Yrs</div>
            <div className="text-xs text-gray-300 mt-1">Senior Mentor Experience</div>
            <div className="text-xs text-slate-300 mt-1">Senior Mentor Experience</div>
          </div>
        </div>

        {/* Action Card */}
        <div className="bg-[#F8F9FA] border border-[#E5E7EB] rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold text-[#16191D]">
            <h4 className="text-base font-bold text-[#0F172A]">
              Have a hiring challenge or upskilling requirement?
            </h4>
            <p className="text-xs text-[#5E6874] mt-0.5">
            <p className="text-xs text-slate-600 mt-0.5">
              Talk directly with our practice leads in Madhapur, Hyderabad.
            </p>
          </div>
          <Link to="/and/contact" className="btn-green text-xs px-6 py-2.5 shrink-0">
            Consult With Our Team
          <Link to="/and/contact" className="btn-primary text-xs px-6 py-2.5 shrink-0">
            <span>Consult With Our Team</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </InnerPageLayout>
  );
}
