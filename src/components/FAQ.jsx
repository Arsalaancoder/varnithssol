import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const faqs = siteData.faqs || siteData.faq || [];

  return (
    <section id="faq" className="bg-[#F8F9FA] py-16 sm:py-20 lg:py-24 border-b border-[#E5E7EB]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#063568]" />
            <span className="text-xs sm:text-sm font-bold tracking-wider text-[#063568] uppercase">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <span className="h-2 w-2 rounded-full bg-[#063568]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#16191D] tracking-tight">
            Clear Answers to <span className="text-[#063568]">Common Questions</span>
          </h2>

          <p className="text-base sm:text-lg text-[#5E6874]">
            Everything you need to know about our recruitment SLAs, fee models, and technical training tracks.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-[#E5E7EB] rounded-xl overflow-hidden bg-white transition-all duration-200"
              >
                <button
                  onClick={() => toggleItem(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-base text-[#16191D] hover:text-[#063568] transition-colors focus:outline-hidden cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#F2F3FC] text-[#063568] text-xs font-bold flex items-center justify-center shrink-0">
                      Q
                    </span>
                    <span>{item.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#5E6874] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#063568]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-sm text-[#5E6874] leading-relaxed border-t border-[#E5E7EB] pt-4 bg-[#F8F9FA]/50">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
