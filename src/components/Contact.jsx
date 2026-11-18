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
    'SAP Basis Security Training',
    'SAP GRC Training',
    'DevOps Engineering Training',
    'Data Analyst Training',
    'Software Testing Training',
    'Python Programming',
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
    <section id="contact" className="bg-white py-16 sm:py-20 border-b border-[#e3e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-[#1e5bc6]">
                Talk to Us
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#00184a] tracking-tight">
                Reach Us Directly
              </h2>
              <p className="text-base text-[#5b6b85] leading-relaxed">
                Whether you need to scale software hiring or enrol in professional technical training, our team in Madhapur is here to help.
              </p>
            </div>

            <div className="space-y-4">
              {/* Phone Card */}
              <div className="p-4 rounded-xl border border-[#e3e8f0] bg-[#f7f9fc] flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-white border border-[#e3e8f0] text-[#1e5bc6] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-[#5b6b85] font-medium">Direct Telephone</div>
                  <a href={`tel:${siteData.brand.rawPhone}`} className="text-sm font-bold text-[#00184a] hover:text-[#1e5bc6]">
                    {siteData.brand.phone}
                  </a>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-4 rounded-xl border border-[#e3e8f0] bg-[#f7f9fc] flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-white border border-[#e3e8f0] text-[#1e5bc6] flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-[#5b6b85] font-medium">Official Inquiries</div>
                  <a href={`mailto:${siteData.brand.email}`} className="text-sm font-bold text-[#00184a] hover:text-[#1e5bc6]">
                    {siteData.brand.email}
                  </a>
                </div>
              </div>

              {/* Office Address Card */}
              <div className="p-4 rounded-xl border border-[#e3e8f0] bg-[#f7f9fc] flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-white border border-[#e3e8f0] text-[#1e5bc6] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-[#5b6b85] font-medium">Registered Office</div>
                  <p className="text-xs text-[#00184a] leading-relaxed mt-0.5 font-medium">
                    1-90/B/C/1, Flat No. 102, Bhanu Elite, Madhapur, Shaikpet, Hyderabad – 500081, Telangana, India
                  </p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="p-4 rounded-xl border border-[#e3e8f0] bg-[#f7f9fc] flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-white border border-[#e3e8f0] text-[#1e5bc6] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-[#5b6b85] font-medium">Operating Hours</div>
                  <p className="text-xs text-[#00184a] mt-0.5 font-medium">
                    Monday – Saturday, 9:00 AM – 7:00 PM IST
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Form */}
          <div className="lg:col-span-7">
            <div className="border border-[#e3e8f0] rounded-2xl p-6 sm:p-8 bg-white shadow-xs">
              <h3 className="text-xl font-bold text-[#00184a] mb-6">
                Send a Message
              </h3>

              {status === 'success' ? (
                <div className="p-6 rounded-xl bg-[#f7f9fc] border border-[#e3e8f0] text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#1e5bc6]/10 text-[#1e5bc6] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-[#00184a]">Thank You</h4>
                  <p className="text-sm text-[#5b6b85] max-w-md mx-auto">
                    Your inquiry has been received. Our team will review your requirements and respond within 24 business hours.
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
                    <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#00184a] mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#cbd5e1] text-sm text-[#00184a] focus:outline-none focus:border-[#1e5bc6] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#00184a] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. rahul@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#cbd5e1] text-sm text-[#00184a] focus:outline-none focus:border-[#1e5bc6] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#00184a] mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#cbd5e1] text-sm text-[#00184a] focus:outline-none focus:border-[#1e5bc6] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#00184a] mb-1.5">
                        Area of Interest *
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#cbd5e1] text-sm text-[#00184a] focus:outline-none focus:border-[#1e5bc6] transition-colors bg-white"
                      >
                        {subjects.map((sub, i) => (
                          <option key={i} value={sub}>{sub}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#00184a] mb-1.5">
                      Your Message or Requirements *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share role details, hiring timelines or preferred course batch timings..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#cbd5e1] text-sm text-[#00184a] focus:outline-none focus:border-[#1e5bc6] transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="btn-blue w-full sm:w-auto"
                    >
                      <Send className="w-4 h-4" />
                      <span>{status === 'loading' ? 'Sending...' : 'Send Message'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
