import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="bg-white py-16 sm:py-20 border-b border-[#e3e8f0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-[#1e5bc6]">
            Frequently Asked Questions
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#00184a] tracking-tight">
            Clear Answers to Common Questions
          </h2>
          <p className="text-base text-[#5b6b85]">
            Everything you need to know about our recruitment partnerships and training programmes.
          </p>
        </div>

        <div className="space-y-3">
          {(siteData.faqs || siteData.faq || []).map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-[#e3e8f0] rounded-xl overflow-hidden bg-white transition-colors"
              >
                <button
                  onClick={() => toggleItem(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-semibold text-base text-[#00184a] hover:text-[#1e5bc6] transition-colors focus:outline-none"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#5b6b85] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#1e5bc6]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-[#5b6b85] leading-relaxed border-t border-[#e3e8f0] pt-4">
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
