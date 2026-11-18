import React, { useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { siteData } from '../data/siteData';
import { ArrowLeft, Clock, BarChart3, Award, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import CTASection from '../components/CTASection';

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
    learningMode: 'online',
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
    <div className="bg-white">
      {/* Top Banner */}
      <section className="bg-[#f7f9fc] py-12 sm:py-16 border-b border-[#e3e8f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center justify-between">
            <Link
              to="/and/courses"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1e5bc6] hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all programmes</span>
            </Link>
            <span className="text-xs font-semibold text-[#5b6b85] uppercase">
              Track 0{course.number} of 06
            </span>
          </div>

          <div className="max-w-3xl space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-[#f6650a]/10 text-[#f6650a] text-xs font-semibold">
                {course.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#1e5bc6]/10 text-[#1e5bc6] text-xs font-semibold">
                {course.badge}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold text-[#00184a] tracking-tight">
              {course.fullTitle}
            </h1>

            <p className="text-base sm:text-lg text-[#5b6b85] leading-relaxed">
              {course.description}
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-3 text-xs text-[#00184a] font-medium border-t border-[#e3e8f0]">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#f6650a]" />
                {course.duration} Duration
              </span>
              <span className="flex items-center gap-1.5">
                <BarChart3 className="w-4 h-4 text-[#f6650a]" />
                {course.level}
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#f6650a]" />
                Certificate Awarded
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content: Curriculum + Enrollment Form */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Curriculum Modules & Audience */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#00184a] mb-2">
                  Hands-On Curriculum Modules
                </h2>
                <p className="text-sm text-[#5b6b85]">
                  Practical, lab-first curriculum designed with real project tasks and architecture capstones.
                </p>
              </div>

              {/* Modules list */}
              <div className="space-y-3">
                {course.highlights.map((mod, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-[#e3e8f0] bg-white hover:border-[#f6650a] transition-colors flex items-start gap-3.5"
                  >
                    <div className="w-7 h-7 rounded-md bg-[#f6650a]/10 text-[#f6650a] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      0{idx + 1}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#00184a]">
                        Module {idx + 1}
                      </h3>
                      <p className="text-xs text-[#5b6b85] mt-0.5 leading-relaxed">
                        {mod}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Job Roles & Audience */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-xl border border-[#e3e8f0] bg-[#f7f9fc] space-y-2">
                  <h3 className="text-sm font-bold text-[#00184a]">Target Job Roles</h3>
                  <ul className="space-y-1.5 text-xs text-[#5b6b85]">
                    {course.careerOutcomes?.map((role, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1e5bc6]" />
                        <span>{role}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-xl border border-[#e3e8f0] bg-[#f7f9fc] space-y-2">
                  <h3 className="text-sm font-bold text-[#00184a]">Who Should Enrol</h3>
                  <p className="text-xs text-[#5b6b85] leading-relaxed">
                    {course.targetAudience}
                  </p>
                  <div className="pt-2 text-xs font-semibold text-[#00184a]">
                    Credential: {course.certification}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Inquiry / Registration Form */}
            <div className="lg:col-span-5">
              <div className="border border-[#e3e8f0] rounded-2xl p-6 sm:p-8 bg-white shadow-xs sticky top-24">
                <div className="mb-6 space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#f6650a]">
                    Enquire for Next Batch
                  </span>
                  <h3 className="text-xl font-bold text-[#00184a]">
                    Enrol in {course.title}
                  </h3>
                  <p className="text-xs text-[#5b6b85]">
                    Submit your details to receive the comprehensive syllabus and batch schedules.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="p-6 rounded-xl bg-[#f7f9fc] border border-[#e3e8f0] text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-[#f6650a]/10 text-[#f6650a] mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-bold text-[#00184a]">Enquiry Received</h4>
                    <p className="text-xs text-[#5b6b85]">
                      Thank you! Our academic coordinator will contact you with batch dates, timings, and fee details.
                    </p>
                    <button
                      onClick={() => setSubmittedSlug(null)}
                      className="btn-outline text-xs mt-2"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#00184a] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Anand Kumar"
                        className="w-full px-3 py-2 rounded-lg border border-[#cbd5e1] text-xs text-[#00184a] focus:outline-none focus:border-[#f6650a]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#00184a] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. anand@gmail.com"
                        className="w-full px-3 py-2 rounded-lg border border-[#cbd5e1] text-xs text-[#00184a] focus:outline-none focus:border-[#f6650a]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#00184a] mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3 py-2 rounded-lg border border-[#cbd5e1] text-xs text-[#00184a] focus:outline-none focus:border-[#f6650a]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#00184a] mb-1">
                        Preferred Learning Mode
                      </label>
                      <select
                        value={formData.learningMode}
                        onChange={(e) => setFormData({ ...formData, learningMode: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg border border-[#cbd5e1] text-xs text-[#00184a] focus:outline-none focus:border-[#f6650a] bg-white"
                      >
                        <option value="online">Live Online (Interactive)</option>
                        <option value="hybrid">Hyderabad Campus / Hybrid</option>
                        <option value="weekend">Weekend Executive Batch</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#00184a] mb-1">
                        Questions or Educational Background
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="e.g. Looking for weekend batch, currently working in IT support..."
                        className="w-full px-3 py-2 rounded-lg border border-[#cbd5e1] text-xs text-[#00184a] focus:outline-none focus:border-[#f6650a] resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-orange w-full justify-center"
                    >
                      <Send className="w-4 h-4" />
                      <span>{submitting ? 'Submitting...' : 'Request Batch Details'}</span>
                    </button>

                    <p className="text-[11px] text-[#5b6b85] text-center">
                      Or call directly at{' '}
                      <a href={`tel:${siteData.brand.rawPhone}`} className="text-[#1e5bc6] underline">
                        {siteData.brand.phone}
                      </a>
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Other Programmes */}
      <section className="bg-[#f7f9fc] py-12 border-t border-[#e3e8f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-[#00184a]">
              Other Professional Tracks
            </h3>
            <Link
              to="/and/courses"
              className="text-xs font-semibold text-[#1e5bc6] hover:underline"
            >
              View all tracks →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siteData.courses
              .filter(c => c.slug !== course.slug)
              .slice(0, 3)
              .map(c => (
                <div
                  key={c.id}
                  className="bg-white border border-[#e3e8f0] rounded-xl p-5 space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="text-[11px] font-semibold text-[#f6650a] uppercase">
                      {c.category}
                    </span>
                    <h4 className="text-base font-bold text-[#00184a]">
                      {c.title}
                    </h4>
                    <p className="text-xs text-[#5b6b85] line-clamp-2">
                      {c.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#e3e8f0] flex items-center justify-between text-xs">
                    <span className="text-[#5b6b85]">{c.duration}</span>
                    <Link
                      to={`/and/courses/${c.slug}`}
                      className="font-semibold text-[#f6650a] hover:underline inline-flex items-center gap-1"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
