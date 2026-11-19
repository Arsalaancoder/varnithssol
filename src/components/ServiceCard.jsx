import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ServiceCard({
  icon: Icon,
  category,
  title,
  titleMuted,
  subtitle,
  subtitleMuted,
  description,
  link = '/and/hr-services'
}) {
  return (
    <div className="relative bg-gradient-to-br from-white via-white to-blue-50/30 border border-slate-100 rounded-2xl p-6 sm:p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(6,53,104,0.12)] hover:border-[#063568]/30 transition-all duration-300 flex flex-col justify-between h-full group">
      
      {/* Subtle corner light wash */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/20 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 space-y-4">
        {/* Circular Icon Badge matching Reference Image */}
        {Icon && (
          <div className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-xs flex items-center justify-center text-[#16191D] group-hover:text-[#063568] group-hover:border-[#063568]/40 transition-colors">
            <Icon className="w-5 h-5 stroke-[1.75]" />
          </div>
        )}

        {/* Small Uppercase Category Label */}
        {category && (
          <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider block">
            {category}
          </span>
        )}

        {/* Two-Tone Striking Heading matching Reference Image */}
        <h3 className="text-xl sm:text-[22px] font-extrabold text-[#0F172A] leading-snug tracking-tight">
          {title}{' '}
          {titleMuted && (
            <span className="text-[#94A3B8] font-medium">
              {titleMuted}{' '}
            </span>
          )}
          {subtitle && (
            <span>
              {subtitle}{' '}
            </span>
          )}
          {subtitleMuted && (
            <span className="text-[#94A3B8] font-medium">
              {subtitleMuted}
            </span>
          )}
        </h3>

        {/* Supporting description if provided */}
        {description && (
          <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed line-clamp-2 pt-1">
            {description}
          </p>
        )}
      </div>

      {/* Bottom Button matching Reference Image: "See More →" */}
      <div className="relative z-10 pt-6 mt-4">
        <Link
          to={link}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 shadow-xs text-xs font-semibold text-[#0F172A] hover:border-[#063568] hover:text-[#063568] hover:shadow-sm transition-all"
        >
          <span>See More</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#64748B] group-hover:text-[#063568] group-hover:translate-x-0.5 transition-all" />
        </Link>
      </div>

    </div>
  );
}

