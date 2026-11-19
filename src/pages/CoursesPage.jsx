import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/siteData';
import { Clock, BarChart3, Award, ArrowRight, Laptop, Database } from 'lucide-react';
import InnerPageLayout from '../components/InnerPageLayout';

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
    <InnerPageLayout
      title="Training & Development"
      subtitle="Industry-focused technical programs in SAP Basis Security, SAP GRC, DevOps, and Data Analytics with 80% practical lab immersion."
      breadcrumb={[{ label: 'Training & Development' }]}
      activePath="/and/courses"
    >
      <div className="space-y-12">
        
        {/* Featured Image */}
        <div className="rounded-xl overflow-hidden border border-[#E5E7EB] shadow-card">
          <img
            src="/assets/hr_carousel_3.jpg"
            alt="Technical Training Division"
            className="w-full h-72 sm:h-80 object-cover"
          />
        </div>

        {/* Section Intro & Filter Pills */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#00A859]" />
            <span className="text-xs font-bold text-[#00A859] uppercase tracking-wider">
              ENTERPRISE LAB CURRICULA
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-[#16191D]">
            Master In-Demand Enterprise Technologies
          </h2>

          <p className="text-sm sm:text-base text-[#5E6874] leading-relaxed">
            Our training tracks are engineered directly by practitioners who actively consult for Fortune 500 enterprises. We combine live online lectures with 24/7 dedicated cloud sandboxes.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 rounded-md text-xs font-semibold transition-colors cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-[#00A859] text-white shadow-xs'
                    : 'bg-[#F8F9FA] border border-[#E5E7EB] text-[#16191D] hover:bg-[#EAF7EE] hover:text-[#00A859]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white border border-[#E5E7EB] rounded-xl overflow-hidden hover:border-[#00A859] hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Course Image */}
                <div className="relative h-44 overflow-hidden bg-gray-100">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded text-[11px] font-bold bg-white text-[#16191D] shadow-xs">
                    {course.category}
                  </span>
                  <span className="absolute top-3 right-3 px-2 py-0.5 rounded text-[11px] font-bold bg-[#00A859] text-white shadow-xs">
                    Track 0{course.number}
                  </span>
                </div>

                <div className="p-5 space-y-3">
                  <h3 className="text-lg font-bold text-[#16191D] group-hover:text-[#00A859] transition-colors">
                    {course.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5E6874] leading-relaxed line-clamp-2">
                    {course.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-[#5E6874] pt-2 border-t border-[#E5E7EB]">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#00A859]" />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <BarChart3 className="w-3.5 h-3.5 text-[#00A859]" />
                      {course.level}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <Link
                  to={`/and/courses/${course.slug}`}
                  className="w-full btn-outline text-xs py-2.5 justify-center font-bold group-hover:bg-[#00A859] group-hover:text-white group-hover:border-[#00A859] transition-all"
                >
                  <span>View Syllabus & Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* 3 Training Pillars */}
        <div className="bg-[#F8F9FA] border border-[#E5E7EB] rounded-xl p-6 sm:p-8 space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold text-[#00A859] uppercase tracking-wider block">
              TRAINING STANDARD
            </span>
            <h3 className="text-xl font-bold text-[#16191D]">
              Why Learn at Varnith Technologies
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white border border-[#E5E7EB] rounded-lg p-5 space-y-2">
              <Laptop className="w-6 h-6 text-[#00A859]" />
              <h4 className="text-sm font-bold text-[#16191D]">Enterprise Practitioners</h4>
              <p className="text-xs text-[#5E6874] leading-relaxed">
                Taught directly by senior architects who design and administer live systems on client accounts.
              </p>
            </div>

            <div className="bg-white border border-[#E5E7EB] rounded-lg p-5 space-y-2">
              <Database className="w-6 h-6 text-[#00A859]" />
              <h4 className="text-sm font-bold text-[#16191D]">24/7 Cloud Sandboxes</h4>
              <p className="text-xs text-[#5E6874] leading-relaxed">
                Complete hands-on configuration inside dedicated SAP, AWS, and Kubernetes cloud workstations.
              </p>
            </div>

            <div className="bg-white border border-[#E5E7EB] rounded-lg p-5 space-y-2">
              <Award className="w-6 h-6 text-[#00A859]" />
              <h4 className="text-sm font-bold text-[#16191D]">Corporate Placement Pipeline</h4>
              <p className="text-xs text-[#5E6874] leading-relaxed">
                Top performers receive immediate interview introductions to our corporate recruitment clients.
              </p>
            </div>
          </div>
        </div>

      </div>
    </InnerPageLayout>
  );
}
