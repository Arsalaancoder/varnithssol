import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { siteData } from '../data/siteData';
import { ArrowLeft, Clock, BarChart3, Award, Send, Sparkles, Briefcase, ShieldCheck, ArrowRight, ArrowUpRight } from 'lucide-react';
import CTASection from '../components/CTASection';

export default function CourseDetails() {
  const { slug } = useParams();
  
  // Find matching course by slug, fallback to first course
  const course = siteData.courses.find(c => c.slug === slug || c.id === slug) || siteData.courses[0];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    learningMode: 'hybrid',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

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
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="pt-28 pb-16 bg-[#EAF0E8]">
      {/* Top Breadcrumb Header */}
      <section className="px-6 sm:px-12 lg:px-16 pb-8">
        <div className="max-w-[1360px] mx-auto flex items-center justify-between">
          <Link
            to="/and/courses"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#183629] hover:text-[#DFAE22] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Programs</span>
          </Link>
          <span className="text-xs font-semibold text-[#737D73] uppercase tracking-wider">
            Track {course.number} of 06
          </span>
        </div>
      </section>

      {/* Course Hero Banner */}
      <section className="px-6 sm:px-12 lg:px-16 pb-12">
        <div className="max-w-[1360px] mx-auto relative rounded-[36px] overflow-hidden shadow-2xl min-h-[380px] sm:min-h-[440px] flex flex-col justify-end p-8 sm:p-14 text-white bg-gradient-to-br from-[#102A21] via-[#183629] to-[#0D221A] border border-white/10">
          {/* Subtle ambient lighting */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.06] pointer-events-none" />
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#F2C94C]/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl space-y-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3.5 py-1 rounded-full bg-[#F2C94C] text-[#183629] text-xs font-bold uppercase tracking-wider shadow-sm">
                  {course.category}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider">
                  {course.badge}
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight">
                <span className="block overflow-hidden py-0.5">
                  <motion.span
                    initial={{ y: '100%' }}
                    animate={{ y: '0%' }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block"
                  >
                    {course.fullTitle}
                  </motion.span>
                </span>
              </h1>

              <p className="text-base sm:text-lg text-white/90 font-light leading-relaxed max-w-2xl">
                {course.description}
              </p>

              <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm text-white/80 pt-2 border-t border-white/20">
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#F2C94C]" />
                  {course.duration} Duration
                </span>
                <span className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-[#F2C94C]" />
                  {course.level}
                </span>
                <span className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#F2C94C]" />
                  Industry Certification
                </span>
              </div>
            </div>

            {/* Official Course Emblem Card with Hover Physics */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: 'spring', stiffness: 350, damping: 20 }}
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl bg-white p-3.5 shadow-2xl shrink-0 flex items-center justify-center border-2 border-white/30 self-start md:self-end"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Grid: Detailed Syllabus + Registration Form */}
      <section className="px-6 sm:px-12 lg:px-16 py-8">
        <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Modules & Roadmap */}
          <div className="lg:col-span-7 space-y-10">
            {/* Overview */}
            <div className="space-y-3">
              <span className="text-xs uppercase font-bold tracking-widest text-[#737D73]">
                CURRICULUM ARCHITECTURE
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#183629] font-normal">
                Hands-On Enterprise Lab Modules
              </h2>
              <p className="text-sm sm:text-base text-[#202923]/80 leading-relaxed font-light">
                Our curriculum emphasizes practical problem-solving over abstract theory. You will work directly with industry-standard toolsets and implement end-to-end scenarios.
              </p>
            </div>

            {/* Syllabus Modules with Staggered Entrance */}
            <div className="space-y-4">
              {course.highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="p-5 rounded-[22px] bg-white border border-stone-200/70 shadow-xs flex items-start gap-4 hover:shadow-sm transition-shadow"
                >
                  <div className="w-8 h-8 rounded-full bg-[#FEF8E7] flex items-center justify-center text-[#DFAE22] font-serif font-bold text-sm shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-[#183629] font-normal">
                      Module 0{idx + 1}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#202923]/80 font-light mt-0.5">
                      {item}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Career Outcomes & Who Should Enroll */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
              <div className="p-6 rounded-[24px] bg-white border border-stone-200/70 shadow-xs space-y-3">
                <div className="flex items-center gap-2 text-[#183629]">
                  <Briefcase className="w-4 h-4 text-[#DFAE22]" />
                  <h4 className="text-xs uppercase font-bold tracking-wider">
                    Target Job Roles
                  </h4>
                </div>
                <ul className="space-y-2 text-xs text-[#202923]/80">
                  {course.careerOutcomes?.map((role, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#DFAE22]" />
                      <span>{role}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-[24px] bg-white border border-stone-200/70 shadow-xs space-y-3">
                <div className="flex items-center gap-2 text-[#183629]">
                  <ShieldCheck className="w-4 h-4 text-[#DFAE22]" />
                  <h4 className="text-xs uppercase font-bold tracking-wider">
                    Target Audience
                  </h4>
                </div>
                <p className="text-xs text-[#202923]/80 leading-relaxed font-light">
                  {course.targetAudience}
                </p>
                <div className="pt-2 border-t border-stone-100">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#737D73] block">
                    Credential Awarded:
                  </span>
                  <p className="text-xs text-[#183629] font-semibold mt-0.5">
                    {course.certification}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Registration / Syllabus Form */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-[32px] bg-[#183629] text-white shadow-xl sticky top-28 space-y-6">
              {submitted ? (
                <div className="text-center py-8 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#F2C94C]/20 text-[#F2C94C] mx-auto flex items-center justify-center">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl font-normal">
                    Enquiry Received!
                  </h3>
                  <p className="text-xs text-white/80 max-w-sm mx-auto">
                    Thank you for your interest in {course.title}. Our academic counselor in Hyderabad will reach out with batch timings, fee structures, and customized learning tracks.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs underline text-[#F2C94C] hover:text-white pt-2 inline-block"
                  >
                    Submit another query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#F2C94C]">
                      ENROLLMENT & SYLLABUS REQUEST
                    </span>
                    <h3 className="font-serif text-2xl font-normal mt-1">
                      Request Course Syllabus
                    </h3>
                    <p className="text-xs text-white/70 mt-1 font-light">
                      Connect with our counselors for batch start dates and classroom/online scheduling options.
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-xs focus:outline-none focus:border-[#F2C94C]"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-xs focus:outline-none focus:border-[#F2C94C]"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-xs focus:outline-none focus:border-[#F2C94C]"
                    />
                  </div>

                  {/* Mode Selector */}
                  <div className="pt-1">
                    <span className="text-xs text-white/80 block mb-2 font-medium">Preferred Mode:</span>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <label className={`p-2.5 rounded-xl border text-center cursor-pointer transition-colors ${
                        formData.learningMode === 'hybrid'
                          ? 'bg-[#F2C94C] text-[#183629] font-bold border-[#F2C94C]'
                          : 'bg-white/5 border-white/20 text-white hover:bg-white/10'
                      }`}>
                        <input
                          type="radio"
                          name="mode"
                          value="hybrid"
                          checked={formData.learningMode === 'hybrid'}
                          onChange={() => setFormData({ ...formData, learningMode: 'hybrid' })}
                          className="sr-only"
                        />
                        <span>Classroom (Hyd)</span>
                      </label>

                      <label className={`p-2.5 rounded-xl border text-center cursor-pointer transition-colors ${
                        formData.learningMode === 'online'
                          ? 'bg-[#F2C94C] text-[#183629] font-bold border-[#F2C94C]'
                          : 'bg-white/5 border-white/20 text-white hover:bg-white/10'
                      }`}>
                        <input
                          type="radio"
                          name="mode"
                          value="online"
                          checked={formData.learningMode === 'online'}
                          onChange={() => setFormData({ ...formData, learningMode: 'online' })}
                          className="sr-only"
                        />
                        <span>Live Online</span>
                      </label>
                    </div>
                  </div>

                  {/* Yellow Primary Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 rounded-full bg-[#F2C94C] text-[#183629] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#DFAE22] hover:text-[#102A21] transition-all disabled:opacity-50 shadow-md mt-4"
                  >
                    <span>{submitting ? 'Submitting...' : 'Request Syllabus & Schedule'}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>

                  <p className="text-[11px] text-white/60 text-center pt-2">
                    Or call our Hyderabad campus directly at{' '}
                    <a href={`tel:${siteData.brand.rawPhone}`} className="text-[#F2C94C] underline">
                      {siteData.brand.phone}
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Explore Other Tracks Strip */}
      <section className="px-6 sm:px-12 lg:px-16 py-12 border-t border-stone-200/80">
        <div className="max-w-[1360px] mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#DFAE22]">
                DISCOVER MORE PROGRAMS
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#183629] font-normal mt-1">
                Explore Other Professional Tracks
              </h3>
            </div>
            <Link
              to="/and/courses"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#183629] hover:text-[#DFAE22] transition-colors"
            >
              <span>View All Tracks</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {siteData.courses
              .filter(c => c.slug !== course.slug)
              .slice(0, 3)
              .map(c => (
                <Link
                  key={c.id}
                  to={`/and/courses/${c.slug}`}
                  className="group relative bg-white rounded-[32px] p-7 sm:p-8 border border-stone-200/90 hover:border-[#183629]/30 shadow-[0_10px_30px_-10px_rgba(24,54,41,0.06)] hover:shadow-[0_25px_50px_-15px_rgba(24,54,41,0.14)] transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[380px] hover:-translate-y-1.5 focus:outline-none focus:ring-2 focus:ring-[#F2C94C]"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />
                  <div className="relative z-10 space-y-4">
                    <span className="font-mono text-xs font-bold tracking-widest text-[#183629] uppercase">
                      VG • TRACK 0{c.number}
                    </span>
                    <h4 className="font-sans text-2xl sm:text-3xl font-light text-[#183629] tracking-tight leading-[1.15] pt-1">
                      {c.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#202923]/75 font-light leading-relaxed line-clamp-2">
                      {c.description}
                    </p>
                    <div className="pt-2">
                      <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/85 hover:bg-white backdrop-blur-md border border-stone-200/70 shadow-[0_4px_16px_rgba(0,0,0,0.04)] group-hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)] transition-all duration-300">
                        <span className="text-xs font-medium text-[#183629] tracking-tight">Explore Track</span>
                        <span className="w-6 h-6 rounded-full bg-white border border-stone-200/80 flex items-center justify-center text-[#183629] shadow-xs group-hover:bg-[#183629] group-hover:text-white transition-all duration-300">
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="relative mt-8 pt-4 z-10">
                    <div className="absolute -bottom-8 -right-8 w-44 h-32 rounded-tl-[80px] bg-gradient-to-tl from-[#B2E869]/30 to-transparent backdrop-blur-md border-t border-l border-white/70 pointer-events-none group-hover:scale-105 transition-transform duration-700" />
                    <div className="pt-3 border-t border-stone-200/60 flex items-center justify-between text-xs">
                      <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-[#183629]">
                        100% PRACTICAL
                      </span>
                      <span className="font-bold text-[11px] text-[#183629]">
                        {c.duration}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
