import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useInView, useReducedMotion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

// 6 Official Courses with specific titles, descriptions, and verified imagery
const courses = [
  {
    id: "devops",
    slug: "devops",
    number: "01",
    title: "DevOps Engineering",
    description: "Build expertise in modern development workflows, automation and cloud infrastructure.",
    image: "/assets/course_devops_new.png",
    category: "Cloud & Infrastructure",
  },
  {
    id: "sap-basis-security",
    slug: "sap-basis-security",
    number: "02",
    title: "SAP Basis Security",
    description: "Learn SAP administration, system security and enterprise infrastructure.",
    image: "/assets/course_sap_new.png",
    category: "Enterprise ERP",
  },
  {
    id: "sap-grc",
    slug: "sap-grc",
    number: "03",
    title: "SAP GRC",
    description: "Understand governance, risk management and compliance in SAP environments.",
    image: "/assets/course_sap_new.png",
    category: "Governance & Risk",
  },
  {
    id: "data-analyst",
    slug: "data-analyst",
    number: "04",
    title: "Data Analyst",
    description: "Turn data into meaningful insights using modern analytical tools.",
    image: "/assets/course_data_new.jpg",
    category: "Data & Analytics",
  },
  {
    id: "software-testing",
    slug: "software-testing",
    number: "05",
    title: "Software Testing",
    description: "Build quality engineering skills through software testing and automation.",
    image: "/assets/course_testing_new.png",
    category: "Quality Engineering",
  },
  {
    id: "python",
    slug: "python",
    number: "06",
    title: "Python",
    description: "Develop programming skills and build practical software solutions.",
    image: "/assets/course_python_new.png",
    category: "Programming & Backend",
  },
];

export default function Courses() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });
  const shouldReduceMotion = useReducedMotion();

  const totalCourses = courses.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalCourses) % totalCourses);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalCourses);
  };

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA') return;
      if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => (prev - 1 + totalCourses) % totalCourses);
      }
      if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) => (prev + 1) % totalCourses);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [totalCourses]);

  // Swipe / Drag Handler
  const handleDragEnd = (_, info) => {
    if (info.offset.x < -40) {
      handleNext();
    } else if (info.offset.x > 40) {
      handlePrev();
    }
  };

  const featuredCourse = courses[currentIndex];
  const supportingCourse1 = courses[(currentIndex + 1) % totalCourses];
  const supportingCourse2 = courses[(currentIndex + 2) % totalCourses];

  return (
    <section
      id="courses"
      ref={sectionRef}
      className="py-20 sm:py-28 px-4 sm:px-8 lg:px-12 bg-white text-[#202923] overflow-hidden select-none"
    >
      <div className="max-w-[1380px] mx-auto space-y-10 sm:space-y-12">
        {/* Editorial Section Header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2"
        >
          <div className="space-y-2">
            <span className="text-xs font-bold tracking-widest uppercase text-[#737D73] block">
              OUR PROGRAMS
            </span>
            <h2 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#183629] leading-[1.08]">
              <span className="block overflow-hidden py-0.5">
                <motion.span
                  initial={shouldReduceMotion ? { opacity: 0 } : { y: '100%' }}
                  animate={isInView ? { y: '0%' } : { y: '100%' }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block"
                >
                  GOOD SKILLS
                </motion.span>
              </span>
              <span className="block overflow-hidden py-0.5 text-[#79984E]">
                <motion.span
                  initial={shouldReduceMotion ? { opacity: 0 } : { y: '100%' }}
                  animate={isInView ? { y: '0%' } : { y: '100%' }}
                  transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block"
                >
                  FOR A BETTER FUTURE
                </motion.span>
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            {/* Previous / Next Arrow Controls with Spring Tap */}
            <div className="flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                onClick={handlePrev}
                aria-label="Previous Courses"
                className="p-3 rounded-full bg-[#F4F5EF] hover:bg-[#DCEEC0] text-[#183629] transition-colors shadow-xs"
              >
                <ChevronLeft className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                onClick={handleNext}
                aria-label="Next Courses"
                className="p-3 rounded-full bg-[#F4F5EF] hover:bg-[#DCEEC0] text-[#183629] transition-colors shadow-xs"
              >
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </div>

            {/* View All Courses Link with Animated Circular Arrow Button */}
            <Link
              to="/and/courses"
              className="group inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#183629] hover:text-[#79984E] transition-colors pl-2"
            >
              <span>VIEW ALL COURSES</span>
              <div className="w-8 h-8 rounded-full bg-[#F4F5EF] group-hover:bg-[#79984E] flex items-center justify-center transition-colors shadow-xs">
                <ArrowUpRight className="w-4 h-4 text-[#183629] group-hover:text-white group-hover:rotate-45 transition-transform duration-300" />
              </div>
            </Link>
          </div>
        </motion.div>

        {/* 
          Horizontal Card Layout with Drag/Swipe & Smooth Layout Transitions:
          - Card 1: Featured card, ~1.75x wider
          - Card 2: Compact supporting card
          - Card 3: Compact supporting card
        */}
        <div className="relative w-full cursor-grab active:cursor-grabbing">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: shouldReduceMotion ? 0 : -30 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col md:flex-row items-stretch gap-6 h-auto md:min-h-[460px] lg:h-[480px]"
            >
              {/* CARD 1: FEATURED CARD */}
              <motion.div
                whileHover={shouldReduceMotion ? {} : { y: -6 }}
                transition={{ duration: 0.3 }}
                className="md:flex-[1.75] bg-[#EEF2EE] rounded-[32px] sm:rounded-[36px] p-6 sm:p-8 lg:p-10 shadow-sm border border-stone-200/60 flex flex-col justify-between group overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-stretch justify-between gap-6 sm:gap-8 h-full">
                  {/* Left Column: Title, Description & Action */}
                  <div className="flex-1 flex flex-col justify-between h-full space-y-4">
                    <div className="space-y-3">
                      <span className="text-[10px] font-bold tracking-widest uppercase text-[#737D73] block">
                        Track {featuredCourse.number} • {featuredCourse.category}
                      </span>
                      <h3 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#183629] tracking-tight leading-tight group-hover:text-[#79984E] transition-colors">
                        {featuredCourse.title}
                      </h3>
                      <p className="text-sm sm:text-base text-[#576359] leading-relaxed font-normal pt-1 max-w-sm">
                        {featuredCourse.description}
                      </p>
                    </div>

                    {/* Read More Text + Green Circular Arrow Button */}
                    <div className="pt-4">
                      <Link
                        to={`/and/courses/${featuredCourse.slug}`}
                        className="inline-flex items-center gap-3 text-sm font-bold text-[#183629] hover:text-[#79984E] transition-colors group/link"
                      >
                        <span className="tracking-wide">Read More</span>
                        <div className="w-10 h-10 rounded-full bg-[#A2C753] group-hover/link:bg-[#183629] flex items-center justify-center text-[#183629] group-hover/link:text-white transition-all shadow-xs group-hover/link:scale-105">
                          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Prominent Dedicated Image Container with Hover Zoom */}
                  <div className="w-full sm:w-56 md:w-60 lg:w-72 shrink-0 h-64 sm:h-full flex items-center justify-center">
                    <div className="relative w-full h-full min-h-[220px] rounded-[24px] sm:rounded-[28px] overflow-hidden bg-white/90 p-4 shadow-xs flex items-center justify-center border border-stone-200/50">
                      <img
                        src={featuredCourse.image}
                        alt={featuredCourse.title}
                        className={`w-full h-full ${
                          featuredCourse.image.endsWith('.jpg') ? 'object-cover' : 'object-contain p-2'
                        } object-center filter brightness-[0.98] contrast-[1.04] group-hover:scale-108 transition-transform duration-500 pointer-events-none`}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* CARD 2: COMPACT SUPPORTING CARD */}
              <motion.div
                whileHover={shouldReduceMotion ? {} : { y: -6 }}
                transition={{ duration: 0.3 }}
                onClick={() => setCurrentIndex((currentIndex + 1) % totalCourses)}
                className="md:flex-1 bg-gradient-to-br from-[#E2F2C5] to-[#CCE6A0] rounded-[32px] sm:rounded-[36px] p-6 sm:p-7 shadow-sm border border-[#183629]/10 flex flex-col justify-between group cursor-pointer overflow-hidden relative"
              >
                <div className="pointer-events-none absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-white/20 blur-xs" />
                <div className="pointer-events-none absolute -bottom-3 -right-3 w-24 h-24 rounded-full bg-white/25 blur-xs" />

                {/* Upper-Left Text */}
                <div className="relative z-10 space-y-2">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#183629]/65 block">
                    Track {supportingCourse1.number}
                  </span>
                  <h3 className="font-sans text-xl sm:text-2xl font-extrabold text-[#183629] tracking-tight leading-snug group-hover:text-[#102A21] transition-colors">
                    {supportingCourse1.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#38483B] leading-relaxed line-clamp-2">
                    {supportingCourse1.description}
                  </p>
                </div>

                {/* Middle/Lower Prominent Image Container */}
                <div className="relative z-10 w-full h-36 sm:h-40 my-3 rounded-2xl overflow-hidden bg-white/75 p-3 shadow-xs shrink-0 flex items-center justify-center border border-white/50">
                  <img
                    src={supportingCourse1.image}
                    alt={supportingCourse1.title}
                    className={`w-full h-full ${
                      supportingCourse1.image.endsWith('.jpg') ? 'object-cover' : 'object-contain p-1'
                    } object-center filter brightness-[0.98] contrast-[1.03] group-hover:scale-108 transition-transform duration-500 pointer-events-none`}
                    loading="lazy"
                  />
                </div>

                {/* Bottom Read More with White Circular Arrow Button ↗ */}
                <div className="relative z-10 flex items-center justify-between pt-2">
                  <Link
                    to={`/and/courses/${supportingCourse1.slug}`}
                    onClick={(e) => e.stopPropagation()}
                    className="text-xs sm:text-sm font-bold text-[#183629] hover:underline"
                  >
                    Read More
                  </Link>
                  <div className="w-9 h-9 rounded-full bg-white text-[#183629] flex items-center justify-center shadow-xs group-hover:bg-[#183629] group-hover:text-white group-hover:rotate-45 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>

              {/* CARD 3: COMPACT SUPPORTING CARD */}
              <motion.div
                whileHover={shouldReduceMotion ? {} : { y: -6 }}
                transition={{ duration: 0.3 }}
                onClick={() => setCurrentIndex((currentIndex + 2) % totalCourses)}
                className="hidden lg:flex lg:flex-1 bg-gradient-to-br from-[#E2F2C5] to-[#CCE6A0] rounded-[32px] sm:rounded-[36px] p-6 sm:p-7 shadow-sm border border-[#183629]/10 flex-col justify-between group cursor-pointer overflow-hidden relative"
              >
                <div className="pointer-events-none absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-white/20 blur-xs" />
                <div className="pointer-events-none absolute -bottom-3 -right-3 w-24 h-24 rounded-full bg-white/25 blur-xs" />

                {/* Upper-Left Text */}
                <div className="relative z-10 space-y-2">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#183629]/65 block">
                    Track {supportingCourse2.number}
                  </span>
                  <h3 className="font-sans text-xl sm:text-2xl font-extrabold text-[#183629] tracking-tight leading-snug group-hover:text-[#102A21] transition-colors">
                    {supportingCourse2.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#38483B] leading-relaxed line-clamp-2">
                    {supportingCourse2.description}
                  </p>
                </div>

                {/* Middle/Lower Prominent Image Container */}
                <div className="relative z-10 w-full h-36 sm:h-40 my-3 rounded-2xl overflow-hidden bg-white/75 p-3 shadow-xs shrink-0 flex items-center justify-center border border-white/50">
                  <img
                    src={supportingCourse2.image}
                    alt={supportingCourse2.title}
                    className={`w-full h-full ${
                      supportingCourse2.image.endsWith('.jpg') ? 'object-cover' : 'object-contain p-1'
                    } object-center filter brightness-[0.98] contrast-[1.03] group-hover:scale-108 transition-transform duration-500 pointer-events-none`}
                    loading="lazy"
                  />
                </div>

                {/* Bottom Read More with White Circular Arrow Button ↗ */}
                <div className="relative z-10 flex items-center justify-between pt-2">
                  <Link
                    to={`/and/courses/${supportingCourse2.slug}`}
                    onClick={(e) => e.stopPropagation()}
                    className="text-xs sm:text-sm font-bold text-[#183629] hover:underline"
                  >
                    Read More
                  </Link>
                  <div className="w-9 h-9 rounded-full bg-white text-[#183629] flex items-center justify-center shadow-xs group-hover:bg-[#183629] group-hover:text-white group-hover:rotate-45 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Horizontal Carousel Progress Indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-200/70">
          <div className="flex items-center gap-2">
            {courses.map((course, idx) => {
              const isFeatured = idx === currentIndex;
              return (
                <button
                  key={course.id}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Feature Track ${course.number}: ${course.title}`}
                  className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
                    isFeatured
                      ? 'w-10 bg-[#183629]'
                      : 'w-2.5 bg-stone-300 hover:bg-[#79984E]'
                  }`}
                />
              );
            })}
          </div>

          <div className="text-xs text-[#737D73] font-medium flex items-center gap-2">
            <span>Featuring Track {featuredCourse.number} of 06:</span>
            <span className="font-bold text-[#183629]">{featuredCourse.title}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
