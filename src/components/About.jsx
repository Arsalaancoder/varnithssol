import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { siteData } from '../data/siteData';
import ImageReveal from './motion/ImageReveal';
import Counter from './motion/Counter';

const darkCards = [
  {
    tag: 'PILLAR 01 • CAMPUS & LABS',
    title: 'Hands-on Hyderabad hub with 100% practical production sandboxes',
    titleColor: 'text-[#C6E252]', // Olive/lime heading matching Card 1 in reference
    body: 'Located in Bhanu Elite, Madhapur. Students spend 80% of curriculum deploying on live enterprise infrastructure, cloud environments, and automated CI/CD pipelines.',
    statValue: 80,
    statSuffix: '% Labs',
    link: '/and/why-us',
    linkText: 'KEEP READING +',
  },
  {
    tag: 'PILLAR 02 • HR PIPELINE',
    title: 'Integrated corporate placement highway & verified enterprise hiring',
    titleColor: 'text-white', // Crisp white heading matching Card 2 in reference
    body: 'Our dual-track advantage bridges technical mastery directly to global employers. Tailored resume building, architectural screenings, and verified corporate introductions.',
    statValue: 14,
    statPrefix: '< ',
    statSuffix: ' Days Hire',
    link: '/and/hr-services',
    linkText: 'KEEP READING +',
  },
  {
    tag: 'PILLAR 03 • MENTORSHIP',
    title: 'Senior architect code reviews & enterprise-grade capstones',
    titleColor: 'text-white', // Crisp white heading matching Card 3 in reference
    body: 'Zero passive video watching. Intimate cohorts where learners receive 1-on-1 code reviews, architectural feedback, and production-ready portfolio development.',
    statValue: 10,
    statSuffix: '+ Yrs Exp',
    link: '/and/courses',
    linkText: 'KEEP READING +',
  },
];

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 sm:py-28 px-6 sm:px-12 lg:px-16 bg-[#EAF0E8]"
    >
      <div className="max-w-[1360px] mx-auto space-y-14 sm:space-y-16">
        {/* Upper Split: Editorial Narrative & Newly Uploaded Progression Illustration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column — Editorial Heading & Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#183629]/10 text-[#183629] text-xs font-bold tracking-widest uppercase"
            >
              <span>ABOUT VARNITH GLOBAL</span>
            </motion.div>

            {/* Split Text Heading with Line Masks */}
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#183629] font-normal leading-[1.08] tracking-tight">
              <span className="block overflow-hidden py-0.5">
                <motion.span
                  initial={shouldReduceMotion ? { opacity: 0 } : { y: '105%' }}
                  animate={isInView ? { y: '0%' } : { y: '105%' }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block"
                >
                  Empowering People.
                </motion.span>
              </span>
              <span className="block overflow-hidden py-0.5">
                <motion.span
                  initial={shouldReduceMotion ? { opacity: 0 } : { y: '105%' }}
                  animate={isInView ? { y: '0%' } : { y: '105%' }}
                  transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className="italic font-light block text-[#102A21]"
                >
                  Elevating Businesses.
                </motion.span>
              </span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-lg text-[#202923]/80 leading-relaxed font-light"
            >
              {siteData.brand.aboutText}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="pt-2 flex flex-wrap items-center gap-4"
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/and/about"
                  className="relative px-6 py-3 rounded-full bg-[#F2C94C] text-[#183629] text-xs sm:text-sm font-bold tracking-wider uppercase shadow-sm hover:bg-[#DFAE22] hover:text-[#102A21] flex items-center gap-2 overflow-hidden group transition-colors"
                >
                  <span className="absolute inset-0 w-1/2 h-full bg-white/30 transform -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700 ease-out" />
                  <span className="relative z-10">Discover Our Story</span>
                  <ArrowUpRight className="relative z-10 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/and/why-us"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#183629] border border-[#183629]/20 text-xs sm:text-sm font-bold tracking-wider uppercase shadow-xs hover:border-[#183629] hover:bg-[#F4F8F4] transition-all duration-300"
                >
                  <span>Why Varnith</span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Real Alumni Proof Cluster */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="pt-6 border-t border-[#173B2C]/15 flex items-center gap-4"
            >
              <div className="flex -space-x-3 overflow-hidden">
                <img
                  src="/assets/student_female_1.avif"
                  alt="Priya - Varnith Alum"
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-[#EAF0E8] object-cover"
                />
                <img
                  src="/assets/student_male_1.avif"
                  alt="Rahul - Varnith Alum"
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-[#EAF0E8] object-cover"
                />
                <img
                  src="/assets/student_female_2.avif"
                  alt="Manasa - Varnith Alum"
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-[#EAF0E8] object-cover"
                />
                <img
                  src="/assets/student_male_2.avif"
                  alt="Ravi - Varnith Alum"
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-[#EAF0E8] object-cover"
                />
              </div>
              <div>
                <p className="text-xs font-bold text-[#183629] uppercase tracking-wider">
                  Real Hyderabad Career Outcomes
                </p>
                <p className="text-xs text-[#737D73]">
                  Practical training verified by our alumni
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column — Empowering Artwork Showcase with Mask Reveal */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden bg-white/95 p-3 sm:p-5 shadow-[0_16px_50px_-20px_rgba(24,54,41,0.18)] border border-stone-200/80 group"
            >
              <div className="relative rounded-[20px] sm:rounded-[24px] overflow-hidden bg-gradient-to-b from-[#F9FAF8] to-[#EDF2EE] flex items-center justify-center p-3 sm:p-5">
                <ImageReveal
                  src="/assets/about_empowering.jpg"
                  alt="Empowering people and elevating businesses through career growth"
                  aspectRatio="aspect-auto"
                  duration={1}
                  parallax={false}
                  imageClassName="w-full h-auto max-h-[440px] object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#183629]/90 text-white backdrop-blur-md text-[11px] font-semibold tracking-wide shadow-sm z-20">
                  <span className="w-2 h-2 rounded-full bg-[#BEE644] animate-pulse" />
                  <span>Career Progression Accelerator</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Lower Grid: Reference Dark Cards with Staggered Entrance & Interactive Physics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {darkCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="h-full"
            >
              <Link
                to={card.link}
                className="group relative rounded-[24px] bg-[#0E1511] p-7 sm:p-8 border border-white/10 hover:border-[#BEE644]/50 flex flex-col justify-between h-full min-h-[360px] sm:min-h-[390px] transition-colors duration-300 shadow-[0_14px_35px_-10px_rgba(0,0,0,0.5)] block focus:outline-none focus:ring-2 focus:ring-[#BEE644]"
              >
                {/* Card Header: Eyebrow + 2x2 Checkerboard Notch Badge */}
                <div>
                  <div className="flex items-center justify-between gap-4 pb-5 border-b border-white/[0.08]">
                    <span className="text-[11px] font-bold tracking-[0.18em] text-[#BEE644] font-mono uppercase">
                      {card.tag}
                    </span>
                    {/* Reference 2x2 Checkerboard Pixel Badge with 90deg rotate physics */}
                    <div
                      className="w-5 h-5 grid grid-cols-2 gap-0.5 shrink-0 group-hover:rotate-90 transition-transform duration-300"
                      aria-hidden="true"
                    >
                      <span className="w-2 h-2 bg-white/90 rounded-[1px]" />
                      <span className="w-2 h-2 bg-transparent rounded-[1px]" />
                      <span className="w-2 h-2 bg-transparent rounded-[1px]" />
                      <span className="w-2 h-2 bg-white/90 rounded-[1px]" />
                    </div>
                  </div>

                  {/* Main Headline */}
                  <h3
                    className={`mt-6 font-sans text-xl sm:text-2xl font-semibold leading-snug tracking-tight transition-colors duration-200 ${card.titleColor} group-hover:text-[#D7F55C]`}
                  >
                    {card.title}
                  </h3>

                  {/* Body Paragraph */}
                  <p className="mt-4 text-xs sm:text-sm text-[#8E9B90] font-light leading-relaxed">
                    {card.body}
                  </p>
                </div>

                {/* Card Footer: KEEP READING + & Animated Counter Stat */}
                <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="text-xs font-bold tracking-widest text-[#BEE644] uppercase inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                    <span>{card.linkText}</span>
                  </span>
                  <div className="text-right">
                    <span className="font-mono text-xs font-bold text-white block">
                      <Counter
                        value={card.statValue}
                        prefix={card.statPrefix || ''}
                        suffix={card.statSuffix || ''}
                      />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
