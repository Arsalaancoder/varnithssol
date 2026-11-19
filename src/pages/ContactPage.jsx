import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  Building2,
  MessageSquare
} from 'lucide-react';
import { motion } from 'framer-motion';
import { siteData } from '../data/siteData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: 'Hiring',
    message: '',
    consent: false
  });

  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please complete your name, a valid email address and your message.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (!formData.consent) {
      setStatus('error');
      setErrorMessage('Please check the consent box to proceed.');
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
          body: JSON.stringify({ ...formData, formType: 'contact_message', timestamp: new Date().toISOString() })
        });
        if (!res.ok) throw new Error('Submission rejected by server');
      } else {
        const existing = JSON.parse(localStorage.getItem('varnith_contact_messages') || '[]');
        existing.push({
          ...formData,
          id: Date.now(),
          timestamp: new Date().toISOString()
        });
        localStorage.setItem('varnith_contact_messages', JSON.stringify(existing));
        await new Promise((r) => setTimeout(r, 600));
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        topic: 'Hiring',
        message: '',
        consent: false
      });
    } catch {
      setStatus('error');
      setErrorMessage('Failed to send message. Please contact info@varnithglobal.com directly.');
    }
  };

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="bg-white pt-10 pb-16 lg:pt-16 lg:pb-20 border-b border-slate-200 relative overflow-hidden">
        {/* Decorative Geometric Accents matching reference */}
        <div className="hidden sm:block absolute top-12 left-6 lg:left-20 w-7 h-7 rounded-full bg-[#FBBF24] opacity-90 shadow-2xs pointer-events-none" />
        <div className="hidden sm:block absolute top-10 right-4 lg:right-16 pointer-events-none">
          <div className="w-7 h-7 rounded-full bg-[#FBBF24] mb-2 ml-auto opacity-90 shadow-2xs" />
          <div className="w-10 h-7 rounded-b-full bg-[#056EB5] opacity-90" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <Link to="/" className="hover:text-[#0A3857]">Home</Link>
            <span>/</span>
            <span className="text-[#0A3857] font-semibold">Contact</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-xs font-semibold text-[#0A3857] uppercase tracking-wider">
              <MessageSquare className="w-4 h-4 text-[#127DC4]" />
              <span>Reach Us</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A3857] tracking-tight leading-tight">
              Talk to us
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              A role to fill, a course to ask about, a college partnership, or just a question – we would be glad to hear from you. A real person reads every message.
            </p>
          </div>

        </div>
      </section>

      {/* 2. CONTACT GRID: DIRECT INFO + SEND MESSAGE FORM */}
      <section className="bg-[#F8FAFC] py-16 sm:py-20 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left: Reach Us Directly */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-[#0A3857]">
                  Reach us directly
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We usually reply within one working day. Our team is based in Madhapur, Hyderabad, operating during standard IST business hours.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-6 shadow-2xs">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-md bg-[#0A3857]/5 flex items-center justify-center shrink-0 text-[#0A3857]">
                    <Mail className="w-5 h-5 text-[#0A3857]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email</div>
                    <a
                      href={`mailto:${siteData.brand.email}`}
                      className="text-base font-semibold text-[#0A3857] hover:text-[#127DC4] transition-colors"
                    >
                      {siteData.brand.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-md bg-[#0A3857]/5 flex items-center justify-center shrink-0 text-[#0A3857]">
                    <Phone className="w-5 h-5 text-[#0A3857]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Phone</div>
                    <a
                      href={`tel:${siteData.brand.rawPhone}`}
                      className="text-base font-semibold text-[#0A3857] hover:text-[#127DC4] transition-colors"
                    >
                      {siteData.brand.phone}
                    </a>
                  </div>
                </div>

                {/* Registered Office */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-md bg-[#0A3857]/5 flex items-center justify-center shrink-0 text-[#0A3857]">
                    <MapPin className="w-5 h-5 text-[#0A3857]" />
                  </div>
                  <div className="text-sm">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Registered Office</div>
                    <div className="font-semibold text-slate-900 mt-1">{siteData.brand.legalName}</div>
                    <div className="text-slate-600 mt-0.5 leading-relaxed">{siteData.brand.address.full}</div>
                    <div className="text-xs text-slate-500 mt-2 font-mono">CIN: {siteData.brand.cin}</div>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-md bg-[#0A3857]/5 flex items-center justify-center shrink-0 text-[#0A3857]">
                    <Clock className="w-5 h-5 text-[#0A3857]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Office Hours</div>
                    <div className="text-sm text-slate-700 font-medium">{siteData.brand.hours}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Send a message Form */}
            <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-8 sm:p-10 shadow-2xs">
              <div className="border-b border-slate-200 pb-5 mb-8 space-y-1">
                <h2 className="text-2xl font-bold text-[#0A3857]">
                  Send a message
                </h2>
                <p className="text-sm text-slate-600">
                  Please complete your details and let us know how we can assist you.
                </p>
              </div>

              {status === 'success' ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-14 h-14 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A3857]">
                    Thank you — your message has been noted
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    A team member will review your note and respond within one business day. You can also reach us directly at {siteData.brand.email}.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setStatus('idle')}
                      className="btn-secondary text-xs font-semibold"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form noValidate onSubmit={handleSubmit} className="space-y-6">
                  {status === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm flex items-start gap-2.5">
                      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                      <span>{errorMessage || 'Please complete your name, a valid email address and your message.'}</span>
                    </div>
                  )}

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md focus:border-[#0A3857] outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md focus:border-[#0A3857] outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md focus:border-[#0A3857] outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      I am contacting you about
                    </label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md focus:border-[#0A3857] outline-none"
                    >
                      <option value="Hiring">Hiring / Recruitment</option>
                      <option value="Training">Training (SAP / Technology)</option>
                      <option value="College engagement">College engagement</option>
                      <option value="Other">Other general inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us what you have in mind..."
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md focus:border-[#0A3857] outline-none"
                    ></textarea>
                  </div>

                  <div className="space-y-3 pt-1">
                    <p className="text-xs text-slate-500">
                      We use these details only to reply to you about this request – nothing else. See our <Link to="/privacy" className="underline text-slate-700">privacy policy</Link>.
                    </p>
                    <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-700 font-medium">
                      <input
                        type="checkbox"
                        required
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="w-4 h-4 text-[#0A3857] rounded border-slate-300 mt-0.5 focus:ring-[#0A3857]"
                      />
                      <span>I agree that Varnith Technologies may use these details to reply to my message.</span>
                    </label>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="btn-primary w-full sm:w-auto px-8 py-3 text-sm font-semibold justify-center gap-2"
                    >
                      {status === 'loading' ? 'Sending message...' : 'Send message'}
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
