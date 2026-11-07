import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { siteData } from '../data/siteData';
import { ArrowUpRight, CheckCircle2, ArrowRight } from 'lucide-react';

export default function HRServices() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="hr-services"
      ref={sectionRef}
      className="py-20 sm:py-28 px-6 sm:px-12 lg:px-16 bg-[#EAF0E8] relative overflow-hidden"
    >
      {/* Background Decorative Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#BEE644]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1360px] mx-auto space-y-12 sm:space-y-16">
        {/* Section Header — Strategic HR Solutions */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-[#173B2C]/15 pb-8">
          <div className="space-y-4 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#183629]/10 text-[#183629] text-xs font-bold tracking-widest uppercase"
            >
              <span className="w-2 h-2 rounded-full bg-[#DFAE22]" />
              <span>PRIMARY PRACTICE • HR SERVICES</span>
            </motion.div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#183629] font-normal tracking-tight leading-[1.08]">
              Strategic HR Solutions for{' '}
              <span className="italic font-light text-[#DFAE22] block sm:inline">
                Growing Businesses
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#202923]/80 font-light leading-relaxed max-w-2xl">
              From finding the right talent to building stronger workplaces, we help businesses create efficient, capable and future-ready teams.
            </p>
          </div>

          <div className="space-y-4 lg:text-right shrink-0">
            <div className="flex flex-wrap items-center lg:justify-end gap-3 text-xs font-semibold text-[#183629]">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white shadow-xs border border-stone-200/80">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#DFAE22]" />
                Lab-Screened Tech Talent
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white shadow-xs border border-stone-200/80">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#DFAE22]" />
                Pan-India & Hyderabad Sourcing
              </span>
            </div>

            <div>
              <Link
                to="/and/hr-services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#183629] text-[#F2C94C] text-xs font-bold uppercase tracking-wider hover:bg-[#102A21] transition-all shadow-md group"
              >
                <span>View All 6 HR Practices</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* 6 Verified HR Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {siteData.hrServices.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="h-full"
            >
              <Link
                to={`/and/hr-services/${service.slug}`}
                className="group relative rounded-[30px] bg-white p-6 sm:p-7 border border-stone-200/90 hover:border-[#183629]/40 shadow-[0_10px_30px_-10px_rgba(24,54,41,0.06)] hover:shadow-[0_25px_50px_-15px_rgba(24,54,41,0.16)] flex flex-col justify-between h-full min-h-[440px] transition-all duration-300 overflow-hidden block focus:outline-none focus:ring-2 focus:ring-[#183629]"
              >
                {/* Subtle Grid Background on Hover */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000004_1px,transparent_1px),linear-gradient(to_bottom,#00000004_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 space-y-5">
                  {/* Card Visual Header with Aspect Ratio & Glass Pill */}
                  <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-stone-100 shadow-xs">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover filter brightness-[0.95] group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Practice Number Badge */}
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-[#183629] font-mono uppercase tracking-wider shadow-xs">
                      PRACTICE 0{service.number}
                    </div>

                    {/* Circular Arrow Badge */}
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#183629] group-hover:bg-[#F2C94C] group-hover:text-[#183629] transition-all duration-300 shadow-xs">
                      <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                    </div>

                    {/* Category Tag at Bottom of Image */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px]">
                      <span className="px-2.5 py-0.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 font-medium">
                        {service.badge}
                      </span>
                      {service.stats && service.stats[0] && (
                        <span className="font-mono font-bold text-[#F2C94C]">
                          {service.stats[0].value}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Service Title */}
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl sm:text-2xl font-normal text-[#183629] group-hover:text-[#102A21] transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#202923]/75 font-light leading-relaxed line-clamp-3">
                      {service.shortDescription || service.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer: Explore Service link + animated arrow */}
                <div className="relative z-10 pt-5 mt-5 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-xs font-bold tracking-widest text-[#183629] group-hover:text-[#DFAE22] uppercase inline-flex items-center gap-1.5 transition-colors">
                    <span>Explore Service</span>
                  </span>
                  <div className="w-7 h-7 rounded-full bg-[#183629]/5 flex items-center justify-center text-[#183629] group-hover:bg-[#F2C94C] group-hover:text-[#183629] transition-all">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner: Corporate Engagement Highway */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-[32px] bg-gradient-to-r from-[#183629] to-[#102A21] p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6"
        >
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs uppercase font-bold tracking-widest text-[#F2C94C]">
              END-TO-END TALENT PIPELINE
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal">
              Need specialized tech talent or confidential executive hiring?
            </h3>
            <p className="text-xs sm:text-sm text-white/80 font-light">
              Connect with our senior HR consultants in Madhapur for an immediate talent requirement assessment.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              to="/and/hr-services"
              className="px-6 py-3 rounded-full bg-[#F2C94C] text-[#183629] font-bold text-xs uppercase tracking-wider hover:bg-[#DFAE22] hover:text-[#102A21] transition-all shadow-md group inline-flex items-center gap-2"
            >
              <span>Explore HR Solutions</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/and/contact"
              className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold uppercase tracking-wider hover:bg-white/20 transition-all"
            >
              Contact Our Team
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
