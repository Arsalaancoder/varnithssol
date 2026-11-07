import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { siteData } from '../data/siteData';
import CourseCard from '../components/CourseCard';
import CTASection from '../components/CTASection';

export default function CoursesPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = [
    'All',
    'Cloud & Infrastructure',
    'Enterprise ERP',
    'Data & Analytics',
    'Quality Engineering',
    'Programming & Backend'
  ];

  const filteredCourses = activeFilter === 'All'
    ? siteData.courses
    : siteData.courses.filter(c => c.category === activeFilter);

  return (
    <div className="pt-28 pb-16 bg-[#EAF0E8]">
      {/* Page Hero with Line-by-Line Mask Reveal */}
      <section className="px-6 sm:px-12 lg:px-16 pb-12">
        <div className="max-w-[1360px] mx-auto space-y-6">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#737D73]">
            <Link to="/and" className="hover:text-[#183629]">Home</Link>
            <span>/</span>
            <span className="text-[#183629]">Courses</span>
          </div>

          <div className="space-y-4 max-w-4xl">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#183629]/10 text-[#183629] text-xs font-bold tracking-widest uppercase">
              PROFESSIONAL CURRICULA
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#183629] font-normal tracking-tight leading-[1.06]">
              <span className="block overflow-hidden py-0.5">
                <motion.span
                  initial={{ y: '100%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block"
                >
                  Discover the Skills That
                </motion.span>
              </span>
              <span className="block overflow-hidden py-0.5 text-[#DFAE22]">
                <motion.span
                  initial={{ y: '100%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className="italic font-light inline-block"
                >
                  Move You Forward.
                </motion.span>
              </span>
            </h1>
            <p className="text-base sm:text-xl text-[#202923]/80 font-light leading-relaxed">
              Explore our six core industry-focused training tracks designed to develop high-income engineering competence, real-time lab confidence, and direct placement readiness.
            </p>
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-[#183629]/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`relative px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
                  activeFilter === cat
                    ? 'bg-[#183629] text-[#F2C94C] shadow-sm'
                    : 'bg-white text-[#202923] hover:bg-[#F2C94C]/20 border border-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Consistent 3-Column Grid with Staggered Entrance */}
      <section className="px-6 sm:px-12 lg:px-16 py-8">
        <motion.div
          layout
          className="max-w-[1360px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course, idx) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="w-full h-full"
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Program Benefits Strip: Wispr Flow Glassmorphism Cards */}
      <section className="px-6 sm:px-12 lg:px-16 py-12">
        <div className="max-w-[1360px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Benefit Card 1 */}
          <div className="group relative bg-white rounded-[32px] p-7 sm:p-8 border border-stone-200/90 hover:border-[#183629]/30 shadow-[0_10px_30px_-10px_rgba(24,54,41,0.06)] hover:shadow-[0_25px_50px_-15px_rgba(24,54,41,0.14)] transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[380px] hover:-translate-y-1.5">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />
            <div className="relative z-10 space-y-4">
              <span className="font-mono text-xs font-bold tracking-widest text-[#183629] uppercase">
                VG • ADVANTAGE 01
              </span>
              <h3 className="font-sans text-3xl font-light text-[#183629] tracking-tight leading-[1.1] pt-1">
                10+ Years Veteran Mentors
              </h3>
              <p className="text-xs sm:text-sm text-[#202923]/75 font-light leading-relaxed">
                Every course module is taught by active industry engineers with hands-on enterprise experience in Hyderabad's tech sector.
              </p>
            </div>
            <div className="relative mt-8 pt-4 z-10">
              <div className="absolute -bottom-8 -right-8 w-44 h-32 rounded-tl-[80px] bg-gradient-to-tl from-[#B2E869]/30 to-transparent backdrop-blur-md border-t border-l border-white/70 pointer-events-none group-hover:scale-110 transition-transform duration-700" />
              <div className="pt-3 border-t border-stone-200/60 flex items-center justify-between text-xs">
                <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-[#183629]">
                  ENTERPRISE MENTORS
                </span>
                <span className="font-bold text-[11px] text-[#183629]">
                  Live Guidance
                </span>
              </div>
            </div>
          </div>

          {/* Benefit Card 2 */}
          <div className="group relative bg-white rounded-[32px] p-7 sm:p-8 border border-stone-200/90 hover:border-[#183629]/30 shadow-[0_10px_30px_-10px_rgba(24,54,41,0.06)] hover:shadow-[0_25px_50px_-15px_rgba(24,54,41,0.14)] transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[380px] hover:-translate-y-1.5">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />
            <div className="relative z-10 space-y-4">
              <span className="font-mono text-xs font-bold tracking-widest text-[#183629] uppercase">
                VG • ADVANTAGE 02
              </span>
              <h3 className="font-sans text-3xl font-light text-[#183629] tracking-tight leading-[1.1] pt-1">
                Live Production Sandboxes
              </h3>
              <p className="text-xs sm:text-sm text-[#202923]/75 font-light leading-relaxed">
                Build and deploy genuine capstones on real cloud architectures, automated test suites, and SAP sandbox instances.
              </p>
            </div>
            <div className="relative mt-8 pt-4 z-10">
              <div className="absolute -bottom-8 -left-8 w-44 h-32 rounded-tr-[70px] bg-gradient-to-tr from-[#38C8B5]/25 to-transparent backdrop-blur-md border-t border-r border-white/60 pointer-events-none group-hover:scale-110 transition-transform duration-700" />
              <div className="pt-3 border-t border-stone-200/60 flex items-center justify-between text-xs">
                <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-[#183629]">
                  80% LAB IMMERSION
                </span>
                <span className="font-bold text-[11px] text-[#183629]">
                  Real Architectures
                </span>
              </div>
            </div>
          </div>

          {/* Benefit Card 3 */}
          <div className="group relative bg-white rounded-[32px] p-7 sm:p-8 border border-stone-200/90 hover:border-[#183629]/30 shadow-[0_10px_30px_-10px_rgba(24,54,41,0.06)] hover:shadow-[0_25px_50px_-15px_rgba(24,54,41,0.14)] transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[380px] hover:-translate-y-1.5">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />
            <div className="relative z-10 space-y-4">
              <span className="font-mono text-xs font-bold tracking-widest text-[#183629] uppercase">
                VG • ADVANTAGE 03
              </span>
              <h3 className="font-sans text-3xl font-light text-[#183629] tracking-tight leading-[1.1] pt-1">
                Direct Placement Highway
              </h3>
              <p className="text-xs sm:text-sm text-[#202923]/75 font-light leading-relaxed">
                Graduating learners are directly introduced to partner recruitment firms, corporate hiring managers, and RPO pipelines.
              </p>
            </div>
            <div className="relative mt-8 pt-4 z-10">
              <div className="absolute -bottom-8 -right-8 w-44 h-32 rounded-tl-[80px] bg-gradient-to-tl from-[#B2E869]/30 to-transparent backdrop-blur-md border-t border-l border-white/70 pointer-events-none group-hover:scale-110 transition-transform duration-700" />
              <div className="pt-3 border-t border-stone-200/60 flex items-center justify-between text-xs">
                <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-[#183629]">
                  HR PARTNERSHIPS
                </span>
                <span className="font-bold text-[11px] text-[#183629]">
                  Verified Hires
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
