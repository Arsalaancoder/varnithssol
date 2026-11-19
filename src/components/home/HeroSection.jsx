import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <header className="relative bg-[#EDF3F5] pt-8 pb-16 lg:pt-12 lg:pb-24 overflow-hidden">
      {/* Subtle geometric watermark decoration at bottom-left matching reference */}
      <img
        src="/assets/bluspark-decoration.webp"
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 left-0 pointer-events-none select-none opacity-30 z-0 max-w-[500px] w-full"
      />

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">

          {/* Left Column: approximately 48% (lg:col-span-6) */}
          <motion.div
            className="lg:col-span-6 flex flex-col justify-start items-start lg:pt-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            {/* Trust Indicator Eyebrow with Award Badge Icon */}
            <div className="flex items-center gap-2.5 text-[#5A5A5A] text-base mb-6 font-['Familjen_Grotesk'] font-normal">
              <img
                src="/assets/badge.svg"
                alt=""
                className="w-5 h-5 shrink-0 opacity-80"
              />
              <span>Recruitment &amp; SAP Training</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-['Familjen_Grotesk'] text-[#0D5C91] text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-medium leading-[1.2] tracking-tight mb-6">
              We find people Talent Leaders
              We grow skills Careers Confidence
            </h1>

            {/* Supporting Description */}
            <p className="font-['Familjen_Grotesk'] text-[#5F5F5F] text-base sm:text-lg lg:text-[18px] leading-[1.55] max-w-xl mb-9">
              Behind every good team is a good hire, and behind every good career is the right skill. We help software organisations find their people, and help people build the skills to grow.
            </p>

            {/* Two Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/hire"
                className="inline-flex items-center justify-center font-['Familjen_Grotesk'] text-[17px] text-white bg-[#056EB5] hover:bg-[#045992] rounded-full px-7 py-3.5 min-h-[50px] transition-all duration-200 hover:-translate-y-0.5 shadow-xs font-normal"
              >
                I'm hiring
              </Link>
              <Link
                to="/academy"
                className="inline-flex items-center justify-center font-['Familjen_Grotesk'] text-[17px] text-white bg-[#269C85] hover:bg-[#1f826f] rounded-full px-7 py-3.5 min-h-[50px] transition-all duration-200 hover:-translate-y-0.5 shadow-xs font-normal"
              >
                I want to upskill
              </Link>
            </div>
          </motion.div>

          {/* Right Column: approximately 52% (lg:col-span-6) */}
          <motion.div
            className="lg:col-span-6 relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
          >
            <div className="w-full max-w-[580px]">
              <img
                src="/assets/varnith-hero-mosaic.png"
                alt="Varnith Technologies HR and Technology Practice"
                className="w-full h-auto object-contain select-none block"
                loading="eager"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </header>
  );
}
