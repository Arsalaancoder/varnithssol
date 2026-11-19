import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Award } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Courses() {
  const courses = siteData.courses;

  return (
    <section id="training" className="bg-[#F8F9FA] py-16 sm:py-20 lg:py-24 border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#063568]" />
            <span className="text-xs sm:text-sm font-bold tracking-wider text-[#063568] uppercase">
              TECHNICAL TRAINING TRACKS
            </span>
            <span className="h-2 w-2 rounded-full bg-[#063568]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#16191D] tracking-tight">
            Advance Your Career Through <span className="text-[#063568]">Enterprise Training</span>
          </h2>

          <p className="text-base sm:text-lg text-[#5E6874] leading-relaxed">
            Hands-on technical upskilling in SAP Basis Security, SAP GRC, DevOps, and Data Analytics with 80% practical immersion in live cloud sandboxes.
          </p>
        </div>

        {/* 6 Minimal Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white border border-[#E5E7EB] rounded-xl p-6 hover:border-[#063568] hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
            >
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
                  <span>Explore Curriculum & Syllabus</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
