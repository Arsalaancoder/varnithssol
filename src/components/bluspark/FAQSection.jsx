import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    category: 'HR Consulting',
    question: 'What recruitment services does Varnith provide?',
    answer: 'Varnith Technologies offers comprehensive technical talent acquisition, Recruitment Process Outsourcing (RPO), confidential Executive Search, and Contract Staffing. We specialize in software engineering, Cloud DevOps, data analytics, and enterprise SAP implementations.'
  },
  {
    category: 'HR Consulting',
    question: 'How does the talent acquisition process work?',
    answer: 'We begin with a structured role brief to benchmark required technical competencies. Next, our technical recruiters source and screen candidates through live cloud sandbox assessments and architecture evaluations. We deliver calibrated candidate dossiers with an average turnaround under 14 days and back every placement with a 90-day replacement warranty.'
  },
  {
    category: 'HR Consulting',
    question: 'Can businesses discuss specific hiring requirements?',
    answer: 'Yes. Our senior talent advisory team in Madhapur, Hyderabad meets directly with engineering leaders to structure bespoke hiring plans, compensation benchmarks, or dedicated contract squads for specific product roadmap timelines.'
  },
  {
    category: 'Training & Development',
    question: 'What technical training programs are available?',
    answer: 'We offer enterprise-level training in SAP Basis Security, SAP GRC 12.0 Access Control, Cloud & DevOps Engineering, Full-Stack QA Engineering, and Python Automation. All programs are engineered around production standards.'
  },
  {
    category: 'Training & Development',
    question: 'Does training include practical learning?',
    answer: 'Yes, 80% of program time is dedicated to hands-on lab immersion. Learners receive 24/7 access to live SAP systems, AWS cloud environments, and containerized architectures, ensuring practical muscle rather than theoretical memorization.'
  },
  {
    category: 'Training & Development',
    question: 'How can students or professionals enquire about programs?',
    answer: 'You can submit an inquiry through our contact form, call our advisory desk directly at +91 79954 83137, or email info@varnithglobal.com. We provide free syllabus consultations and sample lab demonstrations.'
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="bg-[#F8FAFC] py-16 sm:py-20 lg:py-24 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="text-xs font-bold tracking-widest text-[#0066CC] uppercase">
            COMMON QUESTIONS
          </span>

          <h2 className="text-2xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Everything you need to know about our recruitment SLAs, hiring guarantees, and enterprise technical training tracks.
          </p>
        </div>

        {/* Clean Accordion List */}
        <div className="space-y-3">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-lg overflow-hidden transition-all duration-200 shadow-2xs"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#0F172A] hover:text-[#0066CC] transition-colors focus:outline-hidden cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-bold text-[#0066CC] bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-sm">
                      {item.category.includes('HR') ? 'HR' : 'Training'}
                    </span>
                    <span>{item.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#0066CC]' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 bg-slate-50/50">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

