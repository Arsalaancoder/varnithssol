import React from 'react';
import { motion } from 'motion/react';

export default function ProcessSection({
  eyebrow = "METHODOLOGY",
  title = "How Our Process Works",
  subtitle = "A structured, reliable sequence delivering verified talent and measurable competency outcomes.",
  steps = [],
  featuredImage = "/assets/experience_discussion.jpg"
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
            {subtitle}
          </p>
        </div>

        {/* 2-Column Process Layout: Left image, right steps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Side: Professional Process Photograph */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-md overflow-hidden border border-[#E2E6F0] shadow-md sticky top-28 bg-[#F2F3FC]">
              <img
                src={featuredImage}
                alt={title}
                className="w-full h-80 sm:h-[480px] object-cover"
              />
              <div className="p-6 bg-white border-t border-[#E2E6F0]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#063568] block mb-1">
                  PREDICTABLE OUTCOMES
                </span>
                <p className="text-xs text-[#5E6874] leading-relaxed">
                  Every stage is monitored with strict quality milestones and SLA accountability.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: 6 Sequential Steps */}
          <div className="lg:col-span-7 space-y-4">
            {steps.map((st, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="bg-[#F2F3FC]/60 hover:bg-[#F2F3FC] border border-[#E2E6F0] rounded-md p-5 sm:p-6 transition-colors flex items-start gap-4 sm:gap-5"
              >
                {/* Number Badge */}
                <div className="w-10 h-10 rounded-sm bg-[#063568] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  {st.num || `0${idx + 1}`}
                </div>

                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-[#171717]">
                    {st.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5E6874] leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
