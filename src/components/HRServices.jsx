import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { siteData } from '../data/siteData';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Briefcase
} from 'lucide-react';

export default function HRServices() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const total = siteData.hrServices.length;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA') return;
      if (e.key === 'ArrowLeft') {
        setActiveIndex((prev) => (prev - 1 + total) % total);
      }
      if (e.key === 'ArrowRight') {
        setActiveIndex((prev) => (prev + 1) % total);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [total]);

  // Swipe / Drag Handler
  const handleDragEnd = (_, info) => {
    if (info.offset.x < -40) {
      handleNext();
    } else if (info.offset.x > 40) {
      handlePrev();
    }
  };

  const activeService = siteData.hrServices[activeIndex];

  // Helper to calculate relative circular distance & layout attributes
  const getCardTransform = (index) => {
    let diff = (index - activeIndex) % total;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    // Desktop offsets
    let x = 0;
    let y = 0;
    let scale = 1;
    let rotate = 0;
    let zIndex = 10;
    let opacity = 1;

    if (diff === 0) {
      // Center Active Card
      x = 0;
      y = 0;
      scale = 1.08;
      rotate = 0;
      zIndex = 30;
      opacity = 1;
    } else if (diff === -1) {
      // Immediate Left
      x = -155;
      y = 16;
      scale = 0.88;
      rotate = -6;
      zIndex = 20;
      opacity = 0.85;
    } else if (diff === 1) {
      // Immediate Right
      x = 155;
      y = 16;
      scale = 0.88;
      rotate = 6;
      zIndex = 20;
      opacity = 0.85;
    } else if (diff === -2) {
      // Outer Left
      x = -275;
      y = 36;
      scale = 0.74;
      rotate = -12;
      zIndex = 10;
      opacity = 0.55;
    } else if (diff === 2) {
      // Outer Right
      x = 275;
      y = 36;
      scale = 0.74;
      rotate = 12;
      zIndex = 10;
      opacity = 0.55;
    } else {
      // Offscreen
      x = Math.sign(diff) * 360;
      y = 55;
      scale = 0.6;
      rotate = Math.sign(diff) * 16;
      zIndex = 0;
      opacity = 0;
    }

    return { diff, x, y, scale, rotate, zIndex, opacity };
  };

  return (
    <section
      id="hr-services"
      ref={sectionRef}
      className="py-20 sm:py-28 px-6 sm:px-12 lg:px-16 bg-[#EAF0E8] relative overflow-hidden select-none"
    >
      {/* Background Decorative Ambience */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#BEE644]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1360px] mx-auto space-y-12 sm:space-y-16">
        {/* Section Header */}
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

        {/* 
          3D ARC COVERFLOW CAROUSEL (Matching the attached reference design)
          - Top row: Section subtitle on left + "04/24" style fractional counter and arrows on right
          - Center: Fanned arc of squircle cards with bright lime border on active center card
          - Below: Centered Title, Subtitle, and Explore CTA
        */}
        <div className="relative w-full max-w-4xl mx-auto pt-4 pb-2">
          {/* Carousel Top Bar: Label on Left, Fractional Counter & Controls on Right */}
          <div className="flex items-center justify-between pb-6 px-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#183629]" />
              <h3 className="font-serif text-xl sm:text-2xl text-[#183629] font-normal">
                Featured Practices
              </h3>
            </div>

            {/* Fractional Counter matching Reference (e.g. 04/24) + Navigation Buttons */}
            <div className="flex items-center gap-4">
              <span className="font-mono text-base sm:text-lg font-bold text-[#183629] tracking-wider">
                0{activeIndex + 1}/0{total}
              </span>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous HR Service"
                  className="w-9 h-9 rounded-full bg-white hover:bg-[#F2C94C] text-[#183629] border border-stone-200/80 flex items-center justify-center transition-colors shadow-xs focus:outline-none"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next HR Service"
                  className="w-9 h-9 rounded-full bg-white hover:bg-[#F2C94C] text-[#183629] border border-stone-200/80 flex items-center justify-center transition-colors shadow-xs focus:outline-none"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* 3D Arc Card Deck Container */}
          <div
            className="relative h-[290px] sm:h-[340px] flex items-center justify-center cursor-grab active:cursor-grabbing overflow-visible"
            onTouchStart={(e) => {
              const startX = e.touches[0].clientX;
              const handleTouchEnd = (ev) => {
                const diff = ev.changedTouches[0].clientX - startX;
                if (diff > 40) handlePrev();
                if (diff < -40) handleNext();
                window.removeEventListener('touchend', handleTouchEnd);
              };
              window.addEventListener('touchend', handleTouchEnd);
            }}
          >
            {siteData.hrServices.map((service, idx) => {
              const { diff, x, y, scale, rotate, zIndex, opacity } = getCardTransform(idx);
              const isCenter = diff === 0;

              return (
                <motion.div
                  key={service.id}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={handleDragEnd}
                  animate={{
                    x,
                    y,
                    scale,
                    rotate,
                    zIndex,
                    opacity,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 28,
                    mass: 0.8,
                  }}
                  onClick={() => {
                    if (!isCenter) setActiveIndex(idx);
                  }}
                  className={`absolute w-[200px] sm:w-[260px] aspect-square rounded-[26px] sm:rounded-[32px] overflow-hidden cursor-pointer shadow-xl transition-shadow ${
                    isCenter
                      ? 'ring-4 ring-[#BEE644] ring-offset-2 ring-offset-[#EAF0E8] shadow-[0_20px_45px_-12px_rgba(24,54,41,0.32)]'
                      : 'hover:opacity-95'
                  }`}
                  style={{
                    pointerEvents: opacity === 0 ? 'none' : 'auto',
                  }}
                >
                  {/* Service Photo with Subtle Gradient */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover filter brightness-[0.98] contrast-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                  {/* Practice Badge Top Left */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold text-[#183629] font-mono uppercase tracking-wider shadow-xs">
                    0{service.number}
                  </div>

                  {/* Corner Accent on Center Card */}
                  {isCenter && (
                    <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-[#BEE644] text-[#183629] flex items-center justify-center shadow-xs">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  )}

                  {/* Badge Bottom Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[10px]">
                    <span className="px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 font-medium">
                      {service.badge}
                    </span>
                    {service.stats && service.stats[0] && (
                      <span className="font-mono font-bold text-[#F2C94C]">
                        {service.stats[0].value}
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Active Card Details below the Arc (Matching Reference Design) */}
          <div className="mt-8 text-center max-w-xl mx-auto space-y-4 px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-3"
              >
                {/* Center Title (like Daniel Petersen) */}
                <h3 className="font-serif text-2xl sm:text-4xl text-[#183629] font-normal tracking-tight">
                  {activeService.title}
                </h3>

                {/* Subtitle Line (like $100 donation • 10m ago) */}
                <p className="text-xs sm:text-sm font-medium text-[#737D73] flex items-center justify-center gap-2 flex-wrap">
                  <span className="text-[#183629] font-semibold">
                    Practice 0{activeService.number}
                  </span>
                  <span>•</span>
                  <span>{activeService.badge}</span>
                  <span>•</span>
                  <span className="text-[#183629] font-semibold">
                    {activeService.stats ? activeService.stats[0]?.value : '< 14 Days Hire'} SLA
                  </span>
                </p>

                {/* Supporting Description */}
                <p className="text-xs sm:text-sm text-[#202923]/75 font-light leading-relaxed max-w-lg mx-auto pt-1">
                  {activeService.shortDescription || activeService.description}
                </p>

                {/* Direct Action Buttons */}
                <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
                  <Link
                    to={`/and/hr-services/${activeService.slug}`}
                    className="px-7 py-3 rounded-full bg-[#F2C94C] text-[#183629] font-bold text-xs uppercase tracking-wider hover:bg-[#DFAE22] hover:text-[#102A21] transition-all shadow-md inline-flex items-center gap-2 group"
                  >
                    <span>Explore Practice Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <a
                    href="#contact"
                    className="px-6 py-3 rounded-full bg-white text-[#183629] border border-stone-200/90 text-xs font-semibold uppercase tracking-wider hover:bg-[#F4F5EF] transition-all inline-flex items-center gap-2"
                  >
                    <Briefcase className="w-3.5 h-3.5 text-[#DFAE22]" />
                    <span>Request Talent Brief</span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Clickable Pagination Dots */}
            <div className="flex items-center justify-center gap-2 pt-6">
              {siteData.hrServices.map((srv, idx) => (
                <button
                  key={srv.id}
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Go to ${srv.title}`}
                  className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
                    activeIndex === idx
                      ? 'w-7 bg-[#183629]'
                      : 'w-2 bg-[#183629]/20 hover:bg-[#183629]/40'
                  }`}
                />
              ))}
            </div>
          </div>
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
              <span>Explore All HR Solutions</span>
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
