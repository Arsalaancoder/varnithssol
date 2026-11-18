import React, { useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { siteData } from '../data/siteData';
import { ArrowLeft, CheckCircle2, ChevronDown, Send, Phone } from 'lucide-react';
import CTASection from '../components/CTASection';

export default function HRServiceDetail() {
  const params = useParams();
  const location = useLocation();

  const pathParts = location.pathname.split('/').filter(Boolean);
  const pathSlug = pathParts[pathParts.length - 1];
  const activeSlug = params.slug || (pathSlug !== 'hr-services' ? pathSlug : null);

  const service = siteData.hrServices.find(
    s => s.slug === activeSlug || s.id === activeSlug
  ) || siteData.hrServices[0];

  const [openFaq, setOpenFaq] = useState(0);
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    headcount: '1-5 Hires',
    notes: ''
  });
  const [submittedSlug, setSubmittedSlug] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const isSubmitted = submittedSlug === activeSlug;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      const stored = JSON.parse(localStorage.getItem('varnith_service_consultations') || '[]');
      stored.push({
        service: service.title,
        slug: service.slug,
        ...formData,
        date: new Date().toISOString()
      });
      localStorage.setItem('varnith_service_consultations', JSON.stringify(stored));
      setSubmitting(false);
      setSubmittedSlug(activeSlug);
    }, 400);
  };

  return (
    <div className="bg-white">
      {/* Top Banner */}
      <section className="bg-[#f7f9fc] py-12 sm:py-16 border-b border-[#e3e8f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center justify-between">
            <Link
              to="/and/hr-services"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1e5bc6] hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to HR Services</span>
            </Link>
            <span className="text-xs font-semibold text-[#5b6b85] uppercase">
              Corporate HR Practice
            </span>
          </div>

          <div className="max-w-3xl space-y-3">
            <span className="px-2.5 py-0.5 rounded-full bg-[#1e5bc6]/10 text-[#1e5bc6] text-xs font-semibold">
              Strategic Talent Practice
            </span>

            <h1 className="text-3xl sm:text-5xl font-bold text-[#00184a] tracking-tight">
              {service.fullTitle}
            </h1>

            <p className="text-base sm:text-lg text-[#5b6b85] leading-relaxed">
              {service.description}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a href="#consultation-form" className="btn-blue">
                Request Consultation
              </a>
              <a href={`tel:${siteData.brand.rawPhone}`} className="btn-outline">
                <Phone className="w-4 h-4" />
                <span>Call {siteData.brand.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Scope / What This Service Includes */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#00184a]">
              What This Service Includes
            </h2>
            <p className="text-sm text-[#5b6b85] mt-1">
              Modular components tailored to your organizational scale, tech stack, and hiring timelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.whatItIncludes.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-[#e3e8f0] bg-white hover:border-[#1e5bc6] transition-colors space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold font-mono text-[#1e5bc6]">
                    0{idx + 1} / SCOPE
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-[#1e5bc6]" />
                </div>
                <h3 className="text-lg font-bold text-[#00184a]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5b6b85] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Delivery Model */}
      <section className="bg-[#f7f9fc] py-14 border-y border-[#e3e8f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1e5bc6]">
              Delivery Framework
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#00184a] mt-1">
              How We Deliver {service.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.deliveryModel.map((dm, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-[#e3e8f0] bg-white space-y-2"
              >
                <span className="text-sm font-bold font-mono text-[#f6650a]">
                  Phase {dm.step}
                </span>
                <h3 className="text-base font-bold text-[#00184a]">
                  {dm.title}
                </h3>
                <p className="text-xs text-[#5b6b85] leading-relaxed">
                  {dm.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Business Benefits */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-1">
            <h2 className="text-2xl font-bold text-[#00184a]">
              Direct Business Benefits
            </h2>
            <p className="text-xs text-[#5b6b85]">
              Measurable outcomes verified across enterprise client deployments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.businessBenefits.map((bb, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-[#e3e8f0] bg-[#f7f9fc] text-center space-y-2"
              >
                <div className="text-3xl font-bold text-[#1e5bc6]">
                  {bb.metric}
                </div>
                <h3 className="text-base font-bold text-[#00184a]">
                  {bb.title}
                </h3>
                <p className="text-xs text-[#5b6b85] leading-relaxed">
                  {bb.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Relevant FAQs */}
      <section className="bg-[#f7f9fc] py-14 border-t border-[#e3e8f0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center space-y-1">
            <h2 className="text-2xl font-bold text-[#00184a]">
              Answers About {service.title}
            </h2>
          </div>

          <div className="space-y-3">
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl bg-white border border-[#e3e8f0] overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full p-4 text-left flex items-center justify-between gap-4 font-semibold text-sm text-[#00184a]"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#5b6b85] shrink-0 transition-transform ${
                        isOpen ? 'rotate-180 text-[#1e5bc6]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 text-xs text-[#5b6b85] leading-relaxed border-t border-[#e3e8f0]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Consultation Inquiry Form */}
      <section id="consultation-form" className="py-14 sm:py-16 scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-[#e3e8f0] rounded-2xl p-6 sm:p-10 bg-white shadow-xs space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1e5bc6]">
                Consultation Request
              </span>
              <h2 className="text-2xl font-bold text-[#00184a]">
                Partner on {service.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#5b6b85]">
                Share your hiring headcount or practice needs. Our recruitment lead in Madhapur will prepare an SLA plan within 24 business hours.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-6 rounded-xl bg-[#f7f9fc] border border-[#e3e8f0] text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#1e5bc6]/10 text-[#1e5bc6] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-[#00184a]">Inquiry Received</h4>
                <p className="text-xs text-[#5b6b85]">
                  Thank you! Our senior HR partner has received your request regarding <strong>{service.title}</strong> and will reach out with a candidate strategy plan.
                </p>
                <button
                  onClick={() => setSubmittedSlug(null)}
                  className="btn-outline text-xs mt-2"
                >
                  Submit Another Inquiry
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
                      placeholder="e.g. Anand Rao, Director of Engineering"
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
                      placeholder="e.g. anand@company.com"
                      className="w-full px-3 py-2 rounded-lg border border-[#cbd5e1] text-xs text-[#00184a] focus:outline-none focus:border-[#1e5bc6]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#00184a] mb-1">
                      Phone Number *
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

                <div>
                  <label className="block text-xs font-semibold text-[#00184a] mb-1">
                    Hiring Requirements or Role Specifications
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Share specific skills, stack, experience levels, or hiring deadlines..."
                    className="w-full px-3 py-2 rounded-lg border border-[#cbd5e1] text-xs text-[#00184a] focus:outline-none focus:border-[#1e5bc6] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-blue w-full sm:w-auto"
                >
                  <Send className="w-4 h-4" />
                  <span>{submitting ? 'Submitting...' : 'Request Consultation'}</span>
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
