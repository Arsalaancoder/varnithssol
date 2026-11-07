import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  Users, 
  Terminal, 
  Code2, 
  Briefcase, 
  ArrowUpRight, 
  ArrowLeft, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import TextReveal from './motion/TextReveal';

const advantages = [
  {
    id: 'expert-mentors',
    number: '01',
    category: 'INDUSTRY PRACTITIONERS',
    title: 'EXPERT-LED LEARNING',
    badge: '$ 10+ Yrs Corporate Tenure',
    description: 'Learn directly from seasoned industry practitioners with 10+ years of active corporate tenure, breaking down complex enterprise architecture into clear, actionable knowledge.',
    image: '/assets/about_mentor.jpg',
    tag: 'Real Mentors',
    icon: Users,
    link: '/and/about',
  },
  {
    id: 'practical-labs',
    number: '02',
    category: 'LIVE TERMINAL IMMERSION',
    title: '100% PRACTICAL LABS',
    badge: '$ 80% Live Terminal Sandbox',
    description: 'Theory constitutes just 20% of your time. 80% is dedicated to live terminals, real servers, code debugging, and actual enterprise cloud infrastructure.',
    image: '/assets/experience_lab.jpg',
    tag: 'Lab Centric',
    icon: Terminal,
    link: '/and/courses',
  },
  {
    id: 'capstone-projects',
    number: '03',
    category: 'PRODUCTION-GRADE BUILDS',
    title: 'PORTFOLIO CAPSTONES',
    badge: '$ Enterprise Incident Scenarios',
    description: 'Gain genuine capstone experience that demonstrates your capability to solve production incidents and build enterprise architectures for corporate tech rounds.',
    image: '/assets/experience_collab.jpg',
    tag: 'Portfolio Grade',
    icon: Code2,
    link: '/and/courses',
  },
  {
    id: 'placement-synergy',
    number: '04',
    category: 'IN-HOUSE HR CONSULTANCY',
    title: 'CORPORATE PLACEMENT',
    badge: '$ Direct Tech + HR Pipeline',
    description: 'Receive verifiable credentials upon completion and get direct access to our in-house HR consultancy, mock technical interviews, and corporate hiring managers.',
    image: '/assets/team_conf.jpg',
    tag: 'Placement Highway',
    icon: Briefcase,
    link: '/and/hr-services',
  },
];

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % advantages.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + advantages.length) % advantages.length);
  };

  const total = advantages.length;
  const currentAdvantage = advantages[activeIndex];

  // Helper to get card at relative offset in stack
  const getCardAtOffset = (offset) => {
    return advantages[(activeIndex + offset) % total];
  };

  return (
    <section
      id="why-us"
      className="py-20 sm:py-28 px-6 sm:px-12 lg:px-16 bg-[#EAF0E8] overflow-hidden"
    >
      <div className="max-w-[1360px] mx-auto space-y-12 sm:space-y-16">
        {/* Section Heading & Breadcrumb Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#173B2C]/10 pb-8">
          <div className="max-w-2xl space-y-3">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#183629]/10 text-[#183629] text-xs font-bold tracking-widest uppercase"
            >
              <span>THE VARNITH ADVANTAGE</span>
            </motion.div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#183629] font-normal tracking-tight leading-[1.08]">
              <TextReveal
                text="What Makes the Varnith Experience Different?"
                mode="word"
                highlightWord="Different?"
                highlightClassName="italic font-light text-[#DFAE22]"
              />
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-lg text-[#202923]/80 font-light leading-relaxed"
            >
              A balanced ecosystem connecting practical technical education directly with corporate recruitment and placement.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              to="/and/why-us"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#183629] hover:text-[#DFAE22] transition-colors shrink-0 group"
            >
              <span>Explore All 6 Differentiators</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* 2-Column Showcase: Left Interactive Navigator & Right 3D Fanned Card Deck */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Interactive Feature Navigator */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5">
            <span className="text-[11px] uppercase tracking-widest font-bold text-[#737D73] block">
              SELECT ADVANTAGE TO EXPLORE
            </span>

            <div className="space-y-3">
              {advantages.map((adv, idx) => {
                const isActive = idx === activeIndex;
                const IconComponent = adv.icon;

                return (
                  <motion.button
                    key={adv.id}
                    onClick={() => setActiveIndex(idx)}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl sm:rounded-[22px] transition-all flex items-start gap-4 border ${
                      isActive
                        ? 'bg-[#183629] text-white border-[#183629] shadow-lg shadow-[#183629]/20'
                        : 'bg-white/80 hover:bg-white text-[#202923] border-stone-200/80 shadow-xs'
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? 'bg-[#F2C94C] text-[#183629]'
                          : 'bg-[#183629]/10 text-[#183629]'
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span
                          className={`text-[10px] uppercase font-bold tracking-wider ${
                            isActive ? 'text-[#F2C94C]' : 'text-[#737D73]'
                          }`}
                        >
                          {adv.number} • {adv.category}
                        </span>
                        {isActive && (
                          <span className="inline-flex items-center gap-1 text-[10px] uppercase font-semibold text-[#F2C94C] bg-white/10 px-2 py-0.5 rounded-full">
                            <Sparkles className="w-3 h-3" />
                            <span>Active</span>
                          </span>
                        )}
                      </div>

                      <h4
                        className={`font-serif text-lg sm:text-xl font-normal leading-tight truncate ${
                          isActive ? 'text-white' : 'text-[#183629]'
                        }`}
                      >
                        {adv.title}
                      </h4>

                      <p
                        className={`text-xs mt-1.5 line-clamp-2 leading-relaxed font-light ${
                          isActive ? 'text-white/80' : 'text-[#202923]/70'
                        }`}
                      >
                        {adv.description}
                      </p>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Deck Navigation Controls */}
            <div className="flex items-center justify-between pt-3 border-t border-[#173B2C]/10">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full bg-white border border-stone-200 text-[#183629] hover:bg-[#183629] hover:text-[#F2C94C] flex items-center justify-center transition-all shadow-xs"
                  aria-label="Previous advantage"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full bg-white border border-stone-200 text-[#183629] hover:bg-[#183629] hover:text-[#F2C94C] flex items-center justify-center transition-all shadow-xs"
                  aria-label="Next advantage"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono font-semibold text-[#737D73] ml-2">
                  0{activeIndex + 1} / 0{total}
                </span>
              </div>

              <span className="text-[11px] text-[#737D73] italic">
                Click card to flip
              </span>
            </div>
          </div>

          {/* Right Column: Exact 3D Fanned Card Deck matching the attached screenshot */}
          <div className="lg:col-span-7 flex justify-center py-6 sm:py-8 overflow-visible">
            <div className="relative w-full max-w-[390px] sm:max-w-[430px] h-[520px] sm:h-[560px] flex items-center justify-center select-none">
              {/* Back Card (Layer 3: Rotated -14deg, translated left) */}
              {(() => {
                const backCard = getCardAtOffset(2);
                const BackIcon = backCard.icon;
                return (
                  <motion.div
                    key={`back-${backCard.id}`}
                    onClick={() => setActiveIndex((activeIndex + 2) % total)}
                    animate={
                      shouldReduceMotion
                        ? { opacity: 0.4 }
                        : {
                            rotate: -14,
                            x: -36,
                            y: 18,
                            scale: 0.88,
                            opacity: 0.45,
                          }
                    }
                    transition={{ type: 'spring', damping: 25, stiffness: 280 }}
                    className="absolute inset-0 rounded-[32px] sm:rounded-[36px] bg-[#121614] border border-white/10 p-6 sm:p-7 shadow-2xl flex flex-col justify-between cursor-pointer"
                    style={{
                      zIndex: 10,
                      background:
                        'radial-gradient(circle at 50% 12%, rgba(242, 201, 76, 0.08), transparent 60%), #121614',
                    }}
                  >
                    {/* Top bar showing left icon peeking out */}
                    <div className="flex items-center justify-between">
                      <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-[#E5D7BE]">
                        <BackIcon className="w-4 h-4" />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-[#E5D7BE]/40 flex items-center justify-center text-black">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="text-center font-serif text-lg text-white/50 tracking-wider">
                      {backCard.title}
                    </div>
                    <div className="h-44 rounded-2xl bg-black/40" />
                    <div className="h-6" />
                  </motion.div>
                );
              })()}

              {/* Middle Card (Layer 2: Rotated -7deg, translated left) */}
              {(() => {
                const middleCard = getCardAtOffset(1);
                const MiddleIcon = middleCard.icon;
                return (
                  <motion.div
                    key={`middle-${middleCard.id}`}
                    onClick={() => setActiveIndex((activeIndex + 1) % total)}
                    animate={
                      shouldReduceMotion
                        ? { opacity: 0.7 }
                        : {
                            rotate: -7,
                            x: -18,
                            y: 9,
                            scale: 0.94,
                            opacity: 0.75,
                          }
                    }
                    transition={{ type: 'spring', damping: 25, stiffness: 280 }}
                    className="absolute inset-0 rounded-[32px] sm:rounded-[36px] bg-[#121614] border border-white/10 p-6 sm:p-7 shadow-2xl flex flex-col justify-between cursor-pointer"
                    style={{
                      zIndex: 20,
                      background:
                        'radial-gradient(circle at 50% 12%, rgba(242, 201, 76, 0.12), transparent 60%), #121614',
                    }}
                  >
                    {/* Top bar showing left icon peeking out */}
                    <div className="flex items-center justify-between">
                      <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-[#E5D7BE]">
                        <MiddleIcon className="w-4 h-4" />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-[#E5D7BE]/70 flex items-center justify-center text-[#183629]">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="text-center font-serif text-xl text-white/70 tracking-wider">
                      {middleCard.title}
                    </div>
                    <div className="h-44 rounded-2xl bg-black/40" />
                    <div className="h-6" />
                  </motion.div>
                );
              })()}

              {/* Front Active Card (Layer 1: Upright, Interactive, Exactly matching reference screenshot) */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`front-${currentAdvantage.id}`}
                  initial={{ opacity: 0, scale: 0.92, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0, rotate: 0, x: 0 }}
                  exit={{ opacity: 0, scale: 0.92, y: -15 }}
                  transition={{
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -4, transition: { duration: 0.25 } }}
                  onClick={handleNext}
                  className="absolute inset-0 rounded-[32px] sm:rounded-[36px] bg-[#121614] border border-white/10 p-6 sm:p-7 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.7)] flex flex-col justify-between cursor-pointer group"
                  style={{
                    zIndex: 30,
                    background:
                      'radial-gradient(circle at 50% 12%, rgba(242, 201, 76, 0.16), transparent 60%), #121614',
                  }}
                >
                  {/* Top Bar: Left Pictogram Icon & Right Circular Beige Arrow Button */}
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-[#E5D7BE]">
                      {React.createElement(currentAdvantage.icon, {
                        className: 'w-4.5 h-4.5 text-[#E5D7BE]',
                      })}
                    </div>

                    <Link
                      to={currentAdvantage.link}
                      onClick={(e) => e.stopPropagation()}
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#E5D7BE] text-[#183629] flex items-center justify-center shadow-md hover:bg-[#F2C94C] hover:scale-105 transition-all"
                      aria-label={`Explore ${currentAdvantage.title}`}
                    >
                      <ArrowUpRight className="w-4.5 h-4.5" />
                    </Link>
                  </div>

                  {/* Centered Large Title in Serif Typography */}
                  <div className="text-center my-2 sm:my-3">
                    <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal uppercase tracking-[0.18em]">
                      {currentAdvantage.title}
                    </h3>
                  </div>

                  {/* Central Media Container: 16:10 Rounded Rectangle with Play Button & Frosted Pill */}
                  <div className="relative w-full rounded-2xl overflow-hidden aspect-[16/10] bg-black/50 border border-white/10 shadow-inner group-hover:border-white/20 transition-all">
                    <img
                      src={currentAdvantage.image}
                      alt={currentAdvantage.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent pointer-events-none" />

                    {/* Bottom Frosted Pill Badge (e.g. '$ 10+ Yrs Corporate Tenure') */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/65 backdrop-blur-md text-white/95 text-[10px] sm:text-[11px] font-medium border border-white/15 inline-flex items-center gap-1.5 shadow-md whitespace-nowrap">
                      <span>{currentAdvantage.badge}</span>
                    </div>
                  </div>

                  {/* Bottom Text Description */}
                  <div className="text-center px-1 sm:px-2 mt-3">
                    <p className="text-xs sm:text-[13px] text-stone-300/85 font-light leading-relaxed line-clamp-3">
                      {currentAdvantage.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
