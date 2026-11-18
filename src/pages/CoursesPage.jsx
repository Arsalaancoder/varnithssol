import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/siteData';
import CourseCard from '../components/CourseCard';
import CTASection from '../components/CTASection';
import { Laptop, Database, ShieldCheck } from 'lucide-react';

export default function CoursesPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = [
    'All',
    'Enterprise ERP',
    'Cloud & Infrastructure',
    'Data & Analytics',
    'Quality Engineering',
    'Programming & Backend'
  ];

  const filteredCourses = activeFilter === 'All'
    ? siteData.courses
    : siteData.courses.filter(c => c.category === activeFilter);

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-[#f7f9fc] py-12 sm:py-16 border-b border-[#e3e8f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-medium text-[#5b6b85]">
            <Link to="/and" className="hover:text-[#1e5bc6]">Home</Link>
            <span>/</span>
            <span className="text-[#00184a] font-semibold">Training Programmes</span>
          </div>

          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#f6650a]">
              Training & Development
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold text-[#00184a] tracking-tight">
              Industry-Focused IT Programmes
            </h1>
            <p className="text-base sm:text-lg text-[#5b6b85] leading-relaxed">
              Explore our six core technical training tracks designed for working professionals and engineering graduates. Hands-on labs, live online mentors, and direct corporate recruitment.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  activeFilter === cat
                    ? 'bg-[#1e5bc6] text-white'
                    : 'bg-white border border-[#e3e8f0] text-[#00184a] hover:bg-[#eef2f8]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* 3 Training Pillars */}
      <section className="bg-[#f7f9fc] py-14 border-y border-[#e3e8f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h2 className="text-2xl font-bold text-[#00184a]">
              Why Learn with Varnith?
            </h2>
            <p className="text-sm text-[#5b6b85]">
              Designed around practical problem solving, genuine cloud sandboxes, and corporate mentorship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-[#e3e8f0] rounded-xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#1e5bc6]/10 text-[#1e5bc6] flex items-center justify-center">
                <Laptop className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#00184a]">Enterprise Mentors</h3>
              <p className="text-xs text-[#5b6b85] leading-relaxed">
                Learn directly from senior consultants who design and manage enterprise architectures on active projects.
              </p>
            </div>

            <div className="bg-white border border-[#e3e8f0] rounded-xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#f6650a]/10 text-[#f6650a] flex items-center justify-center">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#00184a]">Production Sandboxes</h3>
              <p className="text-xs text-[#5b6b85] leading-relaxed">
                Spend 80% of your curriculum building, testing, and deploying capstones on live cloud environments.
              </p>
            </div>

            <div className="bg-white border border-[#e3e8f0] rounded-xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#1e5bc6]/10 text-[#1e5bc6] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#00184a]">Placement Highway</h3>
              <p className="text-xs text-[#5b6b85] leading-relaxed">
                Our in-house HR sourcing division connects high-performing learners directly with enterprise hiring partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
