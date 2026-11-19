import React from 'react';
import { ArrowRight, Award, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function CorporateHero({
  eyebrow,
  heading,
  description,
  primaryBtn = { text: 'Explore Services', href: '#services' },
  secondaryBtn = { text: 'Talk to Us', href: '#enquiry' },
  mainImage = '/assets/hr_talent.jpg',
  secondaryImage = '/assets/experience_discussion.jpg',
  badgeNumber = '14-Day SLA',
  badgeLabel = 'Verified Talent Delivery'
}) {
  return (
    <section className="bg-[#F2F3FC] py-16 sm:py-20 lg:py-24 border-b border-[#E2E6F0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Content */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#063568]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#063568]">
                {eyebrow}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-[#171717] leading-[1.15] tracking-tight">
              {heading}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#5E6874] leading-relaxed max-w-xl">
              {description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={primaryBtn.href}
                className="bg-[#063568] hover:bg-[#04274d] text-white px-7 py-3 rounded-sm font-semibold text-sm transition-colors shadow-xs inline-flex items-center gap-2"
              >
                <span>{primaryBtn.text}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={secondaryBtn.href}
                className="bg-white border border-[#063568] text-[#063568] hover:bg-[#063568] hover:text-white px-7 py-3 rounded-sm font-semibold text-sm transition-colors shadow-xs"
              >
                <span>{secondaryBtn.text}</span>
              </a>
            </div>

            {/* Quality Checklist under CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-[#5E6874] font-medium border-t border-[#E2E6F0]/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#063568]" />
                <span>Single Point of Contact</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#063568]" />
                <span>Sandbox Vetted Only</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#063568]" />
                <span>Enterprise SLA Guaranteed</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Professional Corporate Image Composition */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-md sm:max-w-lg">
              
              {/* Primary Main Rectangular Image */}
              <div className="rounded-md overflow-hidden border border-[#E2E6F0] shadow-md bg-white">
                <img
                  src={mainImage}
                  alt={heading}
                  className="w-full h-80 sm:h-96 object-cover"
                />
              </div>

              {/* Secondary Overlapping Rectangular Image */}
              {secondaryImage && (
                <div className="absolute -bottom-8 -left-6 sm:-left-10 w-44 sm:w-56 h-36 sm:h-44 rounded-md overflow-hidden border-4 border-white shadow-lg hidden sm:block bg-white">
                  <img
                    src={secondaryImage}
                    alt="Varnith Team in Action"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Small Information Badge matching Lumintu Reference */}
              <div className="absolute -top-4 -right-4 bg-white border border-[#E2E6F0] rounded-md p-3.5 shadow-md flex items-center gap-3">
                <div className="w-9 h-9 rounded-sm bg-[#063568] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#171717]">{badgeNumber}</div>
                  <div className="text-[11px] text-[#5E6874]">{badgeLabel}</div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
