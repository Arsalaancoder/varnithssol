import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Clock, BarChart3, Award, Sparkles, Send } from 'lucide-react';

export default function CourseDetailModal({ course, isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    learningMode: 'hybrid',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!course) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate API persistence
    setTimeout(() => {
      const stored = JSON.parse(localStorage.getItem('varnith_course_inquiries') || '[]');
      stored.push({
        course: course.title,
        ...formData,
        date: new Date().toISOString()
      });
      localStorage.setItem('varnith_course_inquiries', JSON.stringify(stored));
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 260 }}
            className="relative w-full max-w-4xl bg-[#EAF0E8] rounded-3xl sm:rounded-[32px] overflow-hidden shadow-2xl border border-[#173B2C]/20 z-10 max-h-[90vh] flex flex-col"
          >
            {/* Header Image Strip */}
            <div className="relative h-56 sm:h-64 w-full shrink-0 overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102A21] via-[#102A21]/60 to-transparent" />
              
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/40 text-white hover:bg-black/70 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="px-3 py-1 rounded-full bg-[#899C75] text-[#102A21] text-xs font-bold uppercase tracking-wider">
                  {course.category}
                </span>
                <h3 className="font-serif text-2xl sm:text-4xl font-normal mt-2">
                  {course.title}
                </h3>
                <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-white/80">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#899C75]" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <BarChart3 className="w-3.5 h-3.5 text-[#899C75]" />
                    {course.level}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-[#899C75]" />
                    Certified
                  </span>
                </div>
              </div>
            </div>

            {/* Scrollable Body */}
            <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
              {/* Overview */}
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-[#737D73] mb-2">
                  Program Overview
                </h4>
                <p className="text-[#202923] text-base leading-relaxed">
                  {course.description}
                </p>
              </div>

              {/* Curriculum Highlights */}
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-[#737D73] mb-4">
                  Curriculum Highlights & Hands-On Labs
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {course.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-[#F4F5EF] border border-[#173B2C]/10 flex items-start gap-3"
                    >
                      <CheckCircle className="w-4 h-4 text-[#173B2C] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[#202923] font-medium leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Audience & Certification */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-[#F4F5EF] border border-[#173B2C]/10">
                  <h5 className="text-xs uppercase tracking-wider font-bold text-[#173B2C] mb-1">
                    Who Should Enroll
                  </h5>
                  <p className="text-xs text-[#202923]/80">
                    {course.targetAudience}
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#F4F5EF] border border-[#173B2C]/10">
                  <h5 className="text-xs uppercase tracking-wider font-bold text-[#173B2C] mb-1">
                    Certification
                  </h5>
                  <p className="text-xs text-[#202923]/80">
                    {course.certification}
                  </p>
                </div>
              </div>

              {/* Inquire / Enroll Form */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#173B2C] to-[#102A21] text-white">
                {submitted ? (
                  <div className="text-center py-6 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-[#899C75]/30 text-[#899C75] mx-auto flex items-center justify-center">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <h5 className="font-serif text-2xl font-normal">
                      Enquiry Received!
                    </h5>
                    <p className="text-xs sm:text-sm text-white/80 max-w-md mx-auto">
                      Thank you for your interest in {course.title}. Our academic counselor will reach out to you within 24 hours with syllabus details and schedule options.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs underline text-[#899C75] hover:text-white pt-2 inline-block"
                    >
                      Submit another enquiry
                    </button>
                  </div>
                ) : (
                  <div>
                    <h5 className="font-serif text-xl sm:text-2xl font-normal mb-1">
                      Request Course Syllabus & Schedule
                    </h5>
                    <p className="text-xs text-white/70 mb-5">
                      Connect with our Hyderabad counselors for batch timings, fee structures, and customized learning tracks.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <input
                          type="text"
                          required
                          placeholder="Your Name *"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-xs focus:outline-none focus:border-[#899C75]"
                        />
                        <input
                          type="email"
                          required
                          placeholder="Email Address *"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-xs focus:outline-none focus:border-[#899C75]"
                        />
                        <input
                          type="tel"
                          required
                          placeholder="Phone Number *"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-xs focus:outline-none focus:border-[#899C75]"
                        />
                      </div>

                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
                        <div className="flex items-center gap-3 text-xs text-white/80">
                          <span className="font-medium">Mode:</span>
                          <label className="flex items-center gap-1.5 cursor-pointer">
                            <input
                              type="radio"
                              name="mode"
                              value="hybrid"
                              checked={formData.learningMode === 'hybrid'}
                              onChange={() => setFormData({ ...formData, learningMode: 'hybrid' })}
                              className="accent-[#899C75]"
                            />
                            <span>Classroom (Hyd)</span>
                          </label>
                          <label className="flex items-center gap-1.5 cursor-pointer">
                            <input
                              type="radio"
                              name="mode"
                              value="online"
                              checked={formData.learningMode === 'online'}
                              onChange={() => setFormData({ ...formData, learningMode: 'online' })}
                              className="accent-[#899C75]"
                            />
                            <span>Live Online</span>
                          </label>
                        </div>

                        <button
                          type="submit"
                          disabled={submitting}
                          className="px-6 py-2.5 rounded-full bg-[#899C75] text-[#102A21] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#9cb087] transition-all disabled:opacity-50"
                        >
                          {submitting ? (
                            <span>Sending...</span>
                          ) : (
                            <>
                              <span>Enquire Now</span>
                              <Send className="w-3.5 h-3.5" />
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
