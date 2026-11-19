import React from 'react';
import { UserX, ClockAlert, Cpu, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';

const challenges = [
  {
    icon: UserX,
    title: 'Finding the Right Talent',
    desc: 'Hiring managers spend hours reviewing hundreds of keyword-stuffed resumes that fail basic technical evaluation during live interviews.'
  },
  {
    icon: ClockAlert,
    title: 'Inconsistent Recruitment Processes',
    desc: 'Unpredictable hiring timelines, delayed candidate responses, and misaligned job briefs lead to costly hiring stalls and lost opportunities.'
  },
  {
    icon: Cpu,
    title: 'Technology Skills Gaps',
    desc: 'Enterprise systems like SAP, cloud orchestrations, and DevOps require niche expertise that is difficult to find and evaluate in the open market.'
  },
  {
    icon: GraduationCap,
    title: 'Industry-Ready Training Requirements',
    desc: 'Traditional institutes focus on theoretical concepts, leaving developers and administrators unequipped to handle real-world production sandboxes.'
  }
];

export default function ChallengesSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching Bluspark "Sound Familiar?" pattern */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="text-xs font-bold tracking-widest text-[#0066CC] uppercase">
            SOUND FAMILIAR?
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
            Challenges Businesses Face When Building Strong Teams
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Scaling software engineering, ERP teams, and cloud operations shouldn’t feel like guesswork. Here are the bottlenecks our clients and learners frequently encounter.
          </p>
        </div>

        {/* 4 Clean Minimal Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {challenges.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white border border-slate-200 rounded-lg p-6 hover:border-slate-300 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-11 h-11 rounded-md bg-slate-50 border border-slate-200 flex items-center justify-center text-[#0B2545]">
                    <Icon className="w-5 h-5 stroke-[1.75]" />
                  </div>
                  <h3 className="text-base font-bold text-[#0F172A] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

