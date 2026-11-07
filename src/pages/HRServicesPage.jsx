import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { siteData } from '../data/siteData';
import { CheckCircle2, Sparkles, Send, ArrowUpRight } from 'lucide-react';
import CTASection from '../components/CTASection';

export default function HRServicesPage() {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    serviceInterest: 'Talent Acquisition',
    headcount: '1-5 Hires',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      const stored = JSON.parse(localStorage.getItem('varnith_hr_inquiries') || '[]');
      stored.push({ ...formData, date: new Date().toISOString() });
      localStorage.setItem('varnith_hr_inquiries', JSON.stringify(stored));
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="pt-28 pb-16 bg-[#EAF0E8]">
      {/* Page Hero */}
      <section className="px-6 sm:px-12 lg:px-16 pb-12">
        <div className="max-w-[1360px] mx-auto space-y-6">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#737D73]">
            <Link to="/and" className="hover:text-[#183629]">Home</Link>
            <span>/</span>
            <span className="text-[#183629]">HR Services</span>
          </div>

          <div className="space-y-4 max-w-4xl">
            <span className="inline-block px-3 py-1 rounded-full bg-[#183629]/10 text-[#183629] text-xs font-bold tracking-widest uppercase">
              STRATEGIC TALENT SOLUTIONS
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#183629] font-normal tracking-tight leading-[1.06]">
              <span className="block overflow-hidden py-0.5">
                <motion.span
                  initial={{ y: '100%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block"
                >
                  People Are the Foundation of
                </motion.span>
              </span>
              <span className="block overflow-hidden py-0.5 text-[#DFAE22]">
                <motion.span
                  initial={{ y: '100%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className="italic font-light inline-block"
                >
                  Every Great Business.
                </motion.span>
              </span>
            </h1>
            <p className="text-base sm:text-xl text-[#202923]/80 font-light leading-relaxed">
              We provide tailored corporate recruitment, executive headhunting, and scalable RPO services to technology firms, enterprise ERP clients, and growing organizations across India.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Enterprise Synergies: Wispr Flow Glassmorphism Cards */}
      <section className="px-6 sm:px-12 lg:px-16 py-8">
        <div className="max-w-[1360px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Synergy Card 1 */}
          <div className="group relative bg-white rounded-[32px] p-7 sm:p-8 border border-stone-200/90 hover:border-[#183629]/30 shadow-[0_10px_30px_-10px_rgba(24,54,41,0.06)] hover:shadow-[0_25px_50px_-15px_rgba(24,54,41,0.14)] transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[400px] hover:-translate-y-1.5">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />
            <div className="relative z-10 space-y-4">
              <span className="font-mono text-xs font-bold tracking-widest text-[#183629] uppercase">
                VG • RECRUITMENT 01
              </span>
              <h3 className="font-sans text-2xl sm:text-3xl font-light text-[#183629] tracking-tight leading-[1.15] pt-1">
                Technical Competence Guarantee
              </h3>
              <p className="text-xs sm:text-sm text-[#202923]/75 font-light leading-relaxed">
                Unlike traditional headhunters, candidates are evaluated on live servers, Docker clusters, and SAP sandboxes before recommendation.
              </p>
              <div className="pt-2">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/85 hover:bg-white backdrop-blur-md border border-stone-200/70 shadow-[0_4px_16px_rgba(0,0,0,0.04)] group-hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)] transition-all duration-300">
                  <span className="text-xs font-medium text-[#183629] tracking-tight">Pre-Screened in Labs</span>
                  <span className="w-6 h-6 rounded-full bg-white border border-stone-200/80 flex items-center justify-center text-[#183629] shadow-xs group-hover:bg-[#183629] group-hover:text-white transition-all duration-300">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
            <div className="relative mt-8 pt-4 z-10">
              <div className="absolute -bottom-8 -right-8 w-44 h-32 rounded-tl-[80px] bg-gradient-to-tl from-[#B2E869]/30 to-transparent backdrop-blur-md border-t border-l border-white/70 pointer-events-none group-hover:scale-105 transition-transform duration-700" />
              <div className="pt-3 border-t border-stone-200/60 flex items-center justify-between text-xs">
                <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-[#183629]">
                  01 / LIVE LAB AUDIT
                </span>
                <span className="font-bold text-[11px] text-[#183629]">
                  100% Tested
                </span>
              </div>
            </div>
          </div>

          {/* Synergy Card 2 */}
          <div className="group relative bg-white rounded-[32px] p-7 sm:p-8 border border-stone-200/90 hover:border-[#183629]/30 shadow-[0_10px_30px_-10px_rgba(24,54,41,0.06)] hover:shadow-[0_25px_50px_-15px_rgba(24,54,41,0.14)] transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[400px] hover:-translate-y-1.5">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />
            <div className="relative z-10 space-y-4">
              <span className="font-mono text-xs font-bold tracking-widest text-[#183629] uppercase">
                VG • RECRUITMENT 02
              </span>
              <h3 className="font-sans text-2xl sm:text-3xl font-light text-[#183629] tracking-tight leading-[1.15] pt-1">
                Accelerated Turnaround Time
              </h3>
              <p className="text-xs sm:text-sm text-[#202923]/75 font-light leading-relaxed">
                Cut your recruiting timeline from 60 days to under 14 days with our active talent pipelines in Hyderabad and South India.
              </p>
              <div className="pt-2">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/85 hover:bg-white backdrop-blur-md border border-stone-200/70 shadow-[0_4px_16px_rgba(0,0,0,0.04)] group-hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)] transition-all duration-300">
                  <span className="text-xs font-medium text-[#183629] tracking-tight">Speed to Hire</span>
                  <span className="w-6 h-6 rounded-full bg-white border border-stone-200/80 flex items-center justify-center text-[#183629] shadow-xs group-hover:bg-[#183629] group-hover:text-white transition-all duration-300">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
            <div className="relative mt-8 pt-4 z-10">
              <div className="absolute -bottom-8 -left-8 w-44 h-32 rounded-tr-[70px] bg-gradient-to-tr from-[#38C8B5]/25 to-transparent backdrop-blur-md border-t border-r border-white/60 pointer-events-none group-hover:scale-105 transition-transform duration-700" />
              <div className="pt-3 border-t border-stone-200/60 flex items-center justify-between text-xs">
                <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-[#183629]">
                  02 / PIPELINE HIGHWAY
                </span>
                <span className="font-bold text-[11px] text-[#183629]">
                  &lt; 14 Days
                </span>
              </div>
            </div>
          </div>

          {/* Synergy Card 3 */}
          <div className="group relative bg-white rounded-[32px] p-7 sm:p-8 border border-stone-200/90 hover:border-[#183629]/30 shadow-[0_10px_30px_-10px_rgba(24,54,41,0.06)] hover:shadow-[0_25px_50px_-15px_rgba(24,54,41,0.14)] transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[400px] hover:-translate-y-1.5">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />
            <div className="relative z-10 space-y-4">
              <span className="font-mono text-xs font-bold tracking-widest text-[#183629] uppercase">
                VG • RECRUITMENT 03
              </span>
              <h3 className="font-sans text-2xl sm:text-3xl font-light text-[#183629] tracking-tight leading-[1.15] pt-1">
                Culture & Technical Alignment
              </h3>
              <p className="text-xs sm:text-sm text-[#202923]/75 font-light leading-relaxed">
                Every profile is mapped for architectural readiness and behavioral alignment to maximize long-term retention and minimize attrition.
              </p>
              <div className="pt-2">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/85 hover:bg-white backdrop-blur-md border border-stone-200/70 shadow-[0_4px_16px_rgba(0,0,0,0.04)] group-hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)] transition-all duration-300">
                  <span className="text-xs font-medium text-[#183629] tracking-tight">Retention Advantage</span>
                  <span className="w-6 h-6 rounded-full bg-white border border-stone-200/80 flex items-center justify-center text-[#183629] shadow-xs group-hover:bg-[#183629] group-hover:text-white transition-all duration-300">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
            <div className="relative mt-8 pt-4 z-10">
              <div className="absolute -bottom-8 -right-8 w-44 h-32 rounded-tl-[80px] bg-gradient-to-tl from-[#B2E869]/30 to-transparent backdrop-blur-md border-t border-l border-white/70 pointer-events-none group-hover:scale-110 transition-transform duration-700" />
              <div className="pt-3 border-t border-stone-200/60 flex items-center justify-between text-xs">
                <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-[#183629]">
                  03 / RETENTION RATE
                </span>
                <span className="font-bold text-[11px] text-[#183629]">
                  94% Stability
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* In-Depth 5 Services Breakdown */}
      <section className="px-6 sm:px-12 lg:px-16 py-12">
        <div className="max-w-[1360px] mx-auto space-y-12">
          <div className="border-b border-stone-200 pb-6">
            <span className="text-xs uppercase font-bold tracking-widest text-[#737D73]">
              CORE RECRUITMENT OFFERINGS
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#183629] font-normal mt-2">
              Our Specialized Talent Practices
            </h2>
          </div>

          <div className="space-y-8">
            {siteData.hrServices.map((service) => (
              <div
                key={service.id}
                className="group relative bg-white rounded-[32px] p-8 sm:p-10 border border-stone-200/90 hover:border-[#183629]/30 shadow-[0_10px_30px_-10px_rgba(24,54,41,0.06)] hover:shadow-[0_25px_50px_-15px_rgba(24,54,41,0.14)] transition-all duration-500 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Background Subtle Pinstripe Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

                {/* Left Visual with Glassmorphism Ribbons */}
                <div className="lg:col-span-4 relative rounded-2xl overflow-hidden aspect-[16/10] shadow-sm z-10">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover filter brightness-[0.95] group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Cyan / Lime Glass Curve */}
                  <div className="absolute -bottom-6 -right-6 w-32 h-24 rounded-tl-[50px] bg-gradient-to-tl from-[#B2E869]/30 to-transparent backdrop-blur-md border-t border-l border-white/70 pointer-events-none" />
                  <div className="absolute top-3 left-3 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-[#183629] font-mono uppercase tracking-wider shadow-xs">
                    PRACTICE 0{service.number}
                  </div>
                </div>

                {/* Right Details */}
                <div className="lg:col-span-8 space-y-4 relative z-10">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[#183629] uppercase tracking-widest px-3 py-1 rounded-full bg-[#183629]/5 border border-[#183629]/10">
                      VG • TALENT 0{service.number}
                    </span>
                  </div>

                  <h3 className="font-sans text-3xl sm:text-4xl font-light text-[#183629] tracking-tight leading-[1.15]">
                    {service.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#202923]/75 font-light leading-relaxed max-w-2xl">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="p-3.5 rounded-xl bg-white/80 border border-stone-200/80 shadow-xs flex items-center gap-2.5 text-xs text-[#183629] font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#DFAE22] shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Consultation Inquiry Form */}
      <section className="px-6 sm:px-12 lg:px-16 py-12">
        <div className="max-w-[1360px] mx-auto p-8 sm:p-14 rounded-[36px] bg-[#183629] text-white shadow-2xl">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="text-center space-y-3">
              <span className="text-xs uppercase font-bold tracking-widest text-[#F2C94C]">
                ENTERPRISE PARTNERSHIP
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal">
                Schedule a Corporate Talent Consultation
              </h2>
              <p className="text-xs sm:text-sm text-white/80 font-light max-w-xl mx-auto">
                Discuss your engineering headcount requirements or RPO model with our senior talent acquisition directors.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-white/10 text-center space-y-3">
                <Sparkles className="w-10 h-10 text-[#F2C94C] mx-auto" />
                <h3 className="font-serif text-2xl font-normal">Inquiry Received!</h3>
                <p className="text-xs text-white/80">
                  Our HR consulting leadership will contact you at {formData.email} within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 pt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Company Name *"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-xs focus:outline-none focus:border-[#F2C94C]"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Contact Person Full Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-xs focus:outline-none focus:border-[#F2C94C]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    required
                    placeholder="Corporate Email Address *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-xs focus:outline-none focus:border-[#F2C94C]"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-xs focus:outline-none focus:border-[#F2C94C]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <select
                    value={formData.serviceInterest}
                    onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white text-xs focus:outline-none focus:border-[#F2C94C]"
                  >
                    <option value="Talent Acquisition" className="text-black">Talent Acquisition</option>
                    <option value="RPO Services" className="text-black">RPO Services</option>
                    <option value="Executive Hiring" className="text-black">Executive Hiring</option>
                    <option value="DE&I Hiring" className="text-black">DE&I Hiring</option>
                    <option value="Talent Intelligence" className="text-black">Talent Intelligence</option>
                  </select>

                  <select
                    value={formData.headcount}
                    onChange={(e) => setFormData({ ...formData, headcount: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white text-xs focus:outline-none focus:border-[#F2C94C]"
                  >
                    <option value="1-5 Hires" className="text-black">Projected Headcount: 1–5 Hires</option>
                    <option value="6-20 Hires" className="text-black">Projected Headcount: 6–20 Hires</option>
                    <option value="20+ Hires" className="text-black">Projected Headcount: 20+ Hires (RPO Scale)</option>
                  </select>
                </div>

                <textarea
                  rows={3}
                  placeholder="Share details regarding roles, technical stack, or timeline..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-xs focus:outline-none focus:border-[#F2C94C] resize-none"
                />

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 rounded-full bg-[#F2C94C] text-[#183629] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#DFAE22] hover:text-[#102A21] transition-all disabled:opacity-50 shadow-md"
                >
                  <span>{submitting ? 'Submitting...' : 'Submit Corporate Brief'}</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
