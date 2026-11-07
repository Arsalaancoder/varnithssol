import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView, useReducedMotion } from 'framer-motion';
import { ArrowRight, Sparkles, Building, BookOpen } from 'lucide-react';

export default function CTASection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const bgY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ['0%', '0%'] : ['-12%', '12%']
  );

  return (
    <section className="py-12 sm:py-16 px-6 sm:px-12 lg:px-16 bg-[#EAF0E8]">
      <div
        ref={containerRef}
        className="max-w-[1360px] mx-auto relative rounded-[36px] overflow-hidden shadow-2xl p-8 sm:p-14 lg:p-20 text-white min-h-[440px] flex flex-col justify-center items-center text-center"
      >
        {/* Background Image with Parallax & Dark Green Overlay */}
        <motion.div
          style={{ y: bgY }}
          className="absolute inset-0 z-0 will-change-transform"
        >
          <img
            src="/assets/cta_bg.jpg"
            alt="Varnith Global Corporate Opportunities"
            className="w-full h-full object-cover filter brightness-[0.4] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-[#102A21]/85 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#102A21] via-transparent to-[#102A21]/70" />
        </motion.div>

        {/* Content with Mask Reveals */}
        <div className="relative z-10 max-w-3xl space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-xs font-semibold tracking-widest text-[#EAF0E8] uppercase"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#F2C94C]" />
            <span>ACCELERATE YOUR PROGRESS</span>
          </motion.div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight text-white drop-shadow-md">
            <span className="block overflow-hidden py-0.5">
              <motion.span
                initial={shouldReduceMotion ? { opacity: 0 } : { y: '100%' }}
                animate={isInView ? { y: '0%' } : { y: '100%' }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block"
              >
                Your Next Opportunity Starts With the
              </motion.span>
            </span>
            <span className="block overflow-hidden py-0.5 text-[#F2C94C]">
              <motion.span
                initial={shouldReduceMotion ? { opacity: 0 } : { y: '100%' }}
                animate={isInView ? { y: '0%' } : { y: '100%' }}
                transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
                className="italic font-light inline-block"
              >
                Right Connection.
              </motion.span>
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="text-base sm:text-lg text-white/90 font-light leading-relaxed max-w-2xl mx-auto"
          >
            Whether you're developing your skills or building a stronger team, Varnith Global is here to help with practical IT learning and strategic recruitment solutions.
          </motion.p>

          {/* Yellow CTA & Secondary Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="pt-4 flex flex-wrap items-center justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/and/courses"
                className="relative px-8 py-4 rounded-full bg-[#F2C94C] text-[#183629] text-xs sm:text-sm font-bold tracking-wider uppercase flex items-center gap-2.5 shadow-lg shadow-black/30 hover:bg-[#DFAE22] hover:text-[#102A21] overflow-hidden group transition-colors"
              >
                <span className="absolute inset-0 w-1/2 h-full bg-white/30 transform -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700 ease-out" />
                <BookOpen className="w-4 h-4 relative z-10" />
                <span className="relative z-10">Explore Courses</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/and/hr-services"
                className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-[#DFAE22] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase flex items-center gap-2.5 hover:bg-[#F2C94C]/20 transition-all block"
              >
                <Building className="w-4 h-4" />
                <span>Discuss HR Solutions</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
