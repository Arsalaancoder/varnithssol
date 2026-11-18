import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/siteData';
import { CheckCircle2, ArrowRight, Send, Clock, Users, ShieldCheck } from 'lucide-react';
import CTASection from '../components/CTASection';

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
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-[#f7f9fc] py-12 sm:py-16 border-b border-[#e3e8f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-medium text-[#5b6b85]">
            <Link to="/and" className="hover:text-[#1e5bc6]">Home</Link>
            <span>/</span>
            <span className="text-[#00184a] font-semibold">HR Consulting</span>
          </div>

          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#1e5bc6]">
              HR Services & Sourcing
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold text-[#00184a] tracking-tight">
              HR Consulting for Software Organisations
            </h1>
            <p className="text-base sm:text-lg text-[#5b6b85] leading-relaxed">
              We help technology firms and enterprise software teams find, vet, and retain engineering talent across India. From individual critical hires to full Recruitment Process Outsourcing (RPO).
            </p>
          </div>
        </div>
      </section>

      {/* 6 Services Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10 space-y-2">
            <h2 className="text-2xl font-bold text-[#00184a]">
              Our HR Services
            </h2>
            <p className="text-sm text-[#5b6b85]">
              Every practice is backed by documented role briefs, verified candidate screening, and transparent SLAs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteData.hrServices.map((service, idx) => (
              <div
                key={service.id}
                className="bg-white border border-[#e3e8f0] rounded-xl p-6 hover:border-[#1e5bc6] hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase text-[#5b6b85] tracking-wider">
                      Practice 0{idx + 1}
                    </span>
                    <span className="text-[11px] font-medium text-[#1e5bc6] bg-[#1e5bc6]/10 px-2.5 py-0.5 rounded-full">
                      Full Lifecycle
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#00184a]">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#5b6b85] leading-relaxed">
                    {service.shortDesc || service.description}
                  </p>

                  {service.whatItIncludes && (
                    <ul className="space-y-1.5 pt-3 border-t border-[#e3e8f0] text-xs text-[#00184a]">
                      {service.whatItIncludes.slice(0, 3).map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#1e5bc6] shrink-0" />
                          <span className="truncate">{item.title}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="pt-5 mt-4 border-t border-[#e3e8f0]">
                  <Link
                    to={`/and/hr-services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1e5bc6] hover:text-[#15469e] transition-colors"
                  >
                    <span>Read practice details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 Advantage Cards */}
      <section className="bg-[#f7f9fc] py-14 border-y border-[#e3e8f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h2 className="text-2xl font-bold text-[#00184a]">
              The Varnith Recruitment Advantage
            </h2>
            <p className="text-sm text-[#5b6b85]">
              Designed to eliminate hiring ambiguity and reduce recruiter fatigue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-[#e3e8f0] rounded-xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#1e5bc6]/10 text-[#1e5bc6] flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#00184a]">Technical Vetting</h3>
              <p className="text-xs text-[#5b6b85] leading-relaxed">
                Candidates are evaluated for genuine code, system design, and role competencies before reaching your desk.
              </p>
            </div>

            <div className="bg-white border border-[#e3e8f0] rounded-xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#f6650a]/10 text-[#f6650a] flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#00184a]">&lt; 14 Days Turnaround</h3>
              <p className="text-xs text-[#5b6b85] leading-relaxed">
                Accelerated sourcing pipelines across Hyderabad, Bangalore, and pan-India tech corridors.
              </p>
            </div>

            <div className="bg-white border border-[#e3e8f0] rounded-xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#1e5bc6]/10 text-[#1e5bc6] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#00184a]">94% Stability & Retention</h3>
              <p className="text-xs text-[#5b6b85] leading-relaxed">
                Structured expectation alignment and onboarding support to guarantee long-term retention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Inquiry Form */}
      <section className="py-14 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-[#e3e8f0] rounded-2xl p-6 sm:p-10 bg-white shadow-xs space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1e5bc6]">
                Schedule a Consultation
              </span>
              <h2 className="text-2xl font-bold text-[#00184a]">
                Partner with Varnith Global on Talent Acquisition
              </h2>
              <p className="text-xs sm:text-sm text-[#5b6b85]">
                Share your hiring headcount or practice needs. Our senior talent partner will respond within 24 business hours.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-xl bg-[#f7f9fc] border border-[#e3e8f0] text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#1e5bc6]/10 text-[#1e5bc6] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-[#00184a]">Request Received</h4>
                <p className="text-xs text-[#5b6b85]">
                  Thank you! Our recruitment lead in Madhapur will prepare an initial sourcing outline.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-outline text-xs mt-2"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#00184a] mb-1">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Acme Technologies"
                      className="w-full px-3 py-2 rounded-lg border border-[#cbd5e1] text-xs text-[#00184a] focus:outline-none focus:border-[#1e5bc6]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#00184a] mb-1">
                      Your Name & Designation *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Priya Sharma, VP Engineering"
                      className="w-full px-3 py-2 rounded-lg border border-[#cbd5e1] text-xs text-[#00184a] focus:outline-none focus:border-[#1e5bc6]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#00184a] mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. priya@acme.com"
                      className="w-full px-3 py-2 rounded-lg border border-[#cbd5e1] text-xs text-[#00184a] focus:outline-none focus:border-[#1e5bc6]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#00184a] mb-1">
                      Contact Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3 py-2 rounded-lg border border-[#cbd5e1] text-xs text-[#00184a] focus:outline-none focus:border-[#1e5bc6]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#00184a] mb-1">
                      Service Requirement
                    </label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-[#cbd5e1] text-xs text-[#00184a] focus:outline-none focus:border-[#1e5bc6] bg-white"
                    >
                      {siteData.hrServices.map(s => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#00184a] mb-1">
                      Target Headcount
                    </label>
                    <select
                      value={formData.headcount}
                      onChange={(e) => setFormData({ ...formData, headcount: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-[#cbd5e1] text-xs text-[#00184a] focus:outline-none focus:border-[#1e5bc6] bg-white"
                    >
                      <option value="1-5 Hires">1 – 5 Hires (Specialized)</option>
                      <option value="6-20 Hires">6 – 20 Hires (Team Scale)</option>
                      <option value="20+ Hires">20+ Hires (Enterprise RPO)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#00184a] mb-1">
                    Job Descriptions or Specific Timelines
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Briefly describe target technologies (e.g. AWS, SAP, Full-Stack), location requirements, or start dates..."
                    className="w-full px-3 py-2 rounded-lg border border-[#cbd5e1] text-xs text-[#00184a] focus:outline-none focus:border-[#1e5bc6] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-blue w-full sm:w-auto"
                >
                  <Send className="w-4 h-4" />
                  <span>{submitting ? 'Submitting...' : 'Request Talent Strategy'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
