import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { siteData } from '../data/siteData';
import { Star, ArrowUpRight } from 'lucide-react';
import TestimonialMarquee from '@/components/ui/marquee-01';
import CTASection from '../components/CTASection';
import Counter from '../components/motion/Counter';

export default function TestimonialsPage() {
  return (
    <div className="pt-28 pb-16 bg-[#EAF0E8]">
      {/* Page Hero with Masked Split-Text Reveal */}
      <section className="px-6 sm:px-12 lg:px-16 pb-12">
        <div className="max-w-[1360px] mx-auto space-y-6">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#737D73]">
            <Link to="/and" className="hover:text-[#183629]">Home</Link>
            <span>/</span>
            <span className="text-[#183629]">Testimonials</span>
          </div>

          <div className="space-y-4 max-w-4xl">
            <span className="inline-block px-3 py-1 rounded-full bg-[#183629]/10 text-[#183629] text-xs font-bold tracking-widest uppercase">
              AUTHENTIC STUDENT EXPERIENCES
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#183629] font-normal tracking-tight leading-[1.06]">
              <span className="block overflow-hidden py-0.5">
                <motion.span
                  initial={{ y: '100%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block"
                >
                  Real Experiences.
                </motion.span>
              </span>
              <span className="block overflow-hidden py-0.5 text-[#DFAE22]">
                <motion.span
                  initial={{ y: '100%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className="italic font-light inline-block"
                >
                  Meaningful Growth.
                </motion.span>
              </span>
            </h1>
            <p className="text-base sm:text-xl text-[#202923]/80 font-light leading-relaxed">
              Read how genuine students, career switchers, and software engineers in Hyderabad unlocked new career opportunities through Varnith Global's practical training.
            </p>
          </div>
        </div>
      </section>

      {/* Grid of All 4 Genuine Alumni Testimonials: Wispr Flow Glassmorphism Cards with Stagger */}
      <section className="px-6 sm:px-12 lg:px-16 py-8">
        <div className="max-w-[1360px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {siteData.testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-white/65 backdrop-blur-2xl rounded-[32px] p-8 sm:p-10 border border-white/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.95),0_12px_40px_-8px_rgba(24,54,41,0.08)] hover:bg-white/80 hover:border-white hover:shadow-[inset_0_1px_2px_rgba(255,255,255,1),0_24px_50px_-10px_rgba(24,54,41,0.15)] transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[440px] hover:-translate-y-1.5"
            >
              {/* Background Subtle Pinstripe Grid */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

              {/* Top Block with Glass Depth */}
              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/60">
                  <span className="font-mono text-xs font-bold tracking-widest text-[#183629] uppercase">
                    VG • ALUMNI 0{idx + 1}
                  </span>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/90 shadow-2xs">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#F2C94C] text-[#DFAE22]" />
                      ))}
                      <span className="text-[11px] font-bold text-[#183629] ml-1">5.0</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-md border border-white/90 flex items-center justify-center text-[#183629] shadow-xs group-hover:bg-[#183629] group-hover:text-white transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 stroke-[2]" />
                    </div>
                  </div>
                </div>

                {/* Wispr Flow Style Expressive Quote */}
                <blockquote className="font-sans text-2xl sm:text-3xl font-light text-[#183629] tracking-tight leading-[1.2] pt-2">
                  "{t.quote}"
                </blockquote>

                {/* Frosted Glassmorphism Pill */}
                <div className="pt-2">
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/75 hover:bg-white backdrop-blur-md border border-white/90 shadow-[0_4px_16px_rgba(0,0,0,0.04)] group-hover:bg-[#183629] group-hover:text-white group-hover:border-[#183629] transition-all duration-300">
                    <span className="text-xs font-medium tracking-tight">Verified Placement</span>
                    <span className="w-6 h-6 rounded-full bg-white border border-stone-200/80 flex items-center justify-center text-[#183629] shadow-xs group-hover:bg-white/20 group-hover:text-white group-hover:border-transparent transition-all duration-300">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Lower Section: 3D Curved Glass Ribbons & Student Profile */}
              <div className="relative mt-8 pt-4 z-10">
                <div className="absolute -bottom-6 -left-8 w-44 h-32 rounded-tr-[70px] bg-gradient-to-tr from-[#38C8B5]/25 to-transparent backdrop-blur-md border-t border-r border-white/60 pointer-events-none group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute -bottom-6 -right-8 w-48 h-32 rounded-tl-[80px] bg-gradient-to-tl from-[#B2E869]/30 to-transparent backdrop-blur-md border-t border-l border-white/70 pointer-events-none group-hover:scale-105 transition-transform duration-700" />

                {/* Student Portrait & Profile Info */}
                <div className="pt-4 border-t border-stone-200/60 flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-xs group-hover:scale-105 transition-transform"
                    />
                    <div>
                      <h4 className="font-sans text-base font-semibold text-[#183629]">
                        {t.name}
                      </h4>
                      <p className="text-xs text-[#737D73]">
                        {t.role} • {t.course}
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-[#183629] bg-[#183629]/5 px-2.5 py-1 rounded-full border border-[#183629]/10">
                    HYDERABAD
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust & Outcomes Statistics with Animated Counters */}
      <section className="px-6 sm:px-12 lg:px-16 py-12">
        <div className="max-w-[1360px] mx-auto p-8 sm:p-12 rounded-[32px] bg-[#183629] text-white shadow-xl grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <span className="font-serif text-4xl sm:text-5xl text-[#F2C94C] font-normal block">
              <Counter value={80} suffix="%" />
            </span>
            <p className="text-xs text-white/80 mt-1 uppercase tracking-wider font-semibold">Practical Lab Immersion</p>
          </div>
          <div>
            <span className="font-serif text-4xl sm:text-5xl text-[#F2C94C] font-normal block">
              <Counter value={10} suffix="+ Yrs" />
            </span>
            <p className="text-xs text-white/80 mt-1 uppercase tracking-wider font-semibold">Trainer Industry Experience</p>
          </div>
          <div>
            <span className="font-serif text-4xl sm:text-5xl text-[#F2C94C] font-normal block">Direct</span>
            <p className="text-xs text-white/80 mt-1 uppercase tracking-wider font-semibold">HR Sourcing & Placements</p>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="px-6 sm:px-12 lg:px-16 py-8">
        <div className="max-w-[1360px] mx-auto space-y-4">
          <div className="flex items-center justify-between px-2">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#DFAE22]">
                ALUMNI & CORPORATE COMMUNITY
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#183629] font-normal">
                Continuous Alumni Feedback
              </h3>
            </div>
            <span className="text-xs text-[#737D73] hidden sm:inline-block">
              Hover to pause stream
            </span>
          </div>

          <TestimonialMarquee />
        </div>
      </section>

      <CTASection />
    </div>
  );
}
