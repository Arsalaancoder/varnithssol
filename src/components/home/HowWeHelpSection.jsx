import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Workflow, 
  Code2, 
  CheckCircle2, 
  Rocket, 
  MousePointer, 
  ChevronRight 
} from 'lucide-react';
import { siteData } from '../../data/siteData';

const stepIcons = [Search, Workflow, Code2, CheckCircle2, Rocket];

export default function HowWeHelpSection() {
  const [activeStep, setActiveStep] = useState(1);
  const containerRef = useRef(null);
  const stepRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
  const totalSteps = siteData.howWeHelp.length; // 5 steps

  // Scroll detection: Use IntersectionObserver to update activeStep when scrolling
  useEffect(() => {
    const observers = [];

    stepRefs.forEach((ref, index) => {
      if (!ref.current) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.45) {
              setActiveStep(index + 1);
            }
          });
        },
        {
          rootMargin: '-20% 0px -20% 0px',
          threshold: [0.45, 0.7]
        }
      );

      observer.observe(ref.current);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [totalSteps]);

  // Click on a step or step pill: set activeStep immediately and scroll to it
  const handleStepClick = (stepIndex) => {
    setActiveStep(stepIndex);
    const targetRef = stepRefs[stepIndex - 1];
    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Exact progress percentage: Step 1 = 0%, Step 2 = 25%, Step 3 = 50%, Step 4 = 75%, Step 5 = 100%
  const progressPercent = totalSteps > 1 ? ((activeStep - 1) / (totalSteps - 1)) * 100 : 0;

  return (
    <section 
      ref={containerRef}
      className="bg-[#F8FAFC] py-16 sm:py-24 lg:py-28 border-b border-slate-200 overflow-hidden relative"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Outer White Card Container matching process reference */}
        <div className="bg-white rounded-[32px] sm:rounded-[40px] p-6 sm:p-12 lg:p-16 border border-slate-100 shadow-xl shadow-slate-200/40 relative">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16 relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-[11px] font-bold text-slate-500 uppercase tracking-widest font-mono">
              <span>004 • PROCESS</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0D5C91] tracking-tight font-['Familjen_Grotesk']">
              How We Work
            </h2>
            
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-['Familjen_Grotesk']">
              A proven process designed to transform complex workflows into scalable systems — efficiently and strategically.
            </p>

            {/* Clickable Step Pills */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
              <div className="inline-flex items-center gap-1.5 text-xs text-slate-400 font-medium mr-2 font-['Familjen_Grotesk']">
                <MousePointer className="w-3.5 h-3.5 text-[#056EB5]" />
                <span>Click or scroll stages:</span>
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
                    <span className="hidden sm:inline font-normal opacity-90">{item.badge}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Central Vertical Process Bar Timeline */}
          <div className="relative">
            
            {/* Desktop Center Vertical Track (Runs directly between Node 1 center and Node 5 center) */}
            <div className="hidden md:block absolute left-1/2 top-7 bottom-7 w-[2px] -translate-x-1/2 bg-slate-200/80 z-0">
              {/* Dynamic Animated Progress Beam */}
              <motion.div
                animate={{ height: `${progressPercent}%` }}
                transition={{ type: "spring", stiffness: 140, damping: 22 }}
                className="w-full bg-gradient-to-b from-[#056EB5] via-[#127DC4] to-[#7C3AED] relative rounded-full"
              >
                {/* Glowing beacon dot at current progress point */}
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#7C3AED] shadow-[0_0_14px_rgba(124,58,237,0.95)] ring-2 ring-white" />
              </motion.div>
            </div>

            {/* Mobile Vertical Track along left side */}
            <div className="md:hidden absolute left-[31px] top-6 bottom-6 w-[2px] bg-slate-200/80 z-0">
              <motion.div
                animate={{ height: `${progressPercent}%` }}
                transition={{ type: "spring", stiffness: 140, damping: 22 }}
                className="w-full bg-gradient-to-b from-[#056EB5] via-[#127DC4] to-[#7C3AED] relative rounded-full"
              >
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#7C3AED] shadow-[0_0_14px_rgba(124,58,237,0.95)] ring-2 ring-white" />
              </motion.div>
            </div>

            {/* Step Rows */}
            <div className="space-y-4 sm:space-y-6 relative z-10">
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
                    className={`cursor-pointer transition-all duration-300 rounded-[24px] sm:rounded-[32px] ${
                      isActive
                        ? 'bg-[#F1F3F5] border border-slate-200/80 shadow-xs p-3.5 sm:p-5'
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
                            <h3 className={`text-base sm:text-lg font-bold font-['Familjen_Grotesk'] transition-colors ${
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
                                : 'bg-white text-slate-700 border border-slate-200/80 shadow-2xs'
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

                      {/* Center Node (Connecting directly to the vertical progress line) */}
                      <div className="col-span-2 flex justify-center items-center relative">
                        <div className={`rounded-full transition-all duration-300 flex items-center justify-center ${
                          isActive
                            ? 'w-5 h-5 bg-gradient-to-tr from-[#056EB5] to-[#7C3AED] ring-4 ring-blue-100 shadow-[0_0_16px_rgba(5,110,181,0.85)] scale-110'
                            : isPast
                            ? 'w-4 h-4 bg-[#056EB5] ring-2 ring-white shadow-2xs'
                            : 'w-3.5 h-3.5 bg-white border-2 border-slate-300'
                        }`}>
                          {isActive && <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />}
                        </div>
                      </div>

                      {/* Right Column (5 Cols) */}
                      <div className="col-span-5 text-left flex justify-start items-center">
                        {!isEven ? (
                          /* Odd Step: Content on Right */
                          <div className="space-y-1 pl-2">
                            <h3 className={`text-base sm:text-lg font-bold font-['Familjen_Grotesk'] transition-colors ${
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
                                : 'bg-white text-slate-700 border border-slate-200/80 shadow-2xs'
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
                            : 'bg-white text-slate-700 border border-slate-200/80'
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
          <div className="mt-8 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-['Familjen_Grotesk'] gap-2">
            <div>
              <span>Active stage: </span>
              <span className="font-semibold text-slate-700">
                0{activeStep} • {siteData.howWeHelp[activeStep - 1]?.title}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-500">
              <span>Progress updates automatically on scroll or click</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#056EB5]" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
