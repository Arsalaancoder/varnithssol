import React, { useState } from 'react';
import { ChevronDown, Plus, Minus, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteData } from '../../data/siteData';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq-section" className="bg-[#F8FAFC] py-16 sm:py-20 lg:py-24 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12 relative">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-semibold text-[#0A3857] uppercase tracking-wider">
            Learner &amp; Client Questions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A3857] tracking-tight font-['Familjen_Grotesk']">
            FAQs
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-['Familjen_Grotesk']">
            Clear, honest answers about our SAP training programmes, batch formats, and recruitment services.
          </p>
        </div>

        {/* Accordion Component */}
        <div className="bg-white border border-slate-200 rounded-lg divide-y divide-slate-200 shadow-2xs">
          {siteData.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={faq.q} className="transition-colors">
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-5 px-6 sm:px-8 flex items-center justify-between text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#0A3857] pr-4">
                    {faq.q}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-[#0A3857] transition-transform duration-200">
                    {isOpen ? <Minus className="w-4 h-4 text-[#127DC4]" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-8 pb-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Support Note */}
        <div className="mt-8 text-center text-xs sm:text-sm text-slate-500">
          <span>Still have a question? </span>
          <a href="/contact" className="text-[#0A3857] font-semibold underline hover:text-[#127DC4]">
            Reach out directly to our team
          </a>
          <span> — a real person reads every inquiry.</span>
        </div>

      </div>
    </section>
  );
}

