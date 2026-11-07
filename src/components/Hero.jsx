import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const heroRef = useRef(null);
  const touchStartX = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const slides = siteData.heroSlides;
  const AUTOPLAY_DURATION = 5500;

  // Subtle Scroll Parallax for Hero Background
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ['0%', '0%'] : ['0%', '18%']
  );

  const backgroundScale = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [1, 1] : [1, 1.08]
  );

  // Autoplay loop
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, AUTOPLAY_DURATION);
    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
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

  return (
    <section
      id="hero"
      ref={heroRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative w-full min-h-[92vh] sm:min-h-[96vh] rounded-b-3xl sm:rounded-b-[40px] overflow-hidden flex flex-col justify-between pt-28 sm:pt-36 pb-12 sm:pb-16 px-6 sm:px-12 lg:px-16 text-white shadow-2xl"
    >
      {/* 3-Image Carousel Background with Crossfade, Slow Zoom & Parallax */}
      <motion.div
        style={{ y: backgroundY, scale: backgroundScale }}
        className="absolute inset-0 z-0 overflow-hidden bg-[#102A21] will-change-transform"
      >
        <AnimatePresence mode="sync">
          <motion.div
            key={slides[currentSlide].id}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].badge}
              className="w-full h-full object-cover object-center filter brightness-[0.95] contrast-[1.05]"
            />
          </motion.div>
        </AnimatePresence>

        {/* Cinematic Vignette & Balanced Readability Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#102A21]/95 via-black/30 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#102A21]/85 via-black/25 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04]" />
      </motion.div>

      {/* Main Content Area — Split-Text Reveals */}
      <div className="relative z-10 max-w-4xl mt-auto">
        <div className="space-y-6">
          {/* Eyebrow Reveal */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/35 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold tracking-widest text-[#EAF0E8] uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-[#F2C94C] animate-pulse" />
            <span>{siteData.brand.eyebrow}</span>
          </motion.div>

          {/* Editorial Main Heading with Line-by-Line Mask Reveal (Cormorant Garamond 500) */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[1.04] tracking-tight text-white drop-shadow-md">
            <span className="block overflow-hidden py-1">
              <motion.span
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block"
              >
                Build Skills.
              </motion.span>
            </span>
            <span className="block overflow-hidden py-1">
              <motion.span
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
                className="italic font-light inline-block text-[#F2C94C]"
              >
                Shape Your Future.
              </motion.span>
            </span>
          </h1>

          {/* Supporting Text Staggered Entrance */}
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.58, ease: [0.22, 1, 0.36, 1] }}
            className="text-base sm:text-lg md:text-xl text-white/90 font-light leading-relaxed max-w-2xl"
          >
            {siteData.brand.heroDescription}
          </motion.p>

          {/* Yellow & Secondary CTA Buttons with Shine & Hover Physics */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.72, ease: [0.22, 1, 0.36, 1] }}
            className="pt-2 flex flex-wrap items-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/and/courses"
                className="relative px-7 py-3.5 rounded-full bg-[#F2C94C] text-[#183629] font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center gap-2.5 shadow-lg shadow-black/30 hover:bg-[#DFAE22] hover:text-[#102A21] overflow-hidden group transition-colors"
              >
                {/* Shine Sweep Overlay */}
                <span className="absolute inset-0 w-1/2 h-full bg-white/35 transform -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700 ease-out" />
                <span className="relative z-10">Explore Our Programs</span>
                <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/and/contact"
                className="px-7 py-3.5 rounded-full bg-white/10 backdrop-blur-md border border-[#DFAE22]/90 text-white font-semibold text-xs sm:text-sm tracking-wider uppercase hover:bg-[#F2C94C]/20 transition-all duration-300 block"
              >
                <span>Talk to Our Team</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Slide Indicators & Navigation Controls */}
      <div className="relative z-10 mt-12 pt-6 border-t border-white/15 flex items-center justify-between gap-6">
        <div className="text-xs text-white/70 font-medium">
          <span className="text-[#F2C94C] font-mono font-bold">0{currentSlide + 1}</span>
          <span className="mx-1 text-white/40">/</span>
          <span>0{slides.length} • {slides[currentSlide].badge}</span>
        </div>

        {/* Carousel Slide Indicators & Prev/Next Controls */}
        <div className="flex items-center gap-4">
          {/* Animated Slide Progress Bars */}
          <div className="flex items-center gap-2">
            {slides.map((slide, idx) => {
              const isActive = currentSlide === idx;
              return (
                <button
                  key={slide.id}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className="relative h-2 rounded-full overflow-hidden transition-all duration-400 bg-white/25 focus:outline-none"
                  style={{ width: isActive ? '36px' : '10px' }}
                >
                  {isActive && (
                    <motion.span
                      key={currentSlide}
                      initial={{ width: '0%' }}
                      animate={{ width: isPaused ? '100%' : '100%' }}
                      transition={{ duration: AUTOPLAY_DURATION / 1000, ease: 'linear' }}
                      className="absolute inset-0 bg-[#F2C94C] rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Carousel Arrows with Tap Spring Feedback */}
          <div className="flex items-center gap-1.5 pl-2 border-l border-white/20">
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.25)' }}
              whileTap={{ scale: 0.92 }}
              onClick={handlePrev}
              aria-label="Previous Slide"
              className="p-2 rounded-full bg-white/10 text-white transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.25)' }}
              whileTap={{ scale: 0.92 }}
              onClick={handleNext}
              aria-label="Next Slide"
              className="p-2 rounded-full bg-white/10 text-white transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Scroll Down Hint with Smooth Scroll */}
          <button
            onClick={() => {
              const el = document.getElementById('about');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hidden xl:flex items-center gap-1 text-xs uppercase tracking-widest text-white/60 hover:text-[#F2C94C] transition-colors ml-4 cursor-pointer"
          >
            <span>Scroll</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
