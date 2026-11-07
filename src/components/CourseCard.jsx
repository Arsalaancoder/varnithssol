import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function CourseCard({ course }) {
  return (
    <Link
      to={`/and/courses/${course.slug}`}
      className="group relative bg-white rounded-[32px] p-7 sm:p-8 border border-stone-200/90 hover:border-[#183629]/30 shadow-[0_10px_30px_-10px_rgba(24,54,41,0.06)] hover:shadow-[0_25px_50px_-15px_rgba(24,54,41,0.14)] transition-all duration-500 overflow-hidden flex flex-col justify-between h-full min-h-[480px] hover:-translate-y-1.5 focus:outline-none focus:ring-2 focus:ring-[#F2C94C]"
    >
      {/* Background Subtle Pinstripe Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

      {/* Top Content Block */}
      <div className="relative z-10 space-y-4">
        {/* Eyebrow / Brand Mark: 7DC style */}
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs font-bold tracking-widest text-[#183629] uppercase">
            VG • TRACK 0{course.number}
          </span>
          <span className="px-3 py-1 rounded-full bg-[#183629]/5 border border-[#183629]/10 text-[10px] font-bold text-[#183629] tracking-wider uppercase">
            {course.level}
          </span>
        </div>

        {/* Large Modern Headline: Wispr Flow style */}
        <h3 className="font-sans text-3xl sm:text-[34px] font-light text-[#183629] tracking-tight leading-[1.1] pt-1 group-hover:text-[#102A21] transition-colors">
          {course.title}
        </h3>

        {/* Descriptive Paragraph */}
        <p className="text-xs sm:text-sm text-[#202923]/75 font-light leading-relaxed max-w-sm line-clamp-3">
          {course.description}
        </p>

        {/* Signature Frosted Glassmorphism Capsule Button */}
        <div className="pt-2">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/85 hover:bg-white backdrop-blur-md border border-stone-200/70 shadow-[0_4px_16px_rgba(0,0,0,0.04)] group-hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)] transition-all duration-300">
            <span className="text-xs font-medium text-[#183629] tracking-tight">Explore Course</span>
            <span className="w-6 h-6 rounded-full bg-white border border-stone-200/80 flex items-center justify-center text-[#183629] shadow-xs group-hover:bg-[#183629] group-hover:text-white transition-all duration-300">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </div>

      {/* Lower Section: 3D Translucent Curved Glass Ribbons & Visual */}
      <div className="relative mt-8 pt-4 z-10">
        {/* Visual Showcase with Glassmorphism Ribbons */}
        <div className="relative h-36 rounded-2xl overflow-hidden flex items-center justify-center bg-gradient-to-b from-stone-50/50 to-white/30 border border-stone-100">
          {/* Cyan Curved Glass Ribbon (Bottom Left) */}
          <div className="absolute -bottom-6 -left-8 w-44 h-36 rounded-tr-[75px] bg-gradient-to-tr from-[#38C8B5]/25 via-[#4EE3C2]/20 to-transparent backdrop-blur-md border-t border-r border-white/70 pointer-events-none group-hover:-rotate-3 group-hover:scale-105 transition-transform duration-700" />
          
          {/* Lime Curved Glass Ribbon (Bottom Right) */}
          <div className="absolute -bottom-6 -right-8 w-48 h-36 rounded-tl-[85px] bg-gradient-to-tl from-[#B2E869]/30 via-[#C6EC52]/25 to-transparent backdrop-blur-md border-t border-l border-white/80 pointer-events-none group-hover:rotate-3 group-hover:scale-105 transition-transform duration-700" />

          {/* Glowing Ambient Diffusers */}
          <div className="absolute -bottom-10 right-4 w-32 h-32 rounded-full bg-[#B8ED7C]/25 blur-xl pointer-events-none" />
          <div className="absolute -bottom-10 left-4 w-32 h-32 rounded-full bg-[#38C8B5]/20 blur-xl pointer-events-none" />

          {/* Course Official Artwork / Logo */}
          <img
            src={course.image}
            alt={course.title}
            className={`relative z-10 max-h-24 max-w-[65%] object-contain filter brightness-[0.98] drop-shadow-md group-hover:scale-110 transition-transform duration-500`}
            loading="lazy"
          />
        </div>

        {/* Card Footer: Practical Labs (Left) & Duration / Schedule (Right) */}
        <div className="mt-4 pt-3.5 border-t border-stone-200/60 flex items-center justify-between text-xs">
          <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-[#183629]">
            100% PRACTICAL LABS
          </span>
          <div className="text-right">
            <span className="font-bold text-[11px] text-[#183629] block">
              {course.duration}
            </span>
            <span className="text-[10px] text-[#737D73]">
              Weekend & Weekday
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
