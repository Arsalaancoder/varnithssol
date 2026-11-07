import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { siteData } from '../data/siteData';
import TestimonialMarquee from '@/components/ui/marquee-01';
import Counter from './motion/Counter';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const testimonials = siteData.testimonials;

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) handleNext();
    if (diff < -50) handlePrev();
    touchStartX.current = null;
  };

  const current = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      className="py-20 sm:py-28 px-6 sm:px-12 lg:px-16 bg-[#EAF0E8]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="max-w-[1360px] mx-auto space-y-12">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#173B2C]/10 pb-8">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#183629]/10 text-[#183629] text-xs font-bold tracking-widest uppercase">
              <span>ALUMNI EXPERIENCES</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#183629] font-normal tracking-tight leading-[1.08]">
              Real Experiences.{' '}
              <span className="italic font-light text-[#DFAE22]">Meaningful Growth.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#202923]/80 font-light leading-relaxed">
              Genuine feedback from learners who transformed their technical competence and career trajectories at Varnith Global.
            </p>
          </div>

          {/* Carousel Controls with Spring Tap */}
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="w-12 h-12 rounded-full border border-stone-300 flex items-center justify-center text-[#183629] hover:bg-[#183629] hover:text-[#F2C94C] transition-colors bg-white shadow-xs focus:outline-none"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={handleNext}
              aria-label="Next testimonial"
              className="w-12 h-12 rounded-full bg-[#183629] text-[#F2C94C] flex items-center justify-center hover:bg-[#102A21] transition-colors shadow-sm focus:outline-none"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Featured Testimonial Card */}
        <div className="relative rounded-[32px] overflow-hidden bg-white border border-stone-200/70 shadow-lg p-6 sm:p-10 lg:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: shouldReduceMotion ? 0 : -25 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left Column: Authentic Portrait */}
              <div className="lg:col-span-5 relative rounded-[28px] overflow-hidden shadow-md max-w-md mx-auto lg:max-w-none w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5] group">
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-full h-full object-cover object-center filter contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102A21]/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest bg-[#F2C94C] text-[#183629] px-2.5 py-1 rounded-full inline-block mb-1">
                    {current.course}
                  </span>
                  <p className="font-serif text-xl sm:text-2xl font-normal">
                    {current.name}
                  </p>
                  <p className="text-xs text-white/80">
                    {current.role} • {current.location}
                  </p>
                </div>
              </div>

              {/* Right Column: Large Quotation */}
              <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
                <div>
                  <Quote className="w-12 h-12 text-[#DFAE22] mb-4 opacity-75" />

                  {/* 5-Star Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F2C94C] text-[#DFAE22]" />
                    ))}
                    <span className="text-xs font-semibold text-[#737D73] ml-2">
                      Verified Review
                    </span>
                  </div>

                  {/* Quote Body */}
                  <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#183629] font-normal leading-snug">
                    "{current.quote}"
                  </blockquote>
                </div>

                <div className="pt-6 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h4 className="font-serif text-xl text-[#183629] font-semibold">
                      {current.name}
                    </h4>
                    <p className="text-xs text-[#737D73]">
                      Graduate of Varnith Global • {current.course}
                    </p>
                  </div>

                  {/* Dots Indicator */}
                  <div className="flex items-center gap-2">
                    {testimonials.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
                          currentIndex === idx
                            ? 'w-8 bg-[#F2C94C]'
                            : 'w-2 bg-[#183629]/20 hover:bg-[#183629]/40'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Small Testimonials Summary Strip with Animated Counters */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
          <div className="p-4 rounded-2xl bg-white border border-stone-200/70 text-center">
            <span className="font-serif text-2xl text-[#183629] font-semibold block">
              <Counter value={100} suffix="%" />
            </span>
            <p className="text-xs text-[#737D73]">Practical Curriculum Focus</p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-stone-200/70 text-center">
            <span className="font-serif text-2xl text-[#183629] font-semibold block">
              <Counter value={10} suffix="+ Yrs" />
            </span>
            <p className="text-xs text-[#737D73]">Trainer Industry Experience</p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-stone-200/70 text-center">
            <span className="font-serif text-2xl text-[#183629] font-semibold block">
              Madhapur
            </span>
            <p className="text-xs text-[#737D73]">Hyderabad Training HQ</p>
          </div>
        </div>

        {/* Live Continuous Testimonials Marquee */}
        <div className="pt-8 border-t border-[#173B2C]/10 space-y-4">
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
      </div>
    </section>
  );
}
