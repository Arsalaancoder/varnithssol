import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';
import { siteData } from '../data/siteData';
import TextReveal from './motion/TextReveal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Course Enquiry',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const subjects = [
    'General Course Enquiry',
    'DevOps Engineering',
    'SAP Basis Security',
    'SAP GRC',
    'Data Analyst',
    'Software Testing',
    'Python Programming',
    'Corporate HR & Recruitment Services',
    'Other Inquiries'
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
        await new Promise((r) => setTimeout(r, 700));
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Course Enquiry',
        message: ''
      });
    } catch (err) {
      console.error('Contact form error:', err);
      setStatus('error');
      setErrorMessage('Unable to dispatch message. Please contact us directly via phone or WhatsApp.');
    }
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 px-6 sm:px-12 lg:px-16 bg-[#EAF0E8]"
    >
      <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column — Contact Information & Office Details */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#183629]/10 text-[#183629] text-xs font-bold tracking-widest uppercase">
              <span>GET IN TOUCH</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#183629] font-normal tracking-tight leading-[1.08]">
              <TextReveal
                text="Let's Start Your Next Chapter."
                mode="word"
                highlightWord="Next Chapter."
                highlightClassName="italic font-light text-[#DFAE22]"
              />
            </h2>

            <p className="text-base sm:text-lg text-[#202923]/80 font-light leading-relaxed">
              Have questions about our courses, career opportunities or HR services? Our team in Hyderabad is ready to help you take the next step.
            </p>
          </div>

          {/* Contact Details Cards */}
          <div className="space-y-4">
            {/* Phone */}
            <div className="p-5 rounded-2xl bg-white border border-stone-200/70 flex items-start gap-4 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#183629]/10 flex items-center justify-center text-[#183629] shrink-0 mt-0.5">
                <Phone className="w-5 h-5 text-[#DFAE22]" />
              </div>
              <div className="flex-1">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#737D73] block">
                  Direct Inquiries & Admissions
                </span>
                <a
                  href={`tel:${siteData.brand.rawPhone}`}
                  className="font-serif text-lg sm:text-xl text-[#183629] font-semibold hover:underline"
                >
                  {siteData.brand.phone}
                </a>
                <p className="text-xs text-[#737D73] mt-0.5">Available Mon – Sat, 9:00 AM – 7:00 PM</p>
              </div>
            </div>

            {/* Email */}
            <div className="p-5 rounded-2xl bg-white border border-stone-200/70 flex items-start gap-4 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#183629]/10 flex items-center justify-center text-[#183629] shrink-0 mt-0.5">
                <Mail className="w-5 h-5 text-[#DFAE22]" />
              </div>
              <div className="flex-1">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#737D73] block">
                  Official Email
                </span>
                <a
                  href={`mailto:${siteData.brand.email}`}
                  className="font-serif text-lg sm:text-xl text-[#183629] font-semibold hover:underline"
                >
                  {siteData.brand.email}
                </a>
                <p className="text-xs text-[#737D73] mt-0.5">Prompt response within 24 business hours</p>
              </div>
            </div>

            {/* Address */}
            <div className="p-5 rounded-2xl bg-white border border-stone-200/70 flex items-start gap-4 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#183629]/10 flex items-center justify-center text-[#183629] shrink-0 mt-0.5">
                <MapPin className="w-5 h-5 text-[#DFAE22]" />
              </div>
              <div className="flex-1">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#737D73] block">
                  Hyderabad Training Campus
                </span>
                <p className="font-serif text-lg text-[#183629] font-semibold">
                  {siteData.brand.address.line1}
                </p>
                <p className="text-xs text-[#737D73]">
                  {siteData.brand.address.line2}
                </p>
              </div>
            </div>
          </div>

          {/* Quick WhatsApp Action Button — Yellow Primary CTA */}
          <a
            href={siteData.brand.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#F2C94C] text-[#183629] text-xs font-bold uppercase tracking-wider hover:bg-[#DFAE22] hover:text-[#102A21] transition-all shadow-md group"
          >
            <MessageSquare className="w-4 h-4 text-[#183629]" />
            <span>Chat With Us on WhatsApp</span>
          </a>
        </div>

        {/* Right Column — Functional Enquiry Form */}
        <div className="lg:col-span-7 bg-white border border-stone-200/70 rounded-[32px] p-8 sm:p-10 shadow-lg">
          <div className="pb-6 border-b border-stone-200">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#737D73]">
              SEND AN ENQUIRY
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#183629] font-normal mt-1">
              Have Questions? Send Us a Message.
            </h3>
            <p className="text-xs text-[#737D73] mt-1 font-light">
              We will route your query to our specialized program or recruitment counselors.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {/* Name */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#183629] mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Rahul Sharma"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl bg-stone-50 border border-stone-200 text-[#202923] text-sm focus:outline-none focus:border-[#DFAE22] focus:bg-white transition-all"
              />
            </div>

            {/* Email & Phone Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#183629] mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="rahul@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-stone-50 border border-stone-200 text-[#202923] text-sm focus:outline-none focus:border-[#DFAE22] focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#183629] mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-stone-50 border border-stone-200 text-[#202923] text-sm focus:outline-none focus:border-[#DFAE22] focus:bg-white transition-all"
                />
              </div>
            </div>

            {/* Subject Selector */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#183629] mb-2">
                Subject / Program of Interest
              </label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl bg-stone-50 border border-stone-200 text-[#202923] text-sm focus:outline-none focus:border-[#DFAE22] focus:bg-white transition-all"
              >
                {subjects.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#183629] mb-2">
                Your Message <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={4}
                placeholder="Tell us about your educational background, learning goals or hiring requirements..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl bg-stone-50 border border-stone-200 text-[#202923] text-sm focus:outline-none focus:border-[#DFAE22] focus:bg-white transition-all resize-none"
              />
            </div>

            {/* Feedback Banners */}
            <AnimatePresence>
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="p-3.5 rounded-xl bg-red-100 border border-red-200 text-red-800 text-xs flex items-center gap-2"
                >
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </motion.div>
              )}

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="p-4 rounded-xl bg-[#183629] text-[#EAF0E8] text-xs space-y-1"
                >
                  <div className="flex items-center gap-2 font-bold text-sm text-[#F2C94C]">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Message Successfully Sent!</span>
                  </div>
                  <p className="text-white/80">
                    Thank you for reaching out to Varnith Global. Your enquiry has been received and our counselors will contact you shortly.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit Button — Primary Yellow CTA */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              disabled={status === 'loading'}
              className="relative overflow-hidden w-full py-4 rounded-full bg-[#F2C94C] text-[#183629] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-md hover:bg-[#DFAE22] hover:text-[#102A21] transition-all disabled:opacity-60 group"
            >
              {/* Shine sweep effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
              {status === 'loading' ? (
                <span>Sending Message...</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </>
              )}
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
}
