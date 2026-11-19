import React from 'react';
import { Award } from 'lucide-react';
import { motion } from 'motion/react';

export default function NavyFeatureSection({
  eyebrow = "WHY CHOOSE US",
  heading = "Why Businesses Choose Varnith",
  benefits = [],
  image = "/assets/experience_collab.jpg",
  badgeTitle = "10+ Years",
  badgeSubtitle = "Corporate Experience"
}) {
  return (
    <section className="bg-[#063568] text-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Benefits & Details */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white/70" />
                <span className="text-xs font-bold uppercase tracking-wider text-white/80">
                  {eyebrow}
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-tight">
                {heading}
              </h2>
            </div>

            {/* Benefit Items */}
            <div className="space-y-6">
              {benefits.map((b, idx) => {
                const Icon = b.icon;
                return (
                  <div key={idx} className="flex items-start gap-4">
                    {/* Small Square Icon Container */}
                    <div className="w-10 h-10 rounded-sm bg-white/10 border border-white/15 text-white flex items-center justify-center shrink-0 mt-0.5">
                      {Icon && <Icon className="w-5 h-5" />}
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-base sm:text-lg font-bold text-white">
                        {b.title}
                      </h3>
                      <p className="text-sm text-white/80 leading-relaxed max-w-xl">
                        {b.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Rectangular Image Composition */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-md sm:max-w-lg">
              {/* Main Image */}
              <div className="rounded-md overflow-hidden border-2 border-white/20 shadow-2xl bg-[#04274d]">
                <img
                  src={image}
                  alt={heading}
                  className="w-full h-80 sm:h-96 object-cover"
                />
              </div>

              {/* Small White Overlay Information Panel */}
              <div className="absolute -bottom-6 -left-6 sm:-left-8 bg-white text-[#171717] rounded-md p-4 sm:p-5 shadow-xl border border-[#E2E6F0] flex items-center gap-3.5 max-w-xs">
                <div className="w-10 h-10 rounded-sm bg-[#063568] text-white flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-base font-extrabold text-[#063568] leading-tight">
                    {badgeTitle}
                  </div>
                  <div className="text-xs text-[#5E6874] font-medium leading-tight">
                    {badgeSubtitle}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
