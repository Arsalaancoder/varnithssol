import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function ServiceGrid({
  eyebrow = "WHAT WE PROVIDE",
  title = "Our Range of Services",
  description = "Tailored solutions built around modern engineering teams and enterprise technology standards.",
  services = [],
  id = "services"
}) {
  return (
    <section id={id} className="bg-[#F2F3FC] py-16 sm:py-20 lg:py-24 border-b border-[#E2E6F0]">
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

        {/* 2 or 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="bg-white rounded-md p-7 border border-[#E2E6F0] shadow-xs hover:border-[#063568] hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  {/* Small Navy Blue Square Icon Container */}
                  <div className="w-11 h-11 rounded-sm bg-[#063568] text-white flex items-center justify-center mb-5 shrink-0 group-hover:bg-[#04274d] transition-colors">
                    {Icon && <Icon className="w-5 h-5" />}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#171717] mb-2.5 group-hover:text-[#063568] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#5E6874] leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Small Arrow Link */}
                <div className="pt-2 border-t border-[#E2E6F0]/60">
                  <a
                    href={item.link || '#enquiry'}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#063568] group-hover:text-[#04274d] transition-colors"
                  >
                    <span>{item.actionText || 'Learn More'}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
