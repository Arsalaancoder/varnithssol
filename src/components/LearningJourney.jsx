import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  motion, 
  AnimatePresence, 
  useReducedMotion,
  useScroll,
  useTransform,
  useMotionValueEvent
} from 'framer-motion';
import { 
  ChevronRight, 
  ArrowRight, 
  Plus, 
  Shield, 
  Users, 
  Sparkles, 
  CheckCircle2,
  Check,
  Clock
} from 'lucide-react';
import { siteData } from '../data/siteData';

export default function LearningJourney() {
  const [activeCard, setActiveCard] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);
  const pathwayRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll Progress for the 4-Stage Pathway
  const { scrollYProgress: pathwayScrollProgress } = useScroll({
    target: pathwayRef,
    offset: ['start 75%', 'end 50%'],
  });

  const scrollFillHeight = useTransform(pathwayScrollProgress, [0, 1], ['0%', '100%']);

  useMotionValueEvent(pathwayScrollProgress, 'change', (latest) => {
    if (latest < 0.22) {
      setActiveStep(0);
    } else if (latest < 0.52) {
      setActiveStep(1);
    } else if (latest < 0.8) {
      setActiveStep(2);
    } else {
      setActiveStep(3);
    }
  });

  const cards = [
    {
      id: 0,
      tag: "Personal",
      title: "Enterprise Cloud Labs",
      subtitle: "Hands-on virtual workstations and live sandboxes",
      description: "The all-in-one environment for cloud DevOps, enterprise SAP, Python and Data Analysis. Practice on production-grade infrastructure, automate CI/CD pipelines, and debug real-time incidents freely.",
      image: "/assets/lab_student_portrait.jpg",
      bgGradient: "bg-gradient-to-br from-[#EFE8E1] via-[#EAE1D7] to-[#DFD3C5]",
      textColor: "text-[#183629]",
      descColor: "text-[#202923]/80",
      accentPill: "bg-[#F2C94C] text-[#183629]",
      collapsedBg: "bg-gradient-to-b from-[#EFE8E1] to-[#DFD3C5]",
      collapsedText: "text-[#183629]",
      widgetPills: [
        { icon: <Plus className="w-3.5 h-3.5" />, bg: "bg-[#F2C94C] text-[#183629]" },
        { label: "24/7 Labs", bg: "bg-white text-[#183629] font-bold" },
        { icon: <Shield className="w-3.5 h-3.5" />, bg: "bg-stone-100 text-[#183629]" }
      ],
      widgetTitle: "450+ Active Lab Learners",
      link: "/and/courses"
    },
    {
      id: 1,
      tag: "Business",
      title: "Collaborative Sprints",
      subtitle: "Peer war-rooms & agile incident drills",
      description: "Team problem solving structured exactly like high-velocity software engineering sprints. Tackle architectural challenges and master GitOps workflows with fellow peers.",
      image: "/assets/experience_collab.jpg",
      bgGradient: "bg-gradient-to-br from-[#F5D478] via-[#E8B936] to-[#C99818]",
      textColor: "text-[#183629]",
      descColor: "text-[#183629]/90",
      accentPill: "bg-[#183629] text-[#F2C94C]",
      collapsedBg: "bg-gradient-to-b from-[#F2C94C] via-[#E8B936] to-[#C99818]",
      collapsedText: "text-[#183629]",
      widgetPills: [
        { icon: <Sparkles className="w-3.5 h-3.5" />, bg: "bg-[#183629] text-[#F2C94C]" },
        { label: "Agile Sprints", bg: "bg-white text-[#183629] font-bold" },
        { icon: <Users className="w-3.5 h-3.5" />, bg: "bg-white/70 text-[#183629]" }
      ],
      widgetTitle: "Weekly Team Hackathons",
      link: "/and/why-us"
    },
    {
      id: 2,
      tag: "Freelance",
      title: "1-on-1 Mentorship & HR",
      subtitle: "Personal code review & corporate placement",
      description: "Direct guidance from 10+ year IT veterans. Get line-by-line code reviews, system architecture critique, behavioral interview coaching, and fast-track introductions to hiring partners.",
      image: "/assets/about_mentor.jpg",
      bgGradient: "bg-gradient-to-br from-[#1E4D3A] via-[#183629] to-[#0F261C]",
      textColor: "text-white",
      descColor: "text-white/85",
      accentPill: "bg-[#F2C94C] text-[#183629]",
      collapsedBg: "bg-gradient-to-b from-[#183629] via-[#1E4D3A] to-[#102A21]",
      collapsedText: "text-white",
      widgetPills: [
        { icon: <CheckCircle2 className="w-3.5 h-3.5" />, bg: "bg-[#F2C94C] text-[#183629]" },
        { label: "Mock Interviews", bg: "bg-white/20 text-white font-bold" },
        { icon: <Shield className="w-3.5 h-3.5" />, bg: "bg-white/10 text-white" }
      ],
      widgetTitle: "Verified Placement Highway",
      link: "/and/hr-services"
    }
  ];

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="py-20 sm:py-28 px-6 sm:px-12 lg:px-16 bg-[#EAF0E8]"
    >
      <div className="max-w-[1360px] mx-auto space-y-20">
        {/* Section Header with Split-Text Reveal */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-4">
          <div className="max-w-2xl space-y-3">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs uppercase font-bold tracking-widest text-[#183629] block"
            >
              CAMPUS & VIRTUAL LABS
            </motion.span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#183629] font-normal tracking-tight leading-[1.08]">
              <span className="block overflow-hidden py-0.5">
                <motion.span
                  initial={shouldReduceMotion ? false : { y: '100%' }}
                  whileInView={{ y: '0%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block"
                >
                  Discover the reality
                </motion.span>
              </span>
              <span className="block overflow-hidden py-0.5">
                <motion.span
                  initial={shouldReduceMotion ? false : { y: '100%' }}
                  whileInView={{ y: '0%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className="relative inline-block italic font-light text-[#DFAE22]"
                >
                  of practical tech immersion
                  {/* Decorative underline brush */}
                  <svg
                    className="absolute left-0 -bottom-2 w-full h-3 text-[#DFAE22]/60 overflow-visible"
                    viewBox="0 0 260 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 8.5C50 3.5 130 2 257 9"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </motion.span>
              </span>
            </h2>
          </div>

          <div className="max-w-md space-y-5">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="text-xs sm:text-sm text-[#202923]/80 font-light leading-relaxed"
            >
              Master production software environments through interactive cloud workstations, team collaborative sprints, and dedicated 1-on-1 career mentorship — all in one unified Hyderabad platform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to="/and/courses"
                className="inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-[#183629] text-white hover:bg-[#102A21] shadow-md group transition-all"
              >
                <span className="text-xs font-bold uppercase tracking-wider">
                  Explore Virtual Labs
                </span>
                <div className="w-9 h-9 rounded-full bg-white text-[#183629] flex items-center justify-center group-hover:translate-x-0.5 transition-transform shadow-sm">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* 
          Interactive Expandable Cards (Horizontal Accordion on Desktop, Stack on Mobile)
        */}
        <div className="flex flex-col lg:flex-row gap-5 items-stretch min-h-[480px] sm:min-h-[520px]">
          {cards.map((card) => {
            const isExpanded = activeCard === card.id;

            return (
              <motion.div
                key={card.id}
                layout
                onClick={() => setActiveCard(card.id)}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className={`cursor-pointer rounded-[32px] sm:rounded-[36px] overflow-hidden relative shadow-lg transition-all ${
                  isExpanded
                    ? `lg:flex-[3.2] ${card.bgGradient} p-6 sm:p-10 flex flex-col justify-between`
                    : `lg:flex-[0.8] ${card.collapsedBg} p-6 flex flex-col justify-between items-center hover:opacity-95`
                }`}
              >
                {/* COLLAPSED VERTICAL STATE */}
                {!isExpanded ? (
                  <div className="w-full h-full flex flex-col justify-between items-center py-4">
                    <span className="text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-black/10 backdrop-blur-xs text-[#183629]">
                      0{card.id + 1}
                    </span>

                    <div className="my-auto py-8">
                      <p
                        className={`font-serif text-2xl sm:text-3xl font-medium tracking-tight whitespace-nowrap [writing-mode:vertical-rl] rotate-180 ${card.collapsedText}`}
                      >
                        {card.title}
                      </p>
                    </div>

                    <div className="w-10 h-10 rounded-full bg-black/15 flex items-center justify-center text-[#183629] hover:scale-105 transition-transform">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                ) : (
                  /* EXPANDED STATE */
                  <div className="relative z-10 w-full h-full flex flex-col justify-between gap-8">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                      <div className="md:col-span-7 space-y-4">
                        <div className="flex items-center gap-2">
                          <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${card.accentPill}`}>
                            {card.tag}
                          </span>
                          <span className="text-xs uppercase tracking-wider font-semibold text-[#737D73]">
                            Track 0{card.id + 1}
                          </span>
                        </div>

                        <h3 className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight ${card.textColor}`}>
                          {card.title}
                        </h3>

                        <p className={`text-xs sm:text-sm font-light leading-relaxed max-w-lg ${card.descColor}`}>
                          {card.description}
                        </p>
                      </div>

                      <div className="md:col-span-5 relative rounded-[26px] overflow-hidden shadow-md aspect-[4/3] sm:aspect-square group max-h-[300px]">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-cover object-center filter contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pt-4 border-t border-black/10">
                      <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-sm border border-stone-200/80 max-w-sm space-y-3">
                        <div className="flex items-center gap-2">
                          {card.widgetPills.map((pill, idx) => (
                            <div
                              key={idx}
                              className={`px-3 py-1.5 rounded-full text-xs flex items-center gap-1.5 ${pill.bg} shadow-2xs`}
                            >
                              {pill.icon}
                              {pill.label && <span>{pill.label}</span>}
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center gap-3 pt-1">
                          <div className="flex -space-x-2.5 overflow-hidden">
                            <img
                              src="/assets/student_female_1.avif"
                              alt="Alum 1"
                              className="w-7 h-7 rounded-full ring-2 ring-white object-cover"
                            />
                            <img
                              src="/assets/student_male_1.avif"
                              alt="Alum 2"
                              className="w-7 h-7 rounded-full ring-2 ring-white object-cover"
                            />
                            <img
                              src="/assets/student_female_2.avif"
                              alt="Alum 3"
                              className="w-7 h-7 rounded-full ring-2 ring-white object-cover"
                            />
                          </div>
                          <span className="text-xs font-semibold text-[#183629]">
                            {card.widgetTitle}
                          </span>
                        </div>
                      </div>

                      <Link
                        to={card.link}
                        onClick={(e) => e.stopPropagation()}
                        className="w-12 h-12 rounded-full bg-[#183629] text-white flex items-center justify-center hover:bg-[#F2C94C] hover:text-[#183629] transition-all shadow-md shrink-0 self-end"
                        aria-label="Explore track"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* 
          Animated 4-Stage Learning Path with Connecting Scroll Progress (Section 8)
        */}
        <div 
          ref={pathwayRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pt-12 border-t border-[#173B2C]/10"
        >
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs uppercase font-bold tracking-widest text-[#183629]">
              THE 4-STAGE PATHWAY
            </span>
            <h3 className="font-serif text-3xl sm:text-5xl text-[#183629] font-normal tracking-tight leading-[1.1]">
              From First Step to{' '}
              <span className="italic font-light text-[#DFAE22]">Professional Mastery</span>
            </h3>
            <p className="text-base text-[#202923]/80 font-light leading-relaxed">
              Every learner follows a structured progression designed to turn curiosity into industry-grade competence.
            </p>

            {/* Scroll Indicator Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-stone-200 text-xs text-[#183629] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#183629] animate-pulse" />
              <span className="text-[11px] font-semibold text-[#183629]">Live Scroll Timeline Active</span>
            </div>

            {/* Yellow CTA Button */}
            <div className="pt-2">
              <Link
                to="/and/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F2C94C] text-[#183629] text-xs font-bold tracking-wider uppercase hover:bg-[#DFAE22] hover:text-[#102A21] transition-all duration-300 shadow-sm group"
              >
                <span>Plan Your Track</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* 4 Step Cards with Dynamic Scroll Progress Line & Timeline Nodes */}
          <div className="lg:col-span-7 relative">
            {/* Background Track Line */}
            <div className="absolute left-3.5 sm:left-5 top-6 bottom-6 w-0.5 bg-stone-300/80 -z-0">
              {/* Dynamic Scroll Progress Fill */}
              <motion.div
                style={{ height: scrollFillHeight }}
                className="w-full bg-[#183629] rounded-full shadow-[0_0_8px_rgba(24,54,41,0.35)]"
              />
            </div>

            <div className="space-y-4 sm:space-y-5 relative z-10 pl-9 sm:pl-12">
              {siteData.learningStages.map((stage, idx) => {
                const isCompleted = idx < activeStep;
                const isActive = idx === activeStep;
                const phaseLabels = [
                  'Phase 1 • Initial Orientation & Diagnostic',
                  'Phase 2 • Core Skill Building & Live Labs',
                  'Phase 3 • Production Incident Drills & Capstones',
                  'Phase 4 • Certification & Career Launch',
                ];

                return (
                  <div key={stage.step} className="relative">
                    {/* Timeline Node positioned on the vertical line matching reference screenshot */}
                    <div className="absolute left-[-22px] sm:left-[-28px] top-4 sm:top-5 -translate-x-1/2 z-20">
                      {isCompleted ? (
                        <div
                          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#183629] text-[#F2C94C] flex items-center justify-center shadow-md ring-3 sm:ring-4 ring-white"
                          title="Completed Milestone"
                        >
                          <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" />
                        </div>
                      ) : isActive ? (
                        <div
                          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#F2C94C] text-[#183629] flex items-center justify-center shadow-md ring-3 sm:ring-4 ring-[#183629]/20 animate-pulse"
                          title="Active Stage in Progress"
                        >
                          <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
                        </div>
                      ) : (
                        <div
                          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border-2 border-stone-300 text-stone-400 flex items-center justify-center shadow-2xs"
                          title="Upcoming Milestone"
                        >
                          <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[1.8]" />
                        </div>
                      )}
                    </div>

                    {/* Step Card Content — Always visible and smoothly animated on viewport entry */}
                    <motion.div
                      initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.05 }}
                      transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                      onClick={() => setActiveStep(idx)}
                      className={`p-4.5 sm:p-6 rounded-[22px] sm:rounded-[24px] cursor-pointer transition-all duration-300 border ${
                        isActive
                          ? 'bg-white border-[#183629]/40 shadow-lg ring-1 ring-[#183629]/15'
                          : isCompleted
                          ? 'bg-white/85 border-stone-200/90 hover:bg-white shadow-2xs'
                          : 'bg-white/60 border-stone-200/60 hover:bg-white/85'
                      }`}
                    >
                      {/* Phase Eyebrow & Status */}
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className={`text-[10px] uppercase font-bold tracking-widest ${
                          isActive ? 'text-[#DFAE22]' : isCompleted ? 'text-[#183629]' : 'text-[#737D73]'
                        }`}>
                          STAGE {stage.step} • {phaseLabels[idx]}
                        </span>

                        <span className={`text-[10px] font-semibold uppercase px-2 sm:px-2.5 py-0.5 rounded-full shrink-0 ${
                          isCompleted
                            ? 'bg-[#183629]/10 text-[#183629]'
                            : isActive
                            ? 'bg-[#F2C94C]/25 text-[#183629] font-bold'
                            : 'bg-stone-100 text-stone-500'
                        }`}>
                          {isCompleted ? 'Completed' : isActive ? 'Active Phase' : 'Upcoming'}
                        </span>
                      </div>

                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0 flex-1">
                          <h4 className="font-serif text-xl sm:text-2xl text-[#183629] font-normal leading-snug">
                            {stage.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-[#202923]/80 mt-1 font-light leading-relaxed">
                            {stage.description}
                          </p>
                        </div>

                        <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                          isActive ? 'bg-[#183629] text-[#F2C94C] rotate-90' : 'text-[#737D73]'
                        }`}>
                          <ChevronRight className="w-4 h-4" />
                        </div>
                      </div>

                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          >
                            <div className="pt-3.5 mt-3.5 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                              <p className="text-[#202923]/85 font-light leading-relaxed">
                                {stage.detail}
                              </p>
                              <span className="inline-block px-3 py-1 rounded-full bg-[#FEF8E7] text-[#183629] font-semibold tracking-wider uppercase text-[10px] shrink-0 border border-[#F2C94C]/40 self-start sm:self-auto">
                                {stage.tag}
                              </span>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
