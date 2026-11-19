import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { siteData } from '../../data/siteData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Talent Acquisition & Recruitment',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const services = [
    'Talent Acquisition & Recruitment',
    'Recruitment Process Outsourcing (RPO)',
    'Executive Leadership Search',
    'Contract Staffing & Augmentation',
    'SAP Basis Security Training',
    'SAP GRC 12.0 Access Control Training',
    'DevOps & Cloud Engineering Training',
    'Quality Engineering / Software Testing',
    'Data & Analytics Training',
    'College Engagements & Campus Drives',
    'General Corporate Inquiry'
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
        await new Promise((r) => setTimeout(r, 450));
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'Talent Acquisition & Recruitment',
        message: ''
      });
    } catch {
      setStatus('error');
      setErrorMessage('Failed to send message. Please reach us directly at info@varnithglobal.com or call +91 79954 83137.');
    }
  };

  return (
    <section id="contact" className="bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Contact Info matching Bluspark */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold tracking-widest text-[#0066CC] uppercase">
              GET IN TOUCH
            </span>

            <h2 className="text-2xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
              Start a Conversation With Our Team
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Whether you are planning critical engineering hires or seeking practical hands-on technology training for your workforce, our advisory team in Madhapur is ready to assist.
            </p>

            <div className="space-y-4 pt-2">
              {/* Telephone */}
              <div className="p-4 rounded-lg border border-slate-200 bg-slate-50 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-md bg-white border border-slate-200 text-[#0B2545] flex items-center justify-center shrink-0 shadow-2xs">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Telephone Inquiries</div>
                  <a href={`tel:${siteData.brand.rawPhone}`} className="text-sm font-bold text-[#0F172A] hover:text-[#0066CC] transition-colors">
                    {siteData.brand.phone}
                  </a>
                  <div className="text-[11px] text-slate-500 mt-0.5">Mon – Sat: 9:00 AM – 7:00 PM IST</div>
                </div>
              </div>

              {/* Email */}
              <div className="p-4 rounded-lg border border-slate-200 bg-slate-50 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-md bg-white border border-slate-200 text-[#0B2545] flex items-center justify-center shrink-0 shadow-2xs">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Official Email</div>
                  <a href={`mailto:${siteData.brand.email}`} className="text-sm font-bold text-[#0F172A] hover:text-[#0066CC] transition-colors">
                    {siteData.brand.email}
                  </a>
                  <div className="text-[11px] text-slate-500 mt-0.5">Response SLA: &lt; 2 Business Hours</div>
                </div>
              </div>

              {/* Address */}
              <div className="p-4 rounded-lg border border-slate-200 bg-slate-50 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-md bg-white border border-slate-200 text-[#0B2545] flex items-center justify-center shrink-0 shadow-2xs">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Registered Office</div>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium mt-0.5">
                    {siteData.brand.address.full}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Form matching Reference */}
          <div className="lg:col-span-7">
            <div className="border border-slate-200 rounded-lg p-6 sm:p-8 bg-white shadow-xs">
              <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Fill in your details below and a senior practice lead will get back to you promptly.
              </p>

              {status === 'success' ? (
                <div className="p-8 rounded-lg bg-slate-50 border border-slate-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-200 text-[#0066CC] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-[#0F172A]">Message Received</h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                    Thank you for contacting Varnith Technologies. Our practice lead will review your requirements and respond within 2 business hours.
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
                    <div className="p-3.5 rounded-md bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:border-[#0B2545] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Corporate Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. rahul@company.com"
                        className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:border-[#0B2545] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:border-[#0B2545] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Service of Interest
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 text-xs sm:text-sm text-slate-800 bg-white focus:outline-hidden focus:border-[#0B2545] transition-colors"
                      >
                        {services.map((svc, idx) => (
                          <option key={idx} value={svc}>{svc}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Your Requirements or Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please describe roles you need to hire, headcount, target timeline, or course questions..."
                      className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:border-[#0B2545] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary w-full py-3 text-xs sm:text-sm font-semibold justify-center"
                  >
                    <Send className="w-4 h-4" />
                    <span>{status === 'loading' ? 'Submitting...' : 'Send Message'}</span>
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

