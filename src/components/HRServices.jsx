import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteData } from '../data/siteData';
import { ArrowUpRight, CheckCircle2, Briefcase, X, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function HRServices() {
  const [selectedService, setSelectedService] = useState(null);
  const [inquirySent, setInquirySent] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hr-service-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
        y: 35,
        opacity: 0,
        duration: 0.85,
        stagger: 0.1,
        ease: 'power3.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    const stored = JSON.parse(localStorage.getItem('varnith_hr_inquiries') || '[]');
    stored.push({
      service: selectedService?.title,
      company: companyName,
      email: companyEmail,
      date: new Date().toISOString()
    });
    localStorage.setItem('varnith_hr_inquiries', JSON.stringify(stored));
    setInquirySent(true);
  };

  return (
    <section
      id="hr-services"
      ref={sectionRef}
      className="py-20 sm:py-28 px-6 sm:px-12 lg:px-16 bg-[#EAF0E8]"
    >
      <div className="max-w-[1360px] mx-auto space-y-14">
        {/* Section Heading & Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-[#173B2C]/10 pb-8">
          <div className="lg:col-span-7 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#183629]/10 text-[#183629] text-xs font-bold tracking-widest uppercase">
              <span>STRATEGIC TALENT SOLUTIONS</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#183629] font-normal tracking-tight leading-[1.08]">
              People Are the Foundation of{' '}
              <span className="italic font-light text-[#DFAE22]">Every Great Business</span>
            </h2>
          </div>
          <div className="lg:col-span-5 space-y-4">
            <p className="text-base text-[#202923]/80 font-light leading-relaxed">
              Strategic talent solutions that help organizations attract, develop and retain exceptional people across technology and leadership sectors.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs font-semibold text-[#183629]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#DFAE22]" />
                  Pre-Screened in Labs
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#DFAE22]" />
                  Pan-India Sourcing
                </span>
              </div>
              <Link
                to="/and/hr-services"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#183629] hover:text-[#DFAE22]"
              >
                <span>All Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Featured Editorial Layout: 1 Large Feature Image + Grid of Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Featured Large Hero Card */}
          <div className="lg:col-span-5 relative rounded-[32px] overflow-hidden bg-[#102A21] shadow-xl group flex flex-col justify-between p-8 sm:p-10 text-white min-h-[440px] lg:min-h-full">
            <div className="absolute inset-0 z-0">
              <img
                src="/assets/hr_talent.jpg"
                alt="Corporate Talent Acquisition"
                className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 filter brightness-[0.62]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102A21] via-[#102A21]/60 to-transparent" />
            </div>

            <div className="relative z-10 flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-[11px] font-bold tracking-wider uppercase border border-white/20">
                ENTERPRISE HIRING
              </span>
              <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-[#F2C94C]">
                <Briefcase className="w-5 h-5" />
              </div>
            </div>

            <div className="relative z-10 space-y-4 pt-20">
              <span className="text-xs uppercase tracking-widest text-[#F2C94C] font-semibold">
                Integrated HR & RPO Ecosystem
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl font-normal leading-snug">
                Accelerate hiring with candidates evaluated on actual code and production readiness.
              </h3>
              <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                We combine recruitment domain mastery with direct IT laboratory evaluation, eliminating the friction of unvetted resume submissions.
              </p>

              {/* Yellow CTA Button */}
              <div className="pt-2">
                <button
                  onClick={() => setSelectedService(siteData.hrServices[0])}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F2C94C] text-[#183629] text-xs font-bold uppercase tracking-wider hover:bg-[#DFAE22] hover:text-[#102A21] transition-all duration-300 shadow-md group"
                >
                  <span>Request Talent Brief</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Grid of 5 Services */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {siteData.hrServices.map((service) => (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="hr-service-card group p-6 sm:p-7 rounded-[28px] bg-white border border-stone-200/70 flex flex-col justify-between shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-2xl text-[#DFAE22] font-light">
                      {service.number}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-[#183629] group-hover:bg-[#F2C94C] transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <h4 className="font-serif text-xl sm:text-2xl text-[#183629] font-normal mb-2 group-hover:text-[#102A21]">
                    {service.title}
                  </h4>

                  <p className="text-xs text-[#202923]/80 leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between text-[11px] font-semibold text-[#183629]">
                  <span>Explore Capabilities</span>
                  <span className="text-[#DFAE22] group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* HR Service Inquiry Drawer / Modal */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => {
                  setSelectedService(null);
                  setInquirySent(false);
                }}
                className="fixed inset-0 bg-black/70 backdrop-blur-sm"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-2xl bg-[#EAF0E8] rounded-[32px] p-6 sm:p-8 shadow-2xl border border-[#173B2C]/20 z-10"
              >
                <div className="flex items-center justify-between pb-4 border-b border-[#173B2C]/10">
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-2xl text-[#DFAE22]">
                      {selectedService.number}
                    </span>
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-[#737D73]">
                        HR SERVICE DETAIL
                      </span>
                      <h3 className="font-serif text-2xl text-[#183629]">
                        {selectedService.title}
                      </h3>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedService(null);
                      setInquirySent(false);
                    }}
                    className="p-2 rounded-full hover:bg-black/5 text-[#183629]"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="py-6 space-y-4">
                  <p className="text-sm text-[#202923] leading-relaxed">
                    {selectedService.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    <h5 className="text-xs uppercase font-bold tracking-wider text-[#183629]">
                      Key Highlights & Deliverables
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedService.features.map((f, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-[#202923] p-2.5 rounded-xl bg-white border border-stone-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#183629] shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Corporate Inquiry Form with Yellow Submit Button */}
                  <div className="mt-6 p-5 rounded-2xl bg-[#183629] text-white">
                    {inquirySent ? (
                      <div className="text-center py-4">
                        <CheckCircle2 className="w-10 h-10 text-[#F2C94C] mx-auto mb-2" />
                        <h4 className="font-serif text-xl font-normal">Thank you for your interest!</h4>
                        <p className="text-xs text-white/80 mt-1">Our HR Consulting team will contact {companyEmail} promptly.</p>
                      </div>
                    ) : (
                      <form onSubmit={handleInquirySubmit} className="space-y-3">
                        <h5 className="font-serif text-lg font-normal">Schedule an HR Consultation</h5>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <input
                            type="text"
                            required
                            placeholder="Company Name *"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            className="px-3.5 py-2 rounded-xl bg-white/10 border border-white/20 text-white text-xs placeholder-white/50 focus:outline-none focus:border-[#F2C94C]"
                          />
                          <input
                            type="email"
                            required
                            placeholder="Corporate Email *"
                            value={companyEmail}
                            onChange={(e) => setCompanyEmail(e.target.value)}
                            className="px-3.5 py-2 rounded-xl bg-white/10 border border-white/20 text-white text-xs placeholder-white/50 focus:outline-none focus:border-[#F2C94C]"
                          />
                        </div>
                        <button
                          type="submit"
                          className="w-full py-2.5 rounded-full bg-[#F2C94C] text-[#183629] text-xs font-bold uppercase tracking-wider hover:bg-[#DFAE22] hover:text-[#102A21] transition-colors"
                        >
                          Submit Inquiry
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
