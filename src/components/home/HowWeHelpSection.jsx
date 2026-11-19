import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from 'framer-motion';
import { Search, Compass, Layers, HeartHandshake, ChevronRight, MousePointer } from 'lucide-react';
import { siteData } from '../../data/siteData';

export default function HowWeHelpSection() {
  const [activeStep, setActiveStep] = useState(1);
  const containerRef = useRef(null);
  const stepRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const stepIcons = [Search, Compass, Layers, HeartHandshake];

  // Scroll-driven progress tracking across the section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 60%", "end 60%"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 24,
    restDelta: 0.001
  });

  // Map scroll progress directly to line height from Node 1 (4%) to Node 4 (100%)
  const lineHeight = useTransform(
    smoothProgress,
    [0, 0.28, 0.62, 0.95],
    ["4%", "32.4%", "66.1%", "100%"]
  );

  // Automatically update active step based on scroll position
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.24) {
      setActiveStep(1);
    } else if (latest < 0.55) {
      setActiveStep(2);
    } else if (latest < 0.85) {
      setActiveStep(3);
    } else {
      setActiveStep(4);
    }
  });

  // Clicking a step scrolls that step smoothly into the active center viewport
  const handleStepClick = (stepIndex) => {
    setActiveStep(stepIndex);
    const targetRef = stepRefs[stepIndex - 1];
    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section 
      ref={containerRef}
      className="bg-[#F8FAFC] py-20 sm:py-28 border-b border-slate-200 overflow-hidden relative"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Outer White Card Container matching process reference */}
        <div className="bg-white rounded-[32px] sm:rounded-[40px] p-6 sm:p-12 lg:p-16 border border-slate-100 shadow-xl shadow-slate-200/40 relative">
          
          {/* Section Header with Decorative Geometric Accents */}
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10 sm:mb-14 relative">
            
            {/* Bluspark Yellow Circle Geometric Accent */}
            <div className="hidden sm:block absolute -top-4 -left-6 w-5 h-5 rounded-full bg-[#FBBF24] opacity-90 shadow-xs pointer-events-none" />
            
            {/* Bluspark Right Side Geometric Accents */}
            <div className="hidden sm:block absolute -top-2 -right-8 pointer-events-none">
              <div className="w-5 h-5 rounded-full bg-[#FBBF24] mb-1.5 ml-auto opacity-90" />
              <div className="w-7 h-4 rounded-b-full bg-[#056EB5] opacity-90" />
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-[11px] font-bold text-slate-500 uppercase tracking-widest font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#056EB5] animate-pulse"></span>
              <span>004 • PROCESS</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0D5C91] tracking-tight font-['Familjen_Grotesk']">
              How We Work
            </h2>
            
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-['Familjen_Grotesk']">
              A proven four-stage engagement process designed to solve complex software hiring and SAP skills gaps — transparently, reliably, and strategically.
            </p>

            {/* Scroll Indicator & Step Pills */}
            <div className="pt-3 flex flex-wrap items-center justify-center gap-2">
              <div className="inline-flex items-center gap-1.5 text-xs text-slate-400 font-medium mr-2 font-['Familjen_Grotesk']">
                <MousePointer className="w-3.5 h-3.5 text-[#056EB5]" />
                <span>Scroll to progress through stages</span>
              </div>

              {siteData.howWeHelp.map((item, idx) => {
                const stepNum = idx + 1;
                const isActive = activeStep === stepNum;
                return (
                  <button
                    key={item.step}
                    type="button"
                    onClick={() => handleStepClick(stepNum)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold font-['Familjen_Grotesk'] transition-all flex items-center gap-1.5 cursor-pointer ${
                      isActive
                        ? 'bg-[#056EB5] text-white shadow-xs scale-105'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                    }`}
                  >
                    <span>0{stepNum}</span>
                    <span className="hidden sm:inline font-normal opacity-90">{item.badge || item.title.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Central Vertical Process Bar Timeline */}
          <div className="relative">
            
            {/* Desktop Center Vertical Track (Runs exactly from Node 1 center to Node 4 center) */}
            <div className="hidden md:block absolute left-1/2 top-[91px] h-[672px] w-[2px] -translate-x-1/2 bg-slate-200/60 z-0">
              {/* Dynamic Scroll-Driven Animated Progress Beam */}
              <motion.div
                style={{ height: lineHeight }}
                className="w-full bg-gradient-to-b from-[#056EB5] via-[#127DC4] to-[#7C3AED] relative rounded-full"
              >
                {/* Glowing beacon dot at current progress point */}
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#7C3AED] shadow-[0_0_12px_rgba(124,58,237,0.9)] ring-2 ring-white" />
              </motion.div>
            </div>

            {/* Mobile Vertical Track */}
            <div className="md:hidden absolute left-[31px] top-[46px] bottom-[46px] w-[2px] bg-slate-200/60 z-0">
              <motion.div
                style={{ height: lineHeight }}
                className="w-full bg-gradient-to-b from-[#056EB5] via-[#127DC4] to-[#7C3AED] relative rounded-full"
              >
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#7C3AED] shadow-[0_0_12px_rgba(124,58,237,0.9)] ring-2 ring-white" />
              </motion.div>
            </div>

            {/* Step Rows */}
            <div className="space-y-6 sm:space-y-8 relative z-10">
              {siteData.howWeHelp.map((item, idx) => {
                const IconComponent = stepIcons[idx] || Search;
                const stepNum = idx + 1;
                const isActive = activeStep === stepNum;
                const isPast = activeStep > stepNum;
                const isEven = idx % 2 === 1;

                return (
                  <div
                    key={item.step}
                    ref={stepRefs[idx]}
                    onClick={() => handleStepClick(stepNum)}
                    className={`cursor-pointer transition-all duration-300 rounded-[28px] sm:rounded-[36px] ${
                      isActive
                        ? 'bg-[#F4F6F8] border border-slate-200/70 shadow-xs p-3.5 sm:p-5'
                        : 'p-3.5 sm:p-5 hover:bg-slate-50/70 border border-transparent'
                    }`}
                  >
                    {/* Desktop Alternating Grid */}
                    <div className="hidden md:grid md:grid-cols-12 md:gap-8 items-center">
                      
                      {/* Left Column (5 Cols) */}
                      <div className="col-span-5 text-right flex justify-end items-center">
                        {isEven ? (
                          /* Even Step: Content on Left */
                          <div className="space-y-1 pr-2">
                            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                              PHASE 0{stepNum}
                            </div>
                            <h3 className={`text-lg font-bold font-['Familjen_Grotesk'] transition-colors ${
                              isActive ? 'text-[#0D5C91]' : 'text-slate-900'
                            }`}>
                              {item.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm ml-auto font-['Familjen_Grotesk']">
                              {item.description}
                            </p>
                          </div>
                        ) : (
                          /* Odd Step: Icon + Step Badge on Left */
                          <div className="flex items-center gap-3.5 justify-end">
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                              isActive
                                ? 'bg-slate-900 text-white shadow-md scale-105'
                                : 'bg-white text-slate-700 border border-slate-200/70 shadow-2xs'
                            }`}>
                              <IconComponent className="w-5 h-5" />
                            </div>
                            <span className={`text-xs font-mono font-bold rounded-full px-2.5 py-1 border transition-colors ${
                              isActive
                                ? 'bg-white text-[#056EB5] border-[#056EB5]/30 shadow-2xs font-extrabold'
                                : 'bg-white text-slate-500 border-slate-200/60 shadow-2xs'
                            }`}>
                              0{stepNum}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Center Node (Connecting to vertical line) */}
                      <div className="col-span-2 flex justify-center items-center relative">
                        <div className={`rounded-full transition-all duration-300 flex items-center justify-center ${
                          isActive
                            ? 'w-5 h-5 bg-gradient-to-tr from-[#056EB5] to-[#7C3AED] ring-4 ring-blue-100 shadow-[0_0_16px_rgba(5,110,181,0.8)] scale-110'
                            : isPast
                            ? 'w-4 h-4 bg-[#056EB5] ring-2 ring-white shadow-2xs'
                            : 'w-3.5 h-3.5 bg-white border-2 border-slate-300'
                        }`}>
                          {isActive && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </div>
                      </div>

                      {/* Right Column (5 Cols) */}
                      <div className="col-span-5 text-left flex justify-start items-center">
                        {!isEven ? (
                          /* Odd Step: Content on Right */
                          <div className="space-y-1 pl-2">
                            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                              PHASE 0{stepNum}
                            </div>
                            <h3 className={`text-lg font-bold font-['Familjen_Grotesk'] transition-colors ${
                              isActive ? 'text-[#0D5C91]' : 'text-slate-900'
                            }`}>
                              {item.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm mr-auto font-['Familjen_Grotesk']">
                              {item.description}
                            </p>
                          </div>
                        ) : (
                          /* Even Step: Icon + Step Badge on Right */
                          <div className="flex items-center gap-3.5 justify-start">
                            <span className={`text-xs font-mono font-bold rounded-full px-2.5 py-1 border transition-colors ${
                              isActive
                                ? 'bg-white text-[#056EB5] border-[#056EB5]/30 shadow-2xs font-extrabold'
                                : 'bg-white text-slate-500 border-slate-200/60 shadow-2xs'
                            }`}>
                              0{stepNum}
                            </span>
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                              isActive
                                ? 'bg-slate-900 text-white shadow-md scale-105'
                                : 'bg-white text-slate-700 border border-slate-200/70 shadow-2xs'
                            }`}>
                              <IconComponent className="w-5 h-5" />
                            </div>
                          </div>
                        )}
                      </div>

                    </div>

                    {/* Mobile Layout (Stacked with Timeline along left) */}
                    <div className="md:hidden flex items-start gap-3.5 pl-1">
                      <div className="relative z-10 flex flex-col items-center">
                        <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 shadow-sm transition-all ${
                          isActive
                            ? 'bg-slate-900 text-white shadow-md scale-105'
                            : 'bg-white text-slate-700 border border-slate-200/70'
                        }`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className={`text-[10px] font-mono font-bold rounded-full px-2 py-0.5 mt-1 border ${
                          isActive
                            ? 'bg-[#056EB5] text-white border-[#056EB5]'
                            : 'bg-slate-100 text-slate-500 border-slate-200/60'
                        }`}>
                          0{stepNum}
                        </span>
                      </div>
                      <div className="flex-1 pt-0.5 space-y-1">
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                          PHASE 0{stepNum}
                        </div>
                        <h3 className={`text-base font-bold font-['Familjen_Grotesk'] ${
                          isActive ? 'text-[#0D5C91]' : 'text-slate-900'
                        }`}>
                          {item.title}
                        </h3>
                        <p className="text-xs text-slate-500 leading-relaxed font-['Familjen_Grotesk']">
                          {item.description}
                        </p>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>

          {/* Bottom Active Phase Notice */}
          <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-['Familjen_Grotesk'] gap-2">
            <div>
              <span>Active stage: </span>
              <span className="font-semibold text-slate-700">
                0{activeStep} • {siteData.howWeHelp[activeStep - 1]?.title}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-500">
              <span>Scroll down through page to progress through all 4 stages</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#056EB5]" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}