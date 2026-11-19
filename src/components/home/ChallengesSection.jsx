import React from 'react';
import { Search, UserCheck, AlertTriangle, TrendingUp, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { siteData } from '../../data/siteData';

const challengeIcons = [Search, UserCheck, AlertTriangle, TrendingUp];

export default function ChallengesSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 rounded-full text-xs font-semibold text-[#0D5C91] uppercase tracking-wider font-['Familjen_Grotesk']">
            Sound Familiar?
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0D5C91] tracking-tight font-['Familjen_Grotesk']">
            Building the Right Team and Skills Isn't Always Easy
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-['Familjen_Grotesk']">
            Without a clear system, talent acquisition and career growth become reactive, inconsistent, and risky.
          </p>
        </div>

        {/* 4 Frosted Cards matching reference design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {siteData.challenges.map((card, idx) => {
            const Icon = challengeIcons[idx % challengeIcons.length];
            return (
              <motion.div
                key={card.title}
                className="bg-white rounded-2xl p-7 border border-slate-100 shadow-md shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-300/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                {/* Subtle Radial Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100/40 via-blue-50/20 to-transparent rounded-tr-2xl pointer-events-none" />

                <div>
                  {/* Top Circular Icon Badge */}
                  <div className="w-11 h-11 rounded-full bg-white shadow-xs border border-slate-100/90 flex items-center justify-center mb-5 shrink-0 group-hover:scale-105 transition-transform text-slate-800">
                    <Icon className="w-5 h-5 text-slate-800" />
                  </div>

                  {/* Category Eyebrow */}
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2 font-['Familjen_Grotesk']">
                    CHALLENGE • {card.number}
                  </div>

                  {/* Headline */}
                  <h3 className="text-xl font-bold text-[#0D5C91] mb-2 leading-snug font-['Familjen_Grotesk']">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed font-['Familjen_Grotesk'] mb-4">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Action */}
                <div className="pt-4 mt-auto border-t border-slate-100/80">
                  <span className="inline-flex items-center gap-1.5 bg-white border border-slate-200/80 rounded-md px-3 py-1 text-xs font-semibold text-slate-700 shadow-2xs font-['Familjen_Grotesk']">
                    <span>How We Solve It</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
