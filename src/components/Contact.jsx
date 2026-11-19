import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'HR Consulting Services',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const subjects = [
    'HR Consulting & Recruitment',
    'Contract Staffing & RPO',
    'Executive Hiring',
    'SAP Basis Security Training',
    'SAP GRC Training',
    'DevOps Engineering Training',
    'Quality Engineering / Software Testing',
    'Python Programming & Automation',
    'College Engagements & Campus Drives',
    'General Inquiry'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const endpoint = import.meta.env.VITE_CONTACT_API_URL;
      
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...formData, timestamp: new Date().toISOString() })
        });
        if (!res.ok) throw new Error('Submission failed on server');
      } else {
        const existing = JSON.parse(localStorage.getItem('varnith_contact_messages') || '[]');
        existing.push({
          ...formData,
          id: Date.now(),
          timestamp: new Date().toISOString()
        });
        localStorage.setItem('varnith_contact_messages', JSON.stringify(existing));
        await new Promise((r) => setTimeout(r, 500));
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'HR Consulting Services',
        message: ''
      });
    } catch {
      setStatus('error');
      setErrorMessage('Failed to send message. Please reach us directly at info@varnithglobal.com or call +91 79954 83137.');
    }
  };

  return (
    <section id="contact" className="bg-white py-16 sm:py-20 lg:py-24 border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info matching Template */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#00A859]" />
                <span className="text-xs sm:text-sm font-bold tracking-wider text-[#00A859] uppercase">
                  TALK TO US
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#16191D] tracking-tight">
                Reach Us Directly
              </h2>
              <p className="text-base text-[#5E6874] leading-relaxed">
                Whether you need to scale enterprise tech hiring or enrol in professional IT training, our team in Madhapur is here to help.
              </p>
            </div>

            <div className="space-y-4">
              {/* Phone Card */}
              <div className="p-4 rounded-xl border border-[#E5E7EB] bg-[#F8F9FA] flex items-start gap-3.5 hover:border-[#00A859] transition-colors">
                <div className="w-10 h-10 rounded-lg bg-white border border-[#E5E7EB] text-[#00A859] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#5E6874] font-medium">Direct Telephone</div>
                  <a href={`tel:${siteData.brand.rawPhone}`} className="text-sm font-bold text-[#16191D] hover:text-[#00A859] transition-colors">
                    {siteData.brand.phone}
                  </a>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-4 rounded-xl border border-[#E5E7EB] bg-[#F8F9FA] flex items-start gap-3.5 hover:border-[#00A859] transition-colors">
                <div className="w-10 h-10 rounded-lg bg-white border border-[#E5E7EB] text-[#00A859] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#5E6874] font-medium">Official Inquiries</div>
                  <a href={`mailto:${siteData.brand.email}`} className="text-sm font-bold text-[#16191D] hover:text-[#00A859] transition-colors">
                    {siteData.brand.email}
                  </a>
                </div>
              </div>

              {/* Office Address Card */}
              <div className="p-4 rounded-xl border border-[#E5E7EB] bg-[#F8F9FA] flex items-start gap-3.5 hover:border-[#00A859] transition-colors">
                <div className="w-10 h-10 rounded-lg bg-white border border-[#E5E7EB] text-[#00A859] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#5E6874] font-medium">Registered Office</div>
                  <p className="text-xs text-[#16191D] leading-relaxed mt-0.5 font-medium">
                    {siteData.brand.address.full}
                  </p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="p-4 rounded-xl border border-[#E5E7EB] bg-[#F8F9FA] flex items-start gap-3.5 hover:border-[#00A859] transition-colors">
                <div className="w-10 h-10 rounded-lg bg-white border border-[#E5E7EB] text-[#00A859] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#5E6874] font-medium">Operating Hours</div>
                  <p className="text-xs text-[#16191D] mt-0.5 font-medium">
                    {siteData.brand.hours}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Corporate Form */}
          <div className="lg:col-span-7">
            <div className="border border-[#E5E7EB] rounded-2xl p-6 sm:p-8 bg-white shadow-card">
              <h3 className="text-xl font-bold text-[#16191D] mb-6">
                Send a Message
              </h3>

              {status === 'success' ? (
                <div className="p-8 rounded-xl bg-[#EAF7EE] border border-[#00A859] text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#00A859] text-white mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-[#16191D]">Message Received</h4>
                  <p className="text-sm text-[#5E6874] max-w-md mx-auto">
                    Your inquiry has been logged. Our advisory team will review your requirements and respond within 2 business hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn-outline text-xs mt-2"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === 'error' && (
                    <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#16191D] mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] text-sm text-[#16191D] focus:outline-hidden focus:border-[#00A859] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#16191D] mb-1.5">
                        Work Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. rahul@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] text-sm text-[#16191D] focus:outline-hidden focus:border-[#00A859] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#16191D] mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] text-sm text-[#16191D] focus:outline-hidden focus:border-[#00A859] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#16191D] mb-1.5">
                        Service of Interest
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] text-sm text-[#16191D] bg-white focus:outline-hidden focus:border-[#00A859] transition-colors"
                      >
                        {subjects.map((sub, idx) => (
                          <option key={idx} value={sub}>{sub}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#16191D] mb-1.5">
                      Your Requirements or Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please describe roles you need to hire, headcount, target timeline, or course questions..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] text-sm text-[#16191D] focus:outline-hidden focus:border-[#00A859] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-green w-full py-3 text-sm font-semibold justify-center"
                  >
                    <Send className="w-4 h-4" />
                    <span>{status === 'loading' ? 'Submitting...' : 'Submit Message'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
