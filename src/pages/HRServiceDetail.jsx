import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { siteData } from '../data/siteData';
import { CheckCircle2, ChevronDown } from 'lucide-react';
import InnerPageLayout from '../components/InnerPageLayout';

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
    <InnerPageLayout
      title={service.title}
      subtitle={service.shortDescription || service.description}
      breadcrumb={[
        { label: 'HR Consulting', href: '/and/hr-services' },
        { label: service.title }
      ]}
      activePath={`/and/hr-services/${service.slug}`}
      bannerImage={service.image || '/assets/hr_carousel_1.jpg'}
    >
      <div className="space-y-12">
        
        {/* Featured Service Photograph matching Template Slide 3 */}
        <div className="rounded-xl overflow-hidden border border-[#E5E7EB] shadow-card">
          <img
            src={service.image || '/assets/hr_carousel_1.jpg'}
            alt={service.fullTitle}
            className="w-full h-72 sm:h-96 object-cover"
          />
        </div>

        {/* Narrative & Overview */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#00A859]" />
            <span className="text-xs font-bold text-[#00A859] uppercase tracking-wider">
              {service.badge || "ENTERPRISE PRACTICE"}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-[#16191D]">
            {service.fullTitle}
          </h2>

          <p className="text-sm sm:text-base text-[#5E6874] leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Key Metrics Bar */}
        {service.stats && (
          <div className="bg-[#F8F9FA] border border-[#E5E7EB] rounded-xl p-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {service.stats.map((st, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#00A859]">
                  {st.value}
                </div>
                <div className="text-xs text-[#5E6874] font-medium">
                  {st.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* What This Service Includes */}
        {service.whatItIncludes && (
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold text-[#00A859] uppercase tracking-wider block">
                PRACTICE CAPABILITIES
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#16191D]">
                What This Service Includes
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.whatItIncludes.map((inc, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#E5E7EB] rounded-lg p-5 space-y-2 hover:border-[#00A859] transition-colors"
                >
                  <div className="flex items-center gap-2 text-sm font-bold text-[#16191D]">
                    <CheckCircle2 className="w-4 h-4 text-[#00A859] shrink-0" />
                    <span>{inc.title}</span>
                  </div>
                  <p className="text-xs text-[#5E6874] leading-relaxed pl-6">
                    {inc.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Delivery Model / Process Workflow */}
        {service.deliveryModel && (
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold text-[#00A859] uppercase tracking-wider block">
                EXECUTION FRAMEWORK
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#16191D]">
                How Varnith Delivers This Service
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.deliveryModel.map((dm, idx) => (
                <div
                  key={idx}
                  className="bg-[#F8F9FA] border border-[#E5E7EB] rounded-lg p-5 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#00A859] bg-white px-2 py-0.5 rounded border border-[#E5E7EB]">
                      Step {dm.step}
                    </span>
                    <span className="text-[11px] text-[#5E6874] font-semibold">Stage</span>
                  </div>
                  <h4 className="text-sm font-bold text-[#16191D]">{dm.title}</h4>
                  <p className="text-xs text-[#5E6874] leading-relaxed">{dm.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Business Benefits */}
        {service.businessBenefits && (
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold text-[#00A859] uppercase tracking-wider block">
                MEASURABLE ROI
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#16191D]">
                Business Benefits & Outcomes
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {service.businessBenefits.map((ben, idx) => (
                <div
                  key={idx}
                  className="border border-[#E5E7EB] rounded-lg p-5 bg-white space-y-2 text-center hover:border-[#00A859] transition-colors"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#00A859]">
                    {ben.metric}
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#16191D]">{ben.title}</h4>
                  <p className="text-xs text-[#5E6874] leading-relaxed">{ben.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAQs */}
        {service.faqs && (
          <div className="space-y-4">
            <div>
              <span className="text-xs font-bold text-[#00A859] uppercase tracking-wider block">
                FREQUENT QUESTIONS
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#16191D]">
                Practice FAQs
              </h3>
            </div>

            <div className="space-y-3">
              {service.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="border border-[#E5E7EB] rounded-lg overflow-hidden bg-white">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full text-left p-4 flex items-center justify-between gap-4 font-bold text-sm text-[#16191D] hover:text-[#00A859] transition-colors focus:outline-hidden"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#5E6874] shrink-0 transition-transform ${
                          isOpen ? 'rotate-180 text-[#00A859]' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 text-xs sm:text-sm text-[#5E6874] leading-relaxed border-t border-[#E5E7EB] pt-3 bg-[#F8F9FA]/50">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Bottom Consultation Form for this Service */}
        <div id="service-inquiry" className="bg-[#F8F9FA] border border-[#E5E7EB] rounded-xl p-6 sm:p-8 space-y-5">
          <div>
            <span className="text-xs font-bold text-[#00A859] uppercase tracking-wider block">
              ENGAGE THIS PRACTICE
            </span>
            <h3 className="text-xl font-bold text-[#16191D]">
              Consult with Our {service.title} Lead
            </h3>
            <p className="text-xs text-[#5E6874]">
              Share your team specifications to receive calibrated profiles or contract staffing terms within 24 hours.
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-[#EAF7EE] border border-[#00A859] rounded-lg p-5 text-center space-y-2">
              <CheckCircle2 className="w-8 h-8 text-[#00A859] mx-auto" />
              <h4 className="text-sm font-bold text-[#16191D]">Inquiry Logged</h4>
              <p className="text-xs text-[#5E6874]">Our Hyderabad lead will contact you shortly.</p>
              <button onClick={() => setSubmittedSlug(null)} className="btn-outline text-xs mt-2">
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="px-3 py-2 text-xs border border-[#E5E7EB] rounded-md focus:border-[#00A859] focus:outline-hidden bg-white"
                />
                <input
                  type="text"
                  required
                  placeholder="Company Name *"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="px-3 py-2 text-xs border border-[#E5E7EB] rounded-md focus:border-[#00A859] focus:outline-hidden bg-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="email"
                  required
                  placeholder="Corporate Email *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="px-3 py-2 text-xs border border-[#E5E7EB] rounded-md focus:border-[#00A859] focus:outline-hidden bg-white"
                />
                <input
                  type="tel"
                  required
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="px-3 py-2 text-xs border border-[#E5E7EB] rounded-md focus:border-[#00A859] focus:outline-hidden bg-white"
                />
              </div>

              <textarea
                rows={3}
                placeholder="Describe your role brief, skills, budget, or timelines..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-3 py-2 text-xs border border-[#E5E7EB] rounded-md focus:border-[#00A859] focus:outline-hidden bg-white resize-none"
              />

              <button
                type="submit"
                disabled={submitting}
                className="btn-green text-xs px-6 py-2.5"
              >
                {submitting ? 'Submitting...' : 'Request Practice Consultation'}
              </button>
            </form>
          )}
        </div>

      </div>
    </InnerPageLayout>
  );
}
