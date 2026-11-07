import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function CourseCard({ course }) {
  return (
    <Link
      to={`/and/courses/${course.slug}`}
      className="group relative bg-white/65 backdrop-blur-2xl rounded-[32px] p-7 sm:p-8 border border-white/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.95),0_12px_40px_-8px_rgba(24,54,41,0.08)] hover:bg-white/80 hover:border-white hover:shadow-[inset_0_1px_2px_rgba(255,255,255,1),0_24px_50px_-10px_rgba(24,54,41,0.15)] transition-all duration-500 overflow-hidden flex flex-col justify-between h-full min-h-[490px] hover:-translate-y-1.5 focus:outline-none focus:ring-2 focus:ring-[#F2C94C] block"
    >
      {/* Background Subtle Pinstripe Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

      {/* Top Content Block with Glass Depth */}
      <div className="relative z-10 space-y-4">
        {/* Top Header: Eyebrow + Top-Right Glass Circular Arrow Button (matching reference image) */}
        <div className="flex items-center justify-between pb-3 border-b border-white/60">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold tracking-widest text-[#183629] uppercase">
              VG • TRACK 0{course.number}
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-white/85 backdrop-blur-md border border-white/90 text-[10px] font-bold text-[#183629] uppercase tracking-wider shadow-2xs">
              {course.level}
            </span>
          </div>

          <div className="w-9 h-9 rounded-full bg-white/80 backdrop-blur-md border border-white/90 flex items-center justify-center text-[#183629] shadow-xs group-hover:bg-[#183629] group-hover:text-white transition-all duration-300">
            <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
          </div>
        </div>

        {/* Large Modern Headline */}
        <h3 className="font-sans text-3xl sm:text-[34px] font-light text-[#183629] tracking-tight leading-[1.1] pt-1 group-hover:text-[#102A21] transition-colors">
          {course.title}
        </h3>

        {/* Descriptive Paragraph */}
        <p className="text-xs sm:text-sm text-[#202923]/75 font-light leading-relaxed max-w-sm line-clamp-3">
          {course.description}
        </p>

        {/* Frosted Glass Depth Capsule Button */}
        <div className="pt-2">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/75 hover:bg-white backdrop-blur-md border border-white/90 shadow-[0_4px_16px_rgba(0,0,0,0.04)] group-hover:bg-[#183629] group-hover:text-white group-hover:border-[#183629] transition-all duration-300">
            <span className="text-xs font-medium tracking-tight">Explore Course</span>
            <span className="w-6 h-6 rounded-full bg-white border border-stone-200/80 flex items-center justify-center text-[#183629] shadow-xs group-hover:bg-white/20 group-hover:text-white group-hover:border-transparent transition-all duration-300">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </div>

      {/* Lower Section: 3D Translucent Glass Showcase */}
      <div className="relative mt-8 pt-4 z-10">
        <div className="relative h-36 rounded-2xl overflow-hidden flex items-center justify-center bg-gradient-to-b from-white/70 to-white/40 border border-white/80 backdrop-blur-md shadow-inner">
          {/* Subtle Ambient Glass Glow */}
          <div className="absolute -bottom-8 -left-6 w-36 h-36 rounded-full bg-[#BEE644]/20 blur-xl pointer-events-none" />
          <div className="absolute -bottom-8 -right-6 w-36 h-36 rounded-full bg-[#38C8B5]/20 blur-xl pointer-events-none" />

          {/* Course Official Artwork / Logo */}
          <img
            src={course.image}
            alt={course.title}
            className="relative z-10 max-h-24 max-w-[65%] object-contain filter brightness-[0.98] drop-shadow-md group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
        </div>

        {/* Card Glass Footer */}
        <div className="mt-4 pt-3.5 border-t border-white/60 flex items-center justify-between text-xs">
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
