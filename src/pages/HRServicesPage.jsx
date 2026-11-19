import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/siteData';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import InnerPageLayout from '../components/InnerPageLayout';

export default function HRServicesPage() {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    serviceInterest: 'Recruitment & Talent Acquisition',
    headcount: '1-5 Hires',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      const stored = JSON.parse(localStorage.getItem('varnith_hr_inquiries') || '[]');
      stored.push({ ...formData, date: new Date().toISOString() });
      localStorage.setItem('varnith_hr_inquiries', JSON.stringify(stored));
      setSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  return (
    <InnerPageLayout
      title="HR Consulting Services"
      subtitle="Strategic talent acquisition, contract staffing, and workforce advisory for technology enterprises across India."
      breadcrumb={[{ label: 'HR Consulting' }]}
      activePath="/and/hr-services"
    >
      <div className="space-y-12">
        
        {/* Featured Image */}
        <div className="rounded-xl overflow-hidden border border-[#E5E7EB] shadow-card">
          <img
            src="/assets/hr_carousel_1.jpg"
            alt="Corporate HR Consulting"
            className="w-full h-72 sm:h-80 object-cover"
          />
        </div>

        {/* Section Intro */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#00A859]" />
            <span className="text-xs font-bold text-[#00A859] uppercase tracking-wider">
              ENTERPRISE TALENT PRACTICE
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-[#16191D]">
            Strategic HR Solutions Designed for Scale
          </h2>

          <p className="text-sm sm:text-base text-[#5E6874] leading-relaxed">
            We help technology firms and software engineering teams find, evaluate, and retain critical technical talent. Every practice is backed by documented role briefs, hands-on lab evaluations, and transparent SLAs.
          </p>
        </div>

        {/* 6 Core HR Practices Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {siteData.hrServices.map((service, idx) => (
            <div
              key={service.id}
              className="bg-white border border-[#E5E7EB] rounded-xl p-6 hover:border-[#00A859] hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#00A859] bg-[#EAF7EE] px-2.5 py-0.5 rounded">
                    0{idx + 1} / PRACTICE
                  </span>
                  <span className="text-[11px] font-semibold text-[#5E6874]">
                    14-Day SLA
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#16191D] group-hover:text-[#00A859] transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#5E6874] leading-relaxed">
                  {service.shortDescription || service.description}
                </p>

                {service.whatItIncludes && (
                  <ul className="space-y-1.5 pt-3 border-t border-[#E5E7EB] text-xs text-[#16191D]">
                    {service.whatItIncludes.slice(0, 3).map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00A859] shrink-0 mt-0.5" />
                        <span className="text-[#5E6874] truncate">{item.title}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="pt-4 mt-4 border-t border-[#E5E7EB]">
                <Link
                  to={`/and/hr-services/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00A859] group-hover:text-[#008F4C]"
                >
                  <span>Explore practice details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Hiring Consultation Card / Form */}
        <div id="consultation-form" className="bg-[#F8F9FA] border border-[#E5E7EB] rounded-xl p-6 sm:p-8 space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold text-[#00A859] uppercase tracking-wider block">
              GET A TAILORED RECRUITMENT PLAN
            </span>
            <h3 className="text-xl font-bold text-[#16191D]">
              Request an Enterprise Talent Consultation
            </h3>
            <p className="text-xs sm:text-sm text-[#5E6874]">
              Share your current hiring requirements. We will review stack availability and return a calibrated talent brief within 24 hours.
            </p>
          </div>

          {submitted ? (
            <div className="bg-[#EAF7EE] border border-[#00A859] rounded-lg p-6 text-center space-y-2">
              <CheckCircle2 className="w-8 h-8 text-[#00A859] mx-auto" />
              <h4 className="text-base font-bold text-[#16191D]">Consultation Request Received</h4>
              <p className="text-xs sm:text-sm text-[#5E6874]">
                A senior talent lead will reach out to schedule an initial role brief discussion.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="btn-outline text-xs mt-2"
              >
                Submit another requirement
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#16191D] mb-1">Company Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Acme Tech India"
                    className="w-full px-3 py-2 text-xs border border-[#E5E7EB] rounded-md focus:border-[#00A859] focus:outline-hidden bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#16191D] mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Anand Varma"
                    className="w-full px-3 py-2 text-xs border border-[#E5E7EB] rounded-md focus:border-[#00A859] focus:outline-hidden bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#16191D] mb-1">Work Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. anand@acme.com"
                    className="w-full px-3 py-2 text-xs border border-[#E5E7EB] rounded-md focus:border-[#00A859] focus:outline-hidden bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#16191D] mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-3 py-2 text-xs border border-[#E5E7EB] rounded-md focus:border-[#00A859] focus:outline-hidden bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#16191D] mb-1">Practice of Interest</label>
                  <select
                    value={formData.serviceInterest}
                    onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-[#E5E7EB] rounded-md focus:border-[#00A859] focus:outline-hidden bg-white"
                  >
                    {siteData.hrServices.map((s) => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#16191D] mb-1">Hiring Volume</label>
                  <select
                    value={formData.headcount}
                    onChange={(e) => setFormData({ ...formData, headcount: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-[#E5E7EB] rounded-md focus:border-[#00A859] focus:outline-hidden bg-white"
                  >
                    <option value="1-2 Niche Hires">1-2 Niche / Senior Hires</option>
                    <option value="3-10 Team Ramp">3-10 Team Ramp</option>
                    <option value="10+ Bulk Scaling">10+ Enterprise Bulk Scaling</option>
                    <option value="Full RPO Partnership">Full RPO Partnership</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#16191D] mb-1">Role Brief or Tech Stack Requirements</label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Specify skill sets, years of experience, budget range, and location (Hyderabad, Remote, or pan-India)..."
                  className="w-full px-3 py-2 text-xs border border-[#E5E7EB] rounded-md focus:border-[#00A859] focus:outline-hidden bg-white resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="btn-green text-xs px-6 py-2.5"
              >
                {submitting ? 'Submitting...' : 'Submit Hiring Brief'}
              </button>
            </form>
          )}
        </div>

      </div>
    </InnerPageLayout>
  );
}
