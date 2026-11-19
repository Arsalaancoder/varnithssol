import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function IntroductionCollage({
  eyebrow,
  title,
  leadParagraph,
  secondaryDescription,
  highlights = [],
  ctaText = 'Learn More',
  ctaHref = '#services',
  primaryImage = '/assets/experience_collab.jpg',
  secondaryImage = '/assets/team_conf.jpg'
}) {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 border-b border-[#E2E6F0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Image Collage (~45% width) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Image */}
              <div className="rounded-md overflow-hidden border border-[#E2E6F0] shadow-md bg-white">
                <img
                  src={primaryImage}
                  alt={title}
                  className="w-full h-72 sm:h-96 object-cover"
                />
              </div>

              {/* Secondary Overlapping Image */}
              {secondaryImage && (
                <div className="absolute -bottom-8 -right-4 sm:-right-8 w-44 sm:w-56 h-36 sm:h-44 rounded-md overflow-hidden border-4 border-white shadow-lg hidden sm:block bg-white">
                  <img
                    src={secondaryImage}
                    alt="Corporate Meeting"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Decorative Accent Block */}
              <div className="absolute -top-3 -left-3 w-20 h-20 bg-[#F2F3FC] border border-[#E2E6F0] rounded-sm -z-10" />
            </div>
          </motion.div>

          {/* Right Side: Text Content (~55% width) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 space-y-6 pt-6 lg:pt-0"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#063568]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#063568]">
                {eyebrow}
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#171717] tracking-tight leading-tight">
              {title}
            </h2>

            {/* Lead Paragraph */}
            <p className="text-base sm:text-lg font-semibold text-[#171717] leading-relaxed">
              {leadParagraph}
            </p>

            {/* Secondary Description */}
            <p className="text-sm sm:text-base text-[#5E6874] leading-relaxed">
              {secondaryDescription}
            </p>

            {/* Highlights List */}
            {highlights.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#063568] shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-[#171717]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Lumintu Simple Black Rectangular Learn More Button */}
            <div className="pt-4">
              <a
                href={ctaHref}
                className="inline-flex items-center gap-2 bg-[#171717] hover:bg-[#063568] text-white px-7 py-3 rounded-sm font-semibold text-sm transition-colors shadow-xs"
              >
                <span>{ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

