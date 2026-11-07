import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Target, Users, ArrowUpRight } from 'lucide-react';
import { siteData } from '../data/siteData';
import CTASection from '../components/CTASection';
import ImageReveal from '../components/motion/ImageReveal';

const commitments = [
  {
    tag: 'COMMITMENT 01 • CURRICULUM RIGOR',
    title: 'Continuously updated cloud, DevOps, SAP & AI-era tracks',
    titleColor: 'text-[#C6E252]',
    body: 'We continuously revise our DevOps, SAP, Python, QA, and Data tracks to incorporate current production tooling, enterprise security standards, and real cloud architectures.',
    link: '/and/courses',
    linkText: 'KEEP READING +',
  },
  {
    tag: 'COMMITMENT 02 • VERIFIED OUTCOMES',
    title: 'Authentic capstone portfolios & real architectural proof',
    titleColor: 'text-white',
    body: 'Every graduate builds a portfolio of real capstone projects and undergoes behavioral coaching, ensuring they stand out with genuine problem-solving capabilities in high-stakes interviews.',
    link: '/and/why-us',
    linkText: 'KEEP READING +',
  },
  {
    tag: 'COMMITMENT 03 • LIFELONG SUPPORT',
    title: 'Sustained career mentorship & corporate recruiter intros',
    titleColor: 'text-white',
    body: 'Our relationship does not end with course completion. Alumni enjoy lifetime community access, career transition guidance, salary negotiation support, and recruiter introductions.',
    link: '/and/hr-services',
    linkText: 'KEEP READING +',
  },
];

export default function AboutPage() {
  return (
    <div className="pt-28 pb-16 bg-[#EAF0E8]">
      {/* Page Hero with Line-by-Line Mask Reveal */}
      <section className="px-6 sm:px-12 lg:px-16 pb-12">
        <div className="max-w-[1360px] mx-auto space-y-6">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#737D73]">
            <Link to="/and" className="hover:text-[#183629]">Home</Link>
            <span>/</span>
            <span className="text-[#183629]">About Us</span>
          </div>

          <div className="space-y-4 max-w-4xl">
            <span className="inline-block px-3 py-1 rounded-full bg-[#183629]/10 text-[#183629] text-xs font-bold tracking-widest uppercase">
              ABOUT VARNITH GLOBAL
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#183629] font-normal tracking-tight leading-[1.06]">
              <span className="block overflow-hidden py-0.5">
                <motion.span
                  initial={{ y: '100%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block"
                >
                  Empowering People.
                </motion.span>
              </span>
              <span className="block overflow-hidden py-0.5 text-[#DFAE22]">
                <motion.span
                  initial={{ y: '100%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className="italic font-light inline-block"
                >
                  Elevating Businesses.
                </motion.span>
              </span>
            </h1>
            <p className="text-base sm:text-xl text-[#202923]/80 font-light leading-relaxed">
              Founded in Hyderabad, Varnith Global is a specialized education accelerator and corporate recruitment consultancy dedicated to transforming curious learners into enterprise-ready software professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Story & Photographic Showcase */}
      <section className="px-6 sm:px-12 lg:px-16 py-8">
        <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Showcase with Empowering Progression Artwork & Clip-Path Reveal */}
          <div className="lg:col-span-6 relative rounded-[32px] overflow-hidden bg-white p-4 sm:p-6 shadow-[0_16px_50px_-20px_rgba(24,54,41,0.18)] border border-stone-200/80 group">
            <div className="relative rounded-[24px] overflow-hidden bg-gradient-to-b from-[#F9FAF8] to-[#EEF3EE] flex items-center justify-center p-4 sm:p-6">
              <ImageReveal
                src="/assets/about_empowering.jpg"
                alt="Empowering people and elevating businesses"
                aspectRatio="aspect-auto"
                parallax={false}
                imageClassName="w-full h-auto max-h-[460px] object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#183629]/90 text-white backdrop-blur-md text-[11px] font-semibold tracking-wide shadow-sm z-20">
                <span className="w-2 h-2 rounded-full bg-[#BEE644] animate-pulse" />
                <span>Our Campus Ethos</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#183629] font-normal leading-tight">
              Bridging the Divide Between Academic Knowledge and Enterprise Delivery
            </h2>
            <p className="text-sm sm:text-base text-[#202923]/80 leading-relaxed font-light">
              {siteData.brand.aboutText}
            </p>
            <p className="text-sm sm:text-base text-[#202923]/80 leading-relaxed font-light">
              Unlike generic massive online open courses, Varnith Global operates an intimate, mentor-driven learning environment in Bhanu Elite, Madhapur. Every student receives personal code reviews, architectural feedback, and access to actual cloud infrastructure sandboxes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-stone-200/70 shadow-xs flex items-start gap-3">
                <Target className="w-5 h-5 text-[#DFAE22] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase font-bold text-[#183629]">Production-First</h4>
                  <p className="text-xs text-[#737D73] mt-0.5">80% of curriculum spent in hands-on labs.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-stone-200/70 shadow-xs flex items-start gap-3">
                <Users className="w-5 h-5 text-[#DFAE22] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase font-bold text-[#183629]">HR Sourcing Arm</h4>
                  <p className="text-xs text-[#737D73] mt-0.5">Direct hiring highway to tech firms.</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/and/hr-services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#F2C94C] text-[#183629] font-bold text-xs uppercase tracking-wider hover:bg-[#DFAE22] hover:text-[#102A21] transition-all shadow-md group"
                >
                  <span>Explore HR Services</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/and/courses"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#183629] border border-stone-200 text-xs font-semibold uppercase tracking-wider hover:bg-[#F4F5EF] transition-all"
                >
                  <span>Training Programs</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section — Wispr Flow Glassmorphism Cards with Staggered Entrance */}
      <section className="px-6 sm:px-12 lg:px-16 py-16">
        <div className="max-w-[1360px] mx-auto space-y-10">
          <div className="border-b border-stone-200 pb-6">
            <span className="text-xs uppercase font-bold tracking-widest text-[#737D73]">
              WHAT WE STAND FOR
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#183629] font-normal mt-2">
              Our Core Commitments
            </h2>
          </div>

          {/* 3 Wispr Flow Glassmorphism Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {commitments.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="h-full"
              >
                <Link
                  to={item.link}
                  className="group relative bg-white/65 backdrop-blur-2xl rounded-[32px] p-7 sm:p-8 border border-white/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.95),0_12px_40px_-8px_rgba(24,54,41,0.08)] hover:bg-white/80 hover:border-white hover:shadow-[inset_0_1px_2px_rgba(255,255,255,1),0_24px_50px_-10px_rgba(24,54,41,0.15)] transition-all duration-500 overflow-hidden flex flex-col justify-between h-full min-h-[420px] hover:-translate-y-1.5 focus:outline-none focus:ring-2 focus:ring-[#F2C94C] block"
                >
                  {/* Background Subtle Pinstripe Grid */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

                  {/* Top Content Block with Glass Depth */}
                  <div className="relative z-10 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-white/60">
                      <span className="font-mono text-xs font-bold tracking-widest text-[#183629] uppercase">
                        VG • COMMITMENT 0{idx + 1}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-md border border-white/90 flex items-center justify-center text-[#183629] shadow-xs group-hover:bg-[#183629] group-hover:text-white transition-all duration-300">
                        <ArrowUpRight className="w-4 h-4 stroke-[2]" />
                      </div>
                    </div>

                    <h3 className="font-sans text-2xl sm:text-3xl font-light text-[#183629] tracking-tight leading-[1.15] pt-1">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#202923]/75 font-light leading-relaxed">
                      {item.body}
                    </p>

                    <div className="pt-2">
                      <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/75 hover:bg-white backdrop-blur-md border border-white/90 shadow-[0_4px_16px_rgba(0,0,0,0.04)] group-hover:bg-[#183629] group-hover:text-white group-hover:border-[#183629] transition-all duration-300">
                        <span className="text-xs font-medium tracking-tight">Varnith Pillar</span>
                        <span className="w-6 h-6 rounded-full bg-white border border-stone-200/80 flex items-center justify-center text-[#183629] shadow-xs group-hover:bg-white/20 group-hover:text-white group-hover:border-transparent transition-all duration-300">
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Lower Section: 3D Curved Glass Ribbons */}
                  <div className="relative mt-8 pt-4 z-10">
                    <div className="absolute -bottom-8 -left-8 w-44 h-32 rounded-tr-[70px] bg-gradient-to-tr from-[#38C8B5]/25 to-transparent backdrop-blur-md border-t border-r border-white/60 pointer-events-none group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute -bottom-8 -right-8 w-48 h-32 rounded-tl-[80px] bg-gradient-to-tl from-[#B2E869]/30 to-transparent backdrop-blur-md border-t border-l border-white/70 pointer-events-none group-hover:scale-105 transition-transform duration-700" />

                    <div className="pt-3.5 border-t border-white/60 flex items-center justify-between text-xs">
                      <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-[#183629]">
                        HYDERABAD STANDARDS
                      </span>
                      <span className="font-bold text-[11px] text-[#183629]">
                        0{idx + 1}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
