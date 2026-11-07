import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useInView, useReducedMotion } from 'framer-motion';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });
  const shouldReduceMotion = useReducedMotion();

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="py-20 sm:py-28 px-6 sm:px-12 lg:px-16 bg-[#EAF0E8]"
    >
      <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column — Editorial Heading & Help Card */}
        <div className="lg:col-span-5 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#183629]/10 text-[#183629] text-xs font-bold tracking-widest uppercase"
          >
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </motion.div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#183629] font-normal tracking-tight leading-[1.08]">
            <span className="block overflow-hidden py-0.5">
              <motion.span
                initial={shouldReduceMotion ? { opacity: 0 } : { y: '100%' }}
                animate={isInView ? { y: '0%' } : { y: '100%' }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block"
              >
                Good to Know Before
              </motion.span>
            </span>
            <span className="block overflow-hidden py-0.5 text-[#DFAE22]">
              <motion.span
                initial={shouldReduceMotion ? { opacity: 0 } : { y: '100%' }}
                animate={isInView ? { y: '0%' } : { y: '100%' }}
                transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
                className="italic font-light inline-block"
              >
                You Begin
              </motion.span>
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="text-base sm:text-lg text-[#202923]/80 font-light leading-relaxed"
          >
            Have questions about admissions, our course formats, or prerequisites? We provide transparent guidance to help you plan with clarity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="p-6 rounded-[28px] bg-white border border-stone-200/70 space-y-3 shadow-sm"
          >
            <h4 className="font-serif text-xl text-[#183629] font-semibold">
              Need personalized guidance?
            </h4>
            <p className="text-xs text-[#737D73] leading-relaxed">
              Our academic advisors in Madhapur are available for 1-on-1 counseling to help determine the best learning path for your career goals.
            </p>
            {/* Yellow CTA Button with Shine */}
            <div className="pt-2">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/and/contact"
                  className="relative px-5 py-2.5 rounded-full bg-[#F2C94C] text-[#183629] text-xs font-bold tracking-wider uppercase hover:bg-[#DFAE22] hover:text-[#102A21] inline-flex items-center gap-2 shadow-xs overflow-hidden group transition-colors"
                >
                  <span className="absolute inset-0 w-1/2 h-full bg-white/30 transform -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700 ease-out" />
                  <span className="relative z-10">Speak with an Advisor</span>
                  <ArrowUpRight className="relative z-10 w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Right Column — Minimalist Accordion with Spring Rotation */}
        <div className="lg:col-span-7 space-y-3">
          {siteData.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.15 + idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={`rounded-[24px] transition-all duration-300 border ${
                  isOpen
                    ? 'bg-white border-[#DFAE22] shadow-sm'
                    : 'bg-transparent border-[#173B2C]/10 hover:bg-white/60'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="font-serif text-lg sm:text-xl text-[#183629] font-normal">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
                      isOpen
                        ? 'bg-[#183629] text-[#F2C94C]'
                        : 'bg-stone-200 text-[#183629]'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${idx}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-[#202923]/80 leading-relaxed font-light border-t border-stone-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
