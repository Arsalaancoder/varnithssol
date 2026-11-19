import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, AlertCircle, Send, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteData } from '../data/siteData';

export default function InquiryModal({
  isOpen,
  onClose,
  initialService = '',
  serviceType = 'hr', // 'hr' | 'training' | 'general'
}) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: initialService,
    notes: '',
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Valid corporate or personal email is required';
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      errs.phone = 'Valid phone or mobile number is required';
    }
    if (!formData.service) {
      errs.service = 'Please select a service or program';
    }
    if (!formData.consent) {
      errs.consent = 'Please confirm consent to be contacted';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const payload = {
        ...formData,
        submittedAt: new Date().toISOString(),
        serviceType,
      };

      // Store in localStorage as fallback
      const key = serviceType === 'training' ? 'varnith_course_inquiries' : 'varnith_hr_inquiries';
      const existing = JSON.parse(localStorage.getItem(key) || '[]');
      existing.push(payload);
      localStorage.setItem(key, JSON.stringify(existing));

      // Network API if configured
      const apiUrl = import.meta.env.VITE_CONTACT_API_URL;
      if (apiUrl) {
        await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      } else {
        await new Promise((r) => setTimeout(r, 600));
      }

      setSubmitted(true);
    } catch (err) {
      console.error('Submission error:', err);
      // Still show success via local storage fallback
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      service: '',
      notes: '',
      consent: false,
    });
    setErrors({});
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
        <motion.div
          className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8"
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
        >
          {/* Header */}
          <div className="bg-[#EDF3F5] px-6 py-5 border-b border-[#D8E3E8] flex items-center justify-between">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#056EB5] font-['Familjen_Grotesk']">
                Fast-Track Requirement
              </div>
              <h3 className="text-xl font-bold text-[#0D5C91] font-['Familjen_Grotesk']">
                Inquire About Service
              </h3>
            </div>
            <button
              onClick={handleResetAndClose}
              className="p-1.5 rounded-full text-slate-500 hover:text-slate-800 hover:bg-slate-200/60 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6">
            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-[#0D5C91] font-['Familjen_Grotesk']">
                  Requirement Received
                </h4>
                <p className="text-sm text-slate-600 max-w-sm mx-auto font-['Familjen_Grotesk']">
                  Thank you, <strong>{formData.name}</strong>. We have logged your inquiry for{' '}
                  <span className="text-[#056EB5] font-semibold">{formData.service}</span>. Our practice lead will get in touch shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleResetAndClose}
                    className="inline-flex items-center justify-center font-['Familjen_Grotesk'] text-sm font-medium text-white bg-[#056EB5] hover:bg-[#045992] rounded-full px-6 py-2.5 transition-all shadow-xs"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Preselected Service Notification */}
                {formData.service && (
                  <div className="bg-blue-50/70 border border-blue-100 rounded-lg px-3.5 py-2 flex items-center justify-between">
                    <div className="text-xs text-slate-700">
                      Inquiring for: <strong className="text-[#0D5C91]">{formData.service}</strong>
                    </div>
                    <span className="text-[10px] bg-[#056EB5] text-white px-2 py-0.5 rounded-full font-medium">
                      Selected
                    </span>
                  </div>
                )}

                {/* Service Dropdown (if user wants to change) */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1 font-['Familjen_Grotesk']">
                    Select Practice / Service *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className={`w-full text-sm px-3.5 py-2.5 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-[#056EB5] transition-all ${
                      errors.service ? 'border-red-400 bg-red-50/20' : 'border-slate-200'
                    }`}
                  >
                    <option value="">-- Choose a service --</option>
                    <optgroup label="HR Consulting">
                      {siteData.servicesHR.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Training & Development">
                      {(siteData.servicesTraining || []).map((c) => (
                        <option key={c.id} value={c.title}>
                          {c.title}
                        </option>
                      ))}
                    </optgroup>
                  </select>
                  {errors.service && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.service}</span>
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1 font-['Familjen_Grotesk']">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. S. Arsalaan"
                      className={`w-full text-sm px-3.5 py-2.5 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-[#056EB5] transition-all ${
                        errors.name ? 'border-red-400 bg-red-50/20' : 'border-slate-200'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1 font-['Familjen_Grotesk']">
                      Company / College
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Tech Systems Ltd"
                      className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#056EB5] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1 font-['Familjen_Grotesk']">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className={`w-full text-sm px-3.5 py-2.5 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-[#056EB5] transition-all ${
                        errors.email ? 'border-red-400 bg-red-50/20' : 'border-slate-200'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1 font-['Familjen_Grotesk']">
                      Phone / Mobile *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className={`w-full text-sm px-3.5 py-2.5 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-[#056EB5] transition-all ${
                        errors.phone ? 'border-red-400 bg-red-50/20' : 'border-slate-200'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Specific Notes */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1 font-['Familjen_Grotesk']">
                    Role Requirements or Questions
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Briefly describe the open roles, headcount, skills, or batch requirements..."
                    className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#056EB5] transition-all resize-none"
                  />
                </div>

                {/* Consent */}
                <div>
                  <label className="flex items-start gap-2.5 text-xs text-slate-600 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-0.5 rounded border-slate-300 text-[#056EB5] focus:ring-[#056EB5]"
                    />
                    <span>
                      I agree to be contacted by Varnith Technologies regarding this inquiry.
                    </span>
                  </label>
                  {errors.consent && (
                    <p className="text-xs text-red-500 mt-1">{errors.consent}</p>
                  )}
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center font-['Familjen_Grotesk'] text-base font-medium text-white bg-[#056EB5] hover:bg-[#045992] rounded-full px-6 py-3 transition-all duration-200 shadow-xs disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <span>Submit Inquiry</span>
                        <Send className="w-4 h-4" />
                      </span>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
