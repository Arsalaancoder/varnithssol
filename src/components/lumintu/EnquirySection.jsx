import React, { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle2, Send, Check } from 'lucide-react';
import { siteData } from '../../data/siteData';

export default function EnquirySection({
  eyebrow = "GET IN TOUCH",
  title = "Ready to Discuss Your Requirements?",
  description = "Connect with our practice leads for a direct, structured consultation on hiring or technical upskilling.",
  checklist = [],
  serviceOptions = [],
  storageKey = "varnith_enquiries",
  id = "enquiry"
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: serviceOptions[0] || 'General Enquiry',
    message: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setError('Please fill in your name, email and phone number.');
      return;
    }

    setSubmitting(true);
    setError('');

    setTimeout(() => {
      const existing = JSON.parse(localStorage.getItem(storageKey) || '[]');
      existing.push({
        ...formData,
        date: new Date().toISOString()
      });
      localStorage.setItem(storageKey, JSON.stringify(existing));
      setSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: serviceOptions[0] || 'General Enquiry',
        message: ''
      });
    }, 400);
  };

  return (
    <section id={id} className="bg-white py-16 sm:py-20 lg:py-24 border-b border-[#E2E6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading, Info, Checklist */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#063568]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#063568]">
                {eyebrow}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717] tracking-tight leading-tight">
              {title}
            </h2>

            <p className="text-base text-[#5E6874] leading-relaxed">
              {description}
            </p>

            {/* Checklist */}
            {checklist.length > 0 && (
              <div className="space-y-3 pt-2">
                {checklist.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#063568] shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-[#171717]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Contact Details */}
            <div className="pt-6 border-t border-[#E2E6F0] space-y-3 text-sm text-[#5E6874]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-sm bg-[#F2F3FC] border border-[#E2E6F0] flex items-center justify-center text-[#063568] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#171717] block">Direct Phone</span>
                  <a href={`tel:${siteData.brand.rawPhone}`} className="hover:text-[#063568] transition-colors">
                    {siteData.brand.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-sm bg-[#F2F3FC] border border-[#E2E6F0] flex items-center justify-center text-[#063568] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#171717] block">Official Email</span>
                  <a href={`mailto:${siteData.brand.email}`} className="hover:text-[#063568] transition-colors">
                    {siteData.brand.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-sm bg-[#F2F3FC] border border-[#E2E6F0] flex items-center justify-center text-[#063568] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#171717] block">Office Location</span>
                  <span className="text-xs">
                    {siteData.brand.address.full}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact / Enquiry Form */}
          <div className="lg:col-span-7 bg-[#F2F3FC] p-8 sm:p-10 rounded-md border border-[#E2E6F0]">
            <h3 className="text-xl font-bold text-[#171717] mb-2">
              Send an Enquiry
            </h3>
            <p className="text-xs sm:text-sm text-[#5E6874] mb-6">
              Fill in your details below and a practice lead will reach out within 24 business hours.
            </p>

            {submitted ? (
              <div className="bg-white border-2 border-[#063568] rounded-md p-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#063568] text-white flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <h4 className="text-lg font-bold text-[#171717]">Enquiry Submitted Successfully!</h4>
                <p className="text-sm text-[#5E6874] max-w-md mx-auto">
                  Thank you for reaching out to Varnith Technologies. A senior representative will review your message and connect shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2 bg-[#063568] text-white text-xs font-semibold rounded-sm hover:bg-[#04274d] transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-sm">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#171717] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Anand Kumar"
                      className="w-full px-4 py-2.5 bg-white border border-[#E2E6F0] rounded-sm text-sm text-[#171717] focus:outline-hidden focus:border-[#063568]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#171717] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="anand@company.com"
                      className="w-full px-4 py-2.5 bg-white border border-[#E2E6F0] rounded-sm text-sm text-[#171717] focus:outline-hidden focus:border-[#063568]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#171717] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2.5 bg-white border border-[#E2E6F0] rounded-sm text-sm text-[#171717] focus:outline-hidden focus:border-[#063568]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#171717] mb-1">
                      Service / Track Selection
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-[#E2E6F0] rounded-sm text-sm text-[#171717] focus:outline-hidden focus:border-[#063568]"
                    >
                      {serviceOptions.map((opt, idx) => (
                        <option key={idx} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#171717] mb-1">
                    Your Requirements / Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the roles you are hiring for or your learning objectives..."
                    className="w-full px-4 py-2.5 bg-white border border-[#E2E6F0] rounded-sm text-sm text-[#171717] focus:outline-hidden focus:border-[#063568]"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="bg-[#063568] hover:bg-[#04274d] text-white px-8 py-3 rounded-sm font-semibold text-sm transition-colors shadow-xs inline-flex items-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <span>{submitting ? 'Submitting...' : 'Submit Enquiry'}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
