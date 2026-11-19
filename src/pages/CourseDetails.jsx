import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { siteData } from '../data/siteData';
import { Clock, BarChart3, Award, CheckCircle2 } from 'lucide-react';
import InnerPageLayout from '../components/InnerPageLayout';

export default function CourseDetails() {
  const params = useParams();
  const location = useLocation();

  const pathParts = location.pathname.split('/').filter(Boolean);
  const pathSlug = pathParts[pathParts.length - 1];
  const activeSlug = params.slug || (pathSlug !== 'courses' ? pathSlug : null);

  const course = siteData.courses.find(
    c => c.slug === activeSlug || c.id === activeSlug
  ) || siteData.courses[0];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    learningMode: 'Live Online + Labs',
    message: ''
  });
  const [submittedSlug, setSubmittedSlug] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const isSubmitted = submittedSlug === activeSlug;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      const stored = JSON.parse(localStorage.getItem('varnith_course_inquiries') || '[]');
      stored.push({
        course: course.title,
        slug: course.slug,
        ...formData,
        date: new Date().toISOString()
      });
      localStorage.setItem('varnith_course_inquiries', JSON.stringify(stored));
      setSubmitting(false);
      setSubmittedSlug(activeSlug);
    }, 400);
  };

  return (
    <InnerPageLayout
      title={course.title}
      subtitle={course.description}
      breadcrumb={[
        { label: 'Training & Development', href: '/and/courses' },
        { label: course.title }
      ]}
      activePath={`/and/courses/${course.slug}`}
      bannerImage={course.image || '/assets/hr_carousel_3.jpg'}
    >
      <div className="space-y-12">
        
        {/* Course Featured Banner Image */}
        <div className="rounded-xl overflow-hidden border border-[#E5E7EB] shadow-card">
          <img
            src={course.image}
            alt={course.fullTitle}
            className="w-full h-72 sm:h-96 object-cover"
          />
        </div>

        {/* Narrative & Course Overview */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-[#EAF7EE] text-[#00A859] text-xs font-bold uppercase tracking-wider">
              {course.category}
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-[#F8F9FA] border border-[#E5E7EB] text-[#16191D] text-xs font-semibold">
              Track 0{course.number} • {course.badge}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-[#16191D]">
            {course.fullTitle}
          </h2>

          <p className="text-sm sm:text-base text-[#5E6874] leading-relaxed">
            {course.description}
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-3 text-xs sm:text-sm text-[#16191D] font-semibold border-t border-[#E5E7EB]">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#00A859]" />
              {course.duration} Duration
            </span>
            <span className="flex items-center gap-1.5">
              <BarChart3 className="w-4 h-4 text-[#00A859]" />
              {course.level}
            </span>
            <span className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-[#00A859]" />
              Certificate of Completion
            </span>
          </div>
        </div>

        {/* Syllabus / Key Highlights Grid */}
        <div className="space-y-6">
          <div>
            <span className="text-xs font-bold text-[#00A859] uppercase tracking-wider block">
              SYLLABUS MODULES
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#16191D]">
              What You Will Master in This Track
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {course.highlights.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E5E7EB] rounded-lg p-4 flex items-start gap-3 hover:border-[#00A859] transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-[#EAF7EE] text-[#00A859] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#16191D]">{item}</h4>
                  <p className="text-[11px] text-[#5E6874] mt-0.5">Hands-on configuration & practical exercise</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Outcomes & Audience */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-[#F8F9FA] border border-[#E5E7EB] rounded-xl p-6 space-y-3">
            <h4 className="text-base font-bold text-[#16191D]">Target Audience</h4>
            <p className="text-xs sm:text-sm text-[#5E6874] leading-relaxed">
              {course.targetAudience}
            </p>
          </div>

          <div className="bg-[#F8F9FA] border border-[#E5E7EB] rounded-xl p-6 space-y-3">
            <h4 className="text-base font-bold text-[#16191D]">Career Roles</h4>
            <div className="flex flex-wrap gap-1.5">
              {course.careerOutcomes.map((role, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-white border border-[#E5E7EB] rounded text-xs font-medium text-[#16191D]"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Next Batch Enquiry Form */}
        <div id="course-inquiry" className="bg-[#F8F9FA] border border-[#E5E7EB] rounded-xl p-6 sm:p-8 space-y-5">
          <div>
            <span className="text-xs font-bold text-[#00A859] uppercase tracking-wider block">
              NEXT BATCH ENROLMENT
            </span>
            <h3 className="text-xl font-bold text-[#16191D]">
              Ask About Upcoming Batches & Syllabus for {course.title}
            </h3>
            <p className="text-xs text-[#5E6874]">
              Receive the full day-by-day curriculum PDF and batch schedule via WhatsApp / Email.
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-[#EAF7EE] border border-[#00A859] rounded-lg p-5 text-center space-y-2">
              <CheckCircle2 className="w-8 h-8 text-[#00A859] mx-auto" />
              <h4 className="text-sm font-bold text-[#16191D]">Enquiry Received!</h4>
              <p className="text-xs text-[#5E6874]">Our learning advisor will send you the syllabus and batch options shortly.</p>
              <button onClick={() => setSubmittedSlug(null)} className="btn-outline text-xs mt-2">
                Enquire for another course
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Your Full Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="px-3 py-2 text-xs border border-[#E5E7EB] rounded-md focus:border-[#00A859] focus:outline-hidden bg-white"
                />
                <input
                  type="email"
                  required
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="px-3 py-2 text-xs border border-[#E5E7EB] rounded-md focus:border-[#00A859] focus:outline-hidden bg-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="tel"
                  required
                  placeholder="Phone Number (WhatsApp) *"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="px-3 py-2 text-xs border border-[#E5E7EB] rounded-md focus:border-[#00A859] focus:outline-hidden bg-white"
                />
                <select
                  value={formData.learningMode}
                  onChange={(e) => setFormData({ ...formData, learningMode: e.target.value })}
                  className="px-3 py-2 text-xs border border-[#E5E7EB] rounded-md focus:border-[#00A859] focus:outline-hidden bg-white"
                >
                  <option value="Live Online + Labs">Live Online + Cloud Labs</option>
                  <option value="Weekend Fast-Track">Weekend Fast-Track</option>
                  <option value="Corporate Team Batch">Corporate Team Batch</option>
                </select>
              </div>

              <textarea
                rows={3}
                placeholder="Questions about schedule, prerequisite knowledge, or fees..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3 py-2 text-xs border border-[#E5E7EB] rounded-md focus:border-[#00A859] focus:outline-hidden bg-white resize-none"
              />

              <button
                type="submit"
                disabled={submitting}
                className="btn-green text-xs px-6 py-2.5"
              >
                {submitting ? 'Submitting...' : 'Request Syllabus & Batch Timings'}
              </button>
            </form>
          )}
        </div>

      </div>
    </InnerPageLayout>
  );
}
