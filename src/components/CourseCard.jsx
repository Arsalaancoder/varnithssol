import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Award } from 'lucide-react';

export default function CourseCard({ course }) {
  return (
    <div className="bg-white border border-[#e3e8f0] rounded-xl p-6 hover:border-[#f6650a] hover:shadow-xs transition-all flex flex-col justify-between h-full">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase text-[#5b6b85] tracking-wider">
            Track 0{course.number}
          </span>
          <span className="text-[11px] font-medium text-[#f6650a] bg-[#f6650a]/10 px-2.5 py-0.5 rounded-full">
            {course.category}
          </span>
        </div>

        <h3 className="text-xl font-bold text-[#00184a]">
          {course.title}
        </h3>

        <p className="text-sm text-[#5b6b85] leading-relaxed">
          {course.description}
        </p>

        <div className="pt-3 border-t border-[#e3e8f0] flex items-center justify-between text-xs text-[#5b6b85]">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#f6650a]" />
            <span>{course.duration}</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-[#f6650a]" />
            <span>{course.level}</span>
          </span>
        </div>
      </div>

      <div className="pt-5 mt-4 border-t border-[#e3e8f0]">
        <Link
          to={`/and/courses/${course.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#f6650a] hover:text-[#c2410c] transition-colors"
        >
          <span>View curriculum</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
