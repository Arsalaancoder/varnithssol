import React, { useState } from 'react';
import {
  Users,
  Workflow,
  ShieldAlert,
  HeartHandshake,
  LineChart,
  Compass,
  Clock,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Send,
  Sparkles,
  Layers
} from 'lucide-react';
import { motion } from 'framer-motion';
import { siteData } from '../data/siteData';
import InquiryModal from '../components/InquiryModal';

const hrServiceIcons = [
  Users,
  Workflow,
  ShieldAlert,
  HeartHandshake,
  LineChart,
  Compass,
  Clock
];

export default function HRServicesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    roleTitle: '',
    positions: '1',
    locations: 'Hyderabad',
    workMode: 'hybrid',
    experienceRange: '3 - 6 Years',
    services: ['talent-acquisition'],
    notes: '',
    consent: false
  });

  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleCheckboxChange = (serviceId) => {
    setFormData((prev) => {
      const exists = prev.services.includes(serviceId);
      if (exists) {
        return { ...prev, services: prev.services.filter((s) => s !== serviceId) };
      } else {
        return { ...prev, services: [...prev.services, serviceId] };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.company.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.roleTitle.trim()) {
      setStatus('error');
      setErrorMessage('Please complete all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid work email address.');
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
          body: JSON.stringify({ ...formData, formType: 'hiring_requirement', timestamp: new Date().toISOString() })
        });
        if (!res.ok) throw new Error('Submission rejected by server');
      } else {
        const existing = JSON.parse(localStorage.getItem('varnith_hr_inquiries') || '[]');
        existing.push({
          ...formData,
          id: Date.now(),
          timestamp: new Date().toISOString()
        });
        localStorage.setItem('varnith_hr_inquiries', JSON.stringify(existing));
        await new Promise((r) => setTimeout(r, 600));
      }

      setStatus('success');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        roleTitle: '',
        positions: '1',
        locations: '',
        workMode: 'hybrid',
        experienceRange: '',
        services: ['talent-acquisition'],
        notes: '',
        consent: false
      });
    } catch {
      setStatus('error');
      setErrorMessage('Failed to submit requirement. Please email info@varnithglobal.com or call +91 79954 83137 directly.');
    }
  };

  const scrollToForm = () => {
    const el = document.getElementById('hiring-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="bg-white pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <motion.div
              className="lg:col-span-7 space-y-6"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 border border-slate-200 rounded-full text-xs font-semibold text-[#0A3857] uppercase tracking-wider">
                <span>Talent Acquisition &amp; Workforce Advisory</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A3857] tracking-tight leading-tight">
                HR Consulting for Software Organisations
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Hiring is personal. The right person lifts a whole team; the wrong one costs months. We help software organisations across India get it right – any domain, any tech stack. Take our complete package, or choose only what you need. And because we also train people in SAP security, we understand skills from the inside – not just from a CV.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={scrollToForm}
                  className="btn-primary text-sm sm:text-base px-6 py-3 justify-center gap-2 font-semibold"
                >
                  <span>Share Your Requirement</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={`tel:${siteData.brand.rawPhone}`}
                  className="btn-secondary text-sm sm:text-base px-6 py-3 justify-center font-semibold"
                >
                  Call +91 79954 83137
                </a>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <div className="rounded-lg overflow-hidden border border-slate-200 shadow-xs aspect-4/3 bg-slate-50">
                <img
                  src="/assets/experience_presentation.jpg"
                  alt="Varnith Technologies HR Consulting for Software Teams"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. OUR SERVICES (7 SERVICE CARDS) */}
      <section id="services-grid" className="bg-[#F8FAFC] py-16 sm:py-20 lg:py-24 border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-semibold text-[#0A3857] uppercase tracking-wider">
              Practice Areas
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A3857] tracking-tight">
              Our Services
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Seven specialized hiring and workforce consulting capabilities designed to match every stage of engineering team growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {siteData.servicesHR.map((service, idx) => {
              const Icon = hrServiceIcons[idx % hrServiceIcons.length];
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="backdrop-blur-md bg-gradient-to-br from-blue-50/80 via-white/95 to-orange-50/70 rounded-2xl p-7 sm:p-8 border-2 border-slate-200/90 shadow-[0_8px_24px_-4px_rgba(5,110,181,0.12),0_4px_16px_rgba(244,138,37,0.08)] hover:shadow-[0_20px_40px_-4px_rgba(5,110,181,0.20),0_8px_24px_rgba(244,138,37,0.14)] hover:border-[#056EB5]/50 hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group"
                >
                  {/* Top thick dual-color brand accent line */}
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#056EB5] via-[#38BDF8] to-[#F48A25] opacity-85 group-hover:opacity-100 transition-opacity" />

                  {/* Visible Light Blue & Light Orange glass reflections */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#056EB5]/20 via-[#38BDF8]/10 to-transparent rounded-tr-2xl pointer-events-none group-hover:scale-115 transition-transform duration-500" />
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#F48A25]/18 via-[#FB923C]/10 to-transparent rounded-bl-2xl pointer-events-none group-hover:scale-115 transition-transform duration-500" />

                  <div className="relative z-10">
                    {/* Clean Frosted Icon Badge with 2px border */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100/80 via-white to-orange-100/60 border-2 border-slate-200/80 shadow-xs flex items-center justify-center mb-5 shrink-0 text-[#056EB5] group-hover:text-[#F48A25] transition-colors duration-300">
                      <Icon className="w-5 h-5 transition-transform group-hover:scale-105" />
                    </div>

                    {/* Clean Category Eyebrow (NO DOTS) */}
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2 font-['Familjen_Grotesk']">
                      HR PRACTICE • 0{idx + 1}
                    </div>

                    {/* Main Headline */}
                    <h3 className="text-xl font-bold text-[#0D5C91] mb-2 leading-snug font-['Familjen_Grotesk'] group-hover:text-[#056EB5] transition-colors">
                      {service.title}
                    </h3>

                    {/* Tagline / Subtitle */}
                    <p className="text-xs font-semibold text-[#056EB5] mb-3 font-['Familjen_Grotesk']">
                      {service.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-slate-600 leading-relaxed font-['Familjen_Grotesk'] mb-5">
                      {service.description}
                    </p>

                    {/* Features checklist */}
                    <div className="pt-3 pb-2 space-y-2 border-t border-slate-100/90">
                      {service.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#056EB5] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Button (Opens Modal Instead of Scrolling) */}
                  <div className="pt-5 mt-4 border-t border-slate-100/90 flex items-center justify-between relative z-10">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedService(service.title);
                        setModalOpen(true);
                      }}
                      className="inline-flex items-center gap-2 bg-white/90 hover:bg-white border border-slate-200/90 rounded-full px-4 py-1.5 text-xs font-semibold text-slate-700 shadow-2xs hover:shadow-xs hover:border-[#056EB5] hover:text-[#056EB5] transition-all font-['Familjen_Grotesk'] cursor-pointer"
                    >
                      <span>Inquire about this service</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#F48A25] group-hover:translate-x-0.5 transition-all" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. ONE PACKAGE OR THE PARTS YOU NEED */}
      <section className="bg-white py-16 sm:py-20 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 rounded-full text-xs font-semibold text-[#0A3857] uppercase tracking-wider">
            Flexible Engagements
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0A3857] tracking-tight">
            One Package, or the Parts You Need
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Some clients hand us their full hiring. Others start small, with one hard-to-fill role. Either way, we shape the engagement around your need and your budget – and grow with you.
          </p>
        </div>
      </section>

      {/* 4. HOW WE HIRE (8 STAGES) */}
      <section className="bg-[#F8FAFC] py-16 sm:py-20 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-semibold text-[#0A3857] uppercase tracking-wider">
              Execution Rigor
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A3857] tracking-tight">
              How We Hire
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Every mandate follows eight clear steps from initial briefing to 90-day onboarding check-in.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteData.recruitmentStages.map((stage) => (
              <div
                key={stage.step}
                className="bg-white border border-slate-200 rounded-lg p-6 flex flex-col justify-between hover:border-slate-300 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#0A3857] text-white">
                      {stage.step}
                    </span>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      {stage.name}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#0A3857]">
                    {stage.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HIRING CTA BANNER */}
      <section className="bg-white py-12 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0A3857]">
            Have a role that keeps you up at night?
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Tell us about the role, the team and what you need – we will come back with an honest plan.
          </p>
          <div>
            <button
              onClick={scrollToForm}
              className="btn-primary text-sm font-semibold"
            >
              Share Your Requirement Below
            </button>
          </div>
        </div>
      </section>

      {/* 6. HIRING REQUIREMENT FORM */}
      <section id="hiring-form" className="bg-[#F8FAFC] py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="bg-white border border-slate-200 rounded-xl p-8 sm:p-10 shadow-2xs">
            <div className="border-b border-slate-200 pb-6 mb-8 space-y-2">
              <h2 className="text-2xl font-bold text-[#0A3857]">
                Hiring Requirement Form
              </h2>
              <p className="text-sm text-slate-600">
                Please provide your contact information and role specifications. We usually reply within one working day.
              </p>
            </div>

            {status === 'success' ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-14 h-14 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#0A3857]">
                  Thank you — your requirement has been noted
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  A senior recruitment consultant from Varnith Technologies will review your details and reach out to schedule an initial briefing.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn-secondary text-xs font-semibold"
                  >
                    Submit another requirement
                  </button>
                </div>
              </div>
            ) : (
              <form noValidate onSubmit={handleSubmit} className="space-y-6">

                {status === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-md flex items-start gap-3 text-red-700 text-sm">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <span>{errorMessage || 'Please complete the required fields and enter a valid work email address.'}</span>
                  </div>
                )}

                {/* Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Your name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md focus:border-[#0A3857] focus:ring-1 focus:ring-[#0A3857] outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Company <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Acuvic Labs / Tech Corp"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md focus:border-[#0A3857] focus:ring-1 focus:ring-[#0A3857] outline-none"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Work email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ramesh@company.com"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md focus:border-[#0A3857] focus:ring-1 focus:ring-[#0A3857] outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md focus:border-[#0A3857] focus:ring-1 focus:ring-[#0A3857] outline-none"
                    />
                  </div>
                </div>

                {/* Role Title & Number of positions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Role title <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.roleTitle}
                      onChange={(e) => setFormData({ ...formData, roleTitle: e.target.value })}
                      placeholder="e.g. Senior Backend Engineer"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md focus:border-[#0A3857] focus:ring-1 focus:ring-[#0A3857] outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Number of positions
                    </label>
                    <input
                      type="text"
                      value={formData.positions}
                      onChange={(e) => setFormData({ ...formData, positions: e.target.value })}
                      placeholder="1, 2-5, 10+"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md focus:border-[#0A3857] focus:ring-1 focus:ring-[#0A3857] outline-none"
                    />
                  </div>
                </div>

                {/* Location & Work Mode & Experience */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Location(s)
                    </label>
                    <input
                      type="text"
                      value={formData.locations}
                      onChange={(e) => setFormData({ ...formData, locations: e.target.value })}
                      placeholder="Hyderabad, Bengaluru, etc."
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md focus:border-[#0A3857] focus:ring-1 focus:ring-[#0A3857] outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Work mode
                    </label>
                    <select
                      value={formData.workMode}
                      onChange={(e) => setFormData({ ...formData, workMode: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md focus:border-[#0A3857] focus:ring-1 focus:ring-[#0A3857] outline-none"
                    >
                      <option value="on-site">On-site</option>
                      <option value="hybrid">Hybrid</option>
                      <option value="remote">Remote</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Experience range
                    </label>
                    <input
                      type="text"
                      value={formData.experienceRange}
                      onChange={(e) => setFormData({ ...formData, experienceRange: e.target.value })}
                      placeholder="e.g. 4 - 8 Years"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md focus:border-[#0A3857] focus:ring-1 focus:ring-[#0A3857] outline-none"
                    />
                  </div>
                </div>

                {/* Services Needed (Checkboxes) */}
                <div className="space-y-2 pt-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                    Services needed
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {siteData.servicesHR.map((srv) => (
                      <label
                        key={srv.id}
                        className={`flex items-center gap-2.5 p-2.5 border rounded-md cursor-pointer transition-colors text-xs font-medium ${formData.services.includes(srv.id)
                            ? 'bg-slate-50 border-[#0A3857] text-[#0A3857]'
                            : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                          }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.services.includes(srv.id)}
                          onChange={() => handleCheckboxChange(srv.id)}
                          className="w-4 h-4 text-[#0A3857] rounded border-slate-300 focus:ring-[#0A3857]"
                        />
                        <span>{srv.title}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Anything else we should know */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Anything else we should know
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Briefly describe the team, required tech stack nuances, or hiring timeline..."
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md focus:border-[#0A3857] focus:ring-1 focus:ring-[#0A3857] outline-none"
                  ></textarea>
                </div>

                {/* Consent & Privacy */}
                <div className="space-y-3 pt-2">
                  <p className="text-xs text-slate-500">
                    We use these details only to reply to you about this request – nothing else. See our <a href="/privacy" className="underline text-slate-700">privacy policy</a>.
                  </p>
                  <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-700 font-medium">
                    <input
                      type="checkbox"
                      required
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="w-4 h-4 text-[#0A3857] rounded border-slate-300 mt-0.5 focus:ring-[#0A3857]"
                    />
                    <span>I agree that Varnith Technologies may use these details to reply to this hiring request.</span>
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary w-full sm:w-auto px-8 py-3 text-sm font-semibold justify-center gap-2"
                  >
                    {status === 'loading' ? (
                      <span>Sending requirement...</span>
                    ) : (
                      <>
                        <span>Share your requirement</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>
      </section>

      {/* Inquiry Modal */}
      <InquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialService={selectedService}
        serviceType="hr"
      />
    </div>
  );
}
