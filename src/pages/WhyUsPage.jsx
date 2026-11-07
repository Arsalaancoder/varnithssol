import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { siteData } from '../data/siteData';
import LearningJourney from '../components/LearningJourney';
import CTASection from '../components/CTASection';
import { 
  Users, 
  Terminal, 
  Code2, 
  Award, 
  BookCheck, 
  Briefcase, 
  ArrowUpRight
} from 'lucide-react';

const differentiatorMedia = [
  { image: '/assets/about_mentor.jpg', badge: '$ 10+ Yrs Corporate Tenure', icon: Users },
  { image: '/assets/experience_lab.jpg', badge: '$ 80% Live Terminal Sandbox', icon: Terminal },
  { image: '/assets/experience_collab.jpg', badge: '$ Enterprise Incident Scenarios', icon: Code2 },
  { image: '/assets/experience_presentation.jpg', badge: '$ Verifiable Credentials', icon: Award },
  { image: '/assets/lab_student_portrait.jpg', badge: '$ 1-on-1 Interview Simulations', icon: BookCheck },
  { image: '/assets/team_conf.jpg', badge: '$ Direct Tech + HR Pipeline', icon: Briefcase },
];

export default function WhyUsPage() {
  return (
    <div className="pt-28 pb-16 bg-[#EAF0E8]">
      {/* Page Hero with Masked Line Reveal */}
      <section className="px-6 sm:px-12 lg:px-16 pb-12">
        <div className="max-w-[1360px] mx-auto space-y-6">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#737D73]">
            <Link to="/and" className="hover:text-[#183629]">Home</Link>
            <span>/</span>
            <span className="text-[#183629]">Why Us</span>
          </div>

          <div className="space-y-4 max-w-4xl">
            <span className="inline-block px-3 py-1 rounded-full bg-[#183629]/10 text-[#183629] text-xs font-bold tracking-widest uppercase">
              THE VARNITH ADVANTAGE
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#183629] font-normal tracking-tight leading-[1.06]">
              <span className="block overflow-hidden py-0.5">
                <motion.span
                  initial={{ y: '100%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block"
                >
                  What Makes the
                </motion.span>
              </span>
              <span className="block overflow-hidden py-0.5 text-[#DFAE22]">
                <motion.span
                  initial={{ y: '100%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className="italic font-light inline-block"
                >
                  Varnith Experience Different?
                </motion.span>
              </span>
            </h1>
            <p className="text-base sm:text-xl text-[#202923]/80 font-light leading-relaxed">
              We eliminated the disconnect between theoretical IT training and real-world corporate execution. Here is how our dual learning & recruitment model prepares you to excel.
            </p>
          </div>
        </div>
      </section>

      {/* Expanded 6 Core Differentiators Grid matching the attached Card Design */}
      <section className="px-6 sm:px-12 lg:px-16 py-8">
        <div className="max-w-[1360px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {siteData.differentiators.map((diff, idx) => {
            const media = differentiatorMedia[idx] || differentiatorMedia[0];
            const Icon = media.icon;

            return (
              <motion.div
                key={diff.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group relative rounded-[32px] sm:rounded-[36px] bg-[#121614] border border-white/10 p-6 sm:p-7 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] flex flex-col justify-between overflow-hidden cursor-pointer"
                style={{
                  background:
                    'radial-gradient(circle at 50% 12%, rgba(242, 201, 76, 0.14), transparent 60%), #121614',
                }}
              >
                {/* Top Bar: Left Pictogram & Right Circular Beige Arrow Button */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-[#E5D7BE]">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-[#E5D7BE]/70">
                      PILLAR {diff.number}
                    </span>
                  </div>

                  <Link
                    to="/and/courses"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#E5D7BE] text-[#183629] flex items-center justify-center shadow-md hover:bg-[#F2C94C] hover:scale-105 transition-all"
                    aria-label={`Explore ${diff.title}`}
                  >
                    <ArrowUpRight className="w-4.5 h-4.5" />
                  </Link>
                </div>

                {/* Centered Large Title in Serif Typography */}
                <div className="text-center my-3 sm:my-4">
                  <h3 className="font-serif text-xl sm:text-2xl text-white font-normal uppercase tracking-[0.16em]">
                    {diff.title}
                  </h3>
                </div>

                {/* Central Media Container: 16:10 Rounded Rectangle with Play Button & Frosted Pill */}
                <div className="relative w-full rounded-2xl overflow-hidden aspect-[16/10] bg-black/50 border border-white/10 shadow-inner group-hover:border-white/20 transition-all">
                  <img
                    src={media.image}
                    alt={diff.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent pointer-events-none" />

                  {/* Bottom Frosted Pill Badge */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/65 backdrop-blur-md text-white/95 text-[10px] sm:text-[11px] font-medium border border-white/15 inline-flex items-center gap-1.5 shadow-md whitespace-nowrap">
                    <span>{media.badge}</span>
                  </div>
                </div>

                {/* Bottom Text Description */}
                <div className="text-center px-1 mt-4">
                  <p className="text-xs sm:text-[13px] text-stone-300/85 font-light leading-relaxed line-clamp-3">
                    {diff.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Embedded Learning Journey Component */}
      <LearningJourney />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
