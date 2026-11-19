import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'motion/react';
import { siteData } from '../../data/siteData';

export default function TestimonialSection({
  eyebrow = "CLIENT & CANDIDATE FEEDBACK",
  title = "What Our Partners & Alumni Say",
  description = "Real feedback from enterprise software engineering teams and professionals who achieved career breakthroughs with Varnith."
}) {
  const list = (siteData.testimonials || []).slice(0, 3);

  return (
    <section className="bg-[#F2F3FC] py-16 sm:py-20 lg:py-24 border-b border-[#E2E6F0]">
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

        {/* 3 Simple Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {list.map((item, idx) => (
            <motion.div
              key={item.id || idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.1 }}
              className="bg-white rounded-md p-7 border border-[#E2E6F0] shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-4 text-[#063568]">
                  {[...Array(5)].map((_, sIdx) => (
                    <Star key={sIdx} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm text-[#171717] leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-[#E2E6F0] flex items-center gap-3">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover border border-[#E2E6F0]"
                  />
                )}
                <div>
                  <h4 className="text-sm font-bold text-[#171717]">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#5E6874]">
                    {item.role} {item.course ? `• ${item.course}` : ''}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
