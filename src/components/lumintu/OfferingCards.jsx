import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function OfferingCards({
  eyebrow = "ENGAGEMENT MODELS",
  title = "Flexible Offerings Built for Scale",
  description = "Select the collaboration model that matches your hiring roadmap or technical development goals.",
  offerings = []
}) {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 border-b border-[#E2E6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#063568]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#063568]">
              {eyebrow}
            </span>
            <span className="w-2 h-2 rounded-full bg-[#063568]" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717] tracking-tight">
            {title}
          </h2>

          <p className="text-sm sm:text-base text-[#5E6874] leading-relaxed">
            {description}
          </p>
        </div>

        {/* 3-Column Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {offerings.map((card, idx) => {
            const isFeatured = card.isFeatured || idx === 1;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`rounded-md p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  isFeatured
                    ? 'bg-[#063568] text-white shadow-xl lg:-translate-y-2 border-2 border-[#063568]'
                    : 'bg-white text-[#171717] border border-[#E2E6F0] shadow-xs hover:border-[#063568]'
                }`}
              >
                {/* Popular / Featured Badge if center */}
                {isFeatured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#10B981] text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-sm shadow-xs">
                    MOST POPULAR
                  </div>
                )}

                <div>
                  {/* Category Label */}
                  <span className={`text-[11px] font-bold uppercase tracking-wider block mb-2 ${
                    isFeatured ? 'text-white/80' : 'text-[#063568]'
                  }`}>
                    {card.category}
                  </span>

                  {/* Heading */}
                  <h3 className={`text-2xl font-extrabold mb-3 tracking-tight ${
                    isFeatured ? 'text-white' : 'text-[#171717]'
                  }`}>
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm leading-relaxed mb-6 ${
                    isFeatured ? 'text-white/85' : 'text-[#5E6874]'
                  }`}>
                    {card.description}
                  </p>

                  <div className={`h-px w-full my-6 ${isFeatured ? 'bg-white/20' : 'bg-[#E2E6F0]'}`} />

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {card.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          isFeatured ? 'bg-white text-[#063568]' : 'bg-[#063568] text-white'
                        }`}>
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className={isFeatured ? 'text-white/95' : 'text-[#171717]'}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Rectangular CTA Button */}
                <div>
                  <a
                    href={card.ctaHref || '#enquiry'}
                    className={`w-full py-3 px-6 rounded-sm font-semibold text-xs sm:text-sm text-center inline-flex items-center justify-center gap-2 transition-colors cursor-pointer ${
                      isFeatured
                        ? 'bg-white text-[#063568] hover:bg-[#F2F3FC]'
                        : 'bg-[#063568] text-white hover:bg-[#04274d]'
                    }`}
                  >
                    <span>{card.ctaText || 'Enquire Now'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

