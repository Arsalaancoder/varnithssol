import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Award } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Courses() {
  const courses = siteData.courses;

  return (
    <section id="training" className="bg-[#f7f9fc] py-16 sm:py-20 border-b border-[#e3e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-[#f6650a]">
            Training & Development
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#00184a] tracking-tight">
            Advance Your Career Through Industry-Focused Training
          </h2>
          <p className="text-base sm:text-lg text-[#5b6b85] leading-relaxed">
            Gain practical knowledge, develop in-demand technical skills and prepare for real-world industry opportunities.
          </p>
        </div>

        {/* 6 Minimal Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white border border-[#e3e8f0] rounded-xl p-6 hover:border-[#f6650a] hover:shadow-xs transition-all flex flex-col justify-between"
            >
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
          ))}
        </div>

        {/* Section Bottom Actions */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#e3e8f0]">
          <p className="text-sm text-[#5b6b85]">
            Looking for customized batch timings, corporate upskilling or weekend batches?
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link to="/and/courses" className="btn-orange">
              Explore All Training Programs
            </Link>
            <Link to="/and/contact" className="btn-outline">
              Ask for Syllabus
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
