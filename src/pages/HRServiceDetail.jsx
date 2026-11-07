import React, { useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { siteData } from '../data/siteData';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Send,
  ShieldCheck,
  ChevronDown,
  Phone
} from 'lucide-react';
import CTASection from '../components/CTASection';

export default function HRServiceDetail() {
  const params = useParams();
  const location = useLocation();

  // Extract slug from params or last segment of pathname
  const pathParts = location.pathname.split('/').filter(Boolean);
  const pathSlug = pathParts[pathParts.length - 1];
  const activeSlug = params.slug || (pathSlug !== 'hr-services' ? pathSlug : null);

  // Find matching service by slug or aliases or id, fallback to first service
  const service = siteData.hrServices.find(
    s => s.slug === activeSlug || s.id === activeSlug || (s.aliases && s.aliases.includes(activeSlug))
  ) || siteData.hrServices[0];

  const [openFaq, setOpenFaq] = useState(0);
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    workEmail: '',
    phoneNumber: '',
    hiringTimeline: 'Immediate (within 14 days)',
    teamSize: '1-5 hires',
    requirements: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSlug, setSubmittedSlug] = useState(null);
  const isSubmitted = submittedSlug === activeSlug;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      const stored = JSON.parse(localStorage.getItem('varnith_hr_inquiries') || '[]');
      stored.push({
        serviceTitle: service.title,
        serviceSlug: service.slug,
        ...formData,
        date: new Date().toISOString()
      });
      localStorage.setItem('varnith_hr_inquiries', JSON.stringify(stored));
      setIsSubmitting(false);
      setSubmittedSlug(activeSlug);
    }, 600);
  };

  const otherServices = siteData.hrServices.filter(s => s.id !== service.id);

  return (
    <div className="pt-28 pb-16 bg-[#EAF0E8]">
      {/* Top Breadcrumb Navigation */}
      <section className="px-6 sm:px-12 lg:px-16 pb-8">
        <div className="max-w-[1360px] mx-auto flex items-center justify-between">
          <Link
            to="/and/hr-services"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#183629] hover:text-[#DFAE22] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to All HR Services</span>
          </Link>
          <span className="text-xs font-semibold text-[#737D73] uppercase tracking-wider">
            Practice {service.number} of 06
          </span>
        </div>
      </section>

      {/* Hero Section */}
      <section className="px-6 sm:px-12 lg:px-16 pb-12">
        <div className="max-w-[1360px] mx-auto relative rounded-[36px] overflow-hidden shadow-2xl min-h-[440px] sm:min-h-[500px] flex flex-col justify-end p-8 sm:p-14 text-white bg-gradient-to-br from-[#102A21] via-[#183629] to-[#0B1E17] border border-white/10">
          {/* Subtle Ambient Glow & Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.06] pointer-events-none" />
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#BEE644]/10 blur-3xl pointer-events-none" />

          {/* Background Image with Cinematic Gradient Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover filter brightness-[0.4] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#102A21] via-[#102A21]/75 to-transparent" />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl space-y-5">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3.5 py-1 rounded-full bg-[#F2C94C] text-[#183629] text-xs font-bold uppercase tracking-wider shadow-sm">
                  {service.badge}
                </span>
                <span className="px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider border border-white/20">
                  Practice 0{service.number}
                </span>
                <span className="px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-[#BEE644] text-xs font-mono font-medium">
                  Verified HR Practice
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] tracking-tight">
                <span className="block overflow-hidden py-0.5">
                  <motion.span
                    initial={{ y: '100%' }}
                    animate={{ y: '0%' }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block"
                  >
                    {service.fullTitle}
                  </motion.span>
                </span>
              </h1>

              <p className="text-base sm:text-lg text-white/90 font-light leading-relaxed max-w-2xl">
                {service.description}
              </p>

              {/* Quick Consultation CTA */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#consultation-form"
                  className="px-7 py-3.5 rounded-full bg-[#F2C94C] text-[#183629] font-bold text-xs uppercase tracking-wider hover:bg-[#DFAE22] hover:text-[#102A21] transition-all shadow-lg shadow-black/30 inline-flex items-center gap-2 group"
                >
                  <span>Request Corporate Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href={`tel:${siteData.brand.rawPhone}`}
                  className="px-6 py-3.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold text-xs uppercase tracking-wider hover:bg-white/20 transition-all inline-flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#F2C94C]" />
                  <span>Direct Line: {siteData.brand.phone}</span>
                </a>
              </div>
            </div>

            {/* Quick Metrics Badge Card */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 sm:p-6 space-y-4 shrink-0 min-w-[280px]">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#F2C94C] block">
                Practice Performance SLA
              </span>
              <div className="grid grid-cols-1 gap-3">
                {service.stats.map((st, i) => (
                  <div key={i} className="flex items-center justify-between border-b border-white/10 pb-2.5 last:border-0 last:pb-0">
                    <span className="text-xs text-white/75">{st.label}</span>
                    <span className="font-mono text-sm font-bold text-white text-right">{st.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Service Introduction & Key Metrics */}
      <section className="px-6 sm:px-12 lg:px-16 py-8">
        <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block px-3 py-1 rounded-full bg-[#183629]/10 text-[#183629] text-xs font-bold tracking-widest uppercase">
              STRATEGIC TALENT DELIVERY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#183629] font-normal leading-tight">
              A Higher Standard of Talent Acquisition and HR Governance
            </h2>
            <p className="text-base text-[#202923]/80 leading-relaxed font-light">
              At Varnith Global, we believe great organizations are built by design, not chance. Our {service.title} practice bridges deep corporate recruitment expertise with technical laboratory verification to eliminate the guesswork of modern enterprise staffing.
            </p>
            <p className="text-sm sm:text-base text-[#202923]/80 leading-relaxed font-light">
              Unlike transactional staffing agencies that circulate identical resumes, we operate as your embedded talent partner. We understand the specific architectures, cultural expectations, and delivery milestones of high-growth technology and enterprise ERP companies.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-xs flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#DFAE22] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase font-bold text-[#183629]">Production-Tested</h4>
                  <p className="text-xs text-[#737D73] mt-0.5">Vetted for real code and architecture delivery.</p>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-xs flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#DFAE22] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase font-bold text-[#183629]">Guaranteed SLA</h4>
                  <p className="text-xs text-[#737D73] mt-0.5">Comprehensive replacement & milestone warranties.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative rounded-[32px] overflow-hidden bg-white p-4 shadow-xl border border-stone-200/80">
            <div className="relative rounded-[24px] overflow-hidden aspect-[4/3]">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102A21]/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/90 backdrop-blur-md shadow-md">
                <span className="text-[10px] font-bold tracking-wider uppercase text-[#737D73] block">
                  Enterprise Case Study
                </span>
                <p className="text-xs font-semibold text-[#183629] mt-0.5">
                  Over 450+ verified engineering & HR placements successfully closed across Hyderabad and pan-India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What the Service Includes (6 Scope Cards) */}
      <section className="px-6 sm:px-12 lg:px-16 py-12">
        <div className="max-w-[1360px] mx-auto space-y-10">
          <div className="border-b border-stone-200 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#737D73]">
                COMPREHENSIVE PRACTICE SCOPE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#183629] font-normal mt-1">
                What This Service Includes
              </h2>
            </div>
            <span className="text-xs text-[#737D73] max-w-sm">
              Modular components tailored to your organizational scale, tech stack, and hiring timelines.
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.whatItIncludes.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="p-7 rounded-[28px] bg-white/65 backdrop-blur-2xl border border-white/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.95),0_12px_36px_-6px_rgba(24,54,41,0.08)] hover:bg-white/80 hover:border-white hover:shadow-[inset_0_1px_2px_rgba(255,255,255,1),0_20px_45px_-10px_rgba(24,54,41,0.14)] transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-white/60 mb-2">
                    <div className="w-10 h-10 rounded-2xl bg-white/80 backdrop-blur-md border border-white/90 flex items-center justify-center text-[#183629] shadow-2xs">
                      <span className="font-mono text-sm font-bold">0{idx + 1}</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-md border border-white/90 flex items-center justify-center text-[#183629] shadow-xs">
                      <ArrowUpRight className="w-4 h-4 stroke-[2]" />
                    </div>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#183629] font-normal">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#202923]/75 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-white/60 flex items-center text-[11px] font-semibold text-[#183629]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#DFAE22] mr-1.5" />
                  <span>Standard Included Deliverable</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How Varnith Global Delivers: 4-Step Engagement Model */}
      <section className="px-6 sm:px-12 lg:px-16 py-12">
        <div className="max-w-[1360px] mx-auto p-8 sm:p-14 rounded-[36px] bg-[#102A21] text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#BEE644]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-12">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs uppercase font-bold tracking-widest text-[#F2C94C]">
                ENGAGEMENT METHODOLOGY
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal leading-tight">
                How We Deliver {service.title}
              </h2>
              <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed">
                A disciplined, multi-stage delivery framework that ensures precision, transparency, and high retention.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.deliveryModel.map((dm, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <span className="font-mono text-2xl font-bold text-[#F2C94C] block">
                      {dm.step}
                    </span>
                    <h4 className="font-serif text-xl font-normal text-white">
                      {dm.title}
                    </h4>
                    <p className="text-xs text-white/70 font-light leading-relaxed">
                      {dm.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-white/10 text-[10px] font-mono uppercase tracking-wider text-white/50">
                    Phase {dm.step} Delivery
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="px-6 sm:px-12 lg:px-16 py-12">
        <div className="max-w-[1360px] mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-[#737D73]">
              MEASURABLE ROI
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#183629] font-normal">
              Direct Business Benefits
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.businessBenefits.map((bb, idx) => (
              <div
                key={idx}
                className="p-8 rounded-[28px] bg-white/65 backdrop-blur-2xl border border-white/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.95),0_12px_36px_-6px_rgba(24,54,41,0.08)] hover:bg-white/80 hover:border-white transition-all text-center space-y-3"
              >
                <span className="font-mono text-4xl sm:text-5xl font-bold text-[#183629] block">
                  {bb.metric}
                </span>
                <h4 className="font-serif text-2xl text-[#183629] font-normal">
                  {bb.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#737D73] font-light leading-relaxed">
                  {bb.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Relevant FAQs Accordion */}
      <section className="px-6 sm:px-12 lg:px-16 py-12">
        <div className="max-w-[1000px] mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-[#737D73]">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#183629] font-normal">
              Answers About {service.title}
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white/70 backdrop-blur-xl border border-white/80 overflow-hidden shadow-xs transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-serif text-lg sm:text-xl text-[#183629] font-medium">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#183629] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#DFAE22]' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#202923]/75 font-light leading-relaxed border-t border-stone-100"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Consultation Inquiry Form */}
      <section id="consultation-form" className="px-6 sm:px-12 lg:px-16 py-12 scroll-mt-28">
        <div className="max-w-[1360px] mx-auto p-8 sm:p-14 rounded-[36px] bg-[#183629] text-white shadow-2xl">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <span className="text-xs uppercase font-bold tracking-widest text-[#F2C94C]">
                SCHEDULE A CONSULTATION
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal leading-tight">
                Partner with Varnith Global on {service.title}
              </h2>
              <p className="text-xs sm:text-sm text-white/80 font-light max-w-xl mx-auto">
                Share your requirements. Our specialized HR advisory team in Madhapur will prepare a customized talent assessment within 24 business hours.
              </p>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center space-y-4"
              >
                <div className="w-12 h-12 rounded-full bg-[#F2C94C] text-[#183629] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-normal">Inquiry Received</h3>
                <p className="text-xs sm:text-sm text-white/80 max-w-md mx-auto font-light">
                  Thank you! Our senior HR partner has received your request regarding <strong>{service.title}</strong> and will reach out with a candidate strategy plan.
                </p>
                <button
                  onClick={() => setSubmittedSlug(null)}
                  className="px-6 py-2.5 rounded-full bg-[#F2C94C] text-[#183629] text-xs font-bold uppercase tracking-wider"
                >
                  Submit Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-white/80 block mb-1.5">
                      Company / Organization Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Acme Technologies"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-xs sm:text-sm focus:outline-none focus:border-[#F2C94C] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-white/80 block mb-1.5">
                      Your Name & Designation *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe, VP Engineering"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-xs sm:text-sm focus:outline-none focus:border-[#F2C94C] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-white/80 block mb-1.5">
                      Work Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@company.com"
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-xs sm:text-sm focus:outline-none focus:border-[#F2C94C] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-white/80 block mb-1.5">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-xs sm:text-sm focus:outline-none focus:border-[#F2C94C] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-white/80 block mb-1.5">
                      Hiring Timeline
                    </label>
                    <select
                      value={formData.hiringTimeline}
                      onChange={(e) => setFormData({ ...formData, hiringTimeline: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white text-xs sm:text-sm focus:outline-none focus:border-[#F2C94C] transition-colors [&>option]:text-[#183629]"
                    >
                      <option value="Immediate (within 14 days)">Immediate (within 14 days)</option>
                      <option value="1 Month">1 Month</option>
                      <option value="1-3 Months">1-3 Months</option>
                      <option value="Ongoing Strategic Retainer">Ongoing Strategic Retainer</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-white/80 block mb-1.5">
                      Target Headcount
                    </label>
                    <select
                      value={formData.teamSize}
                      onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white text-xs sm:text-sm focus:outline-none focus:border-[#F2C94C] transition-colors [&>option]:text-[#183629]"
                    >
                      <option value="1-5 hires">1 - 5 hires</option>
                      <option value="6-20 hires">6 - 20 hires</option>
                      <option value="20-50+ enterprise scale">20 - 50+ enterprise scale</option>
                      <option value="Executive / Leadership Search">Executive / Leadership Search</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-white/80 block mb-1.5">
                    Specific Roles or Requirements
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe the roles, technical stacks (DevOps, SAP, Python, Data, etc.) or challenges..."
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-xs sm:text-sm focus:outline-none focus:border-[#F2C94C] transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3.5 rounded-full bg-[#F2C94C] text-[#183629] font-bold text-xs uppercase tracking-wider hover:bg-[#DFAE22] hover:text-[#102A21] transition-all shadow-md inline-flex items-center gap-2 group disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'Submitting Brief...' : 'Submit Partnership Brief'}</span>
                    <Send className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-[11px] text-white/50 mt-3">
                    Strict non-disclosure observed. We never share enterprise hiring intelligence with third parties.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Explore Other Verified HR Services */}
      <section className="px-6 sm:px-12 lg:px-16 py-12">
        <div className="max-w-[1360px] mx-auto space-y-8">
          <div className="flex items-center justify-between pb-4 border-b border-stone-200">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#737D73]">
                CROSS-PRACTICE SYNERGY
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#183629] font-normal mt-0.5">
                Explore Other HR Solutions
              </h3>
            </div>
            <Link
              to="/and/hr-services"
              className="text-xs font-bold uppercase tracking-wider text-[#183629] hover:text-[#DFAE22] inline-flex items-center gap-1.5"
            >
              <span>View All 6 Practices</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherServices.slice(0, 3).map((os) => (
              <Link
                key={os.id}
                to={`/and/hr-services/${os.slug}`}
                className="group p-6 rounded-2xl bg-white border border-stone-200/80 shadow-xs hover:shadow-md hover:border-[#183629]/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#DFAE22]">
                      Practice 0{os.number}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-stone-100 flex items-center justify-center text-[#183629] group-hover:bg-[#F2C94C] transition-colors">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <h4 className="font-serif text-lg font-semibold text-[#183629] group-hover:text-[#102A21] mb-1">
                    {os.title}
                  </h4>
                  <p className="text-xs text-[#737D73] line-clamp-2">
                    {os.shortDescription}
                  </p>
                </div>
                <div className="pt-3 mt-4 border-t border-stone-100 flex items-center justify-between text-[11px] font-bold text-[#183629]">
                  <span>Explore Practice</span>
                  <span className="text-[#DFAE22] group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Global Bottom CTA */}
      <CTASection />
    </div>
  );
}
