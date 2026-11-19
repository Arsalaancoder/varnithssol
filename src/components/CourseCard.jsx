import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Award } from 'lucide-react';

export default function CourseCard({ course }) {
  return (
    <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 hover:border-[#063568] hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between h-full group">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-bold text-[#063568] bg-[#F2F3FC] px-2.5 py-0.5 rounded">
            Track 0{course.number}
          </span>
          <span className="text-[11px] font-semibold text-[#5E6874] bg-[#F8F9FA] border border-[#E5E7EB] px-2.5 py-0.5 rounded">
            {course.category}
          </span>
        </div>

        <h3 className="text-xl font-bold text-[#16191D] group-hover:text-[#063568] transition-colors">
          {course.title}
        </h3>

        <p className="text-sm text-[#5E6874] leading-relaxed">
          {course.description}
        </p>

        <div className="pt-3 border-t border-[#E5E7EB] flex items-center justify-between text-xs text-[#5E6874]">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#063568]" />
            <span>{course.duration}</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-[#063568]" />
            <span>{course.level}</span>
          </span>
        </div>
      </div>

      <div className="pt-5 mt-4 border-t border-[#E5E7EB]">
        <Link
          to={`/and/courses/${course.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#063568] group-hover:text-[#04274d] transition-colors"
        >
          <span>View Curriculum & Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
